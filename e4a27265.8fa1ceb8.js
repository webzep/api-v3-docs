(window.webpackJsonp=window.webpackJsonp||[]).push([[49],{116:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return s})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return o}));var a=n(3),r=n(7),b=(n(0),n(126)),l={id:"S3D.results",title:"S3D.results"},s={unversionedId:"S3D.results",id:"S3D.results",isDocsHomePage:!1,title:"S3D.results",description:"---",source:"@site/docs/docs-S3D.results.md",slug:"/S3D.results",permalink:"/api/v3/docs/S3D.results",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-S3D.results.md",version:"current",sidebar:"someSidebar",previous:{title:"S3D.model",permalink:"/api/v3/docs/S3D.model"},next:{title:"S3D.member_design",permalink:"/api/v3/docs/S3D.member_design"}},c=[{value:"<code>S3D.results.get</code>",id:"s3dresultsget",children:[]},{value:"<code>S3D.results.set</code>",id:"s3dresultsset",children:[]},{value:"<code>S3D.results.fetchMemberResult</code>",id:"s3dresultsfetchmemberresult",children:[]},{value:"<code>S3D.results.getAnalysisReport</code>",id:"s3dresultsgetanalysisreport",children:[]},{value:"<code>S3D.model.takeScreenshot</code>",id:"s3dmodeltakescreenshot",children:[]}],i={rightToc:c};function o(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(a.a)({},i,n,{components:t,mdxType:"MDXLayout"}),Object(b.b)("hr",null),Object(b.b)("p",null,"The ",Object(b.b)("inlineCode",{parentName:"p"},"S3D.results")," namespace provides post-processing functions to read and interpret analysis results produced by ",Object(b.b)("a",{href:"S3D.model#s3dmodelsolve"},Object(b.b)("code",null,"S3D.model.solve")),"."),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsget"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.get")),Object(b.b)("p",null,"This function takes no arguments and will return the analysis results."),Object(b.b)("h4",{id:"sample-input-for-the-s3dresultsget-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.get")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.results.get"\n}\n')),Object(b.b)("h4",{id:"sample-response-for-the-s3dresultsget-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.get")," function"),Object(b.b)("p",null,"The analysis results will return an object of all load combination results in the following format. "),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "1": {\n    "name": "LC1",\n    "type": "user_defined",\n    "reactions": {},\n    "member_displacements": {},\n    "member_forces": {},\n    "member_stresses": {},\n    "member_lengths": {},\n    "member_stations": {},\n    "member_discontinuities": {},\n    "member_minimums": {},\n    "member_maximums": {},\n    "member_peak_results": {},\n    "plate_displacements": {},\n    "plate_forces": {},\n    "plate_stresses": {},\n    "plate_minimums": {},\n    "plate_maximums": {},\n    "plate_peak_results": {}\n  },\n  "2": {} // etc\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsset"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.set")),Object(b.b)("p",null,"Sets the results data for further processing."),Object(b.b)("div",{class:"banner tip"},"Analysis results from any source can be used. Simply provide the data in the same format that is returned from ",Object(b.b)("a",{href:"#s3dresultsget"},Object(b.b)("code",null,"S3D.results.get")),"."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"analysis_results")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Results of a structural analysis (from ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#s3dresultsget"}),Object(b.b)("inlineCode",{parentName:"a"},"S3D.results.get")),")")))),Object(b.b)("h4",{id:"sample-input-for-the-s3dresultsset-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.set")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.results.set",\n  "arguments": {\n    "analysis_results": {\n      "1": {\n        "name": "LC1",\n        "type": "user_defined",\n        "reactions": {},\n        "member_displacements": {},\n        "member_forces": {},\n        "member_stresses": {},\n        "member_lengths": {},\n        "member_stations": {},\n        "member_discontinuities": {},\n        "member_minimums": {},\n        "member_maximums": {},\n        "member_peak_results": {},\n        "plate_displacements": {},\n        "plate_forces": {},\n        "plate_stresses": {},\n        "plate_minimums": {},\n        "plate_maximums": {},\n        "plate_peak_results": {}\n      },\n      "2": {} // etc\n    }\n  }\n}\n')),Object(b.b)("h4",{id:"sample-response-for-the-s3dresultsset-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.set")," function"),Object(b.b)("p",null,"The response will confirm whether or not the model was successfully set."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "msg": "Results were successfully set.",\n  "status": 0,\n  "data": ""\n}\n')),Object(b.b)("a",{class:"sample-code-btn",target:"_blank",href:"https://platform.skyciv.com/api?f=S3D.results.set"},"Try ",Object(b.b)("code",null,"S3D.results.set")),Object(b.b)("br",null),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsfetchmemberresult"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.fetchMemberResult")),Object(b.b)("p",null,"Fetches results data for a particular member."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"member_id")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"integer")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An integer"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Fetch the results of the member with this ID. A value of ",Object(b.b)("inlineCode",{parentName:"td"},"null")," will return all."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"LC")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[integer]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of integers"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Load combinations to include. An empty array will return all load combinations."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"res_key")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"bmd_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"bmd_y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"axial"),", ",Object(b.b)("inlineCode",{parentName:"td"},"sfd_y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"sfd_z"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"top_bending_stress_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"top_bending_stress_y"),",",Object(b.b)("br",null)," ",Object(b.b)("inlineCode",{parentName:"td"},"btm_bending_stress_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"btm_bending_stress_y"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"shear_stress_z"),", ",Object(b.b)("inlineCode",{parentName:"td"},"shear_stress_y"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"displacement"),", ",Object(b.b)("inlineCode",{parentName:"td"},"displacement_x"),", ",Object(b.b)("br",null),Object(b.b)("inlineCode",{parentName:"td"},"displacement_y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"displacement_z")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The type of results to be returned."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"x,y"),", ",Object(b.b)("inlineCode",{parentName:"td"},"array"),", ",Object(b.b)("inlineCode",{parentName:"td"},"image")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Format of results. ",Object(b.b)("ul",null," ",Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},'"x,y"')," - object of results with x location and result"),Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},'"array"')," - array of results (no x location information)"),Object(b.b)("li",null,Object(b.b)("inlineCode",{parentName:"td"},'"image"')," - an image of the results."))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h4",{id:"sample-input-for-the-s3dresultsfetchmemberresult-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.fetchMemberResult")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.results.fetchMemberResult",\n  "arguments": {\n    "member_id": 3,\n    "LC": [1],\n    "res_key": "bmd_z",\n    "type": "x,y"\n  }\n}\n')),Object(b.b)("h4",{id:"sample-response-for-the-s3dresultsfetchmemberresult-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.fetchMemberResult")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": [\n    [\n      -0.19113528489304113,\n      -0.15415709542934292,\n      -0.11717890596564516,\n      -0.08020071650194674,\n      -0.04322252703824829,\n      -0.006244337574548954,\n      0.0307338518891493,\n      0.06771204135284795,\n      0.10469023081654624\n    ]\n  ],\n  "status": 0,\n  "msg": ""\n}\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": [\n    {\n      "x": 0,\n      "y": -0.19113528489304113\n    },\n    {\n      "x": 12.5,\n      "y": -0.15415709542934292\n    },\n    {\n      "x": 25,\n      "y": -0.11717890596564516\n    },\n    {\n      "x": 37.5,\n      "y": -0.08020071650194674\n    },\n    {\n      "x": 50,\n      "y": -0.04322252703824829\n    },\n    {\n      "x": 62.5,\n      "y": -0.006244337574548954\n    },\n    {\n      "x": 75,\n      "y": 0.0307338518891493\n    },\n    {\n      "x": 87.5,\n      "y": 0.06771204135284795\n    },\n    {\n      "x": 100,\n      "y": 0.10469023081654624\n    }\n  ],\n  "status": 0,\n  "msg": ""\n}\n')),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "data": ["data:image/png;base64,iVBORw0KGg..."],\n  "status": 0,\n  "msg": ""\n}\n')),Object(b.b)("p",null,"If ",Object(b.b)("inlineCode",{parentName:"p"},'"type": "image"')," is provided, then an image will be returned in base64 format."),Object(b.b)("img",{src:"/api/v3/img/images/api-generated-diagram.png",style:{width:"80%",maxWidth:"700px"}}),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dresultsgetanalysisreport"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.results.getAnalysisReport")),Object(b.b)("p",null,"Generates a structural analysis report and returns a download link to retrieve the report."),Object(b.b)("div",{class:"banner info"},Object(b.b)("a",{href:"S3D.model#s3dmodelset"},Object(b.b)("code",null,"S3D.model.set"))," and ",Object(b.b)("a",{href:"S3D.model#s3dmodelsolve"},Object(b.b)("code",null,"S3D.model.solve"))," must be executed earlier in the session for the Analysis Report to be generated."),Object(b.b)("h4",{id:"variables"},"Variables"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Default"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"job_name")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Any string."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The name of your project. This will be used as the analysis report name."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"file_type")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pdf"),", ",Object(b.b)("inlineCode",{parentName:"td"},"txt")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The report format to be returned."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"load_combinations")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[integer]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of integers"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An array of load combination IDs to report on."),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"sections")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Key-value pairs"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The different type of analysis results to include in your report (see below)"),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h4",{id:"sample-input-for-the-s3dresultsgetanalysisreport-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.getAnalysisReport")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.results.getAnalysisReport",\n  "arguments": {\n    "job_name": "Example Job Name",\n    "file_type": "pdf",\n    "load_combinations": [1, 2, 3],\n    "sections": {\n      "title_page": true,\n      "job_setup": true,\n      "bom": true, // Bill of Materials\n      "nodal_reactions": true,\n      "nodal_forces": false,\n      "nodal_displacements": true,\n      "member_forces": false,\n      "member_displacements": true,\n      "member_stresses": false,\n      "buckling": false,\n      "plate_nodal_forces": false,\n      "plate_element_forces": false,\n      "plate_nodal_moments": false,\n      "plate_element_moments": false,\n      "plate_displacements": false,\n      "plate_nodal_stresses": false,\n      "plate_element_stresses": false,\n      "plate_nodal_equiv_stresses": false,\n      "plate_element_equiv_stresses": false\n    }\n  }\n}\n')),Object(b.b)("h4",{id:"sample-response-for-the-s3dresultsgetanalysisreport-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.getAnalysisReport")," function"),Object(b.b)("p",null,"The function will return links to download and preview your analysis report in the format specified by the ",Object(b.b)("inlineCode",{parentName:"p"},"file_type")," property."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 0,\n  "msg": "Analysis report successfully generated.",\n  "data": {\n    "view_link": "https://solver.skyciv.com/temp/view_report_9rxLAlPHg0VXxrei.php",\n    "download_link": "https://solver.skyciv.com/temp/download_report_9rxLAlPHg0VXxrei.php",\n    "html_download_link": "https://solver.skyciv.com/temp/download_html_report_9rxLAlPHg0VXxrei.php",\n    "file_type": "pdf"\n  }\n}\n')),Object(b.b)("br",null),Object(b.b)("hr",null),Object(b.b)("h2",{id:"s3dmodeltakescreenshot"},Object(b.b)("inlineCode",{parentName:"h2"},"S3D.model.takeScreenshot")),Object(b.b)("p",null,"Takes screenshots of the model from specified perspectives."),Object(b.b)("div",{class:"banner info"},Object(b.b)("a",{href:"S3D.model#s3dmodelset"},Object(b.b)("code",null,"S3D.model.set"))," or ",Object(b.b)("a",{href:"S3D.file#s3dfileopen"},Object(b.b)("code",null,"S3D.file.open"))," must be executed earlier in the session for screenshots to be taken."),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"views")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"[string]")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"iso"),", ",Object(b.b)("inlineCode",{parentName:"td"},"front"),", ",Object(b.b)("inlineCode",{parentName:"td"},"side"),", ",Object(b.b)("inlineCode",{parentName:"td"},"top")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Array of strings, defining the different perspectives to take a screenshot from.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"is_renderer")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"Take screenshots of the structure in the 3D renderer.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"visibility_settings")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"object")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object as defined in ",Object(b.b)("a",Object(a.a)({parentName:"td"},{href:"#visibility-settings"}),Object(b.b)("inlineCode",{parentName:"a"},"visibility_settings"))),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"An object defining additional settings. Only applicable to wireframe display.")))),Object(b.b)("h4",{id:"visibility_settings"},Object(b.b)("inlineCode",{parentName:"h4"},"visibility_settings")),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Key"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"center"}),"Type"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Accepts"),Object(b.b)("th",Object(a.a)({parentName:"tr"},{align:"left"}),"Description"))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"show_nodes")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If nodes should be visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"show_loads")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If loads should be visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"show_plates")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"boolean")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"true"),", ",Object(b.b)("inlineCode",{parentName:"td"},"false")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"If plates should be visible.")),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"projection")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"center"}),Object(b.b)("inlineCode",{parentName:"td"},"string")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"perspective"),", ",Object(b.b)("inlineCode",{parentName:"td"},"orthographic")),Object(b.b)("td",Object(a.a)({parentName:"tr"},{align:"left"}),"The projection of the model to the view-point.")))),Object(b.b)("h4",{id:"sample-input-for-the-s3dresultstakescreenshot-function"},"Sample input for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.takeScreenshot")," function"),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "function": "S3D.model.takeScreenshot",\n  "arguments": {\n    "views": ["iso", "front", "side", "top"],\n    "is_renderer": false,\n    "visibility_settings": {\n      "show_nodes": true,\n      "show_loads": false,\n      "show_plates": true,\n      "projection": "perspective"\n    }\n  }\n}\n')),Object(b.b)("h4",{id:"sample-response-for-the-s3dresultstakescreenshot-function"},"Sample response for the ",Object(b.b)("inlineCode",{parentName:"h4"},"S3D.results.takeScreenshot")," function"),Object(b.b)("div",{class:"banner info"},"The response will return an object of screenshots in base64 format."),Object(b.b)("pre",null,Object(b.b)("code",Object(a.a)({parentName:"pre"},{className:"language-json"}),'{\n  "status": 0,\n  "msg": "Screenshots successfully taken and returned in base64 format.",\n  "data": {\n    "iso": "data:image/png;base64,iVBORw0K...",\n    "front": "data:image/png;base64,EACEpCABCQg....",\n    "side": "data:image/png;base64,GABCQgAQlIQAI....",\n    "top": "data:image/png;base64,CABCUhAAhKQgAQ...."\n  }\n}\n')))}o.isMDXComponent=!0},126:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var a=n(0),r=n.n(a);function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},b=Object.keys(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(a=0;a<b.length;a++)n=b[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=r.a.createContext({}),o=function(e){var t=r.a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=o(e.components);return r.a.createElement(i.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},m=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,b=e.originalType,l=e.parentName,i=c(e,["components","mdxType","originalType","parentName"]),d=o(n),m=a,j=d["".concat(l,".").concat(m)]||d[m]||p[m]||b;return n?r.a.createElement(j,s(s({ref:t},i),{},{components:n})):r.a.createElement(j,s({ref:t},i))}));function j(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var b=n.length,l=new Array(b);l[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:a,l[1]=s;for(var i=2;i<b;i++)l[i]=n[i];return r.a.createElement.apply(null,l)}return r.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);