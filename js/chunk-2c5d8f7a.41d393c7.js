(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2c5d8f7a"],{6942:function(i,t,s){"use strict";var n=s("99ac"),e=s.n(n);e.a},"99ac":function(i,t,s){},e3ee:function(i,t,s){"use strict";s.r(t);var n=function(){var i=this,t=i.$createElement,s=i._self._c||t;return s("div",{staticClass:"live-index"},[s("div",{staticClass:"tips flex-between"},[s("div",{staticClass:"tip-item"},[s("div",{staticClass:"icon-wrap",style:{background:"#5F44E8"}},[s("i",{staticClass:"icon-block iconfont"})]),s("div",{staticClass:"info-wrap"},[s("div",[i._v(i._s(i.liveTotal))]),s("div",[i._v("累计直播")])])]),s("div",{staticClass:"tip-item"},[s("div",{staticClass:"icon-wrap",style:{background:"#43B6F5"}},[s("i",{staticClass:"icon-video2 iconfont"})]),s("div",{staticClass:"info-wrap"},[s("div",[i._v(i._s(i.livingNumber))]),s("div",[i._v("正在直播")])])]),s("div",{staticClass:"tip-item"},[s("div",{staticClass:"icon-wrap",style:{background:"#F77809"}},[s("i",{staticClass:"icon-schedule iconfont"})]),s("div",{staticClass:"info-wrap"},[s("div",[i._v(i._s(i.aptNumber))]),s("div",[i._v("直播预告")])])]),s("div",{staticClass:"tip-item"},[s("div",{staticClass:"icon-wrap",style:{background:"#30B394"}},[s("i",{staticClass:"icon-user iconfont"})]),s("div",{staticClass:"info-wrap"},[s("div",[i._v(i._s(i.lookerNumber))]),s("div",[i._v("观看人数")])])])]),s("div",{staticClass:"live-ing"},[s("div",{staticClass:"title"},[i._v("正在直播")]),i.livingListFour.length>0?s("div",{staticClass:"live-wrap"},i._l(i.livingListFour,function(t){return s("liveBox",{key:t.id,attrs:{info:t},nativeOn:{click:function(s){i.handleToLiving(t)}}})})):i._e()]),s("div",{staticClass:"live-ing"},[s("div",{staticClass:"title"},[i._v("直播预告")]),i.appLiveListFour.length>0?s("div",{staticClass:"live-wrap"},i._l(i.appLiveListFour,function(i){return s("liveBroad",{key:i.id,attrs:{info:i}})})):i._e()])])},e=[],a=(s("cadf"),s("551c"),s("097d"),{components:{liveBox:function(){return s.e("chunk-2b216f00").then(s.bind(null,"2815"))},liveBroad:function(){return s.e("chunk-67ba882a").then(s.bind(null,"bb60"))}},data:function(){return{appLiveList:[],livingList:[],liveTotal:0,livingNumber:0,aptNumber:0,lookerNumber:0}},created:function(){this.init()},methods:{init:function(){var i=this;this.$api.getIndexData().then(function(t){var s=t.data,n=s.appLiveList,e=s.livingList,a=s.liveTotal,l=s.livingNumber,c=s.aptNumber,v=s.lookerNumber;i.appLiveList=n,i.livingList=e,i.liveTotal=a,i.livingNumber=l,i.aptNumber=c,i.lookerNumber=v})},handleToLiving:function(i){this.$router.push("/liveCenter/video/play/".concat(i.id,"/").concat(i.code))}},computed:{livingListFour:function(){return this.livingList.length>4?this.livingList.splice(0,4):this.livingList},appLiveListFour:function(){return this.appLiveList.length>4?this.appLiveList.splice(0,4):this.appLiveList}}}),l=a,c=(s("6942"),s("2877")),v=Object(c["a"])(l,n,e,!1,null,"2be36b20",null);v.options.__file="index.vue";t["default"]=v.exports}}]);
//# sourceMappingURL=chunk-2c5d8f7a.41d393c7.js.map