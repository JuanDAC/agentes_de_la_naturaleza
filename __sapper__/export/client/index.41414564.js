import{S as a,i as s,s as e,g as r,h as t,j as i,k as c,l,o as n,p as m,n as p,q as o,r as g,v as d,w as h,A as u,M as f,O as v,Q as x,b as M,d as $,m as z,t as k,e as E,f as b}from"./client.9decb2cc.js";import"./Button.1a69ff04.js";import{C as w}from"./Carousel.537d8bd2.js";function I(a){let s,e,f,v,x,M=a[1].content.paragraphs+"",$=a[1]&&"boolean"!=typeof a[1].img&&a[1].img&&j(a);return{c(){s=r("article"),$&&$.c(),e=t(),f=r("div"),v=r("span"),x=i(M),this.h()},l(a){s=c(a,"ARTICLE",{class:!0,style:!0});var r=l(s);$&&$.l(r),e=n(r),f=c(r,"DIV",{class:!0});var t=l(f);v=c(t,"SPAN",{class:!0});var i=l(v);x=m(i,M),i.forEach(p),t.forEach(p),r.forEach(p),this.h()},h(){o(v,"class","carousel_information--paragraphs"),o(f,"class","carousel_information svelte-6kzxzw"),o(s,"class","carousel_item svelte-6kzxzw"),g(s,"--index",a[0]+1)},m(a,r){d(a,s,r),$&&$.m(s,null),h(s,e),h(s,f),h(f,v),h(v,x)},p(a,r){a[1]&&"boolean"!=typeof a[1].img&&a[1].img?$?$.p(a,r):($=j(a),$.c(),$.m(s,e)):$&&($.d(1),$=null),2&r&&M!==(M=a[1].content.paragraphs+"")&&u(x,M),1&r&&g(s,"--index",a[0]+1)},d(a){a&&p(s),$&&$.d()}}}function j(a){let s,e,t,i;return{c(){s=r("picture"),e=r("img"),this.h()},l(a){s=c(a,"PICTURE",{class:!0});var r=l(s);e=c(r,"IMG",{src:!0,alt:!0,class:!0}),r.forEach(p),this.h()},h(){e.src!==(t=a[1].pipes.imageManager?a[1].pipes.imageManager("src",a[0],a[1].img.src):a[1].img.src)&&o(e,"src",t),o(e,"alt",i=a[1].pipes.imageManager?a[1].pipes.imageManager("alt",a[0],a[1].img.src):a[1].img.src),o(e,"class","svelte-6kzxzw"),o(s,"class","carousel_image svelte-6kzxzw")},m(a,r){d(a,s,r),h(s,e)},p(a,s){3&s&&e.src!==(t=a[1].pipes.imageManager?a[1].pipes.imageManager("src",a[0],a[1].img.src):a[1].img.src)&&o(e,"src",t),3&s&&i!==(i=a[1].pipes.imageManager?a[1].pipes.imageManager("alt",a[0],a[1].img.src):a[1].img.src)&&o(e,"alt",i)},d(a){a&&p(s)}}}function y(a){let s,e=a[1]&&I(a);return{c(){e&&e.c(),s=f()},l(a){e&&e.l(a),s=f()},m(a,r){e&&e.m(a,r),d(a,s,r)},p(a,[r]){a[1]?e?e.p(a,r):(e=I(a),e.c(),e.m(s.parentNode,s)):e&&(e.d(1),e=null)},i:v,o:v,d(a){e&&e.d(a),a&&p(s)}}}function C(a,s,e){let{index:r=0}=s,{data:t}=s;return a.$$set=a=>{"index"in a&&e(0,r=a.index),"data"in a&&e(1,t=a.data)},[r,t]}class _ extends a{constructor(a){super(),s(this,a,C,y,e,{index:0,data:1})}}function A(a){let s,e,t;return e=new w({props:{iterable:x,template:_,title:"",href:"/map"}}),{c(){s=r("div"),M(e.$$.fragment),this.h()},l(a){s=c(a,"DIV",{class:!0});var r=l(s);$(e.$$.fragment,r),r.forEach(p),this.h()},h(){o(s,"class","sliders svelte-1y0skhk")},m(a,r){d(a,s,r),z(e,s,null),t=!0},p:v,i(a){t||(k(e.$$.fragment,a),t=!0)},o(a){E(e.$$.fragment,a),t=!1},d(a){a&&p(s),b(e)}}}export default class extends a{constructor(a){super(),s(this,a,null,A,e,{})}}