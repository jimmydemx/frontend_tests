<template>
  <div class="button">
      <button>{{func}}</button>
  </div>
</template>

<script>
export default {
    props: {
        func: {
            type: String,
            default: ""
        }
    }

};
</script>

<style>

</style>
