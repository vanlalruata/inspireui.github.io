(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{157:function(e,t,i){"use strict";i.r(t);var a=i(36),n=i.n(a),r=i(7),o=i.n(r),l=i(0),s=i.n(l),m=i(1),c=i.n(m),u=i(168),p=i.n(u),g=i(195),d=i(163),h=(i(183),i(77),i(56)),k=function(e){var t=e.link,i=e.title,a=e.linkClasses;return t?t.match(/^\s?http(s?)/gi)?s.a.createElement("a",{href:t,className:"link db pv6px pr2 lh-1-5 pl0 "+a,target:"_blank",rel:"noopener noreferrer"},i):s.a.createElement(h.Link,{to:t,className:"link db pv6px pr2 lh-1-5 pl0 "+a},i):s.a.createElement(s.a.Fragment,null,(void 0).props.title)};k.propTypes={link:c.a.string.isRequired,title:c.a.string.isRequired,linkClasses:c.a.string.isRequired};var b=k,f=function(e){var t=e.items,i=e.location;return s.a.createElement("ul",{className:"relative sidebar-list ma0 pa0 list mb5 pl6 mt1"},t.map(function(e,t){return s.a.createElement("li",{key:t},s.a.createElement(b,{link:e.link,title:e.title,linkClasses:e.link===i.pathname?"sidebarlink-active blue fw6":"midgrey fw4 hover-blue-l2"}))}))};f.propTypes={items:c.a.arrayOf(c.a.shape({title:c.a.string.isRequired,link:c.a.string.isRequired}).isRequired).isRequired,location:c.a.shape({pathname:c.a.string.isRequired}).isRequired};var y=f,w=function(e){try{var t=i(704)("./"+e+".yaml")[0]}catch(a){throw a}return t};w.propTypes={sidebar:c.a.string.isRequired};var v=w,E=function(e){var t=e.sidebar,i=e.location,a=v(t);return t&&a&&a.groups?s.a.createElement("nav",{className:"mt5 mb5 mt10-ns mb0-ns relative","data-cy":"sidebar"},a.groups.map(function(e,t){return s.a.createElement("div",{key:t,className:"mt1"},e.items.some(function(e){return e.link===i.pathname})?s.a.createElement(s.a.Fragment,null,s.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?s.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey link"}):e.group),s.a.createElement(y,{key:t,items:e.items,location:i})):s.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?s.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey hover-blue-l2 link"}):e.group))})):null};E.defaultProps={location:{pathname:"/"}},E.propTypes={sidebar:c.a.string.isRequired,location:c.a.shape({pathname:c.a.string.isRequired}).isRequired};var R=E,q=(i(722),i(165)),x=i.n(q),S=i(197),C=function(e){var t=e.prev,i=e.next;return s.a.createElement("div",{className:"grid-12"},t?s.a.createElement(h.Link,{to:t.link,className:"col-6 flex pa10 pl0 tdn justify-start items-center blue nudge-left--1 prevnext-hover ba b--transparent"},s.a.createElement(S.a,{name:"arrow-left",className:"w5 h5 fill-blue"}),s.a.createElement("div",{className:"ml4"},t.group?s.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},t.group):null,s.a.createElement("p",{className:d.a.excerpt+" nt1 di fw5"},t.title))):s.a.createElement("div",{className:"col-6"}),i?s.a.createElement(h.Link,{to:i.link,className:"col-6 flex pr0 pa10 tdn justify-end items-center blue prevnext-hover ba b--transparent"},s.a.createElement("div",{className:"tr mr4"},i.group?s.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},i.group):null,s.a.createElement("p",{className:d.a.excerpt+" nt1 di fw5"},i.title)),s.a.createElement(S.a,{name:"arrow-right",className:"w5 h5 fill-blue"})):s.a.createElement("div",{className:"col-6"}))};C.propTypes={prev:c.a.shape({title:c.a.string.isRequired,link:c.a.string.isRequired,group:c.a.string}),next:c.a.shape({title:c.a.string.isRequired,link:c.a.string.isRequired,group:c.a.string,description:c.a.string})};var j=C,z=function(e){var t=e.sidebar,i=e.location,a=e.next;if(t){var n=v(t);if(!n)return null;var r=n.groups,o=[];x.a.forEach(r,function(e){x.a.forEach(e.items,function(t){t.group=e.group,o.push(t)})});var l=x.a.findIndex(o,function(e){return e.link===i.pathname}),m=o[l-1],c=o[l+1];return s.a.createElement(j,{prev:m,next:c})}if(a&&a.title&&a.url){var u={title:u.title,link:u.url,description:u.description||""};return s.a.createElement(j,{next:u})}return null};z.propTypes={sidebar:c.a.string,location:c.a.shape({pathname:c.a.string.isRequired}).isRequired,next:c.a.shape({title:c.a.string,url:c.a.string})};var _=z,G=i(171),P=i(175);i.d(t,"articleQuery",function(){return D});var N=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isToggleOn:!1},i.toggleMobileMenu=i.toggleMobileMenu.bind(n()(i)),i}o()(t,e);var i=t.prototype;return i.toggleMobileMenu=function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})},i.render=function(){var e=this,t=this.props.location,i=this.props.data.markdownRemark,a=function(e){for(var t="",i=0,a=[{regex:/^(?:\S*\/content\/api\/v0\.11\/)(\S*)/i,url:"https://github.com/TryGhost/docs-api/blob/v0.11/"},{regex:/^(?:\S*\/content\/api\/v2\/)(\S*)/i,url:"https://github.com/TryGhost/docs-api/blob/master/"},{regex:/^(?:\S*\/content\/)(\S*)/i,url:"https://github.com/TryGhost/docs/blob/master/content/"}];i<a.length;i++){var n=a[i];if(n.regex.test(e)){t=p.a.resolve(n.url,n.regex.exec(e)[1]);break}}return t}(i.fileAbsolutePath),n=Object(P.b)(),r={},o=(i.frontmatter||"").sidebar,l=!1!==i.frontmatter.toc;return o&&l?(r.leftSidebar=s.a.createElement(R,{location:t,sidebar:o}),r.rightSidebar=s.a.createElement("div",{className:"nr3 sticky top-25"},s.a.createElement(G.f,{className:"pr4",listClasses:"mt2"})),r.justification="justify-between"):o||l?(r.leftSidebar=o?s.a.createElement(R,{location:t,sidebar:o}):s.a.createElement("div",{className:"nr3 sticky top-25"},s.a.createElement(G.f,{listClasses:"lefty",className:"mt5 mb5 mt10-ns mb0-ns",showHeading:!1})),r.justification="justify-start"):r.justification="justify-center",s.a.createElement(s.a.Fragment,null,s.a.createElement(P.a,{data:this.props.data,location:t,type:"article",image:n}),s.a.createElement(g.a,null,s.a.createElement(G.e,{location:t}),s.a.createElement("div",{className:d.a.page.xl+" flex flex-column flex-row-ns "+r.justification+" relative"},s.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:"bg-transparent bn appearance-none absolute right-7 db dn-ns",style:{top:"-40px"}},s.a.createElement(G.b,{name:"hamburger",className:"w6 h-auto stroke-white db dn-ns"})),r.leftSidebar?s.a.createElement("div",{className:(this.state.isToggleOn?"mobile-nav-open":"")+" w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar"},r.leftSidebar):null,s.a.createElement("div",null,s.a.createElement("div",{className:"w-100 mw-content bg-white shadow-2 br4 "+(this.state.isToggleOn?"":" br--bottom")},s.a.createElement("article",{className:"flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l relative"},s.a.createElement("div",{className:"flex content-between items-baseline justify-between no-wrap"},s.a.createElement("h1",{className:d.a.h1+" darkgrey"},i.frontmatter.title),a&&s.a.createElement("a",{href:a,className:"link no-underline midgrey flex-l dn items-start f8 absolute top-10 right-8 o-80 glow",target:"_blank",rel:"noopener noreferrer"},s.a.createElement(G.b,{name:"pencil",className:"w3 h3 fill-midgrey db pr2 o-80"}),"Edit on GitHub")),s.a.createElement("section",{className:"post-content external-scripts",dangerouslySetInnerHTML:{__html:i.html}})),s.a.createElement("div",{className:"mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5"},s.a.createElement(_,{location:t,sidebar:o,next:i.frontmatter.next})))),r.rightSidebar?s.a.createElement("div",{className:"order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7"},r.rightSidebar):null)))},t}(s.a.Component);N.propTypes={data:c.a.shape({site:c.a.shape({siteMetadata:c.a.shape({siteUrl:c.a.string.isRequired,title:c.a.string.isRequired,description:c.a.string.isRequired}).isRequired}).isRequired,markdownRemark:c.a.shape({frontmatter:c.a.shape({toc:c.a.bool,sidebar:c.a.string,title:c.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:c.a.object.isRequired};t.default=N;var D="4080165082"},175:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=i(1),o=i.n(r),l=i(168),s=i.n(l),m=(i(169),i(162)),c=i.n(m),u=i(165),p=i.n(u),g=i(210),d=(i(211),function(e,t){var i=[];return t?i.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+p.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):i.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),i=p.a.compact(i),{name:t?e.name:"Ghost",sameAsArray:i.length?'["'+p.a.join(i,'", "')+'"]':null,image:t?e.profile_image:null}});d.defaultProps={fetchAuthorData:!1},d.PropTypes={primaryAuthor:o.a.shape({name:o.a.string.isRequired,profile_image:o.a.string,website:o.a.string,twitter:o.a.string,facebook:o.a.string}).isRequired,fetchAuthorData:o.a.bool.isRequired};var h=d,k=function(e){var t=e.image;return n.a.createElement(c.a,null,n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:image",content:t}),n.a.createElement("meta",{property:"og:image",content:t}),n.a.createElement("meta",{property:"og:image:width",content:"1000"}),n.a.createElement("meta",{property:"og:image:height",content:"523"}))};k.propTypes={image:o.a.string.isRequired};var b=k,f=function(e){var t=e.data,i=e.canonical,a=e.fetchAuthorData,r=e.title,o=e.overwriteDefaultImage,l=e.image,s=t.ghostPost,m=t.site.siteMetadata,u=h(s.primary_author,a),d=p.a.map(Object(g.a)(s,{visibility:"public",fn:function(e){return e}}),"name"),k=d[0]||{name:"General",slug:"general"},f=o&&s.feature_image?s.feature_image:l;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,s.meta_title||r||s.title),n.a.createElement("meta",{name:"description",content:s.meta_description||s.excerpt}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:m.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:s.og_title||r||s.meta_title||s.title}),n.a.createElement("meta",{name:"og:description",content:s.og_description||s.excerpt||s.meta_description}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{property:"article:published_time",content:s.published_at}),n.a.createElement("meta",{property:"article:modified_time",content:s.updated_at}),d.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}),n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:s.twitter_title||r||s.meta_title||s.title}),n.a.createElement("meta",{name:"twitter:description",content:s.twitter_description||s.excerpt||s.meta_description}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),n.a.createElement("meta",{name:"twitter:data1",content:u.name}),n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),n.a.createElement("meta",{name:"twitter:data2",content:k}),n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+u.name+'",\n                            '+(u.image?u.sameAsArray?'"image": "'+u.image+'",':'"image": "'+u.image+'"':"")+"\n                            "+(u.sameAsArray?'"sameAs": '+u.sameAsArray:"")+"\n                        },\n                        "+(d.length?'"keywords": "'+p.a.join(d,", ")+'",':"")+'\n                        "headline": "'+(s.meta_title||r||s.title)+'",\n                        "url": "'+i+'",\n                        "datePublished": "'+s.published_at+'",\n                        "dateModified": "'+s.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+f+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(s.meta_description||s.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(b,{image:f}))};f.defaultProps={fetchAuthorData:!1},f.propTypes={data:o.a.shape({ghostPost:o.a.shape({title:o.a.string.isRequired,published_at:o.a.string.isRequired,updated_at:o.a.string.isRequired,excerpt:o.a.string.isRequired,meta_title:o.a.string,meta_description:o.a.string,primary_author:o.a.object.isRequired,feature_image:o.a.string,tags:o.a.arrayOf(o.a.shape({name:o.a.string,slug:o.a.string,visibility:o.a.string})),primaryTag:o.a.shape({name:o.a.string}),og_title:o.a.string,og_description:o.a.string,twitter_title:o.a.string,twitter_description:o.a.string}).isRequired,site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:o.a.string.isRequired,image:o.a.string.isRequired,fetchAuthorData:o.a.bool,title:o.a.string,overwriteDefaultImage:o.a.bool};var y=f,w=function(e){var t=e.data,i=e.canonical,a=t.markdownRemark,r=a.frontmatter,o=t.site.siteMetadata,l=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),s=r.keywords&&r.keywords.length?r.keywords[0]:null,m=z();return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,r.meta_title||r.title),n.a.createElement("meta",{name:"description",content:r.meta_description||a.excerpt}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:o.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),n.a.createElement("meta",{name:"og:description",content:r.meta_description||a.excerpt}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{property:"article:published_time",content:l}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),n.a.createElement("meta",{name:"twitter:description",content:r.meta_description||a.excerpt}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),n.a.createElement("meta",{name:"twitter:data1",content:a.timeToRead+" min read"}),s?n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,s?n.a.createElement("meta",{name:"twitter:data2",content:s}):null,n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+p.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+i+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||a.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+o.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(b,{image:m}))};w.propTypes={data:o.a.shape({markdownRemark:o.a.shape({frontmatter:o.a.shape({title:o.a.string.isRequired,keywords:o.a.arrayOf(o.a.string),meta_title:o.a.string,meta_description:o.a.string,date:o.a.string}).isRequired,excerpt:o.a.string.isRequired,timeToRead:o.a.number}).isRequired,site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:o.a.string.isRequired};var v=w,E=function(e){var t=e.data,i=e.canonical,a=e.title,r=e.description,o=e.image,l=e.type;return n.a.createElement(n.a.Fragment,null,n.a.createElement(c.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:r}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{name:"twitter:title",content:a}),n.a.createElement("meta",{name:"twitter:description",content:r}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+i+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+o+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),n.a.createElement(b,{image:o}))};E.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired,image:o.a.string.isRequired,type:o.a.oneOf(["website","series"]).isRequired};var R=E,q=function(e){var t=e.data,i=e.type,a=e.title,r=e.description,o=e.image,l=e.fetchAuthorData,m=e.overwriteDefaultImage,c=e.location,u=t||{},p=u.ghostPost,g=u.markdownRemark,d=t.site.siteMetadata,h=s.a.resolve(d.siteUrl,c.pathname,"/");if("article"===i){if(p)return n.a.createElement(y,{data:t,canonical:h,fetchAuthorData:l,title:a,image:o,overwriteDefaultImage:m});if(g)return n.a.createElement(v,{data:t,canonical:h})}else if("website"===i||"series"===i)return n.a.createElement(R,{data:t,canonical:h,title:a,description:r,image:o,type:i});return null};q.propTypes={data:o.a.shape({site:o.a.shape({siteMetadata:o.a.shape({siteUrl:o.a.string.isRequired,title:o.a.string.isRequired,description:o.a.string.isRequired}).isRequired}).isRequired,ghostPost:o.a.object,markdownRemark:o.a.object}).isRequired,location:o.a.shape({pathname:o.a.string.isRequired}).isRequired,type:o.a.oneOf(["website","series","article"]).isRequired,title:o.a.string,description:o.a.string,image:o.a.string,fetchAuthorData:o.a.bool,overwriteDefaultImage:o.a.bool};var x=q,S="http://ghost.local:8000",C={faq:s.a.resolve(S,"/images/meta/Ghost-FAQ.jpg"),integrations:s.a.resolve(S,"/images/meta/Ghost-Integrations.jpg"),tutorials:s.a.resolve(S,"/images/meta/Ghost-Tutorials.jpg"),default:s.a.resolve(S,"/images/meta/Ghost-Docs.jpg")},j=function(e){return C[e=e||"default"]};j.proptypes={section:o.a.string.isRequired};var z=j;i.d(t,"a",function(){return x}),i.d(t,"b",function(){return z})},704:function(e,t,i){var a={"./beonboard.yaml":705,"./beonews.yaml":706,"./beostore.yaml":707,"./buzzapp.yaml":708,"./cestore-web.yaml":709,"./cestore.yaml":710,"./evastore.yaml":711,"./fluxstore.yaml":712,"./listapp.yaml":713,"./listpro.yaml":714,"./mstore-magento.yaml":715,"./mstore-mv.yaml":716,"./mstore-opencart.yaml":717,"./mstore-shopify.yaml":718,"./mstore.yaml":719,"./reactpage.yaml":720,"./reactxs.yaml":721};function n(e){var t=r(e);return i(t)}function r(e){var t=a[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=704},705:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Beonboard",link:"/beonboard"},{title:"Getting Started",link:"/beonboard/getting-started/"}]},{group:"Components",items:[{title:"Animated",link:"/beonboard/components/animated/"},{title:"Blur",link:"/beonboard/components/blur/"},{title:"Card",link:"/beonboard/components/card/"},{title:"Circle",link:"/beonboard/components/circle/"},{title:"Continuous",link:"/beonboard/components/continuous/"},{title:"Flat Google",link:"/beonboard/components/flat-google-style/"},{title:"Full Wide",link:"/beonboard/components/full-wide"},{title:"Gradient",link:"/beonboard/components/gradient/"},{title:"Parallax",link:"/beonboard/components/parallax/"},{title:"Video",link:"/beonboard/components/video/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/beonboard/project-structure/"},{title:"Changelogs",link:"/beonboard/changelogs/"}]}]}]},706:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is BeoNews?",link:"/beonews"},{title:"Quick Setup",link:"/beonews/quick-setup/"},{title:"Getting Started",link:"/beonews/getting-started/"},{title:"Wordpress Setting",link:"/beonews/wordpress-setting/"}]},{group:"Customization",items:[{title:"Customization",link:"/beonews/customization/"},{title:"Facebook Setting",link:"/beonews/facebook-setting/"},{title:"Multi Language",link:"/beonews/multi-language/"},{title:"Push Notification",link:"/beonews/push-notification/"},{title:"Firebase Setting",link:"/beonews/firebase-setting/"},{title:"Admob Setting",link:"/beonews/admob-setting/"},{title:"Delivery",link:"/beonews/delivery/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/beonews/api/"},{title:"Questions",link:"/beonews/questions/"},{title:"Changelogs",link:"/beonews/changelogs/"}]}]}]},707:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"BeoStore",link:"/beostore"},{title:"Getting Started",link:"/beostore/getting-started/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/beostore/project-structure/"},{title:"Code Practice",link:"/beostore/code-practice/"},{title:"Changelogs",link:"/beostore/changelogs/"}]}]}]},708:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is buzzapp?",link:"/buzzapp"},{title:"Quick Setup",link:"/buzzapp/quick-setup/"},{title:"Getting Started",link:"/buzzapp/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/buzzapp/customization/"},{title:"Project Structure",link:"/buzzapp/project-structure/"},{title:"Development",link:"/buzzapp/development/"},{title:"Delivery",link:"/buzzapp/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/buzzapp/changelogs/"},{title:"Resources",link:"/buzzapp/resources/"}]}]}]},709:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Cestore Web?",link:"/cestore-web"},{title:"Getting Started",link:"/cestore-web/getting-started/"}]},{group:"Website Guide",items:[{title:"Database Setup",link:"/cestore-web/initialize-mongodb/"},{title:"Project Structure",link:"/cestore-web/project-structure/"},{title:"HomePage",link:"/cestore-web/homepage/"},{title:"Category",link:"/cestore-web/category/"},{title:"Product Detail",link:"/cestore-web/product-detail/"},{title:"Custom Page",link:"/cestore-web/custom-page/"},{title:"Deploy to Unbuntu",link:"/cestore-web/deploy/"},{title:"Api Reference",link:"/cestore-web/api/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/cestore-web/changelogs/"},{title:"Questions",link:"/cestore-web/questions/"},{title:"Resources",link:"/cestore-web/resources/"}]}]}]},710:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is Cestore?",link:"/cestore"},{title:"Quick Setup",link:"/cestore/quick-setup/"},{title:"Getting Started",link:"/cestore/getting-started/"}]},{group:"Mobile Guide",items:[{title:"Project Structure",link:"/cestore/project-structure/"},{title:"Development",link:"/cestore/development/"},{title:"Delivery",link:"/cestore/delivery/"}]},{group:"Website Guide",items:[{title:"CeStore Web",link:"/cestore/web-start"}]},{group:"Reference",items:[{title:"Changelogs",link:"/cestore/changelogs/"},{title:"Resources",link:"/cestore/resources/"}]}]}]},711:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is Evastore?",link:"/evastore"},{title:"Quick Setup",link:"/evastore/quick-setup/"},{title:"Getting Started",link:"/evastore/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/evastore/customization/"},{title:"Project Structure",link:"/evastore/project-structure/"},{title:"Delivery",link:"/evastore/delivery/"},{title:"Changelogs",link:"/evastore/changelogs/"}]}]}]},712:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Introduction",link:"/fluxstore"},{title:"Getting Started",link:"/fluxstore/getting-started/"},{title:"WooCommerce Setup",link:"/fluxstore/woocommerce-setup/"},{title:"Magento Setup",link:"/fluxstore/magento-setup/"},{title:"Opencart Setup",link:"/fluxstore/opencart-setup/"}]},{group:"Customization",items:[{title:"Customization",link:"/fluxstore/customization/"},{title:"Project Structure",link:"/fluxstore/project-structure/"},{title:"Push Notification",link:"/fluxstore/push-notification/"},{title:"Development",link:"/fluxstore/development/"},{title:"Delivery",link:"/fluxstore/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/fluxstore/changelogs/"},{title:"Roadmap",link:"/fluxstore/roadmap/"}]}]}]},713:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is ListApp?",link:"/listapp"},{title:"Quick Setup",link:"/listapp/quick-setup/"},{title:"Getting Started",link:"/listapp/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/listapp/customization/"},{title:"Theme",link:"/listapp/theme/"},{title:"Firebase & Chat",link:"/listapp/firebase/"},{title:"Project Structure",link:"/listapp/project-structure/"},{title:"Development",link:"/listapp/development/"},{title:"Delivery",link:"/listapp/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/listapp/changelogs/"},{title:"Questions",link:"/listapp/questions/"},{title:"Resources",link:"/listapp/resources/"},{title:"Troubleshooting",link:"/listapp/troubleshooting/"}]}]}]},714:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is ListPro?",link:"/listpro"},{title:"Quick Setup",link:"/listpro/quick-setup/"},{title:"Getting Started",link:"/listpro/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/listpro/customization/"},{title:"Theme",link:"/listpro/theme/"},{title:"Firebase & Chat",link:"/listpro/firebase/"},{title:"Project Structure",link:"/listpro/project-structure/"},{title:"Development",link:"/listpro/development/"},{title:"Delivery",link:"/listpro/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/listpro/changelogs/"},{title:"Questions",link:"/listpro/questions/"},{title:"Resources",link:"/listpro/resources/"},{title:"Troubleshooting",link:"/listpro/troubleshooting/"}]}]}]},715:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Introduction",link:"/mstore-magento"},{title:"Getting Started",link:"/mstore-magento/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/mstore-magento/customization/"},{title:"Theme",link:"/mstore-magento/theme/"},{title:"Development",link:"/mstore-magento/development/"},{title:"Delivery",link:"/mstore-magento/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/mstore-magento/changelogs/"},{title:"Resources",link:"/mstore-magento/resources/"}]}]}]},716:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Introduction",link:"/mstore-mv"},{title:"Quick Setup",link:"/mstore-mv/quick-setup"},{title:"Getting Started",link:"/mstore-mv/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/mstore-mv/customization/"},{title:"Project Structure",link:"/mstore-mv/project-structure/"},{title:"Push Notification",link:"/mstore-mv/push-notification/"},{title:"Firebase & Chat",link:"/mstore-mv/firebase/"},{title:"Development",link:"/mstore-mv/development/"},{title:"Delivery",link:"/mstore-mv/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/mstore-mv/changelogs/"},{title:"Roadmap",link:"/mstore-mv/roadmap/"},{title:"Troubleshooting",link:"/mstore-mv/troubleshooting/"}]}]}]},717:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Introduction",link:"/mstore-opencart"},{title:"Getting Started",link:"/mstore-opencart/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/mstore-opencart/customization/"},{title:"Theme",link:"/mstore-opencart/theme/"},{title:"Development",link:"/mstore-opencart/development/"},{title:"Delivery",link:"/mstore-opencart/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/mstore-opencart/changelogs/"},{title:"Resources",link:"/mstore-opencart/resources/"}]}]}]},718:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"MStore Shopify",link:"/mstore-shopify"},{title:"Getting Started",link:"/mstore-shopify/getting-started/"}]},{group:"Reference",items:[{title:"App Config",link:"/mstore-shopify/app-config/"},{title:"Changelogs",link:"/mstore-shopify/changelogs/"}]}]}]},719:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is Mstore Pro?",link:"/mstore"},{title:"Getting Started",link:"/mstore/getting-started/"},{title:"Wordpress Setting",link:"/mstore/wordpress-setting/"}]},{group:"Customization",items:[{title:"WooCommerce Setting",link:"/mstore/woo-setting/"},{title:"Homepage Theme",link:"/mstore/home-theme/"},{title:"Multi Languages",link:"/mstore/multi-languages/"},{title:"Facebook Setting",link:"/mstore/facebook-setting/"},{title:"Customize Branding",link:"/mstore/customize-branding/"},{title:"Push notification",link:"/mstore/push-notification/"},{title:"Multi Payments Gateway",link:"/mstore/multi-payments/"},{title:"Delivery",link:"/mstore/delivery/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/mstore/project-structure/"},{title:"Videos Installing",link:"/mstore/videos/"},{title:"Questions",link:"/mstore/questions/"},{title:"Changelogs",link:"/mstore/changelogs/"}]}]}]},720:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Reactpage",link:"/reactpage"},{title:"Getting Started",link:"/reactpage/getting-started/"},{title:"Theme Setting",link:"/reactpage/theme-settings/"},{title:"Routing Menu Setting",link:"/reactpage/routing-menu-settings/"}]},{group:"Reference",items:[{title:"Project structure",link:"/reactpage/project-structure/"},{title:"Common Script",link:"/reactpage/common-script/"}]}]}]},721:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is ReactXS?",link:"/reactxs"},{title:"Getting Started",link:"/reactxs/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/reactxs/customization/"},{title:"Project Structure",link:"/reactxs/project-structure/"}]}]}]},722:function(e,t,i){"use strict";var a=i(12),n=i(78)(6),r="findIndex",o=!0;r in[]&&Array(1)[r](function(){o=!1}),a(a.P+a.F*o,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(37)(r)}}]);
//# sourceMappingURL=component---src-templates-markdown-post-js-2e7801b996eb086114be.js.map