<template>
  <div class="logout">
    <form-button @click="logout" :func="'Logout'"></form-button>
    <form-button @click="backlogin" :func="'Back to Login'"></form-button>

  </div>
</template>

<script>
import formButton from "@c/form/button.vue";
export default {
    components: { formButton },
    methods: {
        logout () {
            localStorage.removeItem("accessToken");
        },
        backlogin () {
            this.$router.push({
                name: "Login"
            });
        }

    }

};
</script>

<style lang="scss">

</style>
