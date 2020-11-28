(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{126:function(e,r,t){"use strict";t.d(r,"a",(function(){return u})),t.d(r,"b",(function(){return p}));var n=t(0),s=t.n(n);function l(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){l(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function o(e,r){if(null==e)return{};var t,n,s=function(e,r){if(null==e)return{};var t,n,s={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(s[t]=e[t]);return s}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(s[t]=e[t])}return s}var c=s.a.createContext({}),d=function(e){var r=s.a.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=d(e.components);return s.a.createElement(c.Provider,{value:r},e.children)},b={inlineCode:"code",wrapper:function(e){var r=e.children;return s.a.createElement(s.a.Fragment,{},r)}},m=s.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,l=e.originalType,a=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),u=d(t),m=n,p=u["".concat(a,".").concat(m)]||u[m]||b[m]||l;return t?s.a.createElement(p,i(i({ref:r},c),{},{components:t})):s.a.createElement(p,i({ref:r},c))}));function p(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var l=t.length,a=new Array(l);a[0]=m;var i={};for(var o in r)hasOwnProperty.call(r,o)&&(i[o]=r[o]);i.originalType=e,i.mdxType="string"==typeof e?e:n,a[1]=i;for(var c=2;c<l;c++)a[c]=t[c];return s.a.createElement.apply(null,a)}return s.a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},68:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return i})),t.d(r,"rightToc",(function(){return o})),t.d(r,"default",(function(){return d}));var n=t(3),s=t(7),l=(t(0),t(126)),a={id:"s3d-renderer-model",title:"SKYCIV.renderer Model"},i={unversionedId:"s3d-renderer-model",id:"s3d-renderer-model",isDocsHomePage:!1,title:"SKYCIV.renderer Model",description:'function bringToRenderer() {location.hash = "#renderer-container"} --\x3e',source:"@site/docs/docs-s3d-renderer-model.md",slug:"/s3d-renderer-model",permalink:"/api/v3/docs/s3d-renderer-model",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-s3d-renderer-model.md",version:"current",sidebar:"someSidebar",previous:{title:"SKYCIV.renderer Core",permalink:"/api/v3/docs/s3d-renderer-core"},next:{title:"Templates and Assemblies",permalink:"/api/v3/docs/assemblies"}},o=[{value:"<code>viewer.model.set(s3d_model, callback)</code>",id:"viewermodelsets3d_model-callback",children:[]},{value:"<code>viewer.model.buildStructure(run_update)</code>",id:"viewermodelbuildstructurerun_update",children:[]},{value:"<code>viewer.results.set(analysis_results, callback)</code>",id:"viewerresultssetanalysis_results-callback",children:[]},{value:"<code>viewer.results.set(settings_object)</code>",id:"viewerresultssetsettings_object",children:[]},{value:"<code>viewer.results.runDeformationAnimation(settings_object)</code>",id:"viewerresultsrundeformationanimationsettings_object",children:[]},{value:"Examples",id:"examples",children:[{value:"Switch vertical axis on the fly",id:"switch-vertical-axis-on-the-fly",children:[]},{value:"Multi-Renderer Views",id:"multi-renderer-views",children:[]},{value:"Change opacity and colors",id:"change-opacity-and-colors",children:[]}]}],c={rightToc:o};function d(e){var r=e.components,t=Object(s.a)(e,["components"]);return Object(l.b)("wrapper",Object(n.a)({},c,t,{components:r,mdxType:"MDXLayout"}),Object(l.b)("p",null,"SkyCiv 3D renderer is available to bring your models to 3D life. Use the SkyCiv Renderer to build your model and visualise the model to ensure the structure is built correctly, confirm member orientation and include in your reporting."),Object(l.b)("p",null,"This client side renderer can be included in your applications so you can have a full rendering of your model in real-time."),Object(l.b)("div",{id:"renderer-container"}),Object(l.b)("h1",{id:"model-class"},"Model Class"),Object(l.b)("h2",{id:"viewermodelsets3d_model-callback"},Object(l.b)("inlineCode",{parentName:"h2"},"viewer.model.set(s3d_model, callback)")),Object(l.b)("p",null,"Sets/updates your S3D model in the viewer."),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("h2",{id:"viewermodelbuildstructurerun_update"},Object(l.b)("inlineCode",{parentName:"h2"},"viewer.model.buildStructure(run_update)")),Object(l.b)("p",null,"Builds the object to be read by the renderer. ",Object(l.b)("inlineCode",{parentName:"p"},"run_update")," is a boolean"),Object(l.b)("h1",{id:"results-class"},"Results Class"),Object(l.b)("h2",{id:"viewerresultssetanalysis_results-callback"},Object(l.b)("inlineCode",{parentName:"h2"},"viewer.results.set(analysis_results, callback)")),Object(l.b)("p",null,"The object ",Object(l.b)("inlineCode",{parentName:"p"},"analysis_results")," can be generated from our structural analysis via S3D.model.solve. Below is an example of a function to display some results data and modifying the deformation of the structure."),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    function setResults() {\n        viewer.results.set(analysis_results[1][0]); // set first LC only\n        viewer.setMode('results');\n\n        // Turn on deformed shape\n        viewer.results.setDeformationScale(3); // 0-5\n        viewer.results.deformedStructure();\n\n        // Turn on member color results\n        var sett = viewer.results.getSettings();\n        sett.members = false; // member contours\n        sett.plates = false; // plate contours\n        sett.current_result_key = 'displacement';\n        viewer.render();\n    }\n\n")),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("h2",{id:"viewerresultssetsettings_object"},Object(l.b)("inlineCode",{parentName:"h2"},"viewer.results.set(settings_object)")),Object(l.b)("p",null,"Set the results settings. Format of the result settings is as follows:"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-json"}),'{\n    "deformation_scale": 0, // 0-5\n    "members": false,\n    "plates": false,\n    "plate_elements": false, // elemental results\n    "current_result_key": "displacement",\n}\n')),Object(l.b)("br",null),Object(l.b)("br",null),Object(l.b)("hr",null),Object(l.b)("h2",{id:"viewerresultsrundeformationanimationsettings_object"},Object(l.b)("inlineCode",{parentName:"h2"},"viewer.results.runDeformationAnimation(settings_object)")),Object(l.b)("p",null,"Runs an animation of the structure's deformation."),Object(l.b)("h2",{id:"examples"},"Examples"),Object(l.b)("p",null,"In these examples S3D.renderer is the new instance of where SKYCIV.renderer()."),Object(l.b)("h3",{id:"switch-vertical-axis-on-the-fly"},"Switch vertical axis on the fly"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),'    var s3d_model = S3D.renderer.model.get();\n    s3d_model.settings.vertical_axis = "Z"; // or "Y"\n\n    my_viewer.model.set(s3d_model);\n    my_viewer.model.buildStructure();\n    my_viewer.render();\n')),Object(l.b)("h3",{id:"multi-renderer-views"},"Multi-Renderer Views"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"\n    var viewer_1 = new SKYCIV.renderer({\n        for_use_in_S3D: true, // local dev must use S3D format as we don't have S3D.API script\n        container_selector: '#renderer-container2'\n    });\n\n    viewer_1.model.set(s3d_data.model[1]);\n\n    viewer_1.model.buildStructure();\n    viewer_1.render();\n\n    var viewer_2 = new SKYCIV.renderer({\n        for_use_in_S3D: true, // local dev must use S3D format as we don't have S3D.API script\n        container_selector: '#renderer-container2'\n    });\n\n    viewer_2.model.set(s3d_data.model[2]);\n\n    viewer_2.model.buildStructure();\n    viewer_2.render();\n\n    viewer_1.resize();\n    viewer_2.resize();\n")),Object(l.b)("h3",{id:"change-opacity-and-colors"},"Change opacity and colors"),Object(l.b)("pre",null,Object(l.b)("code",Object(n.a)({parentName:"pre"},{className:"language-js"}),"    var sett = S3D.renderer.settings.get();\n    sett.opacity = 0.5;\n    sett.colors = false;\n    S3D.renderer.render();\n")))}d.isMDXComponent=!0}}]);