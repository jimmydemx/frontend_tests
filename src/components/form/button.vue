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
@import "@css/global/style.scss";
.button{
        margin:1em auto;
    &-style{
        background-color: $bgColor;
        font-size: 1rem;
        border: 0;
        width:40vw;
        height:5vh;

    }
}
</style>
