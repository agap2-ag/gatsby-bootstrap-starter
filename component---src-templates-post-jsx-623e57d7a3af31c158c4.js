(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{163:function(t,e,a){"use strict";a.r(e);var n=a(8),r=a.n(n),i=a(0),o=a.n(i),u=a(169),c=a.n(u),s=a(57),M=a(227),l=a(180),L=a(308),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.config.userTwitter,e=this.props.expanded;return o.a.createElement(L.Follow,{username:t,options:{count:!!e||"none"}})},e}(i.Component),j=a(38),m=a.n(j),p=a(391),N=a.n(p),y=a(211),T=a.n(y),I=a(165),E=a.n(I),A=function(t){function e(e){var a;return(a=t.call(this,e)||this).state={toasts:[]},a.notifyAboutComment=a.notifyAboutComment.bind(m()(a)),a.onSnackbarDismiss=a.onSnackbarDismiss.bind(m()(a)),a}r()(e,t);var a=e.prototype;return a.onSnackbarDismiss=function(){var t=this.state.toasts.slice(1);this.setState({toasts:t})},a.notifyAboutComment=function(){var t=this.state.toasts.slice();t.push({text:"New comment available!"}),this.setState({toasts:t})},a.render=function(){var t=this.props.postNode;if(!E.a.disqusShortname)return null;var e=t.frontmatter,a=T()(E.a.siteUrl,E.a.pathPrefix,t.fields.slug);return o.a.createElement(N.a,{shortname:E.a.disqusShortname,identifier:e.title,title:e.title,url:a,category_id:e.category_id,onNewComment:this.notifyAboutComment})},e}(i.Component),C=a(393),D=a.n(C),d=a(479),S=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.tags;return o.a.createElement("div",{className:"post-tag-container"},t&&t.map(function(t){return o.a.createElement(d.a,{variant:"outline-secondary",key:t,href:"/tags/"+D()(t),title:t},t)}))},e}(i.Component),f=a(463),x=a(464),h=a(465),z=a(466),O=a(467),b=a(468),k=a(469),Y=a(470),v=a(471),w=a(472),U=a(473),Q=a(474),P=a(475),B=a(476),G=a(477),J=a(478),R=(a(406),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props,e=t.postNode,a=t.postPath,n=t.mobile,r=e.frontmatter,i=T()(E.a.siteUrl,E.a.pathPrefix,a),u=n?36:48,c=function(t){return o.a.createElement("div",{className:"share-count"},function(t){return t>0?t:""}(t))};return o.a.createElement("div",{className:"social-links"},o.a.createElement(f.a,{url:i,title:r.title},o.a.createElement(x.a,{round:!0,size:u}),o.a.createElement(h.a,{url:i},function(t){return c(t)})),o.a.createElement(z.a,{url:i,title:r.title},o.a.createElement(O.a,{round:!0,size:u})),o.a.createElement(b.a,{url:i},o.a.createElement(k.a,{round:!0,size:u}),o.a.createElement(Y.a,{url:i},function(t){return c(t)})),o.a.createElement(v.a,{url:i,quote:e.excerpt},o.a.createElement(w.a,{round:!0,size:u}),o.a.createElement(U.a,{url:i},function(t){return c(t)})),o.a.createElement(Q.a,{url:i,title:r.title,description:e.excerpt},o.a.createElement(P.a,{round:!0,size:u}),o.a.createElement(B.a,{url:i},function(t){return c(t)})),o.a.createElement(G.a,{url:i},o.a.createElement(J.a,{round:!0,size:u})))},e}(i.Component)),F=a(253);a(458),a(459);a.d(e,"default",function(){return _}),a.d(e,"pageQuery",function(){return H});var _=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.pageContext.slug,e=this.props.data.markdownRemark,a=e.frontmatter;return a.id||(a.id=t),a.category_id||(a.category_id=E.a.postDefaultCategoryID),o.a.createElement(l.a,null,o.a.createElement(c.a,null,o.a.createElement("title",null,a.title+" | "+E.a.siteTitle)),o.a.createElement(F.a,{postPath:t,postNode:e,postSEO:!0}),o.a.createElement(M.a,null,o.a.createElement(s.Link,{to:"/"},"Home"),o.a.createElement("hr",null),o.a.createElement("h1",null,a.title),o.a.createElement("div",{dangerouslySetInnerHTML:{__html:e.html}}),o.a.createElement("div",{className:"post-meta"},o.a.createElement(S,{tags:a.tags}),o.a.createElement(R,{postPath:t,postNode:e})),o.a.createElement(g,{config:E.a}),o.a.createElement(A,{postNode:e})))},e}(o.a.Component),H="3288223027"},165:function(t,e,a){a(37);var n={siteTitle:"Gatsby Bootstrap Starter",siteTitleShort:"Generic",siteTitleAlt:"GatsbyJS Bootstrap Starter",siteLogo:"/logos/logo-1024.png",siteUrl:"https://agap2-ag.github.io",pathPrefix:"/gatsby-bootstrap-starter",siteDescription:"Generic content website based on bootstrap.",siteRss:"rss.xml",siteFBAppID:"1234567890123456",googleAnalyticsID:"UA-12345678-9",disqusShortname:"https-vagr9k-github-io-gatsby-advanced-starter",postDefaultCategoryID:"Tech",dateFromFormat:"YYYY-MM-DD",dateFormat:"YYYY-MM-DD",userName:"user",userEmail:"user@example.com",userTwitter:"",userLocation:"Somewhereland",userAvatar:"https://api.adorable.io/avatars/150/test.png",userDescription:"Generic content.",userLinks:[{label:"GitHub",url:"https://github.com/agap2-ag/gatsby-bootstrap-starter",iconClassName:"github",iconBrand:1},{label:"Twitter",url:"",iconClassName:"twitter",iconBrand:1},{label:"Email",url:"user@example.com",iconClassName:"envelope",iconBrand:0}],copyright:"Copyright © 2019. User",themeColor:"#c62828",backgroundColor:"#e0e0e0"};"/"===n.pathPrefix?n.pathPrefix="":n.pathPrefix="/"+n.pathPrefix.replace(/^\/|\/$/g,""),"/"===n.siteUrl.substr(-1)&&(n.siteUrl=n.siteUrl.slice(0,-1)),n.siteRss&&"/"!==n.siteRss[0]&&(n.siteRss="/"+n.siteRss),t.exports=n},173:function(t,e,a){},174:function(t,e,a){},175:function(t,e){t.exports="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA4NDEuOSA1OTUuMyI+CiAgICA8ZyBmaWxsPSIjNjFEQUZCIj4KICAgICAgICA8cGF0aCBkPSJNNjY2LjMgMjk2LjVjMC0zMi41LTQwLjctNjMuMy0xMDMuMS04Mi40IDE0LjQtNjMuNiA4LTExNC4yLTIwLjItMTMwLjQtNi41LTMuOC0xNC4xLTUuNi0yMi40LTUuNnYyMi4zYzQuNiAwIDguMy45IDExLjQgMi42IDEzLjYgNy44IDE5LjUgMzcuNSAxNC45IDc1LjctMS4xIDkuNC0yLjkgMTkuMy01LjEgMjkuNC0xOS42LTQuOC00MS04LjUtNjMuNS0xMC45LTEzLjUtMTguNS0yNy41LTM1LjMtNDEuNi01MCAzMi42LTMwLjMgNjMuMi00Ni45IDg0LTQ2LjlWNzhjLTI3LjUgMC02My41IDE5LjYtOTkuOSA1My42LTM2LjQtMzMuOC03Mi40LTUzLjItOTkuOS01My4ydjIyLjNjMjAuNyAwIDUxLjQgMTYuNSA4NCA0Ni42LTE0IDE0LjctMjggMzEuNC00MS4zIDQ5LjktMjIuNiAyLjQtNDQgNi4xLTYzLjYgMTEtMi4zLTEwLTQtMTkuNy01LjItMjktNC43LTM4LjIgMS4xLTY3LjkgMTQuNi03NS44IDMtMS44IDYuOS0yLjYgMTEuNS0yLjZWNzguNWMtOC40IDAtMTYgMS44LTIyLjYgNS42LTI4LjEgMTYuMi0zNC40IDY2LjctMTkuOSAxMzAuMS02Mi4yIDE5LjItMTAyLjcgNDkuOS0xMDIuNyA4Mi4zIDAgMzIuNSA0MC43IDYzLjMgMTAzLjEgODIuNC0xNC40IDYzLjYtOCAxMTQuMiAyMC4yIDEzMC40IDYuNSAzLjggMTQuMSA1LjYgMjIuNSA1LjYgMjcuNSAwIDYzLjUtMTkuNiA5OS45LTUzLjYgMzYuNCAzMy44IDcyLjQgNTMuMiA5OS45IDUzLjIgOC40IDAgMTYtMS44IDIyLjYtNS42IDI4LjEtMTYuMiAzNC40LTY2LjcgMTkuOS0xMzAuMSA2Mi0xOS4xIDEwMi41LTQ5LjkgMTAyLjUtODIuM3ptLTEzMC4yLTY2LjdjLTMuNyAxMi45LTguMyAyNi4yLTEzLjUgMzkuNS00LjEtOC04LjQtMTYtMTMuMS0yNC00LjYtOC05LjUtMTUuOC0xNC40LTIzLjQgMTQuMiAyLjEgMjcuOSA0LjcgNDEgNy45em0tNDUuOCAxMDYuNWMtNy44IDEzLjUtMTUuOCAyNi4zLTI0LjEgMzguMi0xNC45IDEuMy0zMCAyLTQ1LjIgMi0xNS4xIDAtMzAuMi0uNy00NS0xLjktOC4zLTExLjktMTYuNC0yNC42LTI0LjItMzgtNy42LTEzLjEtMTQuNS0yNi40LTIwLjgtMzkuOCA2LjItMTMuNCAxMy4yLTI2LjggMjAuNy0zOS45IDcuOC0xMy41IDE1LjgtMjYuMyAyNC4xLTM4LjIgMTQuOS0xLjMgMzAtMiA0NS4yLTIgMTUuMSAwIDMwLjIuNyA0NSAxLjkgOC4zIDExLjkgMTYuNCAyNC42IDI0LjIgMzggNy42IDEzLjEgMTQuNSAyNi40IDIwLjggMzkuOC02LjMgMTMuNC0xMy4yIDI2LjgtMjAuNyAzOS45em0zMi4zLTEzYzUuNCAxMy40IDEwIDI2LjggMTMuOCAzOS44LTEzLjEgMy4yLTI2LjkgNS45LTQxLjIgOCA0LjktNy43IDkuOC0xNS42IDE0LjQtMjMuNyA0LjYtOCA4LjktMTYuMSAxMy0yNC4xek00MjEuMiA0MzBjLTkuMy05LjYtMTguNi0yMC4zLTI3LjgtMzIgOSAuNCAxOC4yLjcgMjcuNS43IDkuNCAwIDE4LjctLjIgMjcuOC0uNy05IDExLjctMTguMyAyMi40LTI3LjUgMzJ6bS03NC40LTU4LjljLTE0LjItMi4xLTI3LjktNC43LTQxLTcuOSAzLjctMTIuOSA4LjMtMjYuMiAxMy41LTM5LjUgNC4xIDggOC40IDE2IDEzLjEgMjQgNC43IDggOS41IDE1LjggMTQuNCAyMy40ek00MjAuNyAxNjNjOS4zIDkuNiAxOC42IDIwLjMgMjcuOCAzMi05LS40LTE4LjItLjctMjcuNS0uNy05LjQgMC0xOC43LjItMjcuOC43IDktMTEuNyAxOC4zLTIyLjQgMjcuNS0zMnptLTc0IDU4LjljLTQuOSA3LjctOS44IDE1LjYtMTQuNCAyMy43LTQuNiA4LTguOSAxNi0xMyAyNC01LjQtMTMuNC0xMC0yNi44LTEzLjgtMzkuOCAxMy4xLTMuMSAyNi45LTUuOCA0MS4yLTcuOXptLTkwLjUgMTI1LjJjLTM1LjQtMTUuMS01OC4zLTM0LjktNTguMy01MC42IDAtMTUuNyAyMi45LTM1LjYgNTguMy01MC42IDguNi0zLjcgMTgtNyAyNy43LTEwLjEgNS43IDE5LjYgMTMuMiA0MCAyMi41IDYwLjktOS4yIDIwLjgtMTYuNiA0MS4xLTIyLjIgNjAuNi05LjktMy4xLTE5LjMtNi41LTI4LTEwLjJ6TTMxMCA0OTBjLTEzLjYtNy44LTE5LjUtMzcuNS0xNC45LTc1LjcgMS4xLTkuNCAyLjktMTkuMyA1LjEtMjkuNCAxOS42IDQuOCA0MSA4LjUgNjMuNSAxMC45IDEzLjUgMTguNSAyNy41IDM1LjMgNDEuNiA1MC0zMi42IDMwLjMtNjMuMiA0Ni45LTg0IDQ2LjktNC41LS4xLTguMy0xLTExLjMtMi43em0yMzcuMi03Ni4yYzQuNyAzOC4yLTEuMSA2Ny45LTE0LjYgNzUuOC0zIDEuOC02LjkgMi42LTExLjUgMi42LTIwLjcgMC01MS40LTE2LjUtODQtNDYuNiAxNC0xNC43IDI4LTMxLjQgNDEuMy00OS45IDIyLjYtMi40IDQ0LTYuMSA2My42LTExIDIuMyAxMC4xIDQuMSAxOS44IDUuMiAyOS4xem0zOC41LTY2LjdjLTguNiAzLjctMTggNy0yNy43IDEwLjEtNS43LTE5LjYtMTMuMi00MC0yMi41LTYwLjkgOS4yLTIwLjggMTYuNi00MS4xIDIyLjItNjAuNiA5LjkgMy4xIDE5LjMgNi41IDI4LjEgMTAuMiAzNS40IDE1LjEgNTguMyAzNC45IDU4LjMgNTAuNi0uMSAxNS43LTIzIDM1LjYtNTguNCA1MC42ek0zMjAuOCA3OC40eiIvPgogICAgICAgIDxjaXJjbGUgY3g9IjQyMC45IiBjeT0iMjk2LjUiIHI9IjQ1LjciLz4KICAgICAgICA8cGF0aCBkPSJNNTIwLjUgNzguMXoiLz4KICAgIDwvZz4KPC9zdmc+Cg=="},176:function(t,e,a){t.exports=a.p+"static/logo-1024-a5a0515ddf97f4008b430be88d2f3449.png"},177:function(t,e,a){},178:function(t,e,a){},179:function(t,e,a){},180:function(t,e,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),u=a(169),c=a.n(u),s=a(165),M=a.n(s),l=a(57),L=a(479),g=a(462),j=(a(191),a(192)),m=a(193),p=a(194);a(183).b.add(p.a,p.b,p.c,m.a,p.d,p.e,p.f,m.b,p.g,p.h,p.i,p.j,p.k,p.l);a(173);var N=function(t){var e=t.name,a=t.brand;return o.a.createElement("div",{className:"icon",title:e},o.a.createElement(j.a,{icon:a?["fab",e]:e}))},y=function(t){var e=t.name,a=t.brand;return o.a.createElement(j.a,{icon:a?["fab",e]:e})},T=(a(174),function(t){function e(){return t.apply(this,arguments)||this}r()(e,t);var a=e.prototype;return a.getLinkElements=function(){var t=this.props.config.userLinks,e=this.props.labeled;return t.map(function(t){return o.a.createElement(L.a,{variant:"outline-primary",key:t.label,href:t.url,title:e?t.label:""},o.a.createElement(y,{name:t.iconClassName,brand:t.iconBrand}))})},a.render=function(){return this.props.config.userLinks?o.a.createElement(g.a,{className:"user-links"},this.getLinkElements()):null},e}(i.Component)),I=a(175),E=a.n(I),A=a(176),C=a.n(A),D=(a(177),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.config;return o.a.createElement("header",{className:"header sticky-top"},o.a.createElement("img",{src:C.a,className:"logo-circular",alt:"Gatsby"}),o.a.createElement(N,{name:"bootstrap",brand:"1"}),o.a.createElement("img",{src:E.a,className:"logo-circular logo-rotate",alt:"React"}),o.a.createElement("h2",null,"Gatsby-Bootstrap React!"),o.a.createElement(T,{config:t,labeled:!0}))},e}(i.Component)),d=(a(178),function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.config,e=t.siteRss,a=t.copyright;return a?o.a.createElement("footer",{className:"footer fixed-bottom"},o.a.createElement("div",{className:"notice-container"},o.a.createElement("p",null,a),o.a.createElement(l.Link,{to:"/about"},"About"),o.a.createElement("div",{className:"d-none"},"subscribe btn here"),o.a.createElement(l.Link,{to:e},o.a.createElement(L.a,{variant:"outline-warning"},"Subscribe")),o.a.createElement(T,{config:t,labeled:!0}),o.a.createElement("p",null,"Based on"," ",o.a.createElement("a",{href:"https://github.com/Vagr9K/gatsby-advanced-starter"},"Gatsby Advanced Starter"),"."))):null},e}(i.Component));a(179);a.d(e,"a",function(){return S});var S=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t=this.props.children;return o.a.createElement("div",null,o.a.createElement(D,{config:M.a}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:M.a.siteDescription}),o.a.createElement("link",{rel:"stylesheet",href:"https://maxcdn.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css",integrity:"sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T",crossorigin:"anonymous"})),t,o.a.createElement(d,{config:M.a}))},e}(o.a.Component)},253:function(t,e,a){"use strict";var n=a(8),r=a.n(n),i=a(0),o=a.n(i),u=a(169),c=a.n(u),s=a(211),M=a.n(s),l=a(165),L=a.n(l),g=function(t){function e(){return t.apply(this,arguments)||this}return r()(e,t),e.prototype.render=function(){var t,e,a,n,r=this.props,i=r.postNode,u=r.postPath,s=r.postSEO;if(s){var l=i.frontmatter;t=l.title,e=l.description?l.description:i.excerpt,a=l.cover,n=M()(L.a.siteUrl,L.a.pathPrefix,u)}else t=L.a.siteTitle,e=L.a.siteDescription,a=L.a.siteLogo;a=M()(L.a.siteUrl,L.a.pathPrefix,a);var g=M()(L.a.siteUrl,L.a.pathPrefix),j=[{"@context":"http://schema.org","@type":"WebSite",url:g,name:t,alternateName:L.a.siteTitleAlt?L.a.siteTitleAlt:""}];return s&&j.push({"@context":"http://schema.org","@type":"BreadcrumbList",itemListElement:[{"@type":"ListItem",position:1,item:{"@id":n,name:t,image:a}}]},{"@context":"http://schema.org","@type":"BlogPosting",url:g,name:t,alternateName:L.a.siteTitleAlt?L.a.siteTitleAlt:"",headline:t,image:{"@type":"ImageObject",url:a},description:e}),o.a.createElement(c.a,null,o.a.createElement("meta",{name:"description",content:e}),o.a.createElement("meta",{name:"image",content:a}),o.a.createElement("script",{type:"application/ld+json"},JSON.stringify(j)),o.a.createElement("meta",{property:"og:url",content:s?n:g}),s?o.a.createElement("meta",{property:"og:type",content:"article"}):null,o.a.createElement("meta",{property:"og:title",content:t}),o.a.createElement("meta",{property:"og:description",content:e}),o.a.createElement("meta",{property:"og:image",content:a}),o.a.createElement("meta",{property:"fb:app_id",content:L.a.siteFBAppID?L.a.siteFBAppID:""}),o.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),o.a.createElement("meta",{name:"twitter:creator",content:L.a.userTwitter?L.a.userTwitter:""}),o.a.createElement("meta",{name:"twitter:title",content:t}),o.a.createElement("meta",{name:"twitter:description",content:e}),o.a.createElement("meta",{name:"twitter:image",content:a}))},e}(i.Component);e.a=g},406:function(t,e,a){},458:function(t,e,a){},459:function(t,e,a){}}]);
//# sourceMappingURL=component---src-templates-post-jsx-623e57d7a3af31c158c4.js.map