(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{J4bc:function(e,t,n){"use strict";n.r(t),n.d(t,"query",(function(){return D}));var a=n("q1tI"),o=n.n(a),r=n("Zttt"),s=n("Wbzz"),i=n("7Qib"),l=n("d+ly"),u=n.n(l),c=n("gGy4"),m=function(){var e=Object(c.b)().author;return o.a.createElement("div",{className:u.a.author},o.a.createElement("p",{className:u.a.author__bio},e.bio,o.a.createElement("a",{className:u.a["author__bio-twitter"],href:Object(i.a)("github",e.contacts.github),rel:"noopener noreferrer",target:"_blank"},o.a.createElement("strong",null,e.name)," on Github")))},d=n("RPjP"),f=n.n(d),p=function(e){var t=e.postTitle,n=e.postSlug,a=Object(c.b)(),r=a.url,s=a.disqusShortname;return s?o.a.createElement(f.a,{shortname:s,identifier:t,title:t,url:r+n}):null},_=n("Mvws"),g=n.n(_),b=n("6ldB"),h=n.n(b),y=function(e){var t=e.body,n=e.title;return o.a.createElement("div",{className:g.a.content},o.a.createElement("h1",{className:g.a.content__title},n),o.a.createElement(h.a.Google,{key:Math.random(),client:"ca-pub-8178483925350112",slot:"9831022320",style:{display:"block"},format:"auto",responsive:"true",className:g.a.content__adsense}),o.a.createElement("div",{className:g.a.content__body,dangerouslySetInnerHTML:{__html:t}}),o.a.createElement(h.a.Google,{key:Math.random(),client:"ca-pub-8178483925350112",slot:"4028849540",format:"auto",style:{display:"block",textAlign:"center"},responsive:"true"}),o.a.createElement(h.a.Google,{client:"ca-pub-8178483925350112",slot:"3457185660",format:"auto",style:{display:"block",textAlign:"center"},responsive:"true"}))},v=n("wd/R"),E=n.n(v),w=n("myfg"),k=n.n(w),N=function(e){var t=e.date;return o.a.createElement("div",{className:k.a.meta},o.a.createElement("p",{className:k.a.meta__date},"Published ",E()(t).format("D MMM YYYY")))},O=n("WXWR"),j=n.n(O),P=function(e){var t=e.tags,n=e.tagSlugs;return o.a.createElement("div",{className:j.a.tags},o.a.createElement("ul",{className:j.a.tags__list},n&&n.map((function(e,n){return o.a.createElement("li",{className:j.a["tags__list-item"],key:t[n]},o.a.createElement(s.Link,{to:e,className:j.a["tags__list-item-link"]},t[n]))}))))},q=n("gt/k"),S=n.n(q),T=function(e){var t=e.post,n=t.html,a=t.fields,r=a.tagSlugs,i=a.slug,l=t.frontmatter,u=l.tags,c=l.title,d=l.date;return o.a.createElement("div",{className:S.a.post},o.a.createElement(s.Link,{className:S.a["post__home-button"],to:"/"},"All Articles"),o.a.createElement("div",{className:S.a.post__content},o.a.createElement(y,{body:n,title:c})),o.a.createElement("div",{className:S.a.post__footer},o.a.createElement(N,{date:d}),u&&r&&o.a.createElement(P,{tags:u,tagSlugs:r}),o.a.createElement(m,null)),o.a.createElement("div",{className:S.a.post__comments},o.a.createElement(p,{postSlug:i,postTitle:t.frontmatter.title})))},D="1848161170";t.default=function(e){var t=e.data,n=Object(c.b)(),a=n.title,s=n.subtitle,i=t.markdownRemark.frontmatter,l=i.title,u=i.description,m=i.socialImage,d=null!==u?u:s,f=void 0!==m?m.publicURL:void 0;return o.a.createElement(r.a,{title:l+" - "+a,description:d,socialImage:f},o.a.createElement(T,{post:t.markdownRemark}))}},Mvws:function(e,t,n){e.exports={content:"Content-module--content--1tfQQ",content__title:"Content-module--content__title--1qFLI",content__adsense:"Content-module--content__adsense--2etgT",content__body:"Content-module--content__body--2bfha"}},RPjP:function(e,t,n){"use strict";e.exports=n("SLms")},SLms:function(e,t,n){"use strict";n("E9XD"),Object.defineProperty(t,"__esModule",{value:!0});var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},o=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),r=i(n("q1tI")),s=i(n("17x9"));function i(e){return e&&e.__esModule?e:{default:e}}function l(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function u(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var c=["shortname","identifier","title","url","category_id","onNewComment","language"],m=!1;function d(e,t){var n=t.onNewComment,a=t.language,o=function(e,t){var n={};for(var a in e)t.indexOf(a)>=0||Object.prototype.hasOwnProperty.call(e,a)&&(n[a]=e[a]);return n}(t,["onNewComment","language"]);for(var r in o)e.page[r]=o[r];e.language=a,n&&(e.callbacks={onNewComment:[n]})}var f=function(e){function t(){return l(this,t),u(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),o(t,[{key:"componentDidMount",value:function(){this.loadDisqus()}},{key:"componentDidUpdate",value:function(){this.loadDisqus()}},{key:"shouldComponentUpdate",value:function(e,t){return e.identifier!==this.props.identifier}},{key:"render",value:function(){var e=this,t=Object.keys(this.props).reduce((function(t,n){return c.some((function(e){return e===n}))?t:a({},t,function(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}({},n,e.props[n]))}),{});return r.default.createElement("div",t,r.default.createElement("div",{id:"disqus_thread"}))}},{key:"addDisqusScript",value:function(){if(!m){var e=this.disqus=document.createElement("script"),t=document.getElementsByTagName("head")[0]||document.getElementsByTagName("body")[0];e.async=!0,e.type="text/javascript",e.src="//"+this.props.shortname+".disqus.com/embed.js",t.appendChild(e),m=!0}}},{key:"loadDisqus",value:function(){var e=this,t={};c.forEach((function(n){"shortname"!==n&&e.props[n]&&(t[n]=e.props[n])})),"undefined"!=typeof DISQUS?DISQUS.reset({reload:!0,config:function(){d(this,t),this.page.url=this.page.url.replace(/#/,"")+"#!newthread"}}):(window.disqus_config=function(){d(this,t)},this.addDisqusScript())}}]),t}(r.default.Component);f.displayName="DisqusThread",f.propTypes={id:s.default.string,shortname:s.default.string.isRequired,identifier:s.default.string,title:s.default.string,url:s.default.string,category_id:s.default.string,onNewComment:s.default.func,language:s.default.string},f.defaultProps={url:"undefined"==typeof window?null:window.location.href},t.default=f},WXWR:function(e,t,n){e.exports={tags:"Tags-module--tags--1oNz4",tags__list:"Tags-module--tags__list--2UTD-","tags__list-item":"Tags-module--tags__list-item--b7tap","tags__list-item-link":"Tags-module--tags__list-item-link--1hQL0"}},"d+ly":function(e,t,n){e.exports={author:"Author-module--author--2kf8a","author__bio-twitter":"Author-module--author__bio-twitter--MufFK"}},"gt/k":function(e,t,n){e.exports={post__footer:"Post-module--post__footer--1BvmJ",post__comments:"Post-module--post__comments--2T8dL",post__adsense:"Post-module--post__adsense--gscF4","post__home-button":"Post-module--post__home-button--3zx_9"}},myfg:function(e,t,n){e.exports={meta__date:"Meta-module--meta__date--3FNDv"}}}]);
//# sourceMappingURL=component---src-templates-post-template-js-ebd6f3ab98dc3b799667.js.map