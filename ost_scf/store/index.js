import Vue from 'vue'
import Vuex from 'vuex'

import {
  contractAddress,
  nebPay,
  result,
  NebPay
} from './neb_init';

Vue.use(Vuex)

// root state object.
// each Vuex instance is just a single state tree.
const state = {
  count: 5,
  supporters_data:[],
  all_data: [],
  favourite_data: [],
  mystory_data: [],
  color_codes: ["#CDDC39", "#C2185B", "#5D4037", "#E64A19", "#9E9E9E", "#607D8B", "#1976D2", "#00796B"],
  extension: true,
  nodata_flag: false,
  nodata_flag_my: false,
  account_data: {},
  language: {
    english: true,
    chinese: false
  },to:""

}

// mutations are operations that actually mutates the state.
// each mutation handler gets the entire state tree as the
// first argument, followed by additional payload arguments.
// mutations must be synchronous and can be recorded by plugins
// for debugging purposes.
const mutations = {
  increment(state) {
    state.count++
  },
  all_data(state, payload) {
    //alert(JSON.stringify(payload));

    payload = payload.map((data) => {
      data.images = [];
      data.images.push(data.image_url);

      data.images.push(data.image_url_2);
      return data;
    });
    state.all_data = payload;
  },
  favourite_data(state, payload) {
    payload.result = payload.result.map((data) => {
      data.images = [];
      data.images.push(data.image_url);

      data.images.push(data.image_url_2);
      return data;
    });
    state.favourite_data = payload.result;
    state.nodata_flag = payload.status;
  },
  mystory_data(state, payload) {
    payload.result = payload.result.map((data) => {
      data.images = [];
      data.images.push(data.image_url);

      data.images.push(data.image_url_2);
      return data;
    });
    state.mystory_data = payload.result;
    state.nodata_flag_my = payload.status;
  },
  account_data(state, payload) {
    //alert(JSON.stringify(payload));
    state.account_data = payload;
  },
  supporters_data(state, payload) {
    payload.result = payload.result.map((data) => {
      data.images = [];
      data.images.push(data.image_url);

      data.images.push(data.image_url_2);
      return data;
    });
    state.supporters_data = payload.result;
    state.nodata_flag_my = payload.status;
  }
}

