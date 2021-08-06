<template>
  <div class="infocard">

          <form-input v-model="userinfo.name" readonly="readonly"></form-input>
          <form-input v-model="userinfo.email"></form-input>
          <form-input v-model="userinfo.id"></form-input>

    <div class="infocard-buttons" v-if="isSelected">
    <form-button @click="onClickEdit" :func="'Edit'"></form-button>
    <form-button @click="onClickDelete" :func="'Delete'"></form-button>
    <!-- <form-button @clcik="onClickCreate" :func="'Create'"></form-button> -->
    </div>

    <p>{{ActionStatus}}</p>
  </div>

</template>

<script>
import formButton from "@c/form/button.vue";
import formInput from "@c/form/input.vue";
export default {
    components: {
        formButton, formInput
    },
    props: {
        userinfo: {
            type: Object

        },
        isSelected: {
            type: Boolean,
            default: false
        }
    },
    data () {
        return {
            ActionStatus: ""
        };
    },
    methods: {
        async onClickEdit () {
            const res = await this.$HTTP.usersupdate(this.userinfo, false, {}, this.userinfo.id);
            if (res.status === 200) {
                this.ActionStatus = "Edit successfully";
            } else {
                this.ActionStatus = "Failed to Edit";
            }
        },
        async onClickDelete () {
            const res = await this.$HTTP.usersdelete({}, false, {}, this.userinfo.id);
            // console.log(res);
            if (res.status === 204) {
                this.ActionStatus = "Delete successfully";
            } else {
                (
                    // console.log(res)
                    this.ActionStatus = res.statusText
                );
            }
        }
        // async onClickCreate () {
        //     const res = await this.$HTTP.usersdelete(this.userinfo, {});
        // }

    }

};
</script>

<style lang="scss">
@import "@css/global/style.scss";
.infocard{
    border: 2px $bgColor dotted;
    width: 80%;
    margin:0 auto;

}

</style>
