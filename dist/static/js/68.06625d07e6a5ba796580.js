webpackJsonp([68],{"5PHk":function(t,e){},gP3L:function(t,e,i){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=i("0k2b"),s=(i("Nf9k"),i("5SB6")),o=(i("jOKt"),{name:"biaoshi",data:function(){return{msg:["审计准备","审计数据及维度","单证电子化"],imageUrl:"",file:"",message:"只能上传图片文件",step:1,content:"",going:"正在识别，请稍等。。。。",type:"",imgUrl:"",headerImage:"",picValue:"",cropper:"",croppable:!1,panel:!0}},components:{Place:a.a},mounted:function(){},methods:{beforeAvatarUpload:function(t){console.log(t);t.type,t.size;this.file=t,this.imageUrl=t.name},onload:function(){this.imgUrl=window.URL.createObjectURL(this.file),console.log(window.URL.createObjectURL(this.file))},photo:function(){if(""===this.file)alert("请先上传文档");else{this.step=2;var t=this,e=document.getElementById("image");this.cropper=new s.a(e,{aspectRatio:1,viewMode:1,background:!1,zoomable:!1,ready:function(){t.croppable=!0}})}},getObjectURL:function(t){var e=null;return void 0!=window.createObjectURL?e=window.createObjectURL(t):void 0!=window.URL?e=window.URL.createObjectURL(t):void 0!=window.webkitURL&&(e=window.webkitURL.createObjectURL(t)),e},change:function(t){var e=t.target.files||t.dataTransfer.files;e.length&&(this.panel=!0,this.picValue=e[0],this.imgUrl=this.getObjectURL(this.picValue),this.cropper&&this.cropper.replace(this.imgUrl),this.panel=!0)},crop:function(){var t,e;this.panel=!1,this.croppable&&(t=this.cropper.getCroppedCanvas(),console.log(this.cropper),e=this.getRoundedCanvas(t),this.headerImage=e.toDataURL(),this.imgUrl=this.headerImage,console.log(e.toDataURL()),this.postImg())},getRoundedCanvas:function(t){var e=document.createElement("canvas"),i=e.getContext("2d"),a=t.width,s=t.height;return e.width=a,e.height=s,i.imageSmoothingEnabled=!0,i.drawImage(t,0,0,a,s),i.globalCompositeOperation="destination-in",i.beginPath(),i.fillRect(0,0,a,s),i.fill(),e},postImg:function(){},submit:function(){var t=this;this.going="正在识别，请稍等。。。。",this.content="",console.log(this.file);this.file.type;if(""===this.file)alert("请先上传文档");else{this.step=3;var e=new FormData;e.append("headimg",this.file),console.log(e);this.$axios.post("http://121.42.29.188:10000/fapiaoshibie",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(e){if((e=e.data)&&"200"===e.code){var i=e.data;console.log(i),t.file,t.content=i,console.log(t.content),t.step=4}}).catch(function(e){t.going="识别失败"})}}},computed:{userName:function(){return sessionStorage.getItem("username")}}}),n={render:function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"page1_3_3"},[i("div",{staticClass:"page-top"},[i("Place",{staticClass:"fl",attrs:{data:t.msg}})],1),t._v(" "),i("div",{staticClass:"fc-box box-border-shadow"},[i("div",{staticClass:"am-container"},[i("div",{staticClass:"content"},[i("el-steps",{attrs:{active:t.step}},[i("el-step",{attrs:{title:"图片上传"}}),t._v(" "),i("el-step",{attrs:{title:"正在识别图片"}}),t._v(" "),i("el-step",{attrs:{title:"识别完成"}})],1),t._v(" "),i("div",{staticClass:"box updateImg",class:{hidden:1!=t.step}},[i("form",[i("div",[i("label",[t._v("文件类型：")]),t._v(" "),i("el-select",{staticStyle:{"margin-bottom":"20px"},attrs:{placeholder:"请选择文件类型"},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[i("el-option",{attrs:{label:".png",value:".png"}}),t._v(" "),i("el-option",{attrs:{label:".jpg",value:".jpg"}}),t._v(" "),i("el-option",{attrs:{label:".pdf",value:".pdf"}})],1)],1),t._v(" "),i("div",{staticClass:"upload-demo"},[i("el-upload",{staticClass:"upload-demo",attrs:{drag:"",action:"","http-request":t.onload,"show-file-list":!1,"before-upload":t.beforeAvatarUpload,multiple:""}},[i("i",{staticClass:"el-icon-upload"}),t._v(" "),i("div",{staticClass:"el-upload__text"},[i("div",[t._v("将文件拖到此处，或"),i("em",[t._v("点击上传")])]),t._v(" "),i("div",[t._v(t._s(t.imageUrl))])])]),t._v(" "),i("div",{staticClass:"el-upload__tip",staticStyle:{margin:"10px auto 20px"}},[t._v(t._s(t.message))])],1),t._v(" "),i("el-button",{attrs:{type:"primary",plain:""},on:{click:t.submit}},[t._v("图片识别")])],1)]),t._v(" "),i("div",{staticClass:"box going",class:{hidden:3!=t.step},staticStyle:{"font-size":"26px","line-height":"44px"}},[i("div",{staticStyle:{"margin-bottom":"20px"}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"识别失败"!=t.going,expression:"going!='识别失败'"}],staticClass:"am-icon-spinner am-icon-spin"}),t._v(" "+t._s(t.going))]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:"识别失败"==t.going,expression:"going=='识别失败'"}],staticClass:"el-button el-button--primary is-plain",on:{click:function(e){t.step=1}}},[t._v("返回第一步继续识别图片")])]),t._v(" "),i("div",{staticClass:"box finish",class:{hidden:4!=t.step},staticStyle:{padding:"80px"}},[i("img",{attrs:{src:t.imgUrl,width:"500",height:"auto"}}),i("br"),t._v(" "),i("hr"),t._v(" "),i("div",{staticStyle:{width:"90%",margin:"0 auto","text-align":"left","font-size":"16px","line-height":"34px"}},[i("h2",{staticStyle:{"text-align":"center","font-weight":"bold",color:"#b80000","font-size":"20px","line-height":"44px"}},[t._v("识别结果")]),t._v(" "),i("div",{staticClass:"msg"},t._l(t.content,function(e,a){return i("el-row",{staticStyle:{"border-bottom":"1px solid #ebebf0"},attrs:{gutter:20}},[i("el-col",{staticStyle:{"text-align":"right",color:"#b80000"},attrs:{span:6}},[t._v(t._s(a)+" :")]),t._v(" "),i("el-col",{attrs:{span:18}},[t._v(t._s(e||"无"))])],1)}))]),t._v(" "),i("div",{staticClass:"el-button el-button--primary is-plain",on:{click:function(e){t.step=1}}},[t._v("返回第一步继续识别图片")])])],1)])])])},staticRenderFns:[]};var l=i("VU/8")(o,n,!1,function(t){i("5PHk")},"data-v-049cd1c8",null);e.default=l.exports}});
//# sourceMappingURL=68.06625d07e6a5ba796580.js.map