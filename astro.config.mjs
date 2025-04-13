// @ts-check
import { defineConfig } from "astro/config";

import solidJs from "@astrojs/solid-js";

export default defineConfig({
  site: 'https://tavugosu.github.io',
  integrations: [solidJs()],
});
