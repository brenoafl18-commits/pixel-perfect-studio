diff --git a/vite.config.ts b/vite.config.ts
index c9e1c37e19ca659aa6ff0442d6a90ee107572ba9..f20e5e9cb186cc11facf456659270c43494eb0c7 100644
--- a/vite.config.ts
+++ b/vite.config.ts
@@ -1,22 +1,23 @@
 import { defineConfig } from "vite";
 import react from "@vitejs/plugin-react-swc";
 import path from "path";
 import { componentTagger } from "lovable-tagger";
 
 // https://vitejs.dev/config/
 export default defineConfig(({ mode }) => ({
+  base: mode === "production" ? "/pixel-perfect-studio/" : "/",
   server: {
     host: "::",
     port: 8080,
     hmr: {
       overlay: false,
     },
   },
   plugins: [react(), mode === "development" && componentTagger()].filter(Boolean),
   resolve: {
     alias: {
       "@": path.resolve(__dirname, "./src"),
     },
     dedupe: ["react", "react-dom", "react/jsx-runtime", "react/jsx-dev-runtime", "@tanstack/react-query", "@tanstack/query-core"],
   },
 }));
