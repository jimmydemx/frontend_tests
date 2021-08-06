<template>
  <div id="app">

    <router-view/>
      <p class="ppp">{{b}}</p>
    <div>this is{{a}}</div>

  </div>
</template>

<script>

export default {

    data () {
        return {
            // a: document.documentElement.clientWidth
            b: this.$WindowSize.windowsize
        };
    },
    computed: {
        a () {
            var c = document.documentElement.clientWidth;
            return c;
        }

    },
    mounted () {
        console.log(this);
        var self = this;
        window.onresize = function () {
            // window.screenWidth = ;
            self.b = document.documentElement.clientWidth;
            // self.$store.state.screenWidth = document.documentElement.clientWidth; // 窗口宽度
            // self.$store.state.screenHeight = document.documentElement.clientHeight; // 窗口高度
        };
    }
};

</script>
<style lang="scss">
#app{
  margin-top: 0;
}
@media screen and (min-width:600px){
  //  body{background:orange;}
   @import '@css/mobile/layout/a.scss';

}
@media screen and (max-width:599px){
  //  body{background:orange;}
   @import '@css/mobile/layout/a.scss';

}
</style>
