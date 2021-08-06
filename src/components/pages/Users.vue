<template>

  <div class="users">
      <div class="users-searchbar">
         <img class="users-searchbar-img" :src="require('@img/logo.png')" alt="">
         <form-input class="users-searchbar-form-input" v-model="SearchContent" placeholder="Search here"></form-input>
         <dl @click="OnClickDropdown" class="users-searchbar-dropdown">
          <dt>{{SelectSearchItem}}</dt>
          <div v-if="isClickedDropdown">
          <dd class="users-searchbar-dropdown-list" v-for="(item,index) in SelectSearchList" :key="index"
          @click="SelectSearchItem=item">{{item}}</dd>
          </div>
      </dl>
      </div>

      <!-- {{MyInfo}} -->
      <!-- {{AllUsersInfo}} -->
      <div class="users-searchbar-result">
            <div  @click="onClickInfocard(index,item)" v-for="(item,index) in FilteredUserInfo" :key="index">
            <info-card class="users-searchbar-result-infocard" :userinfo="item" :isSelected="isSelectInfoCard===index"></info-card>
            </div>
      </div>
      <!-- {{FilteredUserInfo}} -->
      <div class="users-searchbar-buttons">
            <form-button @click="getMyInfo" :func="'Get My Infomation'"></form-button>
            <form-button  @click="getAllUsersInfo" :func="'Get All Users'"></form-button>
      </div>
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

            isSelectInfoCard: -1,

            isClickedDropdown: false
        };
    },
    methods: {
        async getMyInfo () {
            var res = await this.$HTTP.me();
            this.MyInfo = res;
            console.log("myinfo", res);
            this.FilteredUserInfo = [ res ];
        },
        getAllUsersInfo () {
            // this.AllUsersInfo = res;
            console.log(this.AllUsersInfo);
            this.FilteredUserInfo = this.AllUsersInfo;
        },
        onClickInfocard (index, item) {
            // this.isSelectInfoCard = !this.isSelectInfoCard;
            this.isSelectInfoCard = index;
            // console.log(index, item);
        },
        OnClickDropdown () {
            this.isClickedDropdown = !this.isClickedDropdown;
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
            console.log(newval, oldval);
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

<style lang="scss">

</style>
