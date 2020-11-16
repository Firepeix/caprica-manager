<template>
  <q-btn :to="{ name: nav.link.name }" flat :icon="nav.icon.name" :label="nav.name"></q-btn>
</template>

<script lang="ts">
import { Vue, Component, Prop } from 'vue-property-decorator'
import { NavLinkInterface } from 'src/App/Interface/Navigation/NavLinkInterface';

@Component
export default class NavLink extends Vue {
  @Prop({ type: Object, required: true }) readonly nav!: NavLinkInterface;
}
</script>

<style scoped>

</style>
