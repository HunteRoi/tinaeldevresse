"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[4753],{3905:function(e,t,a){a.d(t,{Zo:function(){return u},kt:function(){return d}});var n=a(7294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function o(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var s=n.createContext({}),c=function(e){var t=n.useContext(s),a=t;return e&&(a="function"==typeof e?e(t):o(o({},t),e)),a},u=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},h={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},p=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),d=r,m=p["".concat(s,".").concat(d)]||p[d]||h[d]||i;return a?n.createElement(m,o(o({ref:t},u),{},{components:a})):n.createElement(m,o({ref:t},u))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,o=new Array(i);o[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,o[1]=l;for(var c=2;c<i;c++)o[c]=a[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,a)}p.displayName="MDXCreateElement"},9411:function(e,t,a){a.d(t,{Z:function(){return o}});var n=a(7294),r="container_KXSz",i="legend_Ecw3";function o(e){let{data:t,children:a}=e;return t||a?n.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return n.createElement(n.Fragment,null);switch(e.type){case"image":case"img":return e.url?n.createElement("a",{href:e.url,target:"_blank"},n.createElement("img",e)):n.createElement("img",e);case"video":return n.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>n.createElement("source",{src:e.src,type:e.type}))):n.createElement("source",e));case"audio":return n.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>n.createElement("source",{src:e.src,type:e.type}))):n.createElement("source",e));case"html":return n.createElement("div",{className:r},n.createElement("iframe",e));default:return n.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),n.createElement("figcaption",{className:i},a)):n.createElement(n.Fragment,null)}},9807:function(e,t,a){a.d(t,{Z:function(){return f}});var n=a(7294),r=a(9163),i=a(3868),o=a.n(i),l=a(5999),s="formContainer_ssZr",c="inputContainer_rIzC",u="input_xw7i",h="submit_jbGj",p="status_Xmiw",d="success_K3DK",m="sending_s6rj",g="error_ltts";const y=e=>{let t,{status:a,message:r,onValidated:i}=e;const y=()=>t&&t.value.indexOf("@")>-1&&o()(t.value)&&i({EMAIL:t.value});return(0,n.useEffect)((()=>{a&&"success"===a&&(t.text="")}),[a]),n.createElement("div",{className:s},n.createElement("h3",null,n.createElement(l.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),n.createElement("div",{className:c},n.createElement("input",{className:u,ref:e=>t=e,type:"email",placeholder:(0,l.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?y():null,required:!0,autoComplete:"email"}),n.createElement("a",{className:h+" tooltip",rel:"noopener",onClick:y,type:"submit"},n.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},n.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),n.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===a&&n.createElement("div",{className:`${p} ${m}`},n.createElement(l.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===a&&n.createElement("div",{className:`${p} ${g}`,dangerouslySetInnerHTML:{__html:r}}),"success"===a&&n.createElement("div",{className:`${p} ${d}`,dangerouslySetInnerHTML:{__html:r}}))};function f(e){let{url:t}=e;return n.createElement(r.Z,{url:t,render:e=>{let{subscribe:t,status:a,message:r}=e;return n.createElement(y,{status:a,message:r,onValidated:e=>t(e)})}})}},1324:function(e,t,a){a.d(t,{Z:function(){return i}});var n=a(7294),r=a(5999);function i(){return n.createElement("div",{className:"center"},n.createElement("span",{className:"italic"},n.createElement(r.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(7294),r=a(5742),i=a(2263),o=a(4996);function l(e){const{siteConfig:t}=(0,i.Z)();let{url:a}=t||{};return`${a}${(0,o.Z)(e)}`}function s(e){let{uri:t,image:a,type:o}=e;const{siteConfig:s}=(0,i.Z)(),{projectName:c,customFields:{mType:u,twitterName:h}}=s,p=o||u,d=a?l(a):null,m=l(t);return n.createElement(n.Fragment,null,n.createElement(r.Z,null,m&&n.createElement("link",{rel:"canonical",href:m}),m&&n.createElement("meta",{property:"og:url",content:m}),d&&n.createElement("meta",{property:"og:image",content:d}),p&&n.createElement("meta",{property:"og:type",content:p}),c&&n.createElement("meta",{property:"og:site_name",content:c}),h&&n.createElement("meta",{property:"twitter:site",content:`@${h}`}),d&&n.createElement("meta",{name:"twitter:image",content:d}),d&&n.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},6039:function(e,t,a){a.r(t),a.d(t,{assets:function(){return d},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return m}});var n=a(3117),r=(a(7294),a(3905)),i=a(9411),o=a(2147),l=a(1324),s=a(9807),c=a(3089);const u={slug:"why-did-i-switch-to-clean-architecture",title:"What architecture do I use for my projects?",tags:["development","structure","architecture"],description:"I decided to talk about the architecture choice I take when developing my app!",image:"/img/why-did-i-switch-to-clean-architecture.png"},h=void 0,p={permalink:"/blog/why-did-i-switch-to-clean-architecture",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",source:"@site/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",title:"What architecture do I use for my projects?",description:"I decided to talk about the architecture choice I take when developing my app!",date:"2022-06-01T00:00:00.000Z",formattedDate:"June 1, 2022",tags:[{label:"development",permalink:"/blog/tags/development"},{label:"structure",permalink:"/blog/tags/structure"},{label:"architecture",permalink:"/blog/tags/architecture"}],readingTime:8.42,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"why-did-i-switch-to-clean-architecture",title:"What architecture do I use for my projects?",tags:["development","structure","architecture"],description:"I decided to talk about the architecture choice I take when developing my app!",image:"/img/why-did-i-switch-to-clean-architecture.png"},prevItem:{title:"Sharing is caring",permalink:"/blog/sharing-is-caring"},nextItem:{title:"Unit Testing",permalink:"/blog/unit-testing"}},d={authorsImageUrls:[]},m=[{value:"The N-Tier architecture",id:"the-n-tier-architecture",level:2},{value:"What is it?",id:"what-is-it",level:3},{value:"Pros &amp; Cons",id:"pros--cons",level:3},{value:"When to use it?",id:"when-to-use-it",level:3},{value:"The Clean Architecture",id:"the-clean-architecture",level:2},{value:"What is it?",id:"what-is-it-1",level:3},{value:"Pros &amp; Cons",id:"pros--cons-1",level:3},{value:"When to use it?",id:"when-to-use-it-1",level:3},{value:"So why do I prefer CA over N-Tier?",id:"so-why-do-i-prefer-ca-over-n-tier",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:m};function y(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},g,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("a",{href:"/blog/why-did-i-switch-to-clean-architecture"},(0,r.kt)(i.Z,{data:{src:"/img/why-did-i-switch-to-clean-architecture.png",alt:"My Love for Clean Architecture",type:"image"},mdxType:"Figure"})),(0,r.kt)("p",null,"I decided to talk about the architecture choice I take when developing my apps!"),(0,r.kt)(o.Z,{uri:"blog/why-did-i-switch-to-clean-architecture",image:"img/why-did-i-switch-to-clean-architecture.png",type:"article",mdxType:"SEO"}),(0,r.kt)("hr",null),(0,r.kt)(l.Z,{mdxType:"Reminder"}),(0,r.kt)("hr",null),(0,r.kt)("p",null,"Not long ago, I have been asked the following by fellow developers:"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"How do you structure your projects because when they evolve, the basic n-tier architecture becomes more complex and they tend to create messy solutions.")),(0,r.kt)("p",null,"I don't have all the answers but what I actually said is that when it comes to my own projects, I make a simple choice:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"If I am working on a basic CRUD app, I will definitely go for a 3-Tier architecture."),(0,r.kt)("li",{parentName:"ul"},"But if I need to build a more complex app requiring a strong business logic and which must scream its goal,\nI will definitely use what Robert C. Martin called ",(0,r.kt)("a",{parentName:"li",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"the Clean Architecture")," in 2012.\nOf course, my version is not strictly following what Uncle Bob describes in his blog as I have tailored it to my needs but let's talk about it.")),(0,r.kt)("p",null,"Nowadays though, I tend to be more inclined to use the latter. But ",(0,r.kt)("strong",{parentName:"p"},"what does the Clean Architecture bring me that I love and that n-tier does not?")),(0,r.kt)("h2",{id:"the-n-tier-architecture"},"The N-Tier architecture"),(0,r.kt)("h3",{id:"what-is-it"},"What is it?"),(0,r.kt)("p",null,"First of all, it would be a shame to talk about the Clean Architecture and not talk about what I have learnt during my years at school: the n-tier architecture.\nThis type of architecture is usually presented as and mixed up with one of its specific version: the 3-tier architecture."),(0,r.kt)("p",null,"This architecture places the data as the core of the application. The 3 layers are:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"the presentation layer, responsible of presenting the information to the outside ;"),(0,r.kt)("li",{parentName:"ol"},"the logic layer, responsible of the business logic that should be applied on the data ;"),(0,r.kt)("li",{parentName:"ol"},"the data layer, responsible of the data access.")),(0,r.kt)(i.Z,{data:{src:"/img/3-tier-architecture.jpg",alt:"3-tier schema",type:"image"},mdxType:"Figure"}),(0,r.kt)("p",null,'Of course, the "n" in the name means that you can actually have less or more than 3 tiers. The layers described above are just the common ground.\nThere are other types of comparable structures like the 2-tier architecture, the single tier, the 4-tier ...\nWhen developing a project, you usually tailor the architecture to your needs. You could even subdivide the 3 common layers into sub-layers depending on your requirements.'),(0,r.kt)("h3",{id:"pros--cons"},"Pros & Cons"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},"advantages"),", we can list the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},'more secure \u2014 The presentation layer (usually the UI or such) is not "directly" wired to the database. All connections to it are shielded by the logic layer.'),(0,r.kt)("li",{parentName:"ul"},'easily maintainable \u2014 at the time of its "creation", this archi allowed the developers to maintain it much more easily than the previous architectures did.'),(0,r.kt)("li",{parentName:"ul"},"easy to reuse \u2014 it is easier to reuse the logic of each layer.")),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},"disadvantages"),", let's have a quick look too:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"increase in effort \u2014 implementing new features takes time as you have to go through all tiers.\nChanging a single thing in the database layer is reflected to the logic and presentation layers as they directly rely on it."),(0,r.kt)("li",{parentName:"ul"},"increase in complexity \u2014 when it grows, it becomes more difficult to keep it clean, understandable and predict the impact of a change."),(0,r.kt)("li",{parentName:"ul"},"harder to test \u2014 implementing tests is quite difficult as everything is highly coupled to the layer it points toward.")),(0,r.kt)("h3",{id:"when-to-use-it"},"When to use it?"),(0,r.kt)("p",null,"In my humble opinion, using the n-tier architecture is a good start when you need to develop the prototype of an idea because you need to showcase something quickly.\nThis will unfortunately tend to make things less great for the future though."),(0,r.kt)("p",null,"You could also use this archi when you need to build an easy CRUD app.\nSpeaking of such, it is often used when you simply want to query a database. I once did that for one of my employers."),(0,r.kt)("h2",{id:"the-clean-architecture"},"The Clean Architecture"),(0,r.kt)("h3",{id:"what-is-it-1"},"What is it?"),(0,r.kt)(i.Z,{data:{src:"/img/clean-architecture.jpg",alt:"Onion schema of CA",type:"image"},mdxType:"Figure"}),(0,r.kt)("p",null,"This architecture puts the Domain at the center, and in charge of everything. It also requires more intentional designs as you do not rely on your database directly.\nBuilt with the ",(0,r.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CQRS.html"},"CQRS pattern"),", I consider it the best way to write a software with maintainability and simplicity in mind."),(0,r.kt)("p",null,"Historical fact: the 3-Tiered architecture came in 1992 thanks to John J. Donovan and was followed by others afterwards:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Hexagonal Architecture / Ports & Adapters (2005, Alistair Cockburn),"),(0,r.kt)("li",{parentName:"ul"},"Onion Architecture (2008, Jeffrey Palermo),"),(0,r.kt)("li",{parentName:"ul"},"Clean Architecture (2012, Robert C. Martin).")),(0,r.kt)("h3",{id:"pros--cons-1"},"Pros & Cons"),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},"advantages"),", we can list the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"less coupled code, better testability \u2014 as the code is less coupled due to using abstractions everywhere you can, you can easily mock dependencies and unit test your components.\nIt also facilitates the development in each layer as they are not highly coupled together, allowing teams to work in parallel on each layer."),(0,r.kt)("li",{parentName:"ul"},"separation of concerns \u2014 the architecture kind of forces you to think about your use cases and dependencies.\nThe UI also does not care about how your database looks, nor does it care about the packages you use to generate a PDF for example..."),(0,r.kt)("li",{parentName:"ul"},"better features exposition"),(0,r.kt)("li",{parentName:"ul"},"better application of SOLID principles"),(0,r.kt)("li",{parentName:"ul"},"better evolutivity")),(0,r.kt)("p",null,"For the ",(0,r.kt)("strong",{parentName:"p"},"disadvantages"),", we can list the following:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"increase in time to build from scratch \u2014 you need to setup more things before starting to develop a valuable feature for the client."),(0,r.kt)("li",{parentName:"ul"},"increase in code \u2014 you need more files (classes and interfaces) than in an n-tier architecture."),(0,r.kt)("li",{parentName:"ul"},"possible loss of optimization \u2014 being closer to implementations might grant you better performances. You would lose this in profit of looser coupling which IMHO is a good trade-off.")),(0,r.kt)("p",null,"Editor's Note: Honnestly, reading this again... I don't feel like these are real disadvantages.\nThey can be easily overcome with experience, and will make you gain time on the long run, especially if you decide to work with tests (which you should if you want to produce good code!)."),(0,r.kt)("h3",{id:"when-to-use-it-1"},"When to use it?"),(0,r.kt)("p",null,"When you need to develop a complex software, that you want to test your features and want to deliver something valuable that will not increase the buglog once in production.\nIt can also be mixed with methodologies that make it a strong reliability like ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"DDD")," and ",(0,r.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"TDD"),"."),(0,r.kt)("h2",{id:"so-why-do-i-prefer-ca-over-n-tier"},"So why do I prefer CA over N-Tier?"),(0,r.kt)("p",null,'You might know now but I am tired of developing crappy things, I\'m tired of working in a company where you get told to "develop fast and we will improve it later".\nLater never comes.'),(0,r.kt)("p",null,"I am so tired of such way of working that I fell in love with 3 things:"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"Clean Architecture, and"),(0,r.kt)("li",{parentName:"ol"},"Test-Driven Development, and"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("a",{parentName:"li",href:"https://en.wikipedia.org/wiki/Software_craftsmanship"},"Software Craftsmanship"),".")),(0,r.kt)("p",null,"But more seriously, I haven't explained ",(0,r.kt)("em",{parentName:"p"},"why")," I like it... In a few words, let me tell you.\nYou need to know that developing an application without tests, it's like developing with your eyes closed: you do mistakes.\nI then started digging this part of my job I was neglecting at the time: testing. Thanks to my professional experience at Pwc Luxembourg, I met wonderful people who taught me a lot of new things."),(0,r.kt)("p",null,"That was when I've been asked to write an application following a particular architecture... And everything got solved once I practiced."),(0,r.kt)("p",null,'Developing with Clean Archi, for me, it is the real culmination of software development where the technical "parts" can finally be changed without having to rework something else.\nThe truth is, I learnt so much with Clean Architecture:'),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"I understood the real deal that Dependency Injection represents ;"),(0,r.kt)("li",{parentName:"ul"},"I succeeded in applying SOLID principles better than all the other times I tried, in vain ;"),(0,r.kt)("li",{parentName:"ul"},"I understod that I had to name my interfaces independantly of the implementation that could ensue from it since I could potentially have 3 different implementations of ",(0,r.kt)("inlineCode",{parentName:"li"},"IPdfGenerator")," ;"),(0,r.kt)("li",{parentName:"ul"},"I understood that testing ",(0,r.kt)("em",{parentName:"li"},"is")," fun ;"),(0,r.kt)("li",{parentName:"ul"},"I understood that writing apps without bugs is possible and should be common.")),(0,r.kt)("p",null,"And I went to IT school! They explained what dependency injection, SOLID principles, clean code... are, they taught me how to prepare for a development and avoid the majority of bugs...\nBut that doesn't mean I haven't written horrible code or buggy apps or patched a feature and broken something else in the process."),(0,r.kt)("p",null,"So, I highly encourage you to learn more about these 3 topics I listed above. The rest should come...\nThey represent what I would love to call ",(0,r.kt)("em",{parentName:"p"},"the best mindset")," for the next generation of developers."),(0,r.kt)("p",null,"I would also recommend to learn more by looking at the following resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"The presentation of Guillherme Ferreira on ",(0,r.kt)("a",{parentName:"li",href:"https://ndcporto.com/agenda/the-grand-unified-theory-of-clean-architecture-and-test-pyramid-0b9p/6537f85dc598"},"The Grand Unified Theory of Clean Architecture and Test Pyramid")," at NDC Porto ;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.jug.ch/events/slides/220201_Optivem_TDD_and_Clean_Architecture_Driven_by_Behaviour.pdf"},"Valentina Cupa\u0107's slides")," about TDD and Clean Architecture driven by behaviour ;"),(0,r.kt)("li",{parentName:"ul"},"A blog post relating an ",(0,r.kt)("a",{parentName:"li",href:"https://medium.com/codex/introduction-to-clean-architecture-2437c6987ec"},"introduction to CA")," ;"),(0,r.kt)("li",{parentName:"ul"},"The example of such structure that is ",(0,r.kt)("a",{parentName:"li",href:"https://github.com/jasontaylordev/CleanArchitecture"},"Jason Taylor's Clean Architecture Template"),"!")),(0,r.kt)("h2",{id:"conclusion"},"Conclusion"),(0,r.kt)("p",null,"What finally makes the n-tier architecture obsolete is that it is actually ",(0,r.kt)("em",{parentName:"p"},"data-centric")," unlike the clean archi that is ",(0,r.kt)("em",{parentName:"p"},"domain-centric")," (logic).\nIt took us time to understand that what gives value to our clients is not the data, but the business logic that allows to process that data!"),(0,r.kt)("p",null,"If you are still interested in learning more on the topic, I also happened to stumble upon these online resources:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"},"Samuel Oloruntoba's explanations")," of the SOLID principles ;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://blog.ploeh.dk/2013/12/03/layers-onions-ports-adapters-its-all-the-same/"},"Mark Seemann's article")," on the topic of adapters ;"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",{parentName:"li",href:"https://dev.to/seangwright/comment/ccfb"},"Sean G. Wright comment"),' on "Clean architecture - Your approach" ;'),(0,r.kt)("li",{parentName:"ul"},"The meetup group of ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/en-US/software-craft-luxembourg/"},"Software Craftsmanship Luxembourg")," ;"),(0,r.kt)("li",{parentName:"ul"},"The meetup group of ",(0,r.kt)("a",{parentName:"li",href:"https://www.meetup.com/en-US/techexcellence/"},"Tech Excellence"),".")),(0,r.kt)("p",null,"And you, what architecture do you use for your projects?"),(0,r.kt)(s.Z,{url:c.vO,mdxType:"Newsletter"}))}y.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);