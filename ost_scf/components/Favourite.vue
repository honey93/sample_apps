<template>
  <div>
    <div class="col-md-12">
  
    </div>
  
    
    <div class="loader" v-if="!$store.state.favourite_data.length && !$store.state.nodata_flag"> <img src="~/assets/loading.gif"> </div>
  
    
      <div class="row" v-if="$store.state.favourite_data.length">
  
      <div class="col-md-4" v-for="(book,index) in $store.state.favourite_data" :key="book.hash_address">
  
        <div class="card">
  
          <div class="image_parent">
           <div class="child"> <i class="far fa-heart" > {{book.votes.length}}  </i>  </div>
            <img class="card-img-top" :src="image_id(book.images)" alt="Card image cap">
          </div>
  
          <div class="card-body">
             <h5 class="card-title"> <span class="title"> NAS Collected: </span> <span class="heavy"> {{book.hand_bonus}} </span></h5>
           
            <div class="progress_parent">
              Percentage Collection:
            <b-progress :value="parseFloat((book.hand_bonus/book.amount)*100)" variant="success" key="success" show-value></b-progress>
            </div>
            <h5 class="card-title"> <span class="title"> Craft Need: </span> <span class="heavy"> {{book.name}} </span></h5>
            <h5 class="card-title"> <span class="title"> Craft Maker: </span> <span class="heavy"> {{book.author}} </span> </h5>
            

             <div class="right_parent">
  
            <b-button @click="showModal(index)" size="sm" variant="outline-info">
              Read More
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
              Donate 1 NAS
            </b-button>
  
          </b-list-group-item>
          <b-list-group-item class="d-flex justify-content-between align-items-center">
            {{$store.state.all_data[book_selected].reward_2}}
            <b-button size="sm" variant="warning" @click="reward(50,$store.state.all_data[book_selected].hash_address,$store.state.all_data[book_selected].address,2)">
              Donate 50 NAS
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

export default {
  updated() {},
  mounted() {
    this.book_selected = 0;
    this.$store.dispatch("favourite_call");
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
      book_selected: 0
    };
  }
};
</script>
