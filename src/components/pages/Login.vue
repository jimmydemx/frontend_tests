<template>
  <div class="login">
      <img :src=imgLogin alt="">

      <!-- v-model=x:
             v-bind:value=x
             v-on:input="x = $event.target.value"
       -->
       <form-verification :model='userInfo' :rules="rules" ref="loginVerification">
            <form-item :label="'Email'" :prop="'email'">
                    <form-input v-model="userInfo.email" placeholder="Input Email Address"/>
            </form-item>

            <form-item :label="'Password'" :prop="'password'">
                    <form-input :type="'password'" v-model="userInfo.password"  placeholder="Insert your Password"/>
            </form-item>

            <form-item>
                <form-button @click="login" :func="'Login'" />
            </form-item>
            <button @click="login">123</button>

       </form-verification>
  </div>
</template>

<script>
import formVerification from "@c/form/verification.vue";
import formInput from "@c/form/input.vue";
import formItem from "@c/form/item.vue";
import formButton from "@c/form/button.vue";
export default {
    components: {
        formInput, formVerification, formItem, formButton
    },

    data () {
        return {
            imgLogin: require("@img/logo.png"),
            /*
            *  form info: userinfo+ rules
            */
            userInfo: {
                email: "Tom",
                password: ""

            },
            rules: {
                email: [ { required: true, message: "Input Email Address" } ],
                password: [ { required: true, message: "Insert your password" } ]

            }

        };
    },
    methods: {
        login () {
            /*
            *   global validation: in verification.vue, there is
            *  "validate" method
            */
            console.log("login", this);
            this.$refs.loginVerification.validate(valid => {
                if (valid) {
                    // alert("submit");
                    this.$axios.post("/auth/log-in", this.userInfo).then(
                        res => console.log(res.data), error => console.log(error)
                    // ).catch(
                    //     (error) => console.log(error)
                    );
                } else {
                    console.log("error submit!");
                    return false;
                }
            });
        }
    }

};
</script>

<style>

</style>
