webpackJsonp([8],{EPKm:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("fmPE"),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"page4_3"},[n("div",{staticClass:"nav"},[n("ul",{staticClass:"fl"},[n("li",[n("router-link",{staticClass:"item",attrs:{"active-class":"active",to:{path:"/inside/page4_3"}}},[t._v("\n\t\t\t\t\t初稿生成\n\t\t\t\t")])],1)])]),t._v(" "),n("div",{staticClass:"content_page"},[n("div",{staticClass:"page-top"},[n("Place",{staticClass:"fl",attrs:{data:t.msg}}),t._v(" "),n("div",{staticClass:"fr inter"},[n("interBtn",{attrs:{title:"初稿生成疑点",id:"more4_3",ydname:"审计报告自动生成"}})],1)],1),t._v(" "),n("div",[n("div",{staticClass:"box box-border-shadow"},[n("div",{staticClass:"content"},[t.showLoading?n("div",{staticClass:"on-loading"},[t._m(0)]):n("div",{staticClass:"content-box"},[n("h1",{staticClass:"title"},[t._v("某某会计师事务所")]),t._v(" "),n("div",{staticClass:"content-boxs",staticStyle:{"line-height":"32px"}},[n("h1",{staticStyle:{"text-align":"center","font-size":"32px"}},[t._v(t._s(t.content[0].yaosuneirong))]),t._v(" "),n("h2",{staticStyle:{"text-align":"center","font-size":"16px"}},[t._v(t._s(t.content[1].yaosuneirong))]),t._v(" "),n("h3",[t._v(t._s(t.content[2].yaosu)+":")]),t._v(" "),n("p",[t._v(t._s(t.content[2].yaosuneirong))]),t._v(" "),t._l(t.content,function(e,o){return o>2?n("div",[n("h3",[t._v(t._s(e.yaosu))]),t._v(" "),n("p",[t._v(t._s(e.yaosuneirong))])]):t._e()})],2),t._v(" "),n("h3",{staticStyle:{"font-size":"22px","line-height":"44px"}},[t._v("附件：")]),t._v(" "),n("table",{staticStyle:{border:"1px solid #ccc",width:"100%"},attrs:{cellpadding:"20",cellspacing:"0"}},[t._m(1),t._v(" "),t._l(t.content_table,function(e){return n("tr",[n("td",[t._v(t._s(e.biaoming))]),t._v(" "),n("td",[t._v(t._s(e.name))]),t._v(" "),n("td",[t._v(t._s(e.caiwu_db_1))]),t._v(" "),n("td",[t._v(t._s(e.caiwu_db_2))]),t._v(" "),n("td",[t._v(t._s(e.danwei))])])})],2)]),t._v(" "),t._m(2)])])])])])},staticRenderFns:[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"text"},[e("i",{staticClass:"el-icon-loading"}),this._v("拼命加载中....初稿正在生成......\n\t\t\t\t\t\t")])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("tr",[n("td",[t._v("表头")]),t._v(" "),n("td",[t._v("指标")]),t._v(" "),n("td",[t._v("2017年")]),t._v(" "),n("td",[t._v("2018年")]),t._v(" "),n("td",[t._v("单位")])])},function(){var t=this.$createElement,e=this._self._c||t;return e("a",{staticClass:"word-export fr",attrs:{href:"javascript:void(0)"}},[e("i",{staticClass:"am-icon-download"}),this._v(" 导出报告 ")])}]};var i=function(t){n("ZIJD")},s=n("VU/8")(o.a,a,!1,i,null,null);e.default=s.exports},GJUF:function(t,e,n){(function(n){var o,a,i;a=[],void 0===(i="function"==typeof(o=function(){"use strict";var e=function(){try{return Function("return this")()||(0,eval)("this")}catch(t){return"object"==typeof window&&window.window===window?window:"object"==typeof self&&self.self===self?self:"object"==typeof n&&n.global===n?n:this}}();function o(t,e,n){var o=new XMLHttpRequest;o.open("GET",t),o.responseType="blob",o.onload=function(){s(o.response,e,n)},o.onerror=function(){console.error("could not download file")},o.send()}function a(t){var e=new XMLHttpRequest;return e.open("HEAD",t,!1),e.send(),e.status>=200&&e.status<=299}function i(t){try{t.dispatchEvent(new MouseEvent("click"))}catch(n){var e=document.createEvent("MouseEvents");e.initMouseEvent("click",!0,!0,window,0,0,0,80,20,!1,!1,!1,!1,0,null),t.dispatchEvent(e)}}var s=e.saveAs||"object"!=typeof window||window!==e?function(){}:"download"in HTMLAnchorElement.prototype?function(t,n,s){var r=e.URL||e.webkitURL,c=document.createElement("a");n=n||t.name||"download",c.download=n,c.rel="noopener","string"==typeof t?(c.href=t,c.origin!==location.origin?a(c.href)?o(t,n,s):i(c,c.target="_blank"):i(c)):(c.href=r.createObjectURL(t),setTimeout(function(){r.revokeObjectURL(c.href)},4e4),setTimeout(function(){i(c)},0))}:"msSaveOrOpenBlob"in navigator?function(t,e,n){if(e=e||t.name||"download","string"==typeof t)if(a(t))o(t,e,n);else{var i=document.createElement("a");i.href=t,i.target="_blank",setTimeout(function(){clikc(i)})}else navigator.msSaveOrOpenBlob(function(t,e){return void 0===e?e={autoBom:!1}:"object"!=typeof e&&(console.warn("Depricated: Expected third argument to be a object"),e={autoBom:!e}),e.autoBom&&/^\s*(?:text\/\S*|application\/xml|\S*\/\S*\+xml)\s*;.*charset\s*=\s*utf-8/i.test(t.type)?new Blob([String.fromCharCode(65279),t],{type:t.type}):t}(t,n),e)}:function(t,n,a,i){if((i=i||open("","_blank"))&&(i.document.title=i.document.body.innerText="downloading..."),"string"==typeof t)return o(t,n,a);var s="application/octet-stream"===t.type,r=/constructor/i.test(e.HTMLElement)||e.safari,c=/CriOS\/[\d]+/.test(navigator.userAgent);if((c||s&&r)&&"object"==typeof FileReader){var l=new FileReader;l.onloadend=function(){var t=l.result;t=c?t:t.replace(/^data:[^;]*;/,"data:attachment/file;"),i?i.location.href=t:location=t,i=null},l.readAsDataURL(t)}else{var d=e.URL||e.webkitURL,u=d.createObjectURL(t);i?i.location=u:location.href=u,i=null,setTimeout(function(){d.revokeObjectURL(u)},4e4)}};t.exports=e.saveAs=s.saveAs=s})?o.apply(e,a):o)||(t.exports=i)}).call(e,n("DuR2"))},ZIJD:function(t,e){},fmPE:function(t,e,n){"use strict";(function(t){var o=n("mvHQ"),a=n.n(o),i=n("/hEK"),s=n("0k2b"),r=n("Nf9k"),c=n("GJUF"),l=(n.n(c),n("t8SU"));n.n(l);e.a={name:"page4_3",components:{interBtn:i.a,Place:s.a},data:function(){return{msg:["审计报告自动生成","初稿生成"],content:[],content_table:{},showLoading:!0}},computed:{companyName:function(){return JSON.parse(this.$store.getters.getCompany).value},getFormData:function(){var t=sessionStorage.getItem("baogaoForm");return JSON.parse(t)},getBgys:function(){var t=[];return JSON.parse(sessionStorage.getItem("baogaoyaosu")).forEach(function(e){e=e.slice(0,e.indexOf(" ")),t.push(e)}),console.log(t),a()(t)}},methods:{getContent:function(){var t=this;if(this.getFormData){this.content="";var e=sessionStorage.getItem("AuditDoubt"),n=sessionStorage.getItem("AuditDoubt_fagui"),o=sessionStorage.getItem("WordCloud");r.a.req({apiName:"first_arcitle",data:{bg_titl:this.getFormData.title,yidian:o,bg_id:this.getFormData.num,sj_name:this.getFormData.name,name:this.getFormData.author,ys_id:this.getBgys,gs_name:this.companyName,AuditDoubt:e,AuditDoubt_fagui:n}}).then(function(e){if((e=e.data)&&"200"===e.code){t.showLoading=!1;var n=e.data,o=e.data_cw,a=[];console.log(n),t.content=n;for(var i=0;i<o.name.length;i++)a.push({biaoming:o.biaoming[i],caiwu_db_1:o.caiwu_db_1[i],caiwu_db_2:o.caiwu_db_2[i],danwei:o.danwei[i],name:o.name[i]});console.log(a),t.content_table=a,sessionStorage.setItem("first_arcitle",n)}}).catch(function(t){console.log(t)})}else alert("请完成报告准备阶段"),this.$router.push({name:"page4_1"})}},mounted:function(){this.getContent(),t(function(){t("a.word-export").click(function(e){t(".content-box").wordExport("审计报告")})})}}}).call(e,n("0iPh"))},t8SU:function(t,e,n){(function(t){var e;console.log(t),console.log(saveAs),void 0!==t&&"undefined"!=typeof saveAs?(e=t).fn.wordExport=function(t){t=void 0!==t?t:"jQuery-Word-Export";var n={mhtml:{top:"Mime-Version: 1.0\nContent-Base: "+location.href+'\nContent-Type: Multipart/related; boundary="NEXT.ITEM-BOUNDARY";type="text/html"\n\n--NEXT.ITEM-BOUNDARY\nContent-Type: text/html; charset="utf-8"\nContent-Location: '+location.href+"\n\n<!DOCTYPE html>\n<html>\n_html_</html>",head:'<head>\n<meta http-equiv="Content-Type" content="text/html; charset=utf-8">\n<style>\n_styles_\n</style>\n</head>\n',body:"<body>_body_</body>"}},o=624,a=e(this).clone();a.each(function(){var t=e(this);t.is(":hidden")&&t.remove()});for(var i=Array(),s=a.find("img"),r=0;r<s.length;r++){var c=Math.min(s[r].width,o),l=s[r].height*(c/s[r].width),d="#"+s[r].id;e("<canvas>").attr("id","test_word_img_"+r).width(c).height(l).insertAfter(d)}var u="\n";for(r=0;r<i.length;r++)u+="--NEXT.ITEM-BOUNDARY\n",u+="Content-Location: "+i[r].location+"\n",u+="Content-Type: "+i[r].type+"\n",u+="Content-Transfer-Encoding: "+i[r].encoding+"\n\n",u+=i[r].data+"\n\n";u+="--NEXT.ITEM-BOUNDARY--";var v=n.mhtml.top.replace("_html_",n.mhtml.head.replace("_styles_","\n                        body{\n                            width:50%;\n                        }\n                        .title{\n                            text-align: center;\n                            font-family: 隶书;\n                            letter-spacing: 3.0000pt;\n                            font-weight: bold;\n                            font-size: 24.0000pt;\n                        }")+n.mhtml.body.replace("_body_",a.html()))+u,f=new Blob([v],{type:"application/msword;charset=utf-8"});saveAs(f,t+".doc")}:(void 0===t&&console.error("jQuery Word Export: missing dependency (jQuery)"),"undefined"==typeof saveAs&&console.error("jQuery Word Export: missing dependency (FileSaver.js)"))}).call(e,n("0iPh"))}});
//# sourceMappingURL=8.bd7e4877744976b72fdd.js.map