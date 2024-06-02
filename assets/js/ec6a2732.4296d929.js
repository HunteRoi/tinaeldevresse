"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[5910],{1133:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=r(4848),i=r(8453),n=r(3827);r(2467),r(695),r(7388),r(6582);const a={slug:"why-did-i-switch-to-clean-architecture",title:"What architecture do I use for my projects?",tags:["development","structure","architecture"],description:"I decided to talk about the architecture choice I take when developing my app!",image:"/img/why-did-i-switch-to-clean-architecture.png"},c=void 0,o={permalink:"/blog/why-did-i-switch-to-clean-architecture",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",source:"@site/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",title:"What architecture do I use for my projects?",description:"I decided to talk about the architecture choice I take when developing my app!",date:"2022-06-01T00:00:00.000Z",tags:[{inline:!0,label:"development",permalink:"/blog/tags/development"},{inline:!0,label:"structure",permalink:"/blog/tags/structure"},{inline:!0,label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:8.43,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"why-did-i-switch-to-clean-architecture",title:"What architecture do I use for my projects?",tags:["development","structure","architecture"],description:"I decided to talk about the architecture choice I take when developing my app!",image:"/img/why-did-i-switch-to-clean-architecture.png"},unlisted:!1,prevItem:{title:"Sharing is caring",permalink:"/blog/sharing-is-caring"},nextItem:{title:"Unit Testing",permalink:"/blog/unit-testing"}},l={authorsImageUrls:[]},d=[];function u(e){const t={p:"p",...(0,i.R)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)("a",{href:"/blog/why-did-i-switch-to-clean-architecture",children:(0,s.jsx)(n.A,{data:{src:"/img/why-did-i-switch-to-clean-architecture.png",alt:"My Love for Clean Architecture",type:"image"}})}),"\n",(0,s.jsx)(t.p,{children:"I decided to talk about the architecture choice I take when developing my apps!"})]})}function h(e={}){const{wrapper:t}={...(0,i.R)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},3827:(e,t,r)=>{r.d(t,{A:()=>c});var s=r(299);const i={container:"container_KXSz",legend:"legend_Ecw3"};var n=r(4848);function a(e){if("object"!=typeof e||!e.type)return(0,n.jsx)(n.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,n.jsx)("a",{href:e.url,target:"_blank",children:(0,n.jsx)("img",{...e})}):(0,n.jsx)("img",{...e});case"video":return(0,n.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,n.jsx)("source",{src:e.src,type:e.type}))):(0,n.jsx)("source",{...e})});case"audio":return(0,n.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,n.jsx)("source",{src:e.src,type:e.type}))):(0,n.jsx)("source",{...e})});case"html":return(0,n.jsx)("div",{className:i.container,children:(0,n.jsx)("iframe",{...e})});default:return(0,n.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function c(e){let{data:t,children:r}=e;return t||r?(t.src&&!t.src.startsWith("http")&&(t.src=(0,s.A)(t.src)),t.sources&&t.sources.length>0&&(t.sources=t.sources.map((e=>({...e,src:e.src.startsWith("http")?e.src:(0,s.A)(e.src)})))),(0,n.jsxs)("figure",{children:[t&&a(t),(0,n.jsx)("figcaption",{className:i.legend,children:r})]})):(0,n.jsx)(n.Fragment,{})}},7388:(e,t,r)=>{r.d(t,{A:()=>y});var s=r(6540),i=r(231),n=r(9517),a=r.n(n),c=r(1312);const o="formContainer_ssZr",l="inputContainer_rIzC",d="input_xw7i",u="submit_jbGj",h="status_Xmiw",p="success_K3DK",m="sending_s6rj",g="error_ltts";var x=r(4848);const j=e=>{let t,{status:r,message:i,onValidated:n}=e;const j=()=>t&&t.value.indexOf("@")>-1&&a()(t.value)&&n({EMAIL:t.value});return(0,s.useEffect)((()=>{r&&"success"===r&&(t.text="")}),[r]),(0,x.jsxs)("div",{className:o,children:[(0,x.jsx)("h3",{children:(0,x.jsx)(c.A,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,x.jsxs)("div",{className:l,children:[(0,x.jsx)("input",{className:d,ref:e=>t=e,type:"email",placeholder:(0,c.T)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?j():null,required:!0,autoComplete:"email"}),(0,x.jsxs)("a",{className:u+" tooltip",rel:"noopener",onClick:j,type:"submit",children:[(0,x.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,x.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,x.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===r&&(0,x.jsx)("div",{className:`${h} ${m}`,children:(0,x.jsx)(c.A,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===r&&(0,x.jsx)("div",{className:`${h} ${g}`,dangerouslySetInnerHTML:{__html:i}}),"success"===r&&(0,x.jsx)("div",{className:`${h} ${p}`,dangerouslySetInnerHTML:{__html:i}})]})};function y(e){let{url:t}=e;return(0,x.jsx)(i.A,{url:t,render:e=>{let{subscribe:t,status:r,message:s}=e;return(0,x.jsx)(j,{status:r,message:s,onValidated:e=>t(e)})}})}},695:(e,t,r)=>{r.d(t,{A:()=>n});var s=r(1312),i=r(4848);function n(){return(0,i.jsx)("div",{className:"center",children:(0,i.jsx)("span",{className:"italic",children:(0,i.jsx)(s.A,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},2467:(e,t,r)=>{r.d(t,{A:()=>c});var s=r(5260),i=r(4586),n=r(299),a=r(4848);function c(e){let{uri:t,image:r,type:c}=e;const{siteConfig:o}=(0,i.A)(),{projectName:l,customFields:{mType:d,twitterName:u}}=o,h=c||d,p=r?(0,n.A)(r):null,m=(0,n.A)(t);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(s.A,{children:[m&&(0,a.jsx)("link",{rel:"canonical",href:m}),m&&(0,a.jsx)("meta",{property:"og:url",content:m}),p&&(0,a.jsx)("meta",{property:"og:image",content:p}),h&&(0,a.jsx)("meta",{property:"og:type",content:h}),l&&(0,a.jsx)("meta",{property:"og:site_name",content:l}),u&&(0,a.jsx)("meta",{property:"twitter:site",content:`@${u}`}),p&&(0,a.jsx)("meta",{name:"twitter:image",content:p}),p&&(0,a.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},299:(e,t,r)=>{r.d(t,{A:()=>n});var s=r(4586),i=r(6025);function n(e){const{siteConfig:t}=(0,s.A)();let{url:r}=t||{};return`${r}${(0,i.Ay)(e)}`}},8453:(e,t,r)=>{r.d(t,{R:()=>a,x:()=>c});var s=r(6540);const i={},n=s.createContext(i);function a(e){const t=s.useContext(n);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function c(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),s.createElement(n.Provider,{value:t},e.children)}},6582:e=>{e.exports=JSON.parse('{"pt":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);