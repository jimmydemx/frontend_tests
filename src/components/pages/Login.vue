<template>
  <div class="login">
      <div class="login-title">
          <p>Welcome</p>
      </div>
      <img class="login-img" :src=imgLogin alt="">

      <div class="login-options" v-if="!this.$store.state.LoginState">
        <div class="login-options-signup">don‘t have a account? <a @click="onClickSignup">sign up</a></div>
        <!-- v-model=x:
                v-bind:value=x
                v-on:input="x = $event.target.value"
        -->
        <form-verification class="login-options-form-verification" :model='userInfo' :rules="rules" ref="loginVerification">
                <form-item class="login-options-form-item" :label="'Email'" :prop="'email'">
                        <form-input class="login-options-form-input" v-model="userInfo.email" placeholder="Input Email Address"/>
                </form-item>

                <form-item  class="login-options-form-item" :label="'Password'" :prop="'password'">
                        <form-input class="login-options-form-input" :type="'password'" v-model="userInfo.password"  placeholder="Insert your Password"/>
                </form-item>

                <form-item class="login-options-form-item">
                    <form-button class="login-options-form-button" @click="onClickValidate" :func="'Login'" />
                </form-item>
        </form-verification>
        </div>

        <!-- {{this.$store.state.LoginState}} -->
        <p class="login-notice" v-if="this.$store.state.LoginState">You Have Logged in</p>
        <form-button v-if="this.$store.state.LoginState" @click="onClickUserPage" :func="'Go to User Page'" />
        <form-button v-if="this.$store.state.LoginState" @click="onClickLogout" :func="'Log out'" />
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

            loginMesg: ""

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
            this.$store.dispatch("ChangeLoginState");

            if (res) {
                console.log(res.accessToken);
                // store accessToken
                localStorage.setItem("accessToken", "Bearer " + res.accessToken);

                this.$router.push({
                    name: "Users"
                });
                this.loginMesg = "You Have logged in";
            } else {
                this.loginMesg = res;
                setTimeout(() => {
                    this.loginMesg = "";
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
        },
        onClickUserPage () {
            this.$router.push({
                name: "Users"
            });
        },
        onClickLogout () {
            localStorage.removeItem("accessToken");
            this.$store.dispatch("ChangeLoginState");
        }
    }

};
</script>

<style lang="scss">

</style>
