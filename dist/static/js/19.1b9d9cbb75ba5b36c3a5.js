webpackJsonp([19],{SGRU:function(t,e){},UyE2:function(t,e,a){"use strict";(function(t){var n=a("/hEK"),i=a("0k2b"),o=a("XLwt");a.n(o);e.a={name:"page4_4",components:{interBtn:n.a,Place:i.a},data:function(){return{msg:["审计报告自动生成","报告纠偏"],btnIndex:1}},computed:{getWord:function(){return this.$store.getters.getWord}},methods:{optionScatter:function(t){return{title:{text:"比较目标审计单位中审计意见（审计其它要素）与类案审计结论的偏差程度"},legend:{right:10,data:["类案审计","目标审计"]},xAxis:{name:t[3]?t[2]+"（"+t[3]+"）":t[2],type:t[3]?"value":"category",splitLine:{lineStyle:{type:"dashed"}},scale:!0},yAxis:{name:"时间",type:"category",splitLine:{lineStyle:{type:"dashed"}}},tooltip:{show:!0,formatter:function(e){return console.log(e),e.data[1]+"<br/>"+t[2]+"："+e.data[0]+t[3]}},series:[{name:"类案审计",data:t[0],type:"scatter",markLine:t[3]?{data:[{type:"max",name:"最大值"},{type:"min",name:"最小值"},{type:"average",name:"平均值"}],label:{formatter:"{b}:{c}"}}:{data:[]},symbolSize:30,itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(25, 100, 150, 0.5)",shadowOffsetY:5,color:new o.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"rgb(129, 227, 238)"},{offset:1,color:"rgb(25, 183, 207)"}])}}},{name:"目标审计",data:t[1],type:"scatter",symbolSize:30,itemStyle:{normal:{shadowBlur:10,shadowColor:"rgba(120, 36, 50, 0.5)",shadowOffsetY:5,color:new o.graphic.RadialGradient(.4,.3,1,[{offset:0,color:"rgb(251, 118, 123)"},{offset:1,color:"rgb(204, 46, 72)"}])}}}]}},updateOption:function(e){this.btnIndex=e;var a=o.init(document.getElementById("scatterEchart"));1==e?a.setOption(this.optionScatter([[[121,"2012年12月"],[334,"2013年3月"],[546,"2013年6月"],[342,"2013年9月"],[233,"2013年12月"],[354,"2014年3月"],[223,"2014年6月"],[354,"2014年9月"],[35,"2014年12月"],[32,"2015年3月"],[235,"2015年6月"],[243,"2015年9月"],[765,"2015年12月"],[463,"2016年3月"],[634,"2016年6月"],[346,"2016年9月"],[464,"2016年12月"],[35,"2017年3月"],[565,"2017年6月"],[765,"2017年9月"],[543,"2017年12月"],[534,"2018年3月"],[32,"2018年6月"],[234,"2018年9月"]],[[535,"2014年12月"]],"营业总额","万元"])):2==e?a.setOption(this.optionScatter([[["标准无保留意见","2015年9月"],["保留意见","2015年12月"],["否定意见","2016年3月"],["标准无保留意见","2016年6月"],["无法表示意见","2016年9月"],["无法表示意见","2016年12月"],["保留意见","2017年3月"],["标准无保留意见","2017年6月"],["否定意见","2017年9月"],["无法表示意见","2017年12月"],["保留意见","2018年3月"],["保留意见","2018年6月"],["标准无保留意见","2018年9月"]],[["标准无保留意见","2017年9月"]],"结论",""])):3==e?a.setOption(this.optionScatter([[["建议1","2015年9月"],["建议3","2015年12月"],["建议2","2016年3月"],["建议4","2016年6月"],["建议1","2016年9月"],["建议2","2016年12月"],["建议4","2017年3月"],["建议1","2017年6月"],["建议3","2017年9月"],["建议5","2017年12月"],["建议3","2018年3月"],["建议4","2018年6月"],["建议4","2018年9月"]],[["建议5","2017年3月"]],"建议",""])):4==e&&a.setOption(this.optionScatter([[["重点1","2015年9月"],["重点3","2015年12月"],["重点5","2016年3月"],["重点6","2016年6月"],["重点6","2016年9月"],["重点2","2016年12月"],["重点4","2017年3月"],["重点4","2017年6月"],["重点3","2017年9月"],["重点5","2017年12月"],["重点3","2018年3月"],["重点3","2018年6月"],["重点4","2018年9月"]],[["重点3","2016年3月"]],"重点",""])),t(window).resize(function(){a.resize({width:"auto",height:"auto"})})}},mounted:function(){this.updateOption(1)}}}).call(e,a("0iPh"))},xDLy:function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=a("UyE2"),i={render:function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"page4_4"},[a("div",{staticClass:"page-top"},[a("Place",{staticClass:"fl",attrs:{data:t.msg}}),t._v(" "),a("div",{staticClass:"fr inter"},[a("interBtn",{attrs:{title:"报告要素疑点",id:"more4_4",ydname:"审计报告自动生成"}})],1)],1),t._v(" "),a("div",{staticClass:"nav"},[a("ul",{staticClass:"fl"},[a("li",[a("router-link",{staticClass:"item",attrs:{"active-class":"active",to:{path:"/inside/page4_4"}}},[t._v("\n\t\t\t\t\t报告纠偏\n\t\t\t\t")])],1)])]),t._v(" "),a("div",{staticClass:"content_page"},[a("div",{staticClass:"btn-group"},[a("el-row",{staticStyle:{"text-align":"center","margin-bottom":"20px"}},[a("el-button",{class:{active:1==t.btnIndex},attrs:{type:"danger",plain:""},on:{click:function(e){t.updateOption(1)}}},[t._v("疑点")]),t._v(" "),a("el-button",{class:{active:2==t.btnIndex},attrs:{type:"warning",plain:""},on:{click:function(e){t.updateOption(2)}}},[t._v("结论")]),t._v(" "),a("el-button",{class:{active:3==t.btnIndex},attrs:{type:"info",plain:""},on:{click:function(e){t.updateOption(3)}}},[t._v("建议")]),t._v(" "),a("el-button",{class:{active:4==t.btnIndex},attrs:{type:"success",plain:""},on:{click:function(e){t.updateOption(4)}}},[t._v("重点")])],1)],1),t._v(" "),a("div",{staticStyle:{width:"100%",height:"700px",margin:"0 auto"},attrs:{id:"scatterEchart"}})])])},staticRenderFns:[]};var o=function(t){a("SGRU")},s=a("VU/8")(n.a,i,!1,o,"data-v-38664b5a",null);e.default=s.exports}});
//# sourceMappingURL=19.1b9d9cbb75ba5b36c3a5.js.map