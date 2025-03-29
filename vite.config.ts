import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: "/elghoul/",
  // server: {
  //   headers: {
  //     "Cache-Control": "max-age=31536000, immutable",
  //   },
  // },
});
