<template>
  <div class="input">
      <!-- v-bind="$attrs" to expand this.$attrs: all value that are not declared in props -->
  <input :type="type" :value="value" @input="OnInput" v-bind="$attrs">
  </div>
</template>

<script>
export default {
    /*
    *  this will prevent all this.$attr will be the attrb of root  <div class="input">
    */
    inheritAttrs: false,
    props: {
        value: {
            type: String,
            default: ""

        },
        type: {
            type: String
        }

    },
    methods: {
        OnInput (e) {
            this.$emit("input", e.target.value);
            this.$bus.$emit("verify");
        }
    }

};
</script>

<style>

</style>
