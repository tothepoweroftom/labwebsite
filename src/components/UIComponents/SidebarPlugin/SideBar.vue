<template>
  <div :class="sidebarClasses" :data-background-color="backgroundColor" :data-active-color="activeColor">
    <!--
                        Tip 1: you can change the color of the sidebar's background using: data-background-color="white | black | darkblue"
                        Tip 2: you can change the color of the active button using the data-active-color="primary | info | success | warning | danger"
                    -->
    <!-- -->
    <div class="sidebar-wrapper" id="style-2">
      <div class="logo">
        <a href="#" class="simple-text">
          <div class="logo-img">
            <img src="static/img/Mobgen-Logo.png" alt="">
          </div>
        </a>
      </div>
      <slot>
  
      </slot>
      <ul :class="navClasses">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <router-link v-for="(link,index) in sidebarLinks" :to="link.path" tag="li" :ref="link.name" :key="link.name + index">
          <a>
  
            <p style="font-size: 30px;">{{link.name}}
            </p>
          </a>
        </router-link>
      </ul>
  
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      type: {
        type: String,
        default: 'sidebar',
        validator: (value) => {
          let acceptedValues = ['sidebar', 'navbar']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      backgroundColor: {
        type: String,
        default: 'black',
        validator: (value) => {
          let acceptedValues = ['white', 'black', 'darkblue']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      activeColor: {
        type: String,
        default: 'success',
        validator: (value) => {
          let acceptedValues = ['primary', 'info', 'success', 'warning', 'danger', 'white']
          return acceptedValues.indexOf(value) !== -1
        }
      },
      sidebarLinks: {
        type: Array,
        default: () => []
      }
    },
    components: {
    },
    computed: {
      sidebarClasses() {
        if (this.type === 'sidebar') {
          return 'sidebar'
        } else {
          return 'collapse navbar-collapse off-canvas-sidebar'
        }
      },
      navClasses() {
        if (this.type === 'sidebar') {
          return 'nav'
        } else {
          return 'nav navbar-nav'
        }
      },

    },
    data() {
      return {
        linkHeight: 60,
        activeLinkIndex: 0,
  
        windowWidth: 0,
        isWindows: false,
        hasAutoHeight: false
      }
    },
    methods: {
      findActiveLink() {
        this.sidebarLinks.find((element, index) => {
          let found = element.path === this.$route.path
          if (found) {
            this.activeLinkIndex = index
          }
          return found
        })
      }
    },
    mounted() {
      this.findActiveLink()
    },
    watch: {
      $route: function(newRoute, oldRoute) {
        this.findActiveLink()
      }
    }
  }
</script>

<style>
  
</style>
