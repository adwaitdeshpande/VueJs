<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title class="toolbar-name">
          Adwait Deshpande
        </q-toolbar-title>

        <div class="toolbar-name">Welcome to my Introduction Page</div>
      </q-toolbar>
    </q-header>

    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
    >
      <q-list>
        <q-item-label
          header
        >
          Essential Links
        </q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>
<style>
.toolbar-name{
  font-family: 'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif;
}
</style>
<script>
import { defineComponent, ref } from 'vue'
import EssentialLink from 'components/EssentialLink.vue'

const linksList = [
  {
    title: 'About',
    caption: 'About Me page',
    icon: 'school',
    link: 'http://localhost/#/about'

  },

  {
    title: 'LinkedIn',
    caption: 'Adwait LinkedIn',
    icon: 'public',
    link: 'https://www.linkedin.com/in/adwait-deshpande-ab02961b2/'
  },
  {
    title: 'Instagram',
    caption: 'Instagram Art page',
    icon: 'public',
    link: 'https://www.instagram.com/adwaitart/'

  },
]

export default defineComponent({
  name: 'MainLayout',

  components: {
    EssentialLink
  },

  setup () {
    const leftDrawerOpen = ref(false)

    return {
      essentialLinks: linksList,
      leftDrawerOpen,
      toggleLeftDrawer () {
        leftDrawerOpen.value = !leftDrawerOpen.value
      }
    }
  }
})
</script>
