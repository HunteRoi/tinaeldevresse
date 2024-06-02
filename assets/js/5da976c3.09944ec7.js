"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[3803],{836:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>h,default:()=>y,frontMatter:()=>c,metadata:()=>m,toc:()=>u});var i=t(4848),s=t(8453),o=t(3827),r=t(2467),l=t(695),a=t(7388),d=t(6582);const c={slug:"deployment-environments",title:"Deployment Environments",tags:["deployment","environment","application environment","environment pipeline","CI/CD"],description:"At school, teachers usually focus on languages, algorithmic & clean code. One of the things computer science students don't learn during their studies is deployment environments. In my opini...",image:"img/deployment-environments.png"},h=void 0,m={permalink:"/blog/deployment-environments",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2021-01-01-deployment-environments.mdx",source:"@site/blog/2021-01-01-deployment-environments.mdx",title:"Deployment Environments",description:"At school, teachers usually focus on languages, algorithmic & clean code. One of the things computer science students don't learn during their studies is deployment environments. In my opini...",date:"2021-01-01T00:00:00.000Z",tags:[{inline:!0,label:"deployment",permalink:"/blog/tags/deployment"},{inline:!0,label:"environment",permalink:"/blog/tags/environment"},{inline:!0,label:"application environment",permalink:"/blog/tags/application-environment"},{inline:!0,label:"environment pipeline",permalink:"/blog/tags/environment-pipeline"},{inline:!0,label:"CI/CD",permalink:"/blog/tags/ci-cd"}],readingTime:8.515,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"deployment-environments",title:"Deployment Environments",tags:["deployment","environment","application environment","environment pipeline","CI/CD"],description:"At school, teachers usually focus on languages, algorithmic & clean code. One of the things computer science students don't learn during their studies is deployment environments. In my opini...",image:"img/deployment-environments.png"},unlisted:!1,prevItem:{title:"What is a Container?",permalink:"/blog/what-is-a-container"},nextItem:{title:"What Makes a Good Developer?",permalink:"/blog/what-makes-a-good-developer"}},p={authorsImageUrls:[]},u=[{value:"What is a deployment environment?",id:"what-is-a-deployment-environment",level:2},{value:"Why can deployment be difficult ?",id:"why-can-deployment-be-difficult-",level:2},{value:"The different types of environment",id:"the-different-types-of-environment",level:2},{value:"The local environment",id:"the-local-environment",level:3},{value:"Goals",id:"goals",level:4},{value:"The development environment",id:"the-development-environment",level:3},{value:"Goals",id:"goals-1",level:4},{value:"The testing environment",id:"the-testing-environment",level:3},{value:"Goals",id:"goals-2",level:4},{value:"The staging environment",id:"the-staging-environment",level:3},{value:"Goals",id:"goals-3",level:4},{value:"The production environment",id:"the-production-environment",level:3},{value:"Goals",id:"goals-4",level:4},{value:"How to choose your environments pipeline?",id:"how-to-choose-your-environments-pipeline",level:2},{value:"Company A",id:"company-a",level:3},{value:"Company B &amp; Company C",id:"company-b--company-c",level:3},{value:"Conclusion",id:"conclusion",level:2}];function g(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,s.R)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{href:"/blog/deployment-environments",children:(0,i.jsx)(o.A,{data:{src:"/img/deployment-environments.png",alt:"Deployment Environments",type:"image"}})}),"\n",(0,i.jsx)(n.p,{children:"At school, teachers usually focus on languages, algorithmic & clean code. One of the things computer science students don't learn during their studies is deployment environments.\nIn my opinion, this is an important knowledge when starting to work for bigger companies as they tend to add more layers to their environments pipeline."}),"\n","\n",(0,i.jsx)(r.A,{uri:"blog/deployment-environments",image:"/img/deployment-environments.png",type:"article"}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(l.A,{}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.p,{children:"This article is more accurate and targets a certain field of people. I hope you'll find it interesting! I am eager to read your opinion on the social medias."}),"\n",(0,i.jsx)(n.h2,{id:"what-is-a-deployment-environment",children:"What is a deployment environment?"}),"\n",(0,i.jsxs)(n.p,{children:["If you are here, it is probably because you are wondering what is a deployment environment (not to confuse with a development environment which is a whole other topic).\n",(0,i.jsx)(n.strong,{children:"An environment in the world of software deployment is \xab a computer system in which a program or software component is deployed and executed \xbb."})," It isn't me saying this, it's ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Deployment_environment",children:"Wikipedia"}),". But this definition is pretty good, I must say."]}),"\n",(0,i.jsxs)(n.p,{children:["As software systems, development processes and computer resources tend to be more distributed, they also become more complex and specialized.\nWhen working on a project, you typically go through a ",(0,i.jsx)(n.em,{children:"cycle"}),' of development, testing and release often evolving on different platforms with different resources and growing complexity.\nThis is what we call "release management". This process allows rollout (which means "deploy something to environment"), testing and rollback if necessary (which means "remove the newly deployed version").']}),"\n",(0,i.jsx)(n.p,{children:"For the sake of understanding the rest of this post, I will briefly explain what are the different steps of product development an application usually goes through. Let me introduce you to the usual stages:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsx)(n.li,{children:"Analyze the problem and come up with a digital solution."}),"\n",(0,i.jsx)(n.li,{children:"[A lot of market stuff here involving solution validation, market research, etc.]"}),"\n",(0,i.jsx)(n.li,{children:"Design the software."}),"\n",(0,i.jsx)(n.li,{children:"Implement it (development of features that solve the problem and/or add more value)."}),"\n",(0,i.jsx)(n.li,{children:"Test it."}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.strong,{children:"Deploy it"})," (today's article is focused on this particular point)"]}),"\n",(0,i.jsx)(n.li,{children:"Maintain it / fix its bugs."}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"why-can-deployment-be-difficult-",children:"Why can deployment be difficult ?"}),"\n",(0,i.jsxs)(n.p,{children:["You know that cycle I am talking about? Well it occurs from the 3rd stage to the 7th, more or less.\nWhat is important to understand in this cycle is that we usually deploy different versions of the software on different machines, at different stages of the development process and following different requirements.\nWhen you start developing an application, you already know your process management (I hope so, aha!). And in a lot of cases, you go with the ",(0,i.jsx)(n.a,{href:"https://en.wikipedia.org/wiki/Agile_software_development",children:"Agile methodology"}),"."]}),"\n",(0,i.jsx)(o.A,{data:{src:"/img/agile-methodology-process.jpg",alt:"Agile process",type:"image"},children:(0,i.jsxs)(n.p,{children:["Made by ",(0,i.jsx)("a",{href:"https://www.shutterstock.com/g/Tartila",target:"_blank",children:"Tartila"})]})}),"\n",(0,i.jsx)(n.p,{children:"I would like to point out that the cycle hides another one when you're in the industry: you have to move the different versions of your application from environments to environments. But an environment is not only a machine where your application runs! It often also means different data, different limits, different goals, different processes, and much more things with the \"different\" adjective.\nBasically, while your application is growing at a certain step (let's call it the youngest version), you have a few older versions before that need to move. If your company don't have sysadmins or that you work with the Cloud, the developer usually has to manage this rollouts and possible rollbacks (not to remind you that you don't just move the app)."}),"\n",(0,i.jsx)(o.A,{data:{src:"/img/small-fix.jpg",alt:"Dont Deploy On Friday",type:"image"}}),"\n",(0,i.jsx)(n.p,{children:"While I'm pretty sure you now know how much complex it can get, let me point out that automation tools exist to ease our work (and thanks God!)."}),"\n",(0,i.jsx)(n.h2,{id:"the-different-types-of-environment",children:"The different types of environment"}),"\n",(0,i.jsx)(n.p,{children:"Every organization has its own way of dealing with this topic, and usually it's even scoped on the project as all softwares don't rely on the same hardware & business requirements."}),"\n",(0,i.jsx)(n.p,{children:"Let me introduce you to some of the standard environments you might encounter."}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"Name"}),(0,i.jsx)(n.th,{children:"Used by"}),(0,i.jsx)(n.th,{children:"Data"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:"Local"}),(0,i.jsx)(n.td,{children:"You"}),(0,i.jsx)(n.td,{children:"No client data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Dev"}),"elopment"]}),(0,i.jsx)(n.td,{children:"Developers"}),(0,i.jsx)(n.td,{children:"No client data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Test"}),"ing"]}),(0,i.jsx)(n.td,{children:"QA engineers"}),(0,i.jsx)(n.td,{children:"No client data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"Staging"})}),(0,i.jsx)(n.td,{children:"QA engineers and/or clients"}),(0,i.jsx)(n.td,{children:"Limited production data"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.strong,{children:"Prod"}),"uction"]}),(0,i.jsx)(n.td,{children:"End customers"}),(0,i.jsx)(n.td,{children:"Full production data"})]})]})]}),"\n",(0,i.jsx)(n.h3,{id:"the-local-environment",children:"The local environment"}),"\n",(0,i.jsxs)(n.p,{children:["This is ",(0,i.jsx)(n.em,{children:"your computer"}),". The first place where all the work happens to be done. It's broken 80% of the time."]}),"\n",(0,i.jsx)(n.h4,{id:"goals",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Work on your own tasks"}),"\n",(0,i.jsx)(n.li,{children:"See the result and make your merry way"}),"\n",(0,i.jsx)(n.li,{children:"Run the first battery of tests before sending your code to your colleagues"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"the-development-environment",children:"The development environment"}),"\n",(0,i.jsx)(n.p,{children:"This is the place where all developers' work lies. It is acceptable to be broken (although you should avoid it if you don't like to have your colleagues complaining about \"dev being down\").\nNobody but the team engaged in building the product should ever access this environment."}),"\n",(0,i.jsx)(n.h4,{id:"goals-1",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Run and test with development data"}),"\n",(0,i.jsx)(n.li,{children:"Verify that your code works well with everyone else's"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"the-testing-environment",children:"The testing environment"}),"\n",(0,i.jsx)(n.p,{children:"Also called QA (for Quality Assurance), this is where the rest of your company enters the game. This environment is basically the last step before releasing the newly developed features to real end users."}),"\n",(0,i.jsx)(n.h4,{id:"goals-2",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Check for any issue that previous manual and automated tests did not catch"}),"\n",(0,i.jsx)(n.li,{children:"Prove that specific criteria are met (usually, validating the technical side of the feature)"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"the-staging-environment",children:"The staging environment"}),"\n",(0,i.jsx)(n.p,{children:'This environment has a lot of names. People call it "pre-production" or even User Acceptance Testing (UAT).\nIt is usually meant to simulate Production in as many ways as possible. It can be used to demo new features, ask for feedback from selected users validating the end to end business flow and train clients on upcoming changes.'}),"\n",(0,i.jsx)(n.h4,{id:"goals-3",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Prevent releasing bugs to production"}),"\n",(0,i.jsx)(n.li,{children:"Validate end to end business flow"}),"\n",(0,i.jsx)(n.li,{children:"Train high-touch clients on new changes"}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"the-production-environment",children:"The production environment"}),"\n",(0,i.jsx)(n.p,{children:"This is the sacred environment which you should never break. Real customers are using it. If you break it, you lose money. Got it?"}),"\n",(0,i.jsx)(n.h4,{id:"goals-4",children:"Goals"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Be the last depositary of all other environments."}),"\n",(0,i.jsx)(n.li,{children:"Give the customers the solution to their problem(s) on a specific topic"}),"\n",(0,i.jsx)(n.li,{children:"Be reliable, bug free, always up and running"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"how-to-choose-your-environments-pipeline",children:"How to choose your environments pipeline?"}),"\n",(0,i.jsxs)(n.p,{children:["You don't randomly choose between carved-in-stone pipelines that will answer all your needs. Pipelines are specially built for ",(0,i.jsx)(n.em,{children:"the project to be deployed"}),".\nI have seen a few things here and there, and there are a lot of hosting companies like Heroku which offer help to set up your deployment pipeline."]}),"\n",(0,i.jsx)(n.p,{children:"The following figure shows a few pipelines I heard of, have been working with or am actually using. Let's say each pipeline is the default one for companies A, B & C."}),"\n",(0,i.jsx)(o.A,{data:{src:"/img/deployment-environments.svg",alt:"Deployment Environments",type:"img"},children:(0,i.jsx)(n.p,{children:"Schema of companies A, B & C 's deployment pipelines"})}),"\n",(0,i.jsx)(n.h3,{id:"company-a",children:"Company A"}),"\n",(0,i.jsx)(n.p,{children:"This corporation uses a well-known design called the DTAP approach standing for Development - Testing - Acceptance - Production.\nThis is the most standard pipeline you can have. It is usually used (not as is, but largely edited) in big companies."}),"\n",(0,i.jsx)(n.p,{children:"However, the schema for this company has a few particularities I want to talk about : the number of running instances in each environment.\nThe schema shows that you can choose between having a single instance of your application or several ones running at a stage of the process."}),"\n",(0,i.jsx)(n.p,{children:"Obviously, choosing to host several instances at the same time costs more and has its cons but brings a few advantages :"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can deploy specific features on a specific instance."}),"\n",(0,i.jsx)(n.li,{children:"It allows your development team to work in smaller groups (e.g.: team 1 works on list 1 of features in instance 1; team 2 on list 2 in instance 2; ...)."}),"\n",(0,i.jsx)(n.li,{children:"It's cool to see when your instance runs smoothly and the others are down because they fucked up (don't get blind though, you'll get by that damn road as well)."}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"company-b--company-c",children:"Company B & Company C"}),"\n",(0,i.jsx)(n.p,{children:'These companies got rid of the "test" environment. This happens when you can afford to test your flow along with everything else in either your development environment or your staging environment. It is also a possibility for small teams.'}),"\n",(0,i.jsx)(n.p,{children:"The only difference between these two are the number of instances running at each stage. When building a small project, you usually go for company C's plan as there are less steps to do in order to deploy and go from one environment to another."}),"\n",(0,i.jsxs)(n.p,{children:["In my humble opinion, I like the schema C but I'd rather simplify it again. For example, when I work on a Discord bot (",(0,i.jsx)(n.a,{href:"https://discord.com",children:"if you don't know Discord, check it out"}),"), I use :"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"my local environment running locally and connecting to Cloud resources (such as a database and Discord's web service),"}),"\n",(0,i.jsxs)(n.li,{children:["the dev/staging environment (",(0,i.jsx)(n.em,{children:"yep, it's a single env"}),") running the beta version of the bot, and"]}),"\n",(0,i.jsx)(n.li,{children:"the production environment which hosts the final version of the bot available for Discord users."}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"I cannot give you some sacred deployment approach dipped in magic sauce that will perfectly work for all your projects because it does not exist.\nYou must come up with your own custom plan. But these defaults should at least guide you for a bit!"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.strong,{children:"And you guys, what does your favorite deployment pipeline look like?"})}),"\n",(0,i.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsx)(n.p,{children:"Deployment environments are a big story and this article only has the purpose to gently half-open a door.\nAs the DevOps trend is more and more intriguing in the eyes of companies, it is a plus to have experience with such things."}),"\n",(0,i.jsx)(n.p,{children:"I hope you will fully open the doors I wish to show you. Until then, see you next time!"}),"\n",(0,i.jsx)(a.A,{url:d.pt})]})}function y(e={}){const{wrapper:n}={...(0,s.R)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},3827:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(299);const s={container:"container_KXSz",legend:"legend_Ecw3"};var o=t(4848);function r(e){if("object"!=typeof e||!e.type)return(0,o.jsx)(o.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,o.jsx)("a",{href:e.url,target:"_blank",children:(0,o.jsx)("img",{...e})}):(0,o.jsx)("img",{...e});case"video":return(0,o.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,o.jsx)("source",{src:e.src,type:e.type}))):(0,o.jsx)("source",{...e})});case"audio":return(0,o.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,o.jsx)("source",{src:e.src,type:e.type}))):(0,o.jsx)("source",{...e})});case"html":return(0,o.jsx)("div",{className:s.container,children:(0,o.jsx)("iframe",{...e})});default:return(0,o.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function l(e){let{data:n,children:t}=e;return n||t?(n.src&&!n.src.startsWith("http")&&(n.src=(0,i.A)(n.src)),n.sources&&n.sources.length>0&&(n.sources=n.sources.map((e=>({...e,src:e.src.startsWith("http")?e.src:(0,i.A)(e.src)})))),(0,o.jsxs)("figure",{children:[n&&r(n),(0,o.jsx)("figcaption",{className:s.legend,children:t})]})):(0,o.jsx)(o.Fragment,{})}},7388:(e,n,t)=>{t.d(n,{A:()=>f});var i=t(6540),s=t(231),o=t(9517),r=t.n(o),l=t(1312);const a="formContainer_ssZr",d="inputContainer_rIzC",c="input_xw7i",h="submit_jbGj",m="status_Xmiw",p="success_K3DK",u="sending_s6rj",g="error_ltts";var y=t(4848);const v=e=>{let n,{status:t,message:s,onValidated:o}=e;const v=()=>n&&n.value.indexOf("@")>-1&&r()(n.value)&&o({EMAIL:n.value});return(0,i.useEffect)((()=>{t&&"success"===t&&(n.text="")}),[t]),(0,y.jsxs)("div",{className:a,children:[(0,y.jsx)("h3",{children:(0,y.jsx)(l.A,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,y.jsxs)("div",{className:d,children:[(0,y.jsx)("input",{className:c,ref:e=>n=e,type:"email",placeholder:(0,l.T)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?v():null,required:!0,autoComplete:"email"}),(0,y.jsxs)("a",{className:h+" tooltip",rel:"noopener",onClick:v,type:"submit",children:[(0,y.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,y.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,y.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===t&&(0,y.jsx)("div",{className:`${m} ${u}`,children:(0,y.jsx)(l.A,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===t&&(0,y.jsx)("div",{className:`${m} ${g}`,dangerouslySetInnerHTML:{__html:s}}),"success"===t&&(0,y.jsx)("div",{className:`${m} ${p}`,dangerouslySetInnerHTML:{__html:s}})]})};function f(e){let{url:n}=e;return(0,y.jsx)(s.A,{url:n,render:e=>{let{subscribe:n,status:t,message:i}=e;return(0,y.jsx)(v,{status:t,message:i,onValidated:e=>n(e)})}})}},695:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(1312),s=t(4848);function o(){return(0,s.jsx)("div",{className:"center",children:(0,s.jsx)("span",{className:"italic",children:(0,s.jsx)(i.A,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},2467:(e,n,t)=>{t.d(n,{A:()=>l});var i=t(5260),s=t(4586),o=t(299),r=t(4848);function l(e){let{uri:n,image:t,type:l}=e;const{siteConfig:a}=(0,s.A)(),{projectName:d,customFields:{mType:c,twitterName:h}}=a,m=l||c,p=t?(0,o.A)(t):null,u=(0,o.A)(n);return(0,r.jsx)(r.Fragment,{children:(0,r.jsxs)(i.A,{children:[u&&(0,r.jsx)("link",{rel:"canonical",href:u}),u&&(0,r.jsx)("meta",{property:"og:url",content:u}),p&&(0,r.jsx)("meta",{property:"og:image",content:p}),m&&(0,r.jsx)("meta",{property:"og:type",content:m}),d&&(0,r.jsx)("meta",{property:"og:site_name",content:d}),h&&(0,r.jsx)("meta",{property:"twitter:site",content:`@${h}`}),p&&(0,r.jsx)("meta",{name:"twitter:image",content:p}),p&&(0,r.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},299:(e,n,t)=>{t.d(n,{A:()=>o});var i=t(4586),s=t(6025);function o(e){const{siteConfig:n}=(0,i.A)();let{url:t}=n||{};return`${t}${(0,s.Ay)(e)}`}},8453:(e,n,t)=>{t.d(n,{R:()=>r,x:()=>l});var i=t(6540);const s={},o=i.createContext(s);function r(e){const n=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),i.createElement(o.Provider,{value:n},e.children)}},6582:e=>{e.exports=JSON.parse('{"pt":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);