(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{160:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(163),l=(a(172),a(56),function(e){var t=e.post,a=e.section,n=e.title,r=e.children,s=e.to,l=e.className;t&&t.slug;n=t?t.title:n;var m=t?t.excerpt.length>200?t.excerpt.substring(0,200)+"...":t.excerpt:r;return i.a.createElement("span",{className:l},i.a.createElement("h4",{className:o.a.excerpt+" link darkgrey fw5"},n),m&&i.a.createElement("p",{className:o.a.small+" ma0 f8 lh-copy middarkgrey mb6"},m))});l.defaultProps={className:"f5 db tdn mb6 faq-question bb b--whitegrey",section:"faq"},l.propTypes={post:s.a.shape({title:s.a.string,slug:s.a.string,excerpt:s.a.string}),section:s.a.string.isRequired,title:s.a.string,children:s.a.node,to:s.a.string,className:s.a.string};var m=l,c=a(195),p=a(175);a.d(t,"pageQuery",function(){return g});var d=function(e){var t=e.data,a=e.location,n=Object(p.b)("faq");return i.a.createElement(i.a.Fragment,null,i.a.createElement(p.a,{data:t,location:a,type:"website",title:"FAQ - Ghost",description:"Answers to our most popular questions: billing, hosting, troubleshooting and more.",image:n}),i.a.createElement(c.a,{headerDividerStyle:"shadow"},i.a.createElement("div",{className:"bg-faq bb b--whitegrey"},i.a.createElement("div",{className:o.a.page.xl+" pt-vw7 pt-vw1-ns pb-vw1"},i.a.createElement("h1",{className:o.a.h4+" white"},"Frequently Asked Questions"))),i.a.createElement("div",{className:o.a.page.xl+" grid-12"},i.a.createElement("div",{className:"bg-white shadow-2 br4 mt5 mt10-ns pa5 pa15-ns pt10-ns pb12-ns col-12 col-8-ns"},i.a.createElement(m,{title:"Does it include full source code package?"},"Yes, you will get the full source code package and also the free Wordpress plugins"),i.a.createElement(m,{to:"/faq/forgot-password/",title:" Can I release the app to both iOS and Android?"},"Yes, as this is made by React Native framework which upport to release for both iOS and Android"),i.a.createElement(m,{to:"/faq/using-the-editor/",title:"Will i get the free upgrade on next comming version"},"Yes you will get the free upgrade with more awesome features coming, please follow the change logs to see the detail update. You will get the notify email for new version update on stores.")))))};d.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired};t.default=d;var g="4184764753"},175:function(e,t,a){"use strict";var n=a(0),i=a.n(n),r=a(1),s=a.n(r),o=a(168),l=a.n(o),m=(a(169),a(162)),c=a.n(m),p=a(165),d=a.n(p),g=a(210),u=(a(211),function(e,t){var a=[];return t?a.push(e.website?e.website:null,e.twitter?"https://twitter.com/"+d.a.trimStart(e.twitter,"@")+"/":null,e.facebook?"https://www.facebook.com/"+e.facebook+"/":null):a.push("https://ghost.org/","https://twitter.com/ghost/","https://www.facebook.com/ghost/"),a=d.a.compact(a),{name:t?e.name:"Ghost",sameAsArray:a.length?'["'+d.a.join(a,'", "')+'"]':null,image:t?e.profile_image:null}});u.defaultProps={fetchAuthorData:!1},u.PropTypes={primaryAuthor:s.a.shape({name:s.a.string.isRequired,profile_image:s.a.string,website:s.a.string,twitter:s.a.string,facebook:s.a.string}).isRequired,fetchAuthorData:s.a.bool.isRequired};var h=u,w=function(e){var t=e.image;return i.a.createElement(c.a,null,i.a.createElement("meta",{name:"twitter:card",content:"summary_large_image"}),i.a.createElement("meta",{name:"twitter:image",content:t}),i.a.createElement("meta",{property:"og:image",content:t}),i.a.createElement("meta",{property:"og:image:width",content:"1000"}),i.a.createElement("meta",{property:"og:image:height",content:"523"}))};w.propTypes={image:s.a.string.isRequired};var y=w,E=function(e){var t=e.data,a=e.canonical,n=e.fetchAuthorData,r=e.title,s=e.overwriteDefaultImage,o=e.image,l=t.ghostPost,m=t.site.siteMetadata,p=h(l.primary_author,n),u=d.a.map(Object(g.a)(l,{visibility:"public",fn:function(e){return e}}),"name"),w=u[0]||{name:"General",slug:"general"},E=s&&l.feature_image?l.feature_image:o;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,l.meta_title||r||l.title),i.a.createElement("meta",{name:"description",content:l.meta_description||l.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:m.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:l.og_title||r||l.meta_title||l.title}),i.a.createElement("meta",{name:"og:description",content:l.og_description||l.excerpt||l.meta_description}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:l.published_at}),i.a.createElement("meta",{property:"article:modified_time",content:l.updated_at}),u.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}),i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:l.twitter_title||r||l.meta_title||l.title}),i.a.createElement("meta",{name:"twitter:description",content:l.twitter_description||l.excerpt||l.meta_description}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:label1",content:"Written by"}),i.a.createElement("meta",{name:"twitter:data1",content:p.name}),i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}),i.a.createElement("meta",{name:"twitter:data2",content:w}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "'+p.name+'",\n                            '+(p.image?p.sameAsArray?'"image": "'+p.image+'",':'"image": "'+p.image+'"':"")+"\n                            "+(p.sameAsArray?'"sameAs": '+p.sameAsArray:"")+"\n                        },\n                        "+(u.length?'"keywords": "'+d.a.join(u,", ")+'",':"")+'\n                        "headline": "'+(l.meta_title||r||l.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+l.published_at+'",\n                        "dateModified": "'+l.updated_at+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+E+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(l.meta_description||l.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+m.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:E}))};E.defaultProps={fetchAuthorData:!1},E.propTypes={data:s.a.shape({ghostPost:s.a.shape({title:s.a.string.isRequired,published_at:s.a.string.isRequired,updated_at:s.a.string.isRequired,excerpt:s.a.string.isRequired,meta_title:s.a.string,meta_description:s.a.string,primary_author:s.a.object.isRequired,feature_image:s.a.string,tags:s.a.arrayOf(s.a.shape({name:s.a.string,slug:s.a.string,visibility:s.a.string})),primaryTag:s.a.shape({name:s.a.string}),og_title:s.a.string,og_description:s.a.string,twitter_title:s.a.string,twitter_description:s.a.string}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,image:s.a.string.isRequired,fetchAuthorData:s.a.bool,title:s.a.string,overwriteDefaultImage:s.a.bool};var f=E,b=function(e){var t=e.data,a=e.canonical,n=t.markdownRemark,r=n.frontmatter,s=t.site.siteMetadata,o=r.date?new Date(r.date).toISOString():new Date("2018-10-15").toISOString(),l=r.keywords&&r.keywords.length?r.keywords[0]:null,m=D();return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,r.meta_title||r.title),i.a.createElement("meta",{name:"description",content:r.meta_description||n.excerpt}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:s.title}),i.a.createElement("meta",{name:"og:type",content:"article"}),i.a.createElement("meta",{name:"og:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"og:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{property:"article:published_time",content:o}),r.keywords&&r.keywords.length?r.keywords.map(function(e,t){return i.a.createElement("meta",{property:"article:tag",content:e,key:t})}):null,i.a.createElement("meta",{property:"article:author",content:"https://www.facebook.com/ghost/"}),i.a.createElement("meta",{name:"twitter:title",content:r.meta_title||r.title}),i.a.createElement("meta",{name:"twitter:description",content:r.meta_description||n.excerpt}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter.label1",content:"Reading time"}),i.a.createElement("meta",{name:"twitter:data1",content:n.timeToRead+" min read"}),l?i.a.createElement("meta",{name:"twitter:label2",content:"Filed under"}):null,l?i.a.createElement("meta",{name:"twitter:data2",content:l}):null,i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("meta",{name:"twitter:creator",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": "Article",\n                        "author": {\n                            "@type": "Person",\n                            "name": "Ghost",\n                            "sameAs": [\n                                "https://ghost.org/",\n                                "https://www.facebook.com/ghost/",\n                                "https://twitter.com/tryghost/"\n                            ]\n                        },\n                        '+(r.keywords&&r.keywords.length?'"keywords": "'+d.a.join(r.keywords,", ")+'",':"")+'\n                        "headline": "'+(r.meta_title||r.title)+'",\n                        "url": "'+a+'",\n                        "datePublished": "'+o+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+m+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "description": "'+(r.meta_description||n.excerpt)+'",\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+s.siteUrl+'"\n                        }\n                    }\n                ')),i.a.createElement(y,{image:m}))};b.propTypes={data:s.a.shape({markdownRemark:s.a.shape({frontmatter:s.a.shape({title:s.a.string.isRequired,keywords:s.a.arrayOf(s.a.string),meta_title:s.a.string,meta_description:s.a.string,date:s.a.string}).isRequired,excerpt:s.a.string.isRequired,timeToRead:s.a.number}).isRequired,site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired};var q=b,R=function(e){var t=e.data,a=e.canonical,n=e.title,r=e.description,s=e.image,o=e.type;return i.a.createElement(i.a.Fragment,null,i.a.createElement(c.a,null,i.a.createElement("title",null,n),i.a.createElement("meta",{name:"description",content:r}),i.a.createElement("link",{rel:"canonical",href:a}),i.a.createElement("meta",{property:"og:site_name",content:t.site.siteMetadata.title}),i.a.createElement("meta",{property:"og:type",content:"website"}),i.a.createElement("meta",{property:"og:title",content:n}),i.a.createElement("meta",{property:"og:description",content:r}),i.a.createElement("meta",{property:"og:url",content:a}),i.a.createElement("meta",{name:"twitter:title",content:n}),i.a.createElement("meta",{name:"twitter:description",content:r}),i.a.createElement("meta",{name:"twitter:url",content:a}),i.a.createElement("meta",{name:"twitter:site",content:"@tryghost"}),i.a.createElement("script",{type:"application/ld+json"},'\n                    {\n                        "@context": "https://schema.org/",\n                        "@type": '+(o&&"series"===o?'"Series"':'"WebSite"')+',\n                        "url": "'+a+'",\n                        "image": {\n                            "@type": "ImageObject",\n                            "url": "'+s+'",\n                            "width": 1000,\n                            "height": 563\n                        },\n                        "mainEntityOfPage": {\n                            "@type": "WebPage",\n                            "@id": "'+t.site.siteMetadata.siteUrl+'"\n                        },\n                        "description": "'+r+'"\n                    }\n                ')),i.a.createElement(y,{image:s}))};R.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired}).isRequired}).isRequired}).isRequired,canonical:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired,image:s.a.string.isRequired,type:s.a.oneOf(["website","series"]).isRequired};var _=R,v=function(e){var t=e.data,a=e.type,n=e.title,r=e.description,s=e.image,o=e.fetchAuthorData,m=e.overwriteDefaultImage,c=e.location,p=t||{},d=p.ghostPost,g=p.markdownRemark,u=t.site.siteMetadata,h=l.a.resolve(u.siteUrl,c.pathname,"/");if("article"===a){if(d)return i.a.createElement(f,{data:t,canonical:h,fetchAuthorData:o,title:n,image:s,overwriteDefaultImage:m});if(g)return i.a.createElement(q,{data:t,canonical:h})}else if("website"===a||"series"===a)return i.a.createElement(_,{data:t,canonical:h,title:n,description:r,image:s,type:a});return null};v.propTypes={data:s.a.shape({site:s.a.shape({siteMetadata:s.a.shape({siteUrl:s.a.string.isRequired,title:s.a.string.isRequired,description:s.a.string.isRequired}).isRequired}).isRequired,ghostPost:s.a.object,markdownRemark:s.a.object}).isRequired,location:s.a.shape({pathname:s.a.string.isRequired}).isRequired,type:s.a.oneOf(["website","series","article"]).isRequired,title:s.a.string,description:s.a.string,image:s.a.string,fetchAuthorData:s.a.bool,overwriteDefaultImage:s.a.bool};var k=v,A="http://ghost.local:8000",x={faq:l.a.resolve(A,"/images/meta/Ghost-FAQ.jpg"),integrations:l.a.resolve(A,"/images/meta/Ghost-Integrations.jpg"),tutorials:l.a.resolve(A,"/images/meta/Ghost-Tutorials.jpg"),default:l.a.resolve(A,"/images/meta/Ghost-Docs.jpg")},j=function(e){return x[e=e||"default"]};j.proptypes={section:s.a.string.isRequired};var D=j;a.d(t,"a",function(){return k}),a.d(t,"b",function(){return D})}}]);
//# sourceMappingURL=component---src-pages-faq-js-e91867464dc5467a4ac4.js.map