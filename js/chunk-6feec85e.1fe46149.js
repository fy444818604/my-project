(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6feec85e"],{"7b01":function(e,n,t){"use strict";var u=t("a2d9"),_=t.n(u);_.a},a2d9:function(e,n,t){},b538:function(e,n,t){"use strict";t.r(n);var u=function(){var e=this,n=e.$createElement,t=e._self._c||n;return t("div",{attrs:{id:"layout"}},[t("fy-head"),t("div",{staticClass:"main"},[t("div",{staticClass:"main-middle",style:{paddingLeft:e.toggleWidth}},[t("el-scrollbar",{attrs:{native:!1}},[t("router-view")],1)],1),t("div",{staticClass:"main-left",style:{width:e.toggleWidth}},[t("fy-nav",{ref:"leftNav",attrs:{menuData1:e.menuData1}})],1)])],1)},_=[],m=t("9305"),i=t("3d01"),a={name:"layout",data:function(){return{toggleWidth:"240px",menuData1:[{menu_id:1,menu_text:"基础设置",menu_icon:"icon-setup",menu_href:"",menu_pid:0,menu_target_type:0},{menu_id:2,menu_text:"系统设置",menu_icon:"",menu_href:"/basic/Layout/system",menu_pid:1,menu_target_type:0},{menu_id:3,menu_text:"行政区域",menu_icon:"",menu_href:"",menu_pid:1,menu_target_type:0},{menu_id:4,menu_text:"行政级别设置",menu_icon:"",menu_href:"/basic/Layout/admin-level-setting",menu_pid:3,menu_target_type:0},{menu_id:5,menu_text:"行政区域设置",menu_icon:"",menu_href:"/basic/Layout/admin-area-setting",menu_pid:3,menu_target_type:0},{menu_id:6,menu_text:"学区管理",menu_icon:"",menu_href:"/basic/Layout/school-area-man",menu_pid:1,menu_target_type:0},{menu_id:7,menu_text:"学段设置",menu_icon:"",menu_href:"/basic/Layout/stage-setting",menu_pid:1,menu_target_type:0},{menu_id:8,menu_text:"学科管理",menu_icon:"",menu_href:"",menu_pid:1,menu_target_type:0},{menu_id:9,menu_text:"科目管理",menu_icon:"",menu_href:"/basic/Layout/subject-man",menu_pid:8,menu_target_type:0},{menu_id:10,menu_text:"教材版本",menu_icon:"",menu_href:"/basic/Layout/textbook-man",menu_pid:8,menu_target_type:0},{menu_id:11,menu_text:"教材内容",menu_icon:"",menu_href:"/basic/Layout/textbook-cont",menu_pid:8,menu_target_type:0},{menu_id:12,menu_text:"知识点管理",menu_icon:"",menu_href:"/basic/Layout/point",menu_pid:8,menu_target_type:0},{menu_id:13,menu_text:"人员设置",menu_icon:"",menu_href:"",menu_pid:1,menu_target_type:0},{menu_id:14,menu_text:"政治面貌",menu_icon:"",menu_href:"/basic/Layout/politics",menu_pid:13,menu_target_type:0},{menu_id:15,menu_text:"就读类型",menu_icon:"",menu_href:"/basic/Layout/attend-type",menu_pid:13,menu_target_type:0},{menu_id:16,menu_text:"职务设置",menu_icon:"",menu_href:"/basic/Layout/duty-setting",menu_pid:13,menu_target_type:0},{menu_id:17,menu_text:"岗位设置",menu_icon:"",menu_href:"/basic/Layout/job-setting",menu_pid:13,menu_target_type:0},{menu_id:18,menu_text:"用工类型",menu_icon:"",menu_href:"/basic/Layout/job-type",menu_pid:13,menu_target_type:0},{menu_id:19,menu_text:"职称设置",menu_icon:"",menu_href:"/basic/Layout/job-level-setting",menu_pid:13,menu_target_type:0},{menu_id:20,menu_text:"学历设置",menu_icon:"",menu_href:"/basic/Layout/education-setting",menu_pid:13,menu_target_type:0},{menu_id:21,menu_text:"学位设置",menu_icon:"",menu_href:"/basic/Layout/education-level-setting",menu_pid:13,menu_target_type:0},{menu_id:22,menu_text:"账号变动",menu_icon:"",menu_href:"",menu_pid:1,menu_target_type:0},{menu_id:23,menu_text:"学生变动",menu_icon:"",menu_href:"/basic/Layout/student-account",menu_pid:22,menu_target_type:0},{menu_id:23,menu_text:"教职工变动",menu_icon:"",menu_href:"/basic/Layout/teacher-account",menu_pid:22,menu_target_type:0},{menu_id:24,menu_text:"招生设置",menu_icon:"",menu_href:"",menu_pid:1,menu_target_type:0},{menu_id:25,menu_text:"招生类型",menu_icon:"",menu_href:"/basic/Layout/enter-type",menu_pid:24,menu_target_type:0},{menu_id:26,menu_text:"生源类型",menu_icon:"",menu_href:"/basic/Layout/source-type",menu_pid:24,menu_target_type:0},{menu_id:27,menu_text:"组织机构",menu_icon:"icon-apartment",menu_href:"",menu_pid:0,menu_target_type:0},{menu_id:28,menu_text:"机构类型",menu_icon:"",menu_href:"/basic/Layout/org-type",menu_pid:27,menu_target_type:0},{menu_id:29,menu_text:"机构设置",menu_icon:"",menu_href:"/basic/Layout/org-set",menu_pid:27,menu_target_type:0},{menu_id:30,menu_text:"校历管理",menu_icon:"icon-calendar",menu_href:"",menu_pid:0,menu_target_type:0},{menu_id:31,menu_text:"校历设置",menu_icon:"",menu_href:"/basic/Layout/calendar-set",menu_pid:30,menu_target_type:0},{menu_id:32,menu_text:"作息类型",menu_icon:"",menu_href:"/basic/Layout/calendar-type",menu_pid:30,menu_target_type:0},{menu_id:33,menu_text:"作息时间",menu_icon:"",menu_href:"/basic/Layout/calendar-time",menu_pid:30,menu_target_type:0},{menu_id:34,menu_text:"教室管理",menu_icon:"icon-home",menu_href:"",menu_pid:0,menu_target_type:0},{menu_id:35,menu_text:"建筑场所",menu_icon:"",menu_href:"/basic/Layout/build-area",menu_pid:34,menu_target_type:0},{menu_id:36,menu_text:"教室类型",menu_icon:"",menu_href:"/basic/Layout/room-type",menu_pid:34,menu_target_type:0},{menu_id:37,menu_text:"教室设置",menu_icon:"",menu_href:"/basic/Layout/room-setting",menu_pid:34,menu_target_type:0},{menu_id:38,menu_text:"年级班级",menu_icon:"icon-grade",menu_href:"",menu_pid:0,menu_target_type:0},{menu_id:39,menu_text:"学届管理",menu_icon:"",menu_href:"/basic/Layout/stu-year",menu_pid:38,menu_target_type:0},{menu_id:40,menu_text:"班级管理",menu_icon:"",menu_href:"/basic/Layout/cla-mates",menu_pid:38,menu_target_type:0},{menu_id:41,menu_text:"账号管理",menu_icon:"icon-user",menu_href:"",menu_pid:0,menu_target_type:0},{menu_id:42,menu_text:"教职工账号",menu_icon:"",menu_href:"/basic/Layout/teacher",menu_pid:41,menu_target_type:0},{menu_id:43,menu_text:"学生账号",menu_icon:"",menu_href:"/basic/Layout/student",menu_pid:41,menu_target_type:0}]}},created:function(){},components:{"fy-head":m["a"],"fy-nav":i["a"]},methods:{}},o=a,r=(t("7b01"),t("2877")),d=Object(r["a"])(o,u,_,!1,null,null,null);d.options.__file="layout.vue";n["default"]=d.exports}}]);
//# sourceMappingURL=chunk-6feec85e.1fe46149.js.map