webpackJsonp([27],{"8uEV":function(t,e,a){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=a("UkT+"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"cy_page2"},[e("div",{staticClass:"cont box-border-shadow"},[e("div",{directives:[{name:"show",rawName:"v-show",value:this.showGraph,expression:"showGraph"}],staticStyle:{position:"relative"}},[e("div",{staticStyle:{width:"100%",height:"800px"},attrs:{id:"graphCharts"}})]),this._v(" "),e("div",{directives:[{name:"show",rawName:"v-show",value:!this.showGraph,expression:"!showGraph"}],staticStyle:{width:"100%",height:"800px"}},[e("img",{staticStyle:{display:"block",margin:"100px auto"},attrs:{src:a("1DWv")}})])])])},staticRenderFns:[]};var n=function(t){a("tC4W")},i=a("VU/8")(o.a,r,!1,n,"data-v-7a21f1ae",null);e.default=i.exports},"UkT+":function(t,e,a){"use strict";(function(t){var o=a("XLwt"),r=(a.n(o),a("Nf9k"));e.a={name:"cw_yw",data:function(){return{showGraph:!0}},components:{},computed:{company:function(){return JSON.parse(sessionStorage.getItem("company"))}},methods:{unique:function(t){for(var e=[t[0].name],a=[t[0]],o=1;o<t.length;o++)-1==e.indexOf(t[o].name)&&(e.push(t[o].name),a.push(t[o]));console.log(a.length);for(o=0;o<a.length;o++)a[o].tag&&"业务"===a[o].tag&&(a[o].itemStyle={normal:{color:"#68bdf6",borderColor:"#5ca8db",borderWidth:2}},a[o].symbol="diamond");return console.log(a),a},getData:function(){var e=this;this.showGraph=!0;var a=o.init(document.getElementById("graphCharts"));a.showLoading(),r.a.req({apiName:"shenji_caiwu_yewu_zhishitupu_nanshen",data:{biaoshi:2}}).then(function(o){if((o=o.data)&&"200"===o.code){var r=o.data;console.log(r);var n=r.nodes,i=r.links;n=e.unique(n),a.hideLoading(),n.length>0?(a.setOption(e.graphOption(n,i)),t(window).resize(function(){a.resize({width:"auto",height:"auto"})})):e.showGraph=!1}}).catch(function(t){console.log(t),e.showGraph=!1})},graphOption:function(t,e){return{title:{},tooltip:{formatter:function(t){var e=void 0;if(t.data.name)e=t.data.name;else{var a=t.data.value;a=a.replace(/;/g,";<br/>"),e=t.data.source+" → "+t.data.target+"<br/>"+a}return e}},legend:{x:"center",show:!1,data:["财务指标","业务指标"]},series:[{type:"graph",layout:"force",categories:[{name:"财务指标",itemStyle:{borderColor:"#5ca8db",borderWidth:2,color:"#68bdf6"},symbol:"diamond"},{name:"业务指标",itemStyle:{normal:{color:"#ff756e",borderColor:"#e06760",borderWidth:2}}}],focusNodeAdjacency:!0,symbolSize:68,roam:!0,edgeSymbol:["","arrow"],hoverAnimation:!0,force:{initLayout:"circular",repulsion:1020,gravity:.5,edgeLength:[86,180],layoutAnimation:!0},draggable:!0,itemStyle:{normal:{color:"#ff756e",borderColor:"#e06760",borderWidth:2}},lineStyle:{normal:{width:1,color:"#000"}},edgeLabel:{normal:{show:!0,textStyle:{fontSize:14,color:"#000"},formatter:function(t){var e=t.data.value;return e=e.length>5?e.substr(0,5)+"...":e.substr(0,5)}}},label:{show:!0,formatter:function(t){var e=t.data.name;return"{a|"+(e=e.length>5?e.substr(0,5)+"...":e.substr(0))+"}"},rich:{a:{color:"#fff"}}},nodes:t,links:e}]}}},mounted:function(){this.getData()}}}).call(e,a("0iPh"))},tC4W:function(t,e){}});
//# sourceMappingURL=27.fbd417da5a1043dcf783.js.map