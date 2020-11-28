(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=r.a.createContext({}),l=function(e){var t=r.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):b(b({},t),e)),n},d=function(e){var t=l(e.components);return r.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),d=l(n),m=a,j=d["".concat(i,".").concat(m)]||d[m]||p[m]||c;return n?r.a.createElement(j,b(b({ref:t},s),{},{components:n})):r.a.createElement(j,b({ref:t},s))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,i=new Array(c);i[0]=m;var b={};for(var o in t)hasOwnProperty.call(t,o)&&(b[o]=t[o]);b.originalType=e,b.mdxType="string"==typeof e?e:a,i[1]=b;for(var s=2;s<c;s++)i[s]=n[s];return r.a.createElement.apply(null,i)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},89:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return b})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(126)),i={id:"S3D.rc_design",title:"S3D.rc_design"},b={unversionedId:"S3D.rc_design",id:"S3D.rc_design",isDocsHomePage:!1,title:"S3D.rc_design",description:"---",source:"@site/docs/docs-S3D.rc_design.md",slug:"/S3D.rc_design",permalink:"/api/v3/docs/S3D.rc_design",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-S3D.rc_design.md",version:"current",sidebar:"someSidebar",previous:{title:"S3D.member_design",permalink:"/api/v3/docs/S3D.member_design"},next:{title:"S3D.SB",permalink:"/api/v3/docs/S3D.SB"}},o=[{value:"<code>S3D.rc_design.getInput</code>",id:"s3drc_designgetinput",children:[]},{value:"<code>S3D.rc_design.check</code>",id:"s3drc_designcheck",children:[]},{value:"Custom sections",id:"custom-sections",children:[]}],s={rightToc:o};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("hr",null),Object(c.b)("p",null,"The ",Object(c.b)("inlineCode",{parentName:"p"},"S3D.rc_design")," namespace provides functions that allow beam and column design for reinforced concrete to various design standards."),Object(c.b)("div",{class:"banner info"},"To design steel and timber sections, see ",Object(c.b)("a",{href:"S3D.member_design"},Object(c.b)("code",null,"S3D.member_design")),"."),Object(c.b)("hr",null),Object(c.b)("h2",{id:"s3drc_designgetinput"},Object(c.b)("inlineCode",{parentName:"h2"},"S3D.rc_design.getInput")),Object(c.b)("p",null,"Generates and returns the RC member design input object (referred to as ",Object(c.b)("inlineCode",{parentName:"p"},"design_obj")," below) that will feed into the concrete design check calculations. The ",Object(c.b)("inlineCode",{parentName:"p"},"design_obj")," can then be adjusted to use preferred design parameters, reinforcement, materials or loads."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"s3d_model")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/api/v3/docs/s3d-model"}),"s3d_model")," object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing information that represents a Structural 3D model.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"design_code")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"ACI_318"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"AS_3600"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"EN_2"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"CSA_A23"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"BS_8110")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Design code identifier.")))),Object(c.b)("h4",{id:"sample-input-for-the-s3drc_designgetinput-function"},"Sample input for the ",Object(c.b)("inlineCode",{parentName:"h4"},"S3D.rc_design.getInput")," function"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.rc_design.getInput",\n  "arguments": {\n    "s3d_model": S3D_MODEL_OBJECT,\n    "design_code": "ACI_318"\n  }\n}\n')),Object(c.b)("h4",{id:"sample-response-for-the-s3drc_designgetinput-function"},"Sample response for the ",Object(c.b)("inlineCode",{parentName:"h4"},"S3D.rc_design.getInput")," function"),Object(c.b)("p",null,"The response will give a ",Object(c.b)("inlineCode",{parentName:"p"},"design_obj")," object that can be passed into ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"#s3drc_designcheck"}),Object(c.b)("inlineCode",{parentName:"a"},"S3D.rc_design.check")),". It provides all necessary input to run a member design check."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msg": "Design input object generated successfully for aci318",\n  "status": 0,\n  "data": {} // design_obj containing parameters, sections and forces from analysis\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Under the "design_members" property, each member has the following parameters:\n{\n  "section_shape": "round",\n  "member_id": "1",\n  "member_type": "column",\n  "member_length": 177.2,\n  "K_hor": "1",\n  "K_vert": "1",\n  "k": "0.104",\n  "concrete_strength": "4000",\n  "rebar_strength": "60000",\n  "shear_rebar_strength": "50000",\n  "lim_crack_width": "0.012",\n  "section_prop": {\n    "diameter": 18\n  },\n  "sec_position": [\n    {"members": 1, "position": 0},\n    {"members": 2, "position": 50},\n    {"members": 3, "position": 100}\n  ],\n  "long_rebar": [\n    {\n      "cover": "2.5",\n      "diameter": "0.625",\n      "end": "100",\n      "from": "bottom",\n      "number": "10",\n      "start": "0",\n      "y": "2.5"\n    }\n  ],\n  "shear_rebar": [\n    {\n      "number": "2",\n      "diameter": "0.625",\n      "spacing": "10",\n      "start": "0",\n      "end": "100"\n    }\n  ],\n  "forces_data": {},\n  "spans": [[177.2, 0, 177.2]],\n  "defl_live_load_lim": "180",\n  "defl_long_term_lim": "240",\n  "defl_live_load_percent": "50",\n  "spec_load": {\n    "DL_sustained": "SW1",\n    "DL_deflection": "SW1",\n    "LL_deflection": "SW1"\n  }\n}   \n')),Object(c.b)("br",null),Object(c.b)("hr",null),Object(c.b)("h2",{id:"s3drc_designcheck"},Object(c.b)("inlineCode",{parentName:"h2"},"S3D.rc_design.check")),Object(c.b)("p",null,"Run an RC design check from US, Australian, European, Canadian and British standards. The API will calculate all member capacities, utility ratios and generate summary and in-depth calculation reports."),Object(c.b)("table",null,Object(c.b)("thead",{parentName:"table"},Object(c.b)("tr",{parentName:"thead"},Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(c.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(c.b)("tbody",{parentName:"table"},Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"s3d_model")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"/api/v3/docs/s3d-model"}),"s3d_model")," object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing information that represents a Structural 3D model.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"design_code")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"string")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"ACI_318"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"AS_3600"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"EN_2"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"CSA_A23"),", ",Object(c.b)("br",null),Object(c.b)("inlineCode",{parentName:"td"},"BS_8110")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Design code identifier.")),Object(c.b)("tr",{parentName:"tbody"},Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(c.b)("inlineCode",{parentName:"td"},"design_obj")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(c.b)("inlineCode",{parentName:"td"},"object")),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object"),Object(c.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Optional design input object. This can be obtained from ",Object(c.b)("a",Object(a.a)({parentName:"td"},{href:"#s3drc_designgetinput"}),Object(c.b)("inlineCode",{parentName:"a"},"S3D.rc_design.getInput"))," and altered to adjust design parameters.")))),Object(c.b)("h4",{id:"sample-input-for-the-s3drc_designcheck-function"},"Sample input for the ",Object(c.b)("inlineCode",{parentName:"h4"},"S3D.rc_design.check")," function"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.rc_design.check",\n  "arguments": {\n    "design_code": "AS_3600",\n    "s3d_model": S3D_MODEL_OBJECT,\n    "design_obj": DESIGN_OBJECT\n  }\n}\n')),Object(c.b)("br",null),Object(c.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.rc_design.check",target:"_blank",class:"sample-code-btn"},"Try ",Object(c.b)("code",null,"S3D.rc_design.check")),Object(c.b)("br",null),Object(c.b)("h4",{id:"sample-response-for-the-s3drc_designcheck-function"},"Sample response for the ",Object(c.b)("inlineCode",{parentName:"h4"},"S3D.rc_design.check")," function"),Object(c.b)("p",null,"The response will provide all member capacities, ratios and design reports. The format of this response may depend on the different ",Object(c.b)("inlineCode",{parentName:"p"},"design_code")," designation."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Each beam or column member will return the following results\n{\n  "member_id": "2",\n  "section_pos": 0,\n  "pos_flexure": {\n    "flexure_ratio": 0,\n    "flexure_status": "OK",\n    "as_ratio": 0.9534794309880812,\n    "as_status": "OK"\n  },\n  "pos_crack_width": {\n    "ratio": 0.9485182233116682,\n    "status": "OK"\n  },\n  "pos_LTC": {\n    "ratio": 0,\n    "status": "OK"\n  },\n  "neg_flexure": {\n    "flexure_ratio": 0,\n    "flexure_status": "NG",\n    "as_ratio": 0,\n    "as_status": "NG"\n  },\n  "neg_crack_width": {\n    "ratio": 0,\n    "status": "NG"\n  },\n  "neg_LTC": {\n    "ratio": 0,\n    "status": "OK"\n  },\n  "shear": {\n    "ratio": 3.7037037037037033,\n    "status": "NG"\n  },\n  "pos_defl": {\n    "ratio": 0,\n    "status": "OK"\n  }\n}\n\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'// Each beam or column result will also include a link to a report\n{\n  "member_id": "2",\n  "section_pos": 0,\n  "html_summary_link": "https://solver.skyciv.com/temp/view_report_QCioViaPgrgeLgCK_beam_0.php",\n  "html_download_link": "https://solver.skyciv.com/temp/download_html_report_QCioViaPgrgeLgCK_beam_0.php",\n  "pdf_download_link": "https://solver.skyciv.com/temp/download_report_QCioViaPgrgeLgCK_beam_0.php"\n}\n')),Object(c.b)("h2",{id:"custom-sections"},"Custom sections"),Object(c.b)("p",null,"SkyCiv supports custom sections and reinforcement checks via SkyCiv's General Section Designer. Use ",Object(c.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/S3D.SB#s3dsbrungsd"}),"S3D.SB.runGSD")," to run custom as seen in the image below."),Object(c.b)("img",{src:"https://skyciv.com/wp-content/uploads/2019/03/general-concrete-section-design-software.png"}))}l.isMDXComponent=!0}}]);