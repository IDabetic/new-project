"use strict";(()=>{var e={};e.id=660,e.ids=[660],e.modules={44753:(e,t,s)=>{s.d(t,{h:()=>a,T:()=>r,NC_SITE_SETTINGS:()=>i});let o=JSON.parse('{"version":"0.1.1","mailpoet_api_key":"your_mailpoet_api_key","mailpoet_list_id":"3","subcription_widget":{"enable":true,"title":"Stay up to date","description":"Get notified when I publish something new, and unsubscribe at any time.","placeholder":"Enter your email address","success_message":"Thank you for subscribing. You\'re in!","error_message":"Something went wrong. Please try again. If the problem persists, you can contact me."},"newsletter_section":{"enable":true,"title":"Join our newsletter \uD83C\uDF89","description":"Read and share new perspectives on just about any topic. Everyone’s welcome.","right_image":"/images/SVG-subcribe2.png","features_list":["Create a free account.","Write your stories."]},"top_banner":{"enable":true,"description":"-50% Intro price for the next 72 hours only!.","end_link":{"url":"#","text":"Buy now  →","new_tab":false}},"top_category_section":{"enable":true,"title":"Discover top 10 categories","sub_title":"Let\'s explore the most popular categories"},"site_info":{"site_title":"Ncmaz Nextjs Blog","site_description":"Ncmaz Nextjs Blog headless WordPress","site_keywords":"Ncmaz Nextjs Blog","site_author":"ChisNghiax","site_email":"Your Email","site_phone":"Your Phone","site_address":"Your Address","site_city":"Your City","site_state":"Your State","site_zip":"Your Zip","site_country":"Your Country","site_url":"https://www.yoursite.com","site_logo":"/logo.png","site_logo_light":"/logo-light.png","site_favicon":"/favicon.png"},"site_socials":[{"name":"facebook","url":"https://www.facebook.com/yourfacebookpage","icon":"/images/socials/facebook.svg","description":"Follow us on Facebook"},{"name":"twitter","url":"https://twitter.com/yourtwitterpage","icon":"/images/socials/x-twitter.svg","description":"Follow us on Twitter"},{"name":"github","url":"https://www.github.com/yourmediumpage","icon":"/images/socials/github.svg","description":"Follow us on Github"},{"name":"tiktok","url":"https://www.tiktok.com/yourtiktokpage","icon":"/images/socials/tiktok.svg","description":"Follow us on Tiktok"}],"site_footer":{"all_rights_reserved_text":"\xa9 2023 ChisNghiax Company, Inc. All rights reserved."},"submissions-settings":{"enable":true,"max_categories_allowed":3,"max_tags_allowed":5},"signUp_page":{"title":"Create an account","sub_title":"Enter your email below to create your account.","blockquote":{"text":"This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.","author":"Sofia Davis"}},"signIn_page":{"title":"Sign in to your account","sub_title":"Enter your email below to sign in to your account.","blockquote":{"text":"This library has saved me countless hours of work and helped me deliver stunning designs to my clients faster than ever before.","author":"Sofia Davis"},"lost_password":{"is_use_lostpassword_default_of_wp":false,"message":"Lost password not implemented yet! Please contact admmin for support.","url_lostpassword_default_of_wp":"https://yourwebsite.com/wp-login.php?action=lostpassword"}},"mobile_nav_sidebar":{"description":"Discover the most outstanding articles on all topics of life. Write your stories and share them with the community. "},"help_page":{"uri":"/helps","title":"Helps","sub_title":"Read and share new perspectives on just about any topic. Everyone’s welcome."},"document_page":{"uri":"/documents","title":"Documents","sub_title":"Read and share new perspectives on just about any topic. Everyone’s welcome."},"cookies_policy_page":{"uri":"#"},"empty_state":{"title":"No results found.","description":"We couldn’t find any results. Try for something else."}}'),i=o,r=!1,a="true"===process.env.NEXT_PUBLIC_IS_CHISNGHIAX_DEMO_SITE},56574:(e,t,s)=>{s.r(t),s.d(t,{default:()=>Document});var o=s(20997),i=s(44753),r=s(56859),a=s.n(r);let n="http://localhost:3000/",l=i.NC_SITE_SETTINGS.site_info.site_title;function c(e){return`${e}?v=4`}class Document extends a(){static async getInitialProps(e){let t=await a().getInitialProps(e);return{...t}}render(){return(0,o.jsxs)(r.Html,{lang:"en",className:"dark [--scroll-mt:9.875rem] lg:[--scroll-mt:6.3125rem]",dir:"ltr",children:[(0,o.jsxs)(r.Head,{children:[o.jsx("link",{href:`${n}/api/feeds/feed.json`,rel:"alternate",type:"application/feed+json",title:l+" JSON Feed"}),o.jsx("link",{href:`${n}/api/feeds/rss.xml`,rel:"alternate",type:"application/rss+xml",title:l+" XML Feed"}),o.jsx("link",{href:`${n}/api/feeds/feed.atom`,rel:"alternate",type:"application/atom+xml",title:l+" Atom Feed"}),o.jsx("link",{rel:"apple-touch-icon",sizes:"180x180",href:c("/favicons/apple-touch-icon.png")}),o.jsx("link",{rel:"icon",type:"image/png",sizes:"32x32",href:c("/favicons/favicon-32x32.png")}),o.jsx("link",{rel:"icon",type:"image/png",sizes:"16x16",href:c("/favicons/favicon-16x16.png")}),o.jsx("link",{rel:"manifest",href:c("/favicons/site.webmanifest")}),o.jsx("link",{rel:"mask-icon",href:c("/favicons/safari-pinned-tab.svg"),color:"#38bdf8"}),o.jsx("link",{rel:"shortcut icon",href:c("/favicons/favicon.ico")}),o.jsx("meta",{name:"apple-mobile-web-app-title",content:"Ncmaz Nextjs"}),o.jsx("meta",{name:"application-name",content:"Ncmaz Nextjs"}),o.jsx("meta",{name:"theme-color",content:"#172A53"}),o.jsx("script",{dangerouslySetInnerHTML:{__html:`
                  try {
                    if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                      document.documentElement.classList.add('dark')
                    } else {
                      document.documentElement.classList.remove('dark')
                    }
                  } catch (_) {}
                `}}),o.jsx("script",{dangerouslySetInnerHTML:{__html:`
                  try {
                    if (localStorage.dismiss_top_banner === 'true' ) {
                      document.documentElement.classList.add('dismiss_top_banner')
                    } else {
                      document.documentElement.classList.remove('dismiss_top_banner')
                    }
                  } catch (_) {}
                `}})]}),(0,o.jsxs)("body",{className:"relative bg-white text-base dark:bg-neutral-900/95 text-neutral-900 dark:text-neutral-100",children:[o.jsx(r.Main,{}),o.jsx(r.NextScript,{})]})]})}}},62785:e=>{e.exports=require("next/dist/compiled/next-server/pages.runtime.prod.js")},16689:e=>{e.exports=require("react")},20997:e=>{e.exports=require("react/jsx-runtime")},71017:e=>{e.exports=require("path")}};var t=require("../webpack-runtime.js");t.C(e);var s=e=>t(t.s=e),o=t.X(0,[2562,6859],()=>s(56574));module.exports=o})();