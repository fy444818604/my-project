(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f796d1a"],{"71f6":function(e,t,a){"use strict";var i=a("951d"),s=a.n(i);s.a},"7f7f":function(e,t,a){var i=a("86cc").f,s=Function.prototype,n=/^\s*function ([^ (]*)/,r="name";r in s||a("9e1e")&&i(s,r,{configurable:!0,get:function(){try{return(""+this).match(n)[1]}catch(e){return""}}})},8312:function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"action-detail"},[a("div",{staticClass:"detail-header"},[a("base-title",{attrs:{bread:"",title:"功能授权",breadList:["系统管理员"]}},[a("template",{slot:"btn"},[a("btn-list",{attrs:{model:{icon:"icon-save",name:"保存"}},on:{"btn-click":e.saveAdd}})],1)],2)],1),a("div",{staticClass:"detail-content"},[a("div",{staticClass:"left"},[a("div",{staticClass:"menu"},[a("el-tree",{ref:"treeLeft",attrs:{data:e.allText,"show-checkbox":"","node-key":"name",props:e.defaultProps},on:{"check-change":e.leftLeCheckChange,"node-click":e.leftHandleCheckChange}})],1)]),a("div",{staticClass:"right"},[a("el-tree",{ref:"tree",attrs:{data:e.rntData,"show-checkbox":"","node-key":"name",props:e.defaultProps},on:{"check-change":e.handleCheckChange}})],1)])])},s=[],n=(a("7f7f"),a("ac6a"),{components:{baseTitle:function(){return a.e("chunk-8461d7c0").then(a.bind(null,"6968"))},btnList:function(){return a.e("chunk-39930572").then(a.bind(null,"55a9"))}},data:function(){return{parId:"",checkList:[],number:0,projectData:[],parameter:[],checked:!1,childData:"",defaultProps:{children:"children",label:"desc"},leftNames:[],rightHavePermission:[],leftClickTitle:[],currentNodekey:"",rntData:[],leftHavePermission:[],allData:{},allText:[],nameType:{},havePermissionNames:{},currentLeftName:""}},created:function(){this.parId=this.$route.query.id,this.leftList()},methods:{leftList:function(){var e=this,t={};this.$api.getPermissionTree(t).then(function(t){if(1==t.success){var a=e;t.data.forEach(function(e){a.allData[e.name]={children:e.children},a.forEachChildren(e);var t={desc:e.desc,name:e.name};a.allText.push(t)}),e.currentLeftName=t.data[0].name,a.showRightTree(),e.getPermissionByRoleId()}})},forEachChildren:function(e){var t=this;e.children.length>0&&e.children.forEach(function(e){t.nameType[e.name]=e.rootName,t.forEachChildren(e)})},getPermissionByRoleId:function(){var e=this,t={roleId:this.parId,orgId:"1"};this.$api.getPermissionByRoleId(t).then(function(t){if(1==t.success){var a=e;t.data.forEach(function(e){if(a.nameType.hasOwnProperty(e.name)){var t=a.nameType[e.name];a.havePermissionNames.hasOwnProperty(t)||(a.havePermissionNames[t]=[]),a.havePermissionNames[t].push(e.name)}});var i=[];for(var s in a.havePermissionNames)i.push(s);a.leftHavePermission=i,e.checkRightNodes(),e.checkRightNodesLeft()}})},showRightTree:function(){this.rntData=this.allData[this.currentLeftName].children},checkRightNodesLeft:function(){var e=this,t=this.leftHavePermission;t&&t.forEach(function(t){e.$refs.treeLeft.setChecked(t,!0)})},checkRightNodes:function(){var e=this,t=this.havePermissionNames[this.currentLeftName];t&&t.forEach(function(t){e.$refs.tree.setChecked(t,!0)})},leftHandleCheckChange:function(e){if(""!=this.currentLeftName){var t=this.$refs.tree.getCheckedKeys();this.havePermissionNames[this.currentLeftName]=t;var a=[];a.push(this.currentLeftName)}this.currentLeftName=e.name,this.showRightTree(),this.$nextTick(function(){this.checkRightNodes()})},leftLeCheckChange:function(e,t){var a=this;if(0==t){var i=this.havePermissionNames[e.name];i.forEach(function(e){a.$refs.tree.setChecked(e,!1)}),this.havePermissionNames[e.name]=[]}},handleCheckChange:function(){var e=this.$refs.tree.getCheckedKeys();0===e.length?this.$refs.treeLeft.setChecked(this.currentLeftName,!1):this.$refs.treeLeft.setChecked(this.currentLeftName,!0)},saveAdd:function(){var e=this;if(""!=this.currentLeftName){var t=this.$refs.tree.getCheckedKeys();this.havePermissionNames[this.currentLeftName]=t}var a=[];for(var i in e.havePermissionNames)a=a.concat(e.havePermissionNames[i]);var s=this.$refs.treeLeft.getCheckedKeys();if(a=a.concat(s),console.log(a),""!=a){var n={name:a,roleId:this.parId,orgId:localStorage.getItem("orgId")};e.$api.associatedPermission(n).then(function(t){1==t.success&&e.$myLayer.successLayer(t.msg)})}else e.$myLayer.errorLayer("至少选择一条数据")}}}),r=n,c=(a("f5cf"),a("71f6"),a("2877")),h=Object(c["a"])(r,i,s,!1,null,"78b38b2f",null);h.options.__file="detail.vue";t["default"]=h.exports},"951d":function(e,t,a){},ac6a:function(e,t,a){for(var i=a("cadf"),s=a("0d58"),n=a("2aba"),r=a("7726"),c=a("32e9"),h=a("84f2"),o=a("2b4c"),f=o("iterator"),l=o("toStringTag"),d=h.Array,u={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=s(u),L=0;L<m.length;L++){var v,g=m[L],k=u[g],p=r[g],C=p&&p.prototype;if(C&&(C[f]||c(C,f,d),C[l]||c(C,l,g),h[g]=d,k))for(v in i)C[v]||n(C,v,i[v],!0)}},e3ef:function(e,t,a){},f5cf:function(e,t,a){"use strict";var i=a("e3ef"),s=a.n(i);s.a}}]);
//# sourceMappingURL=chunk-6f796d1a.30abf54b.js.map