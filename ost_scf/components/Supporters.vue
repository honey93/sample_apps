<template>
    <div>
        <div class="col-md-12">
            <p>
    
                <span v-if="$store.state.language.english">All Books supported by you will be here. You will see the list of addressess applied for rewards. </span> <span v-if="$store.state.language.chinese">所有添加或添加了行的故事都会在这里 </span>
            </p>
        </div>
    
        
        <div class="loader" v-if="!$store.state.supporters_data.length && !$store.state.nodata_flag_my"> <img src="~/assets/loading.gif"> </div>
    
    
        <div class="row" v-if="$store.state.supporters_data.length">
    
            <div class="col-md-4" v-for="book in $store.state.supporters_data" :key="book.hash_address">
    
                <div class="card">
    
    
    
    
    
                    <div class="card-body">
                         <h5 class="card-title"> <span class="title"> Craft Need: </span> <span class="heavy"> {{book.name}} </span></h5>
                        <h5 class="card-title"> <span class="title"> Craft Author: </span> <span class="heavy"> {{book.author}} </span> </h5>
                        <h5 class="card-title"> <span class="title"> NAS Collected: </span> <span class="heavy"> {{book.hand_bonus}} </span></h5>
    
                        <div class="progress_parent">Percentage Reached:
                            <b-progress :value="parseFloat((book.hand_bonus/book.amount)*100)" variant="success" key="success" show-value></b-progress>
                        </div>
                       
    
                    </div>
                    <!-- <ul class="list-group list-group-flush">
                          <li class="list-group-item">Cras justo odio</li>
                          <li class="list-group-item">Dapibus ac facilisis in</li>
                          <li class="list-group-item">Vestibulum at eros</li>
                        </ul> -->
                    <div class="card-body">
    
    

                        <h5 class="card-title"> <span class="title"> Rewards Claimed by supporters: </span> </h5>
                        <b-list-group>
                            <b-list-group-item v-for="(type,index) in book.type" :key="type.address" class="d-flex justify-content-between align-items-center">
                                {{index+1}})<span class="address_type"> {{type.address}} </span>
                                <span size="sm" variant="warning" class="reward_type">
                                    <span v-if="type.type == 1"> {{book.reward_1}} </span>
    
                                    <span v-if="type.type == 2"> {{book.reward_2}} </span>
                                </span>
    
                            </b-list-group-item>
    
    
                        </b-list-group>
    
    
    
                    </div>
                </div>
    
            </div>
    
    
        </div>
    
    
        <b-modal ref="myModalRef" size="lg" hide-footer title="Description" v-if="$store.state.all_data.length">
            <div class="d-block text-center">
                <h3> {{$store.state.all_data[book_selected].description}}</h3>
            </div>
            <b-btn class="mt-3" variant="outline-danger" block @click="hideModal">Close Me</b-btn>
        </b-modal>
    
        <b-modal ref="showDonationRef" size="lg" hide-footer title="Donation" v-if="$store.state.all_data.length">
            <div class="d-block text-center">
                <h3>We have the following Rewards for You</h3>
    
                <b-list-group>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                        {{$store.state.all_data[book_selected].reward_1}}
                        <b-button size="sm" variant="warning" @click="reward(0.01,$store.state.all_data[book_selected].hash_address,$store.state.all_data[book_selected].address,1)">
                            Donate 10 NAS
                        </b-button>
    
                    </b-list-group-item>
                    <b-list-group-item class="d-flex justify-content-between align-items-center">
                        {{$store.state.all_data[book_selected].reward_2}}
                        <b-button size="sm" variant="warning">
                            Donate 20 NAS
                        </b-button>
                    </b-list-group-item>
                  
                </b-list-group>
            </div>
            <!-- <b-btn class="mt-3" variant="outline-danger" block @click="hideDonationRef">Close Me</b-btn> -->
        </b-modal>
    
    
    
    </div>
</template>




<style>
    h2 {
        color: green;
    }
</style>


<script>
    import * as NebPay from "nebpay.js";
    
    export default {
        updated() {},
        mounted() {
            this.book_selected = 0;
            this.$store.dispatch("supporters_call");
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

<style>
    .address_type {
        font-size: 9px!important;
        word-break: break-word;
        padding: 10px;
    }
    .reward_type{
        font-size: 10px;
        background-color: cyan;
    }
</style>
