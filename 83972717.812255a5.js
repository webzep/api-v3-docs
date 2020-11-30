(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{127:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return j}));var r=n(0),c=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),b=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},d=function(e){var t=b(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},p=c.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,l=e.parentName,s=a(e,["components","mdxType","originalType","parentName"]),d=b(n),p=r,j=d["".concat(l,".").concat(p)]||d[p]||u[p]||i;return n?c.a.createElement(j,o(o({ref:t},s),{},{components:n})):c.a.createElement(j,o({ref:t},s))}));function j(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=p;var o={};for(var a in t)hasOwnProperty.call(t,a)&&(o[a]=t[a]);o.originalType=e,o.mdxType="string"==typeof e?e:r,l[1]=o;for(var s=2;s<i;s++)l[s]=n[s];return c.a.createElement.apply(null,l)}return c.a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return l})),n.d(t,"metadata",(function(){return o})),n.d(t,"rightToc",(function(){return a})),n.d(t,"default",(function(){return b}));var r=n(3),c=n(7),i=(n(0),n(127)),l={id:"s3d-renderer-core",title:"SKYCIV.renderer Core"},o={unversionedId:"s3d-renderer-core",id:"s3d-renderer-core",isDocsHomePage:!1,title:"SKYCIV.renderer Core",description:"---",source:"@site/docs/docs-s3d-renderer-core.md",slug:"/s3d-renderer-core",permalink:"/api-v3-docs/docs/s3d-renderer-core",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-s3d-renderer-core.md",version:"current",sidebar:"someSidebar",previous:{title:"S3D.file",permalink:"/api-v3-docs/docs/S3D.file"},next:{title:"SKYCIV.renderer Model",permalink:"/api-v3-docs/docs/s3d-renderer-model"}},a=[{value:"Getting Started",id:"getting-started",children:[{value:"<code>viewer.setMode(mode)</code>",id:"viewersetmodemode",children:[]},{value:"<code>viewer.setView(view)</code>",id:"viewersetviewview",children:[]},{value:"<code>viewer.render(callback, dont_call_model_update)</code>",id:"viewerrendercallback-dont_call_model_update",children:[]},{value:"<code>viewer.refresh()</code>",id:"viewerrefresh",children:[]},{value:"<code>viewer.clear()</code>",id:"viewerclear",children:[]},{value:"<code>viewer.screenshot.get(args)</code>",id:"viewerscreenshotgetargs",children:[]},{value:"<code>viewer.screenshot.save(args)</code>",id:"viewerscreenshotsaveargs",children:[]}]},{value:"Settings and Menu",id:"settings-and-menu",children:[{value:"<code>viewer.settings.set(settings_object)</code>",id:"viewersettingssetsettings_object",children:[]}]},{value:"Click Events",id:"click-events",children:[{value:"<code>viewer.mouse.enable()</code>",id:"viewermouseenable",children:[]},{value:"<code>viewer.mouse.selectedObject(object_type, ID)</code>",id:"viewermouseselectedobjectobject_type-id",children:[]},{value:"<code>viewer.mouse.getSelectedObjects(object_type)</code>",id:"viewermousegetselectedobjectsobject_type",children:[]},{value:"<code>viewer.mouse.setOnObjectClickFunction(function)</code>",id:"viewermousesetonobjectclickfunctionfunction",children:[]}]}],s={rightToc:a};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("script",{src:"https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist.js"}),Object(i.b)("script",{src:"https://code.jquery.com/jquery-3.4.1.min.js"}),Object(i.b)("script",{src:"/api-v3-docs/js/renderer-sample.js"}),Object(i.b)("hr",null),Object(i.b)("p",null,"SkyCiv 3D renderer is available to bring your models to 3D life. Use the SkyCiv Renderer to build your model and visualise the model to ensure the structure is built correctly, confirm member orientation and include in your reporting."),Object(i.b)("p",null,"This client side renderer can be included in your applications so you can have a full rendering of your model in real-time. The viewer is fully functional on mobile and tablet devices."),Object(i.b)("hr",null),Object(i.b)("img",{src:"/api-v3-docs/img/images/3d-renderer-viewer.png",style:{width:"80%"}}),Object(i.b)("p",null,"Some of the functionality of this library includes:"),Object(i.b)("ul",null,Object(i.b)("li",{parentName:"ul"},"Initialising the renderer"),Object(i.b)("li",{parentName:"ul"},"Updating your model data"),Object(i.b)("li",{parentName:"ul"},"Displaying Results"),Object(i.b)("li",{parentName:"ul"},"Mouse click events"),Object(i.b)("li",{parentName:"ul"},"Take screenshots")),Object(i.b)("h2",{id:"getting-started"},"Getting Started"),Object(i.b)("p",null,"Simply include the ",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"https://api.skyciv.com/dist/v3/javascript/skyciv-renderer-dist.js"}),"s3d-renderer.js file")," on your page. Then run the following to initialize the renderer:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),"    var viewer = new SKYCIV.renderer({\n        container_selector: '#renderer-container',\n    });\n\n    viewer.model.set(s3d_model);\n    viewer.model.buildStructure();\n    viewer.render();\n")),Object(i.b)("p",null,"This will initialise the viewer Object and display the following in your container:"),Object(i.b)("div",{id:"render-div"},Object(i.b)("div",{id:"renderer-container"})),Object(i.b)("br",null),Object(i.b)("a",{href:"https://platform.skyciv.com/api/v3#model-header",target:"_blank",className:"sample-code-btn"},"Test our Renderer"),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewersetmodemode"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.setMode(mode)")),Object(i.b)("p",null,"Toggle between the renderer mode, between either ",Object(i.b)("inlineCode",{parentName:"p"},'"model"')," or ",Object(i.b)("inlineCode",{parentName:"p"},'"results"')),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewersetviewview"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.setView(view)")),Object(i.b)("p",null,"Changes the camera view (front, side, top, iso)"),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewerrendercallback-dont_call_model_update"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.render(callback, dont_call_model_update)")),Object(i.b)("p",null,"Makes the 3D graphics perform a render of the current state. No changes are visible to the renderer until this function is called. This function will call SKYCIV.renderer.model.update by default unless told not to."),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewerrefresh"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.refresh()")),Object(i.b)("p",null,"Refreshes the render completely (rebuilds the structure and renders again)"),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewerclear"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.clear()")),Object(i.b)("p",null,"Refreshes the render completely (rebuilds the structure and renders again)"),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewerscreenshotgetargs"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.screenshot.get(args)")),Object(i.b)("p",null,"Gets screenshot and returns the base64 data of the image in the callback. Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'    viewer.screenshot.get({\n        "axis": true,\n        "background": "white",\n        "callback": function(data) {\n            console.log(data);\n        }\n    })\n')),Object(i.b)("br",null),Object(i.b)("br",null),Object(i.b)("hr",null),Object(i.b)("h3",{id:"viewerscreenshotsaveargs"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.screenshot.save(args)")),Object(i.b)("p",null,"Saves screenshot to device. Example:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'    viewer.screenshot.get({\n        "axis": true,\n        "background": "white",\n        "filename": "my_screenshot.png"\n    })\n')),Object(i.b)("h2",{id:"settings-and-menu"},"Settings and Menu"),Object(i.b)("h3",{id:"viewersettingssetsettings_object"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.settings.set(settings_object)")),Object(i.b)("p",null,"Updates the settings of your renderer. Here are some of the options that can be passed in as settings_object:"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-json"}),'{\n    "visibility": {\n        "logo": true,\n        "floor": false,\n        "nodes": false,\n        "members": true,\n        "plates": true,\n        "plates_mesh": false,\n        "global_origin_axis": false,\n        "global_axis": true,\n        "local_axis": false,\n    },\n    "colors": true,\n    "opacity": 1,\n}\n')),Object(i.b)("h2",{id:"click-events"},"Click Events"),Object(i.b)("h3",{id:"viewermouseenable"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.mouse.enable()")),Object(i.b)("p",null,"Enable mouse interaction (on by default)"),Object(i.b)("h3",{id:"viewermouseselectedobjectobject_type-id"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.mouse.selectedObject(object_type, ID)")),Object(i.b)("p",null,'Manually select/highlight an object in the scene ("node", "member, "plate") by its ID'),Object(i.b)("h3",{id:"viewermousegetselectedobjectsobject_type"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.mouse.getSelectedObjects(object_type)")),Object(i.b)("p",null,"Gets all selected/highlighted objects in the scene. If object_type is specified then it will only return the highlighted objects of that type. Leave as null to get all selected elements."),Object(i.b)("h3",{id:"viewermousesetonobjectclickfunctionfunction"},Object(i.b)("inlineCode",{parentName:"h3"},"viewer.mouse.setOnObjectClickFunction(function)")),Object(i.b)("p",null,"Function to call when clicking/selecting an object"),Object(i.b)("pre",null,Object(i.b)("code",Object(r.a)({parentName:"pre"},{className:"language-js"}),'    viewer.mouse.setOnObjectClickFunction(function(data) {\n        console.log(\'You have an clicked Element\', data);\n        var element_id = data.id;\n        var type = data.type // ("member", "node", "plate")\n    });\n\n')))}b.isMDXComponent=!0}}]);