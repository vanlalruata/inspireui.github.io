(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{157:function(e,t,i){"use strict";i.r(t);var a=i(36),n=i.n(a),r=i(7),s=i.n(r),l=i(0),o=i.n(l),c=i(1),m=i.n(c),p=i(168),u=i.n(p),g=i(195),d=i(163),h=(i(183),i(77),i(56)),k=function(e){var t=e.link,i=e.title,a=e.linkClasses;return t?t.match(/^\s?http(s?)/gi)?o.a.createElement("a",{href:t,className:"link db pv6px pr2 lh-1-5 pl0 "+a,target:"_blank",rel:"noopener noreferrer"},i):o.a.createElement(h.Link,{to:t,className:"link db pv6px pr2 lh-1-5 pl0 "+a},i):o.a.createElement(o.a.Fragment,null,(void 0).props.title)};k.propTypes={link:m.a.string.isRequired,title:m.a.string.isRequired,linkClasses:m.a.string.isRequired};var b=k,f=function(e){var t=e.items,i=e.location;return o.a.createElement("ul",{className:"relative sidebar-list ma0 pa0 list mb5 pl6 mt1"},t.map(function(e,t){return o.a.createElement("li",{key:t},o.a.createElement(b,{link:e.link,title:e.title,linkClasses:e.link===i.pathname?"sidebarlink-active blue fw6":"midgrey fw4 hover-blue-l2"}))}))};f.propTypes={items:m.a.arrayOf(m.a.shape({title:m.a.string.isRequired,link:m.a.string.isRequired}).isRequired).isRequired,location:m.a.shape({pathname:m.a.string.isRequired}).isRequired};var y=f,w=function(e){try{var t=i(703)("./"+e+".yaml")[0]}catch(a){throw a}return t};w.propTypes={sidebar:m.a.string.isRequired};var v=w,E=function(e){var t=e.sidebar,i=e.location,a=v(t);return t&&a&&a.groups?o.a.createElement("nav",{className:"mt5 mb5 mt10-ns mb0-ns relative","data-cy":"sidebar"},a.groups.map(function(e,t){return o.a.createElement("div",{key:t,className:"mt1"},e.items.some(function(e){return e.link===i.pathname})?o.a.createElement(o.a.Fragment,null,o.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?o.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey link"}):e.group),o.a.createElement(y,{key:t,items:e.items,location:i})):o.a.createElement("h4",{className:"f5 fw5 link pa0 ma0"},e.items[0].link?o.a.createElement(b,{link:e.items[0].link,title:e.group,linkClasses:"midgrey hover-blue-l2 link"}):e.group))})):null};E.defaultProps={location:{pathname:"/"}},E.propTypes={sidebar:m.a.string.isRequired,location:m.a.shape({pathname:m.a.string.isRequired}).isRequired};var R=E,q=(i(719),i(165)),x=i.n(q),S=i(197),j=function(e){var t=e.prev,i=e.next;return o.a.createElement("div",{className:"grid-12"},t?o.a.createElement(h.Link,{to:t.link,className:"col-6 flex pa10 pl0 tdn justify-start items-center blue nudge-left--1 prevnext-hover ba b--transparent"},o.a.createElement(S.a,{name:"arrow-left",className:"w5 h5 fill-blue"}),o.a.createElement("div",{className:"ml4"},t.group?o.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},t.group):null,o.a.createElement("p",{className:d.a.excerpt+" nt1 di fw5"},t.title))):o.a.createElement("div",{className:"col-6"}),i?o.a.createElement(h.Link,{to:i.link,className:"col-6 flex pr0 pa10 tdn justify-end items-center blue prevnext-hover ba b--transparent"},o.a.createElement("div",{className:"tr mr4"},i.group?o.a.createElement("h6",{className:"ma0 pa0 f8 fw4 midgrey lh-1-5"},i.group):null,o.a.createElement("p",{className:d.a.excerpt+" nt1 di fw5"},i.title)),o.a.createElement(S.a,{name:"arrow-right",className:"w5 h5 fill-blue"})):o.a.createElement("div",{className:"col-6"}))};j.propTypes={prev:m.a.shape({title:m.a.string.isRequired,link:m.a.string.isRequired,group:m.a.string}),next:m.a.shape({title:m.a.string.isRequired,link:m.a.string.isRequired,group:m.a.string,description:m.a.string})};var _=j,C=function(e){var t=e.sidebar,i=e.location,a=e.next;if(t){var n=v(t);if(!n)return null;var r=n.groups,s=[];x.a.forEach(r,function(e){x.a.forEach(e.items,function(t){t.group=e.group,s.push(t)})});var l=x.a.findIndex(s,function(e){return e.link===i.pathname}),c=s[l-1],m=s[l+1];return o.a.createElement(_,{prev:c,next:m})}if(a&&a.title&&a.url){var p={title:p.title,link:p.url,description:p.description||""};return o.a.createElement(_,{next:p})}return null};C.propTypes={sidebar:m.a.string,location:m.a.shape({pathname:m.a.string.isRequired}).isRequired,next:m.a.shape({title:m.a.string,url:m.a.string})};var z=C,G=i(171),P=i(175);i.d(t,"articleQuery",function(){return D});var N=function(e){function t(t){var i;return(i=e.call(this,t)||this).state={isToggleOn:!1},i.toggleMobileMenu=i.toggleMobileMenu.bind(n()(i)),i}s()(t,e);var i=t.prototype;return i.toggleMobileMenu=function(){this.setState(function(e){return{isToggleOn:!e.isToggleOn}})},i.render=function(){var e=this,t=this.props.location,i=this.props.data.markdownRemark,a=function(e){for(var t="",i=0,a=[{regex:/^(?:\S*\/content\/api\/v0\.11\/)(\S*)/i,url:"https://github.com/TryGhost/docs-api/blob/v0.11/"},{regex:/^(?:\S*\/content\/api\/v2\/)(\S*)/i,url:"https://github.com/TryGhost/docs-api/blob/master/"},{regex:/^(?:\S*\/content\/)(\S*)/i,url:"https://github.com/TryGhost/docs/blob/master/content/"}];i<a.length;i++){var n=a[i];if(n.regex.test(e)){t=u.a.resolve(n.url,n.regex.exec(e)[1]);break}}return t}(i.fileAbsolutePath),n=Object(P.b)(),r={},s=(i.frontmatter||"").sidebar,l=!1!==i.frontmatter.toc;return s&&l?(r.leftSidebar=o.a.createElement(R,{location:t,sidebar:s}),r.rightSidebar=o.a.createElement("div",{className:"nr3 sticky top-25"},o.a.createElement(G.f,{className:"pr4",listClasses:"mt2"})),r.justification="justify-between"):s||l?(r.leftSidebar=s?o.a.createElement(R,{location:t,sidebar:s}):o.a.createElement("div",{className:"nr3 sticky top-25"},o.a.createElement(G.f,{listClasses:"lefty",className:"mt5 mb5 mt10-ns mb0-ns",showHeading:!1})),r.justification="justify-start"):r.justification="justify-center",o.a.createElement(o.a.Fragment,null,o.a.createElement(P.a,{data:this.props.data,location:t,type:"article",image:n}),o.a.createElement(g.a,null,o.a.createElement(G.e,{location:t}),o.a.createElement("div",{className:d.a.page.xl+" flex flex-column flex-row-ns "+r.justification+" relative"},o.a.createElement("button",{onClick:function(){return e.toggleMobileMenu()},className:"bg-transparent bn appearance-none absolute right-7 db dn-ns",style:{top:"-40px"}},o.a.createElement(G.b,{name:"hamburger",className:"w6 h-auto stroke-white db dn-ns"})),r.leftSidebar?o.a.createElement("div",{className:(this.state.isToggleOn?"mobile-nav-open":"")+" w-100 w-sidebar-ns pr10 pl5 pl0-ns flex-shrink-0-l relative left-sidebar"},r.leftSidebar):null,o.a.createElement("div",null,o.a.createElement("div",{className:"w-100 mw-content bg-white shadow-2 br4 "+(this.state.isToggleOn?"":" br--bottom")},o.a.createElement("article",{className:"flex-auto pa5 pa8-m pa15-l pt10-ns pb10-ns pt10-l pb10-l relative"},o.a.createElement("div",{className:"flex content-between items-baseline justify-between no-wrap"},o.a.createElement("h1",{className:d.a.h1+" darkgrey"},i.frontmatter.title),a&&o.a.createElement("a",{href:a,className:"link no-underline midgrey flex-l dn items-start f8 absolute top-10 right-8 o-80 glow",target:"_blank",rel:"noopener noreferrer"},o.a.createElement(G.b,{name:"pencil",className:"w3 h3 fill-midgrey db pr2 o-80"}),"Edit on GitHub")),o.a.createElement("section",{className:"post-content external-scripts",dangerouslySetInnerHTML:{__html:i.html}})),o.a.createElement("div",{className:"mw-content pl5 pr5 pl15-ns pr15-ns bt b--whitegrey mt5"},o.a.createElement(z,{location:t,sidebar:s,next:i.frontmatter.next})))),r.rightSidebar?o.a.createElement("div",{className:"order-3 w-sidebar flex-shrink-0 dn db-l pt10 pl7"},r.rightSidebar):null)))},t}(o.a.Component);N.propTypes={data:m.a.shape({site:m.a.shape({siteMetadata:m.a.shape({siteUrl:m.a.string.isRequired,title:m.a.string.isRequired,description:m.a.string.isRequired}).isRequired}).isRequired,markdownRemark:m.a.shape({frontmatter:m.a.shape({toc:m.a.bool,sidebar:m.a.string,title:m.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:m.a.object.isRequired};t.default=N;var D="4080165082"},175:function(e,t,i){"use strict";var a=i(0),n=i.n(a),r=i(1),s=i.n(r),l=i(168),o=i.n(l),c=(i(169),i(162)),m=i.n(c),p=i(165),u=i.n(p),g=i(210),d=(i(211),function(e,t){var i=[];return t?i.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+u.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):i.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),i=u.a.compact(i),{name:t?e.name:"Ghost",sameAsArray:i.length?'["'+u.a.join(i,'", "')+'"]':null,image:t?e.profile_image:null}});d.defaultProps={fetchAuthorData:!1},d.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=d,k=function(e){var t=e.image;return n.a.createElement(m.a,null,n.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),n.a.createElement("meta",{name:"twitter:image",content:t}),n.a.createElement("meta",{property:"og:image",content:t}),n.a.createElement("meta",{property:"og:image:width",content:"1000"}),n.a.createElement("meta",{property:"og:image:height",content:"523"}))};k.propTypes={image:s.a.string.isRequired};var b=k,f=function(e){var t=e.data,i=e.canonical,a=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,l=e.image,o=t.ghostPost,c=t.site.siteMetadata,p=h(o.primary_author,a),d=u.a.map(Object(g.a)(o,{visibility:"public",fn:function(e){return e}}),"name"),k=d[0]||{name:"General",slug:"general"},f=s&&o.feature_image?o.feature_image:l;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,o.meta_title||r||o.title),n.a.createElement("meta",{name:"description",content:o.meta_description||o.excerpt}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:c.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:o.og_title||r||o.meta_title||o.title}),n.a.createElement("meta",{name:"og:description",content:o.og_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{property:"article:published_time",content:o.published_at}),n.a.createElement("meta",{property:"article:modified_time",content:o.updated_at}),d.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}),n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:o.twitter_title||r||o.meta_title||o.title}),n.a.createElement("meta",{name:"twitter:description",content:o.twitter_description||o.excerpt||o.meta_description}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),n.a.createElement("meta",{name:"twitter:data1",content:p.name}),n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),n.a.createElement("meta",{name:"twitter:data2",content:k}),n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(d.length?'"keywords": "'+u.a.join(d,", ")+'",':"")+'\n                        "headline": "'+(o.meta_title||r||o.title)+'",\n                        "url": "'+i+'",\n                        "datePublished": "'+o.published_at+'",\n                        "dateModified": "'+o.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+f+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(o.meta_description||o.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+c.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(b,{image:f}))};f.defaultProps={fetchAuthorData:!1},f.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var y=f,w=function(e){var t=e.data,i=e.canonical,a=t.markdownRemark,r=a.frontmatter,s=t.site.siteMetadata,l=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),o=r.keywords&&r.keywords.length?r.keywords[0]:null,c=C();return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,r.meta_title||r.title),n.a.createElement("meta",{name:"description",content:r.meta_description||a.excerpt}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:s.title}),n.a.createElement("meta",{name:"og:type",content:"article"}),n.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),n.a.createElement("meta",{name:"og:description",content:r.meta_description||a.excerpt}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{property:"article:published_time",content:l}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return n.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,n.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),n.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),n.a.createElement("meta",{name:"twitter:description",content:r.meta_description||a.excerpt}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),n.a.createElement("meta",{name:"twitter:data1",content:a.timeToRead+" min read"}),o?n.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,o?n.a.createElement("meta",{name:"twitter:data2",content:o}):null,n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+u.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+i+'",\n                        "datePublished": "'+l+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+c+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||a.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),n.a.createElement(b,{image:c}))};w.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var v=w,E=function(e){var t=e.data,i=e.canonical,a=e.title,r=e.description,s=e.image,l=e.type;return n.a.createElement(n.a.Fragment,null,n.a.createElement(m.a,null,n.a.createElement("title",null,a),n.a.createElement("meta",{name:"description",content:r}),n.a.createElement("link",{rel:"canonical",href:i}),n.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),n.a.createElement("meta",{property:"og:type",content:"website"}),n.a.createElement("meta",{property:"og:title",content:a}),n.a.createElement("meta",{property:"og:description",content:r}),n.a.createElement("meta",{property:"og:url",content:i}),n.a.createElement("meta",{name:"twitter:title",content:a}),n.a.createElement("meta",{name:"twitter:description",content:r}),n.a.createElement("meta",{name:"twitter:url",content:i}),n.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),n.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(l&&"series"===l?'"Series"':'"WebSite"')+',\n                        "url": "'+i+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),n.a.createElement(b,{image:s}))};E.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var R=E,q=function(e){var t=e.data,i=e.type,a=e.title,r=e.description,s=e.image,l=e.fetchAuthorData,c=e.overwriteDefaultImage,m=e.location,p=t||{},u=p.ghostPost,g=p.markdownRemark,d=t.site.siteMetadata,h=o.a.resolve(d.siteUrl,m.pathname,"/");if("article"===i){if(u)return n.a.createElement(y,{data:t,canonical:h,fetchAuthorData:l,title:a,image:s,overwriteDefaultImage:c});if(g)return n.a.createElement(v,{data:t,canonical:h})}else if("website"===i||"series"===i)return n.a.createElement(R,{data:t,canonical:h,title:a,description:r,image:s,type:i});return null};q.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var x=q,S="http://ghost.local:8000",j={faq:o.a.resolve(S,"/images/meta/Ghost-FAQ.jpg"),integrations:o.a.resolve(S,"/images/meta/Ghost-Integrations.jpg"),tutorials:o.a.resolve(S,"/images/meta/Ghost-Tutorials.jpg"),default:o.a.resolve(S,"/images/meta/Ghost-Docs.jpg")},_=function(e){return j[e=e||"default"]};_.proptypes={section:s.a.string.isRequired};var C=_;i.d(t,"a",function(){return x}),i.d(t,"b",function(){return C})},703:function(e,t,i){var a={"./beonboard.yaml":704,"./beonews.yaml":705,"./beostore.yaml":706,"./buzzapp.yaml":707,"./cestore-web.yaml":708,"./cestore.yaml":709,"./evastore.yaml":710,"./listapp.yaml":711,"./listpro.yaml":712,"./mstore-magento.yaml":713,"./mstore-mv.yaml":714,"./mstore-shopify.yaml":715,"./mstore.yaml":716,"./reactpage.yaml":717,"./reactxs.yaml":718};function n(e){var t=r(e);return i(t)}function r(e){var t=a[e];if(!(t+1)){var i=new Error("Cannot find module '"+e+"'");throw i.code="MODULE_NOT_FOUND",i}return t}n.keys=function(){return Object.keys(a)},n.resolve=r,e.exports=n,n.id=703},704:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Beonboard",link:"/beonboard"},{title:"Getting Started",link:"/beonboard/getting-started/"}]},{group:"Components",items:[{title:"Animated",link:"/beonboard/components/animated/"},{title:"Blur",link:"/beonboard/components/blur/"},{title:"Card",link:"/beonboard/components/card/"},{title:"Circle",link:"/beonboard/components/circle/"},{title:"Continuous",link:"/beonboard/components/continuous/"},{title:"Flat Google",link:"/beonboard/components/flat-google-style/"},{title:"Full Wide",link:"/beonboard/components/full-wide"},{title:"Gradient",link:"/beonboard/components/gradient/"},{title:"Parallax",link:"/beonboard/components/parallax/"},{title:"Video",link:"/beonboard/components/video/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/beonboard/project-structure/"},{title:"Changelogs",link:"/beonboard/changelogs/"}]}]}]},705:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is BeoNews?",link:"/beonews"},{title:"Quick Setup",link:"/beonews/quick-setup/"},{title:"Getting Started",link:"/beonews/getting-started/"},{title:"Wordpress Setting",link:"/beonews/wordpress-setting/"}]},{group:"Customization",items:[{title:"Customization",link:"/beonews/customization/"},{title:"Facebook Setting",link:"/beonews/facebook-setting/"},{title:"Multi Language",link:"/beonews/multi-language/"},{title:"Push Notification",link:"/beonews/push-notification/"},{title:"Firebase Setting",link:"/beonews/firebase-setting/"},{title:"Admob Setting",link:"/beonews/admob-setting/"},{title:"Delivery",link:"/beonews/delivery/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/beonews/api/"},{title:"Questions",link:"/beonews/questions/"},{title:"Changelogs",link:"/beonews/changelogs/"}]}]}]},706:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"BeoStore",link:"/beostore"},{title:"Getting Started",link:"/beostore/getting-started/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/beostore/project-structure/"},{title:"Code Practice",link:"/beostore/code-practice/"},{title:"Changelogs",link:"/beostore/changelogs/"}]}]}]},707:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is buzzapp?",link:"/buzzapp"},{title:"Quick Setup",link:"/buzzapp/quick-setup/"},{title:"Getting Started",link:"/buzzapp/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/buzzapp/customization/"},{title:"Project Structure",link:"/buzzapp/project-structure/"},{title:"Development",link:"/buzzapp/development/"},{title:"Delivery",link:"/buzzapp/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/buzzapp/changelogs/"},{title:"Resources",link:"/buzzapp/resources/"}]}]}]},708:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Cestore Web?",link:"/cestore-web"},{title:"Getting Started",link:"/cestore-web/getting-started/"}]},{group:"Website Guide",items:[{title:"Database Setup",link:"/cestore-web/initialize-mongodb/"},{title:"Project Structure",link:"/cestore-web/project-structure/"},{title:"HomePage",link:"/cestore-web/homepage/"},{title:"Category",link:"/cestore-web/category/"},{title:"Product Detail",link:"/cestore-web/product-detail/"},{title:"Custom Page",link:"/cestore-web/custom-page/"},{title:"Deploy to Unbuntu",link:"/cestore-web/deploy/"},{title:"Api Reference",link:"/cestore-web/api/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/cestore-web/changelogs/"},{title:"Questions",link:"/cestore-web/questions/"},{title:"Resources",link:"/cestore-web/resources/"}]}]}]},709:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is Cestore?",link:"/cestore"},{title:"Quick Setup",link:"/cestore/quick-setup/"},{title:"Getting Started",link:"/cestore/getting-started/"}]},{group:"Mobile Guide",items:[{title:"Project Structure",link:"/cestore/project-structure/"},{title:"Development",link:"/cestore/development/"},{title:"Delivery",link:"/cestore/delivery/"}]},{group:"Website Guide",items:[{title:"CeStore Web",link:"/cestore/web-start"}]},{group:"Reference",items:[{title:"Changelogs",link:"/cestore/changelogs/"},{title:"Resources",link:"/cestore/resources/"}]}]}]},710:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is Evastore?",link:"/evastore"},{title:"Quick Setup",link:"/evastore/quick-setup/"},{title:"Getting Started",link:"/evastore/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/evastore/customization/"},{title:"Project Structure",link:"/evastore/project-structure/"},{title:"Delivery",link:"/evastore/delivery/"},{title:"Changelogs",link:"/evastore/changelogs/"}]}]}]},711:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is ListApp?",link:"/listapp"},{title:"Quick Setup",link:"/listapp/quick-setup/"},{title:"Getting Started",link:"/listapp/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/listapp/customization/"},{title:"Project Structure",link:"/listapp/project-structure/"},{title:"Development",link:"/listapp/development/"},{title:"Delivery",link:"/listapp/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/listapp/changelogs/"},{title:"Questions",link:"/listapp/questions/"},{title:"Resources",link:"/listapp/resources/"}]}]}]},712:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is ListPro?",link:"/listpro"},{title:"Quick Setup",link:"/listpro/quick-setup/"},{title:"Getting Started",link:"/listpro/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/listpro/customization/"},{title:"Theme",link:"/listpro/theme/"},{title:"Project Structure",link:"/listpro/project-structure/"},{title:"Development",link:"/listpro/development/"},{title:"Delivery",link:"/listpro/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/listpro/changelogs/"},{title:"Questions",link:"/listpro/questions/"},{title:"Resources",link:"/listpro/resources/"}]}]}]},713:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Introduction",link:"/mstore-magento"},{title:"Getting Started",link:"/mstore-magento/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/mstore-magento/customization/"},{title:"Theme",link:"/mstore-magento/theme/"},{title:"Development",link:"/mstore-magento/development/"},{title:"Delivery",link:"/mstore-magento/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/mstore-magento/changelogs/"},{title:"Resources",link:"/mstore-magento/resources/"}]}]}]},714:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Introduction",link:"/mstore-mv"},{title:"Quick Setup",link:"/mstore-mv/quick-setup"},{title:"Getting Started",link:"/mstore-mv/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/mstore-mv/customization/"},{title:"Project Structure",link:"/mstore-mv/project-structure/"},{title:"Development",link:"/mstore-mv/development/"},{title:"Delivery",link:"/mstore-mv/delivery/"}]},{group:"Reference",items:[{title:"Changelogs",link:"/mstore-mv/changelogs/"},{title:"Roadmap",link:"/mstore-mv/roadmap/"}]}]}]},715:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"MStore Shopify",link:"/mstore-shopify"},{title:"Getting Started",link:"/mstore-shopify/getting-started/"}]},{group:"Reference",items:[{title:"App Config",link:"/mstore-shopify/app-config/"},{title:"Changelogs",link:"/mstore-shopify/changelogs/"}]}]}]},716:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is Mstore Pro?",link:"/mstore"},{title:"Getting Started",link:"/mstore/getting-started/"},{title:"Wordpress Setting",link:"/mstore/wordpress-setting/"}]},{group:"Customization",items:[{title:"WooCommerce Setting",link:"/mstore/woo-setting/"},{title:"Multi Languages",link:"/mstore/multi-languages/"},{title:"Facebook Setting",link:"/mstore/facebook-setting/"},{title:"Customize Branding",link:"/mstore/customize-branding/"},{title:"Push notification",link:"/mstore/push-notification/"},{title:"Multi Payments Gateway",link:"/mstore/multi-payments/"},{title:"Delivery",link:"/mstore/delivery/"}]},{group:"Reference",items:[{title:"Project Structure",link:"/mstore/project-structure/"},{title:"Videos Installing",link:"/mstore/videos/"},{title:"Questions",link:"/mstore/questions/"},{title:"Changelogs",link:"/mstore/changelogs/"}]}]}]},717:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"Reactpage",link:"/reactpage"},{title:"Getting Started",link:"/reactpage/getting-started/"},{title:"Theme Setting",link:"/reactpage/theme-settings/"},{title:"Routing Menu Setting",link:"/reactpage/routing-menu-settings/"}]},{group:"Reference",items:[{title:"Project structure",link:"/reactpage/project-structure/"},{title:"Common Script",link:"/reactpage/common-script/"}]}]}]},718:function(e,t){e.exports=[{groups:[{group:"General",items:[{title:"What is ReactXS?",link:"/reactxs"},{title:"Getting Started",link:"/reactxs/getting-started/"}]},{group:"Customization",items:[{title:"Customization",link:"/reactxs/customization/"},{title:"Project Structure",link:"/reactxs/project-structure/"}]}]}]},719:function(e,t,i){"use strict";var a=i(12),n=i(78)(6),r="findIndex",s=!0;r in[]&&Array(1)[r](function(){s=!1}),a(a.P+a.F*s,"Array",{findIndex:function(e){return n(this,e,arguments.length>1?arguments[1]:void 0)}}),i(37)(r)}}]);
//# sourceMappingURL=component---src-templates-markdown-post-js-334a7e6a49c48285c2d8.js.map