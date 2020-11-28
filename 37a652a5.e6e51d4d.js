(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var d=b.a.createContext({}),o=function(e){var t=b.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=o(e.components);return b.a.createElement(d.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),m=o(n),p=a,j=m["".concat(i,".").concat(p)]||m[p]||s[p]||r;return n?b.a.createElement(j,c(c({ref:t},d),{},{components:n})):b.a.createElement(j,c({ref:t},d))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,i=new Array(r);i[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var d=2;d<r;d++)i[d]=n[d];return b.a.createElement.apply(null,i)}return b.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},78:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return d}));var a=n(3),b=(n(0),n(126));const r={id:"S3D.member_design",title:"S3D.member_design"},i={unversionedId:"S3D.member_design",id:"S3D.member_design",isDocsHomePage:!1,title:"S3D.member_design",description:"---",source:"@site/docs/docs-S3D.member_design.md",slug:"/S3D.member_design",permalink:"/api/v3/docs/S3D.member_design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-S3D.member_design.md",version:"current",sidebar:"someSidebar",previous:{title:"S3D.results",permalink:"/api/v3/docs/S3D.results"},next:{title:"S3D.rc_design",permalink:"/api/v3/docs/S3D.rc_design"}},c=[{value:"<code>S3D.member_design.getInput</code>",id:"s3dmember_designgetinput",children:[]},{value:"<code>S3D.member_design.check</code>",id:"s3dmember_designcheck",children:[]},{value:"<code>S3D.member_design.optimize</code>",id:"s3dmember_designoptimize",children:[]},{value:"<code>standalone.member.check</code>",id:"standalonemembercheck",children:[]}],l={rightToc:c};function d({components:e,...t}){return Object(b.b)("wrapper",Object(a.a)({},l,t,{components:e,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"S3D.member_design")," namespace provides functions that allow beam and column design for timber and steel sections to various design standards."),Object(b.b)("div",{class:"banner info"},"To design concrete sections, see ",Object(b.b)("a",{href:"S3D.rc_design"},Object(b.b)("code",null,"S3D.rc_design")),"."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dmember_designgetinput"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.member_design.getInput")),Object(b.b)("p",null,"Generates and returns member design input object. Engineers can then use this input object to change design parameters, materials or loads."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"s3d_model")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/api/v3/docs/s3d-model"}),"s3d_model")," object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing information that represents a Structural 3D model.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"EN_1993-1-1-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"BS_5950-1-2000"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"}," NDS_2018_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"NDS_2018_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"CSA_S16-14"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4100-1998"),",",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_1720-2010"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4600-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_LRFD")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The design code for which the design object in the response should represent.")))),Object(b.b)("h4",{id:"sample-input-for-the-s3dmember_designgetinput-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.member_design.getInput")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.member_design.getInput",\n  "arguments": {\n    "design_code": "AISC_360-16_LRFD",\n    "s3d_model": S3D_MODEL_OBJECT\n  }\n}\n')),Object(b.b)("h4",{id:"sample-response-for-the-s3dmember_designgetinput-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.member_design.getInput")," function"),Object(b.b)("div",{class:"banner info"},"The ",Object(b.b)("code",null,"data")," property in the response will represent the ",Object(b.b)("code",null,"design_obj")," object which can be passed into ",Object(b.b)("a",{href:"#s3dmember_designcheck"},Object(b.b)("code",null,"S3D.member_design.check")),". It provides all necessary input to run a member design check."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msg": "Design input object generated successfully for AISC_360-16_LRFD",\n  "status": 0,\n  "data": {}\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dmember_designcheck"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.member_design.check")),Object(b.b)("p",null,"Run a member design check from in accordance with various standards. The function will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"s3d_model")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/api/v3/docs/s3d-model"}),"s3d_model")," object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing information that represents a Structural 3D model.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"EN_1993-1-1-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"BS_5950-1-2000"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"}," NDS_2018_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"NDS_2018_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"CSA_S16-14"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4100-1998"),",",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_1720-2010"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4600-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_LRFD")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The design code for which the design object in the response should represent.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_obj")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Optional design input object. This can be obtained via ",Object(b.b)("inlineCode",{parentName:"td"},"S3D.member_design.getInput")," and altered to adjust design parameters.",Object(b.b)("br",null))))),Object(b.b)("h4",{id:"sample-input-for-the-s3dmember_designcheck-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.member_design.check")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.member_design.check",\n  "arguments": {\n    "design_code": "AISC_360-16_LRFD",\n    "s3d_model": S3D_MODEL_OBJECT,\n    "design_obj": DESIGN_OBJECT\n  }\n}\n')),Object(b.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.member_design.check",target:"_blank",class:"sample-code-btn"},"Try ",Object(b.b)("code",null,"S3D.member_design.check")),Object(b.b)("br",null),Object(b.b)("h4",{id:"sample-response-for-the-s3dmember_designcheck-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.member_design.check")," function"),Object(b.b)("p",null,"The response will provide all member capacities, ratios, design reports and a summary for easy checking of pass/fail criteria. The format of this response may differ with the various ",Object(b.b)("inlineCode",{parentName:"p"},"design_code")," designations."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": {\n    "capacity": {\n      "axial_tension": {},\n      "axial_compression": {},\n      "moment_z": {},\n      "moment_y": {},\n      "shear_y": {},\n      "shear_z": {}\n    },\n    "ratio": {\n      "axial": {},\n      "moment_z": {},\n      "moment_y": {},\n      "shear_y": {},\n      "shear_z": {},\n      "combined": {},\n      "worstlc": {},\n      "slender": {},\n      "displacement": {}\n    },\n    "grouping": {},\n    "html_summary_link": "https://solver.skyciv.com/temp/view_report_tdhqyoWvwDkCy8xC.php",\n    "html_download_link": "https://solver.skyciv.com/temp/download_html_report_tdhqyoWvwDkCy8xC.php",\n    "pdf_download_link": "https://solver.skyciv.com/temp/download_report_tdhqyoWvwDkCy8xC.php",\n    "reports": {\n      "1": {\n        "html_summary_link": "https://solver.skyciv.com/temp/view_report_tdhqyoWvwDkCy8xC_0.php",\n        "html_download_link": "https://solver.skyciv.com/temp/download_html_report_tdhqyoWvwDkCy8xC_0.php",\n        "pdf_download_link": "https://solver.skyciv.com/temp/download_report_tdhqyoWvwDkCy8xC_0.php"\n      }\n    },\n    "summary": {\n      "failed_members": ["3", "5"],\n      "passed_members": ["1", "2", "4"],\n      "critical": {\n        "utility_ratio": 2.2396984679650362,\n        "member_id": "5",\n        "action": "combined",\n        "load_case": "#1",\n        "status": "FAIL"\n      }\n    }\n  },\n  "msg": "Member Design check for AISC_360-16_LRFD was run successfully.",\n  "status": 0\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dmember_designoptimize"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.member_design.optimize")),Object(b.b)("p",null,"This function will iterate through the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/S3D.SB#s3dsbgetlibrarytree"}),"library of sections")," to find the most efficient design section based on a given utility ratio and other settings. The sections in the model will be designed based on the input provided in the ",Object(b.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/S3D.model#s3dmodelset"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.set"))," function. For instance, if HSS sections are used in ",Object(b.b)("inlineCode",{parentName:"p"},"S3D.model.set"),", the function will iterate the HSS sections catalog."),Object(b.b)("div",{class:"banner info"},Object(b.b)("code",null,"S3D.member_design.optimize")," should only be used if ",Object(b.b)("a",{href:"S3D.model#s3dmodelsolve"},Object(b.b)("code",null,"S3D.model.solve"))," has been executed earlier in the session."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"EN_1993-1-1-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"BS_5950-1-2000"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"}," NDS_2018_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"NDS_2018_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"CSA_S16-14"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4100-1998"),",",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_1720-2010"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4600-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_LRFD")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The design code for which the design object in the response should represent.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"simplified")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Simplified results will give you the best result and it's corresponding utility ratio. For full results of each run, set simplified to ",Object(b.b)("inlineCode",{parentName:"td"},"false"))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"settings")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Additional settings including maximum utility ratio and height/width settings. Section height/width units based on units in ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/api/v3/docs/s3d-model"}),"s3d_model")," during ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"/api/v3/docs/S3D.model#s3dmodelset"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.model.set"))," ",Object(b.b)("br",null))))),Object(b.b)("h4",{id:"sample-input-for-the-s3dmember_designoptimize-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.member_design.optimize")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json",metastring:'title="/src/components/HelloCodeTitle.js"',title:'"/src/components/HelloCodeTitle.js"'}),'{\n  "function": "S3D.member_design.optimize",\n  "arguments": {\n    "design_code": "AISC_360-10_ASD",\n    "simplified": true,\n    "settings": {           //optional\n      "max_ur": 0.8,\n      "optimize_by": {\n        "item": "sections",\n        "ids": [1, 2, 3, 4] // sections to optimize (null for all)\n      },\n      "section_height": {\n        "min": 8,\n        "max": 12\n      },\n      "section_width": {\n        "min": null,\n        "max": null\n      }\n    }\n  }\n}\n')),Object(b.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.member_design.optimize",target:"_blank",class:"sample-code-btn"},"Try ",Object(b.b)("code",null,"S3D.member_design.optimize")),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("h4",{id:"sample-response-for-the-s3dmember_designoptimize-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.member_design.optimize")," function"),Object(b.b)("p",null,"The response will provide the lightest section and it's corresponding utility ratio. From the above input, it is evident that the UR is limited to 0.8 and the section heights are limited to between 8 and 12 inches."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": [\n    {\n      "section_height": "W10x30",\n      "max_UR_ratio": 0.6899964867988755\n    },\n    {\n      "section_height": "W10x30",\n      "max_UR_ratio": 0.6841870893192245\n    },\n    {\n      "section_height": "HSS8x8x1/8",\n      "max_UR_ratio": 0.38940934639494307\n    },\n    {\n      "section_height": "HSS8x8x1/8",\n      "max_UR_ratio": 0.13969293754291115\n    }\n  ],\n  "msg": "Optimizer successfully ran",\n  "status": 0\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"standalonemembercheck"},Object(b.b)("inlineCode",{parentName:"h2"},"standalone.member.check")),Object(b.b)("p",null,"Simplified design checks can be performed without the need to run an analysis first. Provide loads, members, sections and parameters to run design checks. The API will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"units")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"imperial"),", ",Object(b.b)("inlineCode",{parentName:"td"},"metric")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The units system to be used.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_code")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-16_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"EN_1993-1-1-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"BS_5950-1-2000"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"}," NDS_2018_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"NDS_2018_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"CSA_S16-14"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4100-1998"),",",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_1720-2010"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AS_4600-2005"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"AISI_S100-12_LRFD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_ASD"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"DNV_2-7-1_2006_with_AISC_360-10_LRFD")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The design code for which the design object in the response should represent.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"sections")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[[string]]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of string arrays"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Section maps as defined in ",Object(b.b)("a",{href:"S3D.SB#s3dsbgetlibrarytree"},Object(b.b)("code",null,"S3D.SB.getLibraryTree")),".")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"materials")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[object]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Material definitions.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"forces")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[object]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Forces to apply.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_members")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[object]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of objects"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Design member definitions.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"design_factors")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Design factors to use.")))),Object(b.b)("h4",{id:"sample-input-for-the-standalonemembercheck-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"standalone.member.check")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "standalone.member.check",\n  "arguments": {\n    "units": "imperial",\n    "design_code": "AISC_360-10_ASD",\n    "sections": [\n      ["American", "AISC", "W shapes", "W14x808"],\n      ["American", "AISC", "Rectangular HSS", "HSS2x1-1/2x3/16"]\n    ],\n    "materials": [\n      {\n        "id": 1,\n        "name": "Some Custom Structural Steel",\n        "density": 450,\n        "elasticity_modulus": 29000,\n        "poissons_ratio": 0.27,\n        "yield_strength": 33,\n        "ultimate_strength": 52,\n        "class": "steel"\n      }\n    ],\n    "forces": [\n      {\n        "axial": 10,\n        "Fz": 10,\n        "Fy": 15,\n        "torsion": 3,\n        "Mz": -0.5,\n        "My": -0.5\n      }\n    ],\n    "design_members": [\n      {\n        "L": 12,\n        "Lb": 10,\n        "Cb": 1,\n        "Ky": 1,\n        "Kz": 1,\n        "sr_c": 200,\n        "sr_t": 300,\n        "element_id": 1,\n        "section_id": 2,\n        "material_id": 1\n      },\n      {\n        "L": 8,\n        "Lb": 6,\n        "Cb": 1,\n        "Ky": 1,\n        "Kz": 1,\n        "sr_c": 200,\n        "sr_t": 300,\n        "element_id": 1,\n        "section_id": 1,\n        "material_id": 1\n      }\n    ],\n    "design_factors": {\n      "omega_t": 1.67,\n      "omega_c": 2.0,\n      "omega_b": 1.7,\n      "omega_v": 1.67\n    }\n  }\n}\n\n')),Object(b.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=standalone.member.check",target:"_blank",class:"sample-code-btn"},"Try ",Object(b.b)("code",null,"standalone.member.check")),Object(b.b)("br",null))}d.isMDXComponent=!0}}]);