(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{100:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return c})),n.d(t,"rightToc",(function(){return i})),n.d(t,"default",(function(){return d}));var a=n(3),b=n(7),r=(n(0),n(126)),l={id:"S3D.model",title:"S3D.model"},c={unversionedId:"S3D.model",id:"S3D.model",isDocsHomePage:!1,title:"S3D.model",description:"---",source:"@site/docs/docs-S3D.model.md",slug:"/S3D.model",permalink:"/api-v3-docs/docs/S3D.model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-S3D.model.md",version:"current",sidebar:"someSidebar",previous:{title:"S3D.session",permalink:"/api-v3-docs/docs/S3D.session"},next:{title:"S3D.results",permalink:"/api-v3-docs/docs/S3D.results"}},i=[{value:"<code>S3D.model.set</code>",id:"s3dmodelset",children:[]},{value:"<code>S3D.model.get</code>",id:"s3dmodelget",children:[]},{value:"<code>S3D.model.repair</code>",id:"s3dmodelrepair",children:[]},{value:"<code>S3D.model.solve</code>",id:"s3dmodelsolve",children:[]},{value:"<code>S3D.model.takeScreenshot</code>",id:"s3dmodeltakescreenshot",children:[]},{value:"<code>S3D.model.mesh</code>",id:"s3dmodelmesh",children:[]}],o={rightToc:i};function d(e){var t=e.components,n=Object(b.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},o,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("hr",null),Object(r.b)("p",null,"The ",Object(r.b)("inlineCode",{parentName:"p"},"S3D.model")," namespace provides functions which take action on the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api-v3-docs/docs/s3d-model"}),Object(r.b)("inlineCode",{parentName:"a"},"s3d_model"))," object."),Object(r.b)("div",{class:"banner info"},"To create a model object, see ",Object(r.b)("a",{href:"s3d-model"},Object(r.b)("code",null,"s3d_model")),"."),Object(r.b)("hr",null),Object(r.b)("h2",{id:"s3dmodelset"},Object(r.b)("inlineCode",{parentName:"h2"},"S3D.model.set")),Object(r.b)("p",null,"Setting a model is the first step to running any analysis, design or running any other functionality on a structural model."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"s3d_model")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/api-v3-docs/docs/s3d-model"}),"s3d_model")," object"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing information that represents a Structural 3D model.")))),Object(r.b)("h4",{id:"sample-input-for-the-s3dmodelset-function"},"Sample input for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.set")," function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.model.set",\n  "arguments": {\n    "s3d_model": S3D_MODEL_OBJECT\n  }\n}\n')),Object(r.b)("h4",{id:"sample-response-for-the-s3dmodelset-function"},"Sample response for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.set")," function"),Object(r.b)("p",null,"The response will confirm whether or not the model was successfully set."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msg": "Model was successfully set.",\n  "status": 0,\n  "data": ""\n}\n')),Object(r.b)("a",{class:"sample-code-btn",target:"_blank",href:"https://platform.skyciv.com/api?f=S3D.model.set"},"Try ",Object(r.b)("code",null,"S3D.model.set")),Object(r.b)("br",null),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"s3dmodelget"},Object(r.b)("inlineCode",{parentName:"h2"},"S3D.model.get")),Object(r.b)("p",null,"Once the model is set, you can request the model data at any time by calling the function ",Object(r.b)("inlineCode",{parentName:"p"},"S3D.model.get"),". This function takes no arguments, and will return the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api-v3-docs/docs/s3d-model"}),Object(r.b)("inlineCode",{parentName:"a"},"s3d_model"))," object."),Object(r.b)("div",{class:"banner info"},Object(r.b)("code",null,"S3D.model.get")," will only work if ",Object(r.b)("code",null,"S3D.model.set")," has been called earlier in the session."),Object(r.b)("h4",{id:"sample-input-for-the-s3dmodelget-function"},"Sample input for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.get")," function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n    "function": "S3D.model.get"\n}\n')),Object(r.b)("h4",{id:"sample-response-for-the-s3dmodelget-function"},"Sample response for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.get")," function"),Object(r.b)("p",null,"The response will return the ",Object(r.b)("inlineCode",{parentName:"p"},"s3d_model")," object."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": S3D_MODEL_OBJECT,\n  "status": 0,\n  "function": "S3D.model.get",\n  "msg": ""\n}\n')),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"s3dmodelrepair"},Object(r.b)("inlineCode",{parentName:"h2"},"S3D.model.repair")),Object(r.b)("p",null,Object(r.b)("inlineCode",{parentName:"p"},"S3D.model.repair")," will run SkyCiv's repair model functionality. This will identify any issues with the model and repair them to help ensure the analysis model is built correctly."),Object(r.b)("div",{class:"banner info"},Object(r.b)("code",null,"s3d_model")," may be omitted if ",Object(r.b)("code",null,"S3D.model.set")," has been called earlier in the session."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"s3d_model")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"A ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"/api-v3-docs/docs/s3d-model"}),"s3d_model")," object"),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object containing information that represents a Structural 3D model."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"checks")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"[string]")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"unused_nodes"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"large_structure"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"merge_nodes"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"zero_members"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"continuous_to_normal_members"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"intersect_members"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"default_section"),Object(r.b)("br",null)," ",Object(r.b)("inlineCode",{parentName:"td"},"force_plate_mesh")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of strings defining the ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"#checks"}),"checks")," to be performed."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},'["unused_nodes", "large_structure", "merge_nodes", "zero_members", "continuous_to_normal_members", "intersect_members", "default_section", "force_plate_mesh"]'))))),Object(r.b)("h4",{id:"checks"},Object(r.b)("inlineCode",{parentName:"h4"},"checks")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"unused_nodes")," - scan model for nodes that are floating and disconnected."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"large_structure")," - detect extremely slender members (used to detect unit issues)."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"merge_nodes")," - merge close nodes with a tolerance based on unit system."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"zero_members")," - detect members that have the same start/end node."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"continuous_to_normal_members")," - detect members with intermediate nodes. Change to continuous."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"intersect_members")," - detect and connect intersecting members."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"default_section")," - find any members with no section data, add a default section."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"force_plate_mesh")," - allow analysis to run without plates being meshed first.")),Object(r.b)("h4",{id:"sample-input-for-the-s3dmodelrepair-function"},"Sample input for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.repair")," function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.model.repair",\n  "arguments": {\n    "s3d_model": S3D_MODEL_OBJECT,\n    "checks": [\n      "unused_nodes",\n      "large_structure",\n      "merge_nodes",\n      "zero_members",\n      "continuous_to_normal_members",\n      "intersect_members",\n      "default_section",\n      "force_plate_mesh"\n    ]\n  }\n}\n')),Object(r.b)("h4",{id:"sample-response-for-the-s3dmodelrepair-function"},"Sample response for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.repair")," function"),Object(r.b)("p",null,"The response will confirm whether or not the model was successfully repaired."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": S3D_MODEL_OBJECT, // The repaired s3d_model object\n  "msg": "S3D model successfully repaired",\n  "status": 0\n}\n')),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"s3dmodelsolve"},Object(r.b)("inlineCode",{parentName:"h2"},"S3D.model.solve")),Object(r.b)("p",null,"Runs a structural analysis on your ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api-v3-docs/docs/s3d-model"}),Object(r.b)("inlineCode",{parentName:"a"},"s3d_model")),"."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"analysis_type")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"linear"),", ",Object(r.b)("inlineCode",{parentName:"td"},"nonlinear"),", ",Object(r.b)("inlineCode",{parentName:"td"},"buckling"),", ",Object(r.b)("inlineCode",{parentName:"td"},"dynamic"),", ",Object(r.b)("inlineCode",{parentName:"td"},"response_spectrum")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The type of analysis to be performed."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"linear"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"repair_model")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"#s3dmodelrepair"}),Object(r.b)("inlineCode",{parentName:"a"},"S3D.model.repair"))," should be executed prior to solving."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"false"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"return_results")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"To minimize data downloaded, solve data will be removed."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"format")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"json"),", ",Object(r.b)("inlineCode",{parentName:"td"},"csv")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Export results in particular file format."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"json"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"filter")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"[string]")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"envelope"),", ",Object(r.b)("inlineCode",{parentName:"td"},"load_case"),", ",Object(r.b)("inlineCode",{parentName:"td"},"load_group"),", ",Object(r.b)("inlineCode",{parentName:"td"},"load_combo"),", ",Object(r.b)("inlineCode",{parentName:"td"},"envelope_abs_max")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Only return specific data in the response. You can also provide names you have applied to load combination. E.g. ",Object(r.b)("inlineCode",{parentName:"td"},"LC1"),"."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All results")))),Object(r.b)("div",{class:"banner tip"},"Using the ",Object(r.b)("code",null,"filter")," property will drastically reduce the size of the response therefore saving on download data and time."),Object(r.b)("h4",{id:"sample-input-for-the-s3dmodelsolve-function"},"Sample input for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.solve")," function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.model.solve",\n  "arguments": {\n    "analysis_type": "nonlinear",\n    "repair_model": true,\n    "filter": ["envelope_abs_max", "LC1"]\n  }\n}\n')),Object(r.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.model.solve_repair",target:"_blank",class:"sample-code-btn"},"Try ",Object(r.b)("code",null,"S3D.model.solve")),Object(r.b)("br",null),Object(r.b)("h4",{id:"sample-response-for-the-s3dmodelsolve-function"},"Sample response for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.solve")," function"),Object(r.b)("p",null,"The analysis results will return an object of all the load combination results in the following format. If the solver fails to run, it will return with a ",Object(r.b)("inlineCode",{parentName:"p"},"status: 1")," and an error message to assist in debugging the issue."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "1": {\n    "name": "LC1",\n    "type": "user_defined",\n    "reactions": {},\n    "member_displacements": {},\n    "member_forces": {},\n    "member_stresses": {},\n    "member_lengths": {},\n    "member_stations": {},\n    "member_discontinuities": {},\n    "member_minimums": {},\n    "member_maximums": {},\n    "member_peak_results": {},\n    "plate_displacements": {},\n    "plate_forces": {},\n    "plate_stresses": {},\n    "plate_minimums": {},\n    "plate_maximums": {},\n    "plate_peak_results": {}\n  },\n  "2": {} // etc\n}\n\n')),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"s3dmodeltakescreenshot"},Object(r.b)("inlineCode",{parentName:"h2"},"S3D.model.takeScreenshot")),Object(r.b)("p",null,"Once ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"#s3dmodelset"}),Object(r.b)("inlineCode",{parentName:"a"},"S3D.model.set"))," has been executed, you can take various screenshots of the model."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"views")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"[string]")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"iso"),", ",Object(r.b)("inlineCode",{parentName:"td"},"front"),", ",Object(r.b)("inlineCode",{parentName:"td"},"side"),", ",Object(r.b)("inlineCode",{parentName:"td"},"top")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Array of strings, defining the different perspectives to take a screenshot from.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"is_renderer")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Take screenshots of the structure in the 3D renderer.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"visibility_settings")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"object")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object as defined in ",Object(r.b)("a",Object(a.a)({parentName:"td"},{href:"#visibility-settings"}),Object(r.b)("inlineCode",{parentName:"a"},"visibility_settings"))),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object defining additional settings. Only applicable to wireframe display.")))),Object(r.b)("h4",{id:"visibility_settings"},Object(r.b)("inlineCode",{parentName:"h4"},"visibility_settings")),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"show_nodes")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If nodes should be visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"show_loads")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If loads should be visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"show_plates")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"boolean")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"true"),", ",Object(r.b)("inlineCode",{parentName:"td"},"false")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If plates should be visible.")),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"projection")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"perspective"),", ",Object(r.b)("inlineCode",{parentName:"td"},"orthographic")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The projection of the model to the view-point.")))),Object(r.b)("h4",{id:"sample-input-for-the-s3dmodeltakescreenshot-function"},"Sample input for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.takeScreenshot")," function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.model.takeScreenshot",\n  "arguments": {\n    "views": ["iso", "front", "side", "top"],\n    "is_renderer": false,\n    "visibility_settings": {\n      "show_nodes": true,\n      "show_loads": false,\n      "show_plates": true,\n      "projection": "perspective"\n    }\n  }\n}\n')),Object(r.b)("a",{href:"https://platform.skyciv.com/api/v3?preload_function=S3D.model.takeScreenshot",target:"_blank",class:"sample-code-btn"},"Try ",Object(r.b)("code",null,"S3D.model.takeScreenshot")),Object(r.b)("br",null),Object(r.b)("h4",{id:"sample-response-for-the-s3dmodeltakescreenshot-function"},"Sample response for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.takeScreenshot")," function"),Object(r.b)("div",{class:"banner info"},"The response will return an object of screenshots in base64 format."),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 0,\n  "msg": "Screenshots successfully taken and returned in base64 format.",\n  "data": {\n    "iso": "data:image/png;base64,iVBORw0K...",\n    "front": "data:image/png;base64,EACEpCABCQg....",\n    "side": "data:image/png;base64,GABCQgAQlIQAI....",\n    "top": "data:image/png;base64,CABCUhAAhKQgAQ...."\n  }\n}\n')),Object(r.b)("p",null,"The following is an example of the isometric screenshot from the above example:"),Object(r.b)("img",{src:"/api/v3/img/images/S3D-model-takeScreenshot.png"}),Object(r.b)("br",null),Object(r.b)("hr",null),Object(r.b)("h2",{id:"s3dmodelmesh"},Object(r.b)("inlineCode",{parentName:"h2"},"S3D.model.mesh")),Object(r.b)("p",null,"Mesh the plates in the ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"/api-v3-docs/docs/s3d-model"}),Object(r.b)("inlineCode",{parentName:"a"},"s3d_model"))," object."),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(r.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"method")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"string")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"frontal_quads"),", ",Object(r.b)("inlineCode",{parentName:"td"},"frontal"),", ",Object(r.b)("inlineCode",{parentName:"td"},"adapt"),", ",Object(r.b)("inlineCode",{parentName:"td"},"packing_parallelograms"),", ",Object(r.b)("inlineCode",{parentName:"td"},"delaunay")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Specify what type of mesher to use."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"frontal"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"granularity")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"integer")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"1"),"-",Object(r.b)("inlineCode",{parentName:"td"},"5")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Integer between 1 and 5 for level of granularity of mesh (1 is coarse, 5 is fine)."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"1"))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"plate_ids")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(r.b)("inlineCode",{parentName:"td"},"[integer]")),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of plate ids."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Array of plates you wish to mesh."),Object(r.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"All plates if property is not provided.")))),Object(r.b)("h4",{id:"sample-input-for-the-s3dmodelmesh-function"},"Sample input for the ",Object(r.b)("inlineCode",{parentName:"h4"},"S3D.model.mesh")," function"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.model.mesh",\n  "arguments": {\n    "method": "delaunay",\n    "granularity": 3,\n    "plate_ids": [1, 3]\n  }\n}\n')))}d.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return m})),n.d(t,"b",(function(){return j}));var a=n(0),b=n.n(a);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,b=function(e,t){if(null==e)return{};var n,a,b={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(b[n]=e[n]);return b}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(b[n]=e[n])}return b}var o=b.a.createContext({}),d=function(e){var t=b.a.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},m=function(e){var t=d(e.components);return b.a.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return b.a.createElement(b.a.Fragment,{},t)}},p=b.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,l=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),m=d(n),p=a,j=m["".concat(l,".").concat(p)]||m[p]||s[p]||r;return n?b.a.createElement(j,c(c({ref:t},o),{},{components:n})):b.a.createElement(j,c({ref:t},o))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,l=new Array(r);l[0]=p;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c.mdxType="string"==typeof e?e:a,l[1]=c;for(var o=2;o<r;o++)l[o]=n[o];return b.a.createElement.apply(null,l)}return b.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);