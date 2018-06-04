<template>
    <div id="rightDrawingArea">
        <div  @dragover="allowDrop($event)" @drop="drop($event)" class = "div01">></div>
    </div>
</template>

<script>
    export default {
        name:'RightDrawingArea',
        data () {
            return{

            }
        },
        methods: {
            drop:function(ev){
                ev.preventDefault();
                var data=ev.dataTransfer.getData("Text");
                console.log("drop", document.getElementById(data));
                ev.target.appendChild(data);
            },
            allowDrop:function(ev){
                ev.preventDefault();
                // console.log("allowDrop", ev);
            }
        }
    }
</script>

<style scoped>
    #rightDrawingArea{
        width:100%;
        height:100%;
        background-color:antiquewhite
    }
    .div01{
        width:100%;
        height:100%;
    }
</style>
