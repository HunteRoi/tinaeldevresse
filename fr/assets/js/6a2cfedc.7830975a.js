"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[503],{3905:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return m}});var r=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},c=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,h=d["".concat(u,".").concat(m)]||d[m]||p[m]||i;return n?r.createElement(h,s(s({ref:t},c),{},{components:n})):r.createElement(h,s({ref:t},c))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=d;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l.mdxType="string"==typeof e?e:a,s[1]=l;for(var o=2;o<i;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9411:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(5298),i="container_KXSz",s="legend_Ecw3";function l(e){let{data:t,children:n}=e;return t||n?(t.src&&(t.src=(0,a.Z)(t.src)),t.sources&&t.sources.length>0&&(t.sources=t.sources.map((e=>({...e,src:(0,a.Z)(e.src)})))),r.createElement("figure",null,t&&function(e){if("object"!=typeof e||!e.type)return r.createElement(r.Fragment,null);switch(e.type){case"image":case"img":return e.url?r.createElement("a",{href:e.url,target:"_blank"},r.createElement("img",e)):r.createElement("img",e);case"video":return r.createElement("video",{controls:!0,width:e.width},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"audio":return r.createElement("audio",{controls:!0},e.sources&&Array.isArray(e.sources)?e.sources.map((e=>r.createElement("source",{src:e.src,type:e.type}))):r.createElement("source",e));case"html":return r.createElement("div",{className:i},r.createElement("iframe",e));default:return r.createElement("object",{data:e.value,width:e.width,height:e.height})}}(t),r.createElement("figcaption",{className:s},n))):r.createElement(r.Fragment,null)}},9807:function(e,t,n){n.d(t,{Z:function(){return g}});var r=n(7294),a=n(9163),i=n(3868),s=n.n(i),l=n(5999),u="formContainer_ssZr",o="inputContainer_rIzC",c="input_xw7i",p="submit_jbGj",d="status_Xmiw",m="success_K3DK",h="sending_s6rj",f="error_ltts";const v=e=>{let t,{status:n,message:a,onValidated:i}=e;const v=()=>t&&t.value.indexOf("@")>-1&&s()(t.value)&&i({EMAIL:t.value});return(0,r.useEffect)((()=>{n&&"success"===n&&(t.text="")}),[n]),r.createElement("div",{className:u},r.createElement("h3",null,r.createElement(l.Z,{id:"newsletter.title",description:"The newsletter title"},"Stay up to date, subscribe to my newsletter!")),r.createElement("div",{className:o},r.createElement("input",{className:c,ref:e=>t=e,type:"email",placeholder:(0,l.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?v():null,required:!0,autoComplete:"email"}),r.createElement("a",{className:p+" tooltip",rel:"noopener",onClick:v,type:"submit"},r.createElement("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512"},r.createElement("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})),r.createElement("span",{className:"tooltipText"},"Submit!"))),"sending"===n&&r.createElement("div",{className:`${d} ${h}`},r.createElement(l.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list"},"Sending...")),"error"===n&&r.createElement("div",{className:`${d} ${f}`,dangerouslySetInnerHTML:{__html:a}}),"success"===n&&r.createElement("div",{className:`${d} ${m}`,dangerouslySetInnerHTML:{__html:a}}))};function g(e){let{url:t}=e;return r.createElement(a.Z,{url:t,render:e=>{let{subscribe:t,status:n,message:a}=e;return r.createElement(v,{status:n,message:a,onValidated:e=>t(e)})}})}},1324:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(7294),a=n(5999);function i(){return r.createElement("div",{className:"center"},r.createElement("span",{className:"italic"},r.createElement(a.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine"},"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones.")))}},831:function(e,t,n){n.d(t,{Z:function(){return l}});var r=n(7294),a=n(5742),i=n(2263),s=n(5298);function l(e){let{uri:t,image:n,type:l}=e;const{siteConfig:u}=(0,i.Z)(),{projectName:o,customFields:{mType:c,twitterName:p}}=u,d=l||c,m=n?(0,s.Z)(n):null,h=(0,s.Z)(t);return r.createElement(r.Fragment,null,r.createElement(a.Z,null,h&&r.createElement("link",{rel:"canonical",href:h}),h&&r.createElement("meta",{property:"og:url",content:h}),m&&r.createElement("meta",{property:"og:image",content:m}),d&&r.createElement("meta",{property:"og:type",content:d}),o&&r.createElement("meta",{property:"og:site_name",content:o}),p&&r.createElement("meta",{property:"twitter:site",content:`@${p}`}),m&&r.createElement("meta",{name:"twitter:image",content:m}),m&&r.createElement("meta",{name:"twitter:image:alt",content:"Banner image"})))}},5298:function(e,t,n){n.d(t,{Z:function(){return i}});var r=n(2263),a=n(4996);function i(e){const{siteConfig:t}=(0,r.Z)();let{url:n}=t||{};return`${n}${(0,a.Z)(e)}`}},1311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return m},contentTitle:function(){return p},default:function(){return v},frontMatter:function(){return c},metadata:function(){return d},toc:function(){return h}});var r=n(3117),a=(n(7294),n(3905)),i=n(9411),s=n(831),l=n(1324),u=n(9807),o=n(3089);const c={slug:"why-did-i-switch-to-clean-architecture",title:"Quelle architecture j'utilise pour mes projets?",tags:["d\xe9veloppement","structure","architecture"],description:"J'ai d\xe9cid\xe9 de parler du choix d'architecture que je prends quand je d\xe9veloppe mes apps!",image:"/img/why-did-i-switch-to-clean-architecture.png"},p=void 0,d={permalink:"/tinaeldevresse.eu/fr/blog/why-did-i-switch-to-clean-architecture",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2022-06-01-why-did-i-switch-to-clean-architecture.mdx",title:"Quelle architecture j'utilise pour mes projets?",description:"J'ai d\xe9cid\xe9 de parler du choix d'architecture que je prends quand je d\xe9veloppe mes apps!",date:"2022-06-01T00:00:00.000Z",formattedDate:"1 juin 2022",tags:[{label:"d\xe9veloppement",permalink:"/tinaeldevresse.eu/fr/blog/tags/developpement"},{label:"structure",permalink:"/tinaeldevresse.eu/fr/blog/tags/structure"},{label:"architecture",permalink:"/tinaeldevresse.eu/fr/blog/tags/architecture"}],readingTime:8.915,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"why-did-i-switch-to-clean-architecture",title:"Quelle architecture j'utilise pour mes projets?",tags:["d\xe9veloppement","structure","architecture"],description:"J'ai d\xe9cid\xe9 de parler du choix d'architecture que je prends quand je d\xe9veloppe mes apps!",image:"/img/why-did-i-switch-to-clean-architecture.png"},prevItem:{title:"Le partage, c'est l'entraide",permalink:"/tinaeldevresse.eu/fr/blog/sharing-is-caring"},nextItem:{title:"Les tests unitaires",permalink:"/tinaeldevresse.eu/fr/blog/unit-testing"}},m={authorsImageUrls:[]},h=[{value:"La N-Tier architecture",id:"la-n-tier-architecture",level:2},{value:"Qu&#39;est-ce que c&#39;est?",id:"quest-ce-que-cest",level:3},{value:"Avantages &amp; Inconv\xe9nients",id:"avantages--inconv\xe9nients",level:3},{value:"Quand l&#39;utiliser?",id:"quand-lutiliser",level:3},{value:"La Clean Architecture",id:"la-clean-architecture",level:2},{value:"Qu&#39;est-ce que c&#39;est?",id:"quest-ce-que-cest-1",level:3},{value:"Avantages &amp; Inconv\xe9nients",id:"avantages--inconv\xe9nients-1",level:3},{value:"Quand l&#39;utiliser?",id:"quand-lutiliser-1",level:3},{value:"Du coup, pourquoi est-ce que je pr\xe9f\xe8re cette derni\xe8re?",id:"du-coup-pourquoi-est-ce-que-je-pr\xe9f\xe8re-cette-derni\xe8re",level:2},{value:"Conclusion",id:"conclusion",level:2}],f={toc:h};function v(e){let{components:t,...n}=e;return(0,a.kt)("wrapper",(0,r.Z)({},f,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("a",{href:"/blog/why-did-i-switch-to-clean-architecture"},(0,a.kt)(i.Z,{data:{src:"/img/why-did-i-switch-to-clean-architecture.png",alt:"Mon Amour pour la Clean Architecture",type:"image"},mdxType:"Figure"})),(0,a.kt)("p",null,"J'ai d\xe9cid\xe9 de parler du choix d'architecture que je prends quand je d\xe9veloppe mes apps!"),(0,a.kt)(s.Z,{uri:"blog/why-did-i-switch-to-clean-architecture",image:"img/why-did-i-switch-to-clean-architecture.png",type:"article",mdxType:"SEO"}),(0,a.kt)("hr",null),(0,a.kt)(l.Z,{mdxType:"Reminder"}),(0,a.kt)("hr",null),(0,a.kt)("p",null,"Il n'y a pas si longtemps, des coll\xe8gues m'ont pos\xe9 la question suivante:"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"Comment est-ce que tu structures tes projets puisque lorsqu'ils \xe9voluent, l'architecture \"N-Tier\" devient plus complexe et tend \xe0 cr\xe9er des solutions en d\xe9sordre.")),(0,a.kt)("p",null,"Je n'ai pas toutes les r\xe9ponses mais ce que j'ai r\xe9pondu est que si \xe7a touche \xe0 mes projets, je fais un simple choix:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Si je travaille sur une app CRUD basique, je choisis d\xe9finitivement la 3-Tier architecture."),(0,a.kt)("li",{parentName:"ul"},'Mais si j\'ai besoin de construire une application plus complexe qui n\xe9cessite une logique business importante et qui doit "crier son but",\nje choisis alors directement ce que Robert C. Martin a appel\xe9 ',(0,a.kt)("a",{parentName:"li",href:"https://blog.cleancoder.com/uncle-bob/2012/08/13/the-clean-architecture.html"},"la Clean Architecture")," en 2012.\nBien s\xfbr, ma version ne suit pas strictement ce qu'Uncle Bob d\xe9crit dans son blog puisque je l'ai adapt\xe9 \xe0 mes besoins mais parlons-en!")),(0,a.kt)("p",null,"De nos jours cependant, j'ai plut\xf4t tendance \xe0 faire pencher la balance en faveur du deuxi\xe8me choix.\nMais ",(0,a.kt)("strong",{parentName:"p"},"qu'est-ce que j'aime dans la Clean Architecture et pas dans la N-Tier?")),(0,a.kt)("h2",{id:"la-n-tier-architecture"},"La N-Tier architecture"),(0,a.kt)("h3",{id:"quest-ce-que-cest"},"Qu'est-ce que c'est?"),(0,a.kt)("p",null,"Premi\xe8rement, \xe7a serait une honte de te parler de Clean Architecture et ne pas aborder l'enseignement que j'ai re\xe7u \xe0 l'\xe9cole : l'architecture n-tier.\nCe type d'archi est courament pr\xe9sent\xe9 et confondu avec l'une de ses versions sp\xe9cifiques: l'architecture 3-tiers."),(0,a.kt)("p",null,"Cette archi place les donn\xe9es comme \xe9tant le coeur de l'application. Elle est compos\xe9e de 3 couches:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"la couche Pr\xe9sentation, responsable de pr\xe9senter l'information \xe0 l'ext\xe9rieur ;"),(0,a.kt)("li",{parentName:"ol"},"la couche Logique, responsable de la logique business qui doit \xeatre appliqu\xe9e aux donn\xe9es ;"),(0,a.kt)("li",{parentName:"ol"},"la couche Donn\xe9es, responsable de l'acc\xe8s aux donn\xe9es (ORM, base de donn\xe9es, etc.).")),(0,a.kt)(i.Z,{data:{src:"/img/3-tier-architecture.jpg",alt:"3-tier schema",type:"image"},mdxType:"Figure"}),(0,a.kt)("p",null,"Bien s\xfbr, le \"n\" signifie qu'il peut y avoir plus ou moins de couches. Les \xe9l\xe9ments d\xe9crits ci-dessus ne repr\xe9sente qu'un d\xe9nominateur commun.\nIl existe des structures identiques comme l'archi 2-tiers, la Couche Unique, la 4-tiers, ...\nQuand on d\xe9veloppe un projet, on adapte l'architecture \xe0 ses besoins. Tu pourrais m\xeame sub-diviser les 3 couches ci-dessus en des sous-couches d\xe9pendamment de tes besoins."),(0,a.kt)("h3",{id:"avantages--inconv\xe9nients"},"Avantages & Inconv\xe9nients"),(0,a.kt)("p",null,"En ce qui concerne les ",(0,a.kt)("strong",{parentName:"p"},"avantages"),", on peut lister les suivants:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"plus s\xe9curis\xe9 \u2014 la couche Pr\xe9sentation (typiquement l'UI) n'est pas directement reli\xe9e \xe0 la base de donn\xe9es. Toutes les connexions sont donc prot\xe9g\xe9es par la couche Logique."),(0,a.kt)("li",{parentName:"ul"},'facilement maintenable \u2014 au moment de sa "cr\xe9ation", cette archi permettait aux d\xe9veloppeurs de maintenir leurs projets plus facilement que les pr\xe9c\xe9dentes.'),(0,a.kt)("li",{parentName:"ul"},"facilement \xe0 r\xe9utiliser \u2014 c'est bien plus facile de r\xe9utiliser la logique de chaque couche.")),(0,a.kt)("p",null,"Voyons voir ce qu'il en est des ",(0,a.kt)("strong",{parentName:"p"},"inconv\xe9nients"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"augmentation de l'effort \u2014 impl\xe9menter de nouvelles fonctionnalit\xe9s prend plus de temps puisque tu dois passer \xe0 travers toutes les couches.\nChanger une chose dans la couche Database oblige \xe9galement \xe0 r\xe9fl\xe9chir cette modification dans les couches Logique et Pr\xe9sentation puisqu'elles sont li\xe9es entre elles."),(0,a.kt)("li",{parentName:"ul"},"augmentation de la complexit\xe9 \u2014 quand la solution cro\xeet, elle devient plus difficile \xe0 garder propre, compr\xe9hensible et \xe0 pr\xe9dire l'impact de changements dans le code."),(0,a.kt)("li",{parentName:"ul"},"bien plus compliqu\xe9 \xe0 tester \u2014 impl\xe9menter des tests est beaucoup plus compliqu\xe9s parce que chaque couche est fortement coupl\xe9e \xe0 la couche qui suit.")),(0,a.kt)("h3",{id:"quand-lutiliser"},"Quand l'utiliser?"),(0,a.kt)("p",null,"D'apr\xe8s moi, utiliser l'architecture n-tier est un bon d\xe9but quand tu veux d\xe9velopper le prototype d'une id\xe9e parce que tu peux rapidement d\xe9montrer quelque chose.\nCela va cependant tendre \xe0 rendre les choses moins bien dans le futur."),(0,a.kt)("p",null,"Tu pourrais aussi utiliser cette archi si tu dois construire une simple application qui r\xe9alise du CRUD.\nD'ailleurs, c'est assez courant de faire \xe7a quand tu veux simplement lire le contenu d'une base de donn\xe9es. Je l'ai fait chez l'un de mes employeurs un jour."),(0,a.kt)("h2",{id:"la-clean-architecture"},"La Clean Architecture"),(0,a.kt)("h3",{id:"quest-ce-que-cest-1"},"Qu'est-ce que c'est?"),(0,a.kt)(i.Z,{data:{src:"/img/clean-architecture.jpg",alt:"Onion schema of CA",type:"image"},mdxType:"Figure"}),(0,a.kt)("p",null,"Cette architecture place le Domaine au centre, et en charge de tout. Elle demande \xe9galement plus de design intentionnel puisque tu ne te bases pas directement sur ta base de donn\xe9es.\nConstruit sur base du ",(0,a.kt)("a",{parentName:"p",href:"https://martinfowler.com/bliki/CQRS.html"},"patron CQRS"),", je la consid\xe8re comme le meilleur moyen d'\xe9crire une application avec la simplicit\xe9 et maintenabilit\xe9 en t\xeate."),(0,a.kt)("p",null,"Historiquement, l'archi 3-tiers est arriv\xe9e en 1992 gr\xe2ce \xe0 John J. Donovan et fut ensuite suivie par d'autres:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Hexagonal Architecture / Ports & Adapters (2005, Alistair Cockburn),"),(0,a.kt)("li",{parentName:"ul"},"Onion Architecture (2008, Jeffrey Palermo),"),(0,a.kt)("li",{parentName:"ul"},"Clean Architecture (2012, Robert C. Martin).")),(0,a.kt)("h3",{id:"avantages--inconv\xe9nients-1"},"Avantages & Inconv\xe9nients"),(0,a.kt)("p",null,"Une seconde liste pour les ",(0,a.kt)("strong",{parentName:"p"},"avantages"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"code moins coupl\xe9, meilleure testabilit\xe9 \u2014 comme le code est moins coupl\xe9 (merci \xe0 l'utilisation d'abstractions partout o\xf9 c'est possible), tu peux facilement \"mocker\" tes d\xe9pendances et tester unitairement tes composants.\nCela facilite aussi le d\xe9veloppement de chaque couche puisqu'elles ne sont pas fortement coupl\xe9es ensemble, permettant ainsi aux \xe9quipes de travailler en parall\xe8le sur chaque couche si besoin est."),(0,a.kt)("li",{parentName:"ul"},"s\xe9paration des responsabilit\xe9s \u2014 l'archi te force un peu \xe0 penser \xe0 ta structure et aux d\xe9pendances de tes composants, remet potentiellement en cause de mauvaises d\xe9cisions, etc.\nL'interface utilisateur ne s'int\xe9resse \xe9galement pas \xe0 la structure de la base de donn\xe9es, ni quel package est utilis\xe9 pour g\xe9n\xe9rer un PDF par exemple..."),(0,a.kt)("li",{parentName:"ul"},"meilleure exposition des fonctionnalit\xe9s (x10 si tu utilises l'Use-Case Driven Development en plus!)"),(0,a.kt)("li",{parentName:"ul"},"meilleure application des principes SOLID"),(0,a.kt)("li",{parentName:"ul"},"meilleure \xe9volutivit\xe9")),(0,a.kt)("p",null,"Et une nouvelle liste pour les ",(0,a.kt)("strong",{parentName:"p"},"inconv\xe9nients"),":"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"augmentation du temps de d\xe9veloppment \xe0 partir de rien \u2014 tu dois pr\xe9parer plus de choses au d\xe9but du projet avant de pouvoir commencer une fonctionnalit\xe9 qui a de la valeur pour le client."),(0,a.kt)("li",{parentName:"ul"},"augmentation du nombre de lignes de code \u2014 il te faut plus de fichiers (classes et interfaces) que dans une n-tier."),(0,a.kt)("li",{parentName:"ul"},"possible perte d'optimisation \u2014 en n-tier, tu es forc\xe9ment plus proche de l'impl\xe9mentation de cela te permet de meilleures performances.\nCette archi te fait perdre cette optimisation \xe0 profit de moins de couplage de ton code, ce qui est un bon \xe9change selon moi.")),(0,a.kt)("p",null,"NDLR: Honn\xeatement, en relisant ces inconv\xe9nients, je ne les consid\xe8re pas r\xe9ellement comme des probl\xe8mes.\nIls sont facilement surmontables avec l'exp\xe9rience, et te font gagner du temps sur le long terme, particuli\xe8rement si tu d\xe9cides de travailler avec des tests (ce que tu devrais toujours faire si tu veux produire du bon code!)."),(0,a.kt)("h3",{id:"quand-lutiliser-1"},"Quand l'utiliser?"),(0,a.kt)("p",null,"Quand tu dois d\xe9velopper des applications complexes, que tu veux tester tes fonctionnalit\xe9 et d\xe9livrer quelque chose qui a de la valeur et qui ne va pas augmenter la taille du buglog une fois en production.\nElle peut aussi \xeatre mix\xe9e avec des m\xe9thodologies qui en font une fiabilit\xe9 comme ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Domain-driven_design"},"DDD")," et ",(0,a.kt)("a",{parentName:"p",href:"https://en.wikipedia.org/wiki/Test-driven_development"},"TDD"),"."),(0,a.kt)("h2",{id:"du-coup-pourquoi-est-ce-que-je-pr\xe9f\xe8re-cette-derni\xe8re"},"Du coup, pourquoi est-ce que je pr\xe9f\xe8re cette derni\xe8re?"),(0,a.kt)("p",null,'Tu dois savoir maintenant que je suis fatigu\xe9 de d\xe9velopper des choses moches, je suis fatigu\xe9 de travailler pour des entreprises qui te disent "d\xe9veloppe plus vite et on am\xe9liorera plis tard".\nPlus tard n\'arrive jamais.'),(0,a.kt)("p",null,"Je suis si fatigu\xe9 d'une telle mani\xe8re de travailler que je suis tomb\xe9 amoureux de 3 choses:"),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},"la Clean Architecture, et"),(0,a.kt)("li",{parentName:"ol"},"le Test-Driven Development, et"),(0,a.kt)("li",{parentName:"ol"},"le mouvement ",(0,a.kt)("a",{parentName:"li",href:"https://fr.wikipedia.org/wiki/Software_craftsmanship"},"Software Craftsmanship"),".")),(0,a.kt)("p",null,"Mais plus s\xe9rieusement, je n'explique pas forc\xe9ment ",(0,a.kt)("em",{parentName:"p"},"pourquoi")," je la pr\xe9f\xe8re... Alors, en quelques mots, laisse-moi te l'expliquer.\nIl faut savoir que d\xe9velopper une application sans tests, c'est comme d\xe9velopper les yeux ferm\xe9s: tu fais des fautes.\nJ'ai donc creus\xe9 cette partie de mon travail que je n\xe9gligeais \xe0 l'\xe9poque: le testing.\nGr\xe2ce \xe0 mon exp\xe9rience chez PwC Luxembourg, j'ai rencontr\xe9 des gens formidables qui m'ont appris \xe9norm\xe9ment de nouvelles choses.\nC'est \xe0 cette \xe9poque que l'on m'a demand\xe9 de cr\xe9er une application en suivant une architecture particuli\xe8re...\nEt tout est devenu clair une fois que j'ai pratiqu\xe9."),(0,a.kt)("p",null,"D\xe9velopper avec la Clean Archi, c'est pour moi le r\xe9el aboutissement du d\xe9veloppement d'applications o\xf9 les \"parties\" techniques peuvent enfin \xeatre chang\xe9es sans pour autant devoir red\xe9velopper autre chose.\nEn r\xe9alit\xe9, j'ai appris beaucoup de choses avec la Clean Architecture:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"j'ai compris le r\xe9el atout qu'offrait l'Injection de d\xe9pendances ;"),(0,a.kt)("li",{parentName:"ul"},"j'ai r\xe9ussi \xe0 mieux appliquer SOLID que toutes les autres fois o\xf9 j'ai tent\xe9, en vain ;"),(0,a.kt)("li",{parentName:"ul"},"j'ai compris que je devais nommer mes interfaces ind\xe9pendamment de l'impl\xe9mentation qui pouvait en d\xe9couler puisque potentiellement, je pourrais avoir 3 impl\xe9mentations diff\xe9rentes d'un ",(0,a.kt)("inlineCode",{parentName:"li"},"IPdfGenerator")," ;"),(0,a.kt)("li",{parentName:"ul"},"j'ai compris que tester, c'\xe9tait amusant ;"),(0,a.kt)("li",{parentName:"ul"},"j'ai compris que d\xe9velopper des applications sans bugs, c'\xe9tait possible et que \xe7a devrait \xeatre standard.")),(0,a.kt)("p",null,"Et j'ai \xe9tudi\xe9 dans une \xe9cole IT! On m'a expliqu\xe9 l'injection de d\xe9pendances, les principes SOLID, le clean code, comment pr\xe9parer le d\xe9veloppement d'une application et \xe9viter la majorit\xe9 des bugs...\nMais ce n'est pas pour autant que je n'ai jamais \xe9crit de code horrible ou d'applications bugu\xe9es ou patch\xe9 une fonctionnalit\xe9 et cass\xe9 quelque chose d'autre en passant."),(0,a.kt)("p",null,"Alors, je t'encourage grandement \xe0 en apprendre plus sur les 3 sujets que j'ai mentionn\xe9 plus t\xf4t. Le reste devrait venir...\nIls repr\xe9sentent ce que j'adorerais appeler ",(0,a.kt)("em",{parentName:"p"},"le meilleur \xe9tat d'esprit")," pour la g\xe9n\xe9ration suivante de d\xe9veloppeurs."),(0,a.kt)("p",null,"Je recommenderais aussi d'en apprendre plus en regardant aux ressources suivantes:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"La pr\xe9sentation de Guillherme Ferreira sur ",(0,a.kt)("a",{parentName:"li",href:"https://ndcporto.com/agenda/the-grand-unified-theory-of-clean-architecture-and-test-pyramid-0b9p/6537f85dc598"},"The Grand Unified Theory of Clean Architecture and Test Pyramid")," \xe0 la NDC Porto ;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.jug.ch/events/slides/220201_Optivem_TDD_and_Clean_Architecture_Driven_by_Behaviour.pdf"},"Les slides de Valentina Cupa\u0107")," sur TDD et la Clean Architecture par comportement ;"),(0,a.kt)("li",{parentName:"ul"},"Un article de blog ",(0,a.kt)("a",{parentName:"li",href:"https://medium.com/codex/introduction-to-clean-architecture-2437c6987ec"},"introduisant \xe0 la CA")," ;"),(0,a.kt)("li",{parentName:"ul"},"L'exemple d'une telle structure qu'est ",(0,a.kt)("a",{parentName:"li",href:"https://github.com/jasontaylordev/CleanArchitecture"},"la template Clean Architecture de Jason Taylor"),"!")),(0,a.kt)("h2",{id:"conclusion"},"Conclusion"),(0,a.kt)("p",null,"Ce qui fait finallement que l'architecture n-tier est obsol\xe8te, c'est le fait qu'elle est centr\xe9e ",(0,a.kt)("em",{parentName:"p"},"donn\xe9es")," a contrario de la clean archi qui est centr\xe9e ",(0,a.kt)("em",{parentName:"p"},"domaine")," (logique).\n\xc7a nous a pris du temps de comprendre que ce qui donne de la valeur \xe0 nos clients n'est pas les donn\xe9es mais bien la logique business qui permet de traiter ces donn\xe9es!"),(0,a.kt)("p",null,"Si tu es toujours int\xe9ress\xe9 pour en apprendre plus sur ce sujet, je suis tomb\xe9 sur ces quelques ressources en ligne:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://www.digitalocean.com/community/conceptual_articles/s-o-l-i-d-the-first-five-principles-of-object-oriented-design"},"Les explications de Samuel Oloruntoba")," sur les principes SOLID ;"),(0,a.kt)("li",{parentName:"ul"},"L'",(0,a.kt)("a",{parentName:"li",href:"https://blog.ploeh.dk/2013/12/03/layers-onions-ports-adapters-its-all-the-same/"},"article de Mark Seemann")," sur le sujet des adapteurs ;"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",{parentName:"li",href:"https://dev.to/seangwright/comment/ccfb"},"Le commentaire de Sean G. Wright"),' sur "Clean architecture - Your approach" ;'),(0,a.kt)("li",{parentName:"ul"},"Le groupe MeetUp du ",(0,a.kt)("a",{parentName:"li",href:"https://www.meetup.com/fr-FR/software-craft-luxembourg/"},"Software Craftsmanship Luxembourg")," ;"),(0,a.kt)("li",{parentName:"ul"},"Le groupe MeetUp de la ",(0,a.kt)("a",{parentName:"li",href:"https://www.meetup.com/fr-FR/techexcellence/"},"Tech Excellence"),".")),(0,a.kt)("p",null,"Et toi, quelle archi tu utilises pour tes projets?"),(0,a.kt)(u.Z,{url:o.vO,mdxType:"Newsletter"}))}v.isMDXComponent=!0},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);