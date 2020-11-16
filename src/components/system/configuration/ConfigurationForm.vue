<template>
  <div class="row">
    <div class="col">
      <div class="row q-gutter-md">
        <div class="col-6">
          <q-file v-model="tempScriptFile" label="Scripts Folder" ref="reason" @input="changeScriptsFolder" dense>
            <template #file>
              <div>{{ scriptsFolder }}</div>
            </template>
            <template #append>
              <q-icon name="mdi-folder" />
            </template>
          </q-file>
        </div>
        <div class="col-2 flex column justify-end">
          <div>
            <q-btn @click="updateScriptsFolder" icon="mdi-arrow-up-thick"  dense color="positive">
              <q-tooltip>Update Scripts</q-tooltip>
            </q-btn>
            <q-btn class="q-ml-sm" @click="updateScriptsMetadata" icon="mdi-account"  dense color="red">
              <q-tooltip>Update Scripts Metadata</q-tooltip>
            </q-btn>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'

@Component
export default class ConfigurationForm extends Vue {
  scriptsFolder = '';
  tempScriptFile: File|null = null;

  changeScriptsFolder (file: File) {
    this.scriptsFolder = file.path.replace(`\\${file.name}`, '')
  }

  updateScriptsFolder () {
    this.$q.localStorage.set('scriptsFolder', this.scriptsFolder)
  }

  updateScriptsMetadata () {
    this.$q.localStorage.set('86894775709016b0770c6483ed2e21a0', { icon: 'vuejs', color: 'blue' })
    this.$q.localStorage.set('97064bd25361214db373cefa5532f2de', { icon: 'server-off', color: 'purple-6' })
    this.$q.localStorage.set('5b07557d17ffd046b56687b5cce7fbba', { icon: 'docker', color: 'light-blue' })
    this.$q.localStorage.set('ec9a9486f7f21e16392176195ef2e556', { icon: 'file-chart', color: 'green-8' })
    this.$q.localStorage.set('36bd0c70659527ef3fd9666a8cbcdd30', { icon: 'server', color: 'deep-purple-6' })
    this.$q.localStorage.set('8479a6056f5402cbc43aacc25e691c75', { icon: 'briefcase', color: 'red-7' })
  }
}
</script>

<style scoped>

</style>
