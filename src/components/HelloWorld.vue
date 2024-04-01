<template>
  <v-card>
    <v-card-title>Sample prop: {{someProp}}</v-card-title>
    <v-card-text>
      <section>
        <p>dialog showing = {{ showing }}</p>
        <v-dialog v-model="showing">
          <template v-slot:activator="{ props: activatorProps }">
            <v-btn v-bind="activatorProps">push me</v-btn>
          </template>
          <v-card>
            <v-card-title>dialog card</v-card-title>
          </v-card>
        </v-dialog>
      </section>

    </v-card-text>
  </v-card>
</template>

<script lang="ts">

import {Component, Prop, Vue} from 'vue-facing-decorator'

@Component
export default class HelloWorld extends Vue {

  @Prop()
  someProp!: string;

  showing: boolean = false;

}

</script>
