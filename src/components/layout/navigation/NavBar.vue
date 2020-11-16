<template>
  <div><nav-link :nav="link" v-for="(link, index) in links" :key="index" /></div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator'
import NavLinkClass from 'src/App/Model/Navigation/NavLink';
import NavLink from "components/layout/navigation/NavLink.vue";
import Icon from "src/App/Model/Primitives/Icon";
import Link from "src/App/Model/Primitives/Link";
@Component({
  components: { NavLink }
})
export default class NavBar extends Vue {
  links: NavLinkClass[] = [];

  mounted () {
    this.setNavLinks();
  }

  setNavLinks () {
    this.links.push(new NavLinkClass('Home', new Icon('home'), new Link('home')))
    this.links.push(new NavLinkClass('Configurações', new Icon('cog'), new Link('configuration')))
  }
}
</script>

<style scoped>

</style>
