webpackJsonp([1],{"0+DC":function(t,e){},"2lnh":function(t,e){},"3k2l":function(t,e){},"48st":function(t,e){},"6BG3":function(t,e){},"7sYg":function(t,e){},GgcO:function(t,e){},HqWI:function(t,e){},KKRs:function(t,e){},NHnr:function(t,e,i){"use strict";function n(t){i("48st")}function s(t){i("ZoBA")}function a(t){i("qHQD")}function r(t){i("3k2l")}function o(t){i("7sYg")}function l(t){i("6BG3")}function u(t){i("qMGw")}function c(t){i("KKRs")}function d(t){i("2lnh")}function h(t){i("d4qF")}function p(t){i("RMDY")}function m(t,e){return new Me.a(function(i,n){Re.a.get(t,{params:e}).then(function(t){i(t.data)}).catch(function(t){n(t.data)})})}function f(t,e){return new Me.a(function(i,n){Re.a.post(t,He.a.stringify(e)).then(function(t){i(t.data)}).catch(function(t){n(t.data)})})}function v(t){i("HqWI")}function g(t){i("uK/t")}function _(t){i("0+DC")}function b(t){i("GgcO")}Object.defineProperty(e,"__esModule",{value:!0});var w,x=i("7+uW"),y={name:"app"},S=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{attrs:{id:"app"}},[i("router-view")],1)},k=[],C={render:S,staticRenderFns:k},T=C,$=i("VU/8"),V=n,E=$(y,T,!1,V,null,null),A=E.exports,N=i("/ocq"),I={name:"HelloWorld",data:function(){return{msg:"Welcome to Your Vue.js App"}}},L=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"hello"},[i("h1",{staticClass:"header-title"},[t._v(t._s(t.msg))]),t._v(" "),i("h2",[t._v("Essential Links")]),t._v(" "),t._m(0),t._v(" "),i("h2",[t._v("Ecosystem")]),t._v(" "),t._m(1)])},B=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"https://vuejs.org",target:"_blank"}},[t._v("Core Docs")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://forum.vuejs.org",target:"_blank"}},[t._v("Forum")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://chat.vuejs.org",target:"_blank"}},[t._v("Community Chat")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://twitter.com/vuejs",target:"_blank"}},[t._v("Twitter")])]),t._v(" "),i("br"),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuejs-templates.github.io/webpack/",target:"_blank"}},[t._v("Docs for This Template")])])])},function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("ul",[i("li",[i("a",{attrs:{href:"http://router.vuejs.org/",target:"_blank"}},[t._v("vue-router")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vuex.vuejs.org/",target:"_blank"}},[t._v("vuex")])]),t._v(" "),i("li",[i("a",{attrs:{href:"http://vue-loader.vuejs.org/",target:"_blank"}},[t._v("vue-loader")])]),t._v(" "),i("li",[i("a",{attrs:{href:"https://github.com/vuejs/awesome-vue",target:"_blank"}},[t._v("awesome-vue")])])])}],F={render:L,staticRenderFns:B},M=F,q=i("VU/8"),R=s,j=q(I,M,!1,R,"data-v-2cf9b468",null),O=j.exports,W=i("wmxo"),D=(W.a,String,String,String,String,String,String,Number,String,String,{name:"group",methods:{cleanStyle:W.a},props:{title:String,titleColor:String,labelWidth:String,labelAlign:String,labelMarginRight:String,gutter:[String,Number],footerTitle:String,footerTitleColor:String}}),H=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t.title?i("div",{staticClass:"weui-cells__title",style:t.cleanStyle({color:t.titleColor}),domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t._t("title"),t._v(" "),i("div",{staticClass:"weui-cells",class:{"vux-no-group-title":!t.title},style:t.cleanStyle({marginTop:"number"==typeof t.gutter?t.gutter+"px":t.gutter})},[t._t("after-title"),t._v(" "),t._t("default")],2),t._v(" "),t.footerTitle?i("div",{staticClass:"weui-cells__title vux-group-footer-title",style:t.cleanStyle({color:t.footerTitleColor}),domProps:{innerHTML:t._s(t.footerTitle)}}):t._e()],2)},U=[],z={render:H,staticRenderFns:U},P=z,G=i("VU/8"),K=a,X=G(D,P,!1,K,null,null),Y=X.exports,Q={name:"inline-desc"},Z=function(){var t=this,e=t.$createElement;return(t._self._c||e)("span",{staticClass:"vux-label-desc"},[t._t("default")],2)},J=[],tt={render:Z,staticRenderFns:J},et=tt,it=i("VU/8"),nt=r,st=it(Q,et,!1,nt,null,null),at=st.exports,rt=i("0FxO"),ot=i("2IIR"),lt=i("vLYD"),ut=(Object(ot.a)(),{name:"cell",components:{InlineDesc:at},props:Object(ot.a)(),created:function(){},beforeMount:function(){this.hasTitleSlot=!!this.$slots.title,this.$slots.value},computed:{labelStyles:function(){return Object(W.a)({width:Object(lt.a)(this,"labelWidth"),textAlign:Object(lt.a)(this,"labelAlign"),marginRight:Object(lt.a)(this,"labelMarginRight")})},valueClass:function(){return{"vux-cell-primary":"content"===this.primary||"left"===this.valueAlign,"vux-cell-align-left":"left"===this.valueAlign,"vux-cell-arrow-transition":!!this.arrowDirection,"vux-cell-arrow-up":"up"===this.arrowDirection,"vux-cell-arrow-down":"down"===this.arrowDirection}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},style:function(){if(this.alignItems)return{alignItems:this.alignItems}}},methods:{onClick:function(){!this.disabled&&Object(rt.a)(this.link,this.$router)}},data:function(){return{hasTitleSlot:!0,hasMounted:!1}}}),ct=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"weui-cell",class:{"vux-tap-active":t.isLink||!!t.link,"weui-cell_access":t.isLink||!!t.link,"vux-cell-no-border-intent":!t.borderIntent,"vux-cell-disabled":t.disabled},style:t.style,on:{click:t.onClick}},[i("div",{staticClass:"weui-cell__hd"},[t._t("icon")],2),t._v(" "),i("div",{staticClass:"vux-cell-bd",class:{"vux-cell-primary":"title"===t.primary&&"left"!==t.valueAlign}},[i("p",[t.title||t.hasTitleSlot?i("label",{staticClass:"vux-label",class:t.labelClass,style:t.labelStyles},[t._t("title",[t._v(t._s(t.title))])],2):t._e(),t._v(" "),t._t("after-title")],2),t._v(" "),i("inline-desc",[t._t("inline-desc",[t._v(t._s(t.inlineDesc))])],2)],1),t._v(" "),i("div",{staticClass:"weui-cell__ft",class:t.valueClass},[t._t("value"),t._v(" "),t._t("default",[t._v(t._s(t.value))]),t._v(" "),t.isLoading?i("i",{staticClass:"weui-loading"}):t._e()],2),t._v(" "),t._t("child")],2)},dt=[],ht={render:ct,staticRenderFns:dt},pt=ht,mt=i("VU/8"),ft=o,vt=mt(ut,pt,!1,ft,null,null),gt=vt.exports,_t={components:{Group:Y,Cell:gt},data:function(){return{msg:"Hello World!"}}},bt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[t._m(0),t._v(" "),i("group",{attrs:{title:"cell demo"}},[i("cell",{attrs:{title:"VUX",value:"cool","is-link":""}})],1),t._v(" "),i("svg",{staticClass:"icon",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-kehu2"}})])],1)},wt=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"vux-demo"},[n("img",{staticClass:"logo",attrs:{src:i("wz0u")}}),t._v(" "),n("h1")])}],xt={render:bt,staticRenderFns:wt},yt=xt,St=i("VU/8"),kt=l,Ct=St(_t,yt,!1,kt,null,null),Tt=Ct.exports,$t=i("Dd8w"),Vt=i.n($t),Et=i("NYxO"),At=(Vt()({},Object(Et.d)(["orderList","orderDetail","login","userInfo"]),Object(Et.b)({doneTodos:"doneTodos",doneTodosCount:"doneTodosCount",getTodoById:"getTodoById",anotherTodo:"anotherTodo"})),Vt()({add:function(){this.$store.dispatch("add")},minux:function(){this.$store.dispatch("jian")},changeLogin:function(){this.$store.dispatch("changeLoginState")}},Object(Et.c)({someMutation:"SOME_MUTATION"})),{name:"VuexDemo",computed:Vt()({},Object(Et.d)(["orderList","orderDetail","login","userInfo"]),Object(Et.b)({doneTodos:"doneTodos",doneTodosCount:"doneTodosCount",getTodoById:"getTodoById",anotherTodo:"anotherTodo"})),mounted:function(){console.log(this.$store),console.log(this.login),console.log(this.orderList),console.log(this.doneTodos),console.log(this.doneTodosCount),console.log(this.getTodoById(2)),console.log(this.anotherTodo)},methods:Vt()({add:function(){this.$store.dispatch("add")},minux:function(){this.$store.dispatch("jian")},changeLogin:function(){this.$store.dispatch("changeLoginState")}},Object(Et.c)({someMutation:"SOME_MUTATION"}))}),Nt=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vuex-box"},[i("div",[t._v("数据："+t._s(t.$store.state.count))]),t._v(" "),i("input",{attrs:{type:"button",value:"增加"},on:{click:t.add}}),t._v(" "),i("input",{attrs:{type:"button",value:"减少"},on:{click:t.minux}}),t._v(" "),i("div",[i("input",{attrs:{type:"button",value:"改变登录状态"},on:{click:t.changeLogin}}),t._v("\n        已经登录？"+t._s(t.login)+"\n    ")]),t._v(" "),i("div",[i("input",{attrs:{type:"button",value:"打印出mapMutation中的内容"},on:{click:function(e){t.someMutation("zll")}}}),t._v("\n        用户名："+t._s(t.userInfo.username)+"\n    ")])])},It=[],Lt={render:Nt,staticRenderFns:It},Bt=Lt,Ft=i("VU/8"),Mt=u,qt=Ft(At,Bt,!1,Mt,null,null),Rt=qt.exports,jt={name:"Upload",data:function(){return{showFace:!1,imgList:[],size:0,limit:6,tempImgs:[]}},methods:{chooseType:function(){document.getElementById("upload_file").click()},fileChange:function(t){t.target.files[0].size&&(this.fileList(t.target),t.target.value="")},fileList:function(t){for(var e=t.files,i=0;i<e.length;i++)""!=e[i].type?this.fileAdd(e[i]):this.folders(t.items[i])},folders:function(t){var e=this;t.kind&&(t=t.webkitGetAsEntry()),t.createReader().readEntries(function(t){for(var i=0;i<t.length;i++)t[i].isFile?e.foldersAdd(t[i]):e.folders(t[i])})},foldersAdd:function(t){var e=this;t.file(function(t){e.fileAdd(t)})},fileAdd:function(t){if(void 0!==this.limit&&this.limit--,!(void 0!==this.limit&&this.limit<0))if(this.size=this.size+t.size,console.log(this.imgList),-1==t.type.indexOf("image"))this.$vux.toast.text("请选择图片文件");else{var e=new FileReader,i=new Image,n=this;e.readAsDataURL(t),e.onload=function(){t.src=this.result,i.onload=function(){var e=i.width,s=i.height;t.width=e,t.height=s,n.imgList.push({file:t}),console.log(n.imgList)},i.src=t.src}}},delImg:function(t){this.size=this.size-this.imgList[t].file.size,this.imgList.splice(t,1),void 0!==this.limit&&(this.limit=6-this.imgList.length)},displayImg:function(){}}},Ot=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"upload-wrap"},[i("input",{staticStyle:{display:"none"},attrs:{type:"file",id:"upload_file",multiple:""},on:{change:function(e){t.fileChange(e)}}}),t._v(" "),i("div",{staticClass:"add",on:{click:t.chooseType}},[i("div",{staticClass:"add-image",attrs:{align:"center"}},[i("svg",{staticClass:"icon icon-camera",attrs:{"aria-hidden":"true"}},[i("use",{attrs:{"xlink:href":"#icon-xiangji"}})]),t._v(" "),i("p",{staticClass:"font13"},[t._v("添加图片")])])]),t._v(" "),i("div",{directives:[{name:"show",rawName:"v-show",value:t.imgList.length,expression:"imgList.length"}],staticClass:"add-img"},[i("p",{staticClass:"font14"},[t._v("图片(最多6张，还可上传"),i("span",{domProps:{textContent:t._s(6-t.imgList.length)}}),t._v("张)")]),t._v(" "),i("ul",{staticClass:"img-list"},t._l(t.imgList,function(e,n){return i("li",[i("svg",{staticClass:"icon del",attrs:{"aria-hidden":"true"},on:{click:function(e){e.stopPropagation(),t.delImg(n)}}},[i("use",{attrs:{"xlink:href":"#icon-delete"}})]),t._v(" "),i("img",{attrs:{src:e.file.src}})])}))])])},Wt=[],Dt={render:Ot,staticRenderFns:Wt},Ht=Dt,Ut=i("VU/8"),zt=c,Pt=Ut(jt,Ht,!1,zt,"data-v-f380c876",null),Gt=Pt.exports,Kt=Gt,Xt=i("fZjL"),Yt=i.n(Xt),Qt=i("f6Hi"),Zt=(String,Boolean,{name:"icon",props:{type:String,isMsg:Boolean},computed:{className:function(){return"weui-icon weui_icon_"+this.type+" weui-icon-"+this.type.replace(/_/g,"-")}}}),Jt=function(){var t=this,e=t.$createElement;return(t._self._c||e)("i",{class:[t.className,t.isMsg?"weui-icon_msg":""]})},te=[],ee={render:Jt,staticRenderFns:te},ie=ee,ne=i("VU/8"),se=d,ae=ne(Zt,ie,!1,se,null,null),re=ae.exports,oe=i("rLAy"),le=i("2LX0"),ue=i.n(le),ce=i("Ewe+"),de=i.n(ce),he=i("nror"),pe=i("lFEC"),me=i.n(pe),fe={email:{fn:ue.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return de()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}},ve=(Qt.a,oe.a,String,String,String,String,Number,String,Boolean,Boolean,String,String,String,Function,Number,Number,Boolean,String,String,String,String,String,String,Boolean,String,Number,String,String,String,Boolean,{email:{fn:ue.a,msg:"邮箱格式"},"china-mobile":{fn:function(t){return de()(t,"zh-CN")},msg:"手机号码"},"china-name":{fn:function(t){return t.length>=2&&t.length<=6},msg:"中文姓名"}}),ge={name:"x-input",created:function(){var t=this;this.currentValue=void 0===this.value||null===this.value?"":this.mask?this.maskValue(this.value):this.value,!this.required||void 0!==this.currentValue&&""!==this.currentValue||(this.valid=!1),this.handleChangeEvent=!0,this.debounce&&(this._debounce=Object(he.a)(function(){t.$emit("on-change",t.currentValue)},this.debounce))},beforeMount:function(){this.$slots&&this.$slots["restricted-label"]&&(this.hasRestrictedLabel=!0),this.$slots&&this.$slots["right-full-height"]&&(this.hasRightFullHeightSlot=!0)},beforeDestroy:function(){this._debounce&&this._debounce.cancel(),window.removeEventListener("resize",this.scrollIntoView)},mixins:[Qt.a],components:{Icon:re,InlineDesc:at,Toast:oe.a},props:{title:{type:String,default:""},type:{type:String,default:"text"},placeholder:String,value:[String,Number],name:String,readonly:Boolean,disabled:Boolean,keyboard:String,inlineDesc:String,isType:[String,Function],min:Number,max:Number,showClear:{type:Boolean,default:!0},equalWith:String,textAlign:String,autocomplete:{type:String,default:"off"},autocapitalize:{type:String,default:"off"},autocorrect:{type:String,default:"off"},spellcheck:{type:String,default:"false"},novalidate:{type:Boolean,default:!1},iconType:String,debounce:Number,placeholderAlign:String,labelWidth:String,mask:String,shouldToastError:{type:Boolean,default:!0}},computed:{labelStyles:function(){return{width:this.labelWidthComputed||this.$parent.labelWidth||this.labelWidthComputed,textAlign:this.$parent.labelAlign,marginRight:this.$parent.labelMarginRight}},labelClass:function(){return{"vux-cell-justify":"justify"===this.$parent.labelAlign||"justify"===this.$parent.$parent.labelAlign}},pattern:function(){if("number"===this.keyboard||"china-mobile"===this.isType)return"[0-9]*"},labelWidthComputed:function(){var t=this.title.replace(/[^x00-xff]/g,"00").length/2+1;if(t<10)return t+"em"},hasErrors:function(){return Yt()(this.errors).length>0},inputStyle:function(){if(this.textAlign)return{textAlign:this.textAlign}},showWarn:function(){return!this.novalidate&&!this.equalWith&&!this.valid&&this.firstError&&(this.touched||this.forceShowError)}},mounted:function(){window.addEventListener("resize",this.scrollIntoView)},methods:{scrollIntoView:function(){var t=this,e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:0;/iphone/i.test(navigator.userAgent),"INPUT"!==document.activeElement.tagName&&"TEXTAREA"!==document.activeElement.tagName||setTimeout(function(){t.$refs.input.scrollIntoViewIfNeeded(!0)},e)},onClickErrorIcon:function(){this.shouldToastError&&this.firstError&&(this.showErrorToast=!0),this.$emit("on-click-error-icon",this.firstError)},maskValue:function(t){return this.mask?me.a.toPattern(t,this.mask):t},reset:function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";this.dirty=!1,this.currentValue=t,this.firstError="",this.valid=!0},clear:function(){this.currentValue="",this.focus(),this.$emit("on-click-clear-icon")},focus:function(){this.$refs.input.focus()},blur:function(){this.$refs.input.blur()},focusHandler:function(t){var e=this;this.$emit("on-focus",this.currentValue,t),this.isFocus=!0,setTimeout(function(){e.$refs.input.scrollIntoViewIfNeeded(!1)},1e3)},onBlur:function(t){this.setTouched(),this.validate(),this.isFocus=!1,this.$emit("on-blur",this.currentValue,t)},onKeyUp:function(t){"Enter"===t.key&&(t.target.blur(),this.$emit("on-enter",this.currentValue,t))},getError:function(){var t=Yt()(this.errors)[0];this.firstError=this.errors[t]},validate:function(){if(void 0!==this.equalWith)return void this.validateEqual();if(this.errors={},!this.currentValue&&!this.required)return void(this.valid=!0);if(!this.currentValue&&this.required)return this.valid=!1,this.errors.required="必填哦",void this.getError();if("string"==typeof this.isType){var t=ve[this.isType];if(t){var e=this.currentValue;if("china-mobile"===this.isType&&"999 9999 9999"===this.mask&&(e=this.currentValue.replace(/\s+/g,"")),this.valid=t.fn(e),!this.valid)return this.forceShowError=!0,this.errors.format=t.msg+"格式不对哦~",void this.getError();delete this.errors.format}}if("function"==typeof this.isType){var i=this.isType(this.currentValue);if(this.valid=i.valid,!this.valid)return this.errors.format=i.msg,this.forceShowError=!0,void this.getError();delete this.errors.format}if(this.min){if(this.currentValue.length<this.min)return this.errors.min="最少应该输入"+this.min+"个字符哦",this.valid=!1,void this.getError();delete this.errors.min}if(this.max){if(this.currentValue.length>this.max)return this.errors.max="最多可以输入"+this.max+"个字符哦",this.valid=!1,void(this.forceShowError=!0);this.forceShowError=!1,delete this.errors.max}this.valid=!0},validateEqual:function(){return!this.equalWith&&this.currentValue?(this.valid=!1,void(this.errors.equal="输入不一致")):(this.dirty||this.currentValue.length>=this.equalWith.length)&&this.currentValue!==this.equalWith?(this.valid=!1,void(this.errors.equal="输入不一致")):void(!this.currentValue&&this.required?this.valid=!1:(this.valid=!0,delete this.errors.equal))},_getInputMaskSelection:function(t,e,i,n){if(!this.mask||n&&0===e)return t;if(0===e&&(e=this.lastDirection),e>0){if(!this.mask.substr(t-e,1).match(/[9SA]/))return this._getInputMaskSelection(t+1,e,i,!0)}return t}},data:function(){return{hasRightFullHeightSlot:!1,hasRestrictedLabel:!1,firstError:"",forceShowError:!1,hasLengthEqual:!1,valid:!0,currentValue:"",showErrorToast:!1,isFocus:!1}},watch:{mask:function(t){t&&this.currentValue&&(this.currentValue=this.maskValue(this.currentValue))},valid:function(){this.getError()},value:function(t){this.currentValue=t},equalWith:function(t){t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate()},currentValue:function(t,e){var i=this;!this.equalWith&&t&&this.validateEqual(),t&&this.equalWith?(t.length===this.equalWith.length&&(this.hasLengthEqual=!0),this.validateEqual()):this.validate();var n=this.$refs.input.selectionStart,s=t.length-e.length;n=this._getInputMaskSelection(n,s,this.maskValue(t)),this.lastDirection=s,this.$emit("input",this.maskValue(t)),this.$nextTick(function(){i.$refs.input.selectionStart!==n&&(i.$refs.input.selectionStart=n,i.$refs.input.selectionEnd=n),i.currentValue!==i.maskValue(t)&&(i.currentValue=i.maskValue(t))}),this._debounce?this._debounce():this.$emit("on-change",t)}}},_e=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-x-input weui-cell",class:{"weui-cell_warn":t.showWarn,disabled:t.disabled,"vux-x-input-has-right-full":t.hasRightFullHeightSlot}},[i("div",{staticClass:"weui-cell__hd"},[t.hasRestrictedLabel?i("div",{style:t.labelStyles},[t._t("restricted-label")],2):t._e(),t._v(" "),t._t("label",[t.title?i("label",{staticClass:"weui-label",class:t.labelClass,style:{width:t.labelWidth||t.$parent.labelWidth||t.labelWidthComputed,textAlign:t.$parent.labelAlign,marginRight:t.$parent.labelMarginRight},attrs:{for:"vux-x-input-"+t.uuid},domProps:{innerHTML:t._s(t.title)}}):t._e(),t._v(" "),t.inlineDesc?i("inline-desc",[t._v(t._s(t.inlineDesc))]):t._e()])],2),t._v(" "),i("div",{staticClass:"weui-cell__bd weui-cell__primary",class:t.placeholderAlign?"vux-x-input-placeholder-"+t.placeholderAlign:""},[t.type&&"text"!==t.type?t._e():i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"text",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}),t._v(" "),"number"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"number",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"email"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"email",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"password"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"password",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e(),t._v(" "),"tel"===t.type?i("input",{directives:[{name:"model",rawName:"v-model",value:t.currentValue,expression:"currentValue"}],ref:"input",staticClass:"weui-input",style:t.inputStyle,attrs:{id:"vux-x-input-"+t.uuid,maxlength:t.max,autocomplete:t.autocomplete,autocapitalize:t.autocapitalize,autocorrect:t.autocorrect,spellcheck:t.spellcheck,type:"tel",name:t.name,pattern:t.pattern,placeholder:t.placeholder,readonly:t.readonly,disabled:t.disabled},domProps:{value:t.currentValue},on:{focus:t.focusHandler,blur:t.onBlur,keyup:t.onKeyUp,input:function(e){e.target.composing||(t.currentValue=e.target.value)}}}):t._e()]),t._v(" "),i("div",{staticClass:"weui-cell__ft"},[i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.hasRightFullHeightSlot&&!t.equalWith&&t.showClear&&""!==t.currentValue&&!t.readonly&&!t.disabled&&t.isFocus,expression:"!hasRightFullHeightSlot && !equalWith && showClear && currentValue !== '' && !readonly && !disabled && isFocus"}],attrs:{type:"clear"},nativeOn:{click:function(e){return t.clear(e)}}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.showWarn,expression:"showWarn"}],staticClass:"vux-input-icon",attrs:{type:"warn",title:t.valid?"":t.firstError},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}),t._v(" "),!t.novalidate&&t.hasLengthEqual&&t.dirty&&t.equalWith&&!t.valid?i("icon",{staticClass:"vux-input-icon",attrs:{type:"warn"},nativeOn:{click:function(e){return t.onClickErrorIcon(e)}}}):t._e(),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:!t.novalidate&&t.equalWith&&t.equalWith===t.currentValue&&t.valid,expression:"!novalidate && equalWith && equalWith === currentValue && valid"}],attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"success"===t.iconType,expression:"novalidate && iconType === 'success'"}],staticClass:"vux-input-icon",attrs:{type:"success"}}),t._v(" "),i("icon",{directives:[{name:"show",rawName:"v-show",value:t.novalidate&&"error"===t.iconType,expression:"novalidate && iconType === 'error'"}],staticClass:"vux-input-icon",attrs:{type:"warn"}}),t._v(" "),t._t("right"),t._v(" "),t.hasRightFullHeightSlot?i("div",{staticClass:"vux-x-input-right-full"},[t._t("right-full-height")],2):t._e()],2),t._v(" "),i("toast",{attrs:{type:"text",width:"auto",time:600},model:{value:t.showErrorToast,callback:function(e){t.showErrorToast=e},expression:"showErrorToast"}},[t._v(t._s(t.firstError))])],1)},be=[],we={render:_e,staticRenderFns:be},xe=we,ye=i("VU/8"),Se=h,ke=ye(ge,xe,!1,Se,null,null),Ce=ke.exports,Te=(Boolean,Boolean,Boolean,String,String,Boolean,String,Object,Array,{name:"x-button",props:{type:{default:"default"},disabled:Boolean,mini:Boolean,plain:Boolean,text:String,actionType:String,showLoading:Boolean,link:[String,Object],gradients:{type:Array,validator:function(t){return 2===t.length}}},methods:{onClick:function(){!this.disabled&&Object(rt.a)(this.link,this.$router)}},computed:{noBorder:function(){return Array.isArray(this.gradients)},buttonStyle:function(){if(this.gradients)return{background:"linear-gradient(90deg, "+this.gradients[0]+", "+this.gradients[1]+")",color:"#FFFFFF"}},classes:function(){return[{"weui-btn_disabled":!this.plain&&this.disabled,"weui-btn_plain-disabled":this.plain&&this.disabled,"weui-btn_mini":this.mini,"vux-x-button-no-border":this.noBorder},this.plain?"":"weui-btn_"+this.type,this.plain?"weui-btn_plain-"+this.type:"",this.showLoading?"weui-btn_loading":""]}}}),$e=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("button",{staticClass:"weui-btn",class:t.classes,style:t.buttonStyle,attrs:{disabled:t.disabled,type:t.actionType},on:{click:t.onClick}},[t.showLoading?i("i",{staticClass:"weui-loading"}):t._e(),t._v(" "),t._t("default",[t._v(t._s(t.text))])],2)},Ve=[],Ee={render:$e,staticRenderFns:Ve},Ae=Ee,Ne=i("VU/8"),Ie=p,Le=Ne(Te,Ae,!1,Ie,null,null),Be=Le.exports,Fe=i("//Fk"),Me=i.n(Fe),qe=(i("mvHQ"),i("pFYg"),i("mtWM")),Re=i.n(qe),je=function(t,e,i){var n=new Date;n.setTime(n.getTime()+24*i*60*60*1e3);var s="expires="+n.toGMTString();document.cookie=t+"="+e+"; "+s},Oe=function(t){for(var e=t+"=",i=document.cookie.split(";"),n=0;n<i.length;n++){var s=i[n].trim();if(0==s.indexOf(e))return s.substring(e.length,s.length)}return""},We=function(t){var e=new Date;e.setTime(e.getTime()-1);var i=Oe(t);null!=i&&(document.cookie=t+"="+i+";expires="+e.toGMTString())},De=i("mw3O"),He=i.n(De),Ue={SIMID:"A000004F6DBABA",Access_token:"",count:0,userInfo:{username:"wzq",age:26,sex:"男"},orderList:{banana:11,apple:5,orange:10,tomato:8},orderDetail:null,login:!1,todos:[{id:1,text:"...",done:!0},{id:2,text:"...",done:!1}]},ze=Ue,Pe={doneTodos:function(t){return t.todos.filter(function(t){return t.done})},doneTodosCount:function(t,e){return e.doneTodos.length},getTodoById:function(t){return function(e){return t.todos.find(function(t){return t.id===e})}},anotherTodo:function(){return"我是getters中的其他方法"}},Ge=Pe,Ke={addAccessToken:function(t,e){(0,t.commit)("addAccessToken",e)},add:function(t){var e=t.commit;setTimeout(function(){e("addCount",2)},2e3)},jian:function(t){(0,t.commit)({type:"minuxCount",amount:1})},changeLoginState:function(t){(0,t.commit)("CHANGE_LOGIN_STATE")}},Xe=Ke,Ye=i("bOdI"),Qe=i.n(Ye),Ze=(w={addAccessToken:function(t,e){t.Access_token=e},addCount:function(t,e){t.count+=e},minuxCount:function(t,e){t.count-=e.amount}},Qe()(w,"CHANGE_LOGIN_STATE",function(t){t.login=!t.login}),Qe()(w,"SOME_MUTATION",function(t,e){t.userInfo.username=e}),w),Je=Ze;x.a.use(Et.a);var ti=new Et.a.Store({state:ze,getters:Ge,actions:Xe,mutations:Je});console.log("生产环境"),Re.a.defaults.baseURL="/api/BPMAPI/api",Re.a.defaults.timeout=1e4,Re.a.defaults.headers.post["Content-Type"]="application/x-www-form-urlencoded;charset=UTF-8",Re.a.interceptors.request.use(function(t){var e=ti.state.Access_token;return e&&(t.headers.Authorization=e),t},function(t){return Me.a.error(t)}),Re.a.interceptors.response.use(function(t){return 200===t.status?Me.a.resolve(t):Me.a.reject(t)},function(t){if(t.response.status){switch(t.response.status){case 401:router.replace({path:"/login",query:{redirect:router.currentRoute.fullPath}});break;case 403:console.log("登录过期，请重新登录"),localStorage.removeItem("token"),ti.commit("loginSuccess",null),setTimeout(function(){router.replace({path:"/login",query:{redirect:router.currentRoute.fullPath}})},1e3);break;case 404:console.log(网络请求不存在);break;default:console.log(t.response.data.message)}return Me.a.reject(t.response)}});var ei=function(t,e){return f(t,e)},ii=function(t,e){return m(t,e)},ni=(Vt()({},Object(Et.d)(["SIMID","Access_token"])),{name:"Login",components:{Group:Y,XInput:Ce,XButton:Be},computed:Vt()({},Object(Et.d)(["SIMID","Access_token"])),data:function(){return{userName:"admin",password:"A1s2d3",rememberTag:!1}},mounted:function(){var t=this,e=Oe("userName"),i=Oe("password");if(""!=e&&""!=i){this.userName=e,this.password=i;var n={url:"/MAccount/login2",data:{Account:this.userName,Password:this.password,SIMID:this.$store.state.SIMID}};ei(n.url,n.data).then(function(e){t.$vux.toast.text("登录成功"),t.$router.replace({path:"/home"})},function(e){t.$vux.toast.text(e.Message)})}},methods:{rememberUser:function(t){if(!this.userName.trim()||!this.password.trim())return this.$vux.toast.text("请先输入用户名和密码"),void t.preventDefault();this.rememberTag=!this.rememberTag,this.rememberTag?(je("userName",this.userName,30),je("password",this.password,30)):(We("userName"),We("password"))},handleSubmit:function(){var t=this;if(!this.userName.trim())return void this.$vux.toast.text("请输入用户名");if(!this.password.trim())return void this.$vux.toast.text("请输入密码");var e={url:"/MAccount/login2",data:{Account:this.userName,Password:this.password,SIMID:this.$store.state.SIMID}};ei(e.url,e.data).then(function(e){t.$vux.toast.text("登录成功"),t.$router.replace({path:"/home"}),t.$store.dispatch("addAccessToken",e.Token_type+" "+e.Access_token)},function(e){t.$vux.toast.text(e.Message)})},getFingerprint:function(){var t=(new Fingerprint).get();console.log(t)}}}),si=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"login-wrap"},[i("h3",{staticClass:"header-title",on:{click:t.getFingerprint}},[t._v("用户登录")]),t._v(" "),i("group",[i("x-input",{attrs:{title:"用户名:",placeholder:"请输入用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),i("x-input",{attrs:{title:"密码:",placeholder:"请输入密码",type:"password"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),i("div",{staticClass:"remember-user"},[i("label",{on:{click:t.rememberUser}},[i("input",{attrs:{type:"checkbox"}}),t._v("自动登录\n        ")])]),t._v(" "),i("div",{staticClass:"submit-box"},[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}}},[t._v("登录")])],1),t._v(" "),i("div",{staticClass:"link first-regist-link"},[i("router-link",{attrs:{to:"/regist"}},[t._v("第一次使用？点此注册")])],1),t._v(" "),i("div",{staticClass:"link second-regist-link"},[i("router-link",{attrs:{to:"/registAgain"}},[t._v("换了手机？点此注册")])],1)],1)},ai=[],ri={render:si,staticRenderFns:ai},oi=ri,li=i("VU/8"),ui=v,ci=li(ni,oi,!1,ui,"data-v-3d5f4e4b",null),di=ci.exports,hi=di,pi={name:"Regist",data:function(){return{userName:"",password:""}},methods:{handleSubmit:function(){if(!this.userName.trim())return void this.$vux.toast.text("请输入系统用户名");if(!this.password.trim())return void this.$vux.toast.text("请输入系统密码");var t={url:"/movie/top250",data:{userName:this.userName,password:this.password}};this.$axios.post(t.url).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},components:{Group:Y,XInput:Ce,XButton:Be}},mi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"regist-wrap"},[i("h3",{staticClass:"header-title"},[t._v("手机注册")]),t._v(" "),i("group",[i("x-input",{attrs:{title:"用户名:",placeholder:"请输入系统用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),i("x-input",{attrs:{title:"密码:",type:"password",placeholder:"请输入系统密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),i("div",{staticClass:"submit-box"},[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}}},[t._v("注册")])],1)],1)},fi=[],vi={render:mi,staticRenderFns:fi},gi=vi,_i=i("VU/8"),bi=g,wi=_i(pi,gi,!1,bi,"data-v-768d8f70",null),xi=wi.exports,yi=xi,Si={name:"Regist",data:function(){return{userName:"",password:""}},methods:{handleSubmit:function(){if(!this.userName.trim())return void this.$vux.toast.text("请输入系统用户名");if(!this.password.trim())return void this.$vux.toast.text("请输入系统密码");var t={url:"/movie/top250",data:{userName:this.userName,password:this.password}};this.$axios.post(t.url).then(function(t){console.log(t)}).catch(function(t){console.log(t)})}},components:{Group:Y,XInput:Ce,XButton:Be}},ki=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"regist-wrap"},[i("h3",{staticClass:"header-title"},[t._v("手机注册")]),t._v(" "),i("group",[i("x-input",{attrs:{title:"用户名:",placeholder:"请输入系统用户名"},model:{value:t.userName,callback:function(e){t.userName=e},expression:"userName"}}),t._v(" "),i("x-input",{attrs:{title:"密码:",type:"password",placeholder:"请输入系统密码"},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),i("div",{staticClass:"submit-box"},[i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.handleSubmit(e)}}},[t._v("注册")])],1)],1)},Ci=[],Ti={render:ki,staticRenderFns:Ci},$i=Ti,Vi=i("VU/8"),Ei=_,Ai=Vi(Si,$i,!1,Ei,"data-v-4caaa21c",null),Ni=Ai.exports,Ii=Ni,Li={name:"Home",data:function(){return{}},methods:{getCustomer:function(){console.log(this.$store.state.Access_token);var t={url:"/BPMTable",data:{ID:"CustQTFS"}};ii(t.url,t.data).then(function(t){console.log(t)},function(t){console.log(t)})}},components:{XButton:Be}},Bi=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"home-page"},[i("h3",[t._v("主页")]),t._v(" "),i("x-button",{attrs:{type:"primary"},nativeOn:{click:function(e){return t.getCustomer(e)}}},[t._v("获取用户Access_token")])],1)},Fi=[],Mi={render:Bi,staticRenderFns:Fi},qi=Mi,Ri=i("VU/8"),ji=b,Oi=Ri(Li,qi,!1,ji,null,null),Wi=Oi.exports,Di=Wi,Hi=[{path:"/",redirect:{name:"Login"}},{path:"/login",name:"Login",component:hi},{path:"/regist",name:"Regist",component:yi},{path:"/home",name:"Home",component:Di},{path:"/registAgain",name:"RegistAgain",component:Ii},{path:"/hello",name:"HelloWorld",component:O},{path:"/vux",name:"HelloFromVux",component:Tt},{path:"/vuex",name:"VuexDemo",component:Rt},{path:"/upload",name:"Upload",component:Kt}],Ui=Hi;x.a.use(N.a);var zi=new N.a({routes:Ui}),Pi=(i("j1ja"),i("v5o6"),i("3BeM"));x.a.config.productionTip=!1,x.a.use(Pi.a),new x.a({el:"#app",router:zi,store:ti,components:{App:A},template:"<App/>"})},RMDY:function(t,e){},ZoBA:function(t,e){},d4qF:function(t,e){},kllH:function(t,e){},qHQD:function(t,e){},qMGw:function(t,e){},rLAy:function(t,e,i){"use strict";function n(t){i("kllH")}var s=i("xNvf"),a=(s.a,Boolean,Number,String,String,String,Boolean,String,String,{name:"toast",mixins:[s.a],props:{value:Boolean,time:{type:Number,default:2e3},type:{type:String,default:"success"},transition:String,width:{type:String,default:"7.6em"},isShowMask:{type:Boolean,default:!1},text:String,position:String},data:function(){return{show:!1}},created:function(){this.value&&(this.show=!0)},computed:{currentTransition:function(){return this.transition?this.transition:"top"===this.position?"vux-slide-from-top":"bottom"===this.position?"vux-slide-from-bottom":"vux-fade"},toastClass:function(){return{"weui-toast_forbidden":"warn"===this.type,"weui-toast_cancel":"cancel"===this.type,"weui-toast_success":"success"===this.type,"weui-toast_text":"text"===this.type,"vux-toast-top":"top"===this.position,"vux-toast-bottom":"bottom"===this.position,"vux-toast-middle":"middle"===this.position}},style:function(){if("text"===this.type&&"auto"===this.width)return{padding:"10px"}}},watch:{show:function(t){var e=this;t&&(this.$emit("input",!0),this.$emit("on-show"),this.fixSafariOverflowScrolling("auto"),clearTimeout(this.timeout),this.timeout=setTimeout(function(){e.show=!1,e.$emit("input",!1),e.$emit("on-hide"),e.fixSafariOverflowScrolling("touch")},this.time))},value:function(t){this.show=t}}}),r=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"vux-toast"},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.isShowMask&&t.show,expression:"isShowMask && show"}],staticClass:"weui-mask_transparent"}),t._v(" "),i("transition",{attrs:{name:t.currentTransition}},[i("div",{directives:[{name:"show",rawName:"v-show",value:t.show,expression:"show"}],staticClass:"weui-toast",class:t.toastClass,style:{width:t.width}},[i("i",{directives:[{name:"show",rawName:"v-show",value:"text"!==t.type,expression:"type !== 'text'"}],staticClass:"weui-icon-success-no-circle weui-icon_toast"}),t._v(" "),t.text?i("p",{staticClass:"weui-toast__content",style:t.style,domProps:{innerHTML:t._s(t.text)}}):i("p",{staticClass:"weui-toast__content",style:t.style},[t._t("default")],2)])])],1)},o=[],l={render:r,staticRenderFns:o},u=l,c=i("VU/8"),d=n,h=c(a,u,!1,d,null,null);e.a=h.exports},"uK/t":function(t,e){},wz0u:function(t,e,i){t.exports=i.p+"static/img/vux_logo.79cbb96.png"}},["NHnr"]);
//# sourceMappingURL=app.ed50cac39c4b22f1671c.js.map