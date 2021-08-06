<template>
  <div class="signup">
      <!-- email, password, name, surname -->
            <div class="signup-mesg">Sign up Now</div>
            <div class="signup-form">
            <form-verification class="signup-form-verification" :model='SignupInfo' :rules="rules" ref="signupVerification">

            <!-- <form-item :label="Object.keys(SignupInfo)[0]" :prop="Object.keys(SignupInfo)[0]">
                <form-input v-model="SignupInfo.name" :placeholder="rules[Object.keys(SignupInfo)[0]][0].message"/>
            </form-item> -->

            <form-item class="signup-form-item" v-for="(value, key, index) in SignupInfo" :key="index"
            :label="key" :prop="key">
                <form-input class="signup-form-input" v-model="SignupInfo[key]" :placeholder="rules[key][0].message"/>
            </form-item>

            <form-item class="signup-form-item">
                <form-button class="signup-form-button" @click="onClickValidate" :func="'Sign up'"></form-button>
            </form-item>
        </form-verification>
    </div>
    <p class="signup-signupStatus">{{signupStatus}}</p>

  </div>
</template>

<script>
import formVerification from "@c/form/verification.vue";
import formInput from "@c/form/input.vue";
import formItem from "@c/form/item.vue";
import formButton from "@c/form/button.vue";
export default {
    components: {
        formVerification,
        formInput,
        formItem,
        formButton
    },
    data () {
        return {

            /*
             Signup info
           */
            SignupInfo: {
                name: "",
                surname: "",
                email: "",
                password: ""
            },

            rules: {
                name: [ { required: true, message: "Input Your Name" } ],
                surname: [ { required: true, message: "Input Your Surname" } ],
                email: [ { required: true, message: "Input Email Address" } ],
                password: [ { required: true, message: "Insert your password" } ]

            },
            /*
            *  Signup Status
            */
            signupStatus: ""
        };
    },
    methods: {
        onClickValidate () {
            this.$refs.signupVerification.validate(valid => {
                if (valid) {
                    this.signup();
                } else {
                    console.log("error sign up!");
                    return false;
                }
            });
        },
        async signup () {
            var res = await this.$HTTP.signup(this.SignupInfo);
            if (res.status === 204) {
                this.signupStatus = "Sign up Successfully";
                this.$router.go(-1);
            } else {
                this.signupStatus = res.data.message;
                // console.log("error mesg", res.data.message);
            }
        }
    },
    mounted () {
        if (this.$store.state.LoginState) {
            this.$router.push({

                name: "Login"
            }

            );
        }
    }

};
</script>

<style lang="scss">

</style>
