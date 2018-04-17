import Sidebar from './SideBar.vue'

const SidebarStore = {
  showSidebar: false,
  sidebarLinks: [
    {
      name: 'Projects',
      sublinks: [
        'Alexa X Dos Equis',
        'Smartify',
        'Audio Interface',
      ]
    },
    {
      name: 'Articles',
      sublinks: [
        'Plant Article'
      ]
    },
    {
      name: 'Videos',
      sublinks: [
        'Trained By Machines',
        'KLM'
      ]
    },
    {
      name: 'Posts',
      sublinks: [
        'Post 1',
        'Post 2'
      ]
    },
  ],
  displaySidebar (value) {
    this.showSidebar = value
  }
}

const SidebarPlugin = {

  install (Vue) {
    Vue.mixin({
      data () {
        return {
          sidebarStore: SidebarStore
        }
      }
    })

    Object.defineProperty(Vue.prototype, '$sidebar', {
      get () {
        return this.$root.sidebarStore
      }
    })
    Vue.component('side-bar', Sidebar)
  }
}

export default SidebarPlugin
