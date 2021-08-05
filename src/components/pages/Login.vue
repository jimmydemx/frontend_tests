<template>
  <div class="login">
      <p>Welcome</p>
      <div>don‘t have a account? <a @click="onClickSignup">sign up</a></div>
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
                <form-button @click="onClickValidate" :func="'Login'" />
            </form-item>
       </form-verification>

       <p>{{loginState}}</p>
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
                email: "j_demx@163.com",
                password: "123456"

            },
            rules: {
                email: [ { required: true, message: "Input Email Address" } ],
                password: [ { required: true, message: "Insert your password" } ]

            },

            /*
            * login status display
            */
            loginState: ""

        };
    },
    methods: {
        onClickValidate () {
            /*
            *   global validation: in verification.vue, there is
            *  "validate" method
            */
            console.log("login", this);
            this.$refs.loginVerification.validate(valid => {
                if (valid) {
                    // alert("submit");
                    this.login();
                } else {
                    console.log("error submit!");
                    return false;
                }
            });
        },
        async login () {
            var res = await this.$HTTP.login(this.userInfo);

            if (res) {
                // console.log(res.accessToken);
                // store accessToken
                localStorage.setItem("accessToken", "Bearer " + res.accessToken);

                this.$router.push({
                    name: "Users"
                });
            } else {
                this.loginState = res.data.message;
                setTimeout(() => {
                    this.loginState = "";
                }, 2000);
            }

            // this.$axios.post("/auth/log-in", this.userInfo).then(
            //     res => console.log(res.data), error => console.log(error.response)
            // ).catch(
            //     (error) => console.log(error)
            // );
        },

        onClickSignup () {
            /*
            * click can lead towards sign up page
             */
            this.$router.push({
                name: "Signup"
            });
        }
    }

};
</script>

<style>

</style>
