import assert from "node:assert/strict";
import { access, readFile } from "node:fs/promises";
import test from "node:test";

const templateRoot = new URL("../", import.meta.url);

async function render(path = "/") {
  const workerUrl = new URL("../dist/server/index.js", import.meta.url);
  workerUrl.searchParams.set("test", `${process.pid}-${Date.now()}`);
  const { default: worker } = await import(workerUrl.href);

  return worker.fetch(
    new Request(`http://localhost${path}`, {
      headers: { accept: "text/html" },
    }),
    {
      ASSETS: {
        fetch: async () => new Response("Not found", { status: 404 }),
      },
    },
    {
      waitUntil() {},
      passThroughOnException() {},
    },
  );
}

test("server-renders the HeatOptx homepage", async () => {
  const response = await render();
  assert.equal(response.status, 200);
  assert.match(response.headers.get("content-type") ?? "", /^text\/html\b/i);

  const html = await response.text();
  assert.match(html, /<title>HeatOptx - Industrial Thermal AI<\/title>/i);
  assert.match(html, /Industrial Thermal AI for hidden heat loss/i);
  assert.match(html, /HeatOptx Map/);
  assert.match(html, /HeatOptx Detect/);
  assert.match(html, /HeatOptx ROI/);
  assert.match(html, /Request ROI assessment/);
  assert.doesNotMatch(html, /codex-preview|Your site is taking shape|react-loading-skeleton/i);
});

test("uses finished HeatOptx assets and removes starter preview files", async () => {
  const [page, layout, packageJson] = await Promise.all([
    readFile(new URL("../app/page.tsx", import.meta.url), "utf8"),
    readFile(new URL("../app/layout.tsx", import.meta.url), "utf8"),
    readFile(new URL("../package.json", import.meta.url), "utf8"),
  ]);

  assert.match(page, /heatoptx-logo-horizontal\.svg/);
  assert.match(page, /plant-thermal-loss-map\.svg/);
  assert.match(page, /Request demo/);
  assert.match(layout, /HeatOptx - Industrial Thermal AI/);
  assert.doesNotMatch(layout, /Starter Project|codex-preview|_sites-preview/);
  assert.doesNotMatch(packageJson, /react-loading-skeleton/);

  await access(new URL("../public/favicon.svg", import.meta.url));
  await access(new URL("../public/favicon.ico", import.meta.url));
  await access(new URL("../public/brand/heatoptx-logo-horizontal.svg", import.meta.url));
  await assert.rejects(access(new URL("../app/_sites-preview", import.meta.url)));
  await assert.rejects(access(new URL("public/_sites-preview", templateRoot)));
});

test("server-renders the HeatOptx sign-in page", async () => {
  const response = await render("/sign-in");
  assert.equal(response.status, 200);

  const html = await response.text();
  assert.match(html, /<title>Sign In - HeatOptx<\/title>/i);
  assert.match(html, /Access HeatOptx/);
  assert.match(html, /Plant A thermal assessment/);
  assert.match(html, /Request an ROI assessment/);
});
