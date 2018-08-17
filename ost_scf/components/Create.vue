<template>
    <div>
        

         <span v-if="$store.state.language.english"></span>

        <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Craft Need (Eg: Raw Material, Supply Chain cost, etc) </span> <span v-if="$store.state.language.chinese">书名 </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.name" type="text" :state="nameState" aria-describedby="inputLiveHelp inputLiveFeedback" placeholder="Craft Need"></b-form-input>
            <!-- <b-form-invalid-feedback id="inputLiveFeedback">
                 <span v-if="$store.state.language.english">More than 1  Character </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback> -->
        </div>

           <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Craft Maker Name : </span> <span v-if="$store.state.language.chinese">作者姓名： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.author" type="text"  placeholder="Craft Maker Name"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 2 and less than 15 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>


         <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Amount of SCF needed for Project : </span> <span v-if="$store.state.language.chinese">项目所需的NAS数量： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.amount" type="number"  placeholder="Amount of NAS "></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 2 and less than 15 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>

         <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Craft Image 1: </span> <span v-if="$store.state.language.chinese">Book Image First： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.image_url" type="text"  placeholder="https://image-url.com"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 1 character </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>

       

           <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Craft Image 2 : </span> <span v-if="$store.state.language.chinese">Book Image 2： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.image_url_2" type="text"  placeholder="https://image-url2.com"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 2 and less than 15 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>
        <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Detailed Description: </span> <span v-if="$store.state.language.chinese">描述： </span> </label>
        <b-form-textarea id="textarea1"
                     v-model="story_data.description"
                     placeholder="Details of Craft Work, Rewards, Needs, etc"
                     :rows="3"
                     :max-rows="6">
    </b-form-textarea>
    </div>

     <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Reward 1 : </span> <span v-if="$store.state.language.chinese">奖励1： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.reward_1" type="text"  placeholder="Detail of Reward1 for 1 SCF"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 2 and less than 15 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>

         <div class="form-group">
            <label for="email"><span v-if="$store.state.language.english">Reward 2 : </span> <span v-if="$store.state.language.chinese">奖励2： </span> </label>
            <!-- <input v-model="story_data.name" type="text" class="form-control" id="email" placeholder="Title" name="email"> -->
            <b-form-input id="inputLive" v-model.trim="story_data.reward_2" type="text"  placeholder="Detail of Reward2 for 50 SCF"></b-form-input>
            <b-form-invalid-feedback id="inputLiveFeedback">
                <!-- This will only be shown if the preceeding input has an invalid state -->
               <span v-if="$store.state.language.english">More than 2 and less than 15 </span> <span v-if="$store.state.language.chinese">超过2个，少于15个</span>
            </b-form-invalid-feedback>
        </div>
        <!-- <div class="form-group">
                                            <label for="pwd">User Name:</label>
                                            <input type="text" class="form-control" id="pwd" placeholder="Name" name="pswd">
                                        </div> -->
        <!-- <div class="form-group form-check">
                                            <label class="form-check-label">
                                                <input class="form-check-input" type="checkbox" name="remember"> Remember me
                                                                      </label>
                                        </div> -->
        <button v-on:click="submit_story()" type="submit" class="btn btn-primary">Submit</button>
    
    
    </div>
</template>

<script>
export default {
  mounted() {
    // this.$store.dispatch("call");
  },
  methods: {
    submit_story() {
      var temp_data = this.story_data;
      //console.log(JSON.stringify(temp_data));
      if (
        temp_data.name != "" &&
        temp_data.image_url != "" &&
        temp_data.image_url_2 != "" &&
        temp_data.description != "" &&
        temp_data.amount != 0 &&
        temp_data.author != "" &&
        temp_data.reward_1 != "" &&
        temp_data.reward_2 != ""
      ) {
        this.$store.dispatch("add_book", temp_data);
      }
      else{
          alert("All fields are Mandatory ");
      }
    }
  },
  data() {
    return {
      story_data: {
        name: "",
        image_url: "",
        image_url_2: "",
        description: "",
        amount: 0,
        author: "",
        reward_1: "",
        reward_2: ""
      },
      submit_flag: true
    };
  },
  computed: {
    nameState() {
      return this.story_data.name.length > 1 ? true : false;
    }
  }
};
</script>






