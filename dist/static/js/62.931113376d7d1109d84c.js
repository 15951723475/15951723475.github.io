webpackJsonp([62],{A7AE:function(t,i){},JYO7:function(t,i,n){"use strict";Object.defineProperty(i,"__esModule",{value:!0});var e=n("0k2b"),a=n("XLwt"),s=n("/hEK"),o=n("Nf9k"),l={name:"page1_2_2",data:function(){return{msg:["审计准备","审计标准及依据","行业规范"],currentPage:1,pages:12,faguiList:[{name:"变现能力比率",content:"变现能力是企业产生现金的能力，它取决于可以在近期转变为现金的流动资产的多少。",value:[{name:"流动比率",gongshi:"公式：流动比率=流动资产合计 / 流动负债合计",num:"企业设置的标准值：2",yiyi:"意义：体现企业的偿还短期债务的能力。流动资产越多，短期债务越少，则流动比率越大，企业的短期偿债能力越强。",fenxitishi:"分析提示：低于正常值，企业的短期偿债风险较大。一般情况下，营业周期、流动资产中的应收账款数额和存货的周转速度是影响流动比率的主要因素。"},{name:"速动比率",gongshi:"公式 ：速动比率=（流动资产合计-存货）/ 流动负债合计;保守速动比率=0.8（货币资金+短期投资+应收票据+应收账款净额）/ 流动负债",num:"企业设置的标准值：1",yiyi:"意义：比流动比率更能体现企业的偿还短期债务的能力。因为流动资产中，尚包括变现速度较慢且可能已贬值的存货，因此将流动资产扣除存货再与流动负债对比，以衡量企业的短期偿债能力。",fenxitishi:"分析提示：低于1 的速动比率通常被认为是短期偿债能力偏低。影响速动比率的可信性的重要因素是应收账款的变现能力，账面上的应收账款不一定都能变现，也不一定非常可靠。 \n\t\t\t\t\t\t\t\t变现能力分析总提示：\n\t\t\t\t\t\t\t\t（1）增加变现能力的因素：可以动用的银行贷款指标；准备很快变现的长期资产；偿债能力的声誉。\n\t\t\t\t\t\t\t\t（2）减弱变现能力的因素：未作记录的或有负债；担保责任引起的或有负债。"}]},{name:"资产管理比率",value:[{name:"存货周转率",gongshi:"公式： 存货周转率=产品销售成本 / [（期初存货+期末存货）/2]",num:"企业设置的标准值：3",yiyi:"意义：存货的周转率是存货周转速度的主要指标。提高存货周转率，缩短营业周期，可以提高企业的变现能力。",fenxitishi:"分析提示：存货周转速度反映存货管理水平，存货周转率越高，存货的占用水平越低，流动性越强，存货转换为现金或应收账款的速度越快。它不仅影响企业的短期偿债能力，也是整个企业管理的重要内容。"},{name:"存货周转天数",gongshi:"公式： 存货周转天数=360/存货周转率=[360*（期初存货+期末存货）/2]/ 产品销售成本",num:"企业设置的标准值：120",yiyi:"意义：企业购入存货、投入生产到销售出去所需要的天数。提高存货周转率，缩短营业周期，可以提高企业的变现能力。",fenxitishi:"分析提示：存货周转速度反映存货管理水平，存货周转速度越快，存货的占用水平越低，流动性越强，存货转换为现金或应收账款的速度越快。它不仅影响企业的短期偿债能力，也是整个企业管理的重要内容。"},{name:"应收账款周转率",dingyi:"定义：指定的分析期间内应收账款转为现金的平均次数。",gongshi:"公式：应收账款周转率=销售收入/[（期初应收账款+期末应收账款）/2]",num:"企业设置的标准值：3",yiyi:"意义：应收账款周转率越高，说明其收回越快。反之，说明营运资金过多呆滞在应收账款上，影响正常资金周转及偿债能力。",fenxitishi:"分析提示：应收账款周转率，要与企业的经营方式结合考虑。以下几种情况使用该指标不能反映实际情况：第一，季节性经营的企业；第二，大量使用分期收款结算方式；第三，大量使用现金结算的销售；第四，年末大量销售或年末销售大幅度下降。"},{name:"应收账款周转天数",dingyi:"定义：表示企业从取得应收账款的权利到收回款项、转换为现金所需要的时间。",gongshi:"公式：应收账款周转天数=360 / 应收账款周转率 \n\t\t\t\t\t\t\t\t\t=（期初应收账款+期末应收账款）/2] / 产品销售收入 ",num:"企业设置的标准值：100",yiyi:"意义：应收账款周转率越高，说明其收回越快。反之，说明营运资金过多呆滞在应收账款上，影响正常资金周转及偿债能力。",fenxitishi:"分析提示：应收账款周转率，要与企业的经营方式结合考虑。以下几种情况使用该指标不能反映实际情况：第一，季节性经营的企业；第二，大量使用分期收款结算方式；第三，大量使用现金结算的销售；第四，年末大量销售或年末销售大幅度下降。"},{name:"营业周期",gongshi:"公式：营业周期=存货周转天数+应收账款周转天数 \n\t\t\t\t\t\t\t\t\t\t={[（期初存货+期末存货）/2]* 360}/产品销售成本+{[（期初应收账款+期末应收账款）/2]* 360}/产品销售收入",num:"企业设置的标准值：200",yiyi:"意义：营业周期是从取得存货开始到销售存货并收回现金为止的时间。一般情况下，营业周期短，说明资金周转速度快；营业周期长，说明资金周转速度慢。",fenxitishi:"分析提示：营业周期，一般应结合存货周转情况和应收账款周转情况一并分析。营业周期的长短，不仅体现企业的资产管理水平，还会影响企业的偿债能力和盈利能力。 "},{name:"流动资产周转率",gongshi:"公式：流动资产周转率=销售收入/[（期初流动资产+期末流动资产）/2]",num:"企业设置的标准值：1",yiyi:"意义：流动资产周转率反映流动资产的周转速度，周转速度越快，会相对节约流动资产，相当于扩大资产的投入，增强企业的盈利能力；而延缓周转速度，需补充流动资产参加周转，形成资产的浪费，降低企业的盈利能力。",fenxitishi:"分析提示： 流动资产周转率要结合存货、应收账款一并进行分析，和反映盈利能力的指标结合在一起使用，可全面评价企业的盈利能力。"},{name:"总资产周转率",gongshi:"公式：总资产周转率=销售收入/[（期初资产总额+期末资产总额）/2] ",num:"企业设置的标准值：0.8",yiyi:"意义：该项指标反映总资产的周转速度，周转越快，说明销售能力越强。企业可以采用薄利多销的方法，加速资产周转，带来利润绝对额的增加。",fenxitishi:"分析提示：总资产周转指标用于衡量企业运用资产赚取利润的能力。经常和反映盈利能力的指标一起使用，全面评价企业的盈利能力。"}]},{name:"负债比率",content:"负债比率是反映债务和资产、净资产关系的比率。它反映企业偿付到期长期债务的能力。",value:[{name:"资产负债比率",gongshi:"公式：资产负债率=（负债总额 / 资产总额）*100% ",num:"企业设置的标准值：0.7",yiyi:"意义：反映债权人提供的资本占全部资本的比例。该指标也被称为举债经营比率。",fenxitishi:"分析提示：负债比率越大，企业面临的财务风险越大，获取利润的能力也越强。如果企业资金不足，依靠欠债维持，导致资产负债率特别高，偿债风险就应该特别注意了。 资产负债率在60％—70％，比较合理、稳健；达到85％及以上时，应视为发出预警信号，企业应提起足够的注意。"},{name:"产权比率",gongshi:"公式：产权比率=（负债总额 /股东权益）*100%",num:"企业设置的标准值：1.2",yiyi:"意义：反映债权人与股东提供的资本的相对比例。反映企业的资本结构是否合理、稳定。同时也表明债权人投入资本受到股东权益的保障程度。",fenxitishi:"分析提示：一般说来，产权比率高是高风险、高报酬的财务结构，产权比率低，是低风险、低报酬的财务结构。从股东来说，在通货膨胀时期，企业举债，可以将损失和风险转移给债权人；在经济繁荣时期，举债经营可以获得额外的利润；在经济萎缩时期，少借债可以减少利息负担和财务风险。"},{name:"有形净值债务率",gongshi:"公式：有形净值债务率=[负债总额/（股东权益-无形资产净值）]*100%",num:"企业设置的标准值：1.5",yiyi:"意义：产权比率指标的延伸，更为谨慎、保守地反映在企业清算时债权人投入的资本受到股东权益的保障程度。不考虑无形资产包括商誉、商标、专利权以及非专利技术等的价值，它们不一定能用来还债，为谨慎起见，一律视为不能偿债。",fenxitishi:"分析提示：从长期偿债能力看，较低的比率说明企业有良好的偿债能力，举债规模正常。 "},{name:"已获利息倍数",gongshi:"公式：已获利息倍数=息税前利润 / 利息费用 \n\t\t\t\t\t\t\t\t=（利润总额+财务费用）/（财务费用中的利息支出+资本化利息） \n\t\t\t\t\t\t\t\t通常也可用近似公式: \n\t\t\t\t\t\t\t\t已获利息倍数=（利润总额+财务费用）/ 财务费用",num:"企业设置的标准值：2.5",yiyi:"意义：企业经营业务收益与利息费用的比率，用以衡量企业偿付借款利息的能力，也叫利息保障倍数。只要已获利息倍数足够大，企业就有充足的能力偿付利息。 ",fenxitishi:"分析提示：企业要有足够大的息税前利润，才能保证负担得起资本化利息。该指标越高，说明企业的债务利息压力越小。"}]},{name:"盈利能力比率",content:"盈利能力就是企业赚取利润的能力。不论是投资人还是债务人，都非常关心这个项目。在分析盈利能力时，应当排除证券买卖等非正常项目、已经或将要停止的营业项目、重大事故或法律更改等特别项目、会计政策和财务制度变更带来的累积影响数等因素。",value:[{name:"销售净利率",gongshi:"公式：销售净利率=净利润 / 销售收入*100%",num:"企业设置的标准值：0.1",yiyi:"意义：该指标反映每一元销售收入带来的净利润是多少。表示销售收入的收益水平。",fenxitishi:"分析提示：企业在增加销售收入的同时，必须要相应获取更多的净利润才能使销售净利率保持不变或有所提高。销售净利率可以分解成为销售毛利率、销售税金率、销售成本率、销售期间费用率等指标进行分析。"},{name:"销售毛利率",gongshi:"公式：销售毛利率=[（销售收入-销售成本）/ 销售收入]*100%",num:"企业设置的标准值：0.15",yiyi:"意义：表示每一元销售收入扣除销售成本后，有多少钱可以用于各项期间费用和形成盈利。",fenxitishi:"分析提示：销售毛利率是企业是销售净利率的最初基础，没有足够大的销售毛利率便不能形成盈利。企业可以按期分析销售毛利率，据以对企业销售收入、销售成本的发生及配比情况作出判断。"},{name:"资产净利率（总资产报酬率）",gongshi:"公式：资产净利率=净利润/ [（期初资产总额+期末资产总额）/2]*100%",num:"企业设置的标准值：根据实际情况而定",yiyi:"意义：把企业一定期间的净利润与企业的资产相比较，表明企业资产的综合利用效果。指标越高，表明资产的利用效率越高，说明企业在增加收入和节约资金等方面取得了良好的效果，否则相反。",fenxitishi:"分析提示：资产净利率是一个综合指标。净利的多少与企业的资产的多少、资产的结构、经营管理水平有着密切的关系。影响资产净利率高低的原因有：产品的价格、单位产品成本的高低、产品的产量和销售的数量、资金占用量的大小。可以结合杜邦财务分析体系来分析经营中存在的问题。 "},{name:"净资产收益率（权益报酬率）",gongshi:"公式：净资产收益率=净利润/ [（期初所有者权益合计+期末所有者权益合计）/2]*100%",num:"企业设置的标准值：0.08",yiyi:"意义：净资产收益率反映公司所有者权益的投资报酬率，也叫净值报酬率或权益报酬率，具有很强的综合性。是最重要的财务比率。",fenxitishi:"分析提示：杜邦分析体系可以将这一指标分解成相联系的多种因素，进一步剖析影响所有者权益报酬的各个方面。如资产周转率、销售利润率、权益乘数。另外，在使用该指标时，还应结合对“应收账款”、“其他应收款” 、“ 待摊费用”进行分析。"}]}],faguiXq:{},dialogVisible:!1,findWord:"",selectArea:"",imgShow:!1,tree:!1}},components:{Place:e.a,interBtn:s.a},filters:{trimStr:function(t){return t.trim()}},methods:{optionTree:function(t){return{tooltip:{trigger:"item",triggerOn:"mousemove"},textStyle:{color:"#000",fontSize:14},series:[{type:"tree",data:t,top:"14%",bottom:"14%",expandAndCollapse:!1,layout:"radial",itemStyle:{borderColor:"#c24b4b"},symbol:"emptyCircle",symbolSize:7,initialTreeDepth:3,animationDurationUpdate:750}]}},search:function(t){var i=this,n=this;if(n.imgShow=!1,n.treeList=!1,n.tree=!1,""===t)alert("请填写需要查询的关键词");else{this.tree=!0;var e=a.init(document.getElementById("searchTree"));e.showLoading(),o.a.req({apiName:"searchTree",data:{name:t}}).then(function(t){if((t=t.data)&&"200"===t.code){e.hideLoading();var a=t.data;console.log(a),a.length>0?e.setOption(i.optionTree(a)):n.imgShow=!0}else n.imgShow=!0}).catch(function(t){n.imgShow=!0,console.log(t)})}},handleSizeChange:function(t){console.log("每页 "+t+" 条")},getListPages:function(){var t=this;o.a.req({apiName:"zh_listPages"}).then(function(i){if((i=i.data)&&"200"===i.code){var n=i.data;console.log(n),t.pages=Number(n)}}).catch(function(t){console.log(t)})},handleCurrentChange:function(t){var i=this;this.faguiList=cwDataArr,o.a.req({apiName:"zh_faguiList",data:{num:this.currentPage}}).then(function(t){if((t=t.data)&&"200"===t.code){var n=t.data;console.log(n),i.faguiList=n}}).catch(function(t){console.log(t)})},xqModel:function(t){this.dialogVisible=!0,this.faguiXq=t},xqModel1:function(t){this.dialogVisible=!0;var i='<div class="title">'+t.name+'</div><div class="gs">'+t.gongshi+'</div><div class="num">'+t.num+'</div><div class="yy">'+t.yiyi+'</div><div class="fxts">'+t.fenxitishi+"</div>";this.faguiXq=i}},mounted:function(){}},c={render:function(){var t=this,i=t.$createElement,n=t._self._c||i;return n("div",{staticClass:"page1_2_2"},[n("div",{staticClass:"page-top"},[n("Place",{staticClass:"fl",attrs:{data:t.msg}}),t._v(" "),n("div",{staticClass:"fr inter"},[n("interBtn",{attrs:{title1:"审计标准及依据",title:"行业规范",id:"more1_2_2",ydname:"审计准备"}})],1)],1),t._v(" "),n("el-dialog",{staticClass:"xqModel",attrs:{visible:t.dialogVisible,width:"50%"},on:{"update:visible":function(i){t.dialogVisible=i}}},[n("p",{staticClass:"cont",domProps:{innerHTML:t._s(t.faguiXq)}})]),t._v(" "),n("div",[n("div",{staticClass:"cont box-border-shadow"},[n("ul",t._l(t.faguiList,function(i){return t.faguiList.length>0?n("li",[n("ul",t._l(i.value,function(i){return n("li",{staticClass:"item"},[n("p",{staticClass:"item-head",on:{click:function(n){t.xqModel1(i)}}},[n("span",{staticClass:"icon-fl"},[t._v("财务指标")]),t._v(" "),n("span",{staticClass:"title"},[t._v("《 "+t._s(i.name)+" 》")])]),t._v(" "),n("p",{staticClass:"item-b"},[n("span",{staticClass:"btn1 btn"},[t._v(t._s(i.num))]),t._v("   |   "),n("span",{staticClass:"btn2 btn",on:{click:function(n){t.xqModel(i.gongshi)}}},[t._v("公式")]),t._v("   |   "),n("span",{staticClass:"btn3 btn",on:{click:function(n){t.xqModel(i.yiyi)}}},[t._v("意义")]),t._v("   |   "),n("span",{staticClass:"btn4 btn",on:{click:function(n){t.xqModel(i.fenxitishi)}}},[t._v("分析提示")])])])}))]):t._e()}))])])],1)},staticRenderFns:[]};var g=n("VU/8")(l,c,!1,function(t){n("A7AE")},"data-v-24aff21f",null);i.default=g.exports}});
//# sourceMappingURL=62.931113376d7d1109d84c.js.map