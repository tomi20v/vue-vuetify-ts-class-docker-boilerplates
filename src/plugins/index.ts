/**
 * plugins/index.ts
 *
 * Automatically included in `./src/main.ts`
 */

// Plugins
import vuetify from './vuetify'
import type {App} from "vue";
import vuex from "./vuex";

export function registerPlugins (app: App) {
  app.use(vuetify);
  app.use(vuex);
}
