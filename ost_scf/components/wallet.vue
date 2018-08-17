<template>
  <div class="container">
      <h2 class="text-center"> Wallet Details </h2>

       <div>

        <!-- <div class="row">
            <div class="col-md-3 text-right">
                <label class="text-right"> Name </label> 
            </div>      
            <div class="col-md-6"> 
                 <b-form-input v-model="date_user.name_user"
                  type="text"
                  placeholder="Enter user name"></b-form-input>
            </div>      
            <div class="col-md-3"> 
                <b-button v-on:click="create_user()" size="sm" :variant="primary">
               Create User
            </b-button>
            </div>      
              
        </div>  -->
          
   

<!--                   
    <hr> -->
  </div> 

      <table class="table table-hover">
    <thead>
      <tr>
        <th>Seq</th>
        <th>Transaction</th>
        
      </tr>
    </thead>
    <tbody>
      <tr v-for="(trans,index) in transactions">
        <td>{{index+1}}</td>
        <td class="break">
          
          <span class="green">{{actions[trans.action_id]}} </span>
          <br>
          {{JSON.stringify(trans)}}</td>
        
      </tr>
    </tbody>
  </table>

  </div>
</template>


<script>
import * as NebPay from "nebpay.js";

import axios from "axios";

export default {
  updated() {},
  mounted() {
     this.get_users();

    this.book_selected = 0;
    this.$store.dispatch("call");
    this.$store.dispatch("account_call");
    setInterval(() => {
      if (this.i) {
        this.i = 0;
      } else {
        this.i = 1;
      }
      //  alert(this.i);
    }, 3000);
  },
  methods: {
      get_users(){

           var vm = this;
      axios.get("http://localhost:3001/ledger/"+this.$store.state.to).then((response)=>{
         // alert(typeof(response));
            vm.transactions = response.data.transactions;
           //alert(JSON.stringify(response.data.transactions));
          // vm.users = response.data.users;
      });

      },
    create_user(){
    //     axios.get("http://localhost:3001/createuser/"+this.date_user.name_user).then((response)=>{
    //      // alert(typeof(response));
    //      this.date_user.name_user = "";
    //      this.get_users();
    //        console.log(response.data);
    //       // vm.users = response.data.users;
    //   });
    }, 
    add_token(userid){

         axios.get("http://localhost:3001/airdrop/"+userid).then((response)=>{
         // alert(typeof(response));
        // this.date_user:name_user = "";
         this.get_users();
           console.log(response.data);
           
        });
    },
    image_id(images) {
        return 1;
      //return images[this.];
    },
    showModal(selected) {
      this.book_selected = selected;
      this.$refs.myModalRef.show();
    },
    hideModal() {
      this.$refs.myModalRef.hide();
    },
    showDonation(selected) {
      this.book_selected = selected;
      this.$refs.showDonationRef.show();
    },
    hideDonation() {
      this.$refs.hideDonationRef.hide();
    },
    reward(amount, hash, address, type) {
      this.$store.dispatch("add_reward", {
        amount: amount,
        hash: hash,
        address: address,
        type: type
      });
    },
    vote(hash, address) {
      this.$store.dispatch("vote", {
        hash: hash,
        address: address
      });
    }
  },
  computed: {},
  data() {
    return {
      a: [
        "http://prodimage.images-bn.com/pimages/9780804139298_p0_v4_s1200x630.jpg",
        "https://blog.ganttpro.com/wp-content/uploads/2016/09/Rework-2-sides-1.jpg"
      ],
      i: 1,
      book_selected: 0,
      users:[],date_user:{name_user:""},
      transactions:[],
      actions:{39003:"Upvote",39002:"Reward (Company to user)",39001:"Download, Hold Rewards (User to Company)",}
    };
  }
};
</script>

<style scoped>
.banner{
  margin-bottom: 30px;
}
.break{
    word-break: break-word;
}

td{
    min-width: 100px;
}
.green{
  background-color: aqua;
  padding: 5px;
}
</style>