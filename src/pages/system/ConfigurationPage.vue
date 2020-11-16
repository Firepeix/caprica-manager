<template>
  <q-page class="flex">
    <div class="row full-width">
      <div class="col">
        <q-card class="q-ma-lg">
          <q-card-section>
            <div class="row">
              <div class="col-2 page-title">
                <q-icon name="mdi-cog"/>
                <h4> Configurações</h4>
              </div>
              <div class="col">
              </div>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <div class="row">
              <div class="col">
                <configuration-form />
              </div>
            </div>
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import ConfigurationForm from "components/system/configuration/ConfigurationForm.vue";
@Component({
  components: {ConfigurationForm}
})
export default class ConfigurationPage extends Vue {
}
</script>

<style scoped >

</style>
