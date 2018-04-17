<template>
  <div class="card">

    <div class="content">
      <div class="image">
        <slot name="image">

        </slot>
      </div>
      <div class="footer">

        <div class="stats">
          <slot name="footer"></slot>
        </div>
        <div class="pull-right">
        </div>
      </div>
    </div>

  </div>
</template>
<script>
  export default {
    name: 'chart-card',
    props: {
      footerText: {
        type: String,
        default: ''
      },
      headerTitle: {
        type: String,
        default: 'Chart title'
      },
    },
    data () {
      return {
      }
    },
    methods: {
    
      
    },
    mounted () {

    }
  }

</script>
<style scoped>
.card{
  height: 62vh;
}

</style>
