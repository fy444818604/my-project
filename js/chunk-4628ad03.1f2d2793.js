(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-4628ad03"],{ca30:function(s,e,t){"use strict";var a=t("e6ec"),c=t.n(a);c.a},e6ec:function(s,e,t){},f125:function(s,e,t){"use strict";t.r(e);var a=function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"detail"},[t("syncHeader"),t("div",{staticClass:"container"},[t("div",{staticClass:"video-wrap"},[t("div",{staticClass:"item1"},[t("video",{attrs:{src:s.video.url0}})]),t("div",{staticClass:"video-boxs"},[t("div",{staticClass:"item2"},[t("video",{attrs:{src:s.video.url1}})]),t("div",{staticClass:"item3"},[t("video",{attrs:{src:s.video.url2}})])])]),s._m(0),t("div",{staticClass:"info"},[t("div",{staticClass:"info-header"},[t("span",{class:{active:"lesson"===s.activeInfo},on:{click:function(e){s.activeInfo="lesson"}}},[s._v("课程信息")]),t("span",{class:{active:"teacher"===s.activeInfo},on:{click:function(e){s.activeInfo="teacher"}}},[s._v("老师介绍")])]),t("div",{staticClass:"info-content"},["lesson"===s.activeInfo?[t("div",{staticClass:"lesson-info"},[t("p",[t("span",[s._v("课程名称:")]),s._v(s._s(s.course.courseName))]),t("p",[t("span",[s._v("主讲老师:")]),s._v(s._s(s.course.userName)+" "+s._s(s.course.schoolName))]),t("p",[t("span",[s._v("课程时间:")]),s._v(s._s(s.course.courseTime))]),t("p",[t("span",[s._v("教材信息:")]),s._v(s._s(s.course.materialCodeName))]),t("p",[t("span",[s._v("课程简介:")]),s._v(s._s(s.course.introduction))])])]:[t("div",{staticClass:"teacher-info"},[t("img",{attrs:{src:"https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png",alt:""}}),t("div",[t("p",[s._v(s._s(s.course.userName))]),t("p",[s._v(s._s(s.course.schoolName))]),t("p",[s._v(s._s(s.course.teacherIntroductions))])])])]],2)])])],1)},c=[function(){var s=this,e=s.$createElement,t=s._self._c||e;return t("div",{staticClass:"project"},[t("span",[t("i",{staticClass:"iconfont icon-eyes"}),s._v("425")]),t("span",[t("i",{staticClass:"iconfont icon-docment2"}),s._v("作业")])])}],i={components:{syncHeader:function(){return t.e("chunk-3e2e3ae4").then(t.bind(null,"8011"))}},data:function(){return{activeInfo:"teacher",courseId:"387596164566097920",course:{},video:{}}},created:function(){this.getClassDetail()},methods:{getClassDetail:function(){var s=this,e={courseId:this.courseId};this.$api.getClassDetail(e).then(function(e){s.course=e.data.course,s.video=e.data.video})}}},n=i,o=(t("ca30"),t("2877")),r=Object(o["a"])(n,a,c,!1,null,"534ad362",null);r.options.__file="detail.vue";e["default"]=r.exports}}]);
//# sourceMappingURL=chunk-4628ad03.1f2d2793.js.map