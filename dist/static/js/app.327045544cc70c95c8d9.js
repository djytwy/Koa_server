webpackJsonp([3],{AUI1:function(e,n){},IcnI:function(e,n,t){"use strict";var o,i=t("lRwf"),r=t.n(i),a=t("R4Sj"),u=t("a3Yh"),s=t.n(u),c=(o={},s()(o,"LOGIN",function(e,n){e.token=n,window.sessionStorage.setItem("token",n)}),s()(o,"LOGOUT",function(e){e.token=null,window.sessionStorage.removeItem("token")}),s()(o,"USERNAME",function(e,n){e.username=n,window.sessionStorage.setItem("username",n)}),o),f={UserLogin:function(e,n){(0,e.commit)("LOGIN",n)},UserLoginout:function(e){(0,e.commit)("LOGOUT")},UserName:function(e,n){(0,e.commit)("USERNAME",n)}};r.a.use(a.a);var l={token:window.sessionStorage.getItem("token"),username:""};n.a=new a.a.Store({state:l,mutations:c,actions:f})},NHnr:function(e,n,t){"use strict";Object.defineProperty(n,"__esModule",{value:!0});var o={render:function(){var e=this.$createElement,n=this._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]};var i=t("C7Lr")({name:"App"},o,!1,function(e){t("AUI1")},null,null).exports,r=t("YaEn"),a=(t("XEXE"),t("IcnI"));Vue.config.productionTip=!1,Vue.prototype.$ELEMENT={size:"small",zIndex:3e3},Vue.prototype.$http=axios,axios.defaults.withCredentials=!0,new Vue({el:"#app",router:r.a,store:a.a,render:function(e){return e(i)}})},OMN4:function(e,n){e.exports=axios},XEXE:function(e,n){},YaEn:function(e,n,t){"use strict";var o=t("KGCO"),i=t("IcnI");Vue.use(o.a);var r=new o.a({mode:"history",routes:[{path:"/",name:"home",component:function(e){t.e(1).then(function(){e(t("wUZA"))}.bind(null,t)).catch(t.oe)},meta:{requireAuth:!0}},{path:"/login",name:"login",component:function(e){t.e(0).then(function(){e(t("K31e"))}.bind(null,t)).catch(t.oe)},meta:{loginCheck:!0}}]});r.beforeEach(function(e,n,t){var o=i.a.state.token;e.meta.requiresAuth?o?t():t({path:"/login",query:{redirect:e.fullPath}}):e.meta.loginCheck&&o?t({path:"/",query:{redirect:e.fullPath}}):t()}),n.a=r},lRwf:function(e,n){e.exports=Vue}},["NHnr"]);
//# sourceMappingURL=app.327045544cc70c95c8d9.js.map