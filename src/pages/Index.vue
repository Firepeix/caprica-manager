<template>
  <q-page class="flex">
    <div class="row full-width">
      <div class="col">
        <q-card class="q-ma-lg">
          <q-card-section>
            <div class="row">
              <div class="col-2 page-title justify-center column flex">
                <div>
                  <q-icon name="mdi-home"/>
                  <h4> Home</h4>
                </div>
              </div>
              <div class="col flex column justify-center">
                <div class="row justify-end">
                  <div class="col-2 justify-center column flex">
                    <q-btn color="positive" icon="mdi-refresh" unelevated class="full-width" label="Update" @click="index"/>
                  </div>
                </div>
              </div>
            </div>
          </q-card-section>
          <q-separator/>
          <q-card-section>
            <script-list ref="list" />
          </q-card-section>
        </q-card>
      </div>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import UserScript from "components/scripts/UserScript.vue";
import ScriptList from "components/scripts/ScriptList.vue";

@Component({
  components: {ScriptList, UserScript }
})
export default class PageIndex extends Vue {
  index () {
    this.$refs.list.index();
  }
}
</script>
