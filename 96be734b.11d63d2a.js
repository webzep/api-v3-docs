(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{119:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var p=r.a.createContext({}),l=function(e){var t=r.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(p.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),d=l(n),O=a,j=d["".concat(c,".").concat(O)]||d[O]||s[O]||i;return n?r.a.createElement(j,b(b({ref:t},p),{},{components:n})):r.a.createElement(j,b({ref:t},p))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=O;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,c[1]=b;for(var p=2;p<i;p++)c[p]=n[p];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,n)}O.displayName="MDXCreateElement"},97:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return b})),n.d(t,"toc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),i=(n(0),n(119)),c={id:"add-ons",title:"SkyCiv Add-ons"},b={unversionedId:"add-ons",id:"add-ons",isDocsHomePage:!1,title:"SkyCiv Add-ons",description:"Build your own add-ons and apps directly on top of SkyCiv Structural 3D.",source:"@site/docs/apps-add-ons.md",slug:"/add-ons",permalink:"/api/v3/docs/add-ons",version:"current",sidebar:"someSidebar",previous:{title:"Load Generator",permalink:"/api/v3/docs/loads"},next:{title:"S3D Functions",permalink:"/api/v3/docs/s3d-functions"}},o=[{value:"Getting Started",id:"getting-started",children:[{value:"Initialising Options",id:"initialising-options",children:[]},{value:"Core Functions",id:"core-functions",children:[]},{value:"What&#39;s next?",id:"whats-next",children:[]}]}],p={toc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(i.b)("wrapper",Object(a.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"Build your own add-ons and apps directly on top of SkyCiv Structural 3D."),Object(i.b)("img",{src:"https://skyciv.com/wp-content/uploads/2019/11/bill-of-materials-structural-analysis-software.png"}),Object(i.b)("center",null,Object(i.b)("i",null,"SkyCiv Bill of Materials App is an example of a SkyCiv Addon")),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"To get started, simply open up SkyCiv Structural 3D. Then open your developer console by hitting CTRL+SHIFT+J (this may depend on your browser) and pasting the below code. This will install a sample app, you can continually copy and paste code into the Console"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'\n    jQuery(document).ready(function() { // put code in closure so it doesn\'t affect other things\n\n        // This puts the app into SKYCIV_APPS.newApp\n        new SKYCIV_APPS.create({\n            id: "newApp", // must be unique\n            name: "My Custom App",\n            width: "600px",\n            height: "600px",\n            icon_img: \'https://platform.skyciv.com/storage/images/logos/light/square-1.png\',\n            icon_img_square: \'https://platform.skyciv.com/storage/images/logos/light/square-1.png\',\n            draggable: true,\n            content: \'<p>HEY</p>\',\n            onInit: function() { // this is called when the page loads the app\n                console.log("App has been initalised");\n            },\n            onFirstOpen: function() { // this is called the first time the app is actually opened\n                \n            },\n        });\n\n        // Can bind new functions to it\n        SKYCIV_APPS.newApp.myFun = function() {\n\n        };\n\n        //initialize\n        SKYCIV_APPS.newApp.init();\n    });\n\n')),Object(i.b)("h3",{id:"initialising-options"},"Initialising Options"),Object(i.b)("table",null,Object(i.b)("thead",{parentName:"table"},Object(i.b)("tr",{parentName:"thead"},Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(i.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(i.b)("tbody",{parentName:"table"},Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"id*"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"File name of your model")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"name*"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Path in your cloud file storage")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"content*"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"HTML string of what should be displayed in the app")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"width"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Optional width setting for app window")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"height"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Optional height setting for app window")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"icon_img"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"URL of image to be used")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"icon_img_square"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"URL of image to be used within the app header")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"draggable"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Is the app window draggable. True by default.")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"resizable"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"bool")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Can user resize window? Used alongside resizeableFunction to update")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"resizeableFunction"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function which runs when the app window is resized")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"help_url"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"string")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"URL of documentation or help page")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onInit"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function which runs when the page loads the app")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onFirstOpen"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Runs when the app is open for the first time")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"onSoftwareUpdate"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Function to run after changes are made to your model in S3D. E.g. Bill of Materials App re-calculates cost when a member is added/deleted")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"beforeShow"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Before the app is shown, run this function")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"aferShow"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"After the app is shown, run this function")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"beforeHide"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Before the app is hidden, run this function")),Object(i.b)("tr",{parentName:"tbody"},Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"aferHide"),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(i.b)("inlineCode",{parentName:"td"},"function")),Object(i.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"After the app is hidden, run this function")))),Object(i.b)("h3",{id:"core-functions"},"Core Functions"),Object(i.b)("p",null,"Once your app is initalized, you can call the following functions to make the most of your app. SKYCIV_APPS.create() will create the app and add it to SKYCIV_APPS as an object. You can then access all of the default and user defined functions for this app."),Object(i.b)("p",null,"In the above example, we created an app. We now have access to the following functions from the console:"),Object(i.b)("pre",null,Object(i.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"    SKYCIV_APPS.newApp.show(); //shows the app window\n\n    SKYCIV_APPS.newApp.hide(); //hides the app window\n\n    SKYCIV_APPS.newApp.init(); //initialises the app. Must be run after creating the app\n\n    SKYCIV_APPS.newApp.getContainer(); //return the window as a jQuery element\n\n    SKYCIV_APPS.newApp.hasBeenOpened(); //returns true or false\n\n    SKYCIV_APPS.newApp.isOpen(); //returns true or false\n\n    SKYCIV_APPS.newApp.myFun(); //calling a custom function we wrote\n\n")),Object(i.b)("h3",{id:"whats-next"},"What's next?"),Object(i.b)("p",null,"Once you've built and tested your app, email us at ",Object(i.b)("a",Object(a.a)({parentName:"p"},{href:"mailto:support@skyciv.com"}),"support@skyciv.com")," to learn more about getting this installed on our platform for internal or public use!"))}l.isMDXComponent=!0}}]);