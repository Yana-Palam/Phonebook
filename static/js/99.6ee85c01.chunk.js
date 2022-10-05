"use strict";(self.webpackChunkgoit_react_hw_08_phonebook=self.webpackChunkgoit_react_hw_08_phonebook||[]).push([[99],{3559:function(n,e,t){t.d(e,{Z:function(){return u}});var r,i=t(168),a=t(7691).ZP.section(r||(r=(0,i.Z)(["\n  padding-top: 60px;\n  padding-bottom: 60px;\n"]))),o=t(184),u=function(n){var e=n.children;return(0,o.jsx)(a,{children:e})}},99:function(n,e,t){t.r(e),t.d(e,{default:function(){return dn}});var r=t(885),i=t(2791),a=t(5206),o=t(9434),u="NOT_FOUND";var c=function(n,e){return n===e};function l(n,e){var t="object"===typeof e?e:{equalityCheck:e},r=t.equalityCheck,i=void 0===r?c:r,a=t.maxSize,o=void 0===a?1:a,l=t.resultEqualityCheck,s=function(n){return function(e,t){if(null===e||null===t||e.length!==t.length)return!1;for(var r=e.length,i=0;i<r;i++)if(!n(e[i],t[i]))return!1;return!0}}(i),f=1===o?function(n){var e;return{get:function(t){return e&&n(e.key,t)?e.value:u},put:function(n,t){e={key:n,value:t}},getEntries:function(){return e?[e]:[]},clear:function(){e=void 0}}}(s):function(n,e){var t=[];function r(n){var r=t.findIndex((function(t){return e(n,t.key)}));if(r>-1){var i=t[r];return r>0&&(t.splice(r,1),t.unshift(i)),i.value}return u}return{get:r,put:function(e,i){r(e)===u&&(t.unshift({key:e,value:i}),t.length>n&&t.pop())},getEntries:function(){return t},clear:function(){t=[]}}}(o,s);function d(){var e=f.get(arguments);if(e===u){if(e=n.apply(null,arguments),l){var t=f.getEntries(),r=t.find((function(n){return l(n.value,e)}));r&&(e=r.value)}f.put(arguments,e)}return e}return d.clearCache=function(){return f.clear()},d}function s(n){var e=Array.isArray(n[0])?n[0]:n;if(!e.every((function(n){return"function"===typeof n}))){var t=e.map((function(n){return"function"===typeof n?"function "+(n.name||"unnamed")+"()":typeof n})).join(", ");throw new Error("createSelector expects all input-selectors to be functions, but received the following types: ["+t+"]")}return e}function f(n){for(var e=arguments.length,t=new Array(e>1?e-1:0),r=1;r<e;r++)t[r-1]=arguments[r];var i=function(){for(var e=arguments.length,r=new Array(e),i=0;i<e;i++)r[i]=arguments[i];var a,o=0,u={memoizeOptions:void 0},c=r.pop();if("object"===typeof c&&(u=c,c=r.pop()),"function"!==typeof c)throw new Error("createSelector expects an output function after the inputs, but received: ["+typeof c+"]");var l=u,f=l.memoizeOptions,d=void 0===f?t:f,p=Array.isArray(d)?d:[d],v=s(r),x=n.apply(void 0,[function(){return o++,c.apply(null,arguments)}].concat(p)),h=n((function(){for(var n=[],e=v.length,t=0;t<e;t++)n.push(v[t].apply(null,arguments));return a=x.apply(null,n)}));return Object.assign(h,{resultFunc:c,memoizedResultFunc:x,dependencies:v,lastResult:function(){return a},recomputations:function(){return o},resetRecomputations:function(){return o=0}}),h};return i}var d,p,v,x,h,m,Z=f(l),g=function(n){return n.contacts.items},y=function(n){return n.contacts.isLoading},j=function(n){return n.contacts.error},b=Z([g,function(n){return n.filters.value}],(function(n,e){var t=e.toLowerCase();return n.filter((function(n){return n.name.toLowerCase().includes(t)}))})),w=t(168),C=t(7691),k=C.ZP.form(d||(d=(0,w.Z)(["\n  display: flex;\n  align-items: center;\n  flex-direction: column;\n  gap: 10px;\n  width: 100%;\n"]))),P=t(6052),A=t(7205),N=t(4285),z=t(184),F=function(n){var e=n.closeModal,t=(0,i.useState)(""),u=(0,r.Z)(t,2),c=u[0],l=u[1],s=(0,i.useState)(""),f=(0,r.Z)(s,2),d=f[0],p=f[1],v=(0,o.I0)(),x=(0,o.v9)(g),h=function(n){var e=n.currentTarget,t=e.name,r=e.value;switch(t){case"name":l(r);break;case"number":p(r);break;default:return}},m=function(){l(""),p("")};return(0,z.jsxs)(k,{onSubmit:function(n){n.preventDefault();var t=c.toLowerCase();if(x.find((function(n){return n.name.toLowerCase()===t})))return a.Am.error("".concat(c," is already in contacts"));var r={name:c,number:d};v((0,P.uK)(r)),m(),e()},children:[(0,z.jsx)(N.Z,{sx:{m:1,width:"100%"},id:"filled-basic",label:"Name",variant:"filled",required:!0,name:"name",type:"text",onChange:h}),(0,z.jsx)(N.Z,{sx:{m:1,width:"100%"},id:"filled-basic",label:"Number",variant:"filled",required:!0,name:"number",type:"text",onChange:h}),(0,z.jsx)(A.Z,{variant:"contained",type:"submit",children:"Add contact"})]})},_=t(5546),S=C.ZP.div(p||(p=(0,w.Z)(["\n  display: flex;\n  justify-content: space-between;\n  padding: 12px;\n  align-items: center;\n"]))),E=C.ZP.div(v||(v=(0,w.Z)(["\n  text-align: center;\n"]))),M=t(6650),I=t(3811),q=t(7247),L=function(n){var e=n.id,t=n.name,r=n.number,i=(0,o.I0)();return(0,z.jsx)(z.Fragment,{children:(0,z.jsx)(M.Z,{elevation:3,sx:{width:"100%"},children:(0,z.jsxs)(S,{children:[(0,z.jsx)(_.ZP,{size:"40",name:t,round:!0}),(0,z.jsxs)(E,{children:[(0,z.jsx)("p",{children:t}),(0,z.jsxs)("p",{children:[" ",r]})]}),(0,z.jsx)(I.Z,{"aria-label":"delete",onClick:function(){i((0,P.GK)(e))},children:(0,z.jsx)(q.Z,{})})]})})})},O=C.ZP.li(x||(x=(0,w.Z)(["\n  width: calc((100% - 2 * 30px) / 3);\n\n  display: flex;\n  align-items: center;\n"]))),R=C.ZP.ul(h||(h=(0,w.Z)(["\n  font-size: 16px;\n\n  list-style: none;\n  display: flex;\n  flex-wrap: wrap;\n  gap: 20px 30px;\n"]))),T=function(){var n=(0,o.v9)(b);return(0,z.jsx)(R,{children:n.map((function(n){var e=n.id,t=n.name,r=n.number;return(0,z.jsx)(O,{children:(0,z.jsx)(L,{name:t,number:r,id:e})},e)}))})},D=t(686),H=(0,C.ZP)(N.Z)(m||(m=(0,w.Z)(["\n  width: 400px;\n"]))),V=function(){var n=(0,o.I0)();return(0,z.jsx)(H,{id:"filled-search",label:"Find contact by name",type:"search",variant:"filled",onChange:function(e){var t=e.target.value;n((0,D.z)(t))}})},B=t(6723),K=t(3559),G=t(7279),U=t(2939),J=t(7462),Q=t(3366),W=t(8182),X=t(3842),Y=t(104),$=t(8519),nn=t(886),en=["className","component"];var tn,rn,an=t(5902),on=function(){var n=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=n.defaultTheme,t=n.defaultClassName,r=void 0===t?"MuiBox-root":t,a=n.generateClassName,o=n.styleFunctionSx,u=void 0===o?Y.Z:o,c=(0,X.ZP)("div",{shouldForwardProp:function(n){return"theme"!==n&&"sx"!==n&&"as"!==n}})(u),l=i.forwardRef((function(n,t){var i=(0,nn.Z)(e),o=(0,$.Z)(n),u=o.className,l=o.component,s=void 0===l?"div":l,f=(0,Q.Z)(o,en);return(0,z.jsx)(c,(0,J.Z)({as:s,ref:t,className:(0,W.Z)(u,a?a(r):r),theme:i},f))}));return l}({defaultTheme:(0,t(4360).Z)(),defaultClassName:"MuiBox-root",generateClassName:an.Z.generate}),un=on,cn=(0,C.ZP)(un)(tn||(tn=(0,w.Z)(["\n  position: absolute;\n  top: 50%;\n  left: 50%;\n  transform: translate(-50%, -50%);\n  width: 420px;\n  background-color: #fff;\n  border-radius: 6px;\n  display: flex;\n  justify-content: center;\n  box-shadow: rgb(0 0 0 / 20%) 0px 11px 15px -7px,\n    rgb(0 0 0 / 14%) 0px 24px 38px 3px, rgb(0 0 0 / 12%) 0px 9px 46px 8px;\n  padding: 30px;\n"]))),ln=t(2419),sn=function(){var n=(0,i.useState)(!1),e=(0,r.Z)(n,2),t=e[0],a=e[1],o=function(){return a(!1)};return(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(A.Z,{variant:"contained",startIcon:(0,z.jsx)(ln.Z,{}),onClick:function(){return a(!0)},children:"Add new contact"}),(0,z.jsx)(U.Z,{open:t,onClose:o,children:(0,z.jsx)(cn,{children:(0,z.jsx)(F,{closeModal:o})})})]})},fn=C.ZP.div(rn||(rn=(0,w.Z)(["\n  justify-content: center;\n  flex-wrap: wrap;\n  gap: 60px;\n\n  align-items: baseline;\n  display: flex;\n  margin-bottom: 60px;\n"]))),dn=function(){var n=(0,o.I0)(),e=(0,o.v9)(j),t=(0,o.v9)(y);return(0,i.useEffect)((function(){n((0,P.yF)())}),[n]),e&&a.Am.error(e),(0,z.jsxs)(z.Fragment,{children:[(0,z.jsx)(K.Z,{children:(0,z.jsxs)(G.Z,{children:[(0,z.jsxs)(fn,{children:[(0,z.jsx)(sn,{children:(0,z.jsx)(F,{})}),(0,z.jsx)(V,{})]}),(0,z.jsx)(T,{})]})}),t&&!e&&(0,z.jsx)(B.Z,{})]})}},2419:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2z"}),"Add");e.Z=o},7247:function(n,e,t){var r=t(4836);e.Z=void 0;var i=r(t(5649)),a=t(184),o=(0,i.default)((0,a.jsx)("path",{d:"M6 19c0 1.1.9 2 2 2h8c1.1 0 2-.9 2-2V7H6v12zM19 4h-3.5l-1-1h-5l-1 1H5v2h14V4z"}),"Delete");e.Z=o}}]);
//# sourceMappingURL=99.6ee85c01.chunk.js.map