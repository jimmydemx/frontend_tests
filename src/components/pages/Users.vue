<template>

  <div class="users">
      <dl>
          <dt>select</dt>
          <dd v-for="(item,index) in SelectSearchList" :key="index"
          @click="SelectSearchItem=item">{{item}}</dd>
      </dl>
      <form-input v-model="SearchContent" placeholder="Search here"></form-input>
      <form-button @click="getMyInfo" :func="'Get My Infomation'"></form-button>
      <form-button  @click="getAllUsersInfo" :func="'Get All Users'"></form-button>
      {{MyInfo}}
      <!-- {{AllUsersInfo}} -->
      <div @click="onClickInfocard(index,item)" v-for="(item,index) in FilteredUserInfo" :key="index">
      <info-card :userinfo="item" :isSelected="isSelectInfoCard===index"></info-card>
      </div>
      {{FilteredUserInfo}}

  </div>
</template>

<script>
import formButton from "@c/form/button.vue";
import formInput from "@c/form/input.vue";
import infoCard from "@c/comps/infocard.vue";
export default {
    components: { formButton, formInput, infoCard },
    data () {
        return {
            MyInfo: {},
            AllUsersInfo: [],

            SearchContent: "",
            SelectSearchList: [ "email", "id", "name", "surname" ],
            SelectSearchItem: "email",
            FilteredUserInfo: [],

            isSelectInfoCard: -1
        };
    },
    methods: {
        async getMyInfo () {
            var res = await this.$HTTP.me();
            this.MyInfo = res;
            console.log("meinfo", res);
        },
        getAllUsersInfo () {
            // this.AllUsersInfo = res;
            console.log(this.AllUsersInfo);
        },
        onClickInfocard (index, item) {
            // this.isSelectInfoCard = !this.isSelectInfoCard;
            this.isSelectInfoCard = index;
            // console.log(index, item);
        }

    },
    mounted () {
        var self = this;
        this.$HTTP.users().then(res => {
            self.AllUsersInfo = res.items;
            console.log(res);
            return res.items;
        }).catch(error => {
            console.log(error);
        });
    },
    watch: {
        SearchContent (newval, oldval) {
            // console.log(newval, oldval);
            // reset isSelectInfoCard
            this.isSelectInfoCard = -1;
            // filter the value
            this.FilteredUserInfo = this.AllUsersInfo.filter(item => {
                if (item[this.SelectSearchItem].indexOf(newval) === -1) {
                    return false;
                } else {
                    return true;
                }
            });
        }

    }

};
</script>

<style>

</style>
