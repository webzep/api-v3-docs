(window.webpackJsonp=window.webpackJsonp||[]).push([[42],{110:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return s})),t.d(n,"metadata",(function(){return i})),t.d(n,"rightToc",(function(){return l})),t.d(n,"default",(function(){return u}));var r=t(3),a=t(7),o=(t(0),t(126)),s={id:"sample-renderer",title:"AISC Design Check"},i={unversionedId:"sample-renderer",id:"sample-renderer",isDocsHomePage:!1,title:"AISC Design Check",description:"This tutorial will cover a full example of how to run build a model and run an AISC 360-16 LRFD Steel Design Check.",source:"@site/docs/sample-renderer.md",slug:"/sample-renderer",permalink:"/api/v3/docs/sample-renderer",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/sample-renderer.md",version:"current"},l=[{value:"Page setup",id:"page-setup",children:[]},{value:"API Object",id:"api-object",children:[]},{value:"Calling the API",id:"calling-the-api",children:[]},{value:"API Response",id:"api-response",children:[]}],c={rightToc:l};function u(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},c,t,{components:n,mdxType:"MDXLayout"}),Object(o.b)("p",null,"This tutorial will cover a full example of how to run build a model and run an AISC 360-16 LRFD Steel Design Check."),Object(o.b)("p",null,"This tutorial is based on the following simple example: ",Object(o.b)("a",{href:"/api/v3/html/aisc-check.html"},"download or visit this sample file"),"."),Object(o.b)("h2",{id:"page-setup"},"Page setup"),Object(o.b)("p",null,"Here is an example of a simple beam in the S3D_model context."),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-html"}),'<!DOCTYPE html>\n<html>\n\n    <head>\n        <script src="https://code.jquery.com/jquery-3.4.1.min.js"><\/script>\n        <script src="https://api.skyciv.com/dist/v3/javascript/skyciv.js"><\/script>   \n        <script> /* Below Javascript goes here*/ <\/script> \n    </head>\n\n    <body> \n        <h2>Sample code for S3D.model.set</h2>\n\n        <div id="renderer-container"></div>\n\n    </body>\n\n</html>\n\n')),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"\n\n")),Object(o.b)("h2",{id:"api-object"},"API Object"),Object(o.b)("p",null,"The API Object takes two core pieces of information:"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},"Authentication object"),Object(o.b)("li",{parentName:"ul"},"List of functions - an array of functions to run ",Object(o.b)("inlineCode",{parentName:"li"},"[ {...}, {...}, ... ]"),". In this example we are:",Object(o.b)("ol",{parentName:"li"},Object(o.b)("li",{parentName:"ol"},"Starting a session - using function S3D.session.start"),Object(o.b)("li",{parentName:"ol"},"Setting the model  - using function ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelset"}),"S3D.model.set")," "),Object(o.b)("li",{parentName:"ol"},"Running an analysis - using function ",Object(o.b)("a",Object(r.a)({parentName:"li"},{href:"/api/v3/docs/S3D.model#s3dmodelsolve"}),"S3D.model.solve")," ")))),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"    var model_data = {...}; //your s3d_model\n   \n    var api_object = {\n        auth: {\n            \"username\": YOUR_SKYCIV_USERNAME,\n            \"key\": YOUR_API_TOKEN_KEY\n        },\n        functions: [\n            {\n                'function': 'S3D.session.start', // starting a session\n                'arguments': {}\n            },\n            {\n                'function': 'S3D.model.set', // Setting the model\n                'arguments': {\n                    's3d_model': model_data\n                }\n            },\n            {\n                'function': \"S3D.model.solve\", // Running an analysis\n                'arguments': {\n                    analysis_type: 'nonlinear', //linear, nonlinear, buckling\n                    repair_model: true\n                },\n            }\n        ]\n    }\n")),Object(o.b)("h2",{id:"calling-the-api"},"Calling the API"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'    //can use skyciv resource:\n    skyciv.request(api_object, function (res) {\n        console.log(res); // do something with response\n    })\n\n    //or use jQuery AJAX call\n    $.ajax({\n        url: "https://api.skyciv.com:8085/v3",\n        data: JSON.stringify(api_object),\n        type: "POST",\n        success: function (data) {\n\n            console.log("--- Response ---");\n            console.log(data);\n            var response = data.response;\n\n            jQuery("#status-bar").html(response.msg);\n\n            if (response.status == 0) { //successful\n                jQuery("#output").show().html(JSON.stringify(response.data));\n            }\n        }\n    });\n')),Object(o.b)("h2",{id:"api-response"},"API Response"),Object(o.b)("p",null,"The response will come back with all the results of the structural analysis that was run, in the following format:"),Object(o.b)("pre",null,Object(o.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'\n{\n    response: {\n        data: [...], // analysis results\n        msg: "Solved Successfully",\n        status: 0,\n        session_id: "ttaAi9xJSTPwvfzqFmpEiqAYBtf01e7HA3im8toHo4Vgy7y5Q6EgnBU5fk9yrfMC",\n        monthly_api_credits: {\n            quota: 6000,\n            total_used: 22,\n            used_this_call: 1\n        }\n    },\n    functions: [\n        {...}, //response for S3D.session.start\n        {...}, //response for S3D.model.set\n        {...}  //response for S3D.model.solve\n    ]\n}\n\n\n')))}u.isMDXComponent=!0},126:function(e,n,t){"use strict";t.d(n,"a",(function(){return p})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var c=a.a.createContext({}),u=function(e){var n=a.a.useContext(c),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return a.a.createElement(c.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},b=a.a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,c=l(e,["components","mdxType","originalType","parentName"]),p=u(t),b=r,m=p["".concat(s,".").concat(b)]||p[b]||d[b]||o;return t?a.a.createElement(m,i(i({ref:n},c),{},{components:t})):a.a.createElement(m,i({ref:n},c))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,s=new Array(o);s[0]=b;var i={};for(var l in n)hasOwnProperty.call(n,l)&&(i[l]=n[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,s[1]=i;for(var c=2;c<o;c++)s[c]=t[c];return a.a.createElement.apply(null,s)}return a.a.createElement.apply(null,t)}b.displayName="MDXCreateElement"}}]);