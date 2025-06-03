// vite.config.js
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///D:/Project_Manager/JimM0011.github.io/node_modules/vite/dist/node/index.js";
import vue from "file:///D:/Project_Manager/JimM0011.github.io/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import mdx from "file:///D:/Project_Manager/JimM0011.github.io/node_modules/@mdx-js/rollup/index.js";
import remarkMath from "file:///D:/Project_Manager/JimM0011.github.io/node_modules/remark-math/index.js";
import rehypeKatex from "file:///D:/Project_Manager/JimM0011.github.io/node_modules/rehype-katex/index.js";
import remarkGfm from "file:///D:/Project_Manager/JimM0011.github.io/node_modules/remark-gfm/index.js";
var __vite_injected_original_import_meta_url = "file:///D:/Project_Manager/JimM0011.github.io/vite.config.js";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    mdx({
      jsxImportSource: "vue",
      remarkPlugins: [
        remarkMath,
        remarkGfm
      ],
      rehypePlugins: [
        rehypeKatex
      ]
    })
  ],
  base: "/",
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJEOlxcXFxQcm9qZWN0X01hbmFnZXJcXFxcSmltTTAwMTEuZ2l0aHViLmlvXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJEOlxcXFxQcm9qZWN0X01hbmFnZXJcXFxcSmltTTAwMTEuZ2l0aHViLmlvXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9EOi9Qcm9qZWN0X01hbmFnZXIvSmltTTAwMTEuZ2l0aHViLmlvL3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuXHJcbmltcG9ydCBtZHggZnJvbSAnQG1keC1qcy9yb2xsdXAnXHJcbmltcG9ydCByZW1hcmtNYXRoIGZyb20gJ3JlbWFyay1tYXRoJztcclxuaW1wb3J0IHJlaHlwZUthdGV4IGZyb20gJ3JlaHlwZS1rYXRleCc7XHJcbmltcG9ydCByZW1hcmtHZm0gZnJvbSAncmVtYXJrLWdmbSc7XHJcblxyXG4vLyBodHRwczovL3ZpdGVqcy5kZXYvY29uZmlnL1xyXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xyXG4gIHBsdWdpbnM6IFtcclxuICAgIHZ1ZSgpLFxyXG4gICAgbWR4KHtcclxuICAgICAganN4SW1wb3J0U291cmNlOiAndnVlJyxcclxuICAgICAgcmVtYXJrUGx1Z2luczogW1xyXG4gICAgICAgIHJlbWFya01hdGgsXHJcbiAgICAgICAgcmVtYXJrR2ZtLFxyXG4gICAgICBdLFxyXG4gICAgICByZWh5cGVQbHVnaW5zOiBbXHJcbiAgICAgICAgcmVoeXBlS2F0ZXgsXHJcbiAgICAgIF0sXHJcbiAgICB9KSxcclxuICBdLFxyXG4gIGJhc2U6Jy8nLFxyXG4gIHJlc29sdmU6IHtcclxuICAgIGFsaWFzOiB7XHJcbiAgICAgICdAJzogZmlsZVVSTFRvUGF0aChuZXcgVVJMKCcuL3NyYycsIGltcG9ydC5tZXRhLnVybCkpXHJcbiAgICB9XHJcbiAgfSxcclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUF1UyxTQUFTLGVBQWUsV0FBVztBQUUxVSxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFFaEIsT0FBTyxTQUFTO0FBQ2hCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8saUJBQWlCO0FBQ3hCLE9BQU8sZUFBZTtBQVJpSyxJQUFNLDJDQUEyQztBQVd4TyxJQUFPLHNCQUFRLGFBQWE7QUFBQSxFQUMxQixTQUFTO0FBQUEsSUFDUCxJQUFJO0FBQUEsSUFDSixJQUFJO0FBQUEsTUFDRixpQkFBaUI7QUFBQSxNQUNqQixlQUFlO0FBQUEsUUFDYjtBQUFBLFFBQ0E7QUFBQSxNQUNGO0FBQUEsTUFDQSxlQUFlO0FBQUEsUUFDYjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxNQUFLO0FBQUEsRUFDTCxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLLGNBQWMsSUFBSSxJQUFJLFNBQVMsd0NBQWUsQ0FBQztBQUFBLElBQ3REO0FBQUEsRUFDRjtBQUNGLENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
