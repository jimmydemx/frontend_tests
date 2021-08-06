<template>
  <div class="button">
      <button class="button-style" @click="OnclickButton">{{func}}</button>
  </div>
</template>

<script>
export default {
    props: {
        func: {
            type: String,
            default: ""
        }
    },
    methods: {
        OnclickButton () {
            this.$emit("click");
        }
    }

};
</script>

<style lang="scss">

</style>
