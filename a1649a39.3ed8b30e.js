(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{101:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var a=n(3),r=n(7),c=(n(0),n(127)),o={id:"assemblies",title:"Templates and Assemblies"},i={unversionedId:"assemblies",id:"assemblies",isDocsHomePage:!1,title:"Templates and Assemblies",description:"The SkyCiv assembly library provides a series of functions that can be used to quickly model a structure. A multitude of functions are provided and can be strung together in any order to create custom a structural model template.",source:"@site/docs/docs-assemblies.md",slug:"/assemblies",permalink:"/api-v3-docs/docs/assemblies",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/docs-assemblies.md",version:"current",sidebar:"someSidebar",previous:{title:"SKYCIV.renderer Model",permalink:"/api-v3-docs/docs/s3d-renderer-model"},next:{title:"Loads",permalink:"/api-v3-docs/docs/loads"}},s=[{value:"Getting Started",id:"getting-started",children:[]},{value:"<code>SKYCIV.structure.parametric.init</code>",id:"skycivstructureparametricinit",children:[]},{value:"Input Object Structure",id:"input-object-structure",children:[]},{value:"<strong>Steps</strong>",id:"steps",children:[{value:"Cad Line Function",id:"cad-line-function",children:[]},{value:"Cad Plate Function",id:"cad-plate-function",children:[]},{value:"Cad Repeat Function",id:"cad-repeat-function",children:[]},{value:"Cad Rotate Function",id:"cad-rotate-function",children:[]},{value:"Cad Curve Function",id:"cad-curve-function",children:[]},{value:"Cad Join Function",id:"cad-join-function",children:[]},{value:"Cad Truss Function",id:"cad-truss-function",children:[]}]}],d={rightToc:s};function l(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)("wrapper",Object(a.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"The SkyCiv assembly library provides a series of functions that can be used to quickly model a structure. A multitude of functions are provided and can be strung together in any order to create custom a structural model template."),Object(c.b)("h3",{id:"getting-started"},"Getting Started"),Object(c.b)("p",null,"Include the ",Object(c.b)("a",{href:"https://api.skyciv.com/dist/v3/javascript/skyciv-parametric-dist.js"},"skyciv-parametric-dist.js")," file on your page to get access to the parametric library. Download the sample file below and open it in a web browser to build a Gable Roof warehouse model using only the assembly library. "),Object(c.b)("a",{href:"/html/assembly.html"},"Sample Assemblies Functionality"),".",Object(c.b)("h2",{id:"skycivstructureparametricinit"},Object(c.b)("inlineCode",{parentName:"h2"},"SKYCIV.structure.parametric.init")),Object(c.b)("p",null,"Pass in an assembly object or a model object and an assembly object into this function to build the overall assembly. This function will return a model object back"),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'SKYCIV.structure.parametric.init({\n    "assembly_obj" : assembly_obj,\n    "model_data": model_data // optional\n})\n')),Object(c.b)("h2",{id:"input-object-structure"},"Input Object Structure"),Object(c.b)("p",null,"The functions in this library require a specific input object that will be discussed through out this document. The assembly object is made from three parts, the input structure and requirements are explained in greater detail below. A skeleton assembly object is also provided below."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "title" : "Assembly Title",\n    "variables": {\n        "variable_1" : {\n            "value": , // float or truss_style\n            "type": ,\n        },\n    },\n    "steps": [\n        {}, // defineCadLine obj, [Cad ID #1]\n        {}, // defineCadTruss obj, [Cad ID #2]\n        {}, // defineCadLine obj, [Cad ID #3]\n        {}, // defineCadRepeat obj, [Cad ID #4]\n        {}, // defineCadJoin obj, [Cad ID #5]\n    ]\n}\n')),Object(c.b)("h4",{id:"variable-types"},"Variable Types"),Object(c.b)("p",null,"Variable type can be either ",Object(c.b)("inlineCode",{parentName:"p"},'"float"')," or ",Object(c.b)("inlineCode",{parentName:"p"},'"truss_style"'),". "),Object(c.b)("p",null,"The value of ",Object(c.b)("inlineCode",{parentName:"p"},'"truss_style"')," can be ",Object(c.b)("inlineCode",{parentName:"p"},'"warren"'),", ",Object(c.b)("inlineCode",{parentName:"p"},'"gambrel"')," ,",Object(c.b)("inlineCode",{parentName:"p"},'"straight"')," ,",Object(c.b)("inlineCode",{parentName:"p"},'"cross"')," or ",Object(c.b)("inlineCode",{parentName:"p"},'"pratt"')),Object(c.b)("hr",null),Object(c.b)("h2",{id:"steps"},Object(c.b)("strong",{parentName:"h2"},"Steps")),Object(c.b)("p",null,"The Steps part of the assembly object govern how the model gets built. The order of which steps are define will also greatly affect the output model. Each cad function generates a cad element. "),Object(c.b)("h3",{id:"cad-line-function"},"Cad Line Function"),Object(c.b)("p",null,"The Cad Line function allows users to generate a member based on a certain set of inputs. This function can be called three ways and each way requires different set of inputs."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_line",\n    type: "vector",\n    ref_pt : [1,2,3] or {x : 1, y: 1, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    vector: [0,1,0] or {x : 0, y: 1, z: 0},\n    supports: [ "0" or "100" or "all", "FFFFFF"],\n    segments: 3, \n    length: 4,\n    section_id: 1\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_line",\n    type: "points",\n    points: [\n        [1,2,3] or {x : 1, y: 2, z: 3} or {cad_id : "2_1", cad_perc: 33},\n        [1,3,3] or {x : 1, y: 3, z: 3} or {cad_id : "2_1", cad_perc: 33},\n    ],\n    supports: [ "0" or "100" or "all", "FFFFFF"],\n    section_id: 1\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_line",\n    type: "angle",\n    plane: "xy",\n    angle: "30",\n    start_pt: [1,2,3] or {x : 1, y: 1, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    length: 4,\n    segments: 3,\n    supports: [ "0" or "100" or "all", "FFFFFF"],\n    section_id: 1\n}\n')),Object(c.b)("h3",{id:"cad-plate-function"},"Cad Plate Function"),Object(c.b)("p",null,"Users can add parametric plates that are dynamic and move with the rest of the structure. Cad Plates are built on points only."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_plate",\n    type: "points",\n    points: [\n        [0,0,0] or {x : 0, y: 0, z: 0} or {cad_id : "2_1", cad_perc: 33},\n        [0,1,0] or {x : 0, y: 1, z: 0} or {cad_id : "2_1", cad_perc: 33},\n        [1,1,0] or {x : 1, y: 1, z: 0} or {cad_id : "2_1", cad_perc: 33},\n        [1,0,0] or {x : 1, y: 0, z: 0} or {cad_id : "2_1", cad_perc: 33},\n    ],\n    thickness: 3\n}\n')),Object(c.b)("h3",{id:"cad-repeat-function"},"Cad Repeat Function"),Object(c.b)("p",null,"The Cad Repeat function allows users to repeat existing cad elements in a certain direction or based on the points given. Cad functions to be repeated must be set before this function in the array of steps."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_repeat",\n    type: "vector"\n    repetitions: 3,\n    ref_ids: ["1", "1_1"],\n    vector: [0, 1, 0] or {x: 1, y: 2, z: 1},\n    length: 2,\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_repeat",\n    type: "points"\n    repetitions: 3,\n    ref_ids: ["1", "1_1"],\n    points: [\n        [0, 1, 0] or {x: 1, y: 2, z: 1},\n        [0, 1, 0] or {x: 1, y: 2, z: 1},\n        [0, 1, 0] or {x: 1, y: 2, z: 1},\n    ],\n}\n')),Object(c.b)("h3",{id:"cad-rotate-function"},"Cad Rotate Function"),Object(c.b)("p",null,"The Cad Rotate function allows users to rotate existing cad elements. Similar to cad repeat, cad functions to be rotated must be set before this function in the array of steps."),Object(c.b)("hr",null),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "cad_type": "cad_rotate",\n    "axis": "y",\n    "angle": "180",\n    "repetitions": 1,\n    "ref_ids": ["1", "1_1"],\n}\n')),Object(c.b)("h3",{id:"cad-curve-function"},"Cad Curve Function"),Object(c.b)("p",null,"The Cad Curve function allows users to generate curve members when given a certain inputs. This function can be called by specifying the arc to rotate about or the start and end points of the curve."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_curve",\n    type: "centerarc" \n    center_pt: [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    radius: 10,\n    directions: ["x","y"], // Length then height direction\n    angle: 360,\n    segments: 3,\n    section_id: 1,\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    // the two points have to be in the xy, xz, or yz plane\n    cad_type: "cad_curve",\n    type: "startend" \n    start_pt: [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    end_pt: [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    direction: "x",\n    segments: 10,\n    circle: false,\n}\n')),Object(c.b)("h3",{id:"cad-join-function"},"Cad Join Function"),Object(c.b)("p",null,"The Cad Join function allows users to join nodes and nodes of any existing cad elements to another set of nodes. "),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    cad_type: "cad_join",\n    style: "straight",\n    segments: 1,\n    set_1: [\n        [0, 0, 1] or { x: 1, y: 2, z: 3 },\n        [0, 0, 1] or { x: 1, y: 2, z: 3 },\n        [0, 0, 1] or { x: 1, y: 2, z: 3 },              \n    ] or {\n        cad_id: "1"\n    },\n    set_2: [\n        [0, 0, 1] or { x: 1, y: 2, z: 3 },\n        [0, 0, 1] or { x: 1, y: 2, z: 3 },\n        [0, 0, 1] or { x: 1, y: 2, z: 3 },              \n    ] or {\n        cad_id: "2"\n    },\n    reverse: true,\n    section_id: 1\n}\n')),Object(c.b)("h3",{id:"cad-truss-function"},"Cad Truss Function"),Object(c.b)("p",null,"The Cad Truss function allows users to create trusses based on given input. It can generate 3D trusses when given nodes or 2D trusses when given parameters."),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "cad_type": "cad_truss",\n    "type": "nodes",\n    "start_pts": [\n        [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n        [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    ],\n    "end_pts": [\n        [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n        [0, 1, 0] or {x: 1, y: 2, z: 1} or {cad_id : "2_1", cad_perc: 33},\n    ],\n    "bays" : 3,\n    "web_section_id": 1,\n    "chord_section_id": 2,\n    "style" : "straight"\n}\n')),Object(c.b)("pre",null,Object(c.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),'{\n    "cad_type": "cad_truss",\n    "type" : "2D",\n    "ref_pt" : [1,1,1],\n    "length": ["x", 10],\n    "height": ["y", 10],\n    "offset": 30  or [30,30],\n    "style": "warren",\n    "web_section_id": 1,\n    "chord_section_id": 2,\n    "segments" : 3\n}\n')))}l.isMDXComponent=!0},127:function(e,t,n){"use strict";n.d(t,"a",(function(){return u})),n.d(t,"b",(function(){return m}));var a=n(0),r=n.n(a);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},c=Object.keys(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(a=0;a<c.length;a++)n=c[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=r.a.createContext({}),l=function(e){var t=r.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=l(e.components);return r.a.createElement(d.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},b=r.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,c=e.originalType,o=e.parentName,d=s(e,["components","mdxType","originalType","parentName"]),u=l(n),b=a,m=u["".concat(o,".").concat(b)]||u[b]||p[b]||c;return n?r.a.createElement(m,i(i({ref:t},d),{},{components:n})):r.a.createElement(m,i({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var c=n.length,o=new Array(c);o[0]=b;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var d=2;d<c;d++)o[d]=n[d];return r.a.createElement.apply(null,o)}return r.a.createElement.apply(null,n)}b.displayName="MDXCreateElement"}}]);