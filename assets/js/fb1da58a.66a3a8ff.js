"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[8279],{1775:function(e,t,n){n.r(t),n.d(t,{assets:function(){return l},contentTitle:function(){return o},default:function(){return m},frontMatter:function(){return a},metadata:function(){return c},toc:function(){return u}});var r=n(5893),i=n(1151),s=n(9411);n(831),n(1324),n(9807),n(3089);const a={slug:"sharing-is-caring",title:"Sharing is caring",tags:["development","coach","agility","IT","craft","software craftsman"],description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',image:"/img/coaching.jpg"},o=void 0,c={permalink:"/blog/sharing-is-caring",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2023-04-06-sharing-is-caring.mdx",source:"@site/blog/2023-04-06-sharing-is-caring.mdx",title:"Sharing is caring",description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"development",permalink:"/blog/tags/development"},{label:"coach",permalink:"/blog/tags/coach"},{label:"agility",permalink:"/blog/tags/agility"},{label:"IT",permalink:"/blog/tags/it"},{label:"craft",permalink:"/blog/tags/craft"},{label:"software craftsman",permalink:"/blog/tags/software-craftsman"}],readingTime:9.31,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"sharing-is-caring",title:"Sharing is caring",tags:["development","coach","agility","IT","craft","software craftsman"],description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',image:"/img/coaching.jpg"},unlisted:!1,nextItem:{title:"What architecture do I use for my projects?",permalink:"/blog/why-did-i-switch-to-clean-architecture"}},l={authorsImageUrls:[]},u=[];function d(e){const t={p:"p",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)("a",{href:"/blog/sharing-is-caring",children:(0,r.jsx)(s.Z,{data:{src:"/img/coaching.jpg",alt:"Example Mapping used to get feedback on my coaching session",type:"image"},children:(0,r.jsx)(t.p,{children:"My client's feedback on my first coaching mission"})})}),"\n",(0,r.jsx)(t.p,{children:"For quite some time now, I have been thinking about my career and how I would like it to evolve.\nYou know that too, don't you? Every time you have an interview as a young person, you are asked \"where do you see yourself in x years?\".\nIt did not tickle me at the beginning, but with some experience, you learn and understand what you like and especially what you don't like."}),"\n",(0,r.jsx)(t.p,{children:"Finally, where do I see myself in a few years?"})]})}function m(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},9411:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5298),i={container:"container_KXSz",legend:"legend_Ecw3"},s=n(5893);function a(e){if("object"!=typeof e||!e.type)return(0,s.jsx)(s.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,s.jsx)("a",{href:e.url,target:"_blank",children:(0,s.jsx)("img",{...e})}):(0,s.jsx)("img",{...e});case"video":return(0,s.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,s.jsx)("source",{src:e.src,type:e.type}))):(0,s.jsx)("source",{...e})});case"audio":return(0,s.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,s.jsx)("source",{src:e.src,type:e.type}))):(0,s.jsx)("source",{...e})});case"html":return(0,s.jsx)("div",{className:i.container,children:(0,s.jsx)("iframe",{...e})});default:return(0,s.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function o(e){let{data:t,children:n}=e;return t||n?(t.src&&(t.src=(0,r.Z)(t.src)),t.sources&&t.sources.length>0&&(t.sources=t.sources.map((e=>({...e,src:(0,r.Z)(e.src)})))),(0,s.jsxs)("figure",{children:[t&&a(t),(0,s.jsx)("figcaption",{className:i.legend,children:n})]})):(0,s.jsx)(s.Fragment,{})}},9807:function(e,t,n){n.d(t,{Z:function(){return x}});var r=n(7294),i=n(9163),s=n(3868),a=n.n(s),o=n(5999),c="formContainer_ssZr",l="inputContainer_rIzC",u="input_xw7i",d="submit_jbGj",m="status_Xmiw",h="success_K3DK",g="sending_s6rj",p="error_ltts",y=n(5893);const f=e=>{let t,{status:n,message:i,onValidated:s}=e;const f=()=>t&&t.value.indexOf("@")>-1&&a()(t.value)&&s({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),(0,y.jsxs)("div",{className:c,children:[(0,y.jsx)("h3",{children:(0,y.jsx)(o.Z,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,y.jsxs)("div",{className:l,children:[(0,y.jsx)("input",{className:u,ref:e=>t=e,type:"email",placeholder:(0,o.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?f():null,required:!0,autoComplete:"email"}),(0,y.jsxs)("a",{className:d+" tooltip",rel:"noopener",onClick:f,type:"submit",children:[(0,y.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,y.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,y.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===n&&(0,y.jsx)("div",{className:`${m} ${g}`,children:(0,y.jsx)(o.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===n&&(0,y.jsx)("div",{className:`${m} ${p}`,dangerouslySetInnerHTML:{__html:i}}),"success"===n&&(0,y.jsx)("div",{className:`${m} ${h}`,dangerouslySetInnerHTML:{__html:i}})]})};function x(e){let{url:t}=e;return(0,y.jsx)(i.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:r}=e;return(0,y.jsx)(f,{status:n,message:r,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(5999),i=n(5893);function s(){return(0,i.jsx)("div",{className:"center",children:(0,i.jsx)("span",{className:"italic",children:(0,i.jsx)(r.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},831:function(e,t,n){n.d(t,{Z:function(){return o}});var r=n(5742),i=n(2263),s=n(5298),a=n(5893);function o(e){let{uri:t,image:n,type:o}=e;const{siteConfig:c}=(0,i.Z)(),{projectName:l,customFields:{mType:u,twitterName:d}}=c,m=o||u,h=n?(0,s.Z)(n):null,g=(0,s.Z)(t);return(0,a.jsx)(a.Fragment,{children:(0,a.jsxs)(r.Z,{children:[g&&(0,a.jsx)("link",{rel:"canonical",href:g}),g&&(0,a.jsx)("meta",{property:"og:url",content:g}),h&&(0,a.jsx)("meta",{property:"og:image",content:h}),m&&(0,a.jsx)("meta",{property:"og:type",content:m}),l&&(0,a.jsx)("meta",{property:"og:site_name",content:l}),d&&(0,a.jsx)("meta",{property:"twitter:site",content:`@${d}`}),h&&(0,a.jsx)("meta",{name:"twitter:image",content:h}),h&&(0,a.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},5298:function(e,t,n){n.d(t,{Z:function(){return s}});var r=n(2263),i=n(4996);function s(e){const{siteConfig:t}=(0,r.Z)();let{url:n}=t||{};return`${n}${(0,i.Z)(e)}`}},1151:function(e,t,n){n.d(t,{Z:function(){return o},a:function(){return a}});var r=n(7294);const i={},s=r.createContext(i);function a(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:a(e.components),r.createElement(s.Provider,{value:t},e.children)}},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);