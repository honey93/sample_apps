<template>
  <div class="top_top">
  
    <div class="container-fluid header_top">
      <div class="row">
  
        <div class="col-md-3 text-center">
          <b-button-group size="sm">
            <input type="text" placeholder="Enter user Name" v-model="login.name">
            <b-button @click="search()" :pressed.sync="state_language.english" variant="outline-primary" key="outline-primary">
              Login
            </b-button>
            <!-- <b-button @click="changeLanguage(0)" :pressed.sync="state_language.chinese" variant="outline-primary" key="outline-primary">
              中文
            </b-button> -->
          </b-button-group>
        </div>
  
        <div class="col-md-6 text-center"><img src="~/assets/ost_logo.png" width="100px"> 
          <h3 class="text-center"> <span v-if="$store.state.language.english">Social Crowd Fund </span>
            <span v-if="$store.state.language.chinese">作者阅读和奖励</span></h3>
        </div>
  
        <div class="col-md-3 text-center account">
          <b-dropdown id="ddown1" :text="account" class="m-md-2">
            <nuxt-link to="/"> <span v-if="$store.state.language.english">SCF Token: </span> <span v-if="$store.state.language.chinese">地址: </span><span >{{login.token}}</span>
            </nuxt-link>
  
  
            <b-dropdown-divider>
  
            </b-dropdown-divider>
            <nuxt-link to="/mystory">
             <span v-if="$store.state.language.english">Name: </span> <span v-if="$store.state.language.chinese">我的书： </span>
            <span>{{login.name}}</span> </nuxt-link>
            <b-dropdown-divider></b-dropdown-divider>
            <nuxt-link to="/favourite"> <span v-if="$store.state.language.english">Favourite: </span> <span v-if="$store.state.language.chinese">喜爱：</span> <span> {{$store.state.account_data.count_favourite}} </span>
            </nuxt-link>
            <b-dropdown-divider></b-dropdown-divider>
            <nuxt-link to="/favourite"> <span v-if="$store.state.language.english">Supported: </span> <span v-if="$store.state.language.chinese">支持的：</span> <span> {{$store.state.account_data.count_supported}} </span>
            </nuxt-link>
          </b-dropdown>
  
        </div>
  
      </div>
  
  
  
  
      <ul class="nav justify-content-center">
        <li class="nav-item">
          <nuxt-link to="/"><span v-if="$store.state.language.english">All Crafts </span> <span v-if="$store.state.language.chinese">所有书籍 </span> </nuxt-link>
        </li>
        <li class="nav-item">
          <nuxt-link to="/favourite"><span v-if="$store.state.language.english">Favourite </span>
            <span v-if="$store.state.language.chinese">喜爱 </span></nuxt-link>
        </li>
        <!-- <li class="nav-item">
          <nuxt-link to="/mystory">
            <span v-if="$store.state.language.english">My Craft </span>
            <span v-if="$store.state.language.chinese">我的书 </span>
          </nuxt-link>
        </li>

        <li class="nav-item">
          <nuxt-link to="/supporters">
            <span v-if="$store.state.language.english">Supporters </span>
            <span v-if="$store.state.language.chinese"> 支持者 </span>
          </nuxt-link>
        </li> -->

        <li class="nav-item">
          <nuxt-link to="/create"><span v-if="$store.state.language.english">Create </span>
            <span v-if="$store.state.language.chinese">创建</span> </nuxt-link>
        </li>
  
        <li class="nav-item">
          <nuxt-link to="/about" class="about"><span v-if="$store.state.language.english">About App </span>
            <span v-if="$store.state.language.chinese">关于App </span></nuxt-link>
        </li>
  
        <li>
          <nuxt-link to="/contact" class="about"><span v-if="$store.state.language.english">Contact us  </span>
            <span v-if="$store.state.language.chinese">联系我们</span></nuxt-link>
        </li>

        <li>
          <nuxt-link to="/admin" class="about"><span v-if="$store.state.language.english">Admin  </span>
            <span v-if="$store.state.language.chinese">联系我们</span></nuxt-link>
        </li>

        <li>
          <nuxt-link to="/wallet" class="about"><span v-if="$store.state.language.english">Wallet  </span>
            <span v-if="$store.state.language.chinese">联系我们</span></nuxt-link>
        </li>


      </ul>
  
      <div class="alert alert-danger alert-dismissible webextension" v-if="!$store.state.extension">
        
        <strong>!!</strong> You don't have Web Extension installed, which is required to use this DApp. Please refer <span style="color:green"> <nuxt-link to="/about" class="about">About App </nuxt-link> </span>Section
      </div>
  
  
    </div>
  
  
  </div>
</template>


<style>
.header_top {
  border: 1px solid grey;
  padding: 20px;
  margin-bottom: 50px; 
}

.fa-book{
  font-size: 50px;
  margin-right: 20px;
}

ul a{
  color: black;
}
ul a:hover{
  color: pink;
  text-decoration: none;
}

ul li{
  padding: 20px;
}

@media(max-width : 700px){
  .webextension{
    display: none;
  }
}

.account a{
  padding: 20px;
  color: black;
  text-decoration: none;
}

.address_account{
  font-size: 10px;
}
</style>

<script>
import axios from "axios";
// import * as NebPay from 'nebpay.js';
export default {
  mounted() {
     var vm = this;
      axios.get("http://localhost:3001/allusers").then((response)=>{
         // alert(typeof(response));

           console.log(response.data.users);
           vm.users = response.data.users;
      });

    if (typeof webExtensionWallet === "undefined") {
      this.$store.state.extension = false;
    } else {
      // alert("detected");
      this.$store.dispatch("account_call");

      this.$store.state.extension = true;
    }
  },
  data() {
    return {
      state_language: {
        english: true,
        chinese: false
      },
      account: "Account Info",
      login:{name:"",token:"",id:""},
      users:[]
    };
  },
  methods: {
    search(){

      //alert(this.login.name);
      this.users.map((user)=>{

        if(user.name == this.login.name){
          this.login.token = user.token_balance;
          this.login.id = user.id;
          this.$store.state.to = user.id;
        }
        return user;


      });
    },
    changeLanguage(state) {
      if (state) {
        this.state_language.english = true;
        this.state_language.chinese = false;
        this.$store.state.language.english = true;
        this.$store.state.language.chinese = false;
        this.account = "Account Info";
      } else {
        this.state_language.chinese = true;
        this.state_language.english = false;
        this.$store.state.language.english = false;
        this.$store.state.language.chinese = true;
        this.account = "帐户信息";
      }
    }
  }
};
</script>
