webpackJsonp([3],{"0BFu":function(t,a,e){"use strict";a.a={mounted:function(){"undefined"==typeof webExtensionWallet?this.$store.state.extension=!1:(this.$store.dispatch("account_call"),this.$store.state.extension=!0)},data:function(){return{state_language:{english:!0,chinese:!1},account:"Account Info"}},methods:{changeLanguage:function(t){t?(this.state_language.english=!0,this.state_language.chinese=!1,this.$store.state.language.english=!0,this.$store.state.language.chinese=!1,this.account="Account Info"):(this.state_language.chinese=!0,this.state_language.english=!1,this.$store.state.language.english=!1,this.$store.state.language.chinese=!0,this.account="帐户信息")}}}},"4aiv":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".footer{margin-top:50px;padding:50px;background-color:#212121;color:#fff}.footer a{color:#fff!important}",""])},"6/KS":function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,".header_top{border:1px solid grey;padding:20px;margin-bottom:50px}.fa-book{font-size:50px;margin-right:20px}ul a{color:#000}ul a:hover{color:pink;text-decoration:none}ul li{padding:20px}@media(max-width:700px){.webextension{display:none}}.account a{padding:20px;color:#000;text-decoration:none}.address_account{font-size:10px}",""])},BVea:function(t,a,e){"use strict";var n=e("YXP+"),s=e("yqLL");a.a={components:{Header:n.a,Footer:s.a}}},DLCH:function(t,a,e){"use strict";var n=function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("div",[a("Header")],1),a("nuxt"),a("div",[a("Footer")],1)],1)};n._withStripped=!0;var s={render:n,staticRenderFns:[]};a.a=s},E0j5:function(t,a,e){var n=e("p3a3");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("618e8fec",n,!1,{sourceMap:!1})},Ma2J:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var n=e("BVea"),s=e("DLCH"),o=!1;var i=function(t){o||e("E0j5")},r=e("VU/8")(n.a,s.a,!1,i,null,null);r.options.__file="layouts/default.vue",a.default=r.exports},"U+/V":function(t,a,e){var n=e("4aiv");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("7394a59e",n,!1,{sourceMap:!1})},"YXP+":function(t,a,e){"use strict";var n=e("0BFu"),s=e("sEIx"),o=!1;var i=function(t){o||e("j0mt")},r=e("VU/8")(n.a,s.a,!1,i,null,null);r.options.__file="components/Header.vue",a.a=r.exports},j0mt:function(t,a,e){var n=e("6/KS");"string"==typeof n&&(n=[[t.i,n,""]]),n.locals&&(t.exports=n.locals);e("rjj0")("011bb358",n,!1,{sourceMap:!1})},oc9k:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container-fluid footer"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-4 text-center"},[e("p",[e("a",{attrs:{href:"https://explorer.nebulas.io/#/address/n1z4NUK8aYzVKMzyhZYSf2G6gUbJ9eLCSiA",target:"_blank"}},[t.$store.state.language.english?e("span",[t._v("Contract ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("合约 ")]):t._e()])])]),e("div",{staticClass:"col-md-4 text-center"},[e("p",[e("nuxt-link",{staticClass:"about",attrs:{to:"/about"}},[t.$store.state.language.english?e("span",[t._v("About App ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("关于App ")]):t._e()])],1)]),e("div",{staticClass:"col-md-4 text-center"},[e("p",[e("nuxt-link",{staticClass:"about",attrs:{to:"/contact"}},[t.$store.state.language.english?e("span",[t._v("Contact us  ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("联系我们")]):t._e()])],1)])]),e("p",{staticClass:"text-center"},[t._v(" ©Nebulas Craft Funding 2018 ")])])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};a.a=s},p3a3:function(t,a,e){(t.exports=e("FZ+f")(!1)).push([t.i,'html{word-spacing:1px;-ms-text-size-adjust:100%;-webkit-text-size-adjust:100%;-moz-osx-font-smoothing:grayscale;-webkit-font-smoothing:antialiased}*,:after,:before,html{-webkit-box-sizing:border-box;box-sizing:border-box}*,:after,:before{margin:0}@font-face{font-family:Dancing Script;font-style:normal;font-weight:400;src:local("Dancing Script Regular"),local("DancingScript-Regular"),url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLviuEViw.woff2) format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+1ea0-1ef9,u+20ab}@font-face{font-family:Dancing Script;font-style:normal;font-weight:400;src:local("Dancing Script Regular"),local("DancingScript-Regular"),url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLuiuEViw.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Dancing Script;font-style:normal;font-weight:400;src:local("Dancing Script Regular"),local("DancingScript-Regular"),url(https://fonts.gstatic.com/s/dancingscript/v9/If2RXTr6YS-zF4S-kcSWSVi_szLgiuE.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}@font-face{font-family:Dancing Script;font-style:normal;font-weight:700;src:local("Dancing Script Bold"),local("DancingScript-Bold"),url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QlqiMurg.woff2) format("woff2");unicode-range:u+0102-0103,u+0110-0111,u+1ea0-1ef9,u+20ab}@font-face{font-family:Dancing Script;font-style:normal;font-weight:700;src:local("Dancing Script Bold"),local("DancingScript-Bold"),url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QkqiMurg.woff2) format("woff2");unicode-range:u+0100-024f,u+0259,u+1e??,u+2020,u+20a0-20ab,u+20ad-20cf,u+2113,u+2c60-2c7f,u+a720-a7ff}@font-face{font-family:Dancing Script;font-style:normal;font-weight:700;src:local("Dancing Script Bold"),local("DancingScript-Bold"),url(https://fonts.gstatic.com/s/dancingscript/v9/If2SXTr6YS-zF4S-kcSWSVi_szpbr_QqqiM.woff2) format("woff2");unicode-range:u+00??,u+0131,u+0152-0153,u+02bb-02bc,u+02c6,u+02da,u+02dc,u+2000-206f,u+2074,u+20ac,u+2122,u+2191,u+2193,u+2212,u+2215,u+feff,u+fffd}.loader{text-align:center;margin-top:50px}.pcursive{position:relative;width:100%;max-height:140px;overflow:hidden}.cursive{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif;font-size:18px;font-weight:400}.cursive>p{margin-bottom:2px}.from{font-size:10px;word-break:break-all}.contributors,.from{font-family:Source Sans Pro,-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif}.contributors{font-size:18px;font-weight:600;margin-bottom:0}.mar-0{margin-bottom:0;padding-top:10px;margin-bottom:20px}.buttons_comment{position:relative}.tweet{margin-left:10px}.like_button{position:absolute;top:0;right:0;background-color:transparent;color:#000}.fa-heart{color:red}.card-header{background-color:#9f7fb4;color:#fff}.card{margin-bottom:40px!important}.aa{margin-bottom:0!important}.para0{color:#607d8b}.para1{color:#c2185b}.para2{color:#5d4037}.para3{color:#e64a19}.para4{color:#607d8b}.para5{color:#00796b}.para6{color:#607d8b}.image_parent{height:300px;overflow:hidden}.progress_parent{margin-bottom:15px}.heavy,.title{font-weight:700}.title{color:#607d8b}.right_parent{position:relative}.right{position:absolute;top:0;right:0}.image_parent{position:relative}.child{position:absolute;color:#000;right:0;padding:10px}.fa-heart{background-color:#fff;cursor:pointer;padding:5px}',""])},sEIx:function(t,a,e){"use strict";var n=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"top_top"},[e("div",{staticClass:"container-fluid header_top"},[e("div",{staticClass:"row"},[e("div",{staticClass:"col-md-3 text-center"},[e("b-button-group",{attrs:{size:"sm"}},[e("b-button",{key:"outline-primary",attrs:{pressed:t.state_language.english,variant:"outline-primary"},on:{click:function(a){t.changeLanguage(1)},"update:pressed":function(a){t.$set(t.state_language,"english",a)}}},[t._v("\n            English\n          ")])],1)],1),e("div",{staticClass:"col-md-6 text-center"},[e("h3",{staticClass:"text-center"},[t.$store.state.language.english?e("span",[t._v("Nebulas Craft Funding ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("作者阅读和奖励")]):t._e()])]),e("div",{staticClass:"col-md-3 text-center account"},[e("b-dropdown",{staticClass:"m-md-2",attrs:{id:"ddown1",text:t.account}},[e("nuxt-link",{attrs:{to:"/"}},[t.$store.state.language.english?e("span",[t._v("Address: ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("地址: ")]):t._e(),e("span",{staticClass:"address_account"},[t._v(t._s(t.$store.state.account_data.address))])]),e("b-dropdown-divider"),e("nuxt-link",{attrs:{to:"/mystory"}},[t.$store.state.language.english?e("span",[t._v("My Craft: ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("我的书： ")]):t._e(),e("span",[t._v(t._s(t.$store.state.account_data.count_books))])]),e("b-dropdown-divider"),e("nuxt-link",{attrs:{to:"/favourite"}},[t.$store.state.language.english?e("span",[t._v("Favourite: ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("喜爱：")]):t._e(),e("span",[t._v(" "+t._s(t.$store.state.account_data.count_favourite)+" ")])]),e("b-dropdown-divider"),e("nuxt-link",{attrs:{to:"/favourite"}},[t.$store.state.language.english?e("span",[t._v("Supported: ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("支持的：")]):t._e(),e("span",[t._v(" "+t._s(t.$store.state.account_data.count_supported)+" ")])])],1)],1)]),e("ul",{staticClass:"nav justify-content-center"},[e("li",{staticClass:"nav-item"},[e("nuxt-link",{attrs:{to:"/"}},[t.$store.state.language.english?e("span",[t._v("All Crafts ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("所有书籍 ")]):t._e()])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{attrs:{to:"/favourite"}},[t.$store.state.language.english?e("span",[t._v("Favourite ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("喜爱 ")]):t._e()])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{attrs:{to:"/mystory"}},[t.$store.state.language.english?e("span",[t._v("My Craft ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("我的书 ")]):t._e()])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{attrs:{to:"/supporters"}},[t.$store.state.language.english?e("span",[t._v("Supporters ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v(" 支持者 ")]):t._e()])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{attrs:{to:"/create"}},[t.$store.state.language.english?e("span",[t._v("Create ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("创建")]):t._e()])],1),e("li",{staticClass:"nav-item"},[e("nuxt-link",{staticClass:"about",attrs:{to:"/about"}},[t.$store.state.language.english?e("span",[t._v("About App ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("关于App ")]):t._e()])],1),e("li",[e("nuxt-link",{staticClass:"about",attrs:{to:"/contact"}},[t.$store.state.language.english?e("span",[t._v("Contact us  ")]):t._e(),t.$store.state.language.chinese?e("span",[t._v("联系我们")]):t._e()])],1)]),t.$store.state.extension?t._e():e("div",{staticClass:"alert alert-danger alert-dismissible webextension"},[e("strong",[t._v("!!")]),t._v(" You don't have Web Extension installed, which is required to use this DApp. Please refer "),e("span",{staticStyle:{color:"green"}},[e("nuxt-link",{staticClass:"about",attrs:{to:"/about"}},[t._v("About App ")])],1),t._v("Section\n    ")])])])};n._withStripped=!0;var s={render:n,staticRenderFns:[]};a.a=s},yqLL:function(t,a,e){"use strict";var n=e("oc9k"),s=!1;var o=function(t){s||e("U+/V")},i=e("VU/8")(null,n.a,!1,o,null,null);i.options.__file="components/Footer.vue",a.a=i.exports}});