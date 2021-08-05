<template>

  <div class="users">
      <button @click="getMyinfo">Get My Infomation</button>
      {{Myinfo}}
      <button></button>
  </div>
</template>

<script>

export default {

    data () {
        return {
            Myinfo: {}
        };
    },
    methods: {
        async getMyinfo () {
            var res = await this.$HTTP.me();
            this.Myinfo = res;
            console.log("meinfo", res);
        }
    }

};
</script>

<style>

</style>
