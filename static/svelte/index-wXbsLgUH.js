var Kt=Object.defineProperty;var at=e=>{throw TypeError(e)};var Wt=(e,t,r)=>t in e?Kt(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r;var R=(e,t,r)=>Wt(e,typeof t!="symbol"?t+"":t,r),ft=(e,t,r)=>t.has(e)||at("Cannot "+r);var y=(e,t,r)=>(ft(e,t,"read from private field"),r?r.call(e):t.get(e)),Ue=(e,t,r)=>t.has(e)?at("Cannot add the same private member more than once"):t instanceof WeakSet?t.add(e):t.set(e,r),Ve=(e,t,r,n)=>(ft(e,t,"write to private field"),n?n.call(e,r):t.set(e,r),r);(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))n(s);new MutationObserver(s=>{for(const i of s)if(i.type==="childList")for(const l of i.addedNodes)l.tagName==="LINK"&&l.rel==="modulepreload"&&n(l)}).observe(document,{childList:!0,subtree:!0});function r(s){const i={};return s.integrity&&(i.integrity=s.integrity),s.referrerPolicy&&(i.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?i.credentials="include":s.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function n(s){if(s.ep)return;s.ep=!0;const i=r(s);fetch(s.href,i)}})();const Gt="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Gt);let he=!1;function Jt(){he=!0}Jt();const Zt=1,Qt=2,Xt=8,er=2,tr="[",rr="]",fe={},O=Symbol(),nr=["touchstart","touchmove"];function sr(e){return nr.includes(e)}const $t=!1;var gt=Array.isArray,ir=Array.from,Ne=Object.keys,ke=Object.defineProperty,V=Object.getOwnPropertyDescriptor,lr=Object.prototype,ur=Array.prototype,or=Object.getPrototypeOf;function ar(e){for(var t=0;t<e.length;t++)e[t]()}const C=2,pt=4,$e=8,tt=16,B=32,ie=64,Ke=128,le=256,Te=512,E=1024,z=2048,ge=4096,Se=8192,ue=16384,fr=32768,cr=65536,dr=1<<17,vr=1<<19,bt=1<<20,ye=Symbol("$state"),mt=Symbol("legacy props");function wt(e){return e===this.v}function _r(e,t){return e!=e?t==t:e!==t||e!==null&&typeof e=="object"||typeof e=="function"}function rt(e){return!_r(e,this.v)}function hr(){throw new Error("https://svelte.dev/e/effect_update_depth_exceeded")}function $r(){throw new Error("https://svelte.dev/e/hydration_failed")}function gr(e){throw new Error("https://svelte.dev/e/props_invalid_value")}function pr(){throw new Error("https://svelte.dev/e/state_descriptors_fixed")}function br(){throw new Error("https://svelte.dev/e/state_prototype_fixed")}function mr(){throw new Error("https://svelte.dev/e/state_unsafe_local_read")}function wr(){throw new Error("https://svelte.dev/e/state_unsafe_mutation")}function L(e,t){var r={f:0,v:e,reactions:null,equals:wt,version:0};return r}function nt(e,t=!1){var n;const r=L(e);return t||(r.equals=rt),he&&b!==null&&b.l!==null&&((n=b.l).s??(n.s=[])).push(r),r}function yr(e,t=!1){return xr(nt(e,t))}function xr(e){return h!==null&&h.f&C&&(D===null?jr([e]):D.push(e)),e}function T(e,t){return h!==null&&lt()&&h.f&(C|tt)&&(D===null||!D.includes(e))&&wr(),Er(e,t)}function Er(e,t){return e.equals(t)||(e.v=t,e.version=Ft(),yt(e,z),lt()&&_!==null&&_.f&E&&!(_.f&B)&&(m!==null&&m.includes(e)?(q(_,z),qe(_)):j===null?zr([e]):j.push(e))),t}function yt(e,t){var r=e.reactions;if(r!==null)for(var n=lt(),s=r.length,i=0;i<s;i++){var l=r[i],u=l.f;u&z||!n&&l===_||(q(l,t),u&(E|le)&&(u&C?yt(l,ge):qe(l)))}}function st(e){console.warn("https://svelte.dev/e/hydration_mismatch")}let S=!1;function me(e){S=e}let w;function G(e){if(e===null)throw st(),fe;return w=e}function xt(){return G(pe(w))}function K(e){if(S){if(pe(w)!==null)throw st(),fe;w=e}}function te(e,t=null,r){if(typeof e!="object"||e===null||ye in e)return e;const n=or(e);if(n!==lr&&n!==ur)return e;var s=new Map,i=gt(e),l=L(0);i&&s.set("length",L(e.length));var u;return new Proxy(e,{defineProperty(o,a,f){(!("value"in f)||f.configurable===!1||f.enumerable===!1||f.writable===!1)&&pr();var c=s.get(a);return c===void 0?(c=L(f.value),s.set(a,c)):T(c,te(f.value,u)),!0},deleteProperty(o,a){var f=s.get(a);if(f===void 0)a in o&&s.set(a,L(O));else{if(i&&typeof a=="string"){var c=s.get("length"),d=Number(a);Number.isInteger(d)&&d<c.v&&T(c,d)}T(f,O),ct(l)}return!0},get(o,a,f){var $;if(a===ye)return e;var c=s.get(a),d=a in o;if(c===void 0&&(!d||($=V(o,a))!=null&&$.writable)&&(c=L(te(d?o[a]:O,u)),s.set(a,c)),c!==void 0){var v=x(c);return v===O?void 0:v}return Reflect.get(o,a,f)},getOwnPropertyDescriptor(o,a){var f=Reflect.getOwnPropertyDescriptor(o,a);if(f&&"value"in f){var c=s.get(a);c&&(f.value=x(c))}else if(f===void 0){var d=s.get(a),v=d==null?void 0:d.v;if(d!==void 0&&v!==O)return{enumerable:!0,configurable:!0,value:v,writable:!0}}return f},has(o,a){var v;if(a===ye)return!0;var f=s.get(a),c=f!==void 0&&f.v!==O||Reflect.has(o,a);if(f!==void 0||_!==null&&(!c||(v=V(o,a))!=null&&v.writable)){f===void 0&&(f=L(c?te(o[a],u):O),s.set(a,f));var d=x(f);if(d===O)return!1}return c},set(o,a,f,c){var P;var d=s.get(a),v=a in o;if(i&&a==="length")for(var $=f;$<d.v;$+=1){var g=s.get($+"");g!==void 0?T(g,O):$ in o&&(g=L(O),s.set($+"",g))}d===void 0?(!v||(P=V(o,a))!=null&&P.writable)&&(d=L(void 0),T(d,te(f,u)),s.set(a,d)):(v=d.v!==O,T(d,te(f,u)));var F=Reflect.getOwnPropertyDescriptor(o,a);if(F!=null&&F.set&&F.set.call(c,f),!v){if(i&&typeof a=="string"){var Q=s.get("length"),A=Number(a);Number.isInteger(A)&&A>=Q.v&&T(Q,A+1)}ct(l)}return!0},ownKeys(o){x(l);var a=Reflect.ownKeys(o).filter(d=>{var v=s.get(d);return v===void 0||v.v!==O});for(var[f,c]of s)c.v!==O&&!(f in o)&&a.push(f);return a},setPrototypeOf(){br()}})}function ct(e,t=1){T(e,e.v+t)}var dt,Et,Ot;function We(){if(dt===void 0){dt=window;var e=Element.prototype,t=Node.prototype;Et=V(t,"firstChild").get,Ot=V(t,"nextSibling").get,e.__click=void 0,e.__className="",e.__attributes=null,e.__styles=null,e.__e=void 0,Text.prototype.__t=void 0}}function Re(e=""){return document.createTextNode(e)}function Ce(e){return Et.call(e)}function pe(e){return Ot.call(e)}function W(e,t){if(!S)return Ce(e);var r=Ce(w);if(r===null)r=w.appendChild(Re());else if(t&&r.nodeType!==3){var n=Re();return r==null||r.before(n),G(n),n}return G(r),r}function Ge(e,t=1,r=!1){let n=S?w:e;for(var s;t--;)s=n,n=pe(n);if(!S)return n;var i=n==null?void 0:n.nodeType;if(r&&i!==3){var l=Re();return n===null?s==null||s.after(l):n.before(l),G(l),l}return G(n),n}function Or(e){e.textContent=""}function Je(e){var t=C|z;_===null?t|=le:_.f|=bt;var r=h!==null&&h.f&C?h:null;const n={children:null,ctx:b,deps:null,equals:wt,f:t,fn:e,reactions:null,v:null,version:0,parent:r??_};return r!==null&&(r.children??(r.children=[])).push(n),n}function Nr(e){const t=Je(e);return t.equals=rt,t}function Nt(e){var t=e.children;if(t!==null){e.children=null;for(var r=0;r<t.length;r+=1){var n=t[r];n.f&C?it(n):H(n)}}}function kr(e){for(var t=e.parent;t!==null;){if(!(t.f&C))return t;t=t.parent}return null}function kt(e){var t,r=_;I(kr(e));try{Nt(e),t=Mt(e)}finally{I(r)}return t}function Tt(e){var t=kt(e),r=(re||e.f&le)&&e.deps!==null?ge:E;q(e,r),e.equals(t)||(e.v=t,e.version=Ft())}function it(e){Nt(e),ve(e,0),q(e,ue),e.v=e.children=e.deps=e.ctx=e.reactions=null}function Tr(e,t){var r=t.last;r===null?t.last=t.first=e:(r.next=e,e.prev=r,t.last=e)}function Z(e,t,r,n=!0){var s=(e&ie)!==0,i=_,l={ctx:b,deps:null,deriveds:null,nodes_start:null,nodes_end:null,f:e|z,first:null,fn:t,last:null,next:null,parent:s?null:i,prev:null,teardown:null,transitions:null,version:0};if(r){var u=ne;try{vt(!0),ut(l),l.f|=fr}catch(f){throw H(l),f}finally{vt(u)}}else t!==null&&qe(l);var o=r&&l.deps===null&&l.first===null&&l.nodes_start===null&&l.teardown===null&&(l.f&bt)===0;if(!o&&!s&&n&&(i!==null&&Tr(l,i),h!==null&&h.f&C)){var a=h;(a.children??(a.children=[])).push(l)}return l}function Sr(e){const t=Z($e,null,!1);return q(t,E),t.teardown=e,t}function Rr(e){const t=Z(ie,e,!0);return()=>{H(t)}}function Cr(e){const t=Z(ie,e,!0);return(r={})=>new Promise(n=>{r.outro?qr(t,()=>{H(t),n(void 0)}):(H(t),n(void 0))})}function Ar(e){return Z(pt,e,!1)}function Pr(e){return Z($e,e,!0)}function Le(e){return Lr(e)}function Lr(e,t=0){return Z($e|tt|t,e,!0)}function Dr(e,t=!0){return Z($e|B,e,!0,t)}function St(e){var t=e.teardown;if(t!==null){const r=h;Y(null);try{t.call(null)}finally{Y(r)}}}function Rt(e){var t=e.deriveds;if(t!==null){e.deriveds=null;for(var r=0;r<t.length;r+=1)it(t[r])}}function Ct(e,t=!1){var r=e.first;for(e.first=e.last=null;r!==null;){var n=r.next;H(r,t),r=n}}function Ir(e){for(var t=e.first;t!==null;){var r=t.next;t.f&B||H(t),t=r}}function H(e,t=!0){var r=!1;if((t||e.f&vr)&&e.nodes_start!==null){for(var n=e.nodes_start,s=e.nodes_end;n!==null;){var i=n===s?null:pe(n);n.remove(),n=i}r=!0}Ct(e,t&&!r),Rt(e),ve(e,0),q(e,ue);var l=e.transitions;if(l!==null)for(const o of l)o.stop();St(e);var u=e.parent;u!==null&&u.first!==null&&At(e),e.next=e.prev=e.teardown=e.ctx=e.deps=e.fn=e.nodes_start=e.nodes_end=null}function At(e){var t=e.parent,r=e.prev,n=e.next;r!==null&&(r.next=n),n!==null&&(n.prev=r),t!==null&&(t.first===e&&(t.first=n),t.last===e&&(t.last=r))}function qr(e,t){var r=[];Pt(e,r,!0),Fr(r,()=>{H(e),t&&t()})}function Fr(e,t){var r=e.length;if(r>0){var n=()=>--r||t();for(var s of e)s.out(n)}else t()}function Pt(e,t,r){if(!(e.f&Se)){if(e.f^=Se,e.transitions!==null)for(const l of e.transitions)(l.is_global||r)&&t.push(l);for(var n=e.first;n!==null;){var s=n.next,i=(n.f&cr)!==0||(n.f&B)!==0;Pt(n,t,i?r:!1),n=s}}}let Ae=!1,Ze=[];function Lt(){Ae=!1;const e=Ze.slice();Ze=[],ar(e)}function Dt(e){Ae||(Ae=!0,queueMicrotask(Lt)),Ze.push(e)}function Mr(){Ae&&Lt()}const It=0,Br=1;let xe=!1,Ee=It,ce=!1,de=null,ne=!1;function vt(e){ne=e}let U=[],se=0;let h=null;function Y(e){h=e}let _=null;function I(e){_=e}let D=null;function jr(e){D=e}let m=null,N=0,j=null;function zr(e){j=e}let qt=0,re=!1,b=null;function Ft(){return++qt}function lt(){return!he||b!==null&&b.l===null}function De(e){var l,u;var t=e.f;if(t&z)return!0;if(t&ge){var r=e.deps,n=(t&le)!==0;if(r!==null){var s;if(t&Te){for(s=0;s<r.length;s++)((l=r[s]).reactions??(l.reactions=[])).push(e);e.f^=Te}for(s=0;s<r.length;s++){var i=r[s];if(De(i)&&Tt(i),n&&_!==null&&!re&&!((u=i==null?void 0:i.reactions)!=null&&u.includes(e))&&(i.reactions??(i.reactions=[])).push(e),i.version>e.version)return!0}}n||q(e,E)}return!1}function Hr(e,t){for(var r=t;r!==null;){if(r.f&Ke)try{r.fn(e);return}catch{r.f^=Ke}r=r.parent}throw xe=!1,e}function Yr(e){return(e.f&ue)===0&&(e.parent===null||(e.parent.f&Ke)===0)}function Ie(e,t,r,n){if(xe){if(r===null&&(xe=!1),Yr(t))throw e;return}r!==null&&(xe=!0);{Hr(e,t);return}}function Mt(e){var d;var t=m,r=N,n=j,s=h,i=re,l=D,u=b,o=e.f;m=null,N=0,j=null,h=o&(B|ie)?null:e,re=!ne&&(o&le)!==0,D=null,b=e.ctx;try{var a=(0,e.fn)(),f=e.deps;if(m!==null){var c;if(ve(e,N),f!==null&&N>0)for(f.length=N+m.length,c=0;c<m.length;c++)f[N+c]=m[c];else e.deps=f=m;if(!re)for(c=N;c<f.length;c++)((d=f[c]).reactions??(d.reactions=[])).push(e)}else f!==null&&N<f.length&&(ve(e,N),f.length=N);return a}finally{m=t,N=r,j=n,h=s,re=i,D=l,b=u}}function Ur(e,t){let r=t.reactions;if(r!==null){var n=r.indexOf(e);if(n!==-1){var s=r.length-1;s===0?r=t.reactions=null:(r[n]=r[s],r.pop())}}r===null&&t.f&C&&(m===null||!m.includes(t))&&(q(t,ge),t.f&(le|Te)||(t.f^=Te),ve(t,0))}function ve(e,t){var r=e.deps;if(r!==null)for(var n=t;n<r.length;n++)Ur(e,r[n])}function ut(e){var t=e.f;if(!(t&ue)){q(e,E);var r=_,n=b;_=e;try{t&tt?Ir(e):Ct(e),Rt(e),St(e);var s=Mt(e);e.teardown=typeof s=="function"?s:null,e.version=qt}catch(i){Ie(i,e,r,n||e.ctx)}finally{_=r}}}function Bt(){if(se>1e3){se=0;try{hr()}catch(e){if(de!==null)Ie(e,de,null);else throw e}}se++}function jt(e){var t=e.length;if(t!==0){Bt();var r=ne;ne=!0;try{for(var n=0;n<t;n++){var s=e[n];s.f&E||(s.f^=E);var i=[];zt(s,i),Vr(i)}}finally{ne=r}}}function Vr(e){var t=e.length;if(t!==0)for(var r=0;r<t;r++){var n=e[r];if(!(n.f&(ue|Se)))try{De(n)&&(ut(n),n.deps===null&&n.first===null&&n.nodes_start===null&&(n.teardown===null?At(n):n.fn=null))}catch(s){Ie(s,n,null,n.ctx)}}}function Kr(){if(ce=!1,se>1001)return;const e=U;U=[],jt(e),ce||(se=0,de=null)}function qe(e){Ee===It&&(ce||(ce=!0,queueMicrotask(Kr))),de=e;for(var t=e;t.parent!==null;){t=t.parent;var r=t.f;if(r&(ie|B)){if(!(r&E))return;t.f^=E}}U.push(t)}function zt(e,t){var r=e.first,n=[];e:for(;r!==null;){var s=r.f,i=(s&B)!==0,l=i&&(s&E)!==0,u=r.next;if(!l&&!(s&Se))if(s&$e){if(i)r.f^=E;else try{De(r)&&ut(r)}catch(c){Ie(c,r,null,r.ctx)}var o=r.first;if(o!==null){r=o;continue}}else s&pt&&n.push(r);if(u===null){let c=r.parent;for(;c!==null;){if(e===c)break e;var a=c.next;if(a!==null){r=a;continue e}c=c.parent}}r=u}for(var f=0;f<n.length;f++)o=n[f],t.push(o),zt(o,t)}function J(e){var t=Ee,r=U;try{Bt();const s=[];Ee=Br,U=s,ce=!1,jt(r);var n=e==null?void 0:e();return Mr(),(U.length>0||s.length>0)&&J(),se=0,de=null,n}finally{Ee=t,U=r}}function x(e){var f;var t=e.f,r=(t&C)!==0;if(r&&t&ue){var n=kt(e);return it(e),n}if(h!==null){D!==null&&D.includes(e)&&mr();var s=h.deps;m===null&&s!==null&&s[N]===e?N++:m===null?m=[e]:m.push(e),j!==null&&_!==null&&_.f&E&&!(_.f&B)&&j.includes(e)&&(q(_,z),qe(_))}else if(r&&e.deps===null)for(var i=e,l=i.parent,u=i;l!==null;)if(l.f&C){var o=l;u=o,l=o.parent}else{var a=l;(f=a.deriveds)!=null&&f.includes(u)||(a.deriveds??(a.deriveds=[])).push(u);break}return r&&(i=e,De(i)&&Tt(i)),e.v}function Wr(e){const t=h;try{return h=null,e()}finally{h=t}}const Gr=~(z|ge|E);function q(e,t){e.f=e.f&Gr|t}function Fe(e,t=!1,r){b={p:b,c:null,e:null,m:!1,s:e,x:null,l:null},he&&!t&&(b.l={s:null,u:null,r1:[],r2:L(!1)})}function Me(e){const t=b;if(t!==null){e!==void 0&&(t.x=e);const l=t.e;if(l!==null){var r=_,n=h;t.e=null;try{for(var s=0;s<l.length;s++){var i=l[s];I(i.effect),Y(i.reaction),Ar(i.fn)}}finally{I(r),Y(n)}}b=t.p,t.m=!0}return e||{}}function Jr(e){var t=h,r=_;Y(null),I(null);try{return e()}finally{Y(t),I(r)}}const Zr=new Set,_t=new Set;function Qr(e,t,r,n){function s(i){if(n.capture||ae.call(t,i),!i.cancelBubble)return Jr(()=>r.call(this,i))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?Dt(()=>{t.addEventListener(e,s,n)}):t.addEventListener(e,s,n),s}function Qe(e,t,r,n,s){var i={capture:n,passive:s},l=Qr(e,t,r,i);(t===document.body||t===window||t===document)&&Sr(()=>{t.removeEventListener(e,l,i)})}function ae(e){var A;var t=this,r=t.ownerDocument,n=e.type,s=((A=e.composedPath)==null?void 0:A.call(e))||[],i=s[0]||e.target,l=0,u=e.__root;if(u){var o=s.indexOf(u);if(o!==-1&&(t===document||t===window)){e.__root=t;return}var a=s.indexOf(t);if(a===-1)return;o<=a&&(l=o)}if(i=s[l]||e.target,i!==t){ke(e,"currentTarget",{configurable:!0,get(){return i||r}});var f=h,c=_;Y(null),I(null);try{for(var d,v=[];i!==null;){var $=i.assignedSlot||i.parentNode||i.host||null;try{var g=i["__"+n];if(g!==void 0&&!i.disabled)if(gt(g)){var[F,...Q]=g;F.apply(i,[e,...Q])}else g.call(i,e)}catch(P){d?v.push(P):d=P}if(e.cancelBubble||$===t||$===null)break;i=$}if(d){for(let P of v)queueMicrotask(()=>{throw P});throw d}}finally{e.__root=t,delete e.currentTarget,Y(f),I(c)}}}function Xr(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function Xe(e,t){var r=_;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function Be(e,t){var r=(t&er)!==0,n,s=!e.startsWith("<!>");return()=>{if(S)return Xe(w,null),w;n===void 0&&(n=Xr(s?e:"<!>"+e),n=Ce(n));var i=r?document.importNode(n,!0):n.cloneNode(!0);return Xe(i,i),i}}function be(e,t){if(S){_.nodes_end=w,xt();return}e!==null&&e.before(t)}function Pe(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function Ht(e,t){return Yt(e,t)}function en(e,t){We(),t.intro=t.intro??!1;const r=t.target,n=S,s=w;try{for(var i=Ce(r);i&&(i.nodeType!==8||i.data!==tr);)i=pe(i);if(!i)throw fe;me(!0),G(i),xt();const l=Yt(e,{...t,anchor:i});if(w===null||w.nodeType!==8||w.data!==rr)throw st(),fe;return me(!1),l}catch(l){if(l===fe)return t.recover===!1&&$r(),We(),Or(r),me(!1),Ht(e,t);throw l}finally{me(n),G(s)}}const ee=new Map;function Yt(e,{target:t,anchor:r,props:n={},events:s,context:i,intro:l=!0}){We();var u=new Set,o=c=>{for(var d=0;d<c.length;d++){var v=c[d];if(!u.has(v)){u.add(v);var $=sr(v);t.addEventListener(v,ae,{passive:$});var g=ee.get(v);g===void 0?(document.addEventListener(v,ae,{passive:$}),ee.set(v,1)):ee.set(v,g+1)}}};o(ir(Zr)),_t.add(o);var a=void 0,f=Cr(()=>{var c=r??t.appendChild(Re());return Dr(()=>{if(i){Fe({});var d=b;d.c=i}s&&(n.$$events=s),S&&Xe(c,null),a=e(c,n)||{},S&&(_.nodes_end=w),i&&Me()}),()=>{var $;for(var d of u){t.removeEventListener(d,ae);var v=ee.get(d);--v===0?(document.removeEventListener(d,ae),ee.delete(d)):ee.set(d,v)}_t.delete(o),c!==r&&(($=c.parentNode)==null||$.removeChild(c))}});return et.set(a,f),a}let et=new WeakMap;function tn(e,t){const r=et.get(e);return r?(et.delete(e),r(t)):Promise.resolve()}function je(e,t){Dt(()=>{var r=e.getRootNode(),n=r.host?r:r.head??r.ownerDocument.head;if(!n.querySelector("#"+t.hash)){const s=document.createElement("style");s.id=t.hash,s.textContent=t.code,n.appendChild(s)}})}function Ut(e,t){var r=e.__className,n=rn(t);S&&e.className===n?e.__className=n:(r!==n||S&&e.className!==n)&&(t==null?e.removeAttribute("class"):e.className=n,e.__className=n)}function rn(e){return e??""}let we=!1;function nn(e){var t=we;try{return we=!1,[e(),we]}finally{we=t}}function ht(e){for(var t=_,r=_;t!==null&&!(t.f&(B|ie));)t=t.parent;try{return I(t),e()}finally{I(r)}}function _e(e,t,r,n){var ot;var s=(r&Zt)!==0,i=!he||(r&Qt)!==0,l=(r&Xt)!==0,u=!1,o;[o,u]=nn(()=>e[t]);var a=ye in e||mt in e,f=((ot=V(e,t))==null?void 0:ot.set)??(a&&l&&t in e?p=>e[t]=p:void 0),c=n,d=!0,v=!1,$=()=>(v=!0,d&&(d=!1,c=n),c);o===void 0&&n!==void 0&&(f&&i&&gr(),o=$(),f&&f(o));var g;if(i)g=()=>{var p=e[t];return p===void 0?$():(d=!0,v=!1,p)};else{var F=ht(()=>(s?Je:Nr)(()=>e[t]));F.f|=dr,g=()=>{var p=x(F);return p!==void 0&&(c=void 0),p===void 0?c:p}}if(f){var Q=e.$$legacy;return function(p,X){return arguments.length>0?((!i||!X||Q||u)&&f(X?g():p),p):g()}}var A=!1,P=!1,He=nt(o),oe=ht(()=>Je(()=>{var p=g(),X=x(He);return A?(A=!1,P=!0,X):(P=!1,He.v=p)}));return oe.equals=rt,function(p,X){if(arguments.length>0){const Ye=X?x(oe):i&&l?te(p):p;return oe.equals(Ye)||(A=!0,T(He,Ye),v&&c!==void 0&&(c=Ye),Wr(()=>x(oe))),p}return x(oe)}}function sn(e){return new ln(e)}var M,k;class ln{constructor(t){Ue(this,M);Ue(this,k);var i;var r=new Map,n=(l,u)=>{var o=nt(u);return r.set(l,o),o};const s=new Proxy({...t.props||{},$$events:{}},{get(l,u){return x(r.get(u)??n(u,Reflect.get(l,u)))},has(l,u){return u===mt?!0:(x(r.get(u)??n(u,Reflect.get(l,u))),Reflect.has(l,u))},set(l,u,o){return T(r.get(u)??n(u,o),o),Reflect.set(l,u,o)}});Ve(this,k,(t.hydrate?en:Ht)(t.component,{target:t.target,anchor:t.anchor,props:s,context:t.context,intro:t.intro??!1,recover:t.recover})),(!((i=t==null?void 0:t.props)!=null&&i.$$host)||t.sync===!1)&&J(),Ve(this,M,s.$$events);for(const l of Object.keys(y(this,k)))l==="$set"||l==="$destroy"||l==="$on"||ke(this,l,{get(){return y(this,k)[l]},set(u){y(this,k)[l]=u},enumerable:!0});y(this,k).$set=l=>{Object.assign(s,l)},y(this,k).$destroy=()=>{tn(y(this,k))}}$set(t){y(this,k).$set(t)}$on(t,r){y(this,M)[t]=y(this,M)[t]||[];const n=(...s)=>r.call(this,...s);return y(this,M)[t].push(n),()=>{y(this,M)[t]=y(this,M)[t].filter(s=>s!==n)}}$destroy(){y(this,k).$destroy()}}M=new WeakMap,k=new WeakMap;let Vt;typeof HTMLElement=="function"&&(Vt=class extends HTMLElement{constructor(t,r,n){super();R(this,"$$ctor");R(this,"$$s");R(this,"$$c");R(this,"$$cn",!1);R(this,"$$d",{});R(this,"$$r",!1);R(this,"$$p_d",{});R(this,"$$l",{});R(this,"$$l_u",new Map);R(this,"$$me");this.$$ctor=t,this.$$s=r,n&&this.attachShadow({mode:"open"})}addEventListener(t,r,n){if(this.$$l[t]=this.$$l[t]||[],this.$$l[t].push(r),this.$$c){const s=this.$$c.$on(t,r);this.$$l_u.set(r,s)}super.addEventListener(t,r,n)}removeEventListener(t,r,n){if(super.removeEventListener(t,r,n),this.$$c){const s=this.$$l_u.get(r);s&&(s(),this.$$l_u.delete(r))}}async connectedCallback(){if(this.$$cn=!0,!this.$$c){let r=function(i){return l=>{const u=document.createElement("slot");i!=="default"&&(u.name=i),be(l,u)}};var t=r;if(await Promise.resolve(),!this.$$cn||this.$$c)return;const n={},s=un(this);for(const i of this.$$s)i in s&&(i==="default"&&!this.$$d.children?(this.$$d.children=r(i),n.default=!0):n[i]=r(i));for(const i of this.attributes){const l=this.$$g_p(i.name);l in this.$$d||(this.$$d[l]=Oe(l,i.value,this.$$p_d,"toProp"))}for(const i in this.$$p_d)!(i in this.$$d)&&this[i]!==void 0&&(this.$$d[i]=this[i],delete this[i]);this.$$c=sn({component:this.$$ctor,target:this.shadowRoot||this,props:{...this.$$d,$$slots:n,$$host:this}}),this.$$me=Rr(()=>{Pr(()=>{var i;this.$$r=!0;for(const l of Ne(this.$$c)){if(!((i=this.$$p_d[l])!=null&&i.reflect))continue;this.$$d[l]=this.$$c[l];const u=Oe(l,this.$$d[l],this.$$p_d,"toAttribute");u==null?this.removeAttribute(this.$$p_d[l].attribute||l):this.setAttribute(this.$$p_d[l].attribute||l,u)}this.$$r=!1})});for(const i in this.$$l)for(const l of this.$$l[i]){const u=this.$$c.$on(i,l);this.$$l_u.set(l,u)}this.$$l={}}}attributeChangedCallback(t,r,n){var s;this.$$r||(t=this.$$g_p(t),this.$$d[t]=Oe(t,n,this.$$p_d,"toProp"),(s=this.$$c)==null||s.$set({[t]:this.$$d[t]}))}disconnectedCallback(){this.$$cn=!1,Promise.resolve().then(()=>{!this.$$cn&&this.$$c&&(this.$$c.$destroy(),this.$$me(),this.$$c=void 0)})}$$g_p(t){return Ne(this.$$p_d).find(r=>this.$$p_d[r].attribute===t||!this.$$p_d[r].attribute&&r.toLowerCase()===t)||t}});function Oe(e,t,r,n){var i;const s=(i=r[e])==null?void 0:i.type;if(t=s==="Boolean"&&typeof t!="boolean"?t!=null:t,!n||!r[e])return t;if(n==="toAttribute")switch(s){case"Object":case"Array":return t==null?null:JSON.stringify(t);case"Boolean":return t?"":null;case"Number":return t??null;default:return t}else switch(s){case"Object":case"Array":return t&&JSON.parse(t);case"Boolean":return t;case"Number":return t!=null?+t:t;default:return t}}function un(e){const t={};return e.childNodes.forEach(r=>{t[r.slot||"default"]=!0}),t}function ze(e,t,r,n,s,i){let l=class extends Vt{constructor(){super(e,r,s),this.$$p_d=t}static get observedAttributes(){return Ne(t).map(u=>(t[u].attribute||u).toLowerCase())}};return Ne(t).forEach(u=>{ke(l.prototype,u,{get(){return this.$$c&&u in this.$$c?this.$$c[u]:this.$$d[u]},set(o){var c;o=Oe(u,o,t),this.$$d[u]=o;var a=this.$$c;if(a){var f=(c=V(a,u))==null?void 0:c.get;f?a[u]=o:a.$set({[u]:o})}}})}),n.forEach(u=>{ke(l.prototype,u,{get(){var o;return(o=this.$$c)==null?void 0:o[u]}})}),e.element=l,l}var on=Be('<div class="svelte-bn2e7w"><h2 class="svelte-bn2e7w"> </h2> <button class="decrement svelte-bn2e7w">-</button> <button class="increment svelte-bn2e7w">+</button></div>');const an={hash:"svelte-bn2e7w",code:`\r
  /* Container styling */div.svelte-bn2e7w {text-align:center;font-size:24px;margin:20px;padding:20px;background-color:#f3f3f3; /* Light background for contrast */border-radius:8px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1); /* Subtle shadow for depth */max-width:300px;margin:50px auto;}\r
\r
  /* Heading style */h2.svelte-bn2e7w {font-size:32px;color:#333;margin-bottom:20px;}\r
\r
  /* Button styling */button.svelte-bn2e7w {padding:15px 30px;font-size:20px;margin:10px;cursor:pointer;border:none;border-radius:6px;transition:background-color 0.3s ease, transform 0.2s ease;}button.svelte-bn2e7w:hover {background-color:#ff6f61; /* Color change on hover */transform:scale(1.1); /* Slight scaling effect */}button.svelte-bn2e7w:active {background-color:#ff3b2f; /* Darker shade when clicked */}\r
\r
  /* Button colors for increment and decrement */button.increment.svelte-bn2e7w {background-color:#4caf50; /* Green for increment */color:white;}button.decrement.svelte-bn2e7w {background-color:#f44336; /* Red for decrement */color:white;}`};function fn(e){je(e,an);let t=yr(0);function r(){T(t,x(t)+1)}function n(){T(t,x(t)-1)}var s=on(),i=W(s),l=W(i);K(i);var u=Ge(i,2),o=Ge(u,2);K(s),Le(()=>Pe(l,`Counter: ${x(t)??""}`)),Qe("click",u,n),Qe("click",o,r),be(e,s)}customElements.define("my-component",ze(fn,{},[],[],!0));var cn=Be("<div> </div>");const dn={hash:"svelte-i0xbnm",code:".alert.svelte-i0xbnm {padding:15px;border-radius:8px;font-size:16px;margin:20px 0;}.alert.success.svelte-i0xbnm {background-color:#d4edda;border:1px solid #c3e6cb;color:#155724;}.alert.error.svelte-i0xbnm {background-color:#f8d7da;border:1px solid #f5c6cb;color:#721c24;}.alert.info.svelte-i0xbnm {background-color:#d1ecf1;border:1px solid #bee5eb;color:#0c5460;}.alert.warning.svelte-i0xbnm {background-color:#fff3cd;border:1px solid #ffeeba;color:#856404;}"};function vn(e,t){Fe(t,!1),je(e,dn);let r=_e(t,"type",12,"success"),n=_e(t,"message",12,"This is an alert message!");var s=cn(),i=W(s,!0);return K(s),Le(()=>{Ut(s,`alert ${r()??""} svelte-i0xbnm`),Pe(i,n())}),be(e,s),Me({get type(){return r()},set type(l){r(l),J()},get message(){return n()},set message(l){n(l),J()}})}customElements.define("my-alert",ze(vn,{type:{},message:{}},[],[],!0));var _n=Be('<div class="svelte-1nev5dz"><h3 class="svelte-1nev5dz"> </h3> <p class="svelte-1nev5dz"> </p></div>');const hn={hash:"svelte-1nev5dz",code:"div.svelte-1nev5dz {border:2px solid #ddd;border-radius:8px;padding:20px;width:300px;box-shadow:0 4px 8px rgba(0, 0, 0, 0.1);margin:10px;background-color:white;}h3.svelte-1nev5dz {font-size:24px;margin-bottom:10px;color:#333;}p.svelte-1nev5dz {font-size:16px;color:#666;}"};function $n(e,t){Fe(t,!1),je(e,hn);let r=_e(t,"title",12,"Card Title"),n=_e(t,"content",12,"This is a simple card. Add your content here.");var s=_n(),i=W(s),l=W(i,!0);K(i);var u=Ge(i,2),o=W(u,!0);return K(u),K(s),Le(()=>{Pe(l,r()),Pe(o,n())}),be(e,s),Me({get title(){return r()},set title(a){r(a),J()},get content(){return n()},set content(a){n(a),J()}})}customElements.define("my-card",ze($n,{title:{},content:{}},[],[],!0));var gn=Be('<div class="toggle-container svelte-s96e1u"><div></div></div>');const pn={hash:"svelte-s96e1u",code:".toggle-container.svelte-s96e1u {display:flex;align-items:center;justify-content:center;margin:20px;}.toggle-switch.svelte-s96e1u {position:relative;width:60px;height:30px;background-color:#ccc;border-radius:50px;cursor:pointer;}.toggle-switch.svelte-s96e1u::before {content:'';position:absolute;top:4px;left:4px;width:22px;height:22px;background-color:white;border-radius:50%;transition:0.3s ease;}.toggle-switch.on.svelte-s96e1u {background-color:#4caf50;}.toggle-switch.on.svelte-s96e1u::before {left:34px;}"};function bn(e,t){Fe(t,!1),je(e,pn);let r=_e(t,"isOn",12,!1);function n(){r(!r())}var s=gn(),i=W(s);return K(s),Le(()=>Ut(i,`toggle-switch ${(r()?"on":"")??""} svelte-s96e1u`)),Qe("click",s,n),be(e,s),Me({get isOn(){return r()},set isOn(l){r(l),J()}})}customElements.define("my-toggle-switch",ze(bn,{isOn:{}},[],[],!0));
