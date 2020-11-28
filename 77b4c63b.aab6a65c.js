(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{126:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d}));var a=n(0),i=n.n(a);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=i.a.createContext({}),p=function(e){var t=i.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},b=function(e){var t=p(e.components);return i.a.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},h=i.a.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,r=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),b=p(n),h=a,d=b["".concat(r,".").concat(h)]||b[h]||u[h]||o;return n?i.a.createElement(d,l(l({ref:t},s),{},{components:n})):i.a.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,r=new Array(o);r[0]=h;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var s=2;s<o;s++)r[s]=n[s];return i.a.createElement.apply(null,r)}return i.a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},93:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return r})),n.d(t,"metadata",(function(){return l})),n.d(t,"rightToc",(function(){return c})),n.d(t,"default",(function(){return p}));var a=n(3),i=n(7),o=(n(0),n(126)),r={id:"packages",title:"Packages",sidebar_label:"Packages"},l={unversionedId:"packages",id:"packages",isDocsHomePage:!1,title:"Packages",description:"The SkyCiv Team has developed packages for some of the popular languages to help keep your code clean!",source:"@site/docs/getting-started-packages.md",slug:"/packages",permalink:"/api/v3/docs/packages",editUrl:"https://github.com/facebook/docusaurus/edit/master/website/docs/getting-started-packages.md",version:"current",sidebar_label:"Packages",sidebar:"someSidebar",previous:{title:"API Credits",permalink:"/api/v3/docs/api-calls"},next:{title:"Creating the API Object",permalink:"/api/v3/docs/creating-the-api-object"}},c=[{value:"<strong>NPM - JavaScript</strong>",id:"npm---javascript",children:[{value:"Experienced with NPM?",id:"experienced-with-npm",children:[]},{value:"New to NPM?",id:"new-to-npm",children:[]}]},{value:"<strong>Pip - Python 3</strong>",id:"pip---python-3",children:[{value:"Experienced with Pip?",id:"experienced-with-pip",children:[]},{value:"New to Pip?",id:"new-to-pip",children:[]}]},{value:"<strong>NuGet - C#</strong>",id:"nuget---c",children:[{value:"What is NuGet?",id:"what-is-nuget",children:[]},{value:"Installing the SkyCiv API Package",id:"installing-the-skyciv-api-package",children:[]},{value:"Using the Package",id:"using-the-package",children:[]}]}],s={rightToc:c};function p(e){var t=e.components,n=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(a.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"The SkyCiv Team has developed packages for some of the popular languages to help keep your code clean!\n\\\nWe highly recommend the use of these packages and we will further develop them to include useful tools in the future."),Object(o.b)("p",null,"We support packages for Javascript, Python 3 and NuGet, with the following package technologies:"),Object(o.b)("ul",null,Object(o.b)("li",null,Object(o.b)("a",{href:"#npm-javascript"},"NPM for Javascript")),Object(o.b)("li",null,Object(o.b)("a",{href:"#pip-python-3"},"Pip for Python 3")),Object(o.b)("li",null,Object(o.b)("a",{href:"#nuget-c"},"NuGet for C#"))),Object(o.b)("br",null),Object(o.b)("hr",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"npm---javascript"},Object(o.b)("strong",{parentName:"h2"},"NPM - JavaScript")),Object(o.b)("p",null,"If you're already familiar with NPM, then jump down ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#experienced-with-npm"}),"here"),". If you're new to NPM, don't fear, we'll help you get setup ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#new-to-npm"}),"down below"),"!"),Object(o.b)("p",null,"You can also view the package on ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.npmjs.com/package/skyciv"}),"the NPM website"),"."),Object(o.b)("h3",{id:"experienced-with-npm"},"Experienced with NPM?"),Object(o.b)("p",null,"If you already know how to use NPM then here is what you're looking for:"),Object(o.b)("h4",{id:"install-the-skyciv-package"},"Install the skyciv package"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"npm i skyciv")),Object(o.b)("h4",{id:"basic-usage"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const skyciv = require('skyciv');\n\nconst data = {YOUR_API_OBJECT}\n\nskyciv.request(data, function(res) {\n    // Do something with results object \"res\"\n}, options);\n")),Object(o.b)("h4",{id:"useful-links"},"Useful links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/creating-the-api-object"}),"Creating the ",Object(o.b)("inlineCode",{parentName:"a"},"API_OBJECT")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/interpreting-the-response"}),"Interpreting the ",Object(o.b)("inlineCode",{parentName:"a"},"response"))))),Object(o.b)("h3",{id:"new-to-npm"},"New to NPM?"),Object(o.b)("p",null,"We've provided a crash course for NPM below. If you have any questions then get in touch with our team!"),Object(o.b)("h4",{id:"what-is-npm"},"What is NPM?"),Object(o.b)("p",null,"NPM (Node Package Manager) is a package manager for the JavaScript language. It allows developers to bundle up some useful code for others to use. There is two components to NPM:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://www.npmjs.com/"}),"The website")," where you can browse publicly available packages and; "),Object(o.b)("li",{parentName:"ol"},"The command line client, allowing you to add packages to your project via the command line.")),Object(o.b)("p",null,"To demonstrate its awesomeness, the SkyCiv NPM package turns over 100 lines of code into a single function and will also provide some verification on your input. This is very useful when trying to keep your code clean!"),Object(o.b)("h4",{id:"installing-npm"},"Installing NPM"),Object(o.b)("p",null,"If you haven't used NPM before, there is a couple of things to get going which we will run you through here."),Object(o.b)("h4",{id:"nodejs"},"Node.js"),Object(o.b)("p",null,"Node.js is an open source server environment which uses JavaScript so you don't have to use a browser to run JavaScript!"),Object(o.b)("p",null,"You will need to install Node.js to your machine. Download the right version for your machine on the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://nodejs.org/en/download/"}),"Node.js website"),". "),Object(o.b)("p",null,"Once you have installed Node.js, open the command terminal and type in ",Object(o.b)("inlineCode",{parentName:"p"},"node -v"),". The terminal should print a version number confirming that it has been installed. Likewise, you should now have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"npm")," command, so type in ",Object(o.b)("inlineCode",{parentName:"p"},"npm -v")," and the terminal will print the NPM version number."),Object(o.b)("img",{style:{maxWidth:"30rem"},src:"/api/v3/img/images/npm-version-check.png"}),Object(o.b)("h4",{id:"creating-a-project"},"Creating a project"),Object(o.b)("p",null,"We can now create a project and add the ",Object(o.b)("inlineCode",{parentName:"p"},"skyciv")," dependency to it, so lets do that!"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to your Desktop and create a new folder with your project name such as ",Object(o.b)("inlineCode",{parentName:"li"},"sample-project"),"."),Object(o.b)("li",{parentName:"ol"},"Open this folder in your preferred code editor. ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"VS Code")," is great (and free) for this purpose."),Object(o.b)("li",{parentName:"ol"},"In the VS Code menu, click ",Object(o.b)("inlineCode",{parentName:"li"},"Terminal > New Terminal")," and your will now have a command line available at the bottom of the window.")),Object(o.b)("img",{style:{maxWidth:"60rem"},src:"/api/v3/img/images/vscode-open-terminal.png"}),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"In the terminal, you should see the path that points to your ",Object(o.b)("inlineCode",{parentName:"li"},"sample-project")," directory. Enter the command ",Object(o.b)("inlineCode",{parentName:"li"},"npm init -y"),". The option ",Object(o.b)("inlineCode",{parentName:"li"},"-y"),' means "answer yes to all the following questions". This will create the npm file named package.json which will contain those answers. By default the entry point to your app will now be the file named index.js which is common convention. You can see this under the "main" key in the package.json file.')),Object(o.b)("img",{style:{maxWidth:"60rem"},src:"/api/v3/img/images/npm-init-demo.png"}),Object(o.b)("p",null,Object(o.b)("em",{parentName:"p"},"Quick note"),": The package.json file means you can send the project to other people without the node_modules folder and they will know what dependencies the project relies on. These can automatically be installed by using the command ",Object(o.b)("inlineCode",{parentName:"p"},"npm i")," (or ",Object(o.b)("inlineCode",{parentName:"p"},"npm install"),") from within the project directory. The node_modules folder can get ",Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"very"))," big so its nice to not include it therefore only making copies of the dependencies where they're required."),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"In the terminal, enter the command ",Object(o.b)("inlineCode",{parentName:"li"},"npm i skyciv"),". A folder called node_modules will be added to your project containing the skyciv package. Another file called package-lock.json will also be added."),Object(o.b)("li",{parentName:"ol"},"In the file explorer to the left, create a new file named ",Object(o.b)("inlineCode",{parentName:"li"},"index.js")," in the top level of the project. This is where your project code will live!")),Object(o.b)("h4",{id:"using-the-skyciv-package"},"Using the SkyCiv Package"),Object(o.b)("p",null,"Now you have a project ready to go, we can add some code. This is the cool part!"),Object(o.b)("p",null,"With the skyciv package, you now have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"skyciv.request()")," function. The function takes three parameters:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"data"),": This is the API object that defines your structure and functions you would like to run."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"callback function"),": Once the response is received, this function will run."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": An optional parameter which allows you to choose which version of the API to use and whether to use http or https.")),Object(o.b)("p",null,"For this sample we will omit the options parameter. The request will default to version 3 of the API and use https."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-js"}),"const skyciv = require('skyciv'); // This gives you access to the skyciv code that we added to the project\n\nconst data = __YOUR_API_OBJECT__; // This will be your API object. See the link below for sample code.\n\nskyciv.request(data, function (res) {\n    // Do something with results object \"res\"\n    console.log(res);\n});\n")),Object(o.b)("p",null,"That's it! Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," constant with your data, then in the terminal use the node command to run your index.js script by typing ",Object(o.b)("inlineCode",{parentName:"p"},"node index.js"),". "),Object(o.b)("p",null,"To use NPM packages in the future, you can start from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#creating-a-project"}),"Creating a project")," as you now have Node.js installed!"),Object(o.b)("h4",{id:"useful-links-1"},"Useful links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/creating-the-api-object"}),"Creating the ",Object(o.b)("inlineCode",{parentName:"a"},"API_OBJECT")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/interpreting-the-response"}),"Interpreting the ",Object(o.b)("inlineCode",{parentName:"a"},"response"))))),Object(o.b)("br",null),Object(o.b)("hr",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"pip---python-3"},Object(o.b)("strong",{parentName:"h2"},"Pip - Python 3")),Object(o.b)("h3",{id:"experienced-with-pip"},"Experienced with Pip?"),Object(o.b)("p",null,"If you already know how to use Pip then here is what you're looking for:"),Object(o.b)("h4",{id:"install-the-skyciv-package-1"},"Install the skyciv package"),Object(o.b)("p",null,Object(o.b)("inlineCode",{parentName:"p"},"pip install skyciv")),Object(o.b)("h4",{id:"basic-usage-1"},"Basic usage"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import skyciv\n\ndata = {YOUR_API_OBJECT}\n\noptions = {\n    version: 3,\n    http_or_https: 'https'\n}\n\nresults = skyciv.request(data, options)\n")),Object(o.b)("h5",{id:"useful-links-2"},"Useful links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/creating-the-api-object"}),"Creating the ",Object(o.b)("inlineCode",{parentName:"a"},"API_OBJECT")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/interpreting-the-response"}),"Interpreting the ",Object(o.b)("inlineCode",{parentName:"a"},"response"))))),Object(o.b)("h3",{id:"new-to-pip"},"New to Pip?"),Object(o.b)("h4",{id:"what-is-pip"},"What is Pip?"),Object(o.b)("p",null,"Pip is a package manager for the Python language. It allows developers to bundle up some useful code for others to use. There is two main components to Pip:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://pypi.org/"}),"The PyPI website")," (the default source) where you can browse publicly available packages and; "),Object(o.b)("li",{parentName:"ol"},"The command line client allowing you to add packages to your project via the command line.")),Object(o.b)("p",null,"To demonstrate its awesomeness, the SkyCiv Pip package turns dozens of lines of code into a single function and will also provide some verification on your input. This is very useful when trying to keep your code clean!"),Object(o.b)("h4",{id:"installing-pip"},"Installing Pip"),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," Python 3 is required to use the skyciv package."),Object(o.b)("h4",{id:"check-if-you-have-python"},"Check if you have Python"),Object(o.b)("p",null,"If you have previously installed Python 3 onto your machine, then it is likely that you already have Pip. To check if you have python, use the following command in the terminal:"),Object(o.b)("p",null,"Windows: ",Object(o.b)("inlineCode",{parentName:"p"},"python3 -V")),Object(o.b)("p",null,"MacOS: ",Object(o.b)("inlineCode",{parentName:"p"},"python3 -V")),Object(o.b)("p",null,"If the terminal prints a version number then move on to checking if you have pip. Otherwise, head over and download the latest version of ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.python.org/downloads/"}),"Python 3")," and then continue to check if Pip becomes available."),Object(o.b)("h4",{id:"check-if-you-have-pip"},"Check if you have Pip"),Object(o.b)("p",null,"Windows: ",Object(o.b)("inlineCode",{parentName:"p"},"pip --version")),Object(o.b)("p",null,"MacOS: ",Object(o.b)("inlineCode",{parentName:"p"},"pip -V")),Object(o.b)("img",{class:"inline-img",style:{maxWidth:"100%"},src:"/api/v3/img/images/python-version-check.png"}),Object(o.b)("p",null,"If the terminal doesn't print a version number then you will need to install it. The Python Packaging Authority provides a ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://pip.pypa.io/en/stable/installing/"}),"walk-through here"),"."),Object(o.b)("h4",{id:"creating-a-project-1"},"Creating a project"),Object(o.b)("p",null,"We can now create a project and add the ",Object(o.b)("inlineCode",{parentName:"p"},"skyciv")," dependency to it, so lets do that!"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"Go to your Desktop and create a new folder with your project name such as ",Object(o.b)("inlineCode",{parentName:"li"},"sample-project"),"."),Object(o.b)("li",{parentName:"ol"},"Open this folder in your preferred code editor. ",Object(o.b)("a",Object(a.a)({parentName:"li"},{href:"https://code.visualstudio.com/download"}),"VS Code")," is great (and free) for this purpose."),Object(o.b)("li",{parentName:"ol"},"In the VS Code menu click ",Object(o.b)("inlineCode",{parentName:"li"},"Terminal > New Terminal")," and your will now have a command line available at the bottom of the window.")),Object(o.b)("img",{class:"inline-img",style:{maxWidth:"100%"},src:"/api/v3/img/images/vscode-open-terminal.png"}),Object(o.b)("ol",{start:4},Object(o.b)("li",{parentName:"ol"},"In the terminal you should see the path that points to your ",Object(o.b)("inlineCode",{parentName:"li"},"sample-project")," directory. Enter the command ",Object(o.b)("inlineCode",{parentName:"li"},"pip install skyciv"),".")),Object(o.b)("img",{class:"inline-img",style:{maxWidth:"100%"},src:"/api/v3/img/images/vscode-pip-install-skyciv.png"}),Object(o.b)("p",null,"The important part of the output is ",Object(o.b)("inlineCode",{parentName:"p"},"Successfully installed skyciv-x.x.x"),". This means the skyciv package has been added to your Python directory and is available to use in any Python project."),Object(o.b)("ol",{start:5},Object(o.b)("li",{parentName:"ol"},"In the file explorer to the left, create a new file named ",Object(o.b)("inlineCode",{parentName:"li"},"main.py")," in the top level of the project. This is where your project code will live!")),Object(o.b)("h4",{id:"using-the-skyciv-package-1"},"Using the SkyCiv Package"),Object(o.b)("p",null,"Now you have a project ready to go, we can add some code. This is the cool part!"),Object(o.b)("p",null,"With the skyciv package, you now have access to the ",Object(o.b)("inlineCode",{parentName:"p"},"skyciv.request()")," function. The function takes two parameters:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"data"),": This is the API object that defines your structure and functions you would like to run."),Object(o.b)("li",{parentName:"ol"},Object(o.b)("inlineCode",{parentName:"li"},"options"),": An optional parameter which allows you to choose which version of the API to use and whether to use http or https.")),Object(o.b)("p",null,"For this sample we will omit the options parameter. The request will default to version 3 of the API and use https."),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-py"}),"import skyciv # This gives you access to the skyciv code that we installed\n\ndata = __YOUR_API_OBJECT__ # This will be your API object. See the link below for sample code\n\nresults = skyciv.request(data) # Use the built in skyciv.request() function\n\nprint(results) # Show the response in the terminal\n")),Object(o.b)("p",null,"That's it! Replace the ",Object(o.b)("inlineCode",{parentName:"p"},"data")," variable with your data, then in the terminal use the python3 command to run your main.py script by typing ",Object(o.b)("inlineCode",{parentName:"p"},"python3 main.py"),". If you've left the data variable as above, you will see a message from the API in the terminal telling you the authentication data was missing, so build a proper object or use the sample object and try sending it off!"),Object(o.b)("p",null,"To use Pip packages in the future, you can start from ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#creating-a-project"}),"Creating a project")," as you now have Python and Pip installed!"),Object(o.b)("h4",{id:"useful-links-3"},"Useful links"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/creating-the-api-object"}),"Creating the ",Object(o.b)("inlineCode",{parentName:"a"},"API_OBJECT")))),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"/api/v3/docs/interpreting-the-response"}),"Interpreting the ",Object(o.b)("inlineCode",{parentName:"a"},"response"))))),Object(o.b)("br",null),Object(o.b)("hr",null),Object(o.b)("br",null),Object(o.b)("h2",{id:"nuget---c"},Object(o.b)("strong",{parentName:"h2"},"NuGet - C#")),Object(o.b)("h3",{id:"what-is-nuget"},"What is NuGet?"),Object(o.b)("p",null,"NuGet is the package manager for .Net languages. NuGet allows developers to package up code, especially libraries, for others to use.\n\\\nThe easiest way to install NuGet packages is using ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://visualstudio.microsoft.com/"}),"Microsoft")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#installing-from-visual-studio"}),"Visual Studio"),"."),Object(o.b)("h4",{id:"how-do-i-get-nuget"},"How do I get NuGet?"),Object(o.b)("p",null,"The NuGet Package Manager is installed automatically with Visual Studio.\n\\\nIf you wish to use NuGet with another IDE, such as Visual Studio Code, you must download the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/net/download/"}),".Net Core SDK"),"."),Object(o.b)("h3",{id:"installing-the-skyciv-api-package"},"Installing the SkyCiv API Package"),Object(o.b)("p",null,"How you install the SkyCiv NuGet package depends on whether you are developing with ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://visualstudio.microsoft.com/"}),"Microsoft")," ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#installing-from-visual-studio"}),"Visual Studio"),", or with another ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"#installing-for-another-ide"}),"compiler/IDE"),", such as ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://code.visualstudio.com/"}),"Visual Studio Code"),"."),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},Object(o.b)("em",{parentName:"strong"},"Note:"))," Microsoft recommends Visual Studio for getting started with C# code development, and ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://visualstudio.microsoft.com/vs/community/"}),"Visual Studio Community")," is freely downloadable."),Object(o.b)("h4",{id:"installing-from-visual-studio"},"Installing from Visual Studio"),Object(o.b)("p",null,"If you are developing in Visual Studio, the easiest way to install the SkyCiv NuGet package is through the NuGet Package Manager in Visual Studio:"),Object(o.b)("img",{src:"/api/v3/img/images/nuget_visual_studio.gif"}),Object(o.b)("p",null,"Alternatively you can install the SkyCiv.API NuGet package from Package Manager Console:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"PM> Install-Package SkyCiv.API\n")),Object(o.b)("h4",{id:"installing-from-the-command-line"},"Installing from the Command Line"),Object(o.b)("p",null,"The simplest way to install the SkyCiv NuGet package for another IDE is from the command line.\nFirst ensure you have the ",Object(o.b)("a",Object(a.a)({parentName:"p"},{href:"https://www.microsoft.com/net/download/"}),".Net Core SDK")," installed.\nThen run:"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{}),"> dotnet add package SkyCiv.API\n")),Object(o.b)("h4",{id:"installing-in-visual-studio-code-using-the-nuget-gallery-extension"},"Installing in Visual Studio Code using the NuGet Gallery Extension"),Object(o.b)("p",null,"If you are working with Visual Studio Code, there are a few Extensions that make installing the SkyCiv API easy."),Object(o.b)("p",null,"The first is the Nuget Gallery Extension:"),Object(o.b)("img",{src:"/api/v3/img/images/nuget_vs_code.gif"}),Object(o.b)("h4",{id:"installing-in-visual-studio-code-using-the-nuget-package-manager-extension"},"Installing in Visual Studio Code using the Nuget Package Manager Extension"),Object(o.b)("p",null,"Alternatively, you can use the Nuget Package Manager Extension:"),Object(o.b)("img",{src:"/api/v3/img/images/nuget_vs_code2.gif"}),Object(o.b)("h3",{id:"using-the-package"},"Using the Package"),Object(o.b)("p",null,"Using the package is as simple as referencing the ",Object(o.b)("inlineCode",{parentName:"p"},"namespace")," ",Object(o.b)("inlineCode",{parentName:"p"},"SkyCiv")," & ",Object(o.b)("inlineCode",{parentName:"p"},"static class")," ",Object(o.b)("inlineCode",{parentName:"p"},"SkyCiv"),":"),Object(o.b)("pre",null,Object(o.b)("code",Object(a.a)({parentName:"pre"},{className:"language-c#"}),'    static void Main(string[] args)\n    {\n        var jsonRequestBody = File.ReadAllText("YOUR_API_OBJECT");\n\n        if( SkyCiv.SkyCiv.TryRequest( jsonRequestBody, out var response, post: true ) )\n        {\n            // Request succeeded, do something with the response\n        }\n    }\n')))}p.isMDXComponent=!0}}]);