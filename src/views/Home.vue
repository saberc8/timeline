<template>
  <div class="home">
    <time-line/>
    <Live2d/>
  </div>
</template>

<script>
// @ is an alias to /src
import TimeLine from '@/components/TimeLine.vue'
import Live2d from '@/components/Live2d'

export default {
  name: 'home',
  components: {
    TimeLine,
    Live2d
  },
  mounted () {
  },
  methods: {

  }
}
</script>
