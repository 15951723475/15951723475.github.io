webpackJsonp([67],{"+o+W":function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});i("XLwt");var a=i("Nf9k"),s={name:"zstp_fg_page2",data:function(){return{faguiList:[],faguiXq:[],faguiJuZi:[],steps:1,fgBiaoti:"",fgDuanluo:"",fgJuZi:"",dialogFormVisible:!1,selectList:["业务概念实体","财务审计概念实体","组织实体","审计对象实体","其他"],form1:{word1:"",word2:"",relation:"",select:"",select2:""},form2:{word1:"",word2:"",relation:"",select:"",select2:""},form3:{word1:"",word2:"",relation:"",select:"",select2:""},formLabelWidth:"120px",radio:"1",lishipingjia:{},yd1:!0,radio1:[],ydText1:"",getQuestionData:[]}},components:{},computed:{company:function(){return JSON.parse(sessionStorage.getItem("company"))},userName:function(){if(sessionStorage.getItem("username"))return sessionStorage.getItem("username")}},filters:{getText:function(t){if(t)return t.trim()}},methods:{getQuestion1:function(){var t=this,e=void 0;1==this.fgJuZi.index?e="shitichouqu_duanluo":2==this.fgJuZi.index&&(e="shitichouqu_juzi"),a.a.req({apiName:"showQues",data:{qiye_id:e,yidian_name:this.fgJuZi.id,feilei_id:e}}).then(function(e){if((e=e.data)&&"200"===e.code){var i=e.data;console.log(i),t.getQuestionData=i}}).catch(function(t){console.log(t)})},appraise1:function(t){var e=this;if(this.radio1[t]){var i=this.radio1[t].split("-")[0],s=this.radio1[t].split("-")[1];console.log(i+"====="+s),a.a.req({apiName:"appraiseQues",data:{yidian_id:s,num:i,username:this.userName}}).then(function(t){if((t=t.data)&&"200"===t.code){t.data;alert("评价成功"),e.radio1=[]}}).catch(function(t){console.log(t)})}else alert("请选择合理或不合理")},addQues1:function(){var t=this,e=void 0;1==this.fgJuZi.index?e="shitichouqu_duanluo":2==this.fgJuZi.index&&(e="shitichouqu_juzi"),a.a.req({apiName:"addQues",data:{qiye_id:e,yidian_name:this.fgJuZi.id,feilei_id:e,username:this.userName,yidian:this.ydText1}}).then(function(e){if((e=e.data)&&"200"===e.code){e.data;alert("添加成功"),t.ydText1="",t.yd1=!0,t.getQuestion1()}}).catch(function(t){console.log(t)})},getDialog:function(t){this.userName?(this.fgJuZi=t,this.showPingLun(t.id),this.getQuestion1()):alert("请先登录")},showPingLun:function(t){var e=this;a.a.req({apiName:"shitiguanxichouqu_shitiguanxi_chaxun",data:{juzi_md5_id:t,juzi_duanluo:this.fgJuZi.index}}).then(function(t){if((t=t.data)&&"200"===t.code){var i=t.data;console.log(i),e.lishipingjia=i}}).catch(function(t){console.log(t)})},addPingLun:function(t,e){var i=this,s=t.word1,l=t.word2,o=t.relation,n=t.select,r=t.select2,c=this.fgJuZi.id;s&&l&&o?n&&r?a.a.req({apiName:"shitiguanxichouqu_shitiguanxi",data:{juzi_md5_id:c,shiti1:s,shiti2:l,guanxi:o,shiti1_fenlei:n,shiti2_fenlei:r,biaoshi:e,juzi_duanluo:this.fgJuZi.index}}).then(function(t){if((t=t.data)&&"200"===t.code){var e=t.message;alert(e),i.showPingLun(c)}}).catch(function(t){console.log(t)}):alert("请选择实体类别"):alert("内容不能为空")},delPingLun:function(t,e){var i=this;a.a.req({apiName:"shitiguanxichouqu_shitiguanxi_shanchu",data:{juzi_duanluo:this.fgJuZi.index,juzi_md5_id:this.fgJuZi.id,shiti1:t[0],guanxi:t[2],shiti2:t[3],biaoshi:e}}).then(function(t){if((t=t.data)&&"200"===t.code){t.data;alert("删除成功"),i.showPingLun(i.fgJuZi.id)}}).catch(function(t){console.log(t)})}},mounted:function(){this.getDialog(this.$route.query)}},l={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"zstp_fg_page2"},[i("div",{staticClass:"cont box-border-shadow"},[i("div",[i("h1",{staticStyle:{color:"#b80000","margin-bottom":"20px","font-size":"34px","text-align":"center","font-weight":"bold","line-height":"44px"}},[t._v(t._s(t._f("getText")(t.fgJuZi.fgBiaoti)))]),t._v(" "),i("div",{staticClass:"text",staticStyle:{color:"#b80000","font-size":"16px","text-indent":"44px","line-height":"30px"}},[t._v("\n\t\t\t\t\t段落/语句："+t._s(t._f("getText")(t.fgJuZi.text))+"\n\t\t\t\t")]),t._v(" "),i("div",{staticStyle:{margin:"10px 0"}},[i("el-radio",{attrs:{label:"1",border:""},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("实体1-关系-实体2")]),t._v(" "),i("el-radio",{attrs:{label:"2",border:""},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("实体-属性-值")]),t._v(" "),i("el-radio",{attrs:{label:"3",border:""},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("条件-关联词-结论")]),t._v(" "),i("el-radio",{attrs:{label:"4",border:""},model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[t._v("添加疑点")])],1),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"1"==t.radio,expression:"radio=='1'"}]},[i("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},[i("tr",{staticClass:"footer_tr"},[i("td",[t._v("\n\t\t\t\t\t\t\t\t\t实体1：\n\t\t\t\t\t\t\t\t\t"),i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%",margin:"0 auto"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.form1.word1,callback:function(e){t.$set(t.form1,"word1",e)},expression:"form1.word1"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form1.select,callback:function(e){t.$set(t.form1,"select",e)},expression:"form1.select"}},t._l(t.selectList,function(t,e){return i("el-option",{attrs:{label:t,value:e+1}})}))],1)],1),t._v(" "),i("td",[t._v("关系：\n\t\t\t\t\t\t\t\t\t"),i("el-input",{staticStyle:{width:"80%",margin:"0 auto"},attrs:{clearable:"",size:"small"},model:{value:t.form1.relation,callback:function(e){t.$set(t.form1,"relation",e)},expression:"form1.relation"}})],1),t._v(" "),i("td",[t._v("实体2：\n\t\t\t\t\t\t\t\t\t"),i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%",margin:"0 auto"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.form1.word2,callback:function(e){t.$set(t.form1,"word2",e)},expression:"form1.word2"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form1.select2,callback:function(e){t.$set(t.form1,"select2",e)},expression:"form1.select2"}},t._l(t.selectList,function(t,e){return i("el-option",{attrs:{label:t,value:e+1}})}))],1)],1),t._v(" "),i("td",[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.addPingLun(t.form1,1)}}},[t._v("添 加")])],1)])]),t._v(" "),t._m(0),t._v(" "),i("div",{staticStyle:{"max-height":"600px","overflow-y":"auto"}},[i("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},t._l(t.lishipingjia.guanxi,function(e){return i("tr",[i("td",[t._v(t._s(e[0])+" "),i("span",{staticStyle:{color:"#b80000"}},[t._v("("+t._s(t.selectList[e[1]-1])+")")])]),t._v(" "),i("td",[t._v(t._s(e[2]))]),t._v(" "),i("td",[t._v(t._s(e[3])+" "),i("span",{staticStyle:{color:"#b80000"}},[t._v("("+t._s(t.selectList[e[4]-1])+")")])]),t._v(" "),i("td",[i("el-button",{attrs:{size:"small"},on:{click:function(i){t.delPingLun(e,1)}}},[t._v("删 除")])],1)])}))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"2"==t.radio,expression:"radio=='2'"}]},[i("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},[i("tr",{staticClass:"footer_tr"},[i("td",[t._v("实体：\n\t\t\t\t\t\t\t\t"),i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%",margin:"0 auto"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.form2.word1,callback:function(e){t.$set(t.form2,"word1",e)},expression:"form2.word1"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form2.select,callback:function(e){t.$set(t.form2,"select",e)},expression:"form2.select"}},t._l(t.selectList,function(t,e){return i("el-option",{attrs:{label:t,value:e+1}})}))],1)],1),t._v(" "),i("td",[t._v("属性："),i("el-input",{staticStyle:{width:"80%",margin:"0 auto"},attrs:{clearable:"",size:"small"},model:{value:t.form2.relation,callback:function(e){t.$set(t.form2,"relation",e)},expression:"form2.relation"}})],1),t._v(" "),i("td",[t._v("值：\n\t\t\t\t\t\t\t\t"),i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%",margin:"0 auto"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.form2.word2,callback:function(e){t.$set(t.form2,"word2",e)},expression:"form2.word2"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form2.select2,callback:function(e){t.$set(t.form2,"select2",e)},expression:"form2.select2"}},t._l(t.selectList,function(t,e){return i("el-option",{attrs:{label:t,value:e+1}})}))],1)],1),t._v(" "),i("td",[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.addPingLun(t.form2,2)}}},[t._v("添 加")])],1)])]),t._v(" "),t._m(1),t._v(" "),i("div",{staticStyle:{"max-height":"600px","overflow-y":"auto"}},[i("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},t._l(t.lishipingjia.shuxing,function(e){return i("tr",[i("td",[t._v(t._s(e[0])+" "),i("span",{staticStyle:{color:"#b80000"}},[t._v("("+t._s(t.selectList[e[1]-1])+")")])]),t._v(" "),i("td",[t._v(t._s(e[2]))]),t._v(" "),i("td",[t._v(t._s(e[3])+" "),i("span",{staticStyle:{color:"#b80000"}},[t._v("("+t._s(t.selectList[e[4]-1])+")")])]),t._v(" "),i("td",[i("el-button",{attrs:{size:"small"},on:{click:function(i){t.delPingLun(e,2)}}},[t._v("删 除")])],1)])}))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"3"==t.radio,expression:"radio=='3'"}]},[i("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},[i("tr",{staticClass:"footer_tr"},[i("td",[t._v("条件：\n\t\t\t\t\t\t\t\t"),i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%",margin:"0 auto"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.form3.word1,callback:function(e){t.$set(t.form3,"word1",e)},expression:"form3.word1"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form3.select,callback:function(e){t.$set(t.form3,"select",e)},expression:"form3.select"}},t._l(t.selectList,function(t,e){return i("el-option",{attrs:{label:t,value:e+1}})}))],1)],1),t._v(" "),i("td",[t._v("关联词："),i("el-input",{staticStyle:{width:"80%",margin:"0 auto"},attrs:{clearable:"",size:"small"},model:{value:t.form3.relation,callback:function(e){t.$set(t.form3,"relation",e)},expression:"form3.relation"}})],1),t._v(" "),i("td",[t._v("结论：\n\t\t\t\t\t\t\t\t"),i("el-input",{staticClass:"input-with-select",staticStyle:{width:"80%",margin:"0 auto"},attrs:{placeholder:"请输入内容",clearable:""},model:{value:t.form3.word2,callback:function(e){t.$set(t.form3,"word2",e)},expression:"form3.word2"}},[i("el-select",{staticStyle:{width:"100px"},attrs:{slot:"prepend",placeholder:"请选择"},slot:"prepend",model:{value:t.form3.select2,callback:function(e){t.$set(t.form3,"select2",e)},expression:"form3.select2"}},t._l(t.selectList,function(t,e){return i("el-option",{attrs:{label:t,value:e+1}})}))],1)],1),t._v(" "),i("td",[i("el-button",{attrs:{size:"small"},on:{click:function(e){t.addPingLun(t.form3,3)}}},[t._v("添 加")])],1)])]),t._v(" "),t._m(2),t._v(" "),i("div",{staticStyle:{"max-height":"600px","overflow-y":"auto"}},[i("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},t._l(t.lishipingjia.guanlian,function(e){return i("tr",[i("td",[t._v(t._s(e[0])+" "),i("span",{staticStyle:{color:"#b80000"}},[t._v("("+t._s(t.selectList[e[1]-1])+")")])]),t._v(" "),i("td",[t._v(t._s(e[2]))]),t._v(" "),i("td",[t._v(t._s(e[3])+" "),i("span",{staticStyle:{color:"#b80000"}},[t._v("("+t._s(t.selectList[e[4]-1])+")")])]),t._v(" "),i("td",[i("el-button",{attrs:{size:"small"},on:{click:function(i){t.delPingLun(e,3)}}},[t._v("删 除")])],1)])}))])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"4"==t.radio,expression:"radio=='4'"}],staticClass:"grid-content modal-content"},[i("div",{staticClass:"btn-add fr",on:{click:function(e){t.yd1=!t.yd1}}},[t._v("+ 添加疑点")]),t._v(" "),i("div",{staticClass:"clear"}),t._v(" "),i("div",{staticClass:"text-area",class:{hidden:t.yd1}},[i("textarea",{directives:[{name:"model",rawName:"v-model",value:t.ydText1,expression:"ydText1"}],staticClass:"area",attrs:{name:"txt",placeholder:"添加疑点",rows:"5"},domProps:{value:t.ydText1},on:{input:function(e){e.target.composing||(t.ydText1=e.target.value)}}}),t._v(" "),i("p",{staticStyle:{height:"50px"}},[i("button",{staticClass:"fr add",attrs:{type:"submit"},on:{click:t.addQues1}},[t._v("添加")])])]),t._v(" "),t.getQuestionData.length>0?i("ul",{staticClass:"list",staticStyle:{"max-height":"600px","overflow-y":"auto"}},t._l(t.getQuestionData,function(e,a){return i("li",[i("div",{staticClass:"hidden",attrs:{id:"yd-id"}},[t._v(t._s(e[0]))]),t._v(" "),i("h3",[t._v("疑点"+t._s(a+1)+"："),i("span",{staticClass:"yd"},[t._v(t._s(e[1]))])]),t._v(" "),i("div",{staticClass:"fr sub",on:{click:function(e){t.appraise1(a)}}},[t._v("提交")]),t._v(" "),i("div",{staticClass:"am-form-group sel",staticStyle:{"margin-top":"10px"}},[i("el-radio-group",{model:{value:t.radio1[a],callback:function(e){t.$set(t.radio1,a,e)},expression:"radio1[index]"}},[i("el-radio",{attrs:{label:"0-"+e[0]}},[t._v("合理")]),t._v(" "),i("el-radio",{attrs:{label:"1-"+e[0]}},[t._v("不合理")])],1)],1)])})):t._e()])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},[e("tr",[e("th",[this._v("实体1")]),this._v(" "),e("th",[this._v("关系")]),this._v(" "),e("th",[this._v("实体2")]),this._v(" "),e("th",[this._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},[e("tr",[e("th",[this._v("实体")]),this._v(" "),e("th",[this._v("属性")]),this._v(" "),e("th",[this._v("值")]),this._v(" "),e("th",[this._v("操作")])])])},function(){var t=this.$createElement,e=this._self._c||t;return e("table",{staticClass:"table_list",attrs:{cellpadding:"0",cellspacing:"0",width:"100%"}},[e("tr",[e("th",[this._v("条件")]),this._v(" "),e("th",[this._v("关联词")]),this._v(" "),e("th",[this._v("结论")]),this._v(" "),e("th",[this._v("操作")])])])}]};var o=i("VU/8")(s,l,!1,function(t){i("y6+/")},"data-v-094d4b5f",null);e.default=o.exports},"y6+/":function(t,e){}});
//# sourceMappingURL=67.67dc11102cc2dbed6061.js.map