"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[4799],{3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return d}});var n=r(7294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(r),d=a,f=p["".concat(s,".").concat(d)]||p[d]||m[d]||i;return r?n.createElement(f,o(o({ref:t},u),{},{components:r})):n.createElement(f,o({ref:t},u))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}p.displayName="MDXCreateElement"},9411:function(e,t,r){r.d(t,{Z:function(){return o}});var n=r(7294),a="container_KXSz",i="legend_Ecw3";function o(e){let{data:t,children:r}=e;return t||r?n.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return n.createElement(n.Fragment,null);switch(e.type){case"image":case"img":return e.url?n.createElement("a",{href:e.url,target:"_blank"},n.createElement("img",e)):n.createElement("img",e);case"video":return n.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>n.createElement("source",{src:e.src,type:e.type}))):n.createElement("source",e));case"audio":return n.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>n.createElement("source",{src:e.src,type:e.type}))):n.createElement("source",e));case"html":return n.createElement("div",{className:a},n.createElement("iframe",e));default:return n.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),n.createElement("figcaption",{className:i},r)):n.createElement(n.Fragment,null)}},9807:function(e,t,r){r.d(t,{Z:function(){return y}});var n=r(7294),a=r(9163),i=r(3868),o=r.n(i),l=r(5999),s="formContainer_ssZr",c="inputContainer_rIzC",u="input_xw7i",m="submit_jbGj",p="status_Xmiw",d="success_K3DK",f="sending_s6rj",g="error_ltts";const h=e=>{let t,{status:r,message:a,onValidated:i}=e;const h=()=>t&&t.value.indexOf("@")>-1&&o()(t.value)&&i({EMAIL:t.value});return(0,n.useEffect)((()=>{r&&"success"===r&&(t.text="")}),[r]),n.createElement("div",{className:s},n.createElement("h3",null,n.createElement(l.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),n.createElement("div",{className:c},n.createElement("input",{className:u,ref:e=>t=e,type:"email",placeholder:(0,l.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?h():null,required:!0,autoComplete:"email"}),n.createElement("a",{className:m+" tooltip",rel:"noopener",onClick:h,type:"submit"},n.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),n.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===r&&n.createElement("div",{className:`${p} ${f}`},n.createElement(l.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===r&&n.createElement("div",{className:`${p} ${g}`,dangerouslySetInnerHTML:{__html:a}}),"success"===r&&n.createElement("div",{className:`${p} ${d}`,dangerouslySetInnerHTML:{__html:a}}))};function y(e){let{url:t}=e;return n.createElement(a.Z,{url:t,render:e=>{let{subscribe:t,status:r,message:a}=e;return n.createElement(h,{status:r,message:a,onValidated:e=>t(e)})}})}},1324:function(e,t,r){r.d(t,{Z:function(){return i}});var n=r(7294),a=r(5999);function i(){return n.createElement("div",{className:"center"},n.createElement("span",{className:"italic"},n.createElement(a.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,r){r.d(t,{Z:function(){return s}});var n=r(7294),a=r(5742),i=r(2263),o=r(4996);function l(e){const{siteConfig:t}=(0,i.Z)();let{url:r}=t||{};return`${r}${(0,o.Z)(e)}`}function s(e){let{uri:t,image:r,type:o}=e;const{siteConfig:s}=(0,i.Z)(),{projectName:c,customFields:{mType:u,twitterName:m}}=s,p=o||u,d=r?l(r):null,f=l(t);return n.createElement(n.Fragment,null,n.createElement(a.Z,null,f&&n.createElement("link",{rel:"canonical",href:f}),f&&n.createElement("meta",{property:"og:url",content:f}),d&&n.createElement("meta",{property:"og:image",content:d}),p&&n.createElement("meta",{property:"og:type",content:p}),c&&n.createElement("meta",{property:"og:site_name",content:c}),m&&n.createElement("meta",{property:"twitter:site",content:`@${m}`}),d&&n.createElement("meta",{name:"twitter:image",content:d}),d&&n.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},2762:function(e,t,r){r.r(t),r.d(t,{assets:function(){return c},contentTitle:function(){return l},default:function(){return p},frontMatter:function(){return o},metadata:function(){return s},toc:function(){return u}});var n=r(3117),a=(r(7294),r(3905)),i=r(9411);r(2147),r(1324),r(9807),r(3089);const o={slug:"what-is-a-container",title:"Qu'est-ce qu'un conteneur?",tags:["conteneur","docker","docusaurus","i18n"],description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",image:"img/what-is-a-container.jpg"},l=void 0,s={permalink:"/fr/blog/what-is-a-container",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2021-06-01-what-is-a-container.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-06-01-what-is-a-container.mdx",title:"Qu'est-ce qu'un conteneur?",description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",date:"2021-06-01T00:00:00.000Z",formattedDate:"1 juin 2021",tags:[{label:"conteneur",permalink:"/fr/blog/tags/conteneur"},{label:"docker",permalink:"/fr/blog/tags/docker"},{label:"docusaurus",permalink:"/fr/blog/tags/docusaurus"},{label:"i18n",permalink:"/fr/blog/tags/i-18-n"}],readingTime:6.685,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"what-is-a-container",title:"Qu'est-ce qu'un conteneur?",tags:["conteneur","docker","docusaurus","i18n"],description:"Salut tout le monde! Aujourd'hui, on va parler de deux choses&#58; 1. la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais d..",image:"img/what-is-a-container.jpg"},prevItem:{title:"Les tests unitaires",permalink:"/fr/blog/unit-testing"},nextItem:{title:"Environnements de d\xe9ploiement",permalink:"/fr/blog/deployment-environments"}},c={authorsImageUrls:[]},u=[],m={toc:u};function p(e){let{components:t,...r}=e;return(0,a.kt)("wrapper",(0,n.Z)({},m,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/blog/what-is-a-container"},(0,a.kt)(i.Z,{data:{src:"/img/what-is-a-container.jpg",alt:"What is a Container",type:"image"},mdxType:"Figure"})),(0,a.kt)("p",null,"Salut! Aujourd'hui, on va parler de deux choses:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"la derni\xe8re mise \xe0 jour de la librairie Docusaurus qui me permet d\xe9sormais de te fournir mon blog en deux langues!"),(0,a.kt)("li",{parentName:"ol"},"les conteneurs et leur utilit\xe9 dans le cadre du d\xe9veloppement d'applications.")))}p.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);