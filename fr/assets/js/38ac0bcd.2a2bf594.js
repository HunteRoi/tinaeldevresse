"use strict";(self.webpackChunktinaeldevresse=self.webpackChunktinaeldevresse||[]).push([[2396],{5859:function(e,n,s){s.r(n),s.d(n,{assets:function(){return m},contentTitle:function(){return c},default:function(){return j},frontMatter:function(){return u},metadata:function(){return p},toc:function(){return h}});var t=s(5893),i=s(1151),r=s(9411),l=s(831),o=s(1324),a=s(9807),d=s(3089);const u={slug:"deployment-environments",title:"Environnements de d\xe9ploiement",tags:["d\xe9ployement","environnement","environnement d'application","environnement de pipeline","CI/CD"],description:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n''apprennent pas durant leurs \xe9tudes. \xc0 mon avi...",image:"img/deployment-environments.png"},c=void 0,p={permalink:"/fr/blog/deployment-environments",editUrl:"https://github.com/hunteroi/tinaeldevresse.eu/tree/master/blog/2021-01-01-deployment-environments.mdx",source:"@site/i18n/fr/docusaurus-plugin-content-blog/2021-01-01-deployment-environments.mdx",title:"Environnements de d\xe9ploiement",description:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n''apprennent pas durant leurs \xe9tudes. \xc0 mon avi...",date:"2021-01-01T00:00:00.000Z",formattedDate:"1 janvier 2021",tags:[{label:"d\xe9ployement",permalink:"/fr/blog/tags/deployement"},{label:"environnement",permalink:"/fr/blog/tags/environnement"},{label:"environnement d'application",permalink:"/fr/blog/tags/environnement-dapplication"},{label:"environnement de pipeline",permalink:"/fr/blog/tags/environnement-de-pipeline"},{label:"CI/CD",permalink:"/fr/blog/tags/ci-cd"}],readingTime:8.87,hasTruncateMarker:!0,authors:[],frontMatter:{slug:"deployment-environments",title:"Environnements de d\xe9ploiement",tags:["d\xe9ployement","environnement","environnement d'application","environnement de pipeline","CI/CD"],description:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n''apprennent pas durant leurs \xe9tudes. \xc0 mon avi...",image:"img/deployment-environments.png"},unlisted:!1,prevItem:{title:"Qu'est-ce qu'un conteneur?",permalink:"/fr/blog/what-is-a-container"},nextItem:{title:"Qu'est-ce qui fait un bon d\xe9veloppeur?",permalink:"/fr/blog/what-makes-a-good-developer"}},m={authorsImageUrls:[]},h=[{value:"Qu&#39;est-ce qu&#39;un environnement de d\xe9ploiement?",id:"quest-ce-quun-environnement-de-d\xe9ploiement",level:2},{value:"Pourquoi d\xe9ployer peut \xeatre difficile?",id:"pourquoi-d\xe9ployer-peut-\xeatre-difficile",level:2},{value:"Les diff\xe9rentes types d&#39;environnement",id:"les-diff\xe9rentes-types-denvironnement",level:2},{value:"L&#39;environnement local",id:"lenvironnement-local",level:3},{value:"Objectifs",id:"objectifs",level:4},{value:"L&#39;environnement de d\xe9veloppement",id:"lenvironnement-de-d\xe9veloppement",level:3},{value:"Objectifs",id:"objectifs-1",level:4},{value:"L&#39;environnement de test",id:"lenvironnement-de-test",level:3},{value:"Objectifs",id:"objectifs-2",level:4},{value:"L&#39;environnement de staging",id:"lenvironnement-de-staging",level:3},{value:"Objectifs",id:"objectifs-3",level:4},{value:"L&#39;environnement de production",id:"lenvironnement-de-production",level:3},{value:"Objectifs",id:"objectifs-4",level:4},{value:"Comment choisir sa pipeline?",id:"comment-choisir-sa-pipeline",level:2},{value:"Compagnie A",id:"compagnie-a",level:3},{value:"Compagnie B &amp; Compagnie C",id:"compagnie-b--compagnie-c",level:3},{value:"Conclusion",id:"conclusion",level:2}];function v(e){const n={a:"a",em:"em",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,i.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)("a",{href:"/blog/deployment-environments",children:(0,t.jsx)(r.Z,{data:{src:"/img/deployment-environments.png",alt:"Deployment Environments",type:"image"}})}),"\n",(0,t.jsx)(n.p,{children:"Aux \xe9tudes, les professeurs se focalisent souvent sur les langages, l'algorithmique et le \"code propre\". Les environnements de d\xe9ploiement, c'est une des choses que les \xe9tudiants IT n'apprennent pas durant leurs \xe9tudes.\n\xc0 mon avis, c'est une connaissance importante \xe0 poss\xe9der quand on commence \xe0 travailler pour de plus grosses entreprises comme elles tendent \xe0 ajouter plusieurs couches \xe0 leur pipeline."}),"\n","\n",(0,t.jsx)(l.Z,{uri:"blog/deployment-environments",image:"/img/deployment-environments.png",type:"article"}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(o.Z,{}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.p,{children:"Cet article est plus pr\xe9cis et cible un certain type de personnes. J'esp\xe8re que tu le trouveras int\xe9ressant! J'ai h\xe2te de lire ton opinion sur les r\xe9seaux sociaux."}),"\n",(0,t.jsx)(n.h2,{id:"quest-ce-quun-environnement-de-d\xe9ploiement",children:"Qu'est-ce qu'un environnement de d\xe9ploiement?"}),"\n",(0,t.jsxs)(n.p,{children:["Si tu es ici, c'est probablement parce que tu te demandes ce qu'est un environnement de d\xe9ploiement (\xe0 ne pas confondre avec un environnement de d\xe9veloppement qui est un sujet totalement diff\xe9rent).\n",(0,t.jsx)(n.strong,{children:'Un environnement dans le monde du d\xe9ploiement d\'application est "un syst\xe8me informatique dans lequel un programme ou un composant applicatif est d\xe9ploy\xe9 et ex\xe9cut\xe9".'}),"\nC'est d'ailleurs pas moi qui le dis, mais bien ",(0,t.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/Environnement_(informatique)",children:"Wikip\xe9dia"}),". Et cette d\xe9finition est plut\xf4t pas mal, je dois dire."]}),"\n",(0,t.jsxs)(n.p,{children:["Comme les syst\xe8mes applicatifs, les processus de d\xe9veloppement et les ressources informatiques tendent \xe0 \xeatre plus distribu\xe9s, ils deviennent \xe9galement beaucoup plus complexes et sp\xe9cialis\xe9s.\nQuand tu travailles sur un projet, tu vas typiquement \xe0 travers un ",(0,t.jsx)(n.em,{children:"cycle"}),' de d\xe9veloppement, de testing et de release ; cycle qui \xe9volue souvent sur diff\xe9rentes plateformes avec des ressources diff\xe9rentes et une complexit\xe9 croissante.\nC\'est ce qu\'on appelle le "release management". Ce processus permet de d\xe9ployer, testing et de faire marche arri\xe8re si n\xe9cessaire (c\'est-\xe0-dire "retirer une version nouvellement d\xe9ploy\xe9e").']}),"\n",(0,t.jsx)(n.p,{children:"Pour la compr\xe9hension du reste de la publication, je vais bri\xe8vement expliquer les diff\xe9rentes \xe9tapes du d\xe9veloppement qu'une application traverse. Permets-moi donc de te pr\xe9senter les \xe9tapes communes:"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsx)(n.li,{children:"Analyse le probl\xe8me et r\xe9fl\xe9chis \xe0 une solution num\xe9rique."}),"\n",(0,t.jsx)(n.li,{children:"[Pas mal de trucs de marketing impliquant de la validation, des \xe9tudes de march\xe9, etc.]"}),"\n",(0,t.jsx)(n.li,{children:"Design l'application."}),"\n",(0,t.jsx)(n.li,{children:"Impl\xe9mente-la (d\xe9veloppement des fonctionnalit\xe9s qui r\xe8glent le probl\xe8me/ajoutent de la valeur \xe0 un produit existant)."}),"\n",(0,t.jsx)(n.li,{children:"Teste ton impl\xe9mentation."}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.strong,{children:"D\xe9ploie-la"})," (l'article d'aujourd'hui pointe particuli\xe8rement cette \xe9tape)."]}),"\n",(0,t.jsx)(n.li,{children:"Maintiens-la/corrige ses bugs."}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"pourquoi-d\xe9ployer-peut-\xeatre-difficile",children:"Pourquoi d\xe9ployer peut \xeatre difficile?"}),"\n",(0,t.jsxs)(n.p,{children:["Tu sais, quand on travaille en IT, on r\xe9p\xe8te souvent ce cycle des \xe9tapes 3 \xe0 7 (plus ou moins).\nCe qui est important \xe0 comprendre, c'est que l'on d\xe9ploie habituellement des versions diff\xe9rentes d'une application sur des machines diff\xe9rentes, \xe0 des \xe9tapes diff\xe9rentes du processus de d\xe9veloppement et en suivant des r\xe8gles diff\xe9rentes.\nQuand tu commences le d\xe9veloppement d'une applicaiton, tu connais d\xe9j\xe0 ton process management (enfin j'esp\xe8re aha!). Et dans beaucoup de cas, tu vas utiliser la ",(0,t.jsx)(n.a,{href:"https://fr.wikipedia.org/wiki/M%C3%A9thode_agile",children:"m\xe9thodologie Agile"}),"."]}),"\n",(0,t.jsx)(r.Z,{data:{src:"/img/agile-methodology-process.jpg",alt:"Processus Agile",type:"image"},children:(0,t.jsxs)(n.p,{children:["Fait par ",(0,t.jsx)("a",{href:"https://www.shutterstock.com/g/Tartila",target:"_blank",children:"Tartila"})]})}),"\n",(0,t.jsx)(n.p,{children:"J'aimerais mettre une remarque sur le fait que le cycle en cache un autre quand tu es dans le m\xe9tier: tu dois d\xe9placer diff\xe9rentes versions d'une application d'environnements en environnements. Mais un environnement, c'est pas juste une machine sur laquelle ton application tourne! \xc7a signifie souvent aussi des donn\xe9es diff\xe9rentes, des limites diff\xe9rentes, des buts diff\xe9rents, des processus diff\xe9rents, et plein d'autres trucs avec l'adjectif \"diff\xe9rent\".\nEn gros, pendant que ton application mature \xe0 une certaine \xe9tape (appellons \xe7a la version la plus jeune), tu as d'autres versions plus anciennes qui doivent bouger. Si ton entreprise n'a pas de sysadmins ou que tu travailles avec le Cloud, le d\xe9veloppeur doit g\xe9rer les d\xe9ploiements et les possibles rollbacks (sans oublier de rappeler qu'on ne fait pas juste que d\xe9placer l'app)."}),"\n",(0,t.jsx)(r.Z,{data:{src:"/img/small-fix.jpg",alt:"Ne d\xe9ploie jamais un vendredi",type:"image"}}),"\n",(0,t.jsx)(n.p,{children:"M\xeame si je sais que tu peux maintenant comprendre \xf4 combien \xe7a peut devenir complexe, je me permets de mentionner qu'il existe des outils d'automation pour faciliter notre travail (et Dieu merci!)."}),"\n",(0,t.jsx)(n.h2,{id:"les-diff\xe9rentes-types-denvironnement",children:"Les diff\xe9rentes types d'environnement"}),"\n",(0,t.jsx)(n.p,{children:"Chaque organisation a sa propre mani\xe8re de s'arranger sur ce sujet, et habituellement c'est m\xeame pr\xe9cis\xe9 par projet car tous les logiciels ne se basent pas sur les m\xeames besoins."}),"\n",(0,t.jsx)(n.p,{children:"Voici les quelques environnements standards que tu pourrais rencontrer:"}),"\n",(0,t.jsxs)(n.table,{children:[(0,t.jsx)(n.thead,{children:(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.th,{children:"Nom"}),(0,t.jsx)(n.th,{children:"Utilit\xe9 par"}),(0,t.jsx)(n.th,{children:"Donn\xe9es"})]})}),(0,t.jsxs)(n.tbody,{children:[(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:"Local"}),(0,t.jsx)(n.td,{children:"Toi"}),(0,t.jsx)(n.td,{children:"Pas de donn\xe9es client"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"D\xe9v"}),"eloppement"]}),(0,t.jsx)(n.td,{children:"D\xe9veloppeurs"}),(0,t.jsx)(n.td,{children:"Pas de donn\xe9es client"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Test"}),"ing"]}),(0,t.jsx)(n.td,{children:"Ing\xe9nieurs QA"}),(0,t.jsx)(n.td,{children:"Pas de donn\xe9es client"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsx)(n.td,{children:(0,t.jsx)(n.strong,{children:"Staging"})}),(0,t.jsx)(n.td,{children:"Ing\xe9nieurs QA et/ou clients"}),(0,t.jsx)(n.td,{children:"Donn\xe9es de production limit\xe9es"})]}),(0,t.jsxs)(n.tr,{children:[(0,t.jsxs)(n.td,{children:[(0,t.jsx)(n.strong,{children:"Prod"}),"uction"]}),(0,t.jsx)(n.td,{children:"Utilisateurs finaux"}),(0,t.jsx)(n.td,{children:"Toutes les donn\xe9es de production"})]})]})]}),"\n",(0,t.jsx)(n.h3,{id:"lenvironnement-local",children:"L'environnement local"}),"\n",(0,t.jsxs)(n.p,{children:["C'est ",(0,t.jsx)(n.em,{children:"ton ordinateur"}),". Le premier endroit o\xf9 tout le travail est r\xe9alis\xe9. Il est \xe9videmment cass\xe9 80% du temps."]}),"\n",(0,t.jsx)(n.h4,{id:"objectifs",children:"Objectifs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Travailler sur tes propres t\xe2ches"}),"\n",(0,t.jsx)(n.li,{children:"Voir le r\xe9sultat et faire ton petit bonhomme de chemin"}),"\n",(0,t.jsx)(n.li,{children:"Lancer une premi\xe8re batterie de tests avant d'envoyer ton code \xe0 tes coll\xe8gues"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lenvironnement-de-d\xe9veloppement",children:"L'environnement de d\xe9veloppement"}),"\n",(0,t.jsx)(n.p,{children:"C'est l'endroit o\xf9 tout le travail des d\xe9veloppeurs repose. C'est acceptable qu'il soit cass\xe9 de temps \xe0 autre (bien que tu devrais l'\xe9viter si tu ne veux pas recevoir des plaintes de tes coll\xe8gues \xe0 propos de \"dev qui est cass\xe9\").\nPersonne mis \xe0 part l'\xe9quipe de d\xe9veloppement du produit ne devrait jamais avoir acc\xe8s \xe0 cet environnement."}),"\n",(0,t.jsx)(n.h4,{id:"objectifs-1",children:"Objectifs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Lancer et tester avec des donn\xe9es de d\xe9veloppement"}),"\n",(0,t.jsx)(n.li,{children:"V\xe9rifier que ton code fonctionne bien avec celui des autres"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lenvironnement-de-test",children:"L'environnement de test"}),"\n",(0,t.jsx)(n.p,{children:"Aussi appel\xe9 QA (pour \"Quality Assurance\"), c'est l'endroit o\xf9 tout le reste de l'entreprise entre en jeu. C'est th\xe9oriquement l'environnement qui pr\xe9c\xe8de le d\xe9ploiement de nouvelles fonctionnalit\xe9s \xe0 de vrais utilisateurs finaux."}),"\n",(0,t.jsx)(n.h4,{id:"objectifs-2",children:"Objectifs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"V\xe9rifier qu'il n'y a aucun probl\xe8me qui aurait pass\xe9 les tests manuels et automatiques pr\xe9c\xe9dents"}),"\n",(0,t.jsx)(n.li,{children:"Prouver que des crit\xe8res sp\xe9cifiques sont remplis (en g\xe9n\xe9ral, valider le c\xf4t\xe9 technique d'une feature)"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lenvironnement-de-staging",children:"L'environnement de staging"}),"\n",(0,t.jsx)(n.p,{children:"Cet environnement a plusieurs noms. Les gens l'appellent \"pr\xe9-prod\" ou m\xeame \"User Acceptance Testing\" (UAT).\nC'est en r\xe9alit\xe9 un environnement qui a pour but de simuler l'environnement de production de plusieurs mani\xe8res. Il peut \xeatre utilis\xe9 pour faire des d\xe9mos de nouvelles fonctionnalit\xe9s, demander des retours de la part d'utilisateurs tri\xe9s sur le volet pour valider le flux business de bout en bout, ou pour habituer les clients \xe0 de nouveaux changements."}),"\n",(0,t.jsx)(n.h4,{id:"objectifs-3",children:"Objectifs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Emp\xeacher de d\xe9ployer des bugs en production"}),"\n",(0,t.jsx)(n.li,{children:"Valider le flux commercial int\xe9gral"}),"\n",(0,t.jsx)(n.li,{children:"Entrainer les clients por de nouveaux changements"}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"lenvironnement-de-production",children:"L'environnement de production"}),"\n",(0,t.jsx)(n.p,{children:"C'est un environnement sacr\xe9 qui ne devrait jamais casser. Les utilisateurs finaux l'utilisent. Si tu le casses, tu perds de l'argent, ok?"}),"\n",(0,t.jsx)(n.h4,{id:"objectifs-4",children:"Objectifs"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"\xcatre le dernier d\xe9positaire de tous les autres environnements"}),"\n",(0,t.jsx)(n.li,{children:"Donner aux clients la solution \xe0 leur(s) probl\xe8me(s) sur un certain sujet"}),"\n",(0,t.jsx)(n.li,{children:'\xcatre fiable, "bug-free", toujours op\xe9rationnel'}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"comment-choisir-sa-pipeline",children:"Comment choisir sa pipeline?"}),"\n",(0,t.jsxs)(n.p,{children:["Tu ne peux pas choisir al\xe9atoirement entre des pipelines grav\xe9es dans la pierre qui r\xe9pondront \xe0 tes besoins. Les pipelines sont sp\xe9cifiques construire pour r\xe9pondre aux besoins ",(0,t.jsx)(n.strong,{children:"d'un projet sp\xe9cifique"}),".\nJ'ai vu pas mal de choses ici et l\xe0, et il y a beaucoup de compagnies d'h\xe9bergement comme Heroku qui offrent d'aider \xe0 la mise en place de pipelines de d\xe9ploiement."]}),"\n",(0,t.jsx)(n.p,{children:"L'image suivante sch\xe9matise quelques pipelines dont j'ai entendu parler, avec lesquelles j'ai pu travailler ou que j'utilise m\xeame actuellement. Disons qu'elles sont les pipelines par d\xe9faut des entreprises A, B & C."}),"\n",(0,t.jsx)(r.Z,{data:{src:"/img/deployment-environments.svg",alt:"Deployment Environments",type:"img"},children:(0,t.jsx)(n.p,{children:"Sch\xe9ma des pipelines de d\xe9ploiement des compagnies A, B & C"})}),"\n",(0,t.jsx)(n.h3,{id:"compagnie-a",children:"Compagnie A"}),"\n",(0,t.jsx)(n.p,{children:"Cette entreprise utilise un design bien connu appel\xe9 l'approche DTAP (Development - Testing - Acceptance - Production).\nC'est la pipeline la plus standard qui soit. Elle est souvent utilis\xe9e (pas comme telle mais largement modifi\xe9e) dans les grandes entreprises."}),"\n",(0,t.jsx)(n.p,{children:"Cependant, le sch\xe9ma de cette entreprise a quelques particularit\xe9s que je souhaite mentionner: le nombre d'instances dans chaque environnement.\nL'image montre que tu peux choisir d'avoir une instance unique de ton application ou plusieurs d'entre elle tournant \xe0 une \xe9tape particuli\xe8re de ton process."}),"\n",(0,t.jsx)(n.p,{children:"\xc9videmment, choisir entre plusieurs instances qui tournent en m\xeame temps co\xfbte plus cher et apportent autant son lot d'avantages que d'inconv\xe9nients:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"Tu peux d\xe9ployer une fonctionnalit\xe9s sp\xe9cifique dans une instance sp\xe9cifique."}),"\n",(0,t.jsx)(n.li,{children:"\xc7a permet \xe0 l'\xe9quipe de d\xe9veloppement de travailler en plus petits groupes (ex: \xe9quipe 1 travaille sur liste 1 de fonctionnalit\xe9s dans l'instance 1 ; \xe9quipe 2 liste 2 dans instance 2; ...)."}),"\n",(0,t.jsx)(n.li,{children:"C'est sympa de voir que ton instance tourne tranquillement alors que celle des autres est cass\xe9e parce qu'ils se sont embrouill\xe9s (bien qu'il ne faut pas prendre la grosse t\xeate, \xe7a t'arrivera aussi!)."}),"\n"]}),"\n",(0,t.jsx)(n.h3,{id:"compagnie-b--compagnie-c",children:"Compagnie B & Compagnie C"}),"\n",(0,t.jsx)(n.p,{children:"Ces entreprises se sont d\xe9barass\xe9 de l'environnement de test. \xc7a arrive souvent quand tu peux te permettre de tester tes fonctions dans l'environnement de d\xe9veloppement ou dans l'environnement de staging. C'est aussi une possibilit\xe9 pour les petites \xe9quipes (moins de d\xe9ploiements \xe0 effectuer, en somme)."}),"\n",(0,t.jsx)(n.p,{children:"La seule diff\xe9rence entre les 2 entreprises est le nombre d'instances \xe0 chaque \xe9tape du processus. Quand tu construis un petit projet, tu utilises habituellement une pipeline identique \xe0 celle de la compagnie C car il y a moins d'\xe9tapes pour d\xe9ployer et aller d'un environnement \xe0 l'autre."}),"\n",(0,t.jsxs)(n.p,{children:["Personnellement, j'aime le sch\xe9ma C mais je le simplifierai mais encore un peu plus. Par exemple, je travaille sur un bot Discord (",(0,t.jsx)(n.a,{href:"https://discord.com",children:"si tu ne sais pas ce qu'est Discord, clique-ici"}),"), j'utilise:"]}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:"mon environnement local qui tourne et qui se connecte \xe0 des ressources du Cloud (base de donn\xe9es, service web de Discord, autres services web),"}),"\n",(0,t.jsx)(n.li,{children:'l\'environnement dev/staging (un seul environnement ici!) d\xe9ploie et tourne la version "beta" du bot, et'}),"\n",(0,t.jsx)(n.li,{children:"l'environnement de production h\xe9berge la version finale disponible pour les utilisateurs Discord."}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:'Je ne peux pas te donner une approche sacr\xe9e magique du d\xe9ploiement qui fonctionnera parfaitement pour tous tes projets car \xe7a n\'existe pas.\nTu dois cr\xe9er ton propre plan personnalis\xe9. Mais ces sch\xe9mas "par d\xe9faut" servent au moins de guide pour toi!'}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsx)(n.strong,{children:"Et vous les gens, quelle est votre pipeline de d\xe9ploiement favorite?"})}),"\n",(0,t.jsx)(n.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,t.jsx)(n.p,{children:'Les environnements de d\xe9ploiement sont une grosse histoire et cet article a pour but de gentiment entrouvrir la partie vers ce monde.\nComme le mouvement "DevOps" devient de plus en plus intriguant aux yeux des organisations, c\'est toujours un plus de savoir des choses concernant cela.'}),"\n",(0,t.jsx)(n.p,{children:"J'esp\xe8re que j'ai r\xe9ussi \xe0 \xe9veiller votre curiosit\xe9 et que vous vous avancez sur ces chemins. D'ici l\xe0, on se voit plus tard!"}),"\n",(0,t.jsx)(a.Z,{url:d.vO})]})}function j(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(v,{...e})}):v(e)}},9411:function(e,n,s){s.d(n,{Z:function(){return o}});var t=s(5298),i={container:"container_KXSz",legend:"legend_Ecw3"},r=s(5893);function l(e){if("object"!=typeof e||!e.type)return(0,r.jsx)(r.Fragment,{});switch(e.type){case"image":case"img":return e.url?(0,r.jsx)("a",{href:e.url,target:"_blank",children:(0,r.jsx)("img",{...e})}):(0,r.jsx)("img",{...e});case"video":return(0,r.jsx)("video",{controls:!0,width:e.width,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,r.jsx)("source",{src:e.src,type:e.type}))):(0,r.jsx)("source",{...e})});case"audio":return(0,r.jsx)("audio",{controls:!0,children:e.sources&&Array.isArray(e.sources)?e.sources.map((e=>(0,r.jsx)("source",{src:e.src,type:e.type}))):(0,r.jsx)("source",{...e})});case"html":return(0,r.jsx)("div",{className:i.container,children:(0,r.jsx)("iframe",{...e})});default:return(0,r.jsx)("object",{data:e.value,width:e.width,height:e.height})}}function o(e){let{data:n,children:s}=e;return n||s?(n.src&&(n.src=(0,t.Z)(n.src)),n.sources&&n.sources.length>0&&(n.sources=n.sources.map((e=>({...e,src:(0,t.Z)(e.src)})))),(0,r.jsxs)("figure",{children:[n&&l(n),(0,r.jsx)("figcaption",{className:i.legend,children:s})]})):(0,r.jsx)(r.Fragment,{})}},9807:function(e,n,s){s.d(n,{Z:function(){return f}});var t=s(7294),i=s(9163),r=s(3868),l=s.n(r),o=s(5999),a="formContainer_ssZr",d="inputContainer_rIzC",u="input_xw7i",c="submit_jbGj",p="status_Xmiw",m="success_K3DK",h="sending_s6rj",v="error_ltts",j=s(5893);const x=e=>{let n,{status:s,message:i,onValidated:r}=e;const x=()=>n&&n.value.indexOf("@")>-1&&l()(n.value)&&r({EMAIL:n.value});return(0,t.useEffect)((()=>{s&&"success"===s&&(n.text="")}),[s]),(0,j.jsxs)("div",{className:a,children:[(0,j.jsx)("h3",{children:(0,j.jsx)(o.Z,{id:"newsletter.title",description:"The newsletter title",children:"Stay up to date, subscribe to my newsletter!"})}),(0,j.jsxs)("div",{className:d,children:[(0,j.jsx)("input",{className:u,ref:e=>n=e,type:"email",placeholder:(0,o.I)({id:"newsletter.placeholder",message:"Enter your email address",description:"The placeholder within the input"}),onKeyDown:e=>"Enter"===e.key?x():null,required:!0,autoComplete:"email"}),(0,j.jsxs)("a",{className:c+" tooltip",rel:"noopener",onClick:x,type:"submit",children:[(0,j.jsx)("svg",{"aria-hidden":"true",focusable:"false","data-prefix":"far","data-icon":"paper-plane",className:"svg-inline--fa fa-paper-plane fa-w-16",role:"img",xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 512 512",children:(0,j.jsx)("path",{fill:"currentColor",d:"M440 6.5L24 246.4c-34.4 19.9-31.1 70.8 5.7 85.9L144 379.6V464c0 46.4 59.2 65.5 86.6 28.6l43.8-59.1 111.9 46.2c5.9 2.4 12.1 3.6 18.3 3.6 8.2 0 16.3-2.1 23.6-6.2 12.8-7.2 21.6-20 23.9-34.5l59.4-387.2c6.1-40.1-36.9-68.8-71.5-48.9zM192 464v-64.6l36.6 15.1L192 464zm212.6-28.7l-153.8-63.5L391 169.5c10.7-15.5-9.5-33.5-23.7-21.2L155.8 332.6 48 288 464 48l-59.4 387.3z"})}),(0,j.jsx)("span",{className:"tooltipText",children:"Submit!"})]})]}),"sending"===s&&(0,j.jsx)("div",{className:`${p} ${h}`,children:(0,j.jsx)(o.Z,{id:"newsletter.sending",description:"The text stating the email is being registered in the newsletter list",children:"Sending..."})}),"error"===s&&(0,j.jsx)("div",{className:`${p} ${v}`,dangerouslySetInnerHTML:{__html:i}}),"success"===s&&(0,j.jsx)("div",{className:`${p} ${m}`,dangerouslySetInnerHTML:{__html:i}})]})};function f(e){let{url:n}=e;return(0,j.jsx)(i.Z,{url:n,render:e=>{let{subscribe:n,status:s,message:t}=e;return(0,j.jsx)(x,{status:s,message:t,onValidated:e=>n(e)})}})}},1324:function(e,n,s){s.d(n,{Z:function(){return r}});var t=s(5999),i=s(5893);function r(){return(0,i.jsx)("div",{className:"center",children:(0,i.jsx)("span",{className:"italic",children:(0,i.jsx)(t.Z,{id:"reminder",description:"The text stating that what is written in this website is my own opinions and only mine",children:"Just a quick reminder: the opinions expressed here are stricly my own. They do not represent the opinions or views of my current employer nor any of my previous ones."})})})}},831:function(e,n,s){s.d(n,{Z:function(){return o}});var t=s(5742),i=s(2263),r=s(5298),l=s(5893);function o(e){let{uri:n,image:s,type:o}=e;const{siteConfig:a}=(0,i.Z)(),{projectName:d,customFields:{mType:u,twitterName:c}}=a,p=o||u,m=s?(0,r.Z)(s):null,h=(0,r.Z)(n);return(0,l.jsx)(l.Fragment,{children:(0,l.jsxs)(t.Z,{children:[h&&(0,l.jsx)("link",{rel:"canonical",href:h}),h&&(0,l.jsx)("meta",{property:"og:url",content:h}),m&&(0,l.jsx)("meta",{property:"og:image",content:m}),p&&(0,l.jsx)("meta",{property:"og:type",content:p}),d&&(0,l.jsx)("meta",{property:"og:site_name",content:d}),c&&(0,l.jsx)("meta",{property:"twitter:site",content:`@${c}`}),m&&(0,l.jsx)("meta",{name:"twitter:image",content:m}),m&&(0,l.jsx)("meta",{name:"twitter:image:alt",content:"Banner image"})]})})}},5298:function(e,n,s){s.d(n,{Z:function(){return r}});var t=s(2263),i=s(4996);function r(e){const{siteConfig:n}=(0,t.Z)();let{url:s}=n||{};return`${s}${(0,i.Z)(e)}`}},1151:function(e,n,s){s.d(n,{Z:function(){return o},a:function(){return l}});var t=s(7294);const i={},r=t.createContext(i);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),t.createElement(r.Provider,{value:n},e.children)}},3089:function(e){e.exports=JSON.parse('{"vO":"https://tinaeldevresse.us7.list-manage.com/subscribe/post?u=8e00a760248c6a6e95f5bbc12MAILCHIMP_URL_VALUEid=8283ccedca"}')}}]);