import './polyfills.server.mjs';
import{A as y,B as F,C as P,D as M,G as k,M as O,a as l,b as p,c as u,d as f,e as c,f as h,g,h as v,i as r,j as i,k as C,l as x,m as w,n as b,o as a,p as d,q as s,v as _,y as S}from"./chunk-VZ5PO3A6.mjs";var I=(()=>{class t{constructor(){}getShirts(){return[{name:"Casual Cotton Shirt",price:"\u20B9999",productUrl:"https://www.amazon.in"},{name:"Formal White Shirt",price:"\u20B91,299",productUrl:"https://www.flipkart.com"},{name:"Summer Printed Shirt",price:"\u20B9899",productUrl:"https://www.amazon.in"}]}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275prov=l({token:t,factory:t.\u0275fac,providedIn:"root"})}}return t})();function z(t,U){if(t&1){let e=x();r(0,"div",2)(1,"h2",3),a(2),i(),r(3,"p",4),a(4),i(),r(5,"button",5),w("click",function(){let n=u(e).$implicit,j=b();return f(j.redirectTo(n.productUrl))}),a(6," Buy Now "),i()()}if(t&2){let e=U.$implicit;c(2),d(e.name),c(2),d(e.price)}}var m=(()=>{class t{constructor(e){this.fetchApiService=e,this.shirts=[]}ngOnInit(){this.shirts=this.fetchApiService.getShirts()}redirectTo(e){window.open(e,"_blank")}static{this.\u0275fac=function(o){return new(o||t)(h(I))}}static{this.\u0275cmp=p({type:t,selectors:[["app-productlist"]],standalone:!0,features:[s],decls:2,vars:1,consts:[[1,"container","mx-auto","p-4","grid","grid-cols-1","md:grid-cols-2","lg:grid-cols-3","gap-4"],["class","border p-4 rounded shadow-lg",4,"ngFor","ngForOf"],[1,"border","p-4","rounded","shadow-lg"],[1,"text-xl","font-bold","mb-2"],[1,"text-gray-700","mb-4"],[1,"bg-blue-500","text-white","px-4","py-2","rounded",3,"click"]],template:function(o,n){o&1&&(r(0,"div",0),g(1,z,7,2,"div",1),i()),o&2&&(c(),v("ngForOf",n.shirts))},dependencies:[F,y],styles:[".container[_ngcontent-%COMP%]{max-width:1200px;margin:0 auto}img[_ngcontent-%COMP%]{width:100%;height:auto;border-radius:8px}button[_ngcontent-%COMP%]{cursor:pointer;transition:background-color .3s ease}button[_ngcontent-%COMP%]:hover{background-color:#3b82f6}"]})}}return t})();var T=(()=>{class t{constructor(){this.title="e-market"}static{this.\u0275fac=function(o){return new(o||t)}}static{this.\u0275cmp=p({type:t,selectors:[["app-root"]],standalone:!0,features:[s],decls:1,vars:0,template:function(o,n){o&1&&C(0,"app-productlist")},dependencies:[m]})}}return t})();var D=[{path:"",redirectTo:"/products",pathMatch:"full"},{path:"products",component:m}];var R={providers:[_({eventCoalescing:!0}),O(D),M()]};var N={providers:[k()]},E=S(R,N);var $=()=>P(T,E),ct=$;export{ct as a};
