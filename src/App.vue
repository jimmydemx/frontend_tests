<template>
  <div id="app">
    <div id="nav">
      <!-- <router-link to="/about">About</router-link> -->
    </div>

    <!-- <router-view/> -->
      <p class="ppp">{{b}}</p>
    <div>this is{{a}}</div>
    <login/>
  </div>
</template>

<script>
import login from "@c/pages/Login.vue";
export default {
    components: {
        login
    },
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

@media screen and (min-width:600px){
  //  body{background:orange;}
   @import '@css/mobile/layout/a.scss';

}
@media screen and (max-width:599px){
  //  body{background:orange;}
   @import '@css/mobile/layout/a.scss';

}
</style>
