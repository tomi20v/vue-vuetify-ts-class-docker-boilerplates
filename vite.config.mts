// Plugins
// import Components from 'unplugin-vue-components/vite'
import Vue from '@vitejs/plugin-vue'
import Vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import ViteFonts from 'unplugin-fonts/vite'
import vueFacingDecoratorHmr from "vite-plugin-vue-facing-decorator-hmr";

// Utilities
import { defineConfig } from 'vite'
import { fileURLToPath, URL } from 'node:url'
import {resolve} from "node:path";
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      formats: [
        'es',
        // 'esm',
        // 'umd',
      ],
      // #INSTALL change these names
      name: 'vue-vuetify-lib',
      // fileName: 'vue-vuetify-lib',
      fileName: 'index',
    },
    rollupOptions: {
      external: [
        'vue',
        'vuetify',
        'vue-facing-decorator',
        // 'vuex',
        // 'vuex-facing-decorator',
      ],
      output: {
        globals: {
          vue: 'Vue',
          vuetify: "Vuetify",
          'vuetify/components': 'VuetifyComponents',
          'vuetify/directives': 'VuetifyDirectives',        },
        // sourcemap: "inline"
        // sourcemap: true
      },
    },
  },
  plugins: [
    Vue({
      template: { transformAssetUrls },
    }),
    // https://github.com/vuetifyjs/vuetify-loader/tree/master/packages/vite-plugin#readme
    Vuetify(),
    // Components(),
    ViteFonts({
      google: {
        families: [{
          name: 'Roboto',
          styles: 'wght@100;300;400;500;700;900',
        }],
      },
    }),
    vueFacingDecoratorHmr(),
    dts(),
  ],
  define: { 'process.env': {} },
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
    extensions: [
      '.mjs',
      '.js',
      '.mts',
      '.ts',
      '.jsx',
      '.tsx',
      '.json',
      '.vue',
    ],
  },
  server: {
    host: true,
    port: 3000,
  },
  preview: {
    host: true,
    port: 3000,
  }
})
