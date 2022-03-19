var bs=Object.defineProperty,Is=Object.defineProperties;var Es=Object.getOwnPropertyDescriptors;var Kn=Object.getOwnPropertySymbols;var ws=Object.prototype.hasOwnProperty,Ts=Object.prototype.propertyIsEnumerable;var Jn=(t,e,n)=>e in t?bs(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,Z=(t,e)=>{for(var n in e||(e={}))ws.call(e,n)&&Jn(t,n,e[n]);if(Kn)for(var n of Kn(e))Ts.call(e,n)&&Jn(t,n,e[n]);return t},De=(t,e)=>Is(t,Es(e));function se(){}function fe(t,e){for(const n in e)t[n]=e[n];return t}function Vr(t){return t()}function Yn(){return Object.create(null)}function Ae(t){t.forEach(Vr)}function Wr(t){return typeof t=="function"}function Ot(t,e){return t!=t?e==e:t!==e||t&&typeof t=="object"||typeof t=="function"}let st;function nd(t,e){return st||(st=document.createElement("a")),st.href=e,t===st.href}function Ss(t){return Object.keys(t).length===0}function _n(t,...e){if(t==null)return se;const n=t.subscribe(...e);return n.unsubscribe?()=>n.unsubscribe():n}function Te(t){let e;return _n(t,n=>e=n)(),e}function F(t,e,n){t.$$.on_destroy.push(_n(e,n))}function vn(t,e,n,r){if(t){const i=zr(t,e,n,r);return t[0](i)}}function zr(t,e,n,r){return t[1]&&r?fe(n.ctx.slice(),t[1](r(e))):n.ctx}function yn(t,e,n,r){if(t[2]&&r){const i=t[2](r(n));if(e.dirty===void 0)return i;if(typeof i=="object"){const s=[],o=Math.max(e.dirty.length,i.length);for(let a=0;a<o;a+=1)s[a]=e.dirty[a]|i[a];return s}return e.dirty|i}return e.dirty}function bn(t,e,n,r,i,s){if(i){const o=zr(e,n,r,s);t.p(o,i)}}function In(t){if(t.ctx.length>32){const e=[],n=t.ctx.length/32;for(let r=0;r<n;r++)e[r]=-1;return e}return-1}function gt(t){const e={};for(const n in t)n[0]!=="$"&&(e[n]=t[n]);return e}function _t(t,e){const n={};e=new Set(e);for(const r in t)!e.has(r)&&r[0]!=="$"&&(n[r]=t[r]);return n}function rd(t,e,n){return t.set(n),e}function Rs(t,e){t.appendChild(e)}function D(t,e,n){t.insertBefore(e,n||null)}function P(t){t.parentNode.removeChild(t)}function je(t){return document.createElement(t)}function En(t){return document.createTextNode(t)}function vt(){return En(" ")}function wn(){return En("")}function ks(t,e,n,r){return t.addEventListener(e,n,r),()=>t.removeEventListener(e,n,r)}function x(t,e,n){n==null?t.removeAttribute(e):t.getAttribute(e)!==n&&t.setAttribute(e,n)}function Xn(t,e){const n=Object.getOwnPropertyDescriptors(t.__proto__);for(const r in e)e[r]==null?t.removeAttribute(r):r==="style"?t.style.cssText=e[r]:r==="__value"?t.value=t[r]=e[r]:n[r]&&n[r].set?t[r]=e[r]:x(t,r,e[r])}function Os(t){return Array.from(t.childNodes)}function As(t,e){e=""+e,t.wholeText!==e&&(t.data=e)}function id(t,e){t.value=e==null?"":e}function sn(t,e,n,r){n===null?t.style.removeProperty(e):t.style.setProperty(e,n,r?"important":"")}function Cs(t,e,n=!1){const r=document.createEvent("CustomEvent");return r.initCustomEvent(t,n,!1,e),r}let Ve;function Be(t){Ve=t}function Ke(){if(!Ve)throw new Error("Function called outside component initialization");return Ve}function Ps(t){Ke().$$.on_mount.push(t)}function Ns(t){Ke().$$.on_destroy.push(t)}function Ds(){const t=Ke();return(e,n)=>{const r=t.$$.callbacks[e];if(r){const i=Cs(e,n);r.slice().forEach(s=>{s.call(t,i)})}}}function Fe(t,e){Ke().$$.context.set(t,e)}function oe(t){return Ke().$$.context.get(t)}const Le=[],Qn=[],ut=[],Zn=[],$r=Promise.resolve();let on=!1;function qr(){on||(on=!0,$r.then(Gr))}function Ls(){return qr(),$r}function an(t){ut.push(t)}const Wt=new Set;let ot=0;function Gr(){const t=Ve;do{for(;ot<Le.length;){const e=Le[ot];ot++,Be(e),Ms(e.$$)}for(Be(null),Le.length=0,ot=0;Qn.length;)Qn.pop()();for(let e=0;e<ut.length;e+=1){const n=ut[e];Wt.has(n)||(Wt.add(n),n())}ut.length=0}while(Le.length);for(;Zn.length;)Zn.pop()();on=!1,Wt.clear(),Be(t)}function Ms(t){if(t.fragment!==null){t.update(),Ae(t.before_update);const e=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,e),t.after_update.forEach(an)}}const lt=new Set;let le;function Tn(){le={r:0,c:[],p:le}}function Sn(){le.r||Ae(le.c),le=le.p}function L(t,e){t&&t.i&&(lt.delete(t),t.i(e))}function W(t,e,n,r){if(t&&t.o){if(lt.has(t))return;lt.add(t),le.c.push(()=>{lt.delete(t),r&&(n&&t.d(1),r())}),t.o(e)}}function Kr(t,e){const n={},r={},i={$$scope:1};let s=t.length;for(;s--;){const o=t[s],a=e[s];if(a){for(const c in o)c in a||(r[c]=1);for(const c in a)i[c]||(n[c]=a[c],i[c]=1);t[s]=a}else for(const c in o)i[c]=1}for(const o in r)o in n||(n[o]=void 0);return n}function er(t){return typeof t=="object"&&t!==null?t:{}}function cn(t){t&&t.c()}function yt(t,e,n,r){const{fragment:i,on_mount:s,on_destroy:o,after_update:a}=t.$$;i&&i.m(e,n),r||an(()=>{const c=s.map(Vr).filter(Wr);o?o.push(...c):Ae(c),t.$$.on_mount=[]}),a.forEach(an)}function bt(t,e){const n=t.$$;n.fragment!==null&&(Ae(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function Us(t,e){t.$$.dirty[0]===-1&&(Le.push(t),qr(),t.$$.dirty.fill(0)),t.$$.dirty[e/31|0]|=1<<e%31}function Rn(t,e,n,r,i,s,o,a=[-1]){const c=Ve;Be(t);const u=t.$$={fragment:null,ctx:null,props:s,update:se,not_equal:i,bound:Yn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(c?c.$$.context:[])),callbacks:Yn(),dirty:a,skip_bound:!1,root:e.target||c.$$.root};o&&o(u.root);let l=!1;if(u.ctx=n?n(t,e.props||{},(d,h,...f)=>{const _=f.length?f[0]:h;return u.ctx&&i(u.ctx[d],u.ctx[d]=_)&&(!u.skip_bound&&u.bound[d]&&u.bound[d](_),l&&Us(t,d)),h}):[],u.update(),l=!0,Ae(u.before_update),u.fragment=r?r(u.ctx):!1,e.target){if(e.hydrate){const d=Os(e.target);u.fragment&&u.fragment.l(d),d.forEach(P)}else u.fragment&&u.fragment.c();e.intro&&L(t.$$.fragment),yt(t,e.target,e.anchor,e.customElement),Gr()}Be(c)}class kn{$destroy(){bt(this,1),this.$destroy=se}$on(e,n){const r=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return r.push(n),()=>{const i=r.indexOf(n);i!==-1&&r.splice(i,1)}}$set(e){this.$$set&&!Ss(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const tr=t=>typeof t=="undefined",Jr=t=>typeof t=="function",Yr=t=>typeof t=="number";function xs(t){return!t.defaultPrevented&&t.button===0&&!(t.metaKey||t.altKey||t.ctrlKey||t.shiftKey)}function Xr(){let t=0;return()=>t++}function Bs(){return Math.random().toString(36).substring(2)}const ae=typeof window=="undefined";function Qr(t,e,n){return t.addEventListener(e,n),()=>t.removeEventListener(e,n)}const ve=[];function Fs(t,e){return{subscribe:H(t,e).subscribe}}function H(t,e=se){let n;const r=new Set;function i(a){if(Ot(t,a)&&(t=a,n)){const c=!ve.length;for(const u of r)u[1](),ve.push(u,t);if(c){for(let u=0;u<ve.length;u+=2)ve[u][0](ve[u+1]);ve.length=0}}}function s(a){i(a(t))}function o(a,c=se){const u=[a,c];return r.add(u),r.size===1&&(n=e(i)||se),a(t),()=>{r.delete(u),r.size===0&&(n(),n=null)}}return{set:i,update:s,subscribe:o}}function Hs(t,e,n){const r=!Array.isArray(t),i=r?[t]:t,s=e.length<2;return Fs(n,o=>{let a=!1;const c=[];let u=0,l=se;const d=()=>{if(u)return;l();const f=e(r?c[0]:c,o);s?o(f):l=Wr(f)?f:se},h=i.map((f,_)=>_n(f,T=>{c[_]=T,u&=~(1<<_),a&&d()},()=>{u|=1<<_}));return a=!0,d(),function(){Ae(h),l()}})}const Je=t=>`@@svnav-ctx__${t}`,un=Je("LOCATION"),Se=Je("ROUTER"),Zr=Je("ROUTE"),js=Je("ROUTE_PARAMS"),Vs=Je("FOCUS_ELEM"),ei=/^:(.+)/,ln=(t,e)=>t.substr(0,e.length)===e,Ws=t=>t==="",zs=t=>ei.test(t),ti=t=>t[0]==="*",$s=t=>t.replace(/\*.*$/,""),ni=t=>t.replace(/(^\/+|\/+$)/g,"");function z(t,e=!1){const n=ni(t).split("/");return e?n.filter(Boolean):n}const zt=(t,e)=>t+(e?`?${e}`:""),On=t=>`/${ni(t)}`;function Ye(...t){const e=r=>z(r,!0).join("/"),n=t.map(e).join("/");return On(n)}const An=1,At=2,pe=3,qs=4,ri=5,Gs=6,ii=7,Ks=8,Js=9,si=10,oi=11,Ys={[An]:"Link",[At]:"Route",[pe]:"Router",[qs]:"useFocus",[ri]:"useLocation",[Gs]:"useMatch",[ii]:"useNavigate",[Ks]:"useParams",[Js]:"useResolvable",[si]:"useResolve",[oi]:"navigate"},Cn=t=>Ys[t];function Xs(t,e){let n;return t===At?n=e.path?`path="${e.path}"`:"default":t===An?n=`to="${e.to}"`:t===pe&&(n=`basepath="${e.basepath||""}"`),`<${Cn(t)} ${n||""} />`}function Qs(t,e,n,r){const i=n&&Xs(r||t,n),s=i?`

Occurred in: ${i}`:"",o=Cn(t),a=Jr(e)?e(o):e;return`<${o}> ${a}${s}`}const ai=t=>(...e)=>t(Qs(...e)),ci=ai(t=>{throw new Error(t)}),It=ai(console.warn),nr=4,Zs=3,eo=2,to=1,no=1;function ro(t,e){const n=t.default?0:z(t.fullPath).reduce((r,i)=>{let s=r;return s+=nr,Ws(i)?s+=no:zs(i)?s+=eo:ti(i)?s-=nr+to:s+=Zs,s},0);return{route:t,score:n,index:e}}function io(t){return t.map(ro).sort((e,n)=>e.score<n.score?1:e.score>n.score?-1:e.index-n.index)}function ui(t,e){let n,r;const[i]=e.split("?"),s=z(i),o=s[0]==="",a=io(t);for(let c=0,u=a.length;c<u;c++){const{route:l}=a[c];let d=!1;const h={},f=b=>De(Z({},l),{params:h,uri:b});if(l.default){r=f(e);continue}const _=z(l.fullPath),T=Math.max(s.length,_.length);let g=0;for(;g<T;g++){const b=_[g],w=s[g];if(!tr(b)&&ti(b)){const E=b==="*"?"*":b.slice(1);h[E]=s.slice(g).map(decodeURIComponent).join("/");break}if(tr(w)){d=!0;break}const S=ei.exec(b);if(S&&!o){const E=decodeURIComponent(w);h[S[1]]=E}else if(b!==w){d=!0;break}}if(!d){n=f(Ye(...s.slice(0,g)));break}}return n||r||null}function li(t,e){return ui([t],e)}function so(t,e){if(ln(t,"/"))return t;const[n,r]=t.split("?"),[i]=e.split("?"),s=z(n),o=z(i);if(s[0]==="")return zt(i,r);if(!ln(s[0],".")){const u=o.concat(s).join("/");return zt((i==="/"?"":"/")+u,r)}const a=o.concat(s),c=[];return a.forEach(u=>{u===".."?c.pop():u!=="."&&c.push(u)}),zt(`/${c.join("/")}`,r)}function rr(t,e){const{pathname:n,hash:r="",search:i="",state:s}=t,o=z(e,!0),a=z(n,!0);for(;o.length;)o[0]!==a[0]&&ci(pe,`Invalid state: All locations must begin with the basepath "${e}", found "${n}"`),o.shift(),a.shift();return{pathname:Ye(...a),hash:r,search:i,state:s}}const ir=t=>t.length===1?"":t;function di(t){const e=t.indexOf("?"),n=t.indexOf("#"),r=e!==-1,i=n!==-1,s=i?ir(t.substr(n)):"",o=i?t.substr(0,n):t,a=r?ir(o.substr(e)):"";return{pathname:r?o.substr(0,e):o,search:a,hash:s}}function oo(t,e,n){return Ye(n,so(t,e))}function ao(t,e){const n=On($s(t)),r=z(n,!0),i=z(e,!0).slice(0,r.length),s=li({fullPath:n},Ye(...i));return s&&s.uri}const $t="POP",co="PUSH",uo="REPLACE";function qt(t){return De(Z({},t.location),{pathname:encodeURI(decodeURI(t.location.pathname)),state:t.history.state,_key:t.history.state&&t.history.state._key||"initial"})}function lo(t){let e=[],n=qt(t),r=$t;const i=(s=e)=>s.forEach(o=>o({location:n,action:r}));return{get location(){return n},listen(s){e.push(s);const o=()=>{n=qt(t),r=$t,i([s])};i([s]);const a=Qr(t,"popstate",o);return()=>{a(),e=e.filter(c=>c!==s)}},navigate(s,o){const{state:a={},replace:c=!1}=o||{};if(r=c?uo:co,Yr(s))o&&It(oi,"Navigation options (state or replace) are not supported, when passing a number as the first argument to navigate. They are ignored."),r=$t,t.history.go(s);else{const u=De(Z({},a),{_key:Bs()});try{t.history[c?"replaceState":"pushState"](u,"",s)}catch{t.location[c?"replace":"assign"](s)}}n=qt(t),i()}}}function Gt(t,e){return De(Z({},di(e)),{state:t})}function ho(t="/"){let e=0,n=[Gt(null,t)];return{get entries(){return n},get location(){return n[e]},addEventListener(){},removeEventListener(){},history:{get state(){return n[e].state},pushState(r,i,s){e++,n=n.slice(0,e),n.push(Gt(r,s))},replaceState(r,i,s){n[e]=Gt(r,s)},go(r){const i=e+r;i<0||i>n.length-1||(e=i)}}}}const fo=!!(!ae&&window.document&&window.document.createElement),po=!ae&&window.location.origin==="null",mo=lo(fo&&!po?window:ho());let G=null,hi=!0;function go(t,e){const n=document.querySelectorAll("[data-svnav-router]");for(let r=0;r<n.length;r++){const i=n[r],s=Number(i.dataset.svnavRouter);if(s===t)return!0;if(s===e)return!1}return!1}function _o(t){(!G||t.level>G.level||t.level===G.level&&go(t.routerId,G.routerId))&&(G=t)}function vo(){G=null}function yo(){hi=!1}function sr(t){if(!t)return!1;const e="tabindex";try{if(!t.hasAttribute(e)){t.setAttribute(e,"-1");let n;n=Qr(t,"blur",()=>{t.removeAttribute(e),n()})}return t.focus(),document.activeElement===t}catch{return!1}}function bo(t,e){return Number(t.dataset.svnavRouteEnd)===e}function Io(t){return/^H[1-6]$/i.test(t.tagName)}function or(t,e=document){return e.querySelector(t)}function Eo(t){let n=or(`[data-svnav-route-start="${t}"]`).nextElementSibling;for(;!bo(n,t);){if(Io(n))return n;const r=or("h1,h2,h3,h4,h5,h6",n);if(r)return r;n=n.nextElementSibling}return null}function wo(t){Promise.resolve(Te(t.focusElement)).then(e=>{const n=e||Eo(t.id);n||It(pe,`Could not find an element to focus. You should always render a header for accessibility reasons, or set a custom focus element via the "useFocus" hook. If you don't want this Route or Router to manage focus, pass "primary={false}" to it.`,t,At),!sr(n)&&sr(document.documentElement)})}const To=(t,e,n)=>(r,i)=>Ls().then(()=>{if(!G||hi){yo();return}if(r&&wo(G.route),t.announcements&&i){const{path:s,fullPath:o,meta:a,params:c,uri:u}=G.route,l=t.createAnnouncement({path:s,fullPath:o,meta:a,params:c,uri:u},Te(n));Promise.resolve(l).then(d=>{e.set(d)})}vo()}),So="position:fixed;top:-1px;left:0;width:1px;height:1px;padding:0;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0;";function Ro(t){let e,n;return{c(){e=je("div"),n=En(t[0]),x(e,"role","status"),x(e,"aria-atomic","true"),x(e,"aria-live","polite"),x(e,"style",So)},m(r,i){D(r,e,i),Rs(e,n)},p(r,i){i[0]&1&&As(n,r[0])},d(r){r&&P(e)}}}function ko(t){let e,n,r,i,s;const o=t[20].default,a=vn(o,t,t[19],null);let c=t[2]&&t[4]&&t[1].announcements&&Ro(t);return{c(){e=je("div"),n=vt(),a&&a.c(),r=vt(),c&&c.c(),i=wn(),sn(e,"display","none"),x(e,"aria-hidden","true"),x(e,"data-svnav-router",t[3])},m(u,l){D(u,e,l),D(u,n,l),a&&a.m(u,l),D(u,r,l),c&&c.m(u,l),D(u,i,l),s=!0},p(u,l){a&&a.p&&(!s||l[0]&524288)&&bn(a,o,u,u[19],s?yn(o,u[19],l,null):In(u[19]),null),u[2]&&u[4]&&u[1].announcements&&c.p(u,l)},i(u){s||(L(a,u),s=!0)},o(u){W(a,u),s=!1},d(u){u&&P(e),u&&P(n),a&&a.d(u),u&&P(r),c&&c.d(u),u&&P(i)}}}const Oo=Xr(),ar="/";function Ao(t,e,n){let r,i,s,o,a,{$$slots:c={},$$scope:u}=e,{basepath:l=ar}=e,{url:d=null}=e,{history:h=mo}=e,{primary:f=!0}=e,{a11y:_={}}=e;const T=Z({createAnnouncement:m=>`Navigated to ${m.uri}`,announcements:!0},_),g=l,b=On(l),w=oe(un),S=oe(Se),E=!w,U=Oo(),v=f&&!(S&&!S.manageFocus),N=H("");F(t,N,m=>n(0,a=m));const q=H([]);F(t,q,m=>n(18,o=m));const A=H(null);F(t,A,m=>n(16,i=m));let _e=!1;const y=E?0:S.level+1,X=E?H((()=>rr(ae?di(d):h.location,b))()):w;F(t,X,m=>n(15,r=m));const Vt=H(r);F(t,Vt,m=>n(17,s=m));const _s=To(T,N,X),Gn=m=>B=>B.filter(Q=>Q.id!==m);function vs(m){if(ae){if(_e)return;const B=li(m,r.pathname);if(B)return _e=!0,B}else q.update(B=>{const Q=Gn(m.id)(B);return Q.push(m),Q})}function ys(m){q.update(Gn(m))}return!E&&l!==ar&&It(pe,'Only top-level Routers can have a "basepath" prop. It is ignored.',{basepath:l}),E&&(Ps(()=>h.listen(B=>{const Q=rr(B.location,b);Vt.set(r),X.set(Q)})),Fe(un,X)),Fe(Se,{activeRoute:A,registerRoute:vs,unregisterRoute:ys,manageFocus:v,level:y,id:U,history:E?h:S.history,basepath:E?b:S.basepath}),t.$$set=m=>{"basepath"in m&&n(10,l=m.basepath),"url"in m&&n(11,d=m.url),"history"in m&&n(12,h=m.history),"primary"in m&&n(13,f=m.primary),"a11y"in m&&n(14,_=m.a11y),"$$scope"in m&&n(19,u=m.$$scope)},t.$$.update=()=>{if(t.$$.dirty[0]&1024&&l!==g&&It(pe,'You cannot change the "basepath" prop. It is ignored.'),t.$$.dirty[0]&294912){const m=ui(o,r.pathname);A.set(m)}if(t.$$.dirty[0]&163840&&E){const m=!!r.hash,B=!m&&v,Q=!m||r.pathname!==s.pathname;_s(B,Q)}t.$$.dirty[0]&65536&&v&&i&&i.primary&&_o({level:y,routerId:U,route:i})},[a,T,E,U,v,N,q,A,X,Vt,l,d,h,f,_,r,i,s,o,u,c]}class Co extends kn{constructor(e){super();Rn(this,e,Ao,ko,Ot,{basepath:10,url:11,history:12,primary:13,a11y:14},null,[-1,-1])}}function Xe(t,e,n=Se,r=pe){oe(n)||ci(t,s=>`You cannot use ${s} outside of a ${Cn(r)}.`,e)}const Po=t=>{const{subscribe:e}=oe(t);return{subscribe:e}};function fi(){return Xe(ri),Po(un)}function pi(){const{history:t}=oe(Se);return t}function mi(){const t=oe(Zr);return t?Hs(t,e=>e.base):H("/")}function gi(){Xe(si);const t=mi(),{basepath:e}=oe(Se);return r=>oo(r,Te(t),e)}function No(){Xe(ii);const t=gi(),{navigate:e}=pi();return(r,i)=>{const s=Yr(r)?r:t(r);return e(s,i)}}const Do=t=>({params:t&16,location:t&8}),cr=t=>({params:ae?Te(t[9]):t[4],location:t[3],navigate:t[10]});function ur(t){let e,n;return e=new Co({props:{primary:t[1],$$slots:{default:[Uo]},$$scope:{ctx:t}}}),{c(){cn(e.$$.fragment)},m(r,i){yt(e,r,i),n=!0},p(r,i){const s={};i&2&&(s.primary=r[1]),i&264217&&(s.$$scope={dirty:i,ctx:r}),e.$set(s)},i(r){n||(L(e.$$.fragment,r),n=!0)},o(r){W(e.$$.fragment,r),n=!1},d(r){bt(e,r)}}}function Lo(t){let e;const n=t[17].default,r=vn(n,t,t[18],cr);return{c(){r&&r.c()},m(i,s){r&&r.m(i,s),e=!0},p(i,s){r&&r.p&&(!e||s&262168)&&bn(r,n,i,i[18],e?yn(n,i[18],s,Do):In(i[18]),cr)},i(i){e||(L(r,i),e=!0)},o(i){W(r,i),e=!1},d(i){r&&r.d(i)}}}function Mo(t){let e,n,r;const i=[{location:t[3]},{navigate:t[10]},ae?Te(t[9]):t[4],t[11]];var s=t[0];function o(a){let c={};for(let u=0;u<i.length;u+=1)c=fe(c,i[u]);return{props:c}}return s&&(e=new s(o())),{c(){e&&cn(e.$$.fragment),n=wn()},m(a,c){e&&yt(e,a,c),D(a,n,c),r=!0},p(a,c){const u=c&3608?Kr(i,[c&8&&{location:a[3]},c&1024&&{navigate:a[10]},c&528&&er(ae?Te(a[9]):a[4]),c&2048&&er(a[11])]):{};if(s!==(s=a[0])){if(e){Tn();const l=e;W(l.$$.fragment,1,0,()=>{bt(l,1)}),Sn()}s?(e=new s(o()),cn(e.$$.fragment),L(e.$$.fragment,1),yt(e,n.parentNode,n)):e=null}else s&&e.$set(u)},i(a){r||(e&&L(e.$$.fragment,a),r=!0)},o(a){e&&W(e.$$.fragment,a),r=!1},d(a){a&&P(n),e&&bt(e,a)}}}function Uo(t){let e,n,r,i;const s=[Mo,Lo],o=[];function a(c,u){return c[0]!==null?0:1}return e=a(t),n=o[e]=s[e](t),{c(){n.c(),r=wn()},m(c,u){o[e].m(c,u),D(c,r,u),i=!0},p(c,u){let l=e;e=a(c),e===l?o[e].p(c,u):(Tn(),W(o[l],1,1,()=>{o[l]=null}),Sn(),n=o[e],n?n.p(c,u):(n=o[e]=s[e](c),n.c()),L(n,1),n.m(r.parentNode,r))},i(c){i||(L(n),i=!0)},o(c){W(n),i=!1},d(c){o[e].d(c),c&&P(r)}}}function xo(t){let e,n,r,i,s,o=t[2]&&ur(t);return{c(){e=je("div"),n=vt(),o&&o.c(),r=vt(),i=je("div"),sn(e,"display","none"),x(e,"aria-hidden","true"),x(e,"data-svnav-route-start",t[5]),sn(i,"display","none"),x(i,"aria-hidden","true"),x(i,"data-svnav-route-end",t[5])},m(a,c){D(a,e,c),D(a,n,c),o&&o.m(a,c),D(a,r,c),D(a,i,c),s=!0},p(a,[c]){a[2]?o?(o.p(a,c),c&4&&L(o,1)):(o=ur(a),o.c(),L(o,1),o.m(r.parentNode,r)):o&&(Tn(),W(o,1,1,()=>{o=null}),Sn())},i(a){s||(L(o),s=!0)},o(a){W(o),s=!1},d(a){a&&P(e),a&&P(n),o&&o.d(a),a&&P(r),a&&P(i)}}}const Bo=Xr();function Fo(t,e,n){let r;const i=["path","component","meta","primary"];let s=_t(e,i),o,a,c,u,{$$slots:l={},$$scope:d}=e,{path:h=""}=e,{component:f=null}=e,{meta:_={}}=e,{primary:T=!0}=e;Xe(At,e);const g=Bo(),{registerRoute:b,unregisterRoute:w,activeRoute:S}=oe(Se);F(t,S,y=>n(15,o=y));const E=mi();F(t,E,y=>n(16,c=y));const U=fi();F(t,U,y=>n(3,a=y));const v=H(null);let N;const q=H(),A=H({});F(t,A,y=>n(4,u=y)),Fe(Zr,q),Fe(js,A),Fe(Vs,v);const _e=No();return ae||Ns(()=>w(g)),t.$$set=y=>{n(23,e=fe(fe({},e),gt(y))),n(11,s=_t(e,i)),"path"in y&&n(12,h=y.path),"component"in y&&n(0,f=y.component),"meta"in y&&n(13,_=y.meta),"primary"in y&&n(1,T=y.primary),"$$scope"in y&&n(18,d=y.$$scope)},t.$$.update=()=>{if(t.$$.dirty&77834){const y=h==="",jt=Ye(c,h),X={id:g,path:h,meta:_,default:y,fullPath:y?"":jt,base:y?c:ao(jt,a.pathname),primary:T,focusElement:v};q.set(X),n(14,N=b(X))}if(t.$$.dirty&49152&&n(2,r=!!(N||o&&o.id===g)),t.$$.dirty&49156&&r){const{params:y}=N||o;A.set(y)}},e=gt(e),[f,T,r,a,u,g,S,E,U,A,_e,s,h,_,N,o,c,l,d]}class sd extends kn{constructor(e){super();Rn(this,e,Fo,xo,Ot,{path:12,component:0,meta:13,primary:1})}}function Ho(t){let e,n,r,i;const s=t[13].default,o=vn(s,t,t[12],null);let a=[{href:t[0]},t[2],t[1]],c={};for(let u=0;u<a.length;u+=1)c=fe(c,a[u]);return{c(){e=je("a"),o&&o.c(),Xn(e,c)},m(u,l){D(u,e,l),o&&o.m(e,null),n=!0,r||(i=ks(e,"click",t[4]),r=!0)},p(u,[l]){o&&o.p&&(!n||l&4096)&&bn(o,s,u,u[12],n?yn(s,u[12],l,null):In(u[12]),null),Xn(e,c=Kr(a,[(!n||l&1)&&{href:u[0]},l&4&&u[2],l&2&&u[1]]))},i(u){n||(L(o,u),n=!0)},o(u){W(o,u),n=!1},d(u){u&&P(e),o&&o.d(u),r=!1,i()}}}function jo(t,e,n){let r,i,s,o,a;const c=["to","replace","state","getProps"];let u=_t(e,c),l,{$$slots:d={},$$scope:h}=e,{to:f}=e,{replace:_=!1}=e,{state:T={}}=e,{getProps:g=null}=e;Xe(An,e);const b=fi();F(t,b,v=>n(11,l=v));const w=Ds(),S=gi(),{navigate:E}=pi();function U(v){w("click",v),xs(v)&&(v.preventDefault(),E(r,{state:T,replace:s||_}))}return t.$$set=v=>{n(18,e=fe(fe({},e),gt(v))),n(17,u=_t(e,c)),"to"in v&&n(5,f=v.to),"replace"in v&&n(6,_=v.replace),"state"in v&&n(7,T=v.state),"getProps"in v&&n(8,g=v.getProps),"$$scope"in v&&n(12,h=v.$$scope)},t.$$.update=()=>{t.$$.dirty&2080&&n(0,r=S(f,l)),t.$$.dirty&2049&&n(10,i=ln(l.pathname,r)),t.$$.dirty&2049&&n(9,s=r===l.pathname),t.$$.dirty&512&&n(2,o=s?{"aria-current":"page"}:{}),n(1,a=(()=>{if(Jr(g)){const v=g({location:l,href:r,isPartiallyCurrent:i,isCurrent:s});return Z(Z({},u),v)}return u})())},e=gt(e),[r,a,o,b,U,f,_,T,g,s,i,l,h,d]}class od extends kn{constructor(e){super();Rn(this,e,jo,Ho,Ot,{to:5,replace:6,state:7,getProps:8})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 *//**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _i=function(t){const e=[];let n=0;for(let r=0;r<t.length;r++){let i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=i&63|128):(i&64512)===55296&&r+1<t.length&&(t.charCodeAt(r+1)&64512)===56320?(i=65536+((i&1023)<<10)+(t.charCodeAt(++r)&1023),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=i&63|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=i&63|128)}return e},Vo=function(t){const e=[];let n=0,r=0;for(;n<t.length;){const i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=t[n++];e[r++]=String.fromCharCode((i&31)<<6|s&63)}else if(i>239&&i<365){const s=t[n++],o=t[n++],a=t[n++],c=((i&7)<<18|(s&63)<<12|(o&63)<<6|a&63)-65536;e[r++]=String.fromCharCode(55296+(c>>10)),e[r++]=String.fromCharCode(56320+(c&1023))}else{const s=t[n++],o=t[n++];e[r++]=String.fromCharCode((i&15)<<12|(s&63)<<6|o&63)}}return e.join("")},vi={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<t.length;i+=3){const s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,d=(s&3)<<4|a>>4;let h=(a&15)<<2|u>>6,f=u&63;c||(f=64,o||(h=64)),r.push(n[l],n[d],n[h],n[f])}return r.join("")},encodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(_i(t),e)},decodeString(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):Vo(this.decodeStringToByteArray(t,e))},decodeStringToByteArray(t,e){this.init_();const n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<t.length;){const s=n[t.charAt(i++)],a=i<t.length?n[t.charAt(i)]:0;++i;const u=i<t.length?n[t.charAt(i)]:64;++i;const d=i<t.length?n[t.charAt(i)]:64;if(++i,s==null||a==null||u==null||d==null)throw Error();const h=s<<2|a>>4;if(r.push(h),u!==64){const f=a<<4&240|u>>2;if(r.push(f),d!==64){const _=u<<6&192|d;r.push(_)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},Wo=function(t){const e=_i(t);return vi.encodeByteArray(e,!0)},yi=function(t){return Wo(t).replace(/\./g,"")},zo=function(t){try{return vi.decodeString(t,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $o{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,n)=>{this.resolve=e,this.reject=n})}wrapCallback(e){return(n,r)=>{n?this.reject(n):this.resolve(r),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(n):e(n,r))}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(){return typeof navigator!="undefined"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function qo(){return typeof window!="undefined"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(k())}function Go(){const t=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof t=="object"&&t.id!==void 0}function Ko(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function Jo(){const t=k();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function Yo(){return typeof indexedDB=="object"}function Xo(){return new Promise((t,e)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),t(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var s;e(((s=i.error)===null||s===void 0?void 0:s.message)||"")}}catch(n){e(n)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qo="FirebaseError";class Ce extends Error{constructor(e,n,r){super(n);this.code=e,this.customData=r,this.name=Qo,Object.setPrototypeOf(this,Ce.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,Qe.prototype.create)}}class Qe{constructor(e,n,r){this.service=e,this.serviceName=n,this.errors=r}create(e,...n){const r=n[0]||{},i=`${this.service}/${e}`,s=this.errors[e],o=s?Zo(s,r):"Error",a=`${this.serviceName}: ${o} (${i}).`;return new Ce(i,a,r)}}function Zo(t,e){return t.replace(ea,(n,r)=>{const i=e[r];return i!=null?String(i):`<${r}?>`})}const ea=/\{\$([^}]+)}/g;function ta(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}function Et(t,e){if(t===e)return!0;const n=Object.keys(t),r=Object.keys(e);for(const i of n){if(!r.includes(i))return!1;const s=t[i],o=e[i];if(lr(s)&&lr(o)){if(!Et(s,o))return!1}else if(s!==o)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function lr(t){return t!==null&&typeof t=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ze(t){const e=[];for(const[n,r]of Object.entries(t))Array.isArray(r)?r.forEach(i=>{e.push(encodeURIComponent(n)+"="+encodeURIComponent(i))}):e.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return e.length?"&"+e.join("&"):""}function Me(t){const e={};return t.replace(/^\?/,"").split("&").forEach(r=>{if(r){const[i,s]=r.split("=");e[decodeURIComponent(i)]=decodeURIComponent(s)}}),e}function Ue(t){const e=t.indexOf("?");if(!e)return"";const n=t.indexOf("#",e);return t.substring(e,n>0?n:void 0)}function na(t,e){const n=new ra(t,e);return n.subscribe.bind(n)}class ra{constructor(e,n){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=n,this.task.then(()=>{e(this)}).catch(r=>{this.error(r)})}next(e){this.forEachObserver(n=>{n.next(e)})}error(e){this.forEachObserver(n=>{n.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,n,r){let i;if(e===void 0&&n===void 0&&r===void 0)throw new Error("Missing Observer.");ia(e,["next","error","complete"])?i=e:i={next:e,error:n,complete:r},i.next===void 0&&(i.next=Kt),i.error===void 0&&(i.error=Kt),i.complete===void 0&&(i.complete=Kt);const s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?i.error(this.finalError):i.complete()}catch{}}),this.observers.push(i),s}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let n=0;n<this.observers.length;n++)this.sendOne(n,e)}sendOne(e,n){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{n(this.observers[e])}catch(r){typeof console!="undefined"&&console.error&&console.error(r)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function ia(t,e){if(typeof t!="object"||t===null)return!1;for(const n of e)if(n in t&&typeof t[n]=="function")return!0;return!1}function Kt(){}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pe(t){return t&&t._delegate?t._delegate:t}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xe(t,e){return new Promise((n,r)=>{t.onsuccess=i=>{n(i.target.result)},t.onerror=i=>{var s;r(`${e}: ${(s=i.target.error)===null||s===void 0?void 0:s.message}`)}})}class dr{constructor(e){this._db=e,this.objectStoreNames=this._db.objectStoreNames}transaction(e,n){return new bi(this._db.transaction.call(this._db,e,n))}createObjectStore(e,n){return new Ii(this._db.createObjectStore(e,n))}close(){this._db.close()}}class bi{constructor(e){this._transaction=e,this.complete=new Promise((n,r)=>{this._transaction.oncomplete=function(){n()},this._transaction.onerror=()=>{r(this._transaction.error)},this._transaction.onabort=()=>{r(this._transaction.error)}})}objectStore(e){return new Ii(this._transaction.objectStore(e))}}class Ii{constructor(e){this._store=e}index(e){return new hr(this._store.index(e))}createIndex(e,n,r){return new hr(this._store.createIndex(e,n,r))}get(e){const n=this._store.get(e);return xe(n,"Error reading from IndexedDB")}put(e,n){const r=this._store.put(e,n);return xe(r,"Error writing to IndexedDB")}delete(e){const n=this._store.delete(e);return xe(n,"Error deleting from IndexedDB")}clear(){const e=this._store.clear();return xe(e,"Error clearing IndexedDB object store")}}class hr{constructor(e){this._index=e}get(e){const n=this._index.get(e);return xe(n,"Error reading from IndexedDB")}}function sa(t,e,n){return new Promise((r,i)=>{try{const s=indexedDB.open(t,e);s.onsuccess=o=>{r(new dr(o.target.result))},s.onerror=o=>{var a;i(`Error opening indexedDB: ${(a=o.target.error)===null||a===void 0?void 0:a.message}`)},s.onupgradeneeded=o=>{n(new dr(s.result),o.oldVersion,o.newVersion,new bi(s.transaction))}}catch(s){i(`Error opening indexedDB: ${s.message}`)}})}class Re{constructor(e,n,r){this.name=e,this.instanceFactory=n,this.type=r,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ue="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oa{constructor(e,n){this.name=e,this.container=n,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const n=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(n)){const r=new $o;if(this.instancesDeferred.set(n,r),this.isInitialized(n)||this.shouldAutoInitialize())try{const i=this.getOrInitializeService({instanceIdentifier:n});i&&r.resolve(i)}catch{}}return this.instancesDeferred.get(n).promise}getImmediate(e){var n;const r=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),i=(n=e==null?void 0:e.optional)!==null&&n!==void 0?n:!1;if(this.isInitialized(r)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:r})}catch(s){if(i)return null;throw s}else{if(i)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(ca(e))try{this.getOrInitializeService({instanceIdentifier:ue})}catch{}for(const[n,r]of this.instancesDeferred.entries()){const i=this.normalizeInstanceIdentifier(n);try{const s=this.getOrInitializeService({instanceIdentifier:i});r.resolve(s)}catch{}}}}clearInstance(e=ue){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(n=>"INTERNAL"in n).map(n=>n.INTERNAL.delete()),...e.filter(n=>"_delete"in n).map(n=>n._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=ue){return this.instances.has(e)}getOptions(e=ue){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:n={}}=e,r=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(r))throw Error(`${this.name}(${r}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const i=this.getOrInitializeService({instanceIdentifier:r,options:n});for(const[s,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(s);r===a&&o.resolve(i)}return i}onInit(e,n){var r;const i=this.normalizeInstanceIdentifier(n),s=(r=this.onInitCallbacks.get(i))!==null&&r!==void 0?r:new Set;s.add(e),this.onInitCallbacks.set(i,s);const o=this.instances.get(i);return o&&e(o,i),()=>{s.delete(e)}}invokeOnInitCallbacks(e,n){const r=this.onInitCallbacks.get(n);if(!!r)for(const i of r)try{i(e,n)}catch{}}getOrInitializeService({instanceIdentifier:e,options:n={}}){let r=this.instances.get(e);if(!r&&this.component&&(r=this.component.instanceFactory(this.container,{instanceIdentifier:aa(e),options:n}),this.instances.set(e,r),this.instancesOptions.set(e,n),this.invokeOnInitCallbacks(r,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,r)}catch{}return r||null}normalizeInstanceIdentifier(e=ue){return this.component?this.component.multipleInstances?e:ue:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function aa(t){return t===ue?void 0:t}function ca(t){return t.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ua{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const n=this.getProvider(e.name);if(n.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);n.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const n=new oa(e,this);return this.providers.set(e,n),n}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var I;(function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"})(I||(I={}));const la={debug:I.DEBUG,verbose:I.VERBOSE,info:I.INFO,warn:I.WARN,error:I.ERROR,silent:I.SILENT},da=I.INFO,ha={[I.DEBUG]:"log",[I.VERBOSE]:"log",[I.INFO]:"info",[I.WARN]:"warn",[I.ERROR]:"error"},fa=(t,e,...n)=>{if(e<t.logLevel)return;const r=new Date().toISOString(),i=ha[e];if(i)console[i](`[${r}]  ${t.name}:`,...n);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ei{constructor(e){this.name=e,this._logLevel=da,this._logHandler=fa,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in I))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?la[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,I.DEBUG,...e),this._logHandler(this,I.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,I.VERBOSE,...e),this._logHandler(this,I.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,I.INFO,...e),this._logHandler(this,I.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,I.WARN,...e),this._logHandler(this,I.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,I.ERROR,...e),this._logHandler(this,I.ERROR,...e)}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pa{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(n=>{if(ma(n)){const r=n.getImmediate();return`${r.library}/${r.version}`}else return null}).filter(n=>n).join(" ")}}function ma(t){const e=t.getComponent();return(e==null?void 0:e.type)==="VERSION"}const dn="@firebase/app",fr="0.7.19";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pn=new Ei("@firebase/app"),ga="@firebase/app-compat",_a="@firebase/analytics-compat",va="@firebase/analytics",ya="@firebase/app-check-compat",ba="@firebase/app-check",Ia="@firebase/auth",Ea="@firebase/auth-compat",wa="@firebase/database",Ta="@firebase/database-compat",Sa="@firebase/functions",Ra="@firebase/functions-compat",ka="@firebase/installations",Oa="@firebase/installations-compat",Aa="@firebase/messaging",Ca="@firebase/messaging-compat",Pa="@firebase/performance",Na="@firebase/performance-compat",Da="@firebase/remote-config",La="@firebase/remote-config-compat",Ma="@firebase/storage",Ua="@firebase/storage-compat",xa="@firebase/firestore",Ba="@firebase/firestore-compat",Fa="firebase",Ha="9.6.9";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wi="[DEFAULT]",ja={[dn]:"fire-core",[ga]:"fire-core-compat",[va]:"fire-analytics",[_a]:"fire-analytics-compat",[ba]:"fire-app-check",[ya]:"fire-app-check-compat",[Ia]:"fire-auth",[Ea]:"fire-auth-compat",[wa]:"fire-rtdb",[Ta]:"fire-rtdb-compat",[Sa]:"fire-fn",[Ra]:"fire-fn-compat",[ka]:"fire-iid",[Oa]:"fire-iid-compat",[Aa]:"fire-fcm",[Ca]:"fire-fcm-compat",[Pa]:"fire-perf",[Na]:"fire-perf-compat",[Da]:"fire-rc",[La]:"fire-rc-compat",[Ma]:"fire-gcs",[Ua]:"fire-gcs-compat",[xa]:"fire-fst",[Ba]:"fire-fst-compat","fire-js":"fire-js",[Fa]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wt=new Map,hn=new Map;function Va(t,e){try{t.container.addComponent(e)}catch(n){Pn.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function We(t){const e=t.name;if(hn.has(e))return Pn.debug(`There were multiple attempts to register component ${e}.`),!1;hn.set(e,t);for(const n of wt.values())Va(n,t);return!0}function Ti(t,e){const n=t.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),t.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wa={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},me=new Qe("app","Firebase",Wa);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e,n,r){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},n),this._name=n.name,this._automaticDataCollectionEnabled=n.automaticDataCollectionEnabled,this._container=r,this.container.addComponent(new Re("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw me.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ct=Ha;function ad(t,e={}){typeof e!="object"&&(e={name:e});const n=Object.assign({name:wi,automaticDataCollectionEnabled:!1},e),r=n.name;if(typeof r!="string"||!r)throw me.create("bad-app-name",{appName:String(r)});const i=wt.get(r);if(i){if(Et(t,i.options)&&Et(n,i.config))return i;throw me.create("duplicate-app",{appName:r})}const s=new ua(r);for(const a of hn.values())s.addComponent(a);const o=new za(t,n,s);return wt.set(r,o),o}function $a(t=wi){const e=wt.get(t);if(!e)throw me.create("no-app",{appName:t});return e}function Ie(t,e,n){var r;let i=(r=ja[t])!==null&&r!==void 0?r:t;n&&(i+=`-${n}`);const s=i.match(/\s|\//),o=e.match(/\s|\//);if(s||o){const a=[`Unable to register library "${i}" with version "${e}":`];s&&a.push(`library name "${i}" contains illegal characters (whitespace or "/")`),s&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),Pn.warn(a.join(" "));return}We(new Re(`${i}-version`,()=>({library:i,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qa="firebase-heartbeat-database",Ga=1,ze="firebase-heartbeat-store";let Jt=null;function Si(){return Jt||(Jt=sa(qa,Ga,(t,e)=>{switch(e){case 0:t.createObjectStore(ze)}}).catch(t=>{throw me.create("storage-open",{originalErrorMessage:t.message})})),Jt}async function Ka(t){try{return(await Si()).transaction(ze).objectStore(ze).get(Ri(t))}catch(e){throw me.create("storage-get",{originalErrorMessage:e.message})}}async function pr(t,e){try{const r=(await Si()).transaction(ze,"readwrite");return await r.objectStore(ze).put(e,Ri(t)),r.complete}catch(n){throw me.create("storage-set",{originalErrorMessage:n.message})}}function Ri(t){return`${t.name}!${t.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ja=1024,Ya=30*24*60*60*1e3;class Xa{constructor(e){this.container=e,this._heartbeatsCache=null;const n=this.container.getProvider("app").getImmediate();this._storage=new Za(n),this._heartbeatsCachePromise=this._storage.read().then(r=>(this._heartbeatsCache=r,r))}async triggerHeartbeat(){const n=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),r=mr();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===r||this._heartbeatsCache.heartbeats.some(i=>i.date===r)))return this._heartbeatsCache.heartbeats.push({date:r,agent:n}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(i=>{const s=new Date(i.date).valueOf();return Date.now()-s<=Ya}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=mr(),{heartbeatsToSend:n,unsentEntries:r}=Qa(this._heartbeatsCache.heartbeats),i=yi(JSON.stringify({version:2,heartbeats:n}));return this._heartbeatsCache.lastSentHeartbeatDate=e,r.length>0?(this._heartbeatsCache.heartbeats=r,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),i}}function mr(){return new Date().toISOString().substring(0,10)}function Qa(t,e=Ja){const n=[];let r=t.slice();for(const i of t){const s=n.find(o=>o.agent===i.agent);if(s){if(s.dates.push(i.date),gr(n)>e){s.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),gr(n)>e){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class Za{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return Yo()?Xo().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await Ka(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var n;if(await this._canUseIndexedDBPromise){const i=await this.read();return pr(this.app,{lastSentHeartbeatDate:(n=e.lastSentHeartbeatDate)!==null&&n!==void 0?n:i.lastSentHeartbeatDate,heartbeats:[...i.heartbeats,...e.heartbeats]})}else return}}function gr(t){return yi(JSON.stringify({version:2,heartbeats:t})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ec(t){We(new Re("platform-logger",e=>new pa(e),"PRIVATE")),We(new Re("heartbeat",e=>new Xa(e),"PRIVATE")),Ie(dn,fr,t),Ie(dn,fr,"esm2017"),Ie("fire-js","")}ec("");var tc="firebase",nc="9.6.9";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(tc,nc,"app");/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */function Nn(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(t!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(t,r[i])&&(n[r[i]]=t[r[i]]);return n}function ki(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const rc=ki,Oi=new Qe("auth","Firebase",ki());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _r=new Ei("@firebase/auth");function dt(t,...e){_r.logLevel<=I.ERROR&&_r.error(`Auth (${Ct}): ${t}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function M(t,...e){throw Dn(t,...e)}function j(t,...e){return Dn(t,...e)}function Ai(t,e,n){const r=Object.assign(Object.assign({},rc()),{[e]:n});return new Qe("auth","Firebase",r).create(e,{appName:t.name})}function ic(t,e,n){const r=n;if(!(e instanceof r))throw r.name!==e.constructor.name&&M(t,"argument-error"),Ai(t,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Dn(t,...e){if(typeof t!="string"){const n=e[0],r=[...e.slice(1)];return r[0]&&(r[0].appName=t.name),t._errorFactory.create(n,...r)}return Oi.create(t,...e)}function p(t,e,...n){if(!t)throw Dn(e,...n)}function K(t){const e="INTERNAL ASSERTION FAILED: "+t;throw dt(e),new Error(e)}function Y(t,e){t||K(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vr=new Map;function J(t){Y(t instanceof Function,"Expected a class definition");let e=vr.get(t);return e?(Y(e instanceof t,"Instance stored in cache mismatched with class"),e):(e=new t,vr.set(t,e),e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sc(t,e){const n=Ti(t,"auth");if(n.isInitialized()){const i=n.getImmediate(),s=n.getOptions();if(Et(s,e!=null?e:{}))return i;M(i,"already-initialized")}return n.initialize({options:e})}function oc(t,e){const n=(e==null?void 0:e.persistence)||[],r=(Array.isArray(n)?n:[n]).map(J);e!=null&&e.errorMap&&t._updateErrorMap(e.errorMap),t._initializeWithPersistence(r,e==null?void 0:e.popupRedirectResolver)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function fn(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.href)||""}function ac(){return yr()==="http:"||yr()==="https:"}function yr(){var t;return typeof self!="undefined"&&((t=self.location)===null||t===void 0?void 0:t.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function cc(){return typeof navigator!="undefined"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(ac()||Go()||"connection"in navigator)?navigator.onLine:!0}function uc(){if(typeof navigator=="undefined")return null;const t=navigator;return t.languages&&t.languages[0]||t.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class et{constructor(e,n){this.shortDelay=e,this.longDelay=n,Y(n>e,"Short delay should be less than long delay!"),this.isMobile=qo()||Ko()}get(){return cc()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ln(t,e){Y(t.emulator,"Emulator should always be set here");const{url:n}=t.emulator;return e?`${n}${e.startsWith("/")?e.slice(1):e}`:n}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ci{static initialize(e,n,r){this.fetchImpl=e,n&&(this.headersImpl=n),r&&(this.responseImpl=r)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self!="undefined"&&"fetch"in self)return self.fetch;K("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self!="undefined"&&"Headers"in self)return self.Headers;K("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self!="undefined"&&"Response"in self)return self.Response;K("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lc={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"internal-error",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const dc=new et(3e4,6e4);function Pt(t,e){return t.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:t.tenantId}):e}async function tt(t,e,n,r,i={}){return Pi(t,i,async()=>{let s={},o={};r&&(e==="GET"?o=r:s={body:JSON.stringify(r)});const a=Ze(Object.assign({key:t.config.apiKey},o)).slice(1),c=await t._getAdditionalHeaders();return c["Content-Type"]="application/json",t.languageCode&&(c["X-Firebase-Locale"]=t.languageCode),Ci.fetch()(Ni(t,t.config.apiHost,n,a),Object.assign({method:e,headers:c,referrerPolicy:"no-referrer"},s))})}async function Pi(t,e,n){t._canInitEmulator=!1;const r=Object.assign(Object.assign({},lc),e);try{const i=new hc(t),s=await Promise.race([n(),i.promise]);i.clearNetworkTimeout();const o=await s.json();if("needConfirmation"in o)throw Yt(t,"account-exists-with-different-credential",o);if(s.ok&&!("errorMessage"in o))return o;{const a=s.ok?o.errorMessage:o.error.message,[c,u]=a.split(" : ");if(c==="FEDERATED_USER_ID_ALREADY_LINKED")throw Yt(t,"credential-already-in-use",o);if(c==="EMAIL_EXISTS")throw Yt(t,"email-already-in-use",o);const l=r[c]||c.toLowerCase().replace(/[_\s]+/g,"-");if(u)throw Ai(t,l,u);M(t,l)}}catch(i){if(i instanceof Ce)throw i;M(t,"network-request-failed")}}async function Nt(t,e,n,r,i={}){const s=await tt(t,e,n,r,i);return"mfaPendingCredential"in s&&M(t,"multi-factor-auth-required",{_serverResponse:s}),s}function Ni(t,e,n,r){const i=`${e}${n}?${r}`;return t.config.emulator?Ln(t.config,i):`${t.config.apiScheme}://${i}`}class hc{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((n,r)=>{this.timer=setTimeout(()=>r(j(this.auth,"network-request-failed")),dc.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Yt(t,e,n){const r={appName:t.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=j(t,e,r);return i.customData._tokenResponse=n,i}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function fc(t,e){return tt(t,"POST","/v1/accounts:delete",e)}async function pc(t,e){return tt(t,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function He(t){if(!!t)try{const e=new Date(Number(t));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function mc(t,e=!1){const n=Pe(t),r=await n.getIdToken(e),i=Mn(r);p(i&&i.exp&&i.auth_time&&i.iat,n.auth,"internal-error");const s=typeof i.firebase=="object"?i.firebase:void 0,o=s==null?void 0:s.sign_in_provider;return{claims:i,token:r,authTime:He(Xt(i.auth_time)),issuedAtTime:He(Xt(i.iat)),expirationTime:He(Xt(i.exp)),signInProvider:o||null,signInSecondFactor:(s==null?void 0:s.sign_in_second_factor)||null}}function Xt(t){return Number(t)*1e3}function Mn(t){const[e,n,r]=t.split(".");if(e===void 0||n===void 0||r===void 0)return dt("JWT malformed, contained fewer than 3 sections"),null;try{const i=zo(n);return i?JSON.parse(i):(dt("Failed to decode base64 JWT payload"),null)}catch(i){return dt("Caught error parsing JWT payload as JSON",i),null}}function gc(t){const e=Mn(t);return p(e,"internal-error"),p(typeof e.exp!="undefined","internal-error"),p(typeof e.iat!="undefined","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function $e(t,e,n=!1){if(n)return e;try{return await e}catch(r){throw r instanceof Ce&&_c(r)&&t.auth.currentUser===t&&await t.auth.signOut(),r}}function _c({code:t}){return t==="auth/user-disabled"||t==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){!this.isRunning||(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var n;if(e){const r=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),r}else{this.errorBackoff=3e4;const i=((n=this.user.stsTokenManager.expirationTime)!==null&&n!==void 0?n:0)-Date.now()-3e5;return Math.max(0,i)}}schedule(e=!1){if(!this.isRunning)return;const n=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},n)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){e.code==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Di{constructor(e,n){this.createdAt=e,this.lastLoginAt=n,this._initializeTime()}_initializeTime(){this.lastSignInTime=He(this.lastLoginAt),this.creationTime=He(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Tt(t){var e;const n=t.auth,r=await t.getIdToken(),i=await $e(t,pc(n,{idToken:r}));p(i==null?void 0:i.users.length,n,"internal-error");const s=i.users[0];t._notifyReloadListener(s);const o=!((e=s.providerUserInfo)===null||e===void 0)&&e.length?Ic(s.providerUserInfo):[],a=bc(t.providerData,o),c=t.isAnonymous,u=!(t.email&&s.passwordHash)&&!(a!=null&&a.length),l=c?u:!1,d={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Di(s.createdAt,s.lastLoginAt),isAnonymous:l};Object.assign(t,d)}async function yc(t){const e=Pe(t);await Tt(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function bc(t,e){return[...t.filter(r=>!e.some(i=>i.providerId===r.providerId)),...e]}function Ic(t){return t.map(e=>{var{providerId:n}=e,r=Nn(e,["providerId"]);return{providerId:n,uid:r.rawId||"",displayName:r.displayName||null,email:r.email||null,phoneNumber:r.phoneNumber||null,photoURL:r.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ec(t,e){const n=await Pi(t,{},async()=>{const r=Ze({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:i,apiKey:s}=t.config,o=Ni(t,i,"/v1/token",`key=${s}`),a=await t._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",Ci.fetch()(o,{method:"POST",headers:a,body:r})});return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){p(e.idToken,"internal-error"),p(typeof e.idToken!="undefined","internal-error"),p(typeof e.refreshToken!="undefined","internal-error");const n="expiresIn"in e&&typeof e.expiresIn!="undefined"?Number(e.expiresIn):gc(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,n)}async getToken(e,n=!1){return p(!this.accessToken||this.refreshToken,e,"user-token-expired"),!n&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,n){const{accessToken:r,refreshToken:i,expiresIn:s}=await Ec(e,n);this.updateTokensAndExpiration(r,i,Number(s))}updateTokensAndExpiration(e,n,r){this.refreshToken=n||null,this.accessToken=e||null,this.expirationTime=Date.now()+r*1e3}static fromJSON(e,n){const{refreshToken:r,accessToken:i,expirationTime:s}=n,o=new qe;return r&&(p(typeof r=="string","internal-error",{appName:e}),o.refreshToken=r),i&&(p(typeof i=="string","internal-error",{appName:e}),o.accessToken=i),s&&(p(typeof s=="number","internal-error",{appName:e}),o.expirationTime=s),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new qe,this.toJSON())}_performRefresh(){return K("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ee(t,e){p(typeof t=="string"||typeof t=="undefined","internal-error",{appName:e})}class he{constructor(e){var{uid:n,auth:r,stsTokenManager:i}=e,s=Nn(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new vc(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=n,this.auth=r,this.stsTokenManager=i,this.accessToken=i.accessToken,this.displayName=s.displayName||null,this.email=s.email||null,this.emailVerified=s.emailVerified||!1,this.phoneNumber=s.phoneNumber||null,this.photoURL=s.photoURL||null,this.isAnonymous=s.isAnonymous||!1,this.tenantId=s.tenantId||null,this.providerData=s.providerData?[...s.providerData]:[],this.metadata=new Di(s.createdAt||void 0,s.lastLoginAt||void 0)}async getIdToken(e){const n=await $e(this,this.stsTokenManager.getToken(this.auth,e));return p(n,this.auth,"internal-error"),this.accessToken!==n&&(this.accessToken=n,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),n}getIdTokenResult(e){return mc(this,e)}reload(){return yc(this)}_assign(e){this!==e&&(p(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(n=>Object.assign({},n)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new he(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){p(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,n=!1){let r=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),r=!0),n&&await Tt(this),await this.auth._persistUserIfCurrent(this),r&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await $e(this,fc(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,n){var r,i,s,o,a,c,u,l;const d=(r=n.displayName)!==null&&r!==void 0?r:void 0,h=(i=n.email)!==null&&i!==void 0?i:void 0,f=(s=n.phoneNumber)!==null&&s!==void 0?s:void 0,_=(o=n.photoURL)!==null&&o!==void 0?o:void 0,T=(a=n.tenantId)!==null&&a!==void 0?a:void 0,g=(c=n._redirectEventId)!==null&&c!==void 0?c:void 0,b=(u=n.createdAt)!==null&&u!==void 0?u:void 0,w=(l=n.lastLoginAt)!==null&&l!==void 0?l:void 0,{uid:S,emailVerified:E,isAnonymous:U,providerData:v,stsTokenManager:N}=n;p(S&&N,e,"internal-error");const q=qe.fromJSON(this.name,N);p(typeof S=="string",e,"internal-error"),ee(d,e.name),ee(h,e.name),p(typeof E=="boolean",e,"internal-error"),p(typeof U=="boolean",e,"internal-error"),ee(f,e.name),ee(_,e.name),ee(T,e.name),ee(g,e.name),ee(b,e.name),ee(w,e.name);const A=new he({uid:S,auth:e,email:h,emailVerified:E,displayName:d,isAnonymous:U,photoURL:_,phoneNumber:f,tenantId:T,stsTokenManager:q,createdAt:b,lastLoginAt:w});return v&&Array.isArray(v)&&(A.providerData=v.map(_e=>Object.assign({},_e))),g&&(A._redirectEventId=g),A}static async _fromIdTokenResponse(e,n,r=!1){const i=new qe;i.updateFromServerResponse(n);const s=new he({uid:n.localId,auth:e,stsTokenManager:i,isAnonymous:r});return await Tt(s),s}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Li{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,n){this.storage[e]=n}async _get(e){const n=this.storage[e];return n===void 0?null:n}async _remove(e){delete this.storage[e]}_addListener(e,n){}_removeListener(e,n){}}Li.type="NONE";const br=Li;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t,e,n){return`firebase:${t}:${e}:${n}`}class Ee{constructor(e,n,r){this.persistence=e,this.auth=n,this.userKey=r;const{config:i,name:s}=this.auth;this.fullUserKey=ht(this.userKey,i.apiKey,s),this.fullPersistenceKey=ht("persistence",i.apiKey,s),this.boundEventHandler=n._onStorageEvent.bind(n),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?he._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const n=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,n)return this.setCurrentUser(n)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,n,r="authUser"){if(!n.length)return new Ee(J(br),e,r);const i=(await Promise.all(n.map(async u=>{if(await u._isAvailable())return u}))).filter(u=>u);let s=i[0]||J(br);const o=ht(r,e.config.apiKey,e.name);let a=null;for(const u of n)try{const l=await u._get(o);if(l){const d=he._fromJSON(e,l);u!==s&&(a=d),s=u;break}}catch{}const c=i.filter(u=>u._shouldAllowMigration);return!s._shouldAllowMigration||!c.length?new Ee(s,e,r):(s=c[0],a&&await s._set(o,a.toJSON()),await Promise.all(n.map(async u=>{if(u!==s)try{await u._remove(o)}catch{}})),new Ee(s,e,r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ir(t){const e=t.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(xi(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Mi(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Fi(e))return"Blackberry";if(Hi(e))return"Webos";if(Un(e))return"Safari";if((e.includes("chrome/")||Ui(e))&&!e.includes("edge/"))return"Chrome";if(Bi(e))return"Android";{const n=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,r=t.match(n);if((r==null?void 0:r.length)===2)return r[1]}return"Other"}function Mi(t=k()){return/firefox\//i.test(t)}function Un(t=k()){const e=t.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Ui(t=k()){return/crios\//i.test(t)}function xi(t=k()){return/iemobile/i.test(t)}function Bi(t=k()){return/android/i.test(t)}function Fi(t=k()){return/blackberry/i.test(t)}function Hi(t=k()){return/webos/i.test(t)}function Dt(t=k()){return/iphone|ipad|ipod/i.test(t)}function wc(t=k()){var e;return Dt(t)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Tc(){return Jo()&&document.documentMode===10}function ji(t=k()){return Dt(t)||Bi(t)||Hi(t)||Fi(t)||/windows phone/i.test(t)||xi(t)}function Sc(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vi(t,e=[]){let n;switch(t){case"Browser":n=Ir(k());break;case"Worker":n=`${Ir(k())}-${t}`;break;default:n=t}const r=e.length?e.join(","):"FirebaseCore-web";return`${n}/JsCore/${Ct}/${r}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rc{constructor(e,n,r){this.app=e,this.heartbeatServiceProvider=n,this.config=r,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Er(this),this.idTokenSubscription=new Er(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Oi,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=r.sdkClientVersion}_initializeWithPersistence(e,n){return n&&(this._popupRedirectResolver=J(n)),this._initializationPromise=this.queue(async()=>{var r,i;if(!this._deleted&&(this.persistenceManager=await Ee.create(this,e),!this._deleted)){if(!((r=this._popupRedirectResolver)===null||r===void 0)&&r._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(n),this.lastNotifiedUid=((i=this.currentUser)===null||i===void 0?void 0:i.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e)}}async initializeCurrentUser(e){var n;let r=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const i=(n=this.redirectUser)===null||n===void 0?void 0:n._redirectEventId,s=r==null?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);(!i||i===s)&&(o==null?void 0:o.user)&&(r=o.user)}return r?r._redirectEventId?(p(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)):this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let n=null;try{n=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return n}async reloadAndSetCurrentUserOrClear(e){try{await Tt(e)}catch(n){if(n.code!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=uc()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const n=e?Pe(e):null;return n&&p(n.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(n&&n._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&p(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(J(e))})}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new Qe("auth","Firebase",e())}onAuthStateChanged(e,n,r){return this.registerStateListener(this.authStateSubscription,e,n,r)}onIdTokenChanged(e,n,r){return this.registerStateListener(this.idTokenSubscription,e,n,r)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,n){const r=await this.getOrInitRedirectPersistenceManager(n);return e===null?r.removeCurrentUser():r.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const n=e&&J(e)||this._popupRedirectResolver;p(n,this,"argument-error"),this.redirectPersistenceManager=await Ee.create(this,[J(n._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var n,r;return this._isInitialized&&await this.queue(async()=>{}),((n=this._currentUser)===null||n===void 0?void 0:n._redirectEventId)===e?this._currentUser:((r=this.redirectUser)===null||r===void 0?void 0:r._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,n;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const r=(n=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&n!==void 0?n:null;this.lastNotifiedUid!==r&&(this.lastNotifiedUid=r,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,n,r,i){if(this._deleted)return()=>{};const s=typeof n=="function"?n:n.next.bind(n),o=this._isInitialized?Promise.resolve():this._initializationPromise;return p(o,this,"internal-error"),o.then(()=>s(this.currentUser)),typeof n=="function"?e.addObserver(n,r,i):e.addObserver(n)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return p(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Vi(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const n={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(n["X-Firebase-gmpid"]=this.app.options.appId);const r=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());return r&&(n["X-Firebase-Client"]=r),n}}function Lt(t){return Pe(t)}class Er{constructor(e){this.auth=e,this.observer=null,this.addObserver=na(n=>this.observer=n)}get next(){return p(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xn{constructor(e,n){this.providerId=e,this.signInMethod=n}toJSON(){return K("not implemented")}_getIdTokenResponse(e){return K("not implemented")}_linkToIdToken(e,n){return K("not implemented")}_getReauthenticationResolver(e){return K("not implemented")}}async function kc(t,e){return tt(t,"POST","/v1/accounts:update",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Oc(t,e){return Nt(t,"POST","/v1/accounts:signInWithPassword",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ac(t,e){return Nt(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}async function Cc(t,e){return Nt(t,"POST","/v1/accounts:signInWithEmailLink",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends xn{constructor(e,n,r,i=null){super("password",r);this._email=e,this._password=n,this._tenantId=i}static _fromEmailAndPassword(e,n){return new Ge(e,n,"password")}static _fromEmailAndCode(e,n,r=null){return new Ge(e,n,"emailLink",r)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e;if((n==null?void 0:n.email)&&(n==null?void 0:n.password)){if(n.signInMethod==="password")return this._fromEmailAndPassword(n.email,n.password);if(n.signInMethod==="emailLink")return this._fromEmailAndCode(n.email,n.password,n.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Oc(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ac(e,{email:this._email,oobCode:this._password});default:M(e,"internal-error")}}async _linkToIdToken(e,n){switch(this.signInMethod){case"password":return kc(e,{idToken:n,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Cc(e,{idToken:n,email:this._email,oobCode:this._password});default:M(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function we(t,e){return Nt(t,"POST","/v1/accounts:signInWithIdp",Pt(t,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Pc="http://localhost";class ge extends xn{constructor(){super(...arguments);this.pendingToken=null}static _fromParams(e){const n=new ge(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(n.idToken=e.idToken),e.accessToken&&(n.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(n.nonce=e.nonce),e.pendingToken&&(n.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(n.accessToken=e.oauthToken,n.secret=e.oauthTokenSecret):M("argument-error"),n}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const n=typeof e=="string"?JSON.parse(e):e,{providerId:r,signInMethod:i}=n,s=Nn(n,["providerId","signInMethod"]);if(!r||!i)return null;const o=new ge(r,i);return o.idToken=s.idToken||void 0,o.accessToken=s.accessToken||void 0,o.secret=s.secret,o.nonce=s.nonce,o.pendingToken=s.pendingToken||null,o}_getIdTokenResponse(e){const n=this.buildRequest();return we(e,n)}_linkToIdToken(e,n){const r=this.buildRequest();return r.idToken=n,we(e,r)}_getReauthenticationResolver(e){const n=this.buildRequest();return n.autoCreate=!1,we(e,n)}buildRequest(){const e={requestUri:Pc,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const n={};this.idToken&&(n.id_token=this.idToken),this.accessToken&&(n.access_token=this.accessToken),this.secret&&(n.oauth_token_secret=this.secret),n.providerId=this.providerId,this.nonce&&!this.pendingToken&&(n.nonce=this.nonce),e.postBody=Ze(n)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nc(t){switch(t){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function Dc(t){const e=Me(Ue(t)).link,n=e?Me(Ue(e)).deep_link_id:null,r=Me(Ue(t)).deep_link_id;return(r?Me(Ue(r)).link:null)||r||n||e||t}class Bn{constructor(e){var n,r,i,s,o,a;const c=Me(Ue(e)),u=(n=c.apiKey)!==null&&n!==void 0?n:null,l=(r=c.oobCode)!==null&&r!==void 0?r:null,d=Nc((i=c.mode)!==null&&i!==void 0?i:null);p(u&&l&&d,"argument-error"),this.apiKey=u,this.operation=d,this.code=l,this.continueUrl=(s=c.continueUrl)!==null&&s!==void 0?s:null,this.languageCode=(o=c.languageCode)!==null&&o!==void 0?o:null,this.tenantId=(a=c.tenantId)!==null&&a!==void 0?a:null}static parseLink(e){const n=Dc(e);try{return new Bn(n)}catch{return null}}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ne{constructor(){this.providerId=Ne.PROVIDER_ID}static credential(e,n){return Ge._fromEmailAndPassword(e,n)}static credentialWithLink(e,n){const r=Bn.parseLink(n);return p(r,"argument-error"),Ge._fromEmailAndCode(e,r.code,r.tenantId)}}Ne.PROVIDER_ID="password";Ne.EMAIL_PASSWORD_SIGN_IN_METHOD="password";Ne.EMAIL_LINK_SIGN_IN_METHOD="emailLink";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fn{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nt extends Fn{constructor(){super(...arguments);this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class te extends nt{constructor(){super("facebook.com")}static credential(e){return ge._fromParams({providerId:te.PROVIDER_ID,signInMethod:te.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return te.credentialFromTaggedObject(e)}static credentialFromError(e){return te.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return te.credential(e.oauthAccessToken)}catch{return null}}}te.FACEBOOK_SIGN_IN_METHOD="facebook.com";te.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ne extends nt{constructor(){super("google.com");this.addScope("profile")}static credential(e,n){return ge._fromParams({providerId:ne.PROVIDER_ID,signInMethod:ne.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:n})}static credentialFromResult(e){return ne.credentialFromTaggedObject(e)}static credentialFromError(e){return ne.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:n,oauthAccessToken:r}=e;if(!n&&!r)return null;try{return ne.credential(n,r)}catch{return null}}}ne.GOOGLE_SIGN_IN_METHOD="google.com";ne.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re extends nt{constructor(){super("github.com")}static credential(e){return ge._fromParams({providerId:re.PROVIDER_ID,signInMethod:re.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return re.credentialFromTaggedObject(e)}static credentialFromError(e){return re.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return re.credential(e.oauthAccessToken)}catch{return null}}}re.GITHUB_SIGN_IN_METHOD="github.com";re.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ie extends nt{constructor(){super("twitter.com")}static credential(e,n){return ge._fromParams({providerId:ie.PROVIDER_ID,signInMethod:ie.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:n})}static credentialFromResult(e){return ie.credentialFromTaggedObject(e)}static credentialFromError(e){return ie.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:n,oauthTokenSecret:r}=e;if(!n||!r)return null;try{return ie.credential(n,r)}catch{return null}}}ie.TWITTER_SIGN_IN_METHOD="twitter.com";ie.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,n,r,i=!1){const s=await he._fromIdTokenResponse(e,r,i),o=wr(r);return new ke({user:s,providerId:o,_tokenResponse:r,operationType:n})}static async _forOperation(e,n,r){await e._updateTokensIfNecessary(r,!0);const i=wr(r);return new ke({user:e,providerId:i,_tokenResponse:r,operationType:n})}}function wr(t){return t.providerId?t.providerId:"phoneNumber"in t?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class St extends Ce{constructor(e,n,r,i){var s;super(n.code,n.message);this.operationType=r,this.user=i,Object.setPrototypeOf(this,St.prototype),this.customData={appName:e.name,tenantId:(s=e.tenantId)!==null&&s!==void 0?s:void 0,_serverResponse:n.customData._serverResponse,operationType:r}}static _fromErrorAndOperation(e,n,r,i){return new St(e,n,r,i)}}function Wi(t,e,n,r){return(e==="reauthenticate"?n._getReauthenticationResolver(t):n._getIdTokenResponse(t)).catch(s=>{throw s.code==="auth/multi-factor-auth-required"?St._fromErrorAndOperation(t,s,e,r):s})}async function Lc(t,e,n=!1){const r=await $e(t,e._linkToIdToken(t.auth,await t.getIdToken()),n);return ke._forOperation(t,"link",r)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Mc(t,e,n=!1){const{auth:r}=t,i="reauthenticate";try{const s=await $e(t,Wi(r,i,e,t),n);p(s.idToken,r,"internal-error");const o=Mn(s.idToken);p(o,r,"internal-error");const{sub:a}=o;return p(t.uid===a,r,"user-mismatch"),ke._forOperation(t,i,s)}catch(s){throw(s==null?void 0:s.code)==="auth/user-not-found"&&M(r,"user-mismatch"),s}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zi(t,e,n=!1){const r="signIn",i=await Wi(t,r,e),s=await ke._fromIdTokenResponse(t,r,i);return n||await t._updateCurrentUser(s.user),s}async function Uc(t,e){return zi(Lt(t),e)}function cd(t,e,n){return Uc(Pe(t),Ne.credential(e,n))}function ud(t){return Pe(t).signOut()}const Rt="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $i{constructor(e,n){this.storageRetriever=e,this.type=n}_isAvailable(){try{return this.storage?(this.storage.setItem(Rt,"1"),this.storage.removeItem(Rt),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,n){return this.storage.setItem(e,JSON.stringify(n)),Promise.resolve()}_get(e){const n=this.storage.getItem(e);return Promise.resolve(n?JSON.parse(n):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xc(){const t=k();return Un(t)||Dt(t)}const Bc=1e3,Fc=10;class qi extends $i{constructor(){super(()=>window.localStorage,"LOCAL");this.boundEventHandler=(e,n)=>this.onStorageEvent(e,n),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=xc()&&Sc(),this.fallbackToPolling=ji(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const n of Object.keys(this.listeners)){const r=this.storage.getItem(n),i=this.localCache[n];r!==i&&e(n,i,r)}}onStorageEvent(e,n=!1){if(!e.key){this.forAllChangedKeys((o,a,c)=>{this.notifyListeners(o,c)});return}const r=e.key;if(n?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(r);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(r,e.newValue):this.storage.removeItem(r);else if(this.localCache[r]===e.newValue&&!n)return}const i=()=>{const o=this.storage.getItem(r);!n&&this.localCache[r]===o||this.notifyListeners(r,o)},s=this.storage.getItem(r);Tc()&&s!==e.newValue&&e.newValue!==e.oldValue?setTimeout(i,Fc):i()}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n&&JSON.parse(n))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,n,r)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:n,newValue:r}),!0)})},Bc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,n){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,n){await super._set(e,n),this.localCache[e]=JSON.stringify(n)}async _get(e){const n=await super._get(e);return this.localCache[e]=JSON.stringify(n),n}async _remove(e){await super._remove(e),delete this.localCache[e]}}qi.type="LOCAL";const Hc=qi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Gi extends $i{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,n){}_removeListener(e,n){}}Gi.type="SESSION";const Ki=Gi;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jc(t){return Promise.all(t.map(async e=>{try{const n=await e;return{fulfilled:!0,value:n}}catch(n){return{fulfilled:!1,reason:n}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const n=this.receivers.find(i=>i.isListeningto(e));if(n)return n;const r=new Mt(e);return this.receivers.push(r),r}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const n=e,{eventId:r,eventType:i,data:s}=n.data,o=this.handlersMap[i];if(!(o!=null&&o.size))return;n.ports[0].postMessage({status:"ack",eventId:r,eventType:i});const a=Array.from(o).map(async u=>u(n.origin,s)),c=await jc(a);n.ports[0].postMessage({status:"done",eventId:r,eventType:i,response:c})}_subscribe(e,n){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(n)}_unsubscribe(e,n){this.handlersMap[e]&&n&&this.handlersMap[e].delete(n),(!n||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Mt.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Hn(t="",e=10){let n="";for(let r=0;r<e;r++)n+=Math.floor(Math.random()*10);return t+n}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vc{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,n,r=50){const i=typeof MessageChannel!="undefined"?new MessageChannel:null;if(!i)throw new Error("connection_unavailable");let s,o;return new Promise((a,c)=>{const u=Hn("",20);i.port1.start();const l=setTimeout(()=>{c(new Error("unsupported_event"))},r);o={messageChannel:i,onMessage(d){const h=d;if(h.data.eventId===u)switch(h.data.status){case"ack":clearTimeout(l),s=setTimeout(()=>{c(new Error("timeout"))},3e3);break;case"done":clearTimeout(s),a(h.data.response);break;default:clearTimeout(l),clearTimeout(s),c(new Error("invalid_response"));break}}},this.handlers.add(o),i.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:u,data:n},[i.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function V(){return window}function Wc(t){V().location.href=t}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ji(){return typeof V().WorkerGlobalScope!="undefined"&&typeof V().importScripts=="function"}async function zc(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function $c(){var t;return((t=navigator==null?void 0:navigator.serviceWorker)===null||t===void 0?void 0:t.controller)||null}function qc(){return Ji()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Yi="firebaseLocalStorageDb",Gc=1,kt="firebaseLocalStorage",Xi="fbase_key";class rt{constructor(e){this.request=e}toPromise(){return new Promise((e,n)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{n(this.request.error)})})}}function Ut(t,e){return t.transaction([kt],e?"readwrite":"readonly").objectStore(kt)}function Kc(){const t=indexedDB.deleteDatabase(Yi);return new rt(t).toPromise()}function pn(){const t=indexedDB.open(Yi,Gc);return new Promise((e,n)=>{t.addEventListener("error",()=>{n(t.error)}),t.addEventListener("upgradeneeded",()=>{const r=t.result;try{r.createObjectStore(kt,{keyPath:Xi})}catch(i){n(i)}}),t.addEventListener("success",async()=>{const r=t.result;r.objectStoreNames.contains(kt)?e(r):(r.close(),await Kc(),e(await pn()))})})}async function Tr(t,e,n){const r=Ut(t,!0).put({[Xi]:e,value:n});return new rt(r).toPromise()}async function Jc(t,e){const n=Ut(t,!1).get(e),r=await new rt(n).toPromise();return r===void 0?null:r.value}function Sr(t,e){const n=Ut(t,!0).delete(e);return new rt(n).toPromise()}const Yc=800,Xc=3;class Qi{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await pn(),this.db)}async _withRetries(e){let n=0;for(;;)try{const r=await this._openDb();return await e(r)}catch(r){if(n++>Xc)throw r;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return Ji()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Mt._getInstance(qc()),this.receiver._subscribe("keyChanged",async(e,n)=>({keyProcessed:(await this._poll()).includes(n.key)})),this.receiver._subscribe("ping",async(e,n)=>["keyChanged"])}async initializeSender(){var e,n;if(this.activeServiceWorker=await zc(),!this.activeServiceWorker)return;this.sender=new Vc(this.activeServiceWorker);const r=await this.sender._send("ping",{},800);!r||((e=r[0])===null||e===void 0?void 0:e.fulfilled)&&((n=r[0])===null||n===void 0?void 0:n.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||$c()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await pn();return await Tr(e,Rt,"1"),await Sr(e,Rt),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,n){return this._withPendingWrite(async()=>(await this._withRetries(r=>Tr(r,e,n)),this.localCache[e]=n,this.notifyServiceWorker(e)))}async _get(e){const n=await this._withRetries(r=>Jc(r,e));return this.localCache[e]=n,n}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(n=>Sr(n,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(i=>{const s=Ut(i,!1).getAll();return new rt(s).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const n=[],r=new Set;for(const{fbase_key:i,value:s}of e)r.add(i),JSON.stringify(this.localCache[i])!==JSON.stringify(s)&&(this.notifyListeners(i,s),n.push(i));for(const i of Object.keys(this.localCache))this.localCache[i]&&!r.has(i)&&(this.notifyListeners(i,null),n.push(i));return n}notifyListeners(e,n){this.localCache[e]=n;const r=this.listeners[e];if(r)for(const i of Array.from(r))i(n)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),Yc)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,n){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(n)}_removeListener(e,n){this.listeners[e]&&(this.listeners[e].delete(n),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Qi.type="LOCAL";const Qc=Qi;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zc(){var t,e;return(e=(t=document.getElementsByTagName("head"))===null||t===void 0?void 0:t[0])!==null&&e!==void 0?e:document}function eu(t){return new Promise((e,n)=>{const r=document.createElement("script");r.setAttribute("src",t),r.onload=e,r.onerror=i=>{const s=j("internal-error");s.customData=i,n(s)},r.type="text/javascript",r.charset="UTF-8",Zc().appendChild(r)})}function tu(t){return`__${t}${Math.floor(Math.random()*1e6)}`}new et(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Zi(t,e){return e?J(e):(p(t._popupRedirectResolver,t,"argument-error"),t._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class jn extends xn{constructor(e){super("custom","custom");this.params=e}_getIdTokenResponse(e){return we(e,this._buildIdpRequest())}_linkToIdToken(e,n){return we(e,this._buildIdpRequest(n))}_getReauthenticationResolver(e){return we(e,this._buildIdpRequest())}_buildIdpRequest(e){const n={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(n.idToken=e),n}}function nu(t){return zi(t.auth,new jn(t),t.bypassAuthState)}function ru(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Mc(n,new jn(t),t.bypassAuthState)}async function iu(t){const{auth:e,user:n}=t;return p(n,e,"internal-error"),Lc(n,new jn(t),t.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class es{constructor(e,n,r,i,s=!1){this.auth=e,this.resolver=r,this.user=i,this.bypassAuthState=s,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(n)?n:[n]}execute(){return new Promise(async(e,n)=>{this.pendingPromise={resolve:e,reject:n};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(r){this.reject(r)}})}async onAuthEvent(e){const{urlResponse:n,sessionId:r,postBody:i,tenantId:s,error:o,type:a}=e;if(o){this.reject(o);return}const c={auth:this.auth,requestUri:n,sessionId:r,tenantId:s||void 0,postBody:i||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(c))}catch(u){this.reject(u)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return nu;case"linkViaPopup":case"linkViaRedirect":return iu;case"reauthViaPopup":case"reauthViaRedirect":return ru;default:M(this.auth,"internal-error")}}resolve(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){Y(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=new et(2e3,1e4);async function ld(t,e,n){const r=Lt(t);ic(t,e,Fn);const i=Zi(r,n);return new de(r,"signInViaPopup",e,i).executeNotNull()}class de extends es{constructor(e,n,r,i,s){super(e,n,i,s);this.provider=r,this.authWindow=null,this.pollId=null,de.currentPopupAction&&de.currentPopupAction.cancel(),de.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return p(e,this.auth,"internal-error"),e}async onExecution(){Y(this.filter.length===1,"Popup operations only handle one event");const e=Hn();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(n=>{this.reject(n)}),this.resolver._isIframeWebStorageSupported(this.auth,n=>{n||this.reject(j(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(j(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,de.currentPopupAction=null}pollUserCancellation(){const e=()=>{var n,r;if(!((r=(n=this.authWindow)===null||n===void 0?void 0:n.window)===null||r===void 0)&&r.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(j(this.auth,"popup-closed-by-user"))},2e3);return}this.pollId=window.setTimeout(e,su.get())};e()}}de.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ou="pendingRedirect",Qt=new Map;class au extends es{constructor(e,n,r=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],n,void 0,r);this.eventId=null}async execute(){let e=Qt.get(this.auth._key());if(!e){try{const r=await cu(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(r)}catch(n){e=()=>Promise.reject(n)}Qt.set(this.auth._key(),e)}return this.bypassAuthState||Qt.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const n=await this.auth._redirectUserForId(e.eventId);if(n)return this.user=n,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function cu(t,e){const n=lu(e),r=uu(t);if(!await r._isAvailable())return!1;const i=await r._get(n)==="true";return await r._remove(n),i}function uu(t){return J(t._redirectPersistence)}function lu(t){return ht(ou,t.config.apiKey,t.name)}async function du(t,e,n=!1){const r=Lt(t),i=Zi(r,e),o=await new au(r,i,n).execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const hu=10*60*1e3;class fu{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let n=!1;return this.consumers.forEach(r=>{this.isEventForConsumer(e,r)&&(n=!0,this.sendToConsumer(e,r),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!pu(e)||(this.hasHandledPotentialRedirect=!0,n||(this.queuedRedirectEvent=e,n=!0)),n}sendToConsumer(e,n){var r;if(e.error&&!ts(e)){const i=((r=e.error.code)===null||r===void 0?void 0:r.split("auth/")[1])||"internal-error";n.onError(j(this.auth,i))}else n.onAuthEvent(e)}isEventForConsumer(e,n){const r=n.eventId===null||!!e.eventId&&e.eventId===n.eventId;return n.filter.includes(e.type)&&r}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=hu&&this.cachedEventUids.clear(),this.cachedEventUids.has(Rr(e))}saveEventToCache(e){this.cachedEventUids.add(Rr(e)),this.lastProcessedEventTime=Date.now()}}function Rr(t){return[t.type,t.eventId,t.sessionId,t.tenantId].filter(e=>e).join("-")}function ts({type:t,error:e}){return t==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function pu(t){switch(t.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return ts(t);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function mu(t,e={}){return tt(t,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gu=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,_u=/^https?/;async function vu(t){if(t.config.emulator)return;const{authorizedDomains:e}=await mu(t);for(const n of e)try{if(yu(n))return}catch{}M(t,"unauthorized-domain")}function yu(t){const e=fn(),{protocol:n,hostname:r}=new URL(e);if(t.startsWith("chrome-extension://")){const o=new URL(t);return o.hostname===""&&r===""?n==="chrome-extension:"&&t.replace("chrome-extension://","")===e.replace("chrome-extension://",""):n==="chrome-extension:"&&o.hostname===r}if(!_u.test(n))return!1;if(gu.test(t))return r===t;const i=t.replace(/\./g,"\\.");return new RegExp("^(.+\\."+i+"|"+i+")$","i").test(r)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bu=new et(3e4,6e4);function kr(){const t=V().___jsl;if(t!=null&&t.H){for(const e of Object.keys(t.H))if(t.H[e].r=t.H[e].r||[],t.H[e].L=t.H[e].L||[],t.H[e].r=[...t.H[e].L],t.CP)for(let n=0;n<t.CP.length;n++)t.CP[n]=null}}function Iu(t){return new Promise((e,n)=>{var r,i,s;function o(){kr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{kr(),n(j(t,"network-request-failed"))},timeout:bu.get()})}if(!((i=(r=V().gapi)===null||r===void 0?void 0:r.iframes)===null||i===void 0)&&i.Iframe)e(gapi.iframes.getContext());else if(!((s=V().gapi)===null||s===void 0)&&s.load)o();else{const a=tu("iframefcb");return V()[a]=()=>{gapi.load?o():n(j(t,"network-request-failed"))},eu(`https://apis.google.com/js/api.js?onload=${a}`).catch(c=>n(c))}}).catch(e=>{throw ft=null,e})}let ft=null;function Eu(t){return ft=ft||Iu(t),ft}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const wu=new et(5e3,15e3),Tu="__/auth/iframe",Su="emulator/auth/iframe",Ru={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},ku=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ou(t){const e=t.config;p(e.authDomain,t,"auth-domain-config-required");const n=e.emulator?Ln(e,Su):`https://${t.config.authDomain}/${Tu}`,r={apiKey:e.apiKey,appName:t.name,v:Ct},i=ku.get(t.config.apiHost);i&&(r.eid=i);const s=t._getFrameworks();return s.length&&(r.fw=s.join(",")),`${n}?${Ze(r).slice(1)}`}async function Au(t){const e=await Eu(t),n=V().gapi;return p(n,t,"internal-error"),e.open({where:document.body,url:Ou(t),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ru,dontclear:!0},r=>new Promise(async(i,s)=>{await r.restyle({setHideOnLeave:!1});const o=j(t,"network-request-failed"),a=V().setTimeout(()=>{s(o)},wu.get());function c(){V().clearTimeout(a),i(r)}r.ping(c).then(c,()=>{s(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cu={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Pu=500,Nu=600,Du="_blank",Lu="http://localhost";class Or{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function Mu(t,e,n,r=Pu,i=Nu){const s=Math.max((window.screen.availHeight-i)/2,0).toString(),o=Math.max((window.screen.availWidth-r)/2,0).toString();let a="";const c=Object.assign(Object.assign({},Cu),{width:r.toString(),height:i.toString(),top:s,left:o}),u=k().toLowerCase();n&&(a=Ui(u)?Du:n),Mi(u)&&(e=e||Lu,c.scrollbars="yes");const l=Object.entries(c).reduce((h,[f,_])=>`${h}${f}=${_},`,"");if(wc(u)&&a!=="_self")return Uu(e||"",a),new Or(null);const d=window.open(e||"",a,l);p(d,t,"popup-blocked");try{d.focus()}catch{}return new Or(d)}function Uu(t,e){const n=document.createElement("a");n.href=t,n.target=e;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xu="__/auth/handler",Bu="emulator/auth/handler";function Ar(t,e,n,r,i,s){p(t.config.authDomain,t,"auth-domain-config-required"),p(t.config.apiKey,t,"invalid-api-key");const o={apiKey:t.config.apiKey,appName:t.name,authType:n,redirectUrl:r,v:Ct,eventId:i};if(e instanceof Fn){e.setDefaultLanguage(t.languageCode),o.providerId=e.providerId||"",ta(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[c,u]of Object.entries(s||{}))o[c]=u}if(e instanceof nt){const c=e.getScopes().filter(u=>u!=="");c.length>0&&(o.scopes=c.join(","))}t.tenantId&&(o.tid=t.tenantId);const a=o;for(const c of Object.keys(a))a[c]===void 0&&delete a[c];return`${Fu(t)}?${Ze(a).slice(1)}`}function Fu({config:t}){return t.emulator?Ln(t,Bu):`https://${t.authDomain}/${xu}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zt="webStorageSupport";class Hu{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=Ki,this._completeRedirectFn=du}async _openPopup(e,n,r,i){var s;Y((s=this.eventManagers[e._key()])===null||s===void 0?void 0:s.manager,"_initialize() not called before _openPopup()");const o=Ar(e,n,r,fn(),i);return Mu(e,o,Hn())}async _openRedirect(e,n,r,i){return await this._originValidation(e),Wc(Ar(e,n,r,fn(),i)),new Promise(()=>{})}_initialize(e){const n=e._key();if(this.eventManagers[n]){const{manager:i,promise:s}=this.eventManagers[n];return i?Promise.resolve(i):(Y(s,"If manager is not set, promise should be"),s)}const r=this.initAndGetManager(e);return this.eventManagers[n]={promise:r},r.catch(()=>{delete this.eventManagers[n]}),r}async initAndGetManager(e){const n=await Au(e),r=new fu(e);return n.register("authEvent",i=>(p(i==null?void 0:i.authEvent,e,"invalid-auth-event"),{status:r.onEvent(i.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:r},this.iframes[e._key()]=n,r}_isIframeWebStorageSupported(e,n){this.iframes[e._key()].send(Zt,{type:Zt},i=>{var s;const o=(s=i==null?void 0:i[0])===null||s===void 0?void 0:s[Zt];o!==void 0&&n(!!o),M(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const n=e._key();return this.originValidationPromises[n]||(this.originValidationPromises[n]=vu(e)),this.originValidationPromises[n]}get _shouldInitProactively(){return ji()||Un()||Dt()}}const ju=Hu;var Cr="@firebase/auth",Pr="0.19.10";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vu{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const n=this.auth.onIdTokenChanged(r=>{var i;e(((i=r)===null||i===void 0?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,n),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const n=this.internalListeners.get(e);!n||(this.internalListeners.delete(e),n(),this.updateProactiveRefresh())}assertAuthConfigured(){p(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Wu(t){switch(t){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function zu(t){We(new Re("auth",(e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=e.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((a,c)=>{p(s&&!s.includes(":"),"invalid-api-key",{appName:a.name}),p(!(o!=null&&o.includes(":")),"argument-error",{appName:a.name});const u={apiKey:s,authDomain:o,clientPlatform:t,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Vi(t)},l=new Rc(a,c,u);return oc(l,n),l})(r,i)},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,n,r)=>{e.getProvider("auth-internal").initialize()})),We(new Re("auth-internal",e=>{const n=Lt(e.getProvider("auth").getImmediate());return(r=>new Vu(r))(n)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(Cr,Pr,Wu(t)),Ie(Cr,Pr,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dd(t=$a()){const e=Ti(t,"auth");return e.isInitialized()?e.getImmediate():sc(t,{popupRedirectResolver:ju,persistence:[Qc,Hc,Ki]})}zu("Browser");var ns={exports:{}},rs=function(e,n){return function(){for(var i=new Array(arguments.length),s=0;s<i.length;s++)i[s]=arguments[s];return e.apply(n,i)}},$u=rs,ce=Object.prototype.toString;function Vn(t){return Array.isArray(t)}function mn(t){return typeof t=="undefined"}function qu(t){return t!==null&&!mn(t)&&t.constructor!==null&&!mn(t.constructor)&&typeof t.constructor.isBuffer=="function"&&t.constructor.isBuffer(t)}function is(t){return ce.call(t)==="[object ArrayBuffer]"}function Gu(t){return ce.call(t)==="[object FormData]"}function Ku(t){var e;return typeof ArrayBuffer!="undefined"&&ArrayBuffer.isView?e=ArrayBuffer.isView(t):e=t&&t.buffer&&is(t.buffer),e}function Ju(t){return typeof t=="string"}function Yu(t){return typeof t=="number"}function ss(t){return t!==null&&typeof t=="object"}function pt(t){if(ce.call(t)!=="[object Object]")return!1;var e=Object.getPrototypeOf(t);return e===null||e===Object.prototype}function Xu(t){return ce.call(t)==="[object Date]"}function Qu(t){return ce.call(t)==="[object File]"}function Zu(t){return ce.call(t)==="[object Blob]"}function os(t){return ce.call(t)==="[object Function]"}function el(t){return ss(t)&&os(t.pipe)}function tl(t){return ce.call(t)==="[object URLSearchParams]"}function nl(t){return t.trim?t.trim():t.replace(/^\s+|\s+$/g,"")}function rl(){return typeof navigator!="undefined"&&(navigator.product==="ReactNative"||navigator.product==="NativeScript"||navigator.product==="NS")?!1:typeof window!="undefined"&&typeof document!="undefined"}function Wn(t,e){if(!(t===null||typeof t=="undefined"))if(typeof t!="object"&&(t=[t]),Vn(t))for(var n=0,r=t.length;n<r;n++)e.call(null,t[n],n,t);else for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&e.call(null,t[i],i,t)}function gn(){var t={};function e(i,s){pt(t[s])&&pt(i)?t[s]=gn(t[s],i):pt(i)?t[s]=gn({},i):Vn(i)?t[s]=i.slice():t[s]=i}for(var n=0,r=arguments.length;n<r;n++)Wn(arguments[n],e);return t}function il(t,e,n){return Wn(e,function(i,s){n&&typeof i=="function"?t[s]=$u(i,n):t[s]=i}),t}function sl(t){return t.charCodeAt(0)===65279&&(t=t.slice(1)),t}var O={isArray:Vn,isArrayBuffer:is,isBuffer:qu,isFormData:Gu,isArrayBufferView:Ku,isString:Ju,isNumber:Yu,isObject:ss,isPlainObject:pt,isUndefined:mn,isDate:Xu,isFile:Qu,isBlob:Zu,isFunction:os,isStream:el,isURLSearchParams:tl,isStandardBrowserEnv:rl,forEach:Wn,merge:gn,extend:il,trim:nl,stripBOM:sl},ye=O;function Nr(t){return encodeURIComponent(t).replace(/%3A/gi,":").replace(/%24/g,"$").replace(/%2C/gi,",").replace(/%20/g,"+").replace(/%5B/gi,"[").replace(/%5D/gi,"]")}var as=function(e,n,r){if(!n)return e;var i;if(r)i=r(n);else if(ye.isURLSearchParams(n))i=n.toString();else{var s=[];ye.forEach(n,function(c,u){c===null||typeof c=="undefined"||(ye.isArray(c)?u=u+"[]":c=[c],ye.forEach(c,function(d){ye.isDate(d)?d=d.toISOString():ye.isObject(d)&&(d=JSON.stringify(d)),s.push(Nr(u)+"="+Nr(d))}))}),i=s.join("&")}if(i){var o=e.indexOf("#");o!==-1&&(e=e.slice(0,o)),e+=(e.indexOf("?")===-1?"?":"&")+i}return e},ol=O;function xt(){this.handlers=[]}xt.prototype.use=function(e,n,r){return this.handlers.push({fulfilled:e,rejected:n,synchronous:r?r.synchronous:!1,runWhen:r?r.runWhen:null}),this.handlers.length-1};xt.prototype.eject=function(e){this.handlers[e]&&(this.handlers[e]=null)};xt.prototype.forEach=function(e){ol.forEach(this.handlers,function(r){r!==null&&e(r)})};var al=xt,cl=O,ul=function(e,n){cl.forEach(e,function(i,s){s!==n&&s.toUpperCase()===n.toUpperCase()&&(e[n]=i,delete e[s])})},cs=function(e,n,r,i,s){return e.config=n,r&&(e.code=r),e.request=i,e.response=s,e.isAxiosError=!0,e.toJSON=function(){return{message:this.message,name:this.name,description:this.description,number:this.number,fileName:this.fileName,lineNumber:this.lineNumber,columnNumber:this.columnNumber,stack:this.stack,config:this.config,code:this.code,status:this.response&&this.response.status?this.response.status:null}},e},us={silentJSONParsing:!0,forcedJSONParsing:!0,clarifyTimeoutError:!1},ll=cs,ls=function(e,n,r,i,s){var o=new Error(e);return ll(o,n,r,i,s)},dl=ls,hl=function(e,n,r){var i=r.config.validateStatus;!r.status||!i||i(r.status)?e(r):n(dl("Request failed with status code "+r.status,r.config,null,r.request,r))},at=O,fl=at.isStandardBrowserEnv()?function(){return{write:function(n,r,i,s,o,a){var c=[];c.push(n+"="+encodeURIComponent(r)),at.isNumber(i)&&c.push("expires="+new Date(i).toGMTString()),at.isString(s)&&c.push("path="+s),at.isString(o)&&c.push("domain="+o),a===!0&&c.push("secure"),document.cookie=c.join("; ")},read:function(n){var r=document.cookie.match(new RegExp("(^|;\\s*)("+n+")=([^;]*)"));return r?decodeURIComponent(r[3]):null},remove:function(n){this.write(n,"",Date.now()-864e5)}}}():function(){return{write:function(){},read:function(){return null},remove:function(){}}}(),pl=function(e){return/^([a-z][a-z\d+\-.]*:)?\/\//i.test(e)},ml=function(e,n){return n?e.replace(/\/+$/,"")+"/"+n.replace(/^\/+/,""):e},gl=pl,_l=ml,vl=function(e,n){return e&&!gl(n)?_l(e,n):n},en=O,yl=["age","authorization","content-length","content-type","etag","expires","from","host","if-modified-since","if-unmodified-since","last-modified","location","max-forwards","proxy-authorization","referer","retry-after","user-agent"],bl=function(e){var n={},r,i,s;return e&&en.forEach(e.split(`
`),function(a){if(s=a.indexOf(":"),r=en.trim(a.substr(0,s)).toLowerCase(),i=en.trim(a.substr(s+1)),r){if(n[r]&&yl.indexOf(r)>=0)return;r==="set-cookie"?n[r]=(n[r]?n[r]:[]).concat([i]):n[r]=n[r]?n[r]+", "+i:i}}),n},Dr=O,Il=Dr.isStandardBrowserEnv()?function(){var e=/(msie|trident)/i.test(navigator.userAgent),n=document.createElement("a"),r;function i(s){var o=s;return e&&(n.setAttribute("href",o),o=n.href),n.setAttribute("href",o),{href:n.href,protocol:n.protocol?n.protocol.replace(/:$/,""):"",host:n.host,search:n.search?n.search.replace(/^\?/,""):"",hash:n.hash?n.hash.replace(/^#/,""):"",hostname:n.hostname,port:n.port,pathname:n.pathname.charAt(0)==="/"?n.pathname:"/"+n.pathname}}return r=i(window.location.href),function(o){var a=Dr.isString(o)?i(o):o;return a.protocol===r.protocol&&a.host===r.host}}():function(){return function(){return!0}}();function zn(t){this.message=t}zn.prototype.toString=function(){return"Cancel"+(this.message?": "+this.message:"")};zn.prototype.__CANCEL__=!0;var Bt=zn,ct=O,El=hl,wl=fl,Tl=as,Sl=vl,Rl=bl,kl=Il,tn=ls,Ol=us,Al=Bt,Lr=function(e){return new Promise(function(r,i){var s=e.data,o=e.headers,a=e.responseType,c;function u(){e.cancelToken&&e.cancelToken.unsubscribe(c),e.signal&&e.signal.removeEventListener("abort",c)}ct.isFormData(s)&&delete o["Content-Type"];var l=new XMLHttpRequest;if(e.auth){var d=e.auth.username||"",h=e.auth.password?unescape(encodeURIComponent(e.auth.password)):"";o.Authorization="Basic "+btoa(d+":"+h)}var f=Sl(e.baseURL,e.url);l.open(e.method.toUpperCase(),Tl(f,e.params,e.paramsSerializer),!0),l.timeout=e.timeout;function _(){if(!!l){var g="getAllResponseHeaders"in l?Rl(l.getAllResponseHeaders()):null,b=!a||a==="text"||a==="json"?l.responseText:l.response,w={data:b,status:l.status,statusText:l.statusText,headers:g,config:e,request:l};El(function(E){r(E),u()},function(E){i(E),u()},w),l=null}}if("onloadend"in l?l.onloadend=_:l.onreadystatechange=function(){!l||l.readyState!==4||l.status===0&&!(l.responseURL&&l.responseURL.indexOf("file:")===0)||setTimeout(_)},l.onabort=function(){!l||(i(tn("Request aborted",e,"ECONNABORTED",l)),l=null)},l.onerror=function(){i(tn("Network Error",e,null,l)),l=null},l.ontimeout=function(){var b=e.timeout?"timeout of "+e.timeout+"ms exceeded":"timeout exceeded",w=e.transitional||Ol;e.timeoutErrorMessage&&(b=e.timeoutErrorMessage),i(tn(b,e,w.clarifyTimeoutError?"ETIMEDOUT":"ECONNABORTED",l)),l=null},ct.isStandardBrowserEnv()){var T=(e.withCredentials||kl(f))&&e.xsrfCookieName?wl.read(e.xsrfCookieName):void 0;T&&(o[e.xsrfHeaderName]=T)}"setRequestHeader"in l&&ct.forEach(o,function(b,w){typeof s=="undefined"&&w.toLowerCase()==="content-type"?delete o[w]:l.setRequestHeader(w,b)}),ct.isUndefined(e.withCredentials)||(l.withCredentials=!!e.withCredentials),a&&a!=="json"&&(l.responseType=e.responseType),typeof e.onDownloadProgress=="function"&&l.addEventListener("progress",e.onDownloadProgress),typeof e.onUploadProgress=="function"&&l.upload&&l.upload.addEventListener("progress",e.onUploadProgress),(e.cancelToken||e.signal)&&(c=function(g){!l||(i(!g||g&&g.type?new Al("canceled"):g),l.abort(),l=null)},e.cancelToken&&e.cancelToken.subscribe(c),e.signal&&(e.signal.aborted?c():e.signal.addEventListener("abort",c))),s||(s=null),l.send(s)})},R=O,Mr=ul,Cl=cs,Pl=us,Nl={"Content-Type":"application/x-www-form-urlencoded"};function Ur(t,e){!R.isUndefined(t)&&R.isUndefined(t["Content-Type"])&&(t["Content-Type"]=e)}function Dl(){var t;return(typeof XMLHttpRequest!="undefined"||typeof process!="undefined"&&Object.prototype.toString.call(process)==="[object process]")&&(t=Lr),t}function Ll(t,e,n){if(R.isString(t))try{return(e||JSON.parse)(t),R.trim(t)}catch(r){if(r.name!=="SyntaxError")throw r}return(n||JSON.stringify)(t)}var Ft={transitional:Pl,adapter:Dl(),transformRequest:[function(e,n){return Mr(n,"Accept"),Mr(n,"Content-Type"),R.isFormData(e)||R.isArrayBuffer(e)||R.isBuffer(e)||R.isStream(e)||R.isFile(e)||R.isBlob(e)?e:R.isArrayBufferView(e)?e.buffer:R.isURLSearchParams(e)?(Ur(n,"application/x-www-form-urlencoded;charset=utf-8"),e.toString()):R.isObject(e)||n&&n["Content-Type"]==="application/json"?(Ur(n,"application/json"),Ll(e)):e}],transformResponse:[function(e){var n=this.transitional||Ft.transitional,r=n&&n.silentJSONParsing,i=n&&n.forcedJSONParsing,s=!r&&this.responseType==="json";if(s||i&&R.isString(e)&&e.length)try{return JSON.parse(e)}catch(o){if(s)throw o.name==="SyntaxError"?Cl(o,this,"E_JSON_PARSE"):o}return e}],timeout:0,xsrfCookieName:"XSRF-TOKEN",xsrfHeaderName:"X-XSRF-TOKEN",maxContentLength:-1,maxBodyLength:-1,validateStatus:function(e){return e>=200&&e<300},headers:{common:{Accept:"application/json, text/plain, */*"}}};R.forEach(["delete","get","head"],function(e){Ft.headers[e]={}});R.forEach(["post","put","patch"],function(e){Ft.headers[e]=R.merge(Nl)});var $n=Ft,Ml=O,Ul=$n,xl=function(e,n,r){var i=this||Ul;return Ml.forEach(r,function(o){e=o.call(i,e,n)}),e},ds=function(e){return!!(e&&e.__CANCEL__)},xr=O,nn=xl,Bl=ds,Fl=$n,Hl=Bt;function rn(t){if(t.cancelToken&&t.cancelToken.throwIfRequested(),t.signal&&t.signal.aborted)throw new Hl("canceled")}var jl=function(e){rn(e),e.headers=e.headers||{},e.data=nn.call(e,e.data,e.headers,e.transformRequest),e.headers=xr.merge(e.headers.common||{},e.headers[e.method]||{},e.headers),xr.forEach(["delete","get","head","post","put","patch","common"],function(i){delete e.headers[i]});var n=e.adapter||Fl.adapter;return n(e).then(function(i){return rn(e),i.data=nn.call(e,i.data,i.headers,e.transformResponse),i},function(i){return Bl(i)||(rn(e),i&&i.response&&(i.response.data=nn.call(e,i.response.data,i.response.headers,e.transformResponse))),Promise.reject(i)})},C=O,hs=function(e,n){n=n||{};var r={};function i(l,d){return C.isPlainObject(l)&&C.isPlainObject(d)?C.merge(l,d):C.isPlainObject(d)?C.merge({},d):C.isArray(d)?d.slice():d}function s(l){if(C.isUndefined(n[l])){if(!C.isUndefined(e[l]))return i(void 0,e[l])}else return i(e[l],n[l])}function o(l){if(!C.isUndefined(n[l]))return i(void 0,n[l])}function a(l){if(C.isUndefined(n[l])){if(!C.isUndefined(e[l]))return i(void 0,e[l])}else return i(void 0,n[l])}function c(l){if(l in n)return i(e[l],n[l]);if(l in e)return i(void 0,e[l])}var u={url:o,method:o,data:o,baseURL:a,transformRequest:a,transformResponse:a,paramsSerializer:a,timeout:a,timeoutMessage:a,withCredentials:a,adapter:a,responseType:a,xsrfCookieName:a,xsrfHeaderName:a,onUploadProgress:a,onDownloadProgress:a,decompress:a,maxContentLength:a,maxBodyLength:a,transport:a,httpAgent:a,httpsAgent:a,cancelToken:a,socketPath:a,responseEncoding:a,validateStatus:c};return C.forEach(Object.keys(e).concat(Object.keys(n)),function(d){var h=u[d]||s,f=h(d);C.isUndefined(f)&&h!==c||(r[d]=f)}),r},fs={version:"0.26.1"},Vl=fs.version,qn={};["object","boolean","number","function","string","symbol"].forEach(function(t,e){qn[t]=function(r){return typeof r===t||"a"+(e<1?"n ":" ")+t}});var Br={};qn.transitional=function(e,n,r){function i(s,o){return"[Axios v"+Vl+"] Transitional option '"+s+"'"+o+(r?". "+r:"")}return function(s,o,a){if(e===!1)throw new Error(i(o," has been removed"+(n?" in "+n:"")));return n&&!Br[o]&&(Br[o]=!0,console.warn(i(o," has been deprecated since v"+n+" and will be removed in the near future"))),e?e(s,o,a):!0}};function Wl(t,e,n){if(typeof t!="object")throw new TypeError("options must be an object");for(var r=Object.keys(t),i=r.length;i-- >0;){var s=r[i],o=e[s];if(o){var a=t[s],c=a===void 0||o(a,s,t);if(c!==!0)throw new TypeError("option "+s+" must be "+c);continue}if(n!==!0)throw Error("Unknown option "+s)}}var zl={assertOptions:Wl,validators:qn},ps=O,$l=as,Fr=al,Hr=jl,Ht=hs,ms=zl,be=ms.validators;function it(t){this.defaults=t,this.interceptors={request:new Fr,response:new Fr}}it.prototype.request=function(e,n){typeof e=="string"?(n=n||{},n.url=e):n=e||{},n=Ht(this.defaults,n),n.method?n.method=n.method.toLowerCase():this.defaults.method?n.method=this.defaults.method.toLowerCase():n.method="get";var r=n.transitional;r!==void 0&&ms.assertOptions(r,{silentJSONParsing:be.transitional(be.boolean),forcedJSONParsing:be.transitional(be.boolean),clarifyTimeoutError:be.transitional(be.boolean)},!1);var i=[],s=!0;this.interceptors.request.forEach(function(f){typeof f.runWhen=="function"&&f.runWhen(n)===!1||(s=s&&f.synchronous,i.unshift(f.fulfilled,f.rejected))});var o=[];this.interceptors.response.forEach(function(f){o.push(f.fulfilled,f.rejected)});var a;if(!s){var c=[Hr,void 0];for(Array.prototype.unshift.apply(c,i),c=c.concat(o),a=Promise.resolve(n);c.length;)a=a.then(c.shift(),c.shift());return a}for(var u=n;i.length;){var l=i.shift(),d=i.shift();try{u=l(u)}catch(h){d(h);break}}try{a=Hr(u)}catch(h){return Promise.reject(h)}for(;o.length;)a=a.then(o.shift(),o.shift());return a};it.prototype.getUri=function(e){return e=Ht(this.defaults,e),$l(e.url,e.params,e.paramsSerializer).replace(/^\?/,"")};ps.forEach(["delete","get","head","options"],function(e){it.prototype[e]=function(n,r){return this.request(Ht(r||{},{method:e,url:n,data:(r||{}).data}))}});ps.forEach(["post","put","patch"],function(e){it.prototype[e]=function(n,r,i){return this.request(Ht(i||{},{method:e,url:n,data:r}))}});var ql=it,Gl=Bt;function Oe(t){if(typeof t!="function")throw new TypeError("executor must be a function.");var e;this.promise=new Promise(function(i){e=i});var n=this;this.promise.then(function(r){if(!!n._listeners){var i,s=n._listeners.length;for(i=0;i<s;i++)n._listeners[i](r);n._listeners=null}}),this.promise.then=function(r){var i,s=new Promise(function(o){n.subscribe(o),i=o}).then(r);return s.cancel=function(){n.unsubscribe(i)},s},t(function(i){n.reason||(n.reason=new Gl(i),e(n.reason))})}Oe.prototype.throwIfRequested=function(){if(this.reason)throw this.reason};Oe.prototype.subscribe=function(e){if(this.reason){e(this.reason);return}this._listeners?this._listeners.push(e):this._listeners=[e]};Oe.prototype.unsubscribe=function(e){if(!!this._listeners){var n=this._listeners.indexOf(e);n!==-1&&this._listeners.splice(n,1)}};Oe.source=function(){var e,n=new Oe(function(i){e=i});return{token:n,cancel:e}};var Kl=Oe,Jl=function(e){return function(r){return e.apply(null,r)}},Yl=O,Xl=function(e){return Yl.isObject(e)&&e.isAxiosError===!0},jr=O,Ql=rs,mt=ql,Zl=hs,ed=$n;function gs(t){var e=new mt(t),n=Ql(mt.prototype.request,e);return jr.extend(n,mt.prototype,e),jr.extend(n,e),n.create=function(i){return gs(Zl(t,i))},n}var $=gs(ed);$.Axios=mt;$.Cancel=Bt;$.CancelToken=Kl;$.isCancel=ds;$.VERSION=fs.version;$.all=function(e){return Promise.all(e)};$.spread=Jl;$.isAxiosError=Xl;ns.exports=$;ns.exports.default=$;export{W as A,wn as B,Tn as C,Sn as D,vn as E,cn as F,ne as G,yt as H,bt as I,nd as J,En as K,As as L,ud as M,od as N,Co as O,sd as R,kn as S,Rn as a,vt as b,x as c,D as d,je as e,id as f,dd as g,P as h,ad as i,Rs as j,F as k,ks as l,fi as m,se as n,ld as o,rd as p,re as q,Ae as r,Ot as s,cd as t,No as u,bn as v,H as w,In as x,yn as y,L as z};
