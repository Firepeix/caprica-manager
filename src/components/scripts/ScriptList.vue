<template>
  <div class="row q-gutter-md justify-between">
    <div class="col-4" style="width: 30%" v-for="(script, index) in scripts" :key="`script-${index}`">
      <user-script :script="script"/>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserScript from './UserScript.vue';
import ScriptInterface from 'src/App/Interface/Script/ScriptInterface';
import FileSystem from 'fs';
import Script from 'src/App/Model/Script/Script';

@Component({
  components: { UserScript }
})
export default class ScriptList extends Vue {
  scripts: ScriptInterface[] = []
  mounted () {
    this.$nextTick(() => {
      this.index();
    })
  }

  index () {
    this.scripts = [];
    this.setScripts();
    console.log('1')
  }

  setScripts () {
    const scriptsFolder = this.$q.localStorage.getItem('scriptsFolder');
    FileSystem.readdir(scriptsFolder, (error, files) => {
      this.scripts = files.map(name => this.__createScriptFromFile(name, `${scriptsFolder}\\${name}`))
      console.log(error)
    });
  }

  __createScriptFromFile (name: string, path: string) : ScriptInterface {
    return new Script(name.split('.')[0], path, this.$q.localStorage)
  }
}
</script>

<style scoped>

</style>
