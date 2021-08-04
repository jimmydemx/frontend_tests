<template>
  <div class="verification" :rules='rules'>
    <slot></slot>
  </div>
</template>

<script>
export default {
    provide () {
        return {
            form: this
        };
    },
    props: {
        model: {
            type: Object,
            required: true

        },
        rules: {
            type: Object
        }
    },
    methods: {
        validate (cback) {
            /*
          * alert: using $children is not robust
            item.validate() to global validate all the result
            [resultPromise]
          */

            console.log("logininin", this.$children);
            const tasks = this.$children.filter(item => item.prop).map(item => item.verify());
            Promise.all(tasks).then(() => cback(true))
                .catch(() => cback(false));
        }
    }

};
</script>

<style>

</style>
