<template>
    <div id="leftTool">
        <div class="baseGraphics">
            <h2>基础图形</h2>
            <graphics></graphics>
        </div>
        <!-- <floating-figure/> -->
    </div>
</template>

<script>
import Graphics from './Graphics'
import FloatingFigure from './FloatingFigure'

export default {
  name: 'LeftTool',
  components: { Graphics,FloatingFigure},
  data () {
    return {}
  }
}
</script>

<style scoped>
#leftTool {
  width: 350px;
  height: 100%;
}
</style>
