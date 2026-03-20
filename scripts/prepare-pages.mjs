import { copyFileSync, existsSync } from "node:fs";
import { resolve } from "node:path";

const distDir = resolve(process.cwd(), "dist");
const indexHtmlPath = resolve(distDir, "index.html");
const fallbackHtmlPath = resolve(distDir, "404.html");

if (!existsSync(indexHtmlPath)) {
  throw new Error(`Cannot create GitHub Pages fallback because ${indexHtmlPath} does not exist.`);
}

copyFileSync(indexHtmlPath, fallbackHtmlPath);
console.log("Created GitHub Pages SPA fallback at dist/404.html");
