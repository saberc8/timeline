<template>
  <div class="container">
    <div class="triangle">
      <div class="items">
        <div class="triangle-up"></div>
        <div class="hr"></div>
        <div class="triangle-down"></div>
      </div>
    </div>
    <div class="timeline">
      <div class="items" v-for="(item, index) in dataList" :key="index">
        <div class="item dimg">
          {{item}}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      dataList: [1, 2, 3, 4]
    }
  }
}
</script>

<style scoped lang="scss">
.container {
  position: relative;
  .triangle {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: center;
    width:100vw;
    height: 90vh;
    .items {
      line-height: 50vh;
      .triangle-up {
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-top: 30px solid #f6f6f6;
      }
      .hr {
        height: 60px;
      }
      .triangle-down {
        width: 0;
        height: 0;
        border-left: 20px solid transparent;
        border-right: 20px solid transparent;
        border-bottom: 30px solid #f6f6f6;
      }
    }
  }
  .timeline {
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: first baseline;
    width:100vw;
    height: 90vh;
    .items {
      line-height: 60vh;
      .item {
        width: 500px;
      }
    }
  }
}
.dimg{
position:relative;
animation:mymove 5s infinite;
-webkit-animation:mymove 5s infinite; /*Safari and Chrome*/
}

@keyframes mymove
{
from {left:0px;}
to {left:200px;}
}

@-webkit-keyframes mymove /*Safari and Chrome*/
{
from {left:0px;}
to {left:200px;}
}
</style>
