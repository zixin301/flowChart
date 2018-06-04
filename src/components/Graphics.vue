<template>
    <div class="graphics">
        <canvas v-for="item in items" width="30px" height="30px" :title = 'item.text' v-on:mousemove='touMove($event)'></canvas>
    </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  name: "Graphics",
  data() {
    return {}
  },
  computed:{
    ...mapState({
      items: state => state.graphics.items
    })
  },
  mounted() {
    var canvas = document.getElementsByTagName("canvas");
    for (let i = 0; i < this.items.length; i++) {
      var ctx = canvas[i].getContext("2d");
      switch (this.items[i].type) {
        case "fillRect":
          fillRectDraw(ctx, this.items[i].data);
          break;
        case "arc":
          arcDraw(ctx, this.items[i].data);
          break;
        default:
          break;
      }
    }
    function fillRectDraw(ctx, data) {
      ctx.rect(data[0], data[1], data[2], data[3]);
      ctx.stroke();
    }
    function arcDraw(ctx, data) {
      ctx.beginPath();
      ctx.arc(data[0], data[1], data[2], data[3], data[4]);
      ctx.stroke();
    }
  },
  methods: {
    touMove:function(event){
      console.log(event.currentTarget);
    }
  }
};
</script>

<style scoped>
.graphics {
  display: flex;
  justify-content: space-around;
}
</style>
