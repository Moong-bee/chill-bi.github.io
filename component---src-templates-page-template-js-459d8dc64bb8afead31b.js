(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{"/d1K":function(e,t,a){"use strict";a.d(t,"a",(function(){return j}));var n=a("q1tI"),i=a.n(n),l=a("Wbzz"),c=a("iSRb"),o=a.n(c),r=function(e){var t=e.author,a=e.isIndex;return i.a.createElement("div",{className:o.a.author},i.a.createElement(l.Link,{to:"/"},i.a.createElement("img",{src:Object(l.withPrefix)(t.photo),className:o.a.author__photo,width:"75",height:"75",alt:t.name})),!0===a?i.a.createElement("h1",{className:o.a.author__title},i.a.createElement(l.Link,{className:o.a["author__title-link"],to:"/"},t.name)):i.a.createElement("h2",{className:o.a.author__title},i.a.createElement(l.Link,{className:o.a["author__title-link"],to:"/"},t.name)),i.a.createElement("p",{className:o.a.author__subtitle},t.bio))},s=a("7Qib"),m=a("euHg"),u=a.n(m),_=function(e){var t=e.name,a=e.icon;return i.a.createElement("svg",{className:u.a.icon,viewBox:a.viewBox},i.a.createElement("title",null,t),i.a.createElement("path",{d:a.path}))},d=a("aU/I"),h=a.n(d),p=function(e){var t=e.contacts;return i.a.createElement("div",{className:h.a.contacts},i.a.createElement("ul",{className:h.a.contacts__list},Object.keys(t).map((function(e){return t[e]?i.a.createElement("li",{className:h.a["contacts__list-item"],key:e},i.a.createElement("a",{className:h.a["contacts__list-item-link"],href:Object(s.a)(e,t[e]),rel:"noopener noreferrer",target:"_blank"},i.a.createElement(_,{name:e,icon:Object(s.b)(e)}))):null}))))},b=a("Nrk+"),g=a.n(b),f=function(e){var t=e.copyright;return i.a.createElement("div",{className:g.a.copyright},t)},E=a("je8k"),k=a.n(E),v=function(e){var t=e.menu;return i.a.createElement("nav",{className:k.a.menu},i.a.createElement("ul",{className:k.a.menu__list},t.map((function(e){return i.a.createElement("li",{className:k.a["menu__list-item"],key:e.path},i.a.createElement(l.Link,{to:e.path,className:k.a["menu__list-item-link"],activeClassName:k.a["menu__list-item-link--active"]},e.label))}))))},y=a("SySy"),N=a.n(y),w=a("gGy4"),x=a("6ldB"),I=a.n(x),j=function(e){var t=e.isIndex,a=Object(w.b)(),l=a.author,c=a.copyright,o=a.menu;return Object(n.useEffect)((function(){try{window.adsbygoogle=window.adsbygoogle||[],window.adsbygoogle.push({})}catch(e){console.log(e)}}),[]),i.a.createElement("div",{className:N.a.sidebar},i.a.createElement("div",{className:N.a.sidebar__inner},i.a.createElement(r,{author:l,isIndex:t}),i.a.createElement(v,{menu:o}),i.a.createElement(p,{contacts:l.contacts}),i.a.createElement(f,{copyright:c}),i.a.createElement(I.a.Google,{key:Math.random(),client:"ca-pub-8178483925350112",slot:"1404903243",format:"auto",style:{display:"block"},responsive:"true"})))}},"8vKr":function(e,t,a){"use strict";a.r(t),a.d(t,"query",(function(){return s}));var n=a("q1tI"),i=a.n(n),l=a("Zttt"),c=a("/d1K"),o=a("RXmK"),r=a("gGy4"),s="2460881060";t.default=function(e){var t=e.data,a=Object(r.b)(),n=a.title,s=a.subtitle,m=t.markdownRemark.html,u=t.markdownRemark.frontmatter,_=u.title,d=u.description,h=u.socialImage,p=null!==d?d:s,b=void 0!==h?h.publicURL:void 0;return i.a.createElement(l.a,{title:_+" - "+n,description:p,socialImage:b},i.a.createElement(c.a,null),i.a.createElement(o.a,{title:_},i.a.createElement("div",{dangerouslySetInnerHTML:{__html:m}})))}},"Nrk+":function(e,t,a){e.exports={copyright:"Copyright-module--copyright--1YLES"}},RBgx:function(e,t,a){e.exports={page:"Page-module--page--V2155",page__inner:"Page-module--page__inner--3xzwp",page__title:"Page-module--page__title--t1zKX",page__body:"Page-module--page__body--1A7TB"}},RXmK:function(e,t,a){"use strict";a.d(t,"a",(function(){return o}));var n=a("q1tI"),i=a.n(n),l=a("RBgx"),c=a.n(l),o=function(e){var t=e.title,a=e.children,l=Object(n.useRef)();return Object(n.useEffect)((function(){l.current.scrollIntoView()})),i.a.createElement("div",{ref:l,className:c.a.page},i.a.createElement("div",{className:c.a.page__inner},t&&i.a.createElement("h1",{className:c.a.page__title},t),i.a.createElement("div",{className:c.a.page__body},a)))}},SySy:function(e,t,a){e.exports={sidebar:"Sidebar-module--sidebar--1zM7S",sidebar__inner:"Sidebar-module--sidebar__inner--2Tprz"}},"aU/I":function(e,t,a){e.exports={contacts:"Contacts-module--contacts--3fb7G",contacts__list:"Contacts-module--contacts__list--27zok","contacts__list-item":"Contacts-module--contacts__list-item--1Adud","contacts__list-item-link":"Contacts-module--contacts__list-item-link--2L60c"}},euHg:function(e,t,a){e.exports={icon:"Icon-module--icon--1T2h2"}},iSRb:function(e,t,a){e.exports={author__photo:"Author-module--author__photo--HnDWV",author__title:"Author-module--author__title--ZztQd","author__title-link":"Author-module--author__title-link--BY7f8",author__subtitle:"Author-module--author__subtitle--3hbMX"}},je8k:function(e,t,a){e.exports={menu:"Menu-module--menu--2aN3O",menu__list:"Menu-module--menu__list--1uKDu","menu__list-item":"Menu-module--menu__list-item--27cxj","menu__list-item-link":"Menu-module--menu__list-item-link--29Sd-","menu__list-item-link--active":"Menu-module--menu__list-item-link--active--2HzKy"}}}]);
//# sourceMappingURL=component---src-templates-page-template-js-459d8dc64bb8afead31b.js.map