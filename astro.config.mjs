import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: 'https://vuhaianh1990.github.io',
  base: '/wedding',
  integrations: [tailwind()],
});
