"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[2528],{3905:function(e,t,n){n.d(t,{Zo:function(){return h},kt:function(){return d}});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},r=Object.keys(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(o=0;o<r.length;o++)n=r[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},h=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},m=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,h=l(e,["components","mdxType","originalType","parentName"]),m=c(n),d=a,p=m["".concat(s,".").concat(d)]||m[d]||u[d]||r;return n?o.createElement(p,i(i({ref:t},h),{},{components:n})):o.createElement(p,i({ref:t},h))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=m;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,i[1]=l;for(var c=2;c<r;c++)i[c]=n[c];return o.createElement.apply(null,i)}return o.createElement.apply(null,n)}m.displayName="MDXCreateElement"},9411:function(e,t,n){n.d(t,{Z:function(){return i}});var o=n(7294),a="container_KXSz",r="legend_Ecw3";function i(e){let{data:t,children:n}=e;return t||n?o.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return o.createElement(o.Fragment,null);switch(e.type){case"image":case"img":return e.url?o.createElement("a",{href:e.url,target:"_blank"},o.createElement("img",e)):o.createElement("img",e);case"video":return o.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>o.createElement("source",{src:e.src,type:e.type}))):o.createElement("source",e));case"audio":return o.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>o.createElement("source",{src:e.src,type:e.type}))):o.createElement("source",e));case"html":return o.createElement("div",{className:a},o.createElement("iframe",e));default:return o.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),o.createElement("figcaption",{className:r},n)):o.createElement(o.Fragment,null)}},9807:function(e,t,n){n.d(t,{Z:function(){return f}});var o=n(7294),a=n(9163),r=n(3868),i=n.n(r),l=n(5999),s="formContainer_ssZr",c="inputContainer_rIzC",h="input_xw7i",u="submit_jbGj",m="status_Xmiw",d="success_K3DK",p="sending_s6rj",g="error_ltts";const y=e=>{let t,{status:n,message:a,onValidated:r}=e;const y=()=>t&&t.value.indexOf("@")>-1&&i()(t.value)&&r({EMAIL:t.value});return(0,o.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),o.createElement("div",{className:s},o.createElement("h3",null,o.createElement(l.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),o.createElement("div",{className:c},o.createElement("input",{className:h,ref:e=>t=e,type:"email",placeholder:(0,l.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?y():null,required:!0,autoComplete:"email"}),o.createElement("a",{className:u+" tooltip",rel:"noopener",onClick:y,type:"submit"},o.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},o.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),o.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===n&&o.createElement("div",{className:`${m} ${p}`},o.createElement(l.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===n&&o.createElement("div",{className:`${m} ${g}`,dangerouslySetInnerHTML:{__html:a}}),"success"===n&&o.createElement("div",{className:`${m} ${d}`,dangerouslySetInnerHTML:{__html:a}}))};function f(e){let{url:t}=e;return o.createElement(a.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:a}=e;return o.createElement(y,{status:n,message:a,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return r}});var o=n(7294),a=n(5999);function r(){return o.createElement("div",{className:"center"},o.createElement("span",{className:"italic"},o.createElement(a.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},2147:function(e,t,n){n.d(t,{Z:function(){return s}});var o=n(7294),a=n(5742),r=n(2263),i=n(4996);function l(e){const{siteConfig:t}=(0,r.Z)();let{url:n}=t||{};return`${n}${(0,i.Z)(e)}`}function s(e){let{uri:t,image:n,type:i}=e;const{siteConfig:s}=(0,r.Z)(),{projectName:c,customFields:{mType:h,twitterName:u}}=s,m=i||h,d=n?l(n):null,p=l(t);return o.createElement(o.Fragment,null,o.createElement(a.Z,null,p&&o.createElement("link",{rel:"canonical",href:p}),p&&o.createElement("meta",{property:"og:url",content:p}),d&&o.createElement("meta",{property:"og:image",content:d}),m&&o.createElement("meta",{property:"og:type",content:m}),c&&o.createElement("meta",{property:"og:site_name",content:c}),u&&o.createElement("meta",{property:"twitter:site",content:`@${u}`}),d&&o.createElement("meta",{name:"twitter:image",content:d}),d&&o.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},9389:function(e,t,n){n.r(t),n.d(t,{assets:function(){return d},contentTitle:function(){return u},default:function(){return y},frontMatter:function(){return h},metadata:function(){return m},toc:function(){return p}});var o=n(3117),a=(n(7294),n(3905)),r=n(9411),i=n(2147),l=n(1324),s=n(9807),c=n(3089);const h={slug:"sharing-is-caring",title:"Sharing is caring",tags:["development","coach","agility","IT","craft","software craftsman"],description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',image:"/img/coaching.jpg"},u=void 0,m={permalink:"/blog/sharing-is-caring",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2023-04-06-sharing-is-caring.mdx",source:"@site/blog/2023-04-06-sharing-is-caring.mdx",title:"Sharing is caring",description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',date:"2023-04-06T00:00:00.000Z",formattedDate:"April 6, 2023",tags:[{label:"development",permalink:"/blog/tags/development"},{label:"coach",permalink:"/blog/tags/coach"},{label:"agility",permalink:"/blog/tags/agility"},{label:"IT",permalink:"/blog/tags/it"},{label:"craft",permalink:"/blog/tags/craft"},{label:"software craftsman",permalink:"/blog/tags/software-craftsman"}],readingTime:9.3,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"sharing-is-caring",title:"Sharing is caring",tags:["development","coach","agility","IT","craft","software craftsman"],description:'For quite some time now, I have been thinking about my career and how I would like it to evolve. You know that too, don\'t you? Every time you have an interview as a young person, you are asked "where do you see yourself in x years?". It did not tickle me at the beginning, but with some experience...',image:"/img/coaching.jpg"},nextItem:{title:"What architecture do I use for my projects?",permalink:"/blog/why-did-i-switch-to-clean-architecture"}},d={authorsImageUrls:[]},p=[{value:"A bit of context",id:"a-bit-of-context",level:2},{value:"Short career but lots of life experiences",id:"short-career-but-lots-of-life-experiences",level:2},{value:"Everything comes to those who wait",id:"everything-comes-to-those-who-wait",level:2},{value:"Back to the basics",id:"back-to-the-basics",level:2},{value:"Teaching professionals?",id:"teaching-professionals",level:2},{value:"From dev to teacher &amp; coach",id:"from-dev-to-teacher--coach",level:2},{value:"Conclusion",id:"conclusion",level:2}],g={toc:p};function y(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,o.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/blog/sharing-is-caring"},(0,a.kt)(r.Z,{data:{src:"/img/coaching.jpg",alt:"Example Mapping used to get feedback on my coaching session",type:"image"},mdxType:"Figure"},"My client's feedback on my first coaching mission")),(0,a.kt)("p",null,"For quite some time now, I have been thinking about my career and how I would like it to evolve.\nYou know that too, don't you? Every time you have an interview as a young person, you are asked \"where do you see yourself in x years?\".\nIt did not tickle me at the beginning, but with some experience, you learn and understand what you like and especially what you don't like."),(0,a.kt)("p",null,"Finally, where do I see myself in a few years?"),(0,a.kt)(i.Z,{uri:"blog/sharing-is-caring",image:"img/coaching.jpg",type:"article",mdxType:"SEO"}),(0,a.kt)("hr",null),(0,a.kt)(l.Z,{mdxType:"Reminder"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"If you know me, you probably know that I have been directing my professional career towards continuous learning (for me and for those in front of me!).\nIn this blog post, I will try to explain why I decided to make that move and where I want to be in the future."),(0,a.kt)("h2",{id:"a-bit-of-context"},"A bit of context"),(0,a.kt)("p",null,"I have always been eclectic. I like to try new things out and see how I perform (and how I could do better).\nThis is one of the reasons I decided to study Information Technology (IT) in the first place."),(0,a.kt)("p",null,"In this professional area, learning and sharing knowledge and experience is a must.\nIT represents an entire world moving faster than any other I know of.\nYesterday, you would hire someone to create your website from scratch.\nToday, you can build it yourself with ChatGPT and other AIs which do most of the job for you.\nThe fact that everything moves so fast and that you can't master every single tech that exists in this world makes it clear:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Stop trying to know everything, rely on others and learn from them!"),(0,a.kt)("li",{parentName:"ul"},"Nobody knows everything, let people learn from you!"),(0,a.kt)("li",{parentName:"ul"},"Teamwork makes the difference, believe in others.")),(0,a.kt)("p",null,"Although I praise working in team, we are on the verge of a radical change in our society: there are currently a lot more people\nwith 20-30 years of experience than younger people in the companies and they are not retiring yet.\nThis has two downsides:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"These experienced profiles are not always willingly updating their knowledge (and I can understand that they are tired and soon will stop working)\nnor do they especially like to share with others."),(0,a.kt)("li",{parentName:"ol"},"The age difference makes it really hard to connect with newcomers.")),(0,a.kt)("h2",{id:"short-career-but-lots-of-life-experiences"},"Short career but lots of life experiences"),(0,a.kt)("p",null,"To be honest, I have been in several companies in my career. I wanted to see how green the grass is here and there.\nAnd I have always seen the same thing: unique profiles either trying to pull up teams and projects\nor dooming everyone and everything, slowing down progress and burning money uselessly. Unfortunately for me, it is more like the second scenario.\nDon't get me wrong though! I love creating. I love teamworking to bring people's solutions to life. And I especially love learning.\nBut after around 3 years of professional work in various organizations, I grew tired of ",(0,a.kt)("em",{parentName:"p"},"those who do not aim for excellence as I do"),".\nI mean, why would you develop a digital solution if it is to do it like crap? All you do is shoot either your future self\nor one of your fellows who will have to maintain it later on. Which is exactly why I decided to turn tables."),(0,a.kt)("p",null,"I decided to work on that problem to prevent others from feeling like they try hard for nothing.\nI wanted to avoid needless burnouts like many before me who grew tired of efforts thrown in waste."),(0,a.kt)("h2",{id:"everything-comes-to-those-who-wait"},"Everything comes to those who wait"),(0,a.kt)("p",null,"For the past two years, I was looking for a way to increase the value that us developers give to our businesses. But I mainly looked\nfor ways to avoid weariness, exhaustion and overstrain.\nIndeed, I felt my stress and tiredness levels raising way above average. I could not stand it, but had no idea how to solve the problems\nI was facing..."),(0,a.kt)("p",null,"Surprisingly to me, in 2021, I got a message from a former teacher.\nShe asked me if I was okay to take some hours at university to sub for a sick colleague.\nThis was the trigger. Coming back to where everything started, where I got taught how to do my job, it made me realize a lot of things!\ud83e\udd29"),(0,a.kt)("p",null,"I had evolved. My experiences in the professional world connected me to knowledge and people. I discovered new ways of working, new ways of\nthinking and I met my ideal. ",(0,a.kt)("strong",{parentName:"p"},"I understood that I wanted to learn but above all, teach others.")),(0,a.kt)("p",null,"Since then, I have been sharing my knowledge, mindset and how technical excellence can bring happiness in the proper environment.\nWhether I am doing it for students at the Henallux, or at my clients' in front of colleagues."),(0,a.kt)("p",null,"That made me realize where I wanted to go... \ud83c\udfeb"),(0,a.kt)("h2",{id:"back-to-the-basics"},"Back to the basics"),(0,a.kt)("p",null,"Have you ever had this feeling that you did not understand the whole concept explained to you during class, training or whatever?\nRest assured then, you're not alone! I graduated in 2019. Reading now the same lessons I had back then, what a difference!\nI now can really see that I improved and learnt a bunch of stuff in a short time.\nThis is really thrilling for the future! \ud83d\ude03"),(0,a.kt)("p",null,"However, it feels quite strange for the 24-year-old me to teach people of my age or sometimes older than I am.\nAnd I have to admit that forcing myself to ",(0,a.kt)("em",{parentName:"p"},"go back to the basics"),", to understand what I have to teach in order to vulgarize it\nand ",(0,a.kt)("strong",{parentName:"p"},"share my passion"),", it genuinely is a growing experience."),(0,a.kt)("p",null,"When I first took the teacher job, I was not sure about it. I mean, everyone has its share of impostor syndrome to deal with, right?\nBut then, each time I took a new role there, I proved myself wrong. I get into the classroom, do my stuff and everyone goes home happy (except when I give homework\ud83d\ude01)."),(0,a.kt)("p",null,"Then you know, I kept thinking... Why is it so difficult to work if there are all that knowledge available and people don't know about it (or don't use it)?\nI feel like the current professionals, often way older than me, lack of a fundamental element: the mindset.\nAt the Henallux, we don't teach a language or a specific design pattern. We try to teach the students how to continuously improve. It does not\nmatter that you don't know how to do C++, Cobol, NodeJS or Python. It does not matter that you don't know all the details about networking\nor that you haven't experienced all the operation systems. ",(0,a.kt)("em",{parentName:"p"},"You can teach yourself!")),(0,a.kt)("h2",{id:"teaching-professionals"},"Teaching professionals?"),(0,a.kt)("p",null,"When I was working in Luxembourg, I met amazing people I immediatly considered as my mentors (\ud83d\udc4b ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/guillaumefaas/"},"Guillaume Faas")," & ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/yoanthirion/"},"Yoan Thirion"),").\nI mean, they had the mindset! 3 days with them were more valuable than 5 weeks spent elsewere in terms of learning.\nI brought that with me when I came back to Belgium (not them obviously..! the way they share what they know, and why they do it)."),(0,a.kt)("p",null,"Through my current employer, I've been sent to various clients who mainly considered me a developer.\nBut my interest lies in the fact that I could help my clients improve.\nI started looking for challenging missions where I could be more than a developer, where I could learn from them but teach them too!"),(0,a.kt)("p",null,"Then it happened. I had the incredible chance to bring my expertise in a wonderful walloon startup called ",(0,a.kt)("a",{parentName:"p",href:"https://pluriell.app/"},"Pluriell"),".\nThis new adventure \u2013 my first coaching(-only) mission ever \u2013 was extremely positive for this client! And me too!\nThrough many discussions, presentations, custom accompaniements for specific problems, and code katas, I believe it gave them fresh insight,\nnew methodologies, standards and objectives but mostly confidence and knowledge on what they (could) do right and what they (could) do wrong.\nWhen it comes to what I learnt from them, apart from broadening my views on how you work in a Belgian startup, I can also say that it brought\nme more experience and connections as a coach. It also definitely strengthened my will to interact with others, to teach and learn from them.\nAnd honestly, backed by experienced professionals like Yoan and Guillaume who kept showing me the way, it felt like a wonderful trip."),(0,a.kt)("p",null,"In a more recent update of my life, I happened to become a co-organizer of the ",(0,a.kt)("a",{parentName:"p",href:"https://www.meetup.com/software-craft-luxembourg/"},"Software Craftsmanship Luxembourg meetup"),"\nwith Guillaume and ",(0,a.kt)("a",{parentName:"p",href:"https://www.linkedin.com/in/arthur-grailet-a647a1189/"},"Arthur Grailet"),", for which we meet with other great individuals to share our understandings...\nI am still learning the ropes, but being part of this community and forced to go out of my comfort zone is really something I missed from being a student."),(0,a.kt)("a",{href:"https://sathishkannan162.github.io/the-one-genius-lone-genius-myth/"},(0,a.kt)(r.Z,{data:{src:"/img/no-genius-only-scenius.jpeg",alt:"No genius, only scenius",type:"image"},mdxType:"Figure"},"There are no genius, only scenius!")),(0,a.kt)("h2",{id:"from-dev-to-teacher--coach"},"From dev to teacher & coach"),(0,a.kt)("p",null,"Being a teacher is one thing. When you have to dive deep into JavaScript or explain how you can write efficient algorithms to people\nwho just recently left their school's bench, it really forces you to reflect.\nBut coaching people way older than you ",(0,a.kt)("em",{parentName:"p"},"in their own field"),"... this is new!\ud83d\ude06"),(0,a.kt)("p",null,"I think that both positions bring me the feeling to be ",(0,a.kt)("em",{parentName:"p"},"what I think is a real IT consultant"),": to help people concretely.\nThat obviously includes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"to understand how they feel (often simply listen to them),"),(0,a.kt)("li",{parentName:"ul"},"to help them optimize the way they work by pointing out where they can improve,"),(0,a.kt)("li",{parentName:"ul"},"but also by showing them what they already do right!\nAnd finally, the most important thing is... to discuss things, give pieces of advice based on the context and bring them new value.")),(0,a.kt)("p",null,"Teaching and coaching... these actions are actually quite close.\nThe idea is to build a story, narrate it and believe that people grasp the morality out of it.\nIf they don't, it is part of the job to attack from another angle in order to bring them what they require to go forward."),(0,a.kt)("p",null,"I truly like the jobs. You need to understand how people think, and how you can convey the right information (and emotion) to them.\nYou have to master your subject, and if not: be transparent and admit you don't know everything.\nThey don't know either anyway, so you can (and should) just look it up with them so that everyone levels up!"),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Sometimes you have to go back to your roots to grow bigger \ud83c\udf33"),(0,a.kt)("p",null,"I look forward to the surprises life will put next on my way, and I am sure everybody (and especially I)\nwill learn more throughout the journey!"),(0,a.kt)("p",null,"By the way, if you are looking for an Agile Technical Coach, hit me up on ",(0,a.kt)("a",{parentName:"p",href:"https://linkedin.com/in/tinael-devresse"},"LinkedIn"),"."),(0,a.kt)(s.Z,{url:c.vO,mdxType:"Newsletter"}))}y.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);