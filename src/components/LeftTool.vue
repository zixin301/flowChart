<template>
    <div id="leftTool">
        <div class="baseGraphics">
            <h2>基础图形</h2>
            <div class="graphics">
                <!-- <div class="grop" draggable="true" v-for="{item, index} in listData" :key="index" @dragstart="selNode(item.type)" @dragend="nodeDragEnd">
                    <icon :name='item.type' :size="30"></icon>
                </div> -->
            </div>
        </div>
        <!-- <floating-figure/> -->
    </div>
</template>

<script>
import { mapMutations, mapState } from "vuex";

export default {
  name: "LeftTool",
  //   components: { Graphics, FloatingFigure },
  data() {
    return {
      listData: [
        {
          type: "start",
          title: "开始"
        },
        {
          type: "process",
          title: "流程"
        },
        {
          type: "decision",
          title: "判断"
        },
        {
          type: "document",
          title: "文档"
        },
        {
          type: "terminator",
          title: "终端"
        },
        {
          type: "data",
          title: "数据"
        },
        {
          type: "manualInput",
          title: "输入"
        },
        {
          type: "storeData",
          title: "状态数据"
        }
      ]
    };
  },
  methods: {
    ...mapMutations("flow", ["SEL_NODETYPE", "SET_DRAGGING", "SET_INDRAWAREA"]),

    selNode(type) {
      this.SEL_NODETYPE(type);
      event.dataTransfer.setData("Text", "add");
    },
    nodeDragEnd() {
      if (this.selNodeType) {
        this.SEL_NODETYPE("");
      }
    }
  }
};
</script>

<style scoped>
#leftTool {
  width: 350px;
  height: 100%;
}
.baseGraphics {
  width: 350px;
  height:100%;
  box-sizing: border-box;
  bottom: 0;
  overflow: auto;
  background: whiteSmoke;
  box-shadow: -1px 0px 5px #bbb inset;
  border-right: 1px solid #ddd;
}
.graphics {
  display: flex;
}
.grop {
  width: 36px;
  height: 36px;
  overflow: hidden;
  cursor: move;
  background: none;
  margin-left: 10px;
}
</style>
