import{S as s,i as a,s as e,g as t,h as r,k as c,l as i,n,o as l,q as o,r as m,v as g,w as p,F as $,e as f,f as u,B as d,b as h,t as x,m as v,M,d as j,j as C,p as E,A as k,N as I,O as b,G as w}from"./client.9decb2cc.js";import{B as D}from"./Button.1a69ff04.js";import{C as N}from"./Carousel.537d8bd2.js";function B(s){let a,e,M,C,E,k,I,b,w;var D=s[1].action.DomNode;function N(s){return{props:{$$slots:{default:[_]},$$scope:{ctx:s}}}}return D&&(b=new D(N(s)),b.$on("click",s[2])),{c(){a=t("article"),e=t("picture"),M=t("img"),k=r(),I=t("div"),b&&h(b.$$.fragment),this.h()},l(s){a=c(s,"ARTICLE",{class:!0,style:!0});var t=i(a);e=c(t,"PICTURE",{class:!0});var r=i(e);M=c(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(n),k=l(t),I=c(t,"DIV",{class:!0});var o=i(I);b&&j(b.$$.fragment,o),o.forEach(n),t.forEach(n),this.h()},h(){M.src!==(C=s[1].pipes.imageManager?s[1].pipes.imageManager("src",s[0],s[1].img.src):s[1].img.src)&&o(M,"src",C),o(M,"alt",E=s[1].pipes.imageManager?s[1].pipes.imageManager("alt",s[0],s[1].img.src):s[1].img.src),o(M,"class","svelte-5g71s"),o(e,"class","carousel_image svelte-5g71s"),o(I,"class","carousel_actions svelte-5g71s"),o(a,"class","carousel_item svelte-5g71s"),m(a,"--index",s[0]+1)},m(s,t){g(s,a,t),p(a,e),p(e,M),p(a,k),p(a,I),b&&v(b,I,null),w=!0},p(s,e){(!w||3&e&&M.src!==(C=s[1].pipes.imageManager?s[1].pipes.imageManager("src",s[0],s[1].img.src):s[1].img.src))&&o(M,"src",C),(!w||3&e&&E!==(E=s[1].pipes.imageManager?s[1].pipes.imageManager("alt",s[0],s[1].img.src):s[1].img.src))&&o(M,"alt",E);const t={};if(10&e&&(t.$$scope={dirty:e,ctx:s}),D!==(D=s[1].action.DomNode)){if(b){$();const s=b;f(s.$$.fragment,1,0,()=>{u(s,1)}),d()}D?(b=new D(N(s)),b.$on("click",s[2]),h(b.$$.fragment),x(b.$$.fragment,1),v(b,I,null)):b=null}else D&&b.$set(t);(!w||1&e)&&m(a,"--index",s[0]+1)},i(s){w||(b&&x(b.$$.fragment,s),w=!0)},o(s){b&&f(b.$$.fragment,s),w=!1},d(s){s&&n(a),b&&u(b)}}}function _(s){let a,e=(s[1].action.text?s[1].action.text:"")+"";return{c(){a=C(e)},l(s){a=E(s,e)},m(s,e){g(s,a,e)},p(s,t){2&t&&e!==(e=(s[1].action.text?s[1].action.text:"")+"")&&k(a,e)},d(s){s&&n(a)}}}function y(s){let a,e,t=s[1]&&B(s);return{c(){t&&t.c(),a=M()},l(s){t&&t.l(s),a=M()},m(s,r){t&&t.m(s,r),g(s,a,r),e=!0},p(s,[e]){s[1]?t?(t.p(s,e),2&e&&x(t,1)):(t=B(s),t.c(),x(t,1),t.m(a.parentNode,a)):t&&($(),f(t,1,1,()=>{t=null}),d())},i(s){e||(x(t),e=!0)},o(s){f(t),e=!1},d(s){t&&t.d(s),s&&n(a)}}}function A(s,a,e){let{index:t=0}=a,{data:r}=a;return s.$$set=s=>{"index"in s&&e(0,t=s.index),"data"in s&&e(1,r=s.data)},[t,r,()=>r&&r.action.pipes.onClick&&r.action.pipes.onClick(t,r.img.src)]}class G extends s{constructor(s){super(),a(this,s,A,y,e,{index:0,data:1})}}function R(s){let a,e,r;return e=new N({props:{iterable:I(w,D),template:G,title:"selecciona tu personaje"}}),{c(){a=t("div"),h(e.$$.fragment),this.h()},l(s){a=c(s,"DIV",{class:!0});var t=i(a);j(e.$$.fragment,t),t.forEach(n),this.h()},h(){o(a,"class","characters svelte-hdzcxj")},m(s,t){g(s,a,t),v(e,a,null),r=!0},p:b,i(s){r||(x(e.$$.fragment,s),r=!0)},o(s){f(e.$$.fragment,s),r=!1},d(s){s&&n(a),u(e)}}}export default class extends s{constructor(s){super(),a(this,s,null,R,e,{})}}