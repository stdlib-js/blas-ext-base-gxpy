"use strict";var x=function(o,e){return function(){return e||o((e={exports:{}}).exports,e),e.exports}};var P=x(function(G,m){
function w(o,e,c,v,r,i,q){var t,a,n,f,s,u,g,l;for(t=e.data,a=r.data,n=e.accessors[0],s=r.accessors[0],f=r.accessors[1],u=v,g=q,l=0;l<o;l++)f(a,g,n(t,u)+s(a,g)),u+=c,g+=i;return r}m.exports=w
});var b=x(function(H,k){
var j=require('@stdlib/array-base-arraylike2object/dist'),z=P(),p=5;function A(o,e,c,v,r,i,q){var t,a,n,f,s,u;if(o<=0)return r;if(n=j(e),f=j(r),n.accessorProtocol||f.accessorProtocol)return z(o,n,c,v,f,i,q),r;if(t=v,a=q,c===1&&i===1){if(s=o%p,s>0)for(u=0;u<s;u++)r[a]=e[t]+r[a],t+=c,a+=i;if(o<p)return r;for(u=s;u<o;u+=p)r[a]=e[t]+r[a],r[a+1]=e[t+1]+r[a+1],r[a+2]=e[t+2]+r[a+2],r[a+3]=e[t+3]+r[a+3],r[a+4]=e[t+4]+r[a+4],t+=p,a+=p;return r}for(u=0;u<o;u++)r[a]=e[t]+r[a],t+=c,a+=i;return r}k.exports=A
});var R=x(function(I,O){
var M=require('@stdlib/strided-base-stride2offset/dist'),B=b();function C(o,e,c,v,r){return B(o,e,c,M(o,c),v,r,M(o,r))}O.exports=C
});var D=require('@stdlib/utils-define-nonenumerable-read-only-property/dist'),h=R(),E=b();D(h,"ndarray",E);module.exports=h;
/** @license Apache-2.0 */
//# sourceMappingURL=index.js.map
