import{S as O,i as R,a as U,b,f as _,s as Z,e as l,t as j,c as g,l as k,n as q,d as x,h as s,m as L,j as A,o as N,p as F,k as E,r as I}from"./index.25adb146.js";import{H as M}from"./HeaderPercentage.4610a418.js";function z(o){let t,a,c,d,u,i,w,H,v,y,S,p,h,T,f,$,m,r;return h=new M({props:{percent:22,voteType:"S\xCC",votesAmount:2.222}}),f=new M({props:{percent:44,voteType:"NO",votesAmount:21.11}}),{c(){t=l("section"),a=l("header"),c=l("h2"),d=j(o[0]),u=g(),i=l("h4"),w=j(o[1]),H=g(),v=l("h6"),y=j(o[2]),S=g(),p=l("div"),k(h.$$.fragment),T=g(),k(f.$$.fragment),$=g(),m=l("section"),m.innerHTML=`<div class="details__item"><h5>AFFLUENZA:</h5> 
		<span class="details__stat">44%</span></div> 

	<div class="divider"></div> 

	<div class="details__item"><h5>SEZIONI:</h5> 
		<span class="details__stat">22</span> 
		<h5>SU:</h5> 
		<span class="details__stat">333</span></div>`,this.c=q,x(v,"class","caption"),x(p,"class","votes"),x(t,"class","header-wrap"),x(m,"class","details")},m(e,n){b(e,t,n),s(t,a),s(a,c),s(c,d),s(a,u),s(a,i),s(i,w),s(a,H),s(a,v),s(v,y),s(t,S),s(t,p),L(h,p,null),s(p,T),L(f,p,null),b(e,$,n),b(e,m,n),r=!0},p(e,[n]){(!r||n&1)&&A(d,e[0]),(!r||n&2)&&A(w,e[1]),(!r||n&4)&&A(y,e[2])},i(e){r||(N(h.$$.fragment,e),N(f.$$.fragment,e),r=!0)},o(e){F(h.$$.fragment,e),F(f.$$.fragment,e),r=!1},d(e){e&&E(t),I(h),I(f),e&&E($),e&&E(m)}}}function P(o,t,a){let{title:c}=t,{subtitle:d}=t,{caption:u}=t;return o.$$set=i=>{"title"in i&&a(0,c=i.title),"subtitle"in i&&a(1,d=i.subtitle),"caption"in i&&a(2,u=i.caption)},[c,d,u]}class B extends O{constructor(t){super(),this.shadowRoot.innerHTML="<style>.header-wrap{display:flex;flex-direction:column;gap:var(--space-xs);border:1px solid var(--color-white);padding:var(--space-xs)}.details{border:1px solid var(--color-white);border-top:none}header{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:var(--space-2xs)}header h2{color:var(--color-gray-200)}header h4{color:var(--color-gray-200);font-weight:var(--fw-light)}header .caption{font-style:italic}.votes{display:flex;justify-content:space-between;gap:var(--space-xl);width:100%;max-width:600px;margin:0 auto}.details{display:flex;margin-left:40px;justify-content:center;gap:var(--space-xs);align-items:center;font-size:var(--text-h5);text-transform:uppercase;padding:var(--space-2xs)}.details__stat{font-weight:var(--fw-semibold);color:var(--color-burgundy)}.details__item{display:flex;gap:var(--space-3xs)}.details .divider{min-height:15px;background-color:black;width:1px}</style>",R(this,{target:this.shadowRoot,props:U(this.attributes),customElement:!0},P,z,Z,{title:0,subtitle:1,caption:2},null),t&&(t.target&&b(t.target,this,t.anchor),t.props&&(this.$set(t.props),_()))}static get observedAttributes(){return["title","subtitle","caption"]}get title(){return this.$$.ctx[0]}set title(t){this.$$set({title:t}),_()}get subtitle(){return this.$$.ctx[1]}set subtitle(t){this.$$set({subtitle:t}),_()}get caption(){return this.$$.ctx[2]}set caption(t){this.$$set({caption:t}),_()}}customElements.define("header-tag",B);