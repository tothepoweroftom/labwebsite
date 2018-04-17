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
        <div class="menu-btn">
  
        </div>
        <button class="hamburger hamburger--collapse" type="button">
              <span class="hamburger-box" >
                <span class="hamburger-inner"></span>
              </span>
            </button>
      </div>
  
  
      <!-- Sort of responsive navbar/sidebar depending on web/,mobile -->
      <ul :class="navClasses">
        <!--By default vue-router adds an active class to each route link. This way the links are colored when clicked-->
        <li v-for="(link,index) in sidebarLinks" :key="link.name + index">
  
          <!-- Link -->
          <button type="button" class="btn btn-link btn-sidebar btn-sm">
  
            <h5 style="font-size: 30px; letter-spacing: 0.04em; font-family: 'LabBold';">
              {{link.name}}
            </h5>
    
           </button>
          <!-- sublinks -->
          <ul>
            <li v-for="(sublink,index) in link.sublinks" :key="sublink + index">
              <a class="sublink">
                {{sublink}}
              </a>
            </li>
          </ul>
  
  
        </li>
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
    components: {},
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
        hasAutoHeight: false,
  
        projects: [
          'Alexa X Dos Equis',
          'Smartify',
          'Blockchain Mint Plant'
        ]
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
  
      // Look for .hamburger
      var hamburger = document.querySelector(".hamburger");
      // On click
      hamburger.addEventListener("click", function() {
        // Toggle class "is-active"
        hamburger.classList.toggle("is-active");
        // Do something else, like open/close menu
      });
    },
    watch: {
      $route: function(newRoute, oldRoute) {
        this.findActiveLink()
      }
    }
  }
</script>

<style scoped>
  .hamburger-inner,
  .hamburger-inner::before,
  .hamburger-inner::after {
    background: snow;
    width: 30px;
  }
  
  .hamburger {
    padding-left: 47px;
  }

  .btn-sidebar {
    border: 0px;
    height: 45px;
    background: transparent;
    color: rgba(255, 255, 255, 0.801);
  }

    .btn-sidebar:hover, .btn-sidebar:active {
      background-color: transparent;

  }

  .sublink {
    font-size: 12px; letter-spacing: 0.04em; font-family: 'Graphik'; color: rgba(220, 220, 220, 0.815);
    padding-left: 0px !important;
  }
</style>
