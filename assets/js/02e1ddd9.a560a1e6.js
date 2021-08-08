"use strict";(self.webpackChunk_graphy_ng_docs=self.webpackChunk_graphy_ng_docs||[]).push([[595],{5318:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return s}});var r=n(7378);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),u=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(p.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),m=u(n),s=a,h=m["".concat(p,".").concat(s)]||m[s]||d[s]||o;return n?r.createElement(h,i(i({ref:t},c),{},{components:n})):r.createElement(h,i({ref:t},c))}));function s(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},5352:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return l},contentTitle:function(){return p},metadata:function(){return u},toc:function(){return c},default:function(){return m}});var r=n(9603),a=n(120),o=(n(7378),n(5318)),i=["components"],l={sidebar_position:2},p="Graph methods",u={unversionedId:"api-reference/graph-methods",id:"api-reference/graph-methods",isDocsHomePage:!1,title:"Graph methods",description:"Methods that can be called on the graphy-ng component, eg. through the use of @ViewChild(GraphyComponent):",source:"@site/docs/api-reference/graph-methods.md",sourceDirName:"api-reference",slug:"/api-reference/graph-methods",permalink:"/graphy-ng/docs/api-reference/graph-methods",editUrl:"https://github.com/lars-berger/graphy-ng/edit/main/docs/docs/api-reference/graph-methods.md",version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Graph inputs & outputs",permalink:"/graphy-ng/docs/api-reference/graph-inputs-outputs"},next:{title:"Custom templates",permalink:"/graphy-ng/docs/api-reference/custom-templates"}},c=[],d={toc:c};function m(e){var t=e.components,n=(0,a.Z)(e,i);return(0,o.kt)("wrapper",(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"graph-methods"},"Graph methods"),(0,o.kt)("p",null,"Methods that can be called on the ",(0,o.kt)("inlineCode",{parentName:"p"},"graphy-ng")," component, eg. through the use of ",(0,o.kt)("inlineCode",{parentName:"p"},"@ViewChild(GraphyComponent)"),":"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"pandeltax-number-deltay-number-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"pan(deltaX: number, deltaY: number): void")))),(0,o.kt)("p",null,"Pan horizontally and vertically by given pixel deltas."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"panxdeltax-number-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"panX(deltaX: number): void")))),(0,o.kt)("p",null,"Pan horizontally by a given pixel delta."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"panydeltay-number-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"panY(deltaY: number): void")))),(0,o.kt)("p",null,"Pan vertically by a given pixel delta."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"zoomfactor-number-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"zoom(factor: number): void")))),(0,o.kt)("p",null,"Zoom by a factor."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"pantocoordinatesx-number-y-number-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"panToCoordinates(x: number, y: number): void")))),(0,o.kt)("p",null,"Pan to a specific x, y coordinate."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"center-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"center(): void")))),(0,o.kt)("p",null,"Pan to get the center point of the nodes in the middle of the view box."),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("h4",{parentName:"li",id:"rendergraph-void"},(0,o.kt)("inlineCode",{parentName:"h4"},"renderGraph(): void")))),(0,o.kt)("p",null,"Force the graph to re-render. For example, this can refresh the graph if input nodes were modified in-place (instead of mutated)."))}m.isMDXComponent=!0}}]);