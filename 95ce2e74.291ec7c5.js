(window.webpackJsonp=window.webpackJsonp||[]).push([[23],{119:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return O}));var n=a(0),i=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function c(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,i=function(e,t){if(null==e)return{};var a,n,i={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(i[a]=e[a]);return i}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(i[a]=e[a])}return i}var l=i.a.createContext({}),s=function(e){var t=i.a.useContext(l),a=t;return e&&(a="function"==typeof e?e(t):c(c({},t),e)),a},p=function(e){var t=s(e.components);return i.a.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},j=i.a.forwardRef((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,r=e.parentName,l=o(e,["components","mdxType","originalType","parentName"]),p=s(a),j=n,O=p["".concat(r,".").concat(j)]||p[j]||d[j]||b;return a?i.a.createElement(O,c(c({ref:t},l),{},{components:a})):i.a.createElement(O,c({ref:t},l))}));function O(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,r=new Array(b);r[0]=j;var c={};for(var o in t)hasOwnProperty.call(t,o)&&(c[o]=t[o]);c.originalType=e,c.mdxType="string"==typeof e?e:n,r[1]=c;for(var l=2;l<b;l++)r[l]=a[l];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,a)}j.displayName="MDXCreateElement"},96:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return r})),a.d(t,"metadata",(function(){return c})),a.d(t,"toc",(function(){return o})),a.d(t,"default",(function(){return s}));var n=a(3),i=a(7),b=(a(0),a(119)),r={id:"the-request-object",title:"The Request Object",sidebar_label:"The Request Object"},c={unversionedId:"the-request-object",id:"the-request-object",isDocsHomePage:!1,title:"The Request Object",description:"Basic Usage",source:"@site/docs/getting-started-the-request-object.md",slug:"/the-request-object",permalink:"/api/v3/docs/the-request-object",version:"current",sidebar_label:"The Request Object",sidebar:"someSidebar",previous:{title:"Overview",permalink:"/api/v3/docs/getting-started"},next:{title:"API Credits",permalink:"/api/v3/docs/api-calls"}},o=[{value:"Basic Usage",id:"basic-usage",children:[]},{value:"<code>auth</code>",id:"auth",children:[{value:"<code>username</code> (required)",id:"username-required",children:[]},{value:"<code>key</code> (optional)",id:"key-optional",children:[]},{value:"<code>session_id</code> (optional)",id:"session_id-optional",children:[]}]},{value:"<code>options</code>",id:"options",children:[{value:"<code>validate_input</code> (optional)",id:"validate_input-optional",children:[]},{value:"<code>response_data_only</code> (optional)",id:"response_data_only-optional",children:[]}]},{value:"<code>functions</code>",id:"functions",children:[{value:"Session",id:"session",children:[]},{value:"Model",id:"model",children:[]},{value:"Results",id:"results",children:[]},{value:"Design",id:"design",children:[]},{value:"Section builder",id:"section-builder",children:[]},{value:"File management",id:"file-management",children:[]}]}],l={toc:o};function s(e){var t=e.components,a=Object(i.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},l,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("h2",{id:"basic-usage"},"Basic Usage"),Object(b.b)("p",null,"The JSON object that is sent to the API is comprised of three components: "),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#auth"}),Object(b.b)("inlineCode",{parentName:"a"},"auth"))," ",Object(b.b)("strong",{parentName:"p"},"[required]"),": An ",Object(b.b)("inlineCode",{parentName:"p"},"object")," used to identify the user.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#options"}),Object(b.b)("inlineCode",{parentName:"a"},"options"))," ",Object(b.b)("strong",{parentName:"p"},"[optional]"),": An ",Object(b.b)("inlineCode",{parentName:"p"},"object")," used to set certain behaviours of the request.")),Object(b.b)("li",{parentName:"ul"},Object(b.b)("p",{parentName:"li"},Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#functions"}),Object(b.b)("inlineCode",{parentName:"a"},"functions"))," ",Object(b.b)("strong",{parentName:"p"},"[required]"),": An ",Object(b.b)("inlineCode",{parentName:"p"},"array")," of objects defining a sequence of functions you would like to run."))),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n   "auth": {\n      "username": "YOUR_SKYCIV_USERNAME",\n      "key": "YOUR_SKYCIV_API_KEY"\n   },\n   "options": {\n       "validate_input": true\n   },\n   "functions": [\n      {\n         "function": "S3D.session.start",\n         "arguments": {\n            "keep_open": false\n         }\n      },\n      {\n         "function": "S3D.model.set",\n         "arguments": {\n            "s3d_model": MODEL_OBJECT\n         }\n      },\n      {\n         "function": "S3D.model.solve",\n         "arguments": {\n            "analysis_type": "nonlinear",\n            "repair_model": true\n         }\n      }\n   ]\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"auth"},Object(b.b)("inlineCode",{parentName:"h2"},"auth")),Object(b.b)("p",null,"The JSON object that is sent to the API must contain the ",Object(b.b)("inlineCode",{parentName:"p"},"auth")," key at the top level of the object. The ",Object(b.b)("inlineCode",{parentName:"p"},"auth")," object takes the following properties:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#username-required"}),Object(b.b)("inlineCode",{parentName:"a"},"username"))," (required)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Your SkyCiv username used to sign into the platform.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#key-optional"}),Object(b.b)("inlineCode",{parentName:"a"},"key"))," (optional)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Your SkyCiv API key from the ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"https://platform.skyciv.com/account/api"}),"account settings")," page.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#session_id-optional"}),Object(b.b)("inlineCode",{parentName:"a"},"session_id"))," (optional)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The ",Object(b.b)("inlineCode",{parentName:"td"},"session_id")," provided in the response from the first call to the API. Providing this ",Object(b.b)("inlineCode",{parentName:"td"},"session_id")," in lieu of ",Object(b.b)("inlineCode",{parentName:"td"},"key")," will allow you to skip the verification process for subsequent calls within 30 minutes of the first call.")))),Object(b.b)("p",null,"The initial call object:"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "auth": {\n        "username": "YOUR_SKYCIV_USERNAME",\n        "key": "YOUR_API_KEY"\n    }\n    // ...other components\n}\n')),Object(b.b)("p",null,"Subsequent calls object (within 30 mins of making the initial call):"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "auth": {\n        "username": "YOUR_SKYCIV_USERNAME",\n        "session_id": "SESSION_ID_FROM_FIRST_API_CALL"\n    }\n    // ...other components\n}\n')),Object(b.b)("h3",{id:"username-required"},Object(b.b)("inlineCode",{parentName:"h3"},"username")," (required)"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"username")," property should have a string value of your SkyCiv username."),Object(b.b)("h3",{id:"key-optional"},Object(b.b)("inlineCode",{parentName:"h3"},"key")," (optional)"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"key")," property should contain a string value of your SkyCiv API key. This can be obtained from the ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://platform.skyciv.com/account/api"}),"account settings")," page. If this is not provided, then ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#session_id-optional"}),Object(b.b)("inlineCode",{parentName:"a"},"session_id"))," is required."),Object(b.b)("h3",{id:"session_id-optional"},Object(b.b)("inlineCode",{parentName:"h3"},"session_id")," (optional)"),Object(b.b)("p",null,"Providing the ",Object(b.b)("inlineCode",{parentName:"p"},"session_id")," property in lieu of ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"#key-optional"}),Object(b.b)("inlineCode",{parentName:"a"},"key"))," will allow you to skip the verification process for subsequent calls within 30 minutes of the first call. If the ",Object(b.b)("inlineCode",{parentName:"p"},"session_id")," property is not provided, you must provide ",Object(b.b)("inlineCode",{parentName:"p"},"key"),"."),Object(b.b)("p",null,"When using the ",Object(b.b)("inlineCode",{parentName:"p"},"S3D.session.start")," function, you can opt to keep your session open by setting the ",Object(b.b)("inlineCode",{parentName:"p"},"keep_open")," property to ",Object(b.b)("inlineCode",{parentName:"p"},"true"),". This means that after you run a batch of functions, you can keep the session open for 30 minutes. This allows you to re-visit the session without having to re-authenticate therefore increasing the speed of subsequent calls."),Object(b.b)("p",null,"If you set the ",Object(b.b)("inlineCode",{parentName:"p"},"keep_open")," property to ",Object(b.b)("inlineCode",{parentName:"p"},"true"),", the API will return a ",Object(b.b)("inlineCode",{parentName:"p"},"last_session_id")," that you can use for the next authentication. The code block below shows the response from the initial call containing the ",Object(b.b)("inlineCode",{parentName:"p"},"last_session_id"),":"),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "response": {\n        "data": {},\n        "msg": "Solved Successfully!",\n        "comments": " Linear Static Analysis Completed ",\n        "status": 0,\n        "function": "S3D.model.solve",\n        "last_session_id": "esz8ITRreJoaQsm6GRebHhxz9xg3qYhXDl6cTy88CLEdQolVcgpbf8bp7dCiuk99_2",\n        "monthly_api_credits": { "quota": 500, "total_used": 113, "used_this_call": 1 }\n    },\n    "functions": []\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"options"},Object(b.b)("inlineCode",{parentName:"h2"},"options")),Object(b.b)("p",null,"The options property allows you to provide an object which specifies certain behaviours of the request. The options object accepts the following values:"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#validate_input-optional"}),Object(b.b)("inlineCode",{parentName:"a"},"validate_input"))," (optional)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Verify the model input with SkyCiv's built in model validator."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#response_data_only-optional"}),Object(b.b)("inlineCode",{parentName:"a"},"response_data_only"))," (optional)"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Only respond with data from the last function specified in the ",Object(b.b)("a",Object(n.a)({parentName:"td"},{href:"#functions"}),Object(b.b)("inlineCode",{parentName:"a"},"functions"))," array."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("h3",{id:"validate_input-optional"},Object(b.b)("inlineCode",{parentName:"h3"},"validate_input")," (optional)"),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"validate_input")," property indicates if your input should be verified. If ",Object(b.b)("inlineCode",{parentName:"p"},"true")," is provided, a fast and descriptive response will be returned if there is any issues with the input. It is recommended to omit this key unless confident."),Object(b.b)("h3",{id:"response_data_only-optional"},Object(b.b)("inlineCode",{parentName:"h3"},"response_data_only")," (optional)"),Object(b.b)("p",null,"The API response contains the following components:"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"response")," (object) - Contains the data from the final function and some other useful information."),Object(b.b)("li",{parentName:"ul"},Object(b.b)("inlineCode",{parentName:"li"},"functions")," (array) - Each object in this array provides results for the respective function.")),Object(b.b)("p",null,"To keep the response size down, you can set ",Object(b.b)("inlineCode",{parentName:"p"},"response_data_only")," to ",Object(b.b)("inlineCode",{parentName:"p"},"true"),". This means you will ",Object(b.b)("strong",{parentName:"p"},Object(b.b)("em",{parentName:"strong"},"only"))," receive the response object. This will contain the ",Object(b.b)("inlineCode",{parentName:"p"},"data")," from the last function called. ",Object(b.b)("inlineCode",{parentName:"p"},"response_data_only")," defaults to ",Object(b.b)("inlineCode",{parentName:"p"},"false"),"."),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"functions"},Object(b.b)("inlineCode",{parentName:"h2"},"functions")),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"functions")," property takes an ",Object(b.b)("inlineCode",{parentName:"p"},"array")," of objects - each object defines a function to be executed. The functions should be in order of desired execution. "),Object(b.b)("h4",{id:"common-arguments"},"Common arguments"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"return_data")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Omits data object from the response for the respective function."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"false"))))),Object(b.b)("br",null),Object(b.b)("p",null,"The following is a list of available functions:"),Object(b.b)("h3",{id:"session"},"Session"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.session"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.session.start")))),Object(b.b)("h3",{id:"model"},"Model"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelset"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.set"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelget"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.get"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelrepair"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.repair"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelsolve"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.solve"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodeltakescreenshot"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.takeScreenshot"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelmesh"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.mesh")))),Object(b.b)("h3",{id:"results"},"Results"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.results#s3dresultsset"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.results.set"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.results#s3dresultsget"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.results.get"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.results#s3dresultsfetchmemberresult"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.results.fetchMemberResult"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.results#s3dresultsgetanalysisreport"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.results.getAnalysisReport"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.results#s3dmodeltakescreenshot"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.takeScreenshot")))),Object(b.b)("h3",{id:"design"},"Design"),Object(b.b)("h4",{id:"standard-member-design"},"Standard member design"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#s3ddesignmembergetinput"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.design.member.getInput"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#s3ddesignmembercheck"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.design.member.check"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#s3ddesignmemberoptimize"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.design.member.optimize"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#standalonemembercheck"}),Object(b.b)("inlineCode",{parentName:"a"},"standalone.member.check")))),Object(b.b)("h4",{id:"reinforced-concrete-design"},"Reinforced concrete design"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#s3ddesignrcgetinput"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.design.rc.getInput"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#s3ddesignrccheck"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.design.rc.check"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.design#custom-sections"}),"Custom sections"))),Object(b.b)("h3",{id:"section-builder"},"Section builder"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.SB#s3dsbloadlibraryshape"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.loadLibraryShape"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.SB#s3dsbgetlibrarytree"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.getLibraryTree"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.SB#s3dsbbuildcustomshape"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.buildCustomShape"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.SB#s3dsbsolve"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.solve"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.SB#s3dsbrungsd"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.SB.runGSD")))),Object(b.b)("h3",{id:"file-management"},"File management"),Object(b.b)("ul",null,Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.file#s3dfilesave"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.file.save"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.file#s3dfileopen"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.file.open"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.file#s3dfileshare"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.file.share"))),Object(b.b)("li",{parentName:"ul"},Object(b.b)("a",Object(n.a)({parentName:"li"},{href:"/api/v3/docs/S3D.file#s3dfilegetfiledirectory"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.file.getFileDirectory")))))}s.isMDXComponent=!0}}]);