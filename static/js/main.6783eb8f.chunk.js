(this.webpackJsonpportfolio=this.webpackJsonpportfolio||[]).push([[0],{2:function(e){e.exports=JSON.parse('{"weatherApp":{"title":"Weather App","github":"https://github.com/TJDRZ/weather-app","live":"https://tjdrz.github.io/weather-app/","details":{"title":"Weather App","tools":"HTML, CSS, JS, Webpack","description":["-Fetched and used an API in an async function, while using a try/catch","-Kept API and contructor code out of DOM manipulation and vice versa in a MVC fashion","-Made use of Webpack with standard entry/output and loaders in a config"],"usage":["-Type in city of choice; State and Country input fields are optional; click submit","-Displays city name, current weather status with correlating picture, low/current/high temps, humidity, wind speed and direction","-Radio buttons to change display between Fahrenheit and Celsius"]}},"memoryCard":{"title":"Memory Card Game","github":"https://github.com/TJDRZ/memory-card-game","live":"https://tjdrz.github.io/memory-card-game/","details":{"title":"Memory Card Game","tools":"HTML, CSS, JS, ReactJS","description":["-Created project using create-react-app","-High focus on reuseable components"],"usage":["-Click on the cards to increase the current score","-Clicking on the same card in the same game will reset the current score","-Highest score is set as the highest game total, 16 is max","-Special cards shown for win/loss"]}},"htmlForms":{"title":"HTML Forms","github":"https://github.com/TJDRZ/html-forms","live":"https://tjdrz.github.io/html-forms/","details":{"title":"HTML Forms","tools":"HTML, CSS, JS","description":["-Semantic HTML","-Overall closeness to look and feel of original form (layout, dynamic dropdown, etc)","-JavaScript custom form validation","-RegEx validation","-GET form method to send form data to another .html"],"usage":["-Input fields as named (custom validity if forms are filled, but not to standard","-Clicking in password input will expand the confirm password area","-Password rules turn green on true validity","-Submit form redirects to new page displaying form input data"]}},"shoppingCart":{"title":"Shopping Cart","github":"https://github.com/TJDRZ/shopping-cart","live":"https://tjdrz.github.io/shopping-cart/","details":{"title":"Shopping Cart","tools":"HTML, CSS, JS, ReactJS, React Router","description":["-Created project using create-react-app","-High focus on reuseable components","-Use of React hooks"],"usage":["-Nav links above to toggle between home and shop pages","-Add / subtract quantities of items","-Checkout button to reset total"]}},"todoList":{"title":"To-Do List","github":"https://github.com/TJDRZ/todo-list","live":"https://tjdrz.github.io/todo-list/","details":{"title":"To-Do List","tools":"HTML, CSS, JS, Webpack","description":["-Seperate modules to create a MVC type program with OOP principals","-Use of Webpack, Prettier, and ESLint configs"],"usage":["Projects:","-Create projects in the left list","-Click on the project title to look at the todos of project / set project as current project for todo creation","-DEL button to delete adjacent project","Todos:","-Todos created will appear right inside of the currently selected project","-X button to delete","-Click title to strike-through title / mark as completed","-High / Low priority button to toggle todo priority","-Description button for description alert"]}},"cvApplication":{"title":"CV Application","github":"https://github.com/TJDRZ/cv-application","live":"https://tjdrz.github.io/cv-application/","details":{"title":"CV Application","tools":"HTML, CSS, JS, ReactJS","description":["-Created project using create-react-app","-High focus on reuseable components","-Branches of both React functional component and React class component examples"],"usage":["The Input component can take the following props:","-Type=\'\'","--This will affect labeling","~","-Placeholder=\'\'","--This will affect the text input\'s placeholder","~","-Pattern=\'\'","--This will affect the form validation, such as an email pattern","~~~~","The Container component is used to create a container with an Add additional list items button and maps through them to create an unordered list:","The Containter component can take the following props:","-Header=\'\'","--This will create a header (h3) to define the list","~","-Type=\'\'","--This will affect the text of \'what\' is being added on the Add button","~","-Title=\'\'","--Takes a boolean value to determine if the centering/margin/font weight of the text/horizontal (True if you want the container header on the left as a grand header; False if you want the container header in the middle as a sub header)","~~~~","Rest of UI components (Header, School, Work) up for use/deletion if used as a template for things other than CV-Application","save.js created to hide all buttons and the h1 on page and window.print() to allow pdf saving of CV to computer"]}}}')},20:function(e,t,i){},21:function(e,t,i){},22:function(e,t,i){},23:function(e,t,i){},33:function(e,t,i){},34:function(e,t,i){},36:function(e,t,i){},37:function(e,t,i){"use strict";i.r(t);var a=i(1),s=i.n(a),c=i(13),o=i.n(c),n=(i(20),i(21),i(6)),l=i(3),r=(i(22),i(23),i(0));var h=function(){var e=Object(l.f)();return Object(r.jsx)("nav",{className:"Nav ".concat("/portfolio"===e.pathname?"home-nav":"project-nav"),children:Object(r.jsxs)("ul",{children:[Object(r.jsx)("li",{children:Object(r.jsx)(n.c,{to:"/portfolio",activeStyle:{fontWeight:"bold",backgroundColor:"rgba(204, 204, 204, 0.5)"},children:"Home"})}),Object(r.jsx)("li",{children:Object(r.jsx)(n.c,{to:"/projects",activeStyle:{fontWeight:"500",backgroundColor:"rgba(204, 204, 204, 1)"},children:"Projects"})})]})})},d=i.p+"static/media/github.83780314.svg",p=i.p+"static/media/linkedin.cfe4cd5b.svg";var m=function(){return Object(r.jsxs)("main",{className:"Home",children:[Object(r.jsx)(h,{}),Object(r.jsxs)("header",{className:"home-header",children:[Object(r.jsx)("h1",{className:"home-h1 blue-shadow",children:"Thomas Drzewiecki"}),Object(r.jsx)("p",{className:"home-p blue-shadow",children:"Front-End Web Developer from Baltimore, MD."})]}),Object(r.jsxs)("div",{className:"social",children:[Object(r.jsx)("a",{href:"https://github.com/TJDRZ",children:Object(r.jsx)("img",{className:"social-img",src:d,alt:"Github"})}),Object(r.jsx)("a",{href:"https://www.linkedin.com/in/thomas-drzewiecki-9839ab21b/",children:Object(r.jsx)("img",{className:"social-img",src:p,alt:"LinkedIn"})})]}),Object(r.jsx)("div",{className:"contact",children:Object(r.jsx)("a",{className:"contact-link",href:"mailto:tjdrzewiecki@gmail.com",children:"Contact Me"})})]})},j=(i(33),i(34),i.p+"static/media/play.f8e526cb.svg"),u=i.p+"static/media/block-menu.a03c57ac.svg";var b=function(e){var t=e.title,i=e.img,a=e.github,s=e.live,c=e.details;return Object(r.jsxs)("article",{className:"Project",children:[Object(r.jsx)("header",{children:Object(r.jsx)("h2",{children:t})}),Object(r.jsx)("div",{className:"screenshot-container",children:Object(r.jsx)("img",{className:"screenshot",src:i,alt:""})}),Object(r.jsx)("nav",{children:Object(r.jsxs)("ul",{className:"link-list",children:[Object(r.jsx)("li",{children:Object(r.jsxs)("a",{className:"project-link",href:a,children:[Object(r.jsx)("img",{className:"logo-link",src:d,alt:"Github"}),"Github Repo"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)("a",{className:"project-link",href:s,children:[Object(r.jsx)("img",{className:"logo-link",src:j,alt:"Live Preview"}),"Live Preview"]})}),Object(r.jsx)("li",{children:Object(r.jsxs)(n.b,{className:"project-link",to:{pathname:"/details",state:{details:c,img:i}},children:[Object(r.jsx)("img",{className:"logo-link",src:u,alt:"Details"}),"Details"]})})]})})]})},g=i(2),f=i.p+"static/media/weather-app.6cf29c06.png",x=i.p+"static/media/memory-card-game.b4a54a2c.png",O=i.p+"static/media/html-forms.dd246d77.png",v=i.p+"static/media/shopping-cart.4fc797de.png",w=i.p+"static/media/todo-list.210344d1.png",k=i.p+"static/media/cv-application.e46a842c.png";var C=function(){return Object(r.jsxs)("main",{className:"Projects",children:[Object(r.jsx)(h,{}),Object(r.jsx)("header",{children:Object(r.jsx)("h1",{children:"Projects"})}),Object(r.jsxs)("section",{className:"project-container",children:[Object(r.jsx)(b,{title:g.weatherApp.title,img:f,github:g.weatherApp.github,live:g.weatherApp.live,details:g.weatherApp.details}),Object(r.jsx)(b,{title:g.memoryCard.title,img:x,github:g.memoryCard.github,live:g.memoryCard.live,details:g.memoryCard.details}),Object(r.jsx)(b,{title:g.htmlForms.title,img:O,github:g.htmlForms.github,live:g.htmlForms.live,details:g.htmlForms.details}),Object(r.jsx)(b,{title:g.shoppingCart.title,img:v,github:g.shoppingCart.github,live:g.shoppingCart.live,details:g.shoppingCart.details}),Object(r.jsx)(b,{title:g.todoList.title,img:w,github:g.todoList.github,live:g.todoList.live,details:g.todoList.details}),Object(r.jsx)(b,{title:g.cvApplication.title,img:k,github:g.cvApplication.github,live:g.cvApplication.live,details:g.cvApplication.details})]})]})},N=i(12),y=i.n(N);i(36);var T=function(){var e=Object(l.f)(),t=e.state.details,i=t.title,a=t.tools,s=t.description,c=t.usage,o=e.state.img;return Object(r.jsxs)("main",{className:"Details",children:[Object(r.jsxs)("header",{className:"details-header",children:[Object(r.jsx)(n.c,{className:"details-link",to:"/projects",children:"Back to Projects"}),Object(r.jsx)("h1",{className:"details-h1",children:i}),Object(r.jsxs)("div",{className:"tools",children:[Object(r.jsx)("h2",{className:"details-h2",children:"Languages / Tools / Frameworks:"}),Object(r.jsx)("p",{children:a})]})]}),Object(r.jsxs)("section",{className:"details-container",children:[Object(r.jsx)("div",{className:"details-img-container",children:Object(r.jsx)("img",{className:"details-img",src:o,alt:"hi"})}),Object(r.jsxs)("article",{className:"description",children:[Object(r.jsx)("h2",{className:"details-h2",children:"Main Objectives:"}),Object(r.jsx)("ul",{children:s.map((function(e){return Object(r.jsx)("li",{children:e},y()())}))})]}),Object(r.jsxs)("article",{className:"usage",children:[Object(r.jsx)("h2",{className:"details-h2",children:"Usage:"}),Object(r.jsx)("ul",{children:c.map((function(e){return Object(r.jsx)("li",{children:e},y()())}))})]})]})]})};var S=function(){return Object(r.jsx)(n.a,{children:Object(r.jsxs)(l.c,{children:[Object(r.jsx)(l.a,{exact:!0,path:"/portfolio",component:m}),Object(r.jsx)(l.a,{exact:!0,path:"/projects",component:C}),Object(r.jsx)(l.a,{exact:!0,path:"/details",component:T})]})})};o.a.render(Object(r.jsx)(s.a.StrictMode,{children:Object(r.jsx)(S,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.6783eb8f.chunk.js.map