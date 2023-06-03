(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[3040],{3905:function(e,t,r){"use strict";r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),s=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=s(e.components);return n.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),d=s(r),m=a,f=d["".concat(l,".").concat(m)]||d[m]||u[m]||o;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<o;s++)i[s]=r[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},9362:function(e,t,r){"use strict";r.r(t),r.d(t,{frontMatter:function(){return i},metadata:function(){return c},toc:function(){return l},default:function(){return p}});var n=r(2122),a=r(9756),o=(r(7294),r(3905)),i={id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/collection/selector/properties"},c={unversionedId:"packages/core/features/collection/selector/properties",id:"packages/core/features/collection/selector/properties",isDocsHomePage:!1,title:"Properties",description:"Here are valuable properties of the Selector Class listed,",source:"@site/docs/packages/core/features/collection/selector/Properties.md",sourceDirName:"packages/core/features/collection/selector",slug:"/core/collection/selector/properties",permalink:"/docs/core/collection/selector/properties",editUrl:"https://github.com/kdsinghcoder/documentation/tree/develop/docs/packages/core/features/collection/selector/Properties.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Properties",frontMatter:{id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/collection/selector/properties"}},l=[{value:"<code>item</code>",id:"item",children:[{value:"\ud83d\udcc4 Return",id:"-return",children:[]}]},{value:"<code>itemKey</code>",id:"itemkey",children:[{value:"\ud83d\udcc4 Return",id:"-return-1",children:[]}]}],s={toc:l};function p(e){var t=e.components,r=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,n.Z)({},s,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Here are valuable properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Selector Class")," listed,\nwhich aren't directly related to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State Class")),"."),(0,o.kt)("p",{parentName:"div"},"The Selector is an extension of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State Class")),"\nand offers the same properties as a normal State.\nThese State related properties aren't described in this Section.\nTo find out more about specific State properties,\ncheck out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},"State documentation"),"."))),(0,o.kt)("h2",{id:"item"},(0,o.kt)("inlineCode",{parentName:"h2"},"item")),(0,o.kt)("p",null,"Returns the current selected Item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const MY_COLLECTION = App.Collection({\n   initialData: [{id: 1, name: 'jeff'}, {id: 2, name: 'frank'}, {id: 5, name: 'hans'}]\n});\n\nconst MY_SELECTOR = MY_COLLECTION.select(1);\nMY_SELECTOR.item; // Returns 'Item(1)'\nMY_SELECTOR.value; // Returns '{id: 1, name: 'jeff'}'\n")),(0,o.kt)("h3",{id:"-return"},"\ud83d\udcc4 Return"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Item\n")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"itemkey"},(0,o.kt)("inlineCode",{parentName:"h2"},"itemKey")),(0,o.kt)("p",null,"Returns the current ",(0,o.kt)("inlineCode",{parentName:"p"},"itemKey")," of the selected Item."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const MY_COLLECTION = App.Collection({\n   initialData: [{id: 1, name: 'jeff'}, {id: 2, name: 'frank'}, {id: 5, name: 'hans'}]\n});\n\nconst MY_SELECTOR = MY_COLLECTION.select(1);\nMY_SELECTOR.itemKey; // Returns '1'\n")),(0,o.kt)("h3",{id:"-return-1"},"\ud83d\udcc4 Return"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"string | number\n")))}p.isMDXComponent=!0}}]);