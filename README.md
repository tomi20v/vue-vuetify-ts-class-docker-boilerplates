# vue-vuetify-ts-class-docker-boilerplates

# Vue3 + Vuetify3 + typescript + class components + docker boilerplates 

Based on the original Vuetify 3 scaffold, various flavors

## The basic stack

- vue 3 - to migrate from 2
- vite - because it's fast
- vuetify 3 - some our projects use it
- vue-facing-decorator - because class syntax saved from inherently spaghetti code
- vite-plugin-vue-facing-decorator-hmr - to fix HMR with vue-facing-decorator
- docker-compose.yml - to easily spin up your container

## Flavors

- each flavor suits different needs as per type of app to build, eg. vue-buetify-lib serves as boilerplate to build
    libs with vue 3 and vuetify 3, and includes storybook for UI element testing
- flavors are separated on branches, see below
- universal transparent npm commands - ```npm run start``` and ```npm run serve``` are available in all flavors and
    serve to run the container in production/development mode

### with vuex - because separating actions from mutations is important
```git checkout vue-vuetify-vuex```

- vuex 4
- vuex-facing-decorator

### with storybook and vuex
```git checkout vue-vuetify-storybook```

- vuex 4
- vuex-facing-decorator
- storybook 8

### for building UI libs, with vuetify and storybook
```git checkout vue-vuetify-lib```

- storybook 8
- builds .tgz artifact
- runs storybook in dev mode by default

## 💿 Install

- clone/fork
- checkout the branch of the desired flavor
- start up the container ```docker-compose up```

After completing the installation, your environment is ready for development.

## 📑 License
[MIT](http://opensource.org/licenses/MIT)

Copyright (c) 2024-present tomi20v@github.com
