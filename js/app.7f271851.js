(function(e){function t(t){for(var n,o,r=t[0],c=t[1],l=t[2],p=0,u=[];p<r.length;p++)o=r[p],Object.prototype.hasOwnProperty.call(i,o)&&i[o]&&u.push(i[o][0]),i[o]=0;for(n in c)Object.prototype.hasOwnProperty.call(c,n)&&(e[n]=c[n]);d&&d(t);while(u.length)u.shift()();return s.push.apply(s,l||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],n=!0,r=1;r<a.length;r++){var c=a[r];0!==i[c]&&(n=!1)}n&&(s.splice(t--,1),e=o(o.s=a[0]))}return e}var n={},i={app:0},s=[];function o(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,o),a.l=!0,a.exports}o.m=e,o.c=n,o.d=function(e,t,a){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},o.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(o.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)o.d(a,n,function(t){return e[t]}.bind(null,n));return a},o.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],c=r.push.bind(r);r.push=t,r=r.slice();for(var l=0;l<r.length;l++)t(r[l]);var d=c;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0071":function(e,t,a){e.exports=a.p+"img/personal_picture.88dfc505.jpeg"},"025d":function(e,t,a){"use strict";var n=a("6ede"),i=a.n(n);i.a},"034f":function(e,t,a){"use strict";var n=a("8a23"),i=a.n(n);i.a},"038d":function(e,t,a){e.exports=a.p+"img/vue.d2aee91d.svg"},"055b":function(e,t,a){e.exports=a.p+"img/python.7f431396.svg"},"090e":function(e,t,a){e.exports=a.p+"img/nodejs.69d87ef3.svg"},"0a28":function(e,t,a){},"0a32":function(e,t,a){e.exports=a.p+"img/maven.6eb10258.svg"},"0b91":function(e,t,a){e.exports=a.p+"img/springboot.d053075f.svg"},"0c1b":function(e,t,a){e.exports=a.p+"img/openmp.d642fba2.svg"},1540:function(e,t,a){e.exports=a.p+"img/php.eeb4ca13.svg"},1771:function(e,t,a){var n={"./angular.svg":"a230","./bootstrap.svg":"8d2c","./c.svg":"ffa3","./csharp.svg":"d2b4","./css.svg":"ca83","./cuda.svg":"de5d","./cv.svg":"6d4e","./dotnet.svg":"9c39","./electron.svg":"fa26","./firebase.svg":"ded0","./git.svg":"aea7","./hibernate.svg":"d6b3","./html.svg":"a376","./java.svg":"b219","./jquery.svg":"2608","./lau.jpg":"c082","./leetcode.png":"f233","./material.svg":"8780","./maven.svg":"0a32","./mongo.svg":"544e","./mysql.svg":"6c4c","./nodejs.svg":"090e","./openacc.svg":"2966","./openmp.svg":"0c1b","./personal_picture.jpeg":"0071","./php.svg":"1540","./python.svg":"055b","./raspbian.svg":"1cbe","./scikit.svg":"3c13","./security.svg":"b464","./springboot.svg":"0b91","./swing.svg":"2450","./ubuntu.svg":"e47b","./unity.svg":"87f1","./vue.svg":"038d","./vuetify.svg":"6dff","./vuex.svg":"33b3","./windows.svg":"d148"};function i(e){var t=s(e);return a(t)}function s(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}i.keys=function(){return Object.keys(n)},i.resolve=s,e.exports=i,i.id="1771"},"1cbe":function(e,t,a){e.exports=a.p+"img/raspbian.00a35c76.svg"},2450:function(e,t,a){e.exports=a.p+"img/swing.914d9a89.svg"},2608:function(e,t,a){e.exports=a.p+"img/jquery.d929eb15.svg"},2966:function(e,t,a){e.exports=a.p+"img/openacc.76cd9a62.svg"},"33b3":function(e,t,a){e.exports=a.p+"img/vuex.1bab3def.svg"},"35bd":function(e,t,a){},"3c13":function(e,t,a){e.exports=a.p+"img/scikit.7b4d46fc.svg"},4948:function(e,t,a){"use strict";var n=a("0a28"),i=a.n(n);i.a},"4c5c":function(e,t,a){},"544e":function(e,t,a){e.exports=a.p+"img/mongo.8b3eb4a0.svg"},"560f":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("div",{attrs:{id:"app"}},[e.loading?a("div",{staticClass:"spinner"},[a("Loader")],1):a("div",{staticClass:"content"},[a("div",{staticClass:"section"},[a("Intro")],1),a("div",{staticClass:"experience_section"},[a("h1",{staticClass:"section_title"},[e._v("Experience")]),a("hr",{staticClass:"star-primary brief-case"}),a("Experience")],1),a("div",{staticClass:"education_section"},[a("h1",{staticClass:"section_title"},[e._v("Education")]),a("hr",{staticClass:"star-primary education"}),a("Education",{staticClass:"education_list"})],1),a("div",{staticClass:"community"},[a("v-parallax",{staticStyle:{height:"100%"},attrs:{src:"https://cdn.vuetifyjs.com/images/parallax/material2.jpg"}},[a("div",{staticClass:"community_section"},[a("h1",{staticClass:"section_title"},[e._v("Community Involvement")]),a("hr",{staticClass:"star-primary community"}),a("Community")],1),a("br")])],1),a("div",{staticClass:"projects_section"},[a("h1",{staticClass:"section_title projects_title"},[e._v("Projects")]),a("hr",{staticClass:"star-primary projects"}),a("div",{staticClass:"margin_item"},[a("Projects"),a("br")],1)]),a("div",{staticClass:"skills_section"},[a("h1",{staticClass:"section_title"},[e._v("Skills")]),a("hr",{staticClass:"star-primary skills"}),a("div",{staticClass:"margin_item"},[a("Skills"),a("br")],1)]),a("div",[a("Carousel")],1),a("div",[a("Footer")],1),a("go-top")],1)])])},s=[],o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"loader"},[e._v("Loading...")])},r=[],c={name:"Loader"},l=c,d=(a("4948"),a("2877")),p=Object(d["a"])(l,o,r,!1,null,"9c65fd56",null),u=p.exports,m=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"intro"}},[n("div",{attrs:{id:"particles-js"}}),n("div",{staticStyle:{display:"flex","justify-content":"center","align-items":"center"}},[n("div",{staticClass:"introduction1 row"},[n("v-container",{staticClass:"fill-height main",staticStyle:{"min-height":"434px"},attrs:{fluid:""}},[n("v-fade-transition",{attrs:{mode:"out-in"}},[n("v-card",{staticClass:"mx-auto justify-center",attrs:{width:"300"}},[n("v-flex",[n("img",{staticClass:"picture grey darken-4",attrs:{src:a("0071"),height:"225",contain:""}})]),n("h1",{staticClass:"name"},[e._v("Majed Badawi")]),n("v-divider"),n("v-row",[n("v-col",{staticStyle:{margin:"-20px"}},[n("v-btn",{attrs:{href:"https://www.linkedin.com/in/majed-badawi-3b376a125/",target:"_blank",fab:""}},[n("v-icon",{staticStyle:{color:"#0e76a8"}},[e._v("mdi-linkedin")])],1)],1),n("v-col",{staticStyle:{margin:"-20px"}},[n("v-btn",{attrs:{href:"https://github.com/MajedBadawi",target:"_blank",fab:""}},[n("v-icon",[e._v("fab fa-github")])],1)],1)],1),n("v-divider"),n("div",{staticClass:"contact text-left"},[n("v-card-subtitle",{staticStyle:{"margin-top":"-20px","font-size":"18px"}},[n("v-icon",[e._v("mdi-phone")]),n("a",{attrs:{href:"tel:+96176476402"}},[e._v("(+961) 76476402")])],1),n("v-card-subtitle",{staticStyle:{"margin-top":"-20px","font-size":"18px"}},[n("v-icon",[e._v("mdi-email")]),n("a",{attrs:{href:"mailto:majedbadawi@outlook.com"}},[e._v("majedbadawi@outlook.com")])],1)],1)],1)],1)],1)],1),n("div",{staticClass:"introduction2 row"},[n("div",{staticClass:"positions"},[e._v(" > I am a "),n("vue-typer",{attrs:{text:e.roles,repeat:1/0,shuffle:!1,"initial-action":"typing","pre-type-delay":70,"type-delay":70,"pre-erase-delay":2e3,"erase-delay":250,"erase-style":"select-all","erase-on-complete":!1,"caret-animation":"blink"}})],1)])])])},v=[],f=a("e956"),g=a.n(f),h={name:"Intro",components:{VueTyper:f["VueTyper"]},data:function(){return{roles:["Full-stack \nSoftware Engineer","Tech Enthusiast","Book Worm"]}},mounted:function(){this.initParticles()},methods:{initParticles:function(){window.particlesJS("particles-js",{particles:{number:{value:80,density:{enable:!0,value_area:700}},color:{value:"#ffffff"},shape:{type:"circle",stroke:{width:0,color:"#000000"},polygon:{nb_sides:5}},opacity:{value:.5,random:!1,anim:{enable:!1,speed:1,opacity_min:.1,sync:!1}},size:{value:3,random:!0,anim:{enable:!1,speed:40,size_min:.1,sync:!1}},line_linked:{enable:!0,distance:150,color:"#ffffff",opacity:.4,width:1},move:{enable:!0,speed:6,direction:"none",random:!1,straight:!1,out_mode:"out",bounce:!1,attract:{enable:!1,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"canvas",events:{onhover:{enable:!0,mode:"grab"},onclick:{enable:!0,mode:"push"},resize:!0},modes:{grab:{distance:140,line_linked:{opacity:1}},bubble:{distance:400,size:40,duration:2,opacity:8,speed:3},repulse:{distance:200,duration:.4},push:{particles_nb:4},remove:{particles_nb:2}}},retina_detect:!0})}}},b=h,y=(a("e9f5"),a("6544")),_=a.n(y),x=a("8336"),C=a("b0af"),w=a("99d9"),k=a("62ad"),j=a("a523"),S=a("ce7e"),P=a("0789"),T=a("0e8f"),V=a("132d"),M=a("0fd9"),O=Object(d["a"])(b,m,v,!1,null,"8c22dc56",null),A=O.exports;_()(O,{VBtn:x["a"],VCard:C["a"],VCardSubtitle:w["a"],VCol:k["a"],VContainer:j["a"],VDivider:S["a"],VFadeTransition:P["c"],VFlex:T["a"],VIcon:V["a"],VRow:M["a"]});var D=a("49ec"),E=a.n(D),F=(a("572f"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-footer",{attrs:{dark:"",padless:""}},[a("v-card",{staticClass:"flex",attrs:{flat:"",tile:""}},[a("v-card-text",[a("v-row",{staticStyle:{"margin-top":"-30px","margin-bottom":"-30px"}},[a("v-col",{staticStyle:{"text-align":"left"}},[a("div",[a("h3",[a("strong",[e._v("Let's Get Connected!")])])]),a("div",[a("strong",[e._v("Resume and code samples can be sent on request")])])]),a("v-col",{staticStyle:{"text-align":"right","margin-right":"120px"}},[a("v-spacer"),a("br"),a("div",{staticClass:"footer-social"},[a("v-btn",{staticClass:"mx-12",attrs:{href:"https://www.linkedin.com/in/majed-badawi-3b376a125/",target:"_blank",dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[e._v("mdi-linkedin")])],1),a("v-btn",{staticClass:"mx-12",attrs:{href:"https://github.com/MajedBadawi",target:"_blank",dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[e._v("fab fa-github")])],1),a("v-btn",{staticClass:"mx-12",attrs:{href:"mailto:majedbadawi@outlook.com",dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[e._v("mdi-email")])],1),a("v-btn",{staticClass:"mx-12",attrs:{href:"tel:+96176476402",dark:"",icon:""}},[a("v-icon",{attrs:{size:"24px"}},[e._v("mdi-phone")])],1)],1)],1)],1)],1),a("v-divider"),a("v-card-text",{staticClass:"py-2 white--text text-center"},[e._v(" "+e._s((new Date).getFullYear())+" — "),a("strong",[e._v("Majed Badawi")])])],1)],1)}),B=[],I={name:"Footer"},L=I,J=a("553a"),N=a("2fa4"),H=Object(d["a"])(L,F,B,!1,null,"1f1a87de",null),G=H.exports;_()(H,{VBtn:x["a"],VCard:C["a"],VCardText:w["b"],VCol:k["a"],VDivider:S["a"],VFooter:J["a"],VIcon:V["a"],VRow:M["a"],VSpacer:N["a"]});var U=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-timeline",{attrs:{dense:""}},e._l(e.positions,(function(t,n){return a("v-timeline-item",{key:n,staticClass:"timeline_item",attrs:{large:!0}},[a("v-card",[a("v-card-title",{staticClass:"title row"},[a("span",{staticClass:"position_title text-uppercase word_break col-sm-6"},[e._v(e._s(t.title))]),a("span",{staticClass:"position_company col-sm-6",staticStyle:{"text-align":"right"}},[t.website?a("a",{staticClass:"word_break",staticStyle:{color:"rgb(57, 71, 204)"},attrs:{href:t.website}},[e._v(" "+e._s(t.company)+" ")]):a("span",{staticClass:"word_break"},[e._v(e._s(t.company))]),a("p",{staticClass:"position_date word_break"},[e._v(" "+e._s(t.dateFrom)+" - "+e._s(t.dateTo)+" ("+e._s(e.getDuration(t.dateFrom,t.dateTo))+") ")])])]),a("v-card-text",{staticClass:"white text--primary text-left"},[a("ul",{staticClass:"position_description"},e._l(t.description,(function(n,i){return a("li",{key:i},[e._v(" "+e._s(t.description[i])+" ")])})),0)])],1)],1)})),1)},q=[],$={name:"Experience",data:function(){return{positions:[{title:"Software Developer",company:"Tecfrac",website:"tecfrac.com",dateFrom:"Nov 2019",dateTo:"Present",description:["The work focus on developing cross-platform and responsive desktop software using Electron.js/Vue.js along with secure and fast back-end services using Spring Boot/Hibernate.","Tasks vary through all faces of development from requirements and design to deployment and maintenance"]},{title:"Undergraduate Research Assistant",company:"Lebanese American University",website:"lau.edu",dateFrom:"2018",dateTo:"2019",description:["Researched optimising a hybrid heuristic that is based on a steady-state genetic algorithm for the NP-hard Maximum Clique problem","The goal was achieved using shared-memory and GPUs, after studying the accelerated regions via profilers using DIMACS benchmarks on a Xeon processor and NVIDIA GTX 980 GPU."]},{title:"Part-time Software Developer",company:"Safa Group for Marble & Granite",website:"http://safa-group.com/",dateFrom:"Jan 2019",dateTo:"April 2019",description:["Developed a full-stack web application for their machine maintenance and tasks scheduling services using the LAMP stack and Google Calendar API"]},{title:"Freelance Software Developer",company:"Self-employed",website:"",dateFrom:"2017",dateTo:"2019",description:["Delivered full-stack web applications for startups and clients","Supported a team of data analysts in data manipulation and developing analytics algorithms for a healthcare-related project using PostgreSQL","Collaborated with software that runs facility planning algorithms Java/JavaFX"]},{title:"Software Engineering Intern",company:"Techpunto",website:"http://techpunto.com/",dateFrom:"Jun 2018",dateTo:"Jul 2018",description:["Designed and implemented a scalable election management system by optimising a previous version using the LAMP stack","Tasks: database design, back-end security, front-end design, and client training"]},{title:"Sales Assistant",company:"BE Home Appliances",website:"",dateFrom:"2013",dateTo:"Sep 2016",description:["Increased sales by 17%"]}]}},methods:{getDuration:function(e,t){e=new Date(e),t="Present"==t?new Date:new Date(t);var a=t-e;a/=1e3,a/=60,a/=60,a/=24,a/=30,a=Math.round(a);var n=0,i=0;while(a>=12)n++,a-=12;i=a;var s="",o="";n>0&&(s=n>1?n+" yrs":n+" yr"),i>0&&(o=i>1?i+" mos":i+" mo");var r="";return r=s&&o?s+" "+o:s+o,r}}},R=$,z=(a("70d5"),a("8414")),Q=a("1e06"),W=Object(d["a"])(R,U,q,!1,null,"e9d9e0aa",null),X=W.exports;_()(W,{VCard:C["a"],VCardText:w["b"],VCardTitle:w["c"],VTimeline:z["a"],VTimelineItem:Q["a"]});var Y=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"carousel"},[a("agile",{ref:"main",staticClass:"main",attrs:{options:e.options1,"as-nav-for":e.asNavFor1}},e._l(e.slides,(function(e,t){return a("div",{key:t,staticClass:"slide",class:"slide--"+t},[a("img",{attrs:{src:e}})])})),0),a("agile",{ref:"thumbnails",staticClass:"thumbnails",attrs:{options:e.options2,"as-nav-for":e.asNavFor2}},[e._l(e.slides,(function(t,n){return a("div",{key:n,staticClass:"slide slide--thumbniail",class:"slide--"+n,on:{click:function(t){return e.$refs.thumbnails.goTo(n)}}},[a("img",{attrs:{src:t}})])})),a("template",{slot:"prevButton"},[a("i",{staticClass:"fas fa-chevron-left"})]),a("template",{slot:"nextButton"},[a("i",{staticClass:"fas fa-chevron-right"})])],2)],1)},K=[],Z=a("f7ab"),ee={name:"Carousel",data:function(){return{asNavFor1:[],asNavFor2:[],options1:{dots:!1,fade:!0,navButtons:!1},options2:{autoplay:!0,centerMode:!0,dots:!1,navButtons:!1,slidesToShow:3,responsive:[{breakpoint:600,settings:{slidesToShow:5}},{breakpoint:1e3,settings:{navButtons:!0}}]},slides:["https://images.unsplash.com/photo-1504639725590-34d0984388bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=967&q=80","https://images.unsplash.com/photo-1499209974431-9dddcece7f88?ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1444703686981-a3abbc4d4fe3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80","https://images.unsplash.com/photo-1508690471604-cafd081190a1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=986&q=80","https://images.unsplash.com/photo-1519791883288-dc8bd696e667?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=80"]}},components:{agile:Z["a"]},mounted:function(){this.asNavFor1.push(this.$refs.thumbnails),this.asNavFor2.push(this.$refs.main)}},te=ee,ae=(a("025d"),Object(d["a"])(te,Y,K,!1,null,"ba859678",null)),ne=ae.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-expansion-panels",{staticStyle:{background:"transparent"},attrs:{multiple:""},model:{value:e.panel,callback:function(t){e.panel=t},expression:"panel"}},e._l(e.projects,(function(t,n){return a("v-expansion-panel",{key:n},[a("v-expansion-panel-header",{staticClass:"project_title"},[e._v(e._s(t.name))]),a("v-icon",{attrs:{slot:"actions",color:"primary"},slot:"actions"},[e._v("$vuetify.icons.expand")]),a("v-expansion-panel-content",[e._v(" "+e._s(t.description)+" ")])],1)})),1)},se=[],oe={name:"Projects",data:function(){return{panel:[],projects:[{name:"Mobile Arcade Game",description:"Implemented the back-end of this game using Unity3d and C#. The main tasks were Authentication using Google Play and Game Center, Database, and monetization plans using Admob and In-app purchases. It will be published on Android and IOS in the near future."},{name:"Property Manager",description:"Implemented a full-stack application as a CRUD service for properties using .NET Core, Angular 8, and Angular Material."},{name:"Home Automation & Security System",description:"Designed and built this project for an Internet-of-Things class using Raspberry Pi and Python. The main functionalities were face detection (using OpenCV) to show intruders, remote control from the phone using the LAMP stack, python's HTTP server on the product-end, LCD screen for display, RFID sensor for authentication, and a machine learning model for predicting plant watering according to various weather data from sensors (using KNN and SVM)."},{name:"3D Fighting Game",description:"Developed this project for a Game Programming class using Unity and C#. Some of the main features were an SQL database, game settings and audio, AI for the enemy, and the difficulties with the proper animations and graphics."},{name:"HTTP Proxy Server",description:"Built a fully functional multi-threaded HTTP web proxy server using C for a system programming class. The project was tested to act as a local proxy on the web browser. The product acted as a cache system that hugely improved the loading time of websites and simplified the communication with the server."},{name:"Security-related Projects",description:"Solved a group of interesting system programming projects that focus on finding security flaws in software like buffer overflow and Return-oriented programming (ROP) attacks mainly using Linux shells and GDB."},{name:"Implementing Tomasulo's Algorithm on a Pipelined Processor",description:"Implemented an instruction set architecture that uses pipelining and out-of-order execution through the dynamic scheduling algorithm of Tomasulo in C for a Computer Architecture class."},{name:"Night-life Platform",description:"Created a full-stack web platform to explore nightclubs, discover events and entertainers, and connect with other people using HTML5, CSS3, Bootstrap3, JQuery, and the LAMP stack."},{name:"Black Scholes Algorithm Optimisation",description:"Optimized this famous algorithm that is used as a model of price variation over time of financial instruments. Results were 7.5 times more efficient than the normal version. This project was done for a Parallel Programming and Multi-core course using C, OpenMP, OpenACC and CUDA"},{name:"Employee Management System",description:"Collaborated in the back-end development of a web and mobile solution that helps a hosting agency in Lebanon in managing employees and events. This project was done for a software engineering class using the MEAN stack."}]}},created:function(){for(var e=0;e<this.projects.length;e++)this.panel.push(e)}},re=oe,ce=(a("f11f"),a("cd55")),le=a("49e2"),de=a("c865"),pe=a("0393"),ue=Object(d["a"])(re,ie,se,!1,null,"15c85d5c",null),me=ue.exports;_()(ue,{VExpansionPanel:ce["a"],VExpansionPanelContent:le["a"],VExpansionPanelHeader:de["a"],VExpansionPanels:pe["a"],VIcon:V["a"]});var ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"skills"},e._l(e.skills,(function(t,i){return n("div",{key:i,staticClass:"category"},[n("h3",{staticClass:"category_title"},[e._v(e._s(t.name))]),e._l(t.skillset,(function(t,i){return n("v-chip",{key:i,staticClass:"skill_item",attrs:{pill:""}},[t.icon?n("v-avatar",{staticClass:"skill_icon",attrs:{left:""}},[n("v-img",{attrs:{src:a("1771")("./"+t.icon)}})],1):e._e(),e._v(" "+e._s(t.name)+" ")],1)}))],2)})),0)},fe=[],ge={name:"Skills",data:function(){return{skills:[{name:"Problem solving",skillset:[{name:"Object-oriented Programming",icon:""},{name:"Data Structures",icon:""},{name:"Algorithms",icon:""}]},{name:"Java Programming",skillset:[{name:"Java 8",icon:"java.svg"},{name:"Swing",icon:"swing.svg"},{name:"Maven",icon:"maven.svg"},{name:"JDBC",icon:""},{name:"JavaFX",icon:""}]},{name:"Back-end Programming",skillset:[{name:"Spring Boot",icon:"springboot.svg"},{name:"Spring Security",icon:"security.svg"},{name:"Hibernate",icon:"hibernate.svg"},{name:"NodeJS",icon:"nodejs.svg"},{name:"PHP 7",icon:"php.svg"},{name:"ASP.NET Core",icon:"dotnet.svg"}]},{name:"Front-end Programming",skillset:[{name:"HTML 5",icon:"html.svg"},{name:"CSS 3",icon:"css.svg"},{name:"Vue 3",icon:"vue.svg"},{name:"Vuetify",icon:"vuetify.svg"},{name:"Vuex",icon:"vuex.svg"},{name:"Electron JS",icon:"electron.svg"},{name:"Bootstrap",icon:"bootstrap.svg"},{name:"Material Design",icon:"material.svg"},{name:"Jquery",icon:"jquery.svg"},{name:"Angular 8",icon:"angular.svg"}]},{name:"Databases",skillset:[{name:"MySQL",icon:"mysql.svg"},{name:"MongoDB",icon:"mongo.svg"}]},{name:"Operating Systems",skillset:[{name:"Windows",icon:"windows.svg"},{name:"Ubuntu",icon:"ubuntu.svg"}]},{name:"Parallel Programming",skillset:[{name:"OpenMP",icon:"openmp.svg"},{name:"OpenACC",icon:"openacc.svg"},{name:"CUDA",icon:"cuda.svg"}]},{name:"Game Programming",skillset:[{name:"Unity 3D",icon:"unity.svg"},{name:"C#",icon:"csharp.svg"},{name:"Firebase",icon:"firebase.svg"},{name:"Analytics",icon:""},{name:"Monetization",icon:""}]},{name:"Internet of Things",skillset:[{name:"Raspberry Pi",icon:"raspbian.svg"}]},{name:"Machine Learning",skillset:[{name:"Scikit-Learn",icon:"scikit.svg"}]},{name:"Other Tools",skillset:[{name:"C",icon:"c.svg"},{name:"Python",icon:"python.svg"},{name:"Git",icon:"git.svg"},{name:"OpenCV",icon:"cv.svg"}]}]}}},he=ge,be=(a("6afa"),a("8212")),ye=a("cc20"),_e=a("adda"),xe=Object(d["a"])(he,ve,fe,!1,null,"2f26ff8f",null),Ce=xe.exports;_()(xe,{VAvatar:be["a"],VChip:ye["a"],VImg:_e["a"]});var we=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"community text-center"},[a("div",{staticClass:"community_activities"},e._l(e.list,(function(t,n){return a("div",{key:n,staticClass:"col-sm-4"},[a("v-card",{staticClass:"mx-auto card_item",attrs:{align:"center",justify:"center",elevation:20,height:"100%"}},[a("h1",{staticClass:"headline"},[e._v(e._s(t))])])],1)})),0)])},ke=[],je={name:"Community",data:function(){return{list:["ACM, Robotics, Book, and Music Clubs Member at LAU","Lebanese Red Cross - Youth Department","GC LAU MUN"]}}},Se=je,Pe=(a("c2d6"),Object(d["a"])(Se,we,ke,!1,null,"3e83e94a",null)),Te=Pe.exports;_()(Pe,{VCard:C["a"]});var Ve=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"education"},[e._l(e.list,(function(t,i){return n("v-card",{key:i,staticClass:"mx-auto",staticStyle:{border:"2px solid white"},attrs:{"max-width":"550",elevation:20}},[n("v-img",{staticClass:"education_image",attrs:{src:a("1771")("./"+t.image)}}),n("v-card-title",[n("h3",{staticClass:"word_break"},[n("b",[e._v(e._s(t.certificate))])]),n("h4",{staticClass:"word_break"},[e._v(e._s(t.university))]),n("h5",[e._v(e._s(t.date))])]),n("v-card-subtitle",[n("p",{staticClass:"education_description"},[e._v(" "+e._s(t.description)+" ")])])],1)})),n("br")],2)},Me=[],Oe={name:"Education",data:function(){return{list:[{certificate:"BSc. in Computer Science (With Honours)",university:"Lebanese American University (Byblos Campus)","date:":"SEP 2016 - MAY 2019",description:"Distinction List: Fall 2018 \n Honours List: Spring 2019",image:"lau.jpg"}]}}},Ae=Oe,De=(a("9ba6"),Object(d["a"])(Ae,Ve,Me,!1,null,"bf12fdee",null)),Ee=De.exports;_()(De,{VCard:C["a"],VCardSubtitle:w["a"],VCardTitle:w["c"],VImg:_e["a"]});var Fe={name:"App",components:{Loader:u,Intro:A,GoTop:E.a,Footer:G,Experience:X,Carousel:ne,Projects:me,Skills:Ce,Community:Te,Education:Ee},data:function(){return{loading:!1}},mounted:function(){var e=this;this.loading=!0,setTimeout((function(){e.loading=!1}),5e3)}},Be=Fe,Ie=(a("034f"),a("7496")),Le=a("8b9c"),Je=Object(d["a"])(Be,i,s,!1,null,null,null),Ne=Je.exports;_()(Je,{VApp:Ie["a"],VParallax:Le["a"]});var He=a("8c4f");n["a"].use(He["a"]);var Ge=[{path:"/",name:"Home",component:Ne}],Ue=new He["a"]({mode:"history",base:"/",routes:Ge}),qe=Ue,$e=a("f309");n["a"].use($e["a"]);var Re=new $e["a"]({}),ze=a("a45e"),Qe=a.n(ze);a("15f5");n["a"].use(Qe.a),n["a"].use(g.a),n["a"].config.productionTip=!1,new n["a"]({router:qe,vuetify:Re,render:function(e){return e(Ne)}}).$mount("#app")},"6afa":function(e,t,a){"use strict";var n=a("35bd"),i=a.n(n);i.a},"6c4c":function(e,t,a){e.exports=a.p+"img/mysql.1cd3acee.svg"},"6d4e":function(e,t,a){e.exports=a.p+"img/cv.3b29edcb.svg"},"6dff":function(e,t,a){e.exports=a.p+"img/vuetify.f65bb9f5.svg"},"6ede":function(e,t,a){},"70d5":function(e,t,a){"use strict";var n=a("8712"),i=a.n(n);i.a},8712:function(e,t,a){},8780:function(e,t,a){e.exports=a.p+"img/material.b39f2c87.svg"},"87f1":function(e,t,a){e.exports=a.p+"img/unity.42c56618.svg"},"8a23":function(e,t,a){},"8d2c":function(e,t,a){e.exports=a.p+"img/bootstrap.6ed9c1b6.svg"},"9ba6":function(e,t,a){"use strict";var n=a("b5e3"),i=a.n(n);i.a},"9c39":function(e,t,a){e.exports=a.p+"img/dotnet.f9b9ab06.svg"},a230:function(e,t,a){e.exports=a.p+"img/angular.c5fcd930.svg"},a376:function(e,t,a){e.exports=a.p+"img/html.c91e7344.svg"},aea7:function(e,t,a){e.exports=a.p+"img/git.49728f13.svg"},b219:function(e,t,a){e.exports=a.p+"img/java.3cfef2b3.svg"},b464:function(e,t,a){e.exports=a.p+"img/security.bcde868e.svg"},b5e3:function(e,t,a){},c082:function(e,t,a){e.exports=a.p+"img/lau.fca3d0f4.jpg"},c2d6:function(e,t,a){"use strict";var n=a("4c5c"),i=a.n(n);i.a},ca83:function(e,t,a){e.exports=a.p+"img/css.2d91fd8e.svg"},d148:function(e,t,a){e.exports=a.p+"img/windows.f7f1f42a.svg"},d2b4:function(e,t,a){e.exports=a.p+"img/csharp.907d41cb.svg"},d6b3:function(e,t,a){e.exports=a.p+"img/hibernate.f1d5af87.svg"},de5d:function(e,t,a){e.exports=a.p+"img/cuda.ba32a785.svg"},ded0:function(e,t,a){e.exports=a.p+"img/firebase.3218a506.svg"},e47b:function(e,t,a){e.exports=a.p+"img/ubuntu.2e2dc3d6.svg"},e9f5:function(e,t,a){"use strict";var n=a("560f"),i=a.n(n);i.a},f11f:function(e,t,a){"use strict";var n=a("fa82"),i=a.n(n);i.a},f233:function(e,t,a){e.exports=a.p+"img/leetcode.f0b3981f.png"},fa26:function(e,t,a){e.exports=a.p+"img/electron.3fe13050.svg"},fa82:function(e,t,a){},ffa3:function(e,t,a){e.exports=a.p+"img/c.b611e6ef.svg"}});
//# sourceMappingURL=app.7f271851.js.map