<template>
  <div class="container-fluid">

    <!-- <img class="banner" src="~/assets/nebulas_craft.jpg" width="100%"> -->

    <div class="loader" v-if="!$store.state.all_data.length && !$store.state.nodata_flag"> <img src="~/assets/loading.gif"> </div>
  
  
    <div class="row" v-if="$store.state.all_data.length">
  
      <div class="col-md-4" v-for="(book,index) in $store.state.all_data" :key="book.hash_address">
  
        <div class="card">
  
          <div class="image_parent">
           <div class="child"> <i class="far fa-heart"  @click="like(users[index].id)">   </i>  </div>
            <img class="card-img-top" :src="image_id(images[index])" alt="Card image cap">
          </div>
  
          <div class="card-body">

            

            
            
            <h5 class="card-title" v-if="users.length"> <span class="title"> SCF Collected: </span> <span class="heavy"> {{parseFloat(users[index].token_balance).toFixed(3)}} </span></h5>
            
            <div class="progress_parent" v-if="users.length">Percentage Collection:
            <b-progress :value="parseFloat(((parseFloat(users[index].token_balance).toFixed(3))/(parseFloat(book.amount).toFixed(2) > 0.001 ? parseFloat(book.amount).toFixed(2): 120))*100)" variant="success" key="success" show-value></b-progress>
            <h5 class="card-title"> <span class="title"> Goal: </span> <span class="heavy"> {{parseFloat(book.amount).toFixed(2) > 0.001 ? parseFloat(book.amount).toFixed(2): 120}}  SCF</span></h5>
            </div>
            <h5 class="card-title"> <span class="title"> Craft Need: </span> <span class="heavy"> {{book.name}} </span></h5>
            <h5 class="card-title" v-if="users.length"> <span class="title"> Craft  Maker: </span> <span class="heavy"> {{users[index].name}} </span> </h5>
            

            <div class="right_parent">
  
            <b-button @click="showModal(index)" size="sm" variant="outline-info">
              Description
            </b-button>

            <b-button size="sm" variant="warning" class="leftpad" @click="download(users[index].id)">
                Hold Rewards
            </b-button>
  
            <b-button class="right" @click="showDonation(index)" size="sm" variant="outline-success">
              Rewards
            </b-button>
            <!-- <a href="#" class="card-link">Card link</a> -->
            <!-- <a href="#" class="card-link">Another link</a> -->

            </div>
          </div>
          <!-- <ul class="list-group list-group-flush">
                      <li class="list-group-item">Cras justo odio</li>
                      <li class="list-group-item">Dapibus ac facilisis in</li>
                      <li class="list-group-item">Vestibulum at eros</li>
                    </ul> -->


          <div class="card-body">
            
  
          </div>
        </div>
  
      </div>
  
  
    </div>
  
  
    <b-modal ref="myModalRef" size="lg" hide-footer title="Description" v-if="$store.state.all_data.length">
      <div class="d-block text-center">
        <h3> {{$store.state.all_data[book_selected].description}}</h3>
        <img :src="$store.state.all_data[book_selected].image_url" width="80%">
         <img :src="$store.state.all_data[book_selected].image_url_2" width="80%">
      </div>
      <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
    </b-modal>
  
    <b-modal ref="showDonationRef" size="lg" hide-footer title="Donation" v-if="$store.state.all_data.length">
      <div class="d-block text-center">
        <h3>We have the following Rewards for You</h3>
  
        <b-list-group>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
          {{$store.state.all_data[book_selected].reward_1}}
            <b-button size="sm" variant="warning" @click="reward(1,$store.state.all_data[book_selected].hash_address,$store.state.all_data[book_selected].address,1)">
              Donate
            </b-button>
  
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{$store.state.all_data[book_selected].reward_2}}
            <b-button size="sm" variant="warning"  @click="reward(50,$store.state.all_data[book_selected].hash_address,$store.state.all_data[book_selected].address,2)">
              Donate 
            </b-button>
          </b-list-group-item>
         
        </b-list-group>
      </div>
      <!-- <b-btn class="mt-3" variant="outline-danger" block @click="hideDonationRef">Close Me</b-btn> -->
    </b-modal>
  
  </div>
</template>


<script>
import * as NebPay from "nebpay.js";

import axios from "axios";

export default {
  updated() {},
  mounted() {
    var vm = this;
    axios.get("http://localhost:3001/allusers").then(response => {
      // alert(typeof(response));

      console.log(response.data.users);
      vm.users = response.data.users;
    });

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
    download(id) {
      //alert(id);
     
      
      axios.get("http://localhost:3001/download/" + this.$store.state.to).then(res => {
        console.log(res);
      });
    },
    like(id) {
      //alert(id);
      let people_id = { from: "", to: "" };
      people_id.from = this.$store.state.to;
      people_id.to = id;
      people_id = JSON.stringify(people_id);
      axios.get("http://localhost:3001/like/" + people_id).then(res => {
        console.log(res);
      });
    },
    image_id(images) {
      return images[this.i];
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
      users: [],
      images: {
        0: [
          "https://thumbs.dreamstime.com/b/street-sellers-hanoi-vietnam-corner-women-sell-goods-their-cycles-one-selling-shoes-other-food-71027965.jpg",
          "https://c1.staticflickr.com/5/4098/4754168695_da024c45b0_b.jpg"
        ],
        1: [
          "http://images.all-free-download.com/images/graphicthumb/handicraft_194409.jpg",
          "http://marjorierwilliams.com/wp-content/uploads/2017/01/DSC09459.jpg"
        ],
        2: [
          "https://www.thehindu.com/migration_catalog/article12428451.ece/alternates/FREE_660/31MP-I_Am_-_Kanniamma.JPG",
          "https://www.thehindu.com/migration_catalog/article12428451.ece/alternates/FREE_660/31MP-I_Am_-_Kanniamma.JPG"
        ],
        3: [
          "https://www-tc.pbs.org/parents/crafts-for-kids/files/2015/11/Diy-Toys-Cup-Ball-Game-BABBLE-DABBLE-DO-Featured.jpg",
          "https://www-tc.pbs.org/parents/crafts-for-kids/files/2015/11/Diy-Toys-Cup-Ball-Game-BABBLE-DABBLE-DO-Featured.jpg"
        ]
      }
    };
  }
};
</script>

<style scoped>
.banner {
  margin-bottom: 30px;
}
.leftpad{
  margin-left: 10px;
}
</style>