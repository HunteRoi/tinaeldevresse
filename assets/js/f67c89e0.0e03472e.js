"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[4753],{931:function(e,t,n){n.r(t),n.d(t,{assets:function(){return p},contentTitle:function(){return d},default:function(){return f},frontMatter:function(){return h},metadata:function(){return u},toc:function(){return m}});var i=n(5893),r=n(1151),s=n(9411),o=n(831),a=n(1324),l=n(9807),c=n(3089);const h={slug:"why-did-i-switch-to-clean-architecture",title:"What architecture do I use for my projects?",tags:["development","structure","architecture"],description:"I decided to talk about the architecture choice I take when developing my app!",image:"/img/why-did-i-switch-to-clean-architecture.png"},d=void 0,u={permalink:"/blog/why-did-i-switch-to-clean-architecture",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",source:"@site/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",title:"What architecture do I use for my projects?",description:"I decided to talk about the architecture choice I take when developing my app!",date:"2022-06-01T00:00:00.000Z",formattedDate:"June 1, 2022",tags:[{label:"development",permalink:"/blog/tags/development"},{label:"structure",permalink:"/blog/tags/structure"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:8.43,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"why-did-i-switch-to-clean-architecture",title:"What architecture do I use for my projects?",tags:["development","structure","architecture"],description:"I decided to talk about the architecture choice I take when developing my app!",image:"/img/why-did-i-switch-to-clean-architecture.png"},unlisted:!1,prevItem:{title:"Sharing is caring",permalink:"/blog/sharing-is-caring"},nextItem:{title:"Unit Testing",permalink:"/blog/unit-testing"}},p={authorsImageUrls:[]},m=[{value:"The N-Tier architecture",id:"the-n-tier-architecture",level:2},{value:"What is it?",id:"what-is-it",level:3},{value:"Pros &amp; Cons",id:"pros--cons",level:3},{value:"When to use it?",id:"when-to-use-it",level:3},{value:"The Clean Architecture",id:"the-clean-architecture",level:2},{value:"What is it?",id:"what-is-it-1",level:3},{value:"Pros &amp; Cons",id:"pros--cons-1",level:3},{value:"When to use it?",id:"when-to-use-it-1",level:3},{value:"So why do I prefer CA over N-Tier?",id:"so-why-do-i-prefer-ca-over-n-tier",level:2},{value:"Conclusion",id:"conclusion",level:2}];function g(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)("a",{href:"/blog/why-did-i-switch-to-clean-architecture",children:(0,i.jsx)(s.Z,{data:{src:"/img/why-did-i-switch-to-clean-architecture.png",alt:"My Love for Clean Architecture",type:"image"}})}),"\n",(0,i.jsx)(t.p,{children:"I decided to talk about the architecture choice I take when developing my apps!"}),"\n","\n",(0,i.jsx)(o.Z,{uri:"blog/why-did-i-switch-to-clean-architecture",image:"img/why-did-i-switch-to-clean-architecture.png",type:"article"}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(a.Z,{}),"\n",(0,i.jsx)(t.hr,{}),"\n",(0,i.jsx)(t.p,{children:"Not long ago, I have been asked the following by fellow developers:"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:"How do you structure your projects because when they evolve, the basic n-tier architecture becomes more complex and they tend to create messy solutions."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"I don't have all the answers but what I actually said is that when it comes to my own projects, I make a simple choice:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"If I am working on a basic CRUD app, I will definitely go for a 3-Tier architecture."}),"\n",(0,i.jsxs)(t.li,{children:["But if I need to build a more complex app requiring a strong business logic and which must scream its goal,\nI will definitely use what Robert C. Martin called ",(0,i.jsx)(t.a,{href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html",children:"the Clean Architecture"})," in 2012.\nOf course, my version is not strictly following what Uncle Bob describes in his blog as I have tailored it to my needs but let's talk about it."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["Nowadays though, I tend to be more inclined to use the latter. But ",(0,i.jsx)(t.strong,{children:"what does the Clean Architecture bring me that I love and that n-tier does not?"})]}),"\n",(0,i.jsx)(t.h2,{id:"the-n-tier-architecture",children:"The N-Tier architecture"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-it",children:"What is it?"}),"\n",(0,i.jsx)(t.p,{children:"First of all, it would be a shame to talk about the Clean Architecture and not talk about what I have learnt during my years at school: the n-tier architecture.\nThis type of architecture is usually presented as and mixed up with one of its specific version: the 3-tier architecture."}),"\n",(0,i.jsx)(t.p,{children:"This architecture places the data as the core of the application. The 3 layers are:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"the presentation layer, responsible of presenting the information to the outside ;"}),"\n",(0,i.jsx)(t.li,{children:"the logic layer, responsible of the business logic that should be applied on the data ;"}),"\n",(0,i.jsx)(t.li,{children:"the data layer, responsible of the data access."}),"\n"]}),"\n",(0,i.jsx)(s.Z,{data:{src:"/img/3-tier-architecture.jpg",alt:"3-tier schema",type:"image"}}),"\n",(0,i.jsx)(t.p,{children:'Of course, the "n" in the name means that you can actually have less or more than 3 tiers. The layers described above are just the common ground.\nThere are other types of comparable structures like the 2-tier architecture, the single tier, the 4-tier ...\nWhen developing a project, you usually tailor the architecture to your needs. You could even subdivide the 3 common layers into sub-layers depending on your requirements.'}),"\n",(0,i.jsx)(t.h3,{id:"pros--cons",children:"Pros & Cons"}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.strong,{children:"advantages"}),", we can list the following:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:'more secure \u2014 The presentation layer (usually the UI or such) is not "directly" wired to the database. All connections to it are shielded by the logic layer.'}),"\n",(0,i.jsx)(t.li,{children:'easily maintainable \u2014 at the time of its "creation", this archi allowed the developers to maintain it much more easily than the previous architectures did.'}),"\n",(0,i.jsx)(t.li,{children:"easy to reuse \u2014 it is easier to reuse the logic of each layer."}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.strong,{children:"disadvantages"}),", let's have a quick look too:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"increase in effort \u2014 implementing new features takes time as you have to go through all tiers.\nChanging a single thing in the database layer is reflected to the logic and presentation layers as they directly rely on it."}),"\n",(0,i.jsx)(t.li,{children:"increase in complexity \u2014 when it grows, it becomes more difficult to keep it clean, understandable and predict the impact of a change."}),"\n",(0,i.jsx)(t.li,{children:"harder to test \u2014 implementing tests is quite difficult as everything is highly coupled to the layer it points toward."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"when-to-use-it",children:"When to use it?"}),"\n",(0,i.jsx)(t.p,{children:"In my humble opinion, using the n-tier architecture is a good start when you need to develop the prototype of an idea because you need to showcase something quickly.\nThis will unfortunately tend to make things less great for the future though."}),"\n",(0,i.jsx)(t.p,{children:"You could also use this archi when you need to build an easy CRUD app.\nSpeaking of such, it is often used when you simply want to query a database. I once did that for one of my employers."}),"\n",(0,i.jsx)(t.h2,{id:"the-clean-architecture",children:"The Clean Architecture"}),"\n",(0,i.jsx)(t.h3,{id:"what-is-it-1",children:"What is it?"}),"\n",(0,i.jsx)(s.Z,{data:{src:"/img/clean-architecture.jpg",alt:"Onion schema of CA",type:"image"}}),"\n",(0,i.jsxs)(t.p,{children:["This architecture puts the Domain at the center, and in charge of everything. It also requires more intentional designs as you do not rely on your database directly.\nBuilt with the ",(0,i.jsx)(t.a,{href:"https://martinfowler.com/bliki/CQRS.html",children:"CQRS pattern"}),", I consider it the best way to write a software with maintainability and simplicity in mind."]}),"\n",(0,i.jsx)(t.p,{children:"Historical fact: the 3-Tiered architecture came in 1992 thanks to John J. Donovan and was followed by others afterwards:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"Hexagonal Architecture / Ports & Adapters (2005, Alistair Cockburn),"}),"\n",(0,i.jsx)(t.li,{children:"Onion Architecture (2008, Jeffrey Palermo),"}),"\n",(0,i.jsx)(t.li,{children:"Clean Architecture (2012, Robert C. Martin)."}),"\n"]}),"\n",(0,i.jsx)(t.h3,{id:"pros--cons-1",children:"Pros & Cons"}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.strong,{children:"advantages"}),", we can list the following:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"less coupled code, better testability \u2014 as the code is less coupled due to using abstractions everywhere you can, you can easily mock dependencies and unit test your components.\nIt also facilitates the development in each layer as they are not highly coupled together, allowing teams to work in parallel on each layer."}),"\n",(0,i.jsx)(t.li,{children:"separation of concerns \u2014 the architecture kind of forces you to think about your use cases and dependencies.\nThe UI also does not care about how your database looks, nor does it care about the packages you use to generate a PDF for example..."}),"\n",(0,i.jsx)(t.li,{children:"better features exposition"}),"\n",(0,i.jsx)(t.li,{children:"better application of SOLID principles"}),"\n",(0,i.jsx)(t.li,{children:"better evolutivity"}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["For the ",(0,i.jsx)(t.strong,{children:"disadvantages"}),", we can list the following:"]}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"increase in time to build from scratch \u2014 you need to setup more things before starting to develop a valuable feature for the client."}),"\n",(0,i.jsx)(t.li,{children:"increase in code \u2014 you need more files (classes and interfaces) than in an n-tier architecture."}),"\n",(0,i.jsx)(t.li,{children:"possible loss of optimization \u2014 being closer to implementations might grant you better performances. You would lose this in profit of looser coupling which IMHO is a good trade-off."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"Editor's Note: Honnestly, reading this again... I don't feel like these are real disadvantages.\nThey can be easily overcome with experience, and will make you gain time on the long run, especially if you decide to work with tests (which you should if you want to produce good code!)."}),"\n",(0,i.jsx)(t.h3,{id:"when-to-use-it-1",children:"When to use it?"}),"\n",(0,i.jsxs)(t.p,{children:["When you need to develop a complex software, that you want to test your features and want to deliver something valuable that will not increase the buglog once in production.\nIt can also be mixed with methodologies that make it a strong reliability like ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Domain-driven_design",children:"DDD"})," and ",(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Test-driven_development",children:"TDD"}),"."]}),"\n",(0,i.jsx)(t.h2,{id:"so-why-do-i-prefer-ca-over-n-tier",children:"So why do I prefer CA over N-Tier?"}),"\n",(0,i.jsx)(t.p,{children:'You might know now but I am tired of developing crappy things, I\'m tired of working in a company where you get told to "develop fast and we will improve it later".\nLater never comes.'}),"\n",(0,i.jsx)(t.p,{children:"I am so tired of such way of working that I fell in love with 3 things:"}),"\n",(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Clean Architecture, and"}),"\n",(0,i.jsx)(t.li,{children:"Test-Driven Development, and"}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Software_craftsmanship",children:"Software Craftsmanship"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(t.p,{children:["But more seriously, I haven't explained ",(0,i.jsx)(t.em,{children:"why"})," I like it... In a few words, let me tell you.\nYou need to know that developing an application without tests, it's like developing with your eyes closed: you do mistakes.\nI then started digging this part of my job I was neglecting at the time: testing. Thanks to my professional experience at Pwc Luxembourg, I met wonderful people who taught me a lot of new things."]}),"\n",(0,i.jsx)(t.p,{children:"That was when I've been asked to write an application following a particular architecture... And everything got solved once I practiced."}),"\n",(0,i.jsx)(t.p,{children:'Developing with Clean Archi, for me, it is the real culmination of software development where the technical "parts" can finally be changed without having to rework something else.\nThe truth is, I learnt so much with Clean Architecture:'}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsx)(t.li,{children:"I understood the real deal that Dependency Injection represents ;"}),"\n",(0,i.jsx)(t.li,{children:"I succeeded in applying SOLID principles better than all the other times I tried, in vain ;"}),"\n",(0,i.jsxs)(t.li,{children:["I understod that I had to name my interfaces independantly of the implementation that could ensue from it since I could potentially have 3 different implementations of ",(0,i.jsx)(t.code,{children:"IPdfGenerator"})," ;"]}),"\n",(0,i.jsxs)(t.li,{children:["I understood that testing ",(0,i.jsx)(t.em,{children:"is"})," fun ;"]}),"\n",(0,i.jsx)(t.li,{children:"I understood that writing apps without bugs is possible and should be common."}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"And I went to IT school! They explained what dependency injection, SOLID principles, clean code... are, they taught me how to prepare for a development and avoid the majority of bugs...\nBut that doesn't mean I haven't written horrible code or buggy apps or patched a feature and broken something else in the process."}),"\n",(0,i.jsxs)(t.p,{children:["So, I highly encourage you to learn more about these 3 topics I listed above. The rest should come...\nThey represent what I would love to call ",(0,i.jsx)(t.em,{children:"the best mindset"})," for the next generation of developers."]}),"\n",(0,i.jsx)(t.p,{children:"I would also recommend to learn more by looking at the following resources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["The presentation of Guillherme Ferreira on ",(0,i.jsx)(t.a,{href:"https://ndcporto.com/agenda/the-grand-unified-theory-of-clean-architecture-and-test-pyramid-0b9p/6537f85dc598",children:"The Grand Unified Theory of Clean Architecture and Test Pyramid"})," at NDC Porto ;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.jug.ch/events/slides/220201_Optivem_TDD_and_Clean_Architecture_Driven_by_Behaviour.pdf",children:"Valentina Cupa\u0107's slides"})," about TDD and Clean Architecture driven by behaviour ;"]}),"\n",(0,i.jsxs)(t.li,{children:["A blog post relating an ",(0,i.jsx)(t.a,{href:"https://medium.com/codex/introduction-to-clean-architecture-2437c6987ec",children:"introduction to CA"})," ;"]}),"\n",(0,i.jsxs)(t.li,{children:["The example of such structure that is ",(0,i.jsx)(t.a,{href:"https://github.com/jasontaylordev/CleanArchitecture",children:"Jason Taylor's Clean Architecture Template"}),"!"]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,i.jsxs)(t.p,{children:["What finally makes the n-tier architecture obsolete is that it is actually ",(0,i.jsx)(t.em,{children:"data-centric"})," unlike the clean archi that is ",(0,i.jsx)(t.em,{children:"domain-centric"})," (logic).\nIt took us time to understand that what gives value to our clients is not the data, but the business logic that allows to process that data!"]}),"\n",(0,i.jsx)(t.p,{children:"If you are still interested in learning more on the topic, I also happened to stumble upon these online resources:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design",children:"Samuel Oloruntoba's explanations"})," of the SOLID principles ;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://blog.ploeh.dk/2013/12/03/layers-onions-ports-adapters-its-all-the-same/",children:"Mark Seemann's article"})," on the topic of adapters ;"]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.a,{href:"https://dev.to/seangwright/comment/ccfb",children:"Sean G. Wright comment"}),' on "Clean architecture - Your approach" ;']}),"\n",(0,i.jsxs)(t.li,{children:["The meetup group of ",(0,i.jsx)(t.a,{href:"https://www.meetup.com/en-US/software-craft-luxembourg/",children:"Software Craftsmanship Luxembourg"})," ;"]}),"\n",(0,i.jsxs)(t.li,{children:["The meetup group of ",(0,i.jsx)(t.a,{href:"https://www.meetup.com/en-US/techexcellence/",children:"Tech Excellence"}),"."]}),"\n"]}),"\n",(0,i.jsx)(t.p,{children:"And you, what architecture do you use for your projects?"}),"\n",(0,i.jsx)(l.Z,{url:c.vO})]})}function f(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(g,{...e})}):g(e)}},9411:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(5298),r={container:"container_KXSz",legend:"legend_Ecw3"},s=n(5893);function o(e){if("object"!=typeof e||!e.type)return(0,s.jsx)(s.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,s.jsx)("a",{href:e.url,target:"_blank",children:(0,s.jsx)("img",{...e})}):(0,s.jsx)("img",{...e});case"video":return(0,s.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,s.jsx)("source",{src:e.src,type:e.type}))):(0,s.jsx)("source",{...e})});case"audio":return(0,s.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,s.jsx)("source",{src:e.src,type:e.type}))):(0,s.jsx)("source",{...e})});case"html":return(0,s.jsx)("div",{className:r.container,children:(0,s.jsx)("iframe",{...e})});default:return(0,s.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function a(e){let{data:t,children:n}=e;return t||n?(t.src&&(t.src=(0,i.Z)(t.src)),t.sources&&t.sources.length>0&&(t.sources=t.sources.map((e=>({...e,src:(0,i.Z)(e.src)})))),(0,s.jsxs)("figure",{children:[t&&o(t),(0,s.jsx)("figcaption",{className:r.legend,children:n})]})):(0,s.jsx)(s.Fragment,{})}},9807:function(e,t,n){n.d(t,{Z:function(){return x}});var i=n(7294),r=n(9163),s=n(3868),o=n.n(s),a=n(5999),l="formContainer_ssZr",c="inputContainer_rIzC",h="input_xw7i",d="submit_jbGj",u="status_Xmiw",p="success_K3DK",m="sending_s6rj",g="error_ltts",f=n(5893);const y=e=>{let t,{status:n,message:r,onValidated:s}=e;const y=()=>t&&t.value.indexOf("@")>-1&&o()(t.value)&&s({EMAIL:t.value});return(0,i.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),(0,f.jsxs)("div",{className:l,children:[(0,f.jsx)("h3",{children:(0,f.jsx)(a.Z,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,f.jsxs)("div",{className:c,children:[(0,f.jsx)("input",{className:h,ref:e=>t=e,type:"email",placeholder:(0,a.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?y():null,required:!0,autoComplete:"email"}),(0,f.jsxs)("a",{className:d+" tooltip",rel:"noopener",onClick:y,type:"submit",children:[(0,f.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,f.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,f.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===n&&(0,f.jsx)("div",{className:`${u} ${m}`,children:(0,f.jsx)(a.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===n&&(0,f.jsx)("div",{className:`${u} ${g}`,dangerouslySetInnerHTML:{__html:r}}),"success"===n&&(0,f.jsx)("div",{className:`${u} ${p}`,dangerouslySetInnerHTML:{__html:r}})]})};function x(e){let{url:t}=e;return(0,f.jsx)(r.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:i}=e;return(0,f.jsx)(y,{status:n,message:i,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(5999),r=n(5893);function s(){return(0,r.jsx)("div",{className:"center",children:(0,r.jsx)("span",{className:"italic",children:(0,r.jsx)(i.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},831:function(e,t,n){n.d(t,{Z:function(){return a}});var i=n(5742),r=n(2263),s=n(5298),o=n(5893);function a(e){let{uri:t,image:n,type:a}=e;const{siteConfig:l}=(0,r.Z)(),{projectName:c,customFields:{mType:h,twitterName:d}}=l,u=a||h,p=n?(0,s.Z)(n):null,m=(0,s.Z)(t);return(0,o.jsx)(o.Fragment,{children:(0,o.jsxs)(i.Z,{children:[m&&(0,o.jsx)("link",{rel:"canonical",href:m}),m&&(0,o.jsx)("meta",{property:"og:url",content:m}),p&&(0,o.jsx)("meta",{property:"og:image",content:p}),u&&(0,o.jsx)("meta",{property:"og:type",content:u}),c&&(0,o.jsx)("meta",{property:"og:site_name",content:c}),d&&(0,o.jsx)("meta",{property:"twitter:site",content:`@${d}`}),p&&(0,o.jsx)("meta",{name:"twitter:image",content:p}),p&&(0,o.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},5298:function(e,t,n){n.d(t,{Z:function(){return s}});var i=n(2263),r=n(4996);function s(e){const{siteConfig:t}=(0,i.Z)();let{url:n}=t||{};return`${n}${(0,r.Z)(e)}`}},1151:function(e,t,n){n.d(t,{Z:function(){return a},a:function(){return o}});var i=n(7294);const r={},s=i.createContext(r);function o(e){const t=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:t},e.children)}},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);