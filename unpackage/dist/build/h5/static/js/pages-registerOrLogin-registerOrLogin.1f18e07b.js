(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["pages-registerOrLogin-registerOrLogin"],{"202c":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i=n(a("eb4a"));function n(e){return e&&e.__esModule?e:{default:e}}var r={data:function(){return{console:""}},methods:{appOAuthLogin:function(e){var t=e.currentTarget.dataset.logintype;uni.login({provider:t,success:function(e){uni.getUserInfo({provider:t,success:function(e){var a=e.userInfo,n="",r="",o="";"weixin"==t?(n=a.avatarUrl,r=a.nickName,o=a.openId):"qq"==t?(o=a.openId,r=a.nickname,n=a.figureurl_qq_2):"sinaweibo"==t&&(o=a.id,r=a.nickname,n=a.avatar_large),uni.request({url:i.default.serverUrl+"/appUnionLogin/"+t+"?qq=565580328",data:{openIdOrUid:o,nickname:r,face:n},method:"POST",success:function(e){if(200==e.data.status){var t=e.data.data;uni.setStorageSync("globalUser",t),uni.switchTab({url:"../me/me"})}}})}})}})},wxLogin:function(e){var t=e.detail.userInfo;uni.login({provider:"weixin",success:function(e){e.code;var a=1,n={avatarUrl:t.avatarUrl,nickName:t.nickName,whichMP:a};console.log(n),uni.request({url:i.default.serverUrl+"/stu/mpWXLogin/${code}?qq=565580328",data:{avatarUrl:t.avatarUrl,nickName:t.nickName,whichMP:a},method:"POST",success:function(e){console.log(e),200==e.data.status&&(uni.setStorageSync("globalUser",e.data.data),uni.switchTab({url:"../me/me"}))}})}})},formSubmit:function(e){var t=e.detail.value.username,a=e.detail.value.password,n={username:t,password:a};console.log(n),uni.request({url:i.default.serverUrl+"/user/registOrLogin?qq=565580328",data:n,method:"POST",success:function(e){200==e.data.status?(uni.setStorageSync("globalUser",e.data.data),uni.switchTab({url:"../me/me"})):500==e.data.status&&uni.showToast({title:e.data.msg,duration:2e3,image:"/static/icos/error.png"})}})}}};t.default=r},"2f53":function(e,t,a){"use strict";var i=a("7fad"),n=a.n(i);n.a},"39bc":function(e,t,a){"use strict";a.r(t);var i=a("f79b"),n=a("3e30");for(var r in n)"default"!==r&&function(e){a.d(t,e,function(){return n[e]})}(r);a("2f53");var o=a("2877"),c=Object(o["a"])(n["default"],i["a"],i["b"],!1,null,"69ea8cdc",null);t["default"]=c.exports},"3e30":function(e,t,a){"use strict";a.r(t);var i=a("202c"),n=a.n(i);for(var r in i)"default"!==r&&function(e){a.d(t,e,function(){return i[e]})}(r);t["default"]=n.a},"7fad":function(e,t,a){var i=a("eebf");"string"===typeof i&&(i=[[e.i,i,""]]),i.locals&&(e.exports=i.locals);var n=a("4f06").default;n("1878c9cd",i,!0,{sourceMap:!1,shadowMode:!1})},eb4a:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var i="https://www.imovietrailer.com/superhero";function n(e,t,a,i){var n=this.serverUrl;uni.request({url:n+e+"?qq=565580328",method:a,data:t,header:{"content-type":"application/x-www-form-urlencoded"},success:function(e){200==e.data.status&&i(e.data)},complete:function(){uni.stopPullDownRefresh(),uni.hideNavigationBarLoading(),uni.hideLoading()}})}var r={serverUrl:i,urlRequest:n};t.default=r},eebf:function(e,t,a){t=e.exports=a("2350")(!1),t.push([e.i,".body[data-v-69ea8cdc]{border-top:solid 1px #dbdbda;padding:0 %?40?%}\r\n\r\n/* 头像 start */.face-wapper[data-v-69ea8cdc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin-top:%?120?%;margin-bottom:%?120?%}.face[data-v-69ea8cdc]{width:%?160?%;height:%?160?%}\r\n\r\n/* 头像 end */\r\n\r\n/* 注册登录 start */.info-wapper[data-v-69ea8cdc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;border-bottom:solid 1px #dbdbda;padding-bottom:%?20?%}.words-lbl[data-v-69ea8cdc]{color:grey}.input[data-v-69ea8cdc]{width:%?500?%;margin-left:%?40?%}.graywords[data-v-69ea8cdc]{color:#eaeaea}\r\n\r\n/* 注册登录 end */\r\n\r\n/* 第三方登录 start */.third-wapper[data-v-69ea8cdc]{width:100%;\r\n\t/* 固定底部 */\r\n\t/* bottom: 0;\r\n\tposition: fixed; */margin-top:%?60?%}.third-line[data-v-69ea8cdc]{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.third-words[data-v-69ea8cdc]{color:#a9a9a9;font-size:13px;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:vertical;-webkit-box-direction:normal;-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.single-line[data-v-69ea8cdc]{padding:%?15?% %?20?%;width:25%;-webkit-box-align:center;-webkit-align-items:center;-ms-flex-align:center;align-items:center}.third-icos-wapper[data-v-69ea8cdc]{margin-top:%?30?%;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-orient:horizontal;-webkit-box-direction:normal;-webkit-flex-direction:row;-ms-flex-direction:row;flex-direction:row;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center}.third-ico[data-v-69ea8cdc]{width:%?60?%;height:%?60?%}.third-btn-ico[data-v-69ea8cdc]{background-image:url(http://122.152.205.72:88/group1/M00/00/05/CpoxxFxFO-yAOjTaAAATCIZEzRU503.png);width:%?60?%;height:%?60?%;background-color:#fff;background-size:%?60?% %?60?%;background-repeat:no-repeat;border:none;padding:0}uni-button[data-v-69ea8cdc]:after{border:none}\r\n\r\n/* 第三方登录 end */",""])},f79b:function(e,t,a){"use strict";var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-uni-view",{staticClass:"body"},[a("v-uni-form",{on:{submit:function(t){t=e.$handleEvent(t),e.formSubmit(t)}}},[a("v-uni-view",{staticClass:"face-wapper"},[a("v-uni-image",{staticClass:"face",attrs:{src:"../../static/icos/default-face.png"}})],1),a("v-uni-view",{staticClass:"info-wapper"},[a("v-uni-label",{staticClass:"words-lbl"},[e._v("账号")]),a("v-uni-input",{staticClass:"input",attrs:{name:"username",type:"text",value:"",placeholder:"请输入用户名","placeholder-class":"graywords"}})],1),a("v-uni-view",{staticClass:"info-wapper",staticStyle:{"margin-top":"40upx"}},[a("v-uni-label",{staticClass:"words-lbl"},[e._v("密码")]),a("v-uni-input",{staticClass:"input",attrs:{name:"password",type:"text",value:"",password:"true",placeholder:"请输入密码","placeholder-class":"graywords"}})],1),a("v-uni-button",{staticStyle:{"background-color":"#ffd655","margin-top":"60upx",width:"90%"},attrs:{type:"primary","form-type":"submit"}},[e._v("注册/登录")])],1),a("v-uni-view",[e._v(e._s(e.console))])],1)},n=[];a.d(t,"a",function(){return i}),a.d(t,"b",function(){return n})}}]);