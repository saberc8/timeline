<template>
  <div class="home">
    222
    <time-line/>
    <Live2d/>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeLine from '@/components/TimeLine.vue'
import Live2d from '@/components/Live2d'
import config from '@/utils/config'

export default {
  name: 'home',
  components: {
    TimeLine,
    Live2d
  },
  mounted () {
    console.log(config)
  },
  methods: {

  }
}
</script>
