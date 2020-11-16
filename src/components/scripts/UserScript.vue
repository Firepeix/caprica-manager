<template>
  <q-card @click="runScript" bordered flat :class="['text-white cursor-pointer relative-position', bgColor]" v-ripple>
    <q-card-section class="flex justify-center">
      <q-icon :name="script.icon.name" size="4rem" />
    </q-card-section>
    <q-card-section class="flex justify-center q-pt-none">
      <div class="script-title">{{ script.name }}</div>
    </q-card-section>
  </q-card>
</template>

<script lang="ts">
import {Vue, Component, Prop} from 'vue-property-decorator'
import ScriptInterface from "src/App/Interface/Script/ScriptInterface";

@Component
export default class UserScript extends Vue {
  @Prop({type: Object, required: true}) readonly script!: ScriptInterface;
  runScript() {
    this.script.run();
  }

  get bgColor () {
    return `bg-${this.script.color.name}`
  }
}
</script>

<style scoped lang="stylus">
.script-title
  font-size 3rem
  font-weight 600
</style>