// actions are functions that cause side effects and can involve
// asynchronous operations.
const actions = {
  increment: ({
    commit
  }) => commit('increment'),
  call: (store) => {
    var args = "[]";
    var serialNumber;

    // serialNumber = nebPay.pay("n1WsNwPAd5cgkFR9p59thvzyBDQ6z7Gk9Y8", 0.02, {
    //     qrcode: {
    //         showQRCode: true
    //     },
    //     goods: {
    //         name: "test",
    //         desc: "test goods"
    //     },
    //     callback:NebPay.config.testnetUrl,
    //     listener: function(data){
    //         alert(data);
    //     }  //set listener for extension transaction result
    // });
    // setTimeout(() => {
    //     onrefreshClick();   //search transaction result from server (result upload to server by app)
    // }, 1000);

    serialNumber = nebPay.simulateCall(contractAddress, 0, "get_books", args, {
      listener: function (data) {

        //alert(JSON.stringify(data));
        // commit(all_data,)
        // alert(data.result);

        if (data.result != null) {
          var pq = JSON.parse(data.result);
          //  alert(pq);
          store.commit("all_data", JSON.parse(data.result));
        }

      }
    });

    // setInterval(() => {
    //   onrefreshClick();
    // }, 3000);

    function onrefreshClick() {
      // alert("hello");
      //alert(serialNumber);
      nebPay.queryPayInfo(serialNumber, {}) //search transaction result from server (result upload to server by app)
        .then(function (resp) {
          console.log(JSON.stringify(resp));
        })
        .catch(function (err) {
          //alert(err);
        });
    }



  },
  add_book: ({
    commit
  }, payload) => {

    var args = "[\"" + payload.name + "\",\"" + payload.author + "\",\"" + payload.image_url + "\",\"" + payload.image_url_2 + "\",\"" + payload.description + "\",\"" + payload.amount + "\",\"" + payload.reward_1 + "\",\"" + payload.reward_2 + "\"]";


    nebPay.call(contractAddress, 0, "save_book", args, {
      listener: function (data) {
        // alert(JSON.stringify(data.result));
      }
    });

  },
  add_reward: ({
    commit
  }, payload) => {

    // return new Promise((resolve, reject) => {
    var payload_temp = payload.amount;
    var hash = payload.hash;
    var address = payload.address;
    var type = payload.type;
    // alert(JSON.stringify(payload));
    // alert(payload_temp);
    var args = "[\"" + hash + "\",\"" + address + "\",\"" + type + "\"]";
    nebPay.call(contractAddress, payload_temp, "rewards", args, {
      callbackUrl: NebPay.config.testnetUrl,
      listener: function (data) {
        //alert(JSON.stringify(data));
        //resolve();
      }
    });
    // });

  },
  vote: ({
    commit
  }, payload) => {

    var args = "[\"" + payload.hash + "\",\"" + payload.address + "\"]";
    nebPay.call(contractAddress, 0, "vote", args, {
      listener: function (data) {
        //  alert(JSON.stringify(data));
      }
    });

  },
  favourite_call: ({
    commit,
    state
  }) => {
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "favourite", args, {
      listener: function (data) {
        // commit(all_data,)
        // alert(JSON.stringify(data));
        var result = JSON.parse(data.result);

        if (result.length) {
          // alert(data.result);
          commit("favourite_data", {
            "result": result,
            "status": false
          });
        } else {
          // store.nodata_flag = true;
          //   alert("no alert");
          state.nodata_flag = true;
          //commit("favourite_data", {"result":result,"status":true});
        }

      }
    });
  },
  mybook_call: ({
    commit
  }) => {
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "my_books_data", args, {
      listener: function (data) {
        // commit(all_data,)
        //alert(JSON.stringify(data));
        var result = JSON.parse(data.result);
        //alert(result.length);

        if (result.length) {
          // alert(data.result);
          commit("mystory_data", {
            "result": result,
            "status": false
          });
        } else {
          // store.nodata_flag = true;
          //   alert("no alert");
          state.nodata_flag_my = true;
          //commit("mystory_data", {"result":result,"status":true});
        }

      }
    });
  },
  account_call: ({
    commit
  }) => {

    //alert("came in");
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "account_data", args, {
      listener: function (data) {
        // commit(all_data,)
        //alert(JSON.stringify(data));
        var result = JSON.parse(data.result);
        //alert(result.length);

        //if (result.length) {
        // alert(data.result);
        commit("account_data", result);
        // } else {
        // store.nodata_flag = true;
        //   alert("no alert");
        // state.nodata_flag_my = true;
        //commit("mystory_data", {"result":result,"status":true});
        // }

      }
    });
  },
  supporters_call: ({
    commit
  }) => {
    var args = "[]";
    nebPay.simulateCall(contractAddress, 0, "supported", args, {
      listener: function (data) {
        // commit(all_data,)
        //alert(JSON.stringify(data));
        var result = JSON.parse(data.result);
        //alert(result.length);

        if (result.length) {
          // alert(data.result);
          commit("supporters_data", {
            "result": result,
            "status": false
          });
        } else {
          // store.nodata_flag = true;
          //   alert("no alert");
          state.nodata_flag_my = true;
          //commit("mystory_data", {"result":result,"status":true});
        }

      }
    });
  }

}

// getters are functions
const getters = {
  evenOrOdd: state => state.count % 2 === 0 ? 'even' : 'odd'
}

// A Vuex instance is created by combining the state, mutations, actions,
// and getters.


const createStore = () => {
  return new Vuex.Store({
    state,
    getters,
    actions,
    mutations
  });
};


export default createStore
