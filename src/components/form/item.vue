<template>
  <div class="item">
      <!-- lable -->
      <label class="item-label" v-if='label'>{{label}}</label>
      <slot></slot>
      <!-- save the verfification error -->
      <p class="item-error" v-if="error">{{error}}</p>
      <!-- <p>{{form.model}}</p>
      <p>{{prop}}</p> -->
  </div>
</template>

<script>
import Schema from "async-validator";
export default {

    props: {
        label: {
            type: String,
            default: ""
        },
        prop: {
            type: String
        }
    },
    inject: [ "form" ],

    data () {
        return {
            error: ""
        };
    },
    mounted () {
        var self = this;
        // console.log("item", this);
        this.$bus.$on("verify", () => {
            if (self.prop) {
                self.verify();
            } else {
                // console.log("button");
                return -1;
            }
        });
    },
    methods: {
        verify () {
            const rules = this.form.rules[this.prop];
            const value = this.form.model[this.prop];

            /*
            *   create object to include{ tem:rules}
             */
            const desc = { [this.prop]: rules };

            /*
            *  create Schema via async-validator
             */
            const schema = new Schema(desc);

            /*
                use the created schema to validate the input value
                return value is a Promise
            */
            return schema.validate({ [this.prop]: value }, errors => {
                if (errors) {
                    /*
                    * message is this.form.rules.[this.prop].message
                    */
                    this.error = errors[0].message;
                } else {
                    this.error = "";
                }
            });
        }
    }

};
</script>

<style>

</style>
