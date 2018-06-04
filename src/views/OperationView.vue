<template>
    <div id="operation">
        <left-tool></left-tool>
        <right-drawing-area></right-drawing-area>
    </div>
</template>

<script>
import LeftTool from '../components/LeftTool'
import RightDrawingArea from '../components/RightDrawingArea'
export default {
  components: { LeftTool, RightDrawingArea }
}
</script>

<style scoped>
    #operation{
        width:100%;
        height:100%;
        display: flex;
    }
</style>
