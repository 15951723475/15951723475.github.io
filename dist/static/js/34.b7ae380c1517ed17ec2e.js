webpackJsonp([34],{Aw1N:function(t,e){},bG4V:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("0k2b"),s=a("/hEK"),i=a("Nf9k"),o={name:"page2_2_1",data:function(){return{msg:["审计疑点线索挖掘","真实审计","交叉验证"],progressData:[],loading:!0}},components:{Place:n.a,interBtn:s.a},computed:{companyID:function(){return JSON.parse(this.$store.getters.getCompany).id}},methods:{getProgressData:function(){var t=this;i.a.req({apiName:"realShenji",data:{biaoshi:1,ID:this.companyID}}).then(function(e){if((e=e.data)&&"200"===e.code){var a=e.data;console.log(a),t.loading=!1,a.forEach(function(t){t.value=Number(t.value)}),t.progressData=a}}).catch(function(t){console.log(t)})}},mounted:function(){this.getProgressData()}},r={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page2_2_1"},[a("div",{staticClass:"page-top"},[a("Place",{staticClass:"fl",attrs:{data:t.msg}}),t._v(" "),a("div",{staticClass:"fr inter"},[a("interBtn",{attrs:{title1:"真实审计",title:"交叉验证疑点",id:"more2_2_1",ydname:"审计疑点线索挖掘"}})],1)],1),t._v(" "),a("div",[a("div",{staticClass:"zb_box box-border-shadow"},[t.loading?a("div",{staticStyle:{"line-height":"100px",height:"100px","text-align":"center","font-size":"20px",color:"#b80000"}},[a("i",{staticClass:"am-icon-spinner am-icon-spin"}),t._v(" loading\n\t\t\t")]):a("ul",t._l(t.progressData,function(e){return a("li",{staticClass:"item"},[a("el-progress",{attrs:{color:"#c24b4b",type:"circle",percentage:e.value}}),t._v(" "),a("h3",[t._v(t._s(e.name))])],1)}))])])])},staticRenderFns:[]};var c=a("VU/8")(o,r,!1,function(t){a("Aw1N")},"data-v-f4eabf32",null);e.default=c.exports}});
//# sourceMappingURL=34.b7ae380c1517ed17ec2e.js.map