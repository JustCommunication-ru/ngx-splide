function _defineProperties(n,t){for(var e=0;e<t.length;e++){var i=t[e];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(n,i.key,i)}}function _createClass(n,t,e){return t&&_defineProperties(n.prototype,t),e&&_defineProperties(n,e),Object.defineProperty(n,"prototype",{writable:!1}),n}
/*!
 * Splide.js
 * Version  : 4.1.4
 * License  : MIT
 * Copyright: 2022 Naotoshi Fujita
 */!function(n,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(n="undefined"!=typeof globalThis?globalThis:n||self).Splide=t()}(this,function(){"use strict";var n="(prefers-reduced-motion: reduce)",t=1,e=3,i=4,r=5,o=7,u={CREATED:t,MOUNTED:2,IDLE:e,MOVING:i,SCROLLING:r,DRAGGING:6,DESTROYED:o};function a(n){n.length=0}function s(n,t,e){return Array.prototype.slice.call(n,t,e)}function c(n){return n.bind.apply(n,[null].concat(s(arguments,1)))}var f=setTimeout,l=function(){};function d(n){return requestAnimationFrame(n)}function v(n,t){return typeof t===n}function p(n){return!b(n)&&v("object",n)}var h=Array.isArray,g=c(v,"function"),m=c(v,"string"),y=c(v,"undefined");function b(n){return null===n}function w(n){try{return n instanceof(n.ownerDocument.defaultView||window).HTMLElement}catch(n){return!1}}function E(n){return h(n)?n:[n]}function S(n,t){E(n).forEach(t)}function x(n,t){return n.indexOf(t)>-1}function P(n,t){return n.push.apply(n,E(t)),n}function C(n,t,e){n&&S(t,function(t){t&&n.classList[e?"add":"remove"](t)})}function k(n,t){C(n,m(t)?t.split(" "):t,!0)}function _(n,t){S(t,n.appendChild.bind(n))}function L(n,t){S(n,function(n){var e=(t||n).parentNode;e&&e.insertBefore(n,t)})}function A(n,t){return w(n)&&(n.msMatchesSelector||n.matches).call(n,t)}function D(n,t){var e=n?s(n.children):[];return t?e.filter(function(n){return A(n,t)}):e}function M(n,t){return t?D(n,t)[0]:n.firstElementChild}var z=Object.keys;function N(n,t,e){return n&&(e?z(n).reverse():z(n)).forEach(function(e){"__proto__"!==e&&t(n[e],e)}),n}function O(n){return s(arguments,1).forEach(function(t){N(t,function(e,i){n[i]=t[i]})}),n}function T(n){return s(arguments,1).forEach(function(t){N(t,function(t,e){h(t)?n[e]=t.slice():p(t)?n[e]=T({},p(n[e])?n[e]:{},t):n[e]=t})}),n}function I(n,t){S(t||z(n),function(t){delete n[t]})}function F(n,t){S(n,function(n){S(t,function(t){n&&n.removeAttribute(t)})})}function j(n,t,e){p(t)?N(t,function(t,e){j(n,e,t)}):S(n,function(n){b(e)||""===e?F(n,t):n.setAttribute(t,String(e))})}function R(n,t,e){var i=document.createElement(n);return t&&(m(t)?k(i,t):j(i,t)),e&&_(e,i),i}function W(n,t,e){if(y(e))return getComputedStyle(n)[t];b(e)||(n.style[t]=""+e)}function X(n,t){W(n,"display",t)}function G(n){n.setActive&&n.setActive()||n.focus({preventScroll:!0})}function B(n,t){return n.getAttribute(t)}function H(n,t){return n&&n.classList.contains(t)}function Y(n){return n.getBoundingClientRect()}function q(n){S(n,function(n){n&&n.parentNode&&n.parentNode.removeChild(n)})}function U(n){return M((new DOMParser).parseFromString(n,"text/html").body)}function K(n,t){n.preventDefault(),t&&(n.stopPropagation(),n.stopImmediatePropagation())}function J(n,t){return n&&n.querySelector(t)}function V(n,t){return t?s(n.querySelectorAll(t)):[]}function Q(n,t){C(n,t,!1)}function Z(n){return n.timeStamp}function $(n){return m(n)?n:n?n+"px":""}var nn="splide",tn="data-"+nn;function en(n,t){if(!n)throw new Error("["+nn+"] "+(t||""))}var rn=Math.min,on=Math.max,un=Math.floor,an=Math.ceil,sn=Math.abs;function cn(n,t,e){return sn(n-t)<e}function fn(n,t,e,i){var r=rn(t,e),o=on(t,e);return i?r<n&&n<o:r<=n&&n<=o}function ln(n,t,e){var i=rn(t,e),r=on(t,e);return rn(on(i,n),r)}function dn(n){return+(n>0)-+(n<0)}function vn(n,t){return S(t,function(t){n=n.replace("%s",""+t)}),n}function pn(n){return n<10?"0"+n:""+n}var hn={};function gn(){var n=[];function t(n,t,e){S(n,function(n){n&&S(t,function(t){t.split(" ").forEach(function(t){var i=t.split(".");e(n,i[0],i[1])})})})}return{bind:function(e,i,r,o){t(e,i,function(t,e,i){var u="addEventListener"in t,a=u?t.removeEventListener.bind(t,e,r,o):t.removeListener.bind(t,r);u?t.addEventListener(e,r,o):t.addListener(r),n.push([t,e,i,r,a])})},unbind:function(e,i,r){t(e,i,function(t,e,i){n=n.filter(function(n){return!!(n[0]!==t||n[1]!==e||n[2]!==i||r&&n[3]!==r)||(n[4](),!1)})})},dispatch:function(n,t,e){var i;return"function"==typeof CustomEvent?i=new CustomEvent(t,{bubbles:true,detail:e}):(i=document.createEvent("CustomEvent")).initCustomEvent(t,true,!1,e),n.dispatchEvent(i),i},destroy:function(){n.forEach(function(n){n[4]()}),a(n)}}}var mn="mounted",yn="ready",bn="move",wn="moved",En="click",Sn="active",xn="inactive",Pn="visible",Cn="hidden",kn="refresh",_n="updated",Ln="resize",An="resized",Dn="scroll",Mn="scrolled",zn="destroy",Nn="arrows:mounted",On="navigation:mounted",Tn="autoplay:play",In="autoplay:pause",Fn="lazyload:loaded",jn="sk",Rn="sh",Wn="ei";function Xn(n){var t=n?n.event.bus:document.createDocumentFragment(),e=gn();return n&&n.event.on(zn,e.destroy),O(e,{bus:t,on:function(n,i){e.bind(t,E(n).join(" "),function(n){i.apply(i,h(n.detail)?n.detail:[])})},off:c(e.unbind,t),emit:function(n){e.dispatch(t,n,s(arguments,1))}})}function Gn(n,t,e,i){var r,o,u=Date.now,a=0,s=!0,c=0;function f(){if(!s){if(a=n?rn((u()-r)/n,1):1,e&&e(a),a>=1&&(t(),r=u(),i&&++c>=i))return l();o=d(f)}}function l(){s=!0}function v(){o&&cancelAnimationFrame(o),a=0,o=0,s=!0}return{start:function(t){t||v(),r=u()-(t?a*n:0),s=!1,o=d(f)},rewind:function(){r=u(),a=0,e&&e(a)},pause:l,cancel:v,set:function(t){n=t},isPaused:function(){return s}}}var Bn="Arrow",Hn=Bn+"Left",Yn=Bn+"Right",qn=Bn+"Up",Un=Bn+"Down",Kn="ttb",Jn={width:["height"],left:["top","right"],right:["bottom","left"],x:["y"],X:["Y"],Y:["X"],ArrowLeft:[qn,Yn],ArrowRight:[Un,Hn]};var Vn="role",Qn="tabindex",Zn="aria-",$n=Zn+"controls",nt=Zn+"current",tt=Zn+"selected",et=Zn+"label",it=Zn+"labelledby",rt=Zn+"hidden",ot=Zn+"orientation",ut=Zn+"roledescription",at=Zn+"live",st=Zn+"busy",ct=Zn+"atomic",ft=[Vn,Qn,"disabled",$n,nt,et,it,rt,ot,ut],lt=nn+"__",dt="is-",vt=nn,pt=lt+"track",ht=lt+"list",gt=lt+"slide",mt=gt+"--clone",yt=gt+"__container",bt=lt+"arrows",wt=lt+"arrow",Et=wt+"--prev",St=wt+"--next",xt=lt+"pagination",Pt=xt+"__page",Ct=lt+"progress"+"__bar",kt=lt+"toggle",_t=lt+"sr",Lt=dt+"initialized",At=dt+"active",Dt=dt+"prev",Mt=dt+"next",zt=dt+"visible",Nt=dt+"loading",Ot=dt+"focus-in",Tt=dt+"overflow",It=[At,zt,Dt,Mt,Nt,Ot,Tt],Ft={slide:gt,clone:mt,arrows:bt,arrow:wt,prev:Et,next:St,pagination:xt,page:Pt,spinner:lt+"spinner"};var jt="touchstart mousedown",Rt="touchmove mousemove",Wt="touchend touchcancel mouseup click";var Xt="slide",Gt="loop",Bt="fade";function Ht(n,t,e,o){var u,a=Xn(n),s=a.on,f=a.emit,l=a.bind,d=n.Components,v=n.root,p=n.options,h=p.isNavigation,g=p.updateOnMove,m=p.i18n,y=p.pagination,b=p.slideFocus,w=d.Direction.resolve,E=B(o,"style"),S=B(o,et),x=e>-1,P=M(o,"."+yt);function k(){var i=n.splides.map(function(n){var e=n.splide.Components.Slides.getAt(t);return e?e.slide.id:""}).join(" ");j(o,et,vn(m.slideX,(x?e:t)+1)),j(o,$n,i),j(o,Vn,b?"button":""),b&&F(o,ut)}function _(){u||L()}function L(){if(!u){var e=n.index;(a=A())!==H(o,At)&&(C(o,At,a),j(o,nt,h&&a||""),f(a?Sn:xn,D)),function(){var t=function(){if(n.is(Bt))return A();var t=Y(d.Elements.track),e=Y(o),i=w("left",!0),r=w("right",!0);return un(t[i])<=an(e[i])&&un(e[r])<=an(t[r])}(),e=!t&&(!A()||x);n.state.is([i,r])||j(o,rt,e||"");j(V(o,p.focusableNodes||""),Qn,e?-1:""),b&&j(o,Qn,e?-1:0);t!==H(o,zt)&&(C(o,zt,t),f(t?Pn:Cn,D));if(!t&&document.activeElement===o){var u=d.Slides.getAt(n.index);u&&G(u.slide)}}(),C(o,Dt,t===e-1),C(o,Mt,t===e+1)}var a}function A(){var i=n.index;return i===t||p.cloneStatus&&i===e}var D={index:t,slideIndex:e,slide:o,container:P,isClone:x,mount:function(){x||(o.id=v.id+"-slide"+pn(t+1),j(o,Vn,y?"tabpanel":"group"),j(o,ut,m.slide),j(o,et,S||vn(m.slideLabel,[t+1,n.length]))),l(o,"click",c(f,En,D)),l(o,"keydown",c(f,jn,D)),s([wn,Rn,Mn],L),s(On,k),g&&s(bn,_)},destroy:function(){u=!0,a.destroy(),Q(o,It),F(o,ft),j(o,"style",E),j(o,et,S||"")},update:L,style:function(n,t,e){W(e&&P||o,n,t)},isWithin:function(e,i){var r=sn(e-t);return x||!p.rewind&&!n.is(Gt)||(r=rn(r,n.length-r)),r<=i}};return D}var Yt=tn+"-interval";var qt={passive:!1,capture:!0};var Ut={Spacebar:" ",Right:Yn,Left:Hn,Up:qn,Down:Un};function Kt(n){return n=m(n)?n:n.key,Ut[n]||n}var Jt="keydown";var Vt=tn+"-lazy",Qt=Vt+"-srcset",Zt="["+Vt+"], ["+Qt+"]";var $t=[" ","Enter"];var ne=Object.freeze({__proto__:null,Media:function(e,i,r){var u=e.state,a=r.breakpoints||{},s=r.reducedMotion||{},c=gn(),f=[];function l(n){n&&c.destroy()}function d(n,t){var e=matchMedia(t);c.bind(e,"change",v),f.push([n,e])}function v(){var n=u.is(o),t=r.direction,i=f.reduce(function(n,t){return T(n,t[1].matches?t[0]:{})},{});I(r),p(i),r.destroy?e.destroy("completely"===r.destroy):n?(l(!0),e.mount()):t!==r.direction&&e.refresh()}function p(n,i,o){T(r,n),i&&T(Object.getPrototypeOf(r),n),!o&&u.is(t)||e.emit(_n,r)}return{setup:function(){var t="min"===r.mediaQuery;z(a).sort(function(n,e){return t?+n-+e:+e-+n}).forEach(function(n){d(a[n],"("+(t?"min":"max")+"-width:"+n+"px)")}),d(s,n),v()},destroy:l,reduce:function(t){matchMedia(n).matches&&(t?T(r,s):I(r,z(s)))},set:p}},Direction:function(n,t,e){return{resolve:function(n,t,i){var r="rtl"!==(i=i||e.direction)||t?i===Kn?0:-1:1;return Jn[n]&&Jn[n][r]||n.replace(/width|left|right/i,function(n,t){var e=Jn[n.toLowerCase()][r]||n;return t>0?e.charAt(0).toUpperCase()+e.slice(1):e})},orient:function(n){return n*("rtl"===e.direction?1:-1)}}},Elements:function(n,t,e){var i,r,o,u=Xn(n),s=u.on,c=u.bind,f=n.root,l=e.i18n,d={},v=[],p=[],h=[];function m(){i=w("."+pt),r=M(i,"."+ht),en(i&&r,"A track/list element is missing."),P(v,D(r,"."+gt+":not(."+mt+")")),N({arrows:bt,pagination:xt,prev:Et,next:St,bar:Ct,toggle:kt},function(n,t){d[t]=w("."+n)}),O(d,{root:f,track:i,list:r,slides:v}),function(){var n=f.id||(o=nn,""+o+pn(hn[o]=(hn[o]||0)+1)),t=e.role;var o;f.id=n,i.id=i.id||n+"-track",r.id=r.id||n+"-list",!B(f,Vn)&&"SECTION"!==f.tagName&&t&&j(f,Vn,t);j(f,ut,l.carousel),j(r,Vn,"presentation")}(),b()}function y(n){var t=ft.concat("style");a(v),Q(f,p),Q(i,h),F([i,r],t),F(f,n?t:["style",ut])}function b(){Q(f,p),Q(i,h),p=E(vt),h=E(pt),k(f,p),k(i,h),j(f,et,e.label),j(f,it,e.labelledby)}function w(n){var t=J(f,n);return t&&function(n,t){if(g(n.closest))return n.closest(t);for(var e=n;e&&1===e.nodeType&&!A(e,t);)e=e.parentElement;return e}(t,"."+vt)===f?t:void 0}function E(n){return[n+"--"+e.type,n+"--"+e.direction,e.drag&&n+"--draggable",e.isNavigation&&n+"--nav",n===vt&&At]}return O(d,{setup:m,mount:function(){s(kn,y),s(kn,m),s(_n,b),c(document,jt+" keydown",function(n){o="keydown"===n.type},{capture:!0}),c(f,"focusin",function(){C(f,Ot,!!o)})},destroy:y})},Slides:function(n,t,e){var i=Xn(n),r=i.on,o=i.emit,u=i.bind,s=t.Elements,f=s.slides,l=s.list,d=[];function v(){f.forEach(function(n,t){h(n,t,-1)})}function p(){b(function(n){n.destroy()}),a(d)}function h(t,e,i){var r=Ht(n,e,i,t);r.mount(),d.push(r),d.sort(function(n,t){return n.index-t.index})}function y(n){return n?P(function(n){return!n.isClone}):d}function b(n,t){y(t).forEach(n)}function P(n){return d.filter(g(n)?n:function(t){return m(n)?A(t.slide,n):x(E(n),t.index)})}return{mount:function(){v(),r(kn,p),r(kn,v)},destroy:p,update:function(){b(function(n){n.update()})},register:h,get:y,getIn:function(n){var i=t.Controller,r=i.toIndex(n),o=i.hasFocus()?1:e.perPage;return P(function(n){return fn(n.index,r,r+o-1)})},getAt:function(n){return P(n)[0]},add:function(n,t){S(n,function(n){if(m(n)&&(n=U(n)),w(n)){var i=f[t];i?L(n,i):_(l,n),k(n,e.classes.slide),r=n,a=c(o,Ln),s=V(r,"img"),(d=s.length)?s.forEach(function(n){u(n,"load error",function(){--d||a()})}):a()}var r,a,s,d}),o(kn)},remove:function(n){q(P(n).map(function(n){return n.slide})),o(kn)},forEach:b,filter:P,style:function(n,t,e){b(function(i){i.style(n,t,e)})},getLength:function(n){return n?f.length:d.length},isEnough:function(){return d.length>e.perPage}}},Layout:function(n,t,e){var i,r,o,u=Xn(n),a=u.on,s=u.bind,f=u.emit,l=t.Slides,d=t.Direction.resolve,v=t.Elements,h=v.root,g=v.track,m=v.list,y=l.getAt,b=l.style;function w(){i=e.direction===Kn,W(h,"maxWidth",$(e.width)),W(g,d("paddingLeft"),S(!1)),W(g,d("paddingRight"),S(!0)),E(!0)}function E(n){var t=Y(h);(n||r.width!==t.width||r.height!==t.height)&&(W(g,"height",function(){var n="";i&&(en(n=x(),"height or heightRatio is missing."),n="calc("+n+" - "+S(!1)+" - "+S(!0)+")");return n}()),b(d("marginRight"),$(e.gap)),b("width",e.autoWidth?null:$(e.fixedWidth)||(i?"":P())),b("height",$(e.fixedHeight)||(i?e.autoHeight?null:P():x()),!0),r=t,f(An),o!==(o=M())&&(C(h,Tt,o),f("overflow",o)))}function S(n){var t=e.padding,i=d(n?"right":"left");return t&&$(t[i]||(p(t)?0:t))||"0px"}function x(){return $(e.height||Y(m).width*e.heightRatio)}function P(){var n=$(e.gap);return"calc((100%"+(n&&" + "+n)+")/"+(e.perPage||1)+(n&&" - "+n)+")"}function k(){return Y(m)[d("width")]}function _(n,t){var e=y(n||0);return e?Y(e.slide)[d("width")]+(t?0:D()):0}function L(n,t){var e=y(n);if(e){var i=Y(e.slide)[d("right")],r=Y(m)[d("left")];return sn(i-r)+(t?0:D())}return 0}function A(t){return L(n.length-1)-L(0)+_(0,t)}function D(){var n=y(0);return n&&parseFloat(W(n.slide,d("marginRight")))||0}function M(){return n.is(Bt)||A(!0)>k()}return{mount:function(){var n,t,e;w(),s(window,"resize load",(n=c(f,Ln),e=Gn(t||0,n,null,1),function(){e.isPaused()&&e.start()})),a([_n,kn],w),a(Ln,E)},resize:E,listSize:k,slideSize:_,sliderSize:A,totalSize:L,getPadding:function(n){return parseFloat(W(g,d("padding"+(n?"Right":"Left"))))||0},isOverflow:M}},Clones:function(n,t,e){var i,r=Xn(n),o=r.on,u=t.Elements,s=t.Slides,c=t.Direction.resolve,f=[];function l(){o(kn,d),o([_n,Ln],p),(i=h())&&(!function(t){var i=s.get().slice(),r=i.length;if(r){for(;i.length<t;)P(i,i);P(i.slice(-t),i.slice(0,t)).forEach(function(o,a){var c=a<t,l=function(t,i){var r=t.cloneNode(!0);return k(r,e.classes.clone),r.id=n.root.id+"-clone"+pn(i+1),r}(o.slide,a);c?L(l,i[0].slide):_(u.list,l),P(f,l),s.register(l,a-t+(c?0:r),o.index)})}}(i),t.Layout.resize(!0))}function d(){v(),l()}function v(){q(f),a(f),r.destroy()}function p(){var n=h();i!==n&&(i<n||!n)&&r.emit(kn)}function h(){var i=e.clones;if(n.is(Gt)){if(y(i)){var r=e[c("fixedWidth")]&&t.Layout.slideSize(0);i=r&&an(Y(u.track)[c("width")]/r)||e[c("autoWidth")]&&n.length||2*e.perPage}}else i=0;return i}return{mount:l,destroy:v}},Move:function(n,t,r){var o,u=Xn(n),a=u.on,s=u.emit,c=n.state.set,f=t.Layout,l=f.slideSize,d=f.getPadding,v=f.totalSize,p=f.listSize,h=f.sliderSize,g=t.Direction,m=g.resolve,b=g.orient,w=t.Elements,E=w.list,S=w.track;function x(){t.Controller.isBusy()||(t.Scroll.cancel(),P(n.index),t.Slides.update())}function P(n){C(A(n,!0))}function C(e,i){if(!n.is(Bt)){var r=i?e:function(e){if(n.is(Gt)){var i=L(e),r=i>t.Controller.getEnd();(i<0||r)&&(e=k(e,r))}return e}(e);W(E,"transform","translate"+m("X")+"("+r+"px)"),e!==r&&s(Rn)}}function k(n,t){var e=n-M(t),i=h();return n-=b(i*(an(sn(e)/i)||1))*(t?1:-1)}function _(){C(D(),!0),o.cancel()}function L(n){for(var e=t.Slides.get(),i=0,r=1/0,o=0;o<e.length;o++){var u=e[o].index,a=sn(A(u,!0)-n);if(!(a<=r))break;r=a,i=u}return i}function A(t,e){var i=b(v(t-1)-function(n){var t=r.focus;return"center"===t?(p()-l(n,!0))/2:+t*l(n)||0}(t));return e?function(t){r.trimSpace&&n.is(Xt)&&(t=ln(t,0,b(h(!0)-p())));return t}(i):i}function D(){var n=m("left");return Y(E)[n]-Y(S)[n]+b(d(!1))}function M(n){return A(n?t.Controller.getEnd():0,!!r.trimSpace)}return{mount:function(){o=t.Transition,a([mn,An,_n,kn],x)},move:function(n,t,r,u){var a,f;n!==t&&(a=n>r,f=b(k(D(),a)),a?f>=0:f<=E[m("scrollWidth")]-Y(S)[m("width")])&&(_(),C(k(D(),n>r),!0)),c(i),s(bn,t,r,n),o.start(t,function(){c(e),s(wn,t,r,n),u&&u()})},jump:P,translate:C,shift:k,cancel:_,toIndex:L,toPosition:A,getPosition:D,getLimit:M,exceededLimit:function(n,t){t=y(t)?D():t;var e=!0!==n&&b(t)<b(M(!1)),i=!1!==n&&b(t)>b(M(!0));return e||i},reposition:x}},Controller:function(n,t,e){var o,u,a,s,f=Xn(n),l=f.on,d=f.emit,v=t.Move,p=v.getPosition,h=v.getLimit,g=v.toPosition,b=t.Slides,w=b.isEnough,E=b.getLength,S=e.omitEnd,x=n.is(Gt),P=n.is(Xt),C=c(M,!1),k=c(M,!0),_=e.start||0,L=_;function A(){u=E(!0),a=e.perMove,s=e.perPage,o=O();var n=ln(_,0,S?o:u-1);n!==_&&(_=n,v.reposition())}function D(){o!==O()&&d(Wn)}function M(n,t){var e=a||(j()?1:s),i=z(_+e*(n?-1:1),_,!(a||j()));return-1===i&&P&&!cn(p(),h(!n),1)?n?0:o:t?i:N(i)}function z(t,i,r){if(w()||j()){var c=function(t){if(P&&"move"===e.trimSpace&&t!==_)for(var i=p();i===g(t,!0)&&fn(t,0,n.length-1,!e.rewind);)t<_?--t:++t;return t}(t);c!==t&&(i=t,t=c,r=!1),t<0||t>o?t=a||!fn(0,t,i,!0)&&!fn(o,i,t,!0)?x?r?t<0?-(u%s||s):u:t:e.rewind?t<0?o:0:-1:T(I(t)):r&&t!==i&&(t=T(I(i)+(t<i?-1:1)))}else t=-1;return t}function N(n){return x?(n+u)%u||0:n}function O(){for(var n=u-(j()||x&&a?1:s);S&&n-- >0;)if(g(u-1,!0)!==g(n,!0)){n++;break}return ln(n,0,u-1)}function T(n){return ln(j()?n:s*n,0,o)}function I(n){return j()?rn(n,o):un((n>=o?u-1:n)/s)}function F(n){n!==_&&(L=_,_=n)}function j(){return!y(e.focus)||e.isNavigation}function R(){return n.state.is([i,r])&&!!e.waitForTransition}return{mount:function(){A(),l([_n,kn,Wn],A),l(An,D)},go:function(n,t,e){if(!R()){var i=function(n){var t=_;if(m(n)){var e=n.match(/([+\-<>])(\d+)?/)||[],i=e[1],r=e[2];"+"===i||"-"===i?t=z(_+ +(""+i+(+r||1)),_):">"===i?t=r?T(+r):C(!0):"<"===i&&(t=k(!0))}else t=x?n:ln(n,0,o);return t}(n),r=N(i);r>-1&&(t||r!==_)&&(F(r),v.move(i,r,L,e))}},scroll:function(n,e,i,r){t.Scroll.scroll(n,e,i,function(){var n=N(v.toIndex(p()));F(S?rn(n,o):n),r&&r()})},getNext:C,getPrev:k,getAdjacent:M,getEnd:O,setIndex:F,getIndex:function(n){return n?L:_},toIndex:T,toPage:I,toDest:function(n){var t=v.toIndex(n);return P?ln(t,0,o):t},hasFocus:j,isBusy:R}},Arrows:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.bind,s=o.emit,f=e.classes,l=e.i18n,d=t.Elements,v=t.Controller,p=d.arrows,h=d.track,g=p,m=d.prev,y=d.next,b={};function w(){!function(){var n=e.arrows;!n||m&&y||(g=p||R("div",f.arrows),m=P(!0),y=P(!1),i=!0,_(g,[m,y]),!p&&L(g,h));m&&y&&(O(b,{prev:m,next:y}),X(g,n?"":"none"),k(g,r=bt+"--"+e.direction),n&&(u([mn,wn,kn,Mn,Wn],C),a(y,"click",c(x,">")),a(m,"click",c(x,"<")),C(),j([m,y],$n,h.id),s(Nn,m,y)))}(),u(_n,E)}function E(){S(),w()}function S(){o.destroy(),Q(g,r),i?(q(p?[m,y]:g),m=y=null):F([m,y],ft)}function x(n){v.go(n,!0)}function P(n){return U('<button class="'+f.arrow+" "+(n?f.prev:f.next)+'" type="button"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 40 40" width="40" height="40" focusable="false"><path d="'+(e.arrowPath||"m15.5 0.932-4.3 4.38 14.5 14.6-14.5 14.5 4.3 4.4 14.6-14.6 4.4-4.3-4.4-4.4-14.6-14.6z")+'" />')}function C(){if(m&&y){var t=n.index,e=v.getPrev(),i=v.getNext(),r=e>-1&&t<e?l.last:l.prev,o=i>-1&&t>i?l.first:l.next;m.disabled=e<0,y.disabled=i<0,j(m,et,r),j(y,et,o),s("arrows:updated",m,y,e,i)}}return{arrows:b,mount:w,destroy:S,update:C}},Autoplay:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.bind,s=o.emit,c=Gn(e.interval,n.go.bind(n,">"),function(n){var t=l.bar;t&&W(t,"width",100*n+"%"),s("autoplay:playing",n)}),f=c.isPaused,l=t.Elements,d=t.Elements,v=d.root,p=d.toggle,h=e.autoplay,g="pause"===h;function m(){f()&&t.Slides.isEnough()&&(c.start(!e.resetProgress),r=i=g=!1,w(),s(Tn))}function y(n){void 0===n&&(n=!0),g=!!n,w(),f()||(c.pause(),s(In))}function b(){g||(i||r?y(!1):m())}function w(){p&&(C(p,At,!g),j(p,et,e.i18n[g?"play":"pause"]))}function E(n){var i=t.Slides.getAt(n);c.set(i&&+B(i.slide,Yt)||e.interval)}return{mount:function(){h&&(!function(){e.pauseOnHover&&a(v,"mouseenter mouseleave",function(n){i="mouseenter"===n.type,b()});e.pauseOnFocus&&a(v,"focusin focusout",function(n){r="focusin"===n.type,b()});p&&a(p,"click",function(){g?m():y(!0)});u([bn,Dn,kn],c.rewind),u(bn,E)}(),p&&j(p,$n,l.track.id),g||m(),w())},destroy:c.cancel,play:m,pause:y,isPaused:f}},Cover:function(n,t,e){var i=Xn(n).on;function r(n){t.Slides.forEach(function(t){var e=M(t.container||t.slide,"img");e&&e.src&&o(n,e,t)})}function o(n,t,e){e.style("background",n?'center/cover no-repeat url("'+t.src+'")':"",!0),X(t,n?"none":"")}return{mount:function(){e.cover&&(i(Fn,c(o,!0)),i([mn,_n,kn],c(r,!0)))},destroy:c(r,!1)}},Scroll:function(n,t,i){var o,u,a=Xn(n),s=a.on,f=a.emit,l=n.state.set,d=t.Move,v=d.getPosition,p=d.getLimit,h=d.exceededLimit,g=d.translate,m=n.is(Xt),y=1;function b(n,e,i,a,s){var p=v();if(S(),i&&(!m||!h())){var g=t.Layout.sliderSize(),b=dn(n)*g*un(sn(n)/g)||0;n=d.toPosition(t.Controller.toDest(n%g))+b}var x=cn(p,n,1);y=1,e=x?0:e||on(sn(n-p)/1.5,800),u=a,o=Gn(e,w,c(E,p,n,s),1),l(r),f(Dn),o.start()}function w(){l(e),u&&u(),f(Mn)}function E(n,t,e,r){var o,a,s=v(),c=(n+(t-n)*(o=r,(a=i.easingFunc)?a(o):1-Math.pow(1-o,4))-s)*y;g(s+c),m&&!e&&h()&&(y*=.6,sn(c)<10&&b(p(h(!0)),600,!1,u,!0))}function S(){o&&o.cancel()}function x(){o&&!o.isPaused()&&(S(),w())}return{mount:function(){s(bn,S),s([_n,kn],x)},destroy:S,scroll:b,cancel:x}},Drag:function(n,t,o){var u,a,s,c,f,d,v,h,g=Xn(n),m=g.on,y=g.emit,b=g.bind,w=g.unbind,E=n.state,S=t.Move,x=t.Scroll,P=t.Controller,C=t.Elements.track,k=t.Media.reduce,_=t.Direction,L=_.resolve,D=_.orient,M=S.getPosition,z=S.exceededLimit,N=!1;function O(){var n=o.drag;Y(!n),c="free"===n}function T(n){if(d=!1,!v){var t=H(n);e=n.target,u=o.noDrag,A(e,"."+Pt+", ."+wt)||u&&A(e,u)||!t&&n.button||(P.isBusy()?K(n,!0):(h=t?C:window,f=E.is([i,r]),s=null,b(h,Rt,I,qt),b(h,Wt,F,qt),S.cancel(),x.cancel(),R(n)))}var e,u}function I(t){if(E.is(6)||(E.set(6),y("drag")),t.cancelable)if(f){S.translate(u+W(t)/(N&&n.is(Xt)?5:1));var e=X(t)>200,i=N!==(N=z());(e||i)&&R(t),d=!0,y("dragging"),K(t)}else(function(n){return sn(W(n))>sn(W(n,!0))})(t)&&(f=function(n){var t=o.dragMinThreshold,e=p(t),i=e&&t.mouse||0,r=(e?t.touch:+t)||10;return sn(W(n))>(H(n)?r:i)}(t),K(t))}function F(i){E.is(6)&&(E.set(e),y("dragged")),f&&(!function(e){var i=function(t){if(n.is(Gt)||!N){var e=X(t);if(e&&e<200)return W(t)/e}return 0}(e),r=function(n){return M()+dn(n)*rn(sn(n)*(o.flickPower||600),c?1/0:t.Layout.listSize()*(o.flickMaxPages||1))}(i),u=o.rewind&&o.rewindByDrag;k(!1),c?P.scroll(r,0,o.snap):n.is(Bt)?P.go(D(dn(i))<0?u?"<":"-":u?">":"+"):n.is(Xt)&&N&&u?P.go(z(!0)?">":"<"):P.go(P.toDest(r),!0);k(!0)}(i),K(i)),w(h,Rt,I),w(h,Wt,F),f=!1}function j(n){!v&&d&&K(n,!0)}function R(n){s=a,a=n,u=M()}function W(n,t){return B(n,t)-B(G(n),t)}function X(n){return Z(n)-Z(G(n))}function G(n){return a===n&&s||a}function B(n,t){return(H(n)?n.changedTouches[0]:n)["page"+L(t?"Y":"X")]}function H(n){return"undefined"!=typeof TouchEvent&&n instanceof TouchEvent}function Y(n){v=n}return{mount:function(){b(C,Rt,l,qt),b(C,Wt,l,qt),b(C,jt,T,qt),b(C,"click",j,{capture:!0}),b(C,"dragstart",K),m([mn,_n],O)},disable:Y,isDragging:function(){return f}}},Keyboard:function(n,t,e){var i,r,o=Xn(n),u=o.on,a=o.bind,s=o.unbind,c=n.root,l=t.Direction.resolve;function d(){var n=e.keyboard;n&&(i="global"===n?window:c,a(i,Jt,h))}function v(){s(i,Jt)}function p(){var n=r;r=!0,f(function(){r=n})}function h(t){if(!r){var e=Kt(t);e===l(Hn)?n.go("<"):e===l(Yn)&&n.go(">")}}return{mount:function(){d(),u(_n,v),u(_n,d),u(bn,p)},destroy:v,disable:function(n){r=n}}},LazyLoad:function(n,t,e){var i=Xn(n),r=i.on,o=i.off,u=i.bind,s=i.emit,f="sequential"===e.lazyLoad,l=[wn,Mn],d=[];function v(){a(d),t.Slides.forEach(function(n){V(n.slide,Zt).forEach(function(t){var i=B(t,Vt),r=B(t,Qt);if(i!==t.src||r!==t.srcset){var o=e.classes.spinner,u=t.parentElement,a=M(u,"."+o)||R("span",o,u);d.push([t,n,a]),t.src||X(t,"none")}})}),f?m():(o(l),r(l,p),p())}function p(){(d=d.filter(function(t){var i=e.perPage*((e.preloadPages||1)+1)-1;return!t[1].isWithin(n.index,i)||h(t)})).length||o(l)}function h(n){var t=n[0];k(n[1].slide,Nt),u(t,"load error",c(g,n)),j(t,"src",B(t,Vt)),j(t,"srcset",B(t,Qt)),F(t,Vt),F(t,Qt)}function g(n,t){var e=n[0],i=n[1];Q(i.slide,Nt),"error"!==t.type&&(q(n[2]),X(e,""),s(Fn,e,i),s(Ln)),f&&m()}function m(){d.length&&h(d.shift())}return{mount:function(){e.lazyLoad&&(v(),r(kn,v))},destroy:c(a,d),check:p}},Pagination:function(n,t,e){var i,r,o=Xn(n),u=o.on,f=o.emit,l=o.bind,d=t.Slides,v=t.Elements,p=t.Controller,h=p.hasFocus,g=p.getIndex,m=p.go,y=t.Direction.resolve,b=v.pagination,w=[];function E(){i&&(q(b?s(i.children):i),Q(i,r),a(w),i=null),o.destroy()}function S(n){m(">"+n,!0)}function x(n,t){var e=w.length,i=Kt(t),r=P(),o=-1;i===y(Yn,!1,r)?o=++n%e:i===y(Hn,!1,r)?o=(--n+e)%e:"Home"===i?o=0:"End"===i&&(o=e-1);var u=w[o];u&&(G(u.button),m(">"+o),K(t,!0))}function P(){return e.paginationDirection||e.direction}function C(n){return w[p.toPage(n)]}function _(){var n=C(g(!0)),t=C(g());if(n){var e=n.button;Q(e,At),F(e,tt),j(e,Qn,-1)}if(t){var r=t.button;k(r,At),j(r,tt,!0),j(r,Qn,"")}f("pagination:updated",{list:i,items:w},n,t)}return{items:w,mount:function t(){E(),u([_n,kn,Wn],t);var o=e.pagination;b&&X(b,o?"":"none"),o&&(u([bn,Dn,Mn],_),function(){var t=n.length,o=e.classes,u=e.i18n,a=e.perPage,s=h()?p.getEnd()+1:an(t/a);k(i=b||R("ul",o.pagination,v.track.parentElement),r=xt+"--"+P()),j(i,Vn,"tablist"),j(i,et,u.select),j(i,ot,P()===Kn?"vertical":"");for(var f=0;f<s;f++){var g=R("li",null,i),m=R("button",{class:o.page,type:"button"},g),y=d.getIn(f).map(function(n){return n.slide.id}),E=!h()&&a>1?u.pageX:u.slideX;l(m,"click",c(S,f)),e.paginationKeyboard&&l(m,"keydown",c(x,f)),j(g,Vn,"presentation"),j(m,Vn,"tab"),j(m,$n,y.join(" ")),j(m,et,vn(E,f+1)),j(m,Qn,-1),w.push({li:g,button:m,page:f})}}(),_(),f("pagination:mounted",{list:i,items:w},C(n.index)))},destroy:E,getAt:C,update:_}},Sync:function(n,t,e){var i=e.isNavigation,r=e.slideFocus,o=[];function u(){var t,e;n.splides.forEach(function(t){t.isParent||(f(n,t.splide),f(t.splide,n))}),i&&(t=Xn(n),(e=t.on)(En,d),e(jn,v),e([mn,_n],l),o.push(t),t.emit(On,n.splides))}function s(){o.forEach(function(n){n.destroy()}),a(o)}function f(n,t){var e=Xn(n);e.on(bn,function(n,e,i){t.go(t.is(Gt)?i:n)}),o.push(e)}function l(){j(t.Elements.list,ot,e.direction===Kn?"vertical":"")}function d(t){n.go(t.index)}function v(n,t){x($t,Kt(t))&&(d(n),K(t))}return{setup:c(t.Media.set,{slideFocus:y(r)?i:r},!0),mount:u,destroy:s,remount:function(){s(),u()}}},Wheel:function(n,t,e){var r=Xn(n).bind,o=0;function u(r){if(r.cancelable){var u=r.deltaY,a=u<0,s=Z(r),c=e.wheelMinThreshold||0,f=e.wheelSleep||0;sn(u)>c&&s-o>f&&(n.go(a?"<":">"),o=s),function(r){return!e.releaseWheel||n.state.is(i)||-1!==t.Controller.getAdjacent(r)}(a)&&K(r)}}return{mount:function(){e.wheel&&r(t.Elements.track,"wheel",u,qt)}}},Live:function(n,t,e){var i=Xn(n).on,r=t.Elements.track,o=e.live&&!e.isNavigation,u=R("span",_t),a=Gn(90,c(s,!1));function s(n){j(r,st,n),n?(_(r,u),a.start()):(q(u),a.cancel())}function f(n){o&&j(r,at,n?"off":"polite")}return{mount:function(){o&&(f(!t.Autoplay.isPaused()),j(r,ct,!0),u.textContent="\u2026",i(Tn,c(f,!0)),i(In,c(f,!1)),i([wn,Mn],c(s,!0)))},disable:f,destroy:function(){F(r,[at,ct,st]),q(u)}}}}),te={type:"slide",role:"region",speed:400,perPage:1,cloneStatus:!0,arrows:!0,pagination:!0,paginationKeyboard:!0,interval:5e3,pauseOnHover:!0,pauseOnFocus:!0,resetProgress:!0,easing:"cubic-bezier(0.25, 1, 0.5, 1)",drag:!0,direction:"ltr",trimSpace:!0,focusableNodes:"a, button, textarea, input, select, iframe",live:!0,classes:Ft,i18n:{prev:"Previous slide",next:"Next slide",first:"Go to first slide",last:"Go to last slide",slideX:"Go to slide %s",pageX:"Go to page %s",play:"Start autoplay",pause:"Pause autoplay",carousel:"carousel",slide:"slide",select:"Select a slide to show",slideLabel:"%s of %s"},reducedMotion:{speed:0,rewindSpeed:0,autoplay:"pause"}};function ee(n,t,e){var i=t.Slides;function r(){i.forEach(function(n){n.style("transform","translateX(-"+100*n.index+"%)")})}return{mount:function(){Xn(n).on([mn,kn],r)},start:function(n,t){i.style("transition","opacity "+e.speed+"ms "+e.easing),f(t)},cancel:l}}function ie(n,t,e){var i,r=t.Move,o=t.Controller,u=t.Scroll,a=t.Elements.list,s=c(W,a,"transition");function f(){s(""),u.cancel()}return{mount:function(){Xn(n).bind(a,"transitionend",function(n){n.target===a&&i&&(f(),i())})},start:function(t,a){var c=r.toPosition(t,!0),f=r.getPosition(),l=function(t){var i=e.rewindSpeed;if(n.is(Xt)&&i){var r=o.getIndex(!0),u=o.getEnd();if(0===r&&t>=u||r>=u&&0===t)return i}return e.speed}(t);sn(c-f)>=1&&l>=1?e.useScroll?u.scroll(c,l,!1,a):(s("transform "+l+"ms "+e.easing),r.translate(c,!0),i=a):(r.jump(t),a())},cancel:f}}var re=function(){function n(e,i){var r;this.event=Xn(),this.Components={},this.state=(r=t,{set:function(n){r=n},is:function(n){return x(E(n),r)}}),this.splides=[],this._o={},this._E={};var o=m(e)?J(document,e):e;en(o,o+" is invalid."),this.root=o,i=T({label:B(o,et)||"",labelledby:B(o,it)||""},te,n.defaults,i||{});try{T(i,JSON.parse(B(o,tn)))}catch(n){en(!1,"Invalid JSON")}this._o=Object.create(T({},i))}var i=n.prototype;return i.mount=function(n,i){var r=this,u=this.state,a=this.Components;return en(u.is([t,o]),"Already mounted!"),u.set(t),this._C=a,this._T=i||this._T||(this.is(Bt)?ee:ie),this._E=n||this._E,N(O({},ne,this._E,{Transition:this._T}),function(n,t){var e=n(r,a,r._o);a[t]=e,e.setup&&e.setup()}),N(a,function(n){n.mount&&n.mount()}),this.emit(mn),k(this.root,Lt),u.set(e),this.emit(yn),this},i.sync=function(n){return this.splides.push({splide:n}),n.splides.push({splide:this,isParent:!0}),this.state.is(e)&&(this._C.Sync.remount(),n.Components.Sync.remount()),this},i.go=function(n){return this._C.Controller.go(n),this},i.on=function(n,t){return this.event.on(n,t),this},i.off=function(n){return this.event.off(n),this},i.emit=function(n){var t;return(t=this.event).emit.apply(t,[n].concat(s(arguments,1))),this},i.add=function(n,t){return this._C.Slides.add(n,t),this},i.remove=function(n){return this._C.Slides.remove(n),this},i.is=function(n){return this._o.type===n},i.refresh=function(){return this.emit(kn),this},i.destroy=function(n){void 0===n&&(n=!0);var e=this.event,i=this.state;return i.is(t)?Xn(this).on(yn,this.destroy.bind(this,n)):(N(this._C,function(t){t.destroy&&t.destroy(n)},!0),e.emit(zn),e.destroy(),n&&a(this.splides),i.set(o)),this},_createClass(n,[{key:"options",get:function(){return this._o},set:function(n){this._C.Media.set(n,!0,!0)}},{key:"length",get:function(){return this._C.Slides.getLength(!0)}},{key:"index",get:function(){return this._C.Controller.getIndex()}}]),n}(),oe=re;return oe.defaults={},oe.STATES=u,oe});