<template>
  <v-card>
    <v-card-title>Sample text</v-card-title>
    <v-card-text>
      <p>dialog showing = {{ showing }}</p>
      <v-dialog v-model="showing">
        <template v-slot:activator="{ props: activatorProps }">
          <v-btn v-bind="activatorProps">push me</v-btn>
        </template>
        <v-card>
          <v-card-title>dialog card</v-card-title>
        </v-card>
      </v-dialog>
    </v-card-text>
  </v-card>
</template>

<script lang="ts">

import {Component, Vue} from 'vue-facing-decorator'

@Component
export default class HelloWorld extends Vue {
  public showing: boolean = false;
}

</script>
