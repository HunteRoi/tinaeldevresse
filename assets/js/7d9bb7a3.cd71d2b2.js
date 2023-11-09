"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[513],{7126:function(e,t,n){n.r(t),n.d(t,{assets:function(){return c},contentTitle:function(){return a},default:function(){return d},frontMatter:function(){return o},metadata:function(){return l},toc:function(){return u}});var r=n(5893),i=n(1151),s=n(9411);n(831),n(1324),n(9807),n(3089),n(3292),n(6728);const o={slug:"unit-testing",title:"Unit Testing",tags:["test","unit test","programming"],description:'Today\'s article is done in joint effort with my former colleague and mentor <a href="https://www.linkedin.com/in/guillaumefaas/" target="_blank" rel="noreferrer noopener nofollow">Guillaume Faas</a> (\ud83d\udd39) in the form of an interview of a developer. Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it.',image:"img/unit-testing.jpg"},a=void 0,l={permalink:"/blog/unit-testing",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2022-01-01-unit-testing.mdx",source:"@site/blog/2022-01-01-unit-testing.mdx",title:"Unit Testing",description:'Today\'s article is done in joint effort with my former colleague and mentor <a href="https://www.linkedin.com/in/guillaumefaas/" target="_blank" rel="noreferrer noopener nofollow">Guillaume Faas</a> (\ud83d\udd39) in the form of an interview of a developer. Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it.',date:"2022-01-01T00:00:00.000Z",formattedDate:"January 1, 2022",tags:[{label:"test",permalink:"/blog/tags/test"},{label:"unit test",permalink:"/blog/tags/unit-test"},{label:"programming",permalink:"/blog/tags/programming"}],readingTime:25.98,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"unit-testing",title:"Unit Testing",tags:["test","unit test","programming"],description:'Today\'s article is done in joint effort with my former colleague and mentor <a href="https://www.linkedin.com/in/guillaumefaas/" target="_blank" rel="noreferrer noopener nofollow">Guillaume Faas</a> (\ud83d\udd39) in the form of an interview of a developer. Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it.',image:"img/unit-testing.jpg"},unlisted:!1,prevItem:{title:"What architecture do I use for my projects?",permalink:"/blog/why-did-i-switch-to-clean-architecture"},nextItem:{title:"What is a Container?",permalink:"/blog/what-is-a-container"}},c={authorsImageUrls:[]},u=[];function m(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:"/blog/unit-testing",children:(0,r.jsx)(s.Z,{data:{src:"/img/unit-testing.jpg",alt:"Unit tests",type:"image"}})}),"\n",(0,r.jsxs)(t.p,{children:["Today's article is done in joint effort with my former colleague and mentor ",(0,r.jsx)("a",{href:"https://www.linkedin.com/in/guillaumefaas/",target:"_blank",rel:"noreferrer noopener nofollow",children:"Guillaume Faas"}),"\n(\ud83d\udd39) in the form of an interview of a developer."]}),"\n",(0,r.jsx)(t.p,{children:"Please join me to thank him for his incredible involvement in the writing of this post! We both hope you are gonna love it as much as we loved writing it."})]})}function d(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(m,{...e})}):m(e)}},6728:function(e,t,n){var r=n(2503),i=n(5893);t.Z=e=>{let{children:t,...n}=e;return(0,i.jsx)(r.Z,{as:"h2",...n,children:t})}},3292:function(e,t,n){var r=n(2503),i=n(5893);t.Z=e=>{let{children:t,...n}=e;return(0,i.jsx)(r.Z,{as:"p",...n,children:t})}},9411:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5298),i={container:"container_KXSz",legend:"legend_Ecw3"},s=n(5893);function o(e){if("object"!=typeof e||!e.type)return(0,s.jsx)(s.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,s.jsx)("a",{href:e.url,target:"_blank",children:(0,s.jsx)("img",{...e})}):(0,s.jsx)("img",{...e});case"video":return(0,s.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,s.jsx)("source",{src:e.src,type:e.type}))):(0,s.jsx)("source",{...e})});case"audio":return(0,s.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,s.jsx)("source",{src:e.src,type:e.type}))):(0,s.jsx)("source",{...e})});case"html":return(0,s.jsx)("div",{className:i.container,children:(0,s.jsx)("iframe",{...e})});default:return(0,s.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function a(e){let{data:t,children:n}=e;return t||n?(t.src&&(t.src=(0,r.Z)(t.src)),t.sources&&t.sources.length>0&&(t.sources=t.sources.map((e=>({...e,src:(0,r.Z)(e.src)})))),(0,s.jsxs)("figure",{children:[t&&o(t),(0,s.jsx)("figcaption",{className:i.legend,children:n})]})):(0,s.jsx)(s.Fragment,{})}},9807:function(e,t,n){n.d(t,{Z:function(){return j}});var r=n(7294),i=n(9163),s=n(3868),o=n.n(s),a=n(5999),l="formContainer_ssZr",c="inputContainer_rIzC",u="input_xw7i",m="submit_jbGj",d="status_Xmiw",h="success_K3DK",p="sending_s6rj",g="error_ltts",f=n(5893);const w=e=>{let t,{status:n,message:i,onValidated:s}=e;const w=()=>t&&t.value.indexOf("@")>-1&&o()(t.value)&&s({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("h3",{children:(0,f.jsx)(a.Z,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("input",{className:u,ref:e=>t=e,type:"email",placeholder:(0,a.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?w():null,required:!0,autoComplete:"email"}),(0,f.jsxs)("a",{className:m+" tooltip",rel:"noopener",onClick:w,type:"submit",children:[(0,f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,f.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,f.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===n&&(0,f.jsx)("div",{className:`${d} ${p}`,children:(0,f.jsx)(a.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===n&&(0,f.jsx)("div",{className:`${d} ${g}`,dangerouslySetInnerHTML:{__html:i}}),"success"===n&&(0,f.jsx)("div",{className:`${d} ${h}`,dangerouslySetInnerHTML:{__html:i}})]})};function j(e){let{url:t}=e;return(0,f.jsx)(i.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:r}=e;return(0,f.jsx)(w,{status:n,message:r,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(5999),i=n(5893);function s(){return(0,i.jsx)("div",{className:"center",children:(0,i.jsx)("span",{className:"italic",children:(0,i.jsx)(r.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},831:function(e,t,n){n.d(t,{Z:function(){return a}});var r=n(5742),i=n(2263),s=n(5298),o=n(5893);function a(e){let{uri:t,image:n,type:a}=e;const{siteConfig:l}=(0,i.Z)(),{projectName:c,customFields:{mType:u,twitterName:m}}=l,d=a||u,h=n?(0,s.Z)(n):null,p=(0,s.Z)(t);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(r.Z,{children:[p&&(0,o.jsx)("link",{rel:"canonical",href:p}),p&&(0,o.jsx)("meta",{property:"og:url",content:p}),h&&(0,o.jsx)("meta",{property:"og:image",content:h}),d&&(0,o.jsx)("meta",{property:"og:type",content:d}),c&&(0,o.jsx)("meta",{property:"og:site_name",content:c}),m&&(0,o.jsx)("meta",{property:"twitter:site",content:`@${m}`}),h&&(0,o.jsx)("meta",{name:"twitter:image",content:h}),h&&(0,o.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},5298:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2263),i=n(4996);function s(e){const{siteConfig:t}=(0,r.Z)();let{url:n}=t||{};return`${n}${(0,i.Z)(e)}`}},1151:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var r=n(7294);const i={},s=r.createContext(i);function o(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),r.createElement(s.Provider,{value:t},e.children)}},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);