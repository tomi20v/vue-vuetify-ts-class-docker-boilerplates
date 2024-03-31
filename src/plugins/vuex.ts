import {createLogger, createStore} from 'vuex';
import modules from "../store";

const debug = process.env.NODE_ENV !== 'production'

export default createStore({
  modules,
  strict: debug,
  plugins: debug ? [createLogger()] : [],
});
