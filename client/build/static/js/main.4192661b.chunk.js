(window["webpackJsonpreact-portfolio"]=window["webpackJsonpreact-portfolio"]||[]).push([[0],{24:function(e){e.exports=JSON.parse('[{"id":1,"project1":"DANI: A Lesson In MERN","deployLink1":"http://app-dani.herokuapp.com/","imageLocation1":"/img/dani_ss.png","githubLink1":"https://github.com/saronnhong/dani","project2":"Clicky Game: A Lesson in ReactJS","deployLink2":"https://saronnhong.github.io/clicky-game/","imageLocation2":"/img/clicky_game.png","githubLink2":"https://github.com/saronnhong/clicky-game"},{"id":2,"project1":"Mongo Scrapper: A Lesson in Mongoose & Cheerio","deployLink1":"https://mongo-scrapper-719.herokuapp.com","imageLocation1":"/img/monogoscraper.png","githubLink1":"https://github.com/saronnhong/mongo-scraper","project2":"Project 2: Wat2Watch","deployLink2":"https://movie-generator.herokuapp.com/","imageLocation2":"/img/wat2watch.png","githubLink2":"https://github.com/vinirg22/movie_gen"},{"id":3,"project1":"Eat-Da-Burger: A Lesson In MVC & Handlebars","deployLink1":"https://eat-da-burger-sn.herokuapp.com/","imageLocation1":"/img/eatdaburger_ss.png","githubLink1":"https://github.com/saronnhong/burger","project2":"Friend Finder: A Lesson in Express","deployLink2":"https://friend-finder-86.herokuapp.com/","imageLocation2":"/img/friendfinder.png","githubLink2":"https://github.com/saronnhong/friend-finder"},{"id":4,"project1":"BAmazon: A Lesson in MySQL","deployLink1":"# ","imageLocation1":"/img/bamazonManager_ss.png","githubLink1":"https://github.com/saronnhong/bamazon","project2":"Constructor Word Guess: A Lesson In Constructors","deployLink2":"# ","imageLocation2":"/img/word-guess-00.png","githubLink2":"https://github.com/saronnhong/Constructor-Word-Guess"},{"id":5,"project1":"LIRI Node App: A Lesson in Node JS","deployLink1":"# ","imageLocation1":"/img/Spotify-This-Song.png","githubLink1":"https://github.com/saronnhong/liri-node-app","project2":"ChowFeed: Group Project #1 ","deployLink2":"https://saronnhong.github.io/ChowFeed/","imageLocation2":"/img/chowfeed.png","githubLink2":"https://github.com/saronnhong/ChowFeed"}]')},25:function(e,a,t){e.exports=t(40)},30:function(e,a,t){},31:function(e,a,t){},32:function(e,a,t){},38:function(e,a,t){},39:function(e,a,t){},40:function(e,a,t){"use strict";t.r(a);var n=t(0),o=t.n(n),r=t(20),c=t.n(r),i=t(15),l=t(5),s=(t(30),t(7)),m=t(8),d=t(10),p=t(9),u=t(11),g=t(21);t(31);function h(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter(function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable})),t.push.apply(t,n)}return t}function v(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?h(t,!0).forEach(function(a){Object(g.a)(e,a,t[a])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(t).forEach(function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))})}return e}var b=function(e){function a(){var e,t;Object(s.a)(this,a);for(var n=arguments.length,o=new Array(n),r=0;r<n;r++)o[r]=arguments[r];return(t=Object(d.a)(this,(e=Object(p.a)(a)).call.apply(e,[this].concat(o)))).state={email:{recipient:"Micaiah20x6@gmail.com",sender:"saronnhong@gmail.com",subject:"",text:""}},t}return Object(u.a)(a,e),Object(m.a)(a,[{key:"render",value:function(){var e=this,a=this.state.email,t={margin:10};return o.a.createElement("div",{className:"contactForm"},o.a.createElement("div",{style:{marginTop:10}},o.a.createElement("h2",null," Send Email "),o.a.createElement("label",null," Recipient "),o.a.createElement("br",null),o.a.createElement("input",{value:a.recipient,onChange:function(t){return e.setState({email:v({},a,{recipient:t.target.value})})}}),o.a.createElement("div",{style:t}),o.a.createElement("label",null," Sender "),o.a.createElement("br",null),o.a.createElement("input",{value:a.sender,onChange:function(t){return e.setState({email:v({},a,{sender:t.target.value})})}}),o.a.createElement("div",{style:t}),o.a.createElement("label",null," Subject "),o.a.createElement("br",null),o.a.createElement("input",{value:a.subject,onChange:function(t){return e.setState({email:v({},a,{subject:t.target.value})})}}),o.a.createElement("div",{style:t}),o.a.createElement("label",null," Message "),o.a.createElement("br",null),o.a.createElement("textarea",{rows:3,value:a.text,style:{borderRadius:4},onChange:function(t){return e.setState({email:v({},a,{text:t.target.value})})}}),o.a.createElement("div",{style:t}),o.a.createElement("button",{onClick:function(){alert("hello")}}," Send Email ")))}}]),a}(n.Component),E=(t(32),function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement("div",{className:"main"},o.a.createElement("a",{id:"home"}),o.a.createElement("div",{className:"homeScreen"},o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12 imgRow"})),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"nameText"},"Full Stack Web Developer"))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("div",{className:"introText"},"HTML | CSS | JavaScript | NodeJS | Express | MySQL | MongoDB | ReactJS"))),o.a.createElement("div",{className:"emptyRow"}))),o.a.createElement("div",{className:"aboutSection"},o.a.createElement("div",{className:"container",id:"aboutMe"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutMeTitle"},"About Me")),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"aboutMeInfo"},o.a.createElement("p",null,"I am a Full Stack Web Developer with strong skills in HTML, CSS, Javascript, NodeJS, Express, MongoDB, and React. I\u2019m passionate about learning new things and find great satisfaction in solving complex problems. "),o.a.createElement("p",null,"My previous career as a Software Test Engineer allowed me to understand the hard work it takes to put out quality software and the importance of identifying bugs in the early stages of software development. Applying this unique perspective and diverse skills to Web Development has helped me improve the quality of my applications and save time in the debugging phase of development.")))),o.a.createElement("div",{className:"col-md-6 circular"},o.a.createElement("img",{src:"/img/saron.jpg"}))),o.a.createElement("div",{className:"container"},o.a.createElement("div",{className:"row",id:"contact"},o.a.createElement("div",{className:"col-md-6"},o.a.createElement("div",{className:"contactMeTitle"},"Contact Me "))),o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"contactMeInfo"},o.a.createElement("h6",null,"Email: saronnhong@gmail.com"),o.a.createElement("h6",null,"Phone: (209) 598-4517"),o.a.createElement("a",{className:"contactLinks",href:"www.linkedin.com/in/saronnhong"},o.a.createElement("h6",null,"LinkedIn")),o.a.createElement("a",{className:"contactLinks",href:"https://github.com/saronnhong"},o.a.createElement("h6",null,"Github"))),o.a.createElement(b,null))))))}}]),a}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var f=t(13);t(38);var N=function(e){return o.a.createElement("div",{className:"navTop"},o.a.createElement("nav",{className:"navbar navbar-dark bg-dark fixed-top navbar-expand-sm",id:"nav1"},o.a.createElement(f.HashLink,{smooth:!0,to:"/react-portfolio/#home"},o.a.createElement("div",{className:"navbar-brand"},o.a.createElement("i",{className:"far fa-address-card"})," Saron Nhong")),o.a.createElement("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},o.a.createElement("span",{class:"navbar-toggler-icon"})),o.a.createElement("div",{class:"collapse navbar-collapse",id:"navbarNav"},o.a.createElement("ul",{class:"navbar-nav"},o.a.createElement("li",{class:"nav-item"},o.a.createElement(f.HashLink,{smooth:!0,to:"/react-portfolio/#aboutMe"},o.a.createElement("div",{className:"navMenu",id:"navAbout","data-toggle":"collapse","data-target":".navbar-collapse.show"},"About"))),o.a.createElement("li",{class:"nav-item"},o.a.createElement(f.HashLink,{smooth:!0,to:"/react-portfolio/portfolio"},o.a.createElement("div",{className:"navMenu",href:"#portSec",id:"navPort","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Portfolio"))),o.a.createElement("li",{class:"nav-item"},o.a.createElement(f.HashLink,{smooth:!0,to:"/react-portfolio/#contact"},o.a.createElement("div",{className:"navMenu",id:"navContact","data-toggle":"collapse","data-target":".navbar-collapse.show"},"Contact")))))))},w=t(24),k=(t(39),function(e){function a(){return Object(s.a)(this,a),Object(d.a)(this,Object(p.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(m.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return o.a.createElement("div",{className:"portMain"},o.a.createElement("div",{className:"container portContainer"},o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-12"},o.a.createElement("h1",{id:"portfolioTitle"},"My Portfolio"))),w.map(function(e){return o.a.createElement("div",{className:"row"},o.a.createElement("div",{className:"col-md-6 cardRow"},o.a.createElement("div",{className:"card cardPort"},o.a.createElement("a",{href:e.deployLink1},o.a.createElement("img",{width:"100%",src:""+e.imageLocation1,className:"card-img-top",alt:"..."})),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-text"},e.project1,o.a.createElement("a",{href:e.githubLink1},o.a.createElement("i",{className:"fab fa-github githubFA"})))))),o.a.createElement("div",{className:"col-md-6 cardRow"},o.a.createElement("div",{className:"card cardPort"},o.a.createElement("a",{href:e.deployLink2},o.a.createElement("img",{width:"100%",src:""+e.imageLocation2,className:"card-img-top",alt:"..."})),o.a.createElement("div",{className:"card-body"},o.a.createElement("div",{className:"card-text"},e.project2,o.a.createElement("a",{href:e.githubLink2},o.a.createElement("i",{className:"fab fa-github githubFA"})))))))})))}}]),a}(n.Component));c.a.render(o.a.createElement(i.BrowserRouter,null,o.a.createElement("div",null,o.a.createElement(N,null),o.a.createElement(l.g,null,o.a.createElement(l.d,{exact:!0,path:"/",component:E}),o.a.createElement(l.d,{exact:!0,path:"/react-portfolio",component:E}),o.a.createElement(l.d,{exact:!0,path:"/react-portfolio/portfolio",component:k}),o.a.createElement(l.d,{component:E})))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[25,1,2]]]);
//# sourceMappingURL=main.4192661b.chunk.js.map