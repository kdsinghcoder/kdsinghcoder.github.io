(self.webpackChunkagile_docs=self.webpackChunkagile_docs||[]).push([[7500],{3905:function(e,t,n){"use strict";n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),l=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):p(p({},t),e)),n},c=function(e){var t=l(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,f=u["".concat(i,".").concat(m)]||u[m]||d[m]||o;return n?r.createElement(f,p(p({ref:t},c),{},{components:n})):r.createElement(f,p({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,p=new Array(o);p[0]=u;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s.mdxType="string"==typeof e?e:a,p[1]=s;for(var l=2;l<o;l++)p[l]=n[l];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},2483:function(e,t,n){"use strict";n.r(t),n.d(t,{frontMatter:function(){return p},metadata:function(){return s},toc:function(){return i},default:function(){return c}});var r=n(2122),a=n(9756),o=(n(7294),n(3905)),p={id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/computed/properties"},s={unversionedId:"packages/core/features/computed/properties",id:"packages/core/features/computed/properties",isDocsHomePage:!1,title:"Properties",description:"Here are valuable properties of the Computed Class listed,",source:"@site/docs/packages/core/features/computed/Properties.md",sourceDirName:"packages/core/features/computed",slug:"/core/computed/properties",permalink:"/docs/core/computed/properties",editUrl:"https://github.com/kdsinghcoder/documentation/tree/develop/docs/packages/core/features/computed/Properties.md",version:"current",lastUpdatedAt:1624902050,formattedLastUpdatedAt:"6/28/2021",sidebar_label:"Properties",frontMatter:{id:"properties",title:"Properties",sidebar_label:"Properties",slug:"/core/computed/properties"}},i=[{value:"<code>computeFunction</code>",id:"computefunction",children:[{value:"\ud83d\udcc4 Return",id:"-return",children:[]}]},{value:"<code>deps</code>",id:"deps",children:[{value:"\ud83d\udcc4 Return",id:"-return-1",children:[]}]},{value:"<code>hardCodedDeps</code>",id:"hardcodeddeps",children:[{value:"\ud83d\udcc4 Return",id:"-return-2",children:[]}]}],l={toc:i};function c(e){var t=e.components,n=(0,a.Z)(e,["components"]);return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},"\u2757\ufe0f"),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"Here are valuable properties of the ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed Class")," listed,\nwhich aren't directly related to the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State Class")),"."),(0,o.kt)("p",{parentName:"div"},"The Computed is an extension of the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},(0,o.kt)("inlineCode",{parentName:"a"},"State Class")),"\nand offers the same properties as a normal State.\nThese State related properties aren't described in this Section.\nTo find out more about specific State properties,\ncheck out the ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},"State documentation"),"."))),(0,o.kt)("h2",{id:"computefunction"},(0,o.kt)("inlineCode",{parentName:"h2"},"computeFunction")),(0,o.kt)("p",null,"Method used to compute the ",(0,o.kt)("inlineCode",{parentName:"p"},"value")," of the Computed Class."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{2}","{2}":!0},"const MY_COMPUTED = App.createComputed(() => 1 + 1);\nMY_COMPUTED.computeFunction(); // Returns '2'\nMY_COMPUTED.value; // Returns '2'\n")),(0,o.kt)("p",null,"This function will be called on each dependency mutation.\nDependencies can for example be ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/state"},"States")," or ",(0,o.kt)("a",{parentName:"p",href:"/docs/core/collection"},"Collections"),".\nIn the above code snippet ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_COMPUTED")," is independent,\nbut in the blow example it depends on the ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_NAME")," and ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_AGE")," State."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"const MY_COMPUTED = App.createComputed(() => {\n    return `My name is '${MY_NAME.value}' and I am ${MY_AGE.value} years old.`;\n});\nMY_COMPUTED.value; // Returns \"My name is 'jeff' and I am 10 years old\"\nMY_NAME.set('hans');\n// Internally calls compute function\nMY_COMPUTED.value; // Returns \"My name is 'hans' and I am 10 years old\"\n")),(0,o.kt)("h3",{id:"-return"},"\ud83d\udcc4 Return"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"() => ComputedValueType\n")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"deps"},(0,o.kt)("inlineCode",{parentName:"h2"},"deps")),(0,o.kt)("p",null,"An Array of Observers the ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed Class")," depends on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const MY_COMPUTED = App.createComputed(() => {\n    return MY_NAME.value + MY_AGE.value;\n}, [MY_LOCATION]);\n\nMY_COMPUTED.deps; // Returns (see below)\n// [Observer(MY_LOCATION), Observer(MY_NAME), Observer(MY_AGE)]\n")),(0,o.kt)("p",null,"It does include the auto-detected Observers (",(0,o.kt)("inlineCode",{parentName:"p"},"MY_NAME"),", ",(0,o.kt)("inlineCode",{parentName:"p"},"MY_AGE"),") and the hard-coded Observers (",(0,o.kt)("inlineCode",{parentName:"p"},"MY_LOCATION"),").\nIf any of these dependencies mutates, the Computed Class will recompute its value to stay up to date."),(0,o.kt)("h3",{id:"-return-1"},"\ud83d\udcc4 Return"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Array<Observer>\n")),(0,o.kt)("br",null),(0,o.kt)("hr",null),(0,o.kt)("br",null),(0,o.kt)("h2",{id:"hardcodeddeps"},(0,o.kt)("inlineCode",{parentName:"h2"},"hardCodedDeps")),(0,o.kt)("p",null,"An Array of hard-coded Observers the ",(0,o.kt)("inlineCode",{parentName:"p"},"Computed Class")," depends on."),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:"{5}","{5}":!0},"const MY_COMPUTED = App.createComputed(() => {\n    return MY_NAME.value + MY_AGE.value;\n}, [MY_LOCATION]);\n\nMY_COMPUTED.hardCodedDeps; // Returns (see below)\n// [Observer(MY_LOCATION)]\n")),(0,o.kt)("h3",{id:"-return-2"},"\ud83d\udcc4 Return"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts"},"Array<Observer>\n")))}c.isMDXComponent=!0}}]);