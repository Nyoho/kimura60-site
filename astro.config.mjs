import { defineConfig } from 'astro/config';

// https://astro.build/config
import compress from "astro-compress";

// https://astro.build/config
export default defineConfig({
  base: '/nyoho/kimura60',
  integrations: [compress()]
});