(function(t){function e(e){for(var n,o,r=e[0],c=e[1],p=e[2],u=0,d=[];u<r.length;u++)o=r[u],Object.prototype.hasOwnProperty.call(a,o)&&a[o]&&d.push(a[o][0]),a[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(t[n]=c[n]);f&&f(e);while(d.length)d.shift()();return s.push.apply(s,p||[]),i()}function i(){for(var t,e=0;e<s.length;e++){for(var i=s[e],n=!0,r=1;r<i.length;r++){var c=i[r];0!==a[c]&&(n=!1)}n&&(s.splice(e--,1),t=o(o.s=i[0]))}return t}var n={},a={index:0},s=[];function o(e){if(n[e])return n[e].exports;var i=n[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,o),i.l=!0,i.exports}o.m=t,o.c=n,o.d=function(t,e,i){o.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},o.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},o.t=function(t,e){if(1&e&&(t=o(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(o.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)o.d(i,n,function(e){return t[e]}.bind(null,n));return i},o.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return o.d(e,"a",e),e},o.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},o.p="https://magicaz.github.io/mpreport/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=e,r=r.slice();for(var p=0;p<r.length;p++)e(r[p]);var f=c;s.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"0123":function(t,e,i){t.exports=i.p+"img/sap-1.7c831966.jpg"},"034f":function(t,e,i){"use strict";i("85ec")},1106:function(t,e,i){t.exports=i.p+"img/fe-2.bacbb77f.png"},1867:function(t,e,i){t.exports=i.p+"img/e2-2-2.20f58d26.png"},"1d2f":function(t,e,i){t.exports=i.p+"img/def2-1.c2f1915e.png"},"222d":function(t,e,i){t.exports=i.p+"img/e4-1-1.ed777ae5.png"},2640:function(t,e,i){},2812:function(t,e,i){t.exports=i.p+"img/e2-1-2.df1e8828.png"},"292d":function(t,e,i){"use strict";i("a665")},"31be":function(t,e,i){t.exports=i.p+"img/def1-3.f7189518.png"},"41e2":function(t,e,i){t.exports=i.p+"img/def2-2.3bf7dd03.png"},"4c4c":function(t,e,i){t.exports=i.p+"img/e1-1-1.06aa0187.png"},"4ebe":function(t,e,i){t.exports=i.p+"img/sap-5.4452170b.jpg"},5141:function(t,e,i){},5144:function(t,e,i){t.exports=i.p+"img/sap-2.e6d19a14.jpg"},"56d7":function(t,e,i){"use strict";i.r(e);i("e260"),i("e6cf"),i("cca6"),i("a79d");var n=i("2b0e"),a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("div",{attrs:{id:"BigBanner"}},[i("Banner")],1),i("div",{attrs:{id:"content"}},[i("MainContent")],1)])},s=[],o=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"banner"}},[n("div",{staticClass:"h1"},[t._v(t._s(t.title))]),n("div",{staticClass:"h2"},[t._v(t._s(t.subTitle))]),n("img",{staticClass:"logo",attrs:{id:"img-jiaoda",alt:"Xi'an Jiaotong Univeristy",src:i("beae")}}),t._m(0)])},r=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"button-field"},[i("a",{staticClass:"a",attrs:{href:"https://github.com/Magicaz/mp_report_download/blob/main/report_front.pdf"}},[i("button",{staticClass:"button"},[i("div",{staticClass:"inButton"},[t._v("全文下载")])])]),i("a",{staticClass:"a",attrs:{href:"https://aclanthology.org/2021.acl-long.180/"}},[i("button",{staticClass:"button"},[i("div",{staticClass:"inButton"},[t._v("数据集下载")])])]),i("a",{staticClass:"a",attrs:{href:"https://aclanthology.org/2021.acl-long.180/"}},[i("button",{staticClass:"button"},[i("div",{staticClass:"inButton"},[t._v("更多信息")])])])])}],c={name:"Banner",data:function(){return{title:"小程序隐私安全风险报告",subTitle:"research on privacy statement of miniprogram & dataflow analysis tool for miniprogram"}}},p=c,f=(i("f230"),i("2877")),u=Object(f["a"])(p,o,r,!1,null,null,null),d=u.exports,l=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"main"}},[i("h1",{staticStyle:{"font-size":"50px"}},[t._v("关于")]),i("el-divider"),i("p",{staticClass:"text"},[t._v("本报告针对小程序生态中的隐私安全问题进行了分析，从隐私权政策的规则展示和内容合规，以及行为一致性和安全风险，归纳了小程序存在四大类隐私安全风险。对来自微信、支付宝、百度等在内的7个平台的6069个小程序采取了自动化分析与人工审查相结合的评测，结果显示3611个小程序（占比59.5%）存在收集使用个人信息的行为，然而仅有513个小程序（占比8.5%）提供隐私权政策内容。对这513个小程序提供的隐私权政策内容和程序行为进行详细分析并完成分析报告，发现508个小程序至少存在一个违规问题，如425个小程序（占比7.0%）存在公开性问题，327个小程序（占比5.4%）存在自愿性问题等。此外，在分析5556个未提供隐私权政策内容的小程序，发现多项特殊问题，如APP的隐私权政策移植到小程序上的不适配、由于小程序白名单限制导致隐私政策打不开等，选择121个小程序进行详细分析并完成分析报告。 ")]),i("div",{staticClass:"chart-content"},[i("ChartContent")],1),i("div",[i("Sample")],1)],1)},m=[],_=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("h1",{staticStyle:{"font-size":"50px"}},[t._v("问题示例")]),i("el-divider"),i("div",{staticClass:"pane"},[i("div",{staticClass:"top"},[i("div",{staticClass:"top-button-chart"},t._l(t.top_button_data,(function(e,n){return i("div",{key:n,class:[{"top-button":t.item_1!=n},{"top-selected":t.item_1==n}],on:{click:function(e){return t.set_item_1(n)}}},[t._v(" "+t._s(e)+" ")])})),0)]),i("div",{staticClass:"side-button-chart"},t._l(t.side_button_data.title[t.item_1],(function(e,n){return i("div",{key:e,staticClass:"side-button"},[i("div",{staticClass:"side-button-text",on:{click:function(e){return t.set_item_2(n)}}},[t._v(" "+t._s(e)+" ")]),t._l(t.cur_item,(function(e,a){return i("div",{directives:[{name:"show",rawName:"v-show",value:t.item_2==n,expression:"item_2 == i"}],key:e,class:[{"side-selected":a==t.item_3},{"sub-item":a!=t.item_3}]},[i("div",{staticClass:"side-item-text",on:{click:function(e){return t.set_item_3(a)}}},[t._v(" "+t._s(e)+" ")])])}))],2)})),0),t.show_prb?i("MpProblem",{ref:"prb"}):t._e(),t.show_chart?i("Chart",{ref:"ch"}):t._e(),t.show_def?i("Def",{ref:"def"}):t._e()],1)],1)},g=[],h=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"mainContent"}},[i("div",{ref:"chart",staticClass:"echarts"})])},b=[],x=i("313e"),v={name:"Chart",props:["which"],data:function(){return{chart_data:[[{title:"公开性统计数据",item:["个人信息收集使用规则难以访问","有用户协议等相关规则\n\n但是没有个人信息收集使用内容的","首次打开、加载时\n\n无个人信息收集使用规则的阅读提示"],digit:[38,37,419]},{title:"自愿性统计数据",item:["用户表示不同意后仍频繁征求同意\n\n或用户表示不同意后仍收集使用个人信息","默认用户同意"],digit:[5,325]},{title:"独立性统计数据",item:["多产品使用同一份隐私政策","隐私政策为用户协议的一部分"],digit:[173,142]}],[{title:"清晰性统计数据",item:["申请个人敏感信息时，未同步告知用户其目的\n\n或目的不明确、难以理解","未逐一列出收集使用个人信息的目的、方式、范围等"],digit:[188,121]},{title:"必要性统计数据",item:["仅以改善服务质量、提升用户体验等为由\n\n要求用户同意收集个人信息","收集的个人信息类型与现有业务功能无关"],digit:[24,23]},{},{title:"保留分享与权责要求统计数据",item:["未经用户同意或法律许可，进行第三方共享","含有不合理条款"],digit:[41,14]}],[{title:"一致性统计数据",item:["声明小于实际","声明大于等于实际"],digit:[132,138]},{}],[{},{title:"第三方库使用统计数据",item:["五个以上","三到五个","小于三个"],digit:[33,87,270]}]]}},methods:{draw_chart:function(t){var e=this.$refs.chart;x["b"](e)&&x["a"](e);var i,n=x["c"](e);i={title:{text:this.chart_data[t.item_1][t.item_2].title,left:"50%",top:"5%",textStyle:{fontSize:25}},tooltip:{trigger:"axis",axisPointer:{type:"shadow"}},grid:{top:"20%",bottom:"40%",containLabel:!0},xAxis:{type:"value",boundaryGap:[0,.01],axisLabel:{fontSize:18}},yAxis:{type:"category",data:this.chart_data[t.item_1][t.item_2].item,axisLabel:{margin:20,fontSize:18}},series:[{type:"bar",barWidth:30,barGap:"-50%",data:this.chart_data[t.item_1][t.item_2].digit}]},i&&n.setOption(i)}}},y=v,C=(i("e3e9"),Object(f["a"])(y,h,b,!1,null,null,null)),j=C.exports,w=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"def"},[n("div",[n("img",{staticClass:"image-def",attrs:{src:i("9e01")("./"+t.img_path_def[t.item_1][t.item_2]+".png")}})])])},O=[],k={name:"Def",data:function(){return{item_1:0,item_2:0,img_path_def:[["def1-1","def1-2","def1-3"],["def2-1","def2-2","def2-3","def2-4"],["def3-1"]]}},methods:{set_data:function(t){this.item_1=t.item_1,this.item_2=t.item_2}}},S=k,$=(i("9dcb"),Object(f["a"])(S,w,O,!1,null,null,null)),P=$.exports,E=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"mp-problem"},t._l(t.img_path_chart[t.item_1][t.item_2],(function(e,a){return n("div",{key:a,staticClass:"block-prb"},[n("div",{staticStyle:{position:"relative"}},[n("img",{staticClass:"image-prb",attrs:{src:i("9e01")("./"+e.path+".png")}}),n("div",{attrs:{id:"description"},domProps:{innerHTML:t._s(e.text)}})])])})),0)},M=[],T={name:"MpProblem",data:function(){return{item_1:0,item_2:0,first:["fe-1","fe-2","fe-3"],img_path_chart:[[[{path:"e1-1-1",text:"财运多登录界面无隐私政策阅读提示"},{path:"e1-1-2",text:"4Can福罐隐私政策打开链接失效"},{path:"e1-1-3",text:"人人车隐私政策链接错误实际指向该小程序的主页"}],[{path:"e1-2-1",text:"父母邦隐私政策无勾选框"},{path:"e1-2-2",text:"绍兴E网隐私政策默认勾选"}],[{path:"e1-3-1",text:"妙汇商店隐私政策为用户协议的一部分且不完整"},{path:"e1-3-2",text:"九马汽车检测站隐私政策为模板生成使用对象为变量名替换"}]],[[{path:"e2-1-1",text:"皮皮虾出行未逐一列出个人信息的目的、方式、范围"},{path:"e2-1-2",text:"女士贴身衣橱未告知目的"}],[{path:"e2-2-1",text:"罗博数码仅以改善服务质量、提升用户体验、定向推送信息、研发新产品等为由，强制要求用户同意收集个人信息"},{path:"e2-2-2",text:"数据统计工具京东良研超范围收集用户的定位信息"}],[{path:"e2-3-1",text:"车有料隐私政策全文及小程序本身无删除、更正、投诉、举报的渠道"}],[{path:"e2-4-1",text:"小燕在家数据存在跨境风险"},{path:"e2-4-2",text:"千里马招标网未经法律同意进行第三方共享"}]],[[{path:"e3-1-1",text:"隐私政策声明收集类型：个人注册信息,IP地址,网页记录"},{path:"e3-1-2",text:"实际收集类型：相册或相机,车信息,订阅授权,个人姓名,电话/手机号码,身份证,地址,购物,住址"}],[{path:"e3-2-1",text:"班小二在隐私政策声明，不会收集用户的手机号码，但是在创建班级页面确有输入手机号码的填写框"}]],[[{path:"e4-1-1",text:"优衣库小程序通过request在未加密情况下发送用户位置信息1.调用获取位置信息的API2.创建发送对象t3.将位置信息附加到t中4.通过request发送数据"}],[{path:"e4-2-1",text:""}]]]}},methods:{set_data:function(t){this.item_1=t.item_1,this.item_2=t.item_2}}},B=T,z=(i("a18d"),Object(f["a"])(B,E,M,!1,null,null,null)),D=z.exports,L={name:"ChartContent",components:{Chart:j,MpProblem:D,Def:P},data:function(){return{item_1:0,item_2:0,item_3:0,top_button_data:["规则展示","内容合规","行为一致","安全风险"],side_button_data:{title:[["公开性","自愿性","独立性"],["清晰性","必要性","删除更正与投诉举报","保留分享与权责要求"],["声明收集范围与实际收集范围一致性","违反使用规则收集使用信息"],["传输未加密","第三方库"]],item:{common:["定义与标准","问题示例","数据统计"],only_example:["问题示例"],no_std:["问题示例","数据统计"],no_dat:["定义与标准","问题示例"]}}}},computed:{cur_item:function(){return this.test_item([3,0])||this.test_item([2,1])?this.side_button_data.item.only_example:this.test_item([3,1])?this.side_button_data.item.no_std:this.test_item([1,2])?(console.log("test"),this.side_button_data.item.no_dat):this.side_button_data.item.common},show_chart:function(){return!(!this.test_item([3,1])||1!=this.item_3)||!(this.test_item([3,0])||this.test_item([2,1])||this.test_item([1,2]))&&2==this.item_3},show_prb:function(){return this.test_item([3,0])||this.test_item([2,1])||this.test_item([3,1])?0==this.item_3:1==this.item_3},show_def:function(){return!this.test_item([3,0])&&!this.test_item([2,1])&&(!this.test_item([3,1])&&0==this.item_3)}},methods:{test_item:function(t){return t[0]==this.item_1&&t[1]==this.item_2},set_item_1:function(t){this.item_1=t,this.set_item_2(0)},set_item_2:function(t){this.item_2=t,this.set_item_3(0),console.log("set2",this.item_1,this.item_2,this.item_3)},set_item_3:function(t){var e=this;this.item_3=t,this.show_chart&&this.$nextTick((function(){e.$refs.ch.draw_chart({item_1:e.item_1,item_2:e.item_2})})),this.show_prb&&this.$nextTick((function(){e.$refs.prb.set_data({item_1:e.item_1,item_2:e.item_2})})),this.show_def&&this.$nextTick((function(){e.$refs.def.set_data({item_1:e.item_1,item_2:e.item_2})})),console.log("set3",this.item_1,this.item_2,this.item_3)}}},A=L,N=(i("af48"),Object(f["a"])(A,_,g,!1,null,null,null)),U=N.exports,F=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",{staticStyle:{"font-size":"50px"}},[t._v("报告样例")]),n("el-divider"),t._l(t.sample_img_path,(function(t){return n("div",{key:t},[n("div",{staticStyle:{position:"relative"}},[n("img",{attrs:{src:i("710a")("./"+t.path[0]+".jpg")}}),n("img",{attrs:{src:i("710a")("./"+t.path[1]+".jpg")}})])])}))],2)},I=[],J={name:"Sample",data:function(){return{sample_img_path:[{path:["sap-1","sap-2"]},{path:["sap-3","sap-4"]},{path:["sap-5","sap-6"]}]}}},q=J,G=Object(f["a"])(q,F,I,!1,null,"4b9e8cc6",null),H=G.exports,W={name:"MainContent",components:{Sample:H,ChartContent:U},data:function(){return{prb_data:[{path:"first_example_1.png",text:"快牙传文件<br />敏感信息泄露"},{path:"first_example_2.png",text:"汉堡王(京东小程序)<br />只有授权获得手机号码后才能查看隐私权政策"},{path:"first_example_3.png",text:"哈啰出行(支付宝小程序)<br />申请位置信息未告知目的，拒绝后仍频繁弹出申请"}]}}},X=W,K=(i("292d"),Object(f["a"])(X,l,m,!1,null,null,null)),Q=K.exports,R={name:"App",components:{Banner:d,MainContent:Q}},V=R,Y=(i("034f"),Object(f["a"])(V,a,s,!1,null,null,null)),Z=Y.exports,tt=i("85db"),et=i("5c96");i("0fae");n["default"].config.productionTip=!1,n["default"].component("row",tt["b"]),n["default"].component("column",tt["a"]),n["default"].use(et["Table"]),n["default"].use(et["TableColumn"]),n["default"].use(et["Form"]),n["default"].use(et["FormItem"]),n["default"].use(et["Button"]),n["default"].use(et["Divider"]),new n["default"]({render:function(t){return t(Z)}}).$mount("#app")},5795:function(t,e,i){t.exports=i.p+"img/sap-6.6c09b52b.jpg"},"644c":function(t,e,i){t.exports=i.p+"img/e3-1-1.28817ecf.png"},"65e0":function(t,e,i){t.exports=i.p+"img/sap-4.7fc9c010.jpg"},"6cfd":function(t,e,i){t.exports=i.p+"img/e1-3-2.ebf67730.png"},"710a":function(t,e,i){var n={"./sap-1.jpg":"0123","./sap-2.jpg":"5144","./sap-3.jpg":"c756","./sap-4.jpg":"65e0","./sap-5.jpg":"4ebe","./sap-6.jpg":"5795"};function a(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="710a"},7121:function(t,e,i){t.exports=i.p+"img/def1-1.06c48994.png"},"724b":function(t,e,i){t.exports=i.p+"img/def2-4.bba15642.png"},"72ac":function(t,e,i){t.exports=i.p+"img/e1-2-2.c0784f2b.png"},"77ce":function(t,e,i){t.exports=i.p+"img/e2-2-1.8b6d4daa.png"},"7fdb":function(t,e,i){},"85ec":function(t,e,i){},"8d41":function(t,e,i){t.exports=i.p+"img/def3-1.406ec250.png"},"8f7e":function(t,e,i){t.exports=i.p+"img/e4-2-1.5dfb9496.png"},"905b":function(t,e,i){t.exports=i.p+"img/fe-3.ce140926.png"},"9dcb":function(t,e,i){"use strict";i("f292")},"9e01":function(t,e,i){var n={"./def1-1.png":"7121","./def1-2.png":"a3e7","./def1-3.png":"31be","./def2-1.png":"1d2f","./def2-2.png":"41e2","./def2-3.png":"d861","./def2-4.png":"724b","./def3-1.png":"8d41","./e1-1-1.png":"4c4c","./e1-1-2.png":"c0ec","./e1-1-3.png":"a13c","./e1-2-1.png":"a67b","./e1-2-2.png":"72ac","./e1-3-1.png":"f7d9","./e1-3-2.png":"6cfd","./e2-1-1.png":"cb32","./e2-1-2.png":"2812","./e2-2-1.png":"77ce","./e2-2-2.png":"1867","./e2-3-1.png":"b64a","./e2-4-1.png":"ce7d","./e2-4-2.png":"fd85","./e3-1-1.png":"644c","./e3-1-2.png":"e24c","./e3-2-1.png":"d67a","./e4-1-1.png":"222d","./e4-2-1.png":"8f7e","./fe-1.png":"dcd5","./fe-2.png":"1106","./fe-3.png":"905b","./intro.png":"d34c","./jiaoda.png":"beae","./logo.png":"cf05"};function a(t){var e=s(t);return i(e)}function s(t){if(!i.o(n,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return n[t]}a.keys=function(){return Object.keys(n)},a.resolve=s,t.exports=a,a.id="9e01"},a0dc:function(t,e,i){},a13c:function(t,e,i){t.exports=i.p+"img/e1-1-3.30c1e5f6.png"},a18d:function(t,e,i){"use strict";i("2640")},a3e7:function(t,e,i){t.exports=i.p+"img/def1-2.369bd91c.png"},a665:function(t,e,i){},a67b:function(t,e,i){t.exports=i.p+"img/e1-2-1.e2d97c93.png"},af48:function(t,e,i){"use strict";i("5141")},b64a:function(t,e,i){t.exports=i.p+"img/e2-3-1.f3c95b9e.png"},beae:function(t,e,i){t.exports=i.p+"img/jiaoda.3bdf71fc.png"},c0ec:function(t,e,i){t.exports=i.p+"img/e1-1-2.ceca7f81.png"},c756:function(t,e,i){t.exports=i.p+"img/sap-3.80d6a70e.jpg"},cb32:function(t,e,i){t.exports=i.p+"img/e2-1-1.44ca90ae.png"},ce7d:function(t,e,i){t.exports=i.p+"img/e2-4-1.683e2802.png"},cf05:function(t,e,i){t.exports=i.p+"img/logo.82b9c7a5.png"},d34c:function(t,e,i){t.exports=i.p+"img/intro.ff468f90.png"},d67a:function(t,e,i){t.exports=i.p+"img/e3-2-1.7445cdb9.png"},d861:function(t,e,i){t.exports=i.p+"img/def2-3.a0420037.png"},dcd5:function(t,e,i){t.exports=i.p+"img/fe-1.b9bdb936.png"},e24c:function(t,e,i){t.exports=i.p+"img/e3-1-2.cbbe49f4.png"},e3e9:function(t,e,i){"use strict";i("a0dc")},f230:function(t,e,i){"use strict";i("7fdb")},f292:function(t,e,i){},f7d9:function(t,e,i){t.exports=i.p+"img/e1-3-1.639bea59.png"},fd85:function(t,e,i){t.exports=i.p+"img/e2-4-2.0a510772.png"}});
//# sourceMappingURL=index.98b42727.js.map