*Web Ethan Brown - Web Development with Node and Express*

# Chapter 3: Saving Time with Express

### **Why is Scaffolding Useful?**

Scaffolding involves the development of a website template or skeleton, which can be employed and repurposed for various future projects.

### **What are good Scaffolding options?**

- Express Scaffolding
- Handlebars
- HTML5 Boilerplate

### **What is a REST application?**

A Representational State Transfer Application Programming Interface (RESTful API for short)  is a software architecture that permits user to perform the following functions within a resource:

- Create
- Read
- Update
- Delete

These simple-yet-important functions are known as CRUD.</br> 
RESTful APIs also have directives like: 

- GET - Retrieve a record, 
- POST - Request to create a record, 
- PUT - Request to update a record, and 
- DELETE - Request to delete a record

which may affect certain resources in the application when used.

### **What’s package.json and why is it important?**

<span style="color:orange">package.json</span> is a document created when ```npm init``` is called. <span style="color:orange">package.json</span> is used to store information on modules, applications and packages installed. It also saves important pieces of data as to how to start the application, testing development and managing dependencies.

### **What’s an entry point and why is it important?**

An entry point in a JavaScript program refers to the specific file where the execution of the program initiates. Serving as both the starting and concluding file, entry points play a crucial role in the execution sequence of the program.

### **How do we install Express in our project?**

Express is installed by executing the following command:

```npm install --save express```

This command utilizes npm (Node Package Manager) to install the Express framework and save it as a dependency in the project.

### **What is a node_module directory, and what is used for?**

The <span style="color:cyan">node_module</span> directory is generated and populated with necessary packages and dependencies when initializing a Node.js application using ```npm init```. It encompasses all the essential modules for the application and can be effortlessly reconstructed by executing ```npm install```, which reads the dependencies outlined in the <span style="color:orange">package.json</span> file and installs them accordingly.

### **What is .gitignore? How do we use it? Why do we use it?**

The <span style="color:orange">.gitignore</span> file is recognized by GitHub after committing changes. It is employed by creating the file and specifying filenames or using wildcards for files that should be ignored by Git. This is valuable as it helps shield sensitive information from being committed, reduces the inclusion of unnecessary data or extraneous files in the project, and prevents the addition of development tools to the final project, enhancing overall project cleanliness and security.

### **What do we mean when we refer to app.VERB?**

In the Express documentation, ```App.VERB``` serves as a placeholder where "VERB" represents various HTTP methods such as 'post,' 'get,' 'put,' and so on. This convention is used to illustrate the different route handling methods available in Express. Developers replace "VERB" with the specific HTTP method they intend to use for a particular route.

### **Why shouldn’t we use res.writeHead or res.end?**

The use of ```response.writeHead``` and ```response.end``` in Node.js for handling HTTP responses is a viable approach, but it's worth noting that there are alternative methods available in the Express framework, which is commonly used with Node.js for building web applications.

In Express, using ```res.set```, ```res.status```, and ```res.type``` can be considered more idiomatic and can often result in cleaner and more maintainable code. However, whether they "perform better" can depend on the specific use case and the requirements of the application.

In general, the performance difference between these methods might be negligible for many applications, and the choice often comes down to readability, expressiveness, and adherence to the conventions of the framework being used.

### **What is a “model-view-controller” paradigm, and how does it work?**

Model-View-Controller (MVC) is a design pattern used in software development to organize code in a way that separates concerns and promotes modularity. It divides an application into three interconnected components:

- Model: This component represents the application's data and business logic. It is responsible for retrieving and managing data, as well as defining the rules for manipulating that data. The Model responds to requests from the Controller and notifies the View about any changes in the data.

- View: The View is responsible for presenting data to the user and capturing user interactions. It displays the information from the Model and sends user inputs to the Controller. Views are typically the graphical user interface (GUI) elements in a web or desktop application.

- Controller: The Controller acts as an intermediary between the Model and the View. It receives user inputs from the View, processes them, and updates the Model accordingly. The Controller also listens for changes in the Model and updates the View to reflect those changes. It essentially serves as the application's logic or "brain."

By separating these concerns, the MVC pattern makes it easier to manage and maintain complex applications. It enhances modularity and code reusability, making it possible to update one component without affecting the others. This separation of concerns is fundamental in achieving a clean and scalable architecture.

### **What are handlebars, and why are we using them to create our project?**

Handlebars is a templating engine that allows developers to create dynamic HTML templates with ease. It is known for its simplicity and minimalistic syntax, making it a popular choice for developers who prefer templates with less abstraction.

Handlebars templates are essentially strings with embedded expressions that get replaced with actual values when rendering. The simplicity of Handlebars is often appreciated for its ease of use and readability. It doesn't introduce complex programming constructs into the templates, keeping them clean and straightforward.

### **How do we download handlebars? How do we set it up?**

To acquire Handlebars for our project, we execute the following command in the terminal:

```npm install --save express3-handlebars```

Upon downloading, we configure it in our application's entry point file with the following code at the top:

```
const express = require('express');
const exphbs  = require('express3-handlebars');

const app = express();

const handlebars = exphbs({ defaultLayout: 'main' });
app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');
```

### **What are Layouts? Why do we use them?**

Layouts serve as overarching frameworks that are shared across multiple pages on a website. They are instrumental in eliminating redundancy and mitigating maintenance challenges. By employing layouts, you can establish a consistent structure and design for various pages, ensuring a cohesive and unified look and feel throughout the site.

Layouts typically encapsulate common elements such as headers, footers, navigation bars, and other structural components. This approach not only streamlines the development process by reducing repetitive code but also makes it easier to manage and update the overall design of the website.

### **What is the importance of static middleware?** 

Static middleware is essential because it specifies a directory from which the application will serve static resources to users without requiring special handling. It automatically generates routes for each static resource within the designated directory.

### **What type of files does it allow the user to share?**

Static middleware is crucial for serving static assets efficiently, such as CSS files, client-side JavaScript, images, and other files that don't require processing by the server. By designating a static directory, the web server can quickly serve these files without the need for additional server-side logic.

### **How do we set up a static middleware?**

After creating a <span style="color:cyan">"public"</span> directory inside the <span style="color:cyan">root directory</span>, you can set up static middleware in your Express application by adding the following line inside your entry point file before declaring any routes:

```
const express = require('express');
const app = express();
const path = require('path');

// Set up static middleware to serve files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Declare your routes and other middleware below

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
```

### **What are the pros of using Views?**

The strength of views in web development lies in their ability to display dynamic information that can change based on various factors, including user interactions, data updates, or other dynamic conditions. Views are components responsible for presenting data to users, and their flexibility in handling dynamic content is crucial for creating interactive and responsive web applications.

Frameworks like Express, when combined with templating engines like Handlebars or EJS, provide a structured way to integrate dynamic data into views. This separation of concerns between the model (data), view (presentation), and controller (logic) is a key principle in web development that promotes maintainability and scalability.

## Summary

- Scaffolding involves the creation of a reusable website template.

- A RESTful API is a software architecture that enables users to perform CRUD functions.

- The *package.json* file is generated when npm init is executed, serving as documentation for the app's information and dependencies.

- To install Express, we execute the following command: ```npm install --save express```

- The *node_modules* directory contains all packages and dependencies of an application. It can be deleted and recreated by executing ```npm install```.

- Any filename or wildcard added to *.gitignore* will be disregarded by GitHub when committing our work.

- ```App.VERB``` is a placeholder designed to replace verbs such as post, get, put, etc in the Express documentation.

- The MVC pattern is a design paradigm comprising The Model, the View, and the Controller that allows improved modularization and more straightforward scaling.

- Handlebars is a template framework, known for its simplicity compared to other alternatives.

- To download the Handlebars package, execute the following command in the terminal:
 ```npm install --save express3-handlebars```

- Layouts serve as general frameworks shared by all pages on our site.

- Static middleware is essential in web design as it facilitates quick handling of user requests for static resources.

- To implement static middleware, include the following line in your entry point file before defining any routes:
    ```app.use(express.static(__dirname + '/public'));```</br>
Ensure that there is a directory named *public* located in the *root directory* of your project. This directory will be designated for serving static assets, such as CSS, JavaScript, and images, to clients.

- Views have the capability to change based on random events created by the programmer or user's interactions.

## Vocabulary

|  |  |
|:------:|------|
|**Boilerplate**| A set of pre-written code that a programmer can use and reuse for convenience.|
|**Entry Point**| The function or file where an application begins. The first program's code to be executed.
|**Middleware**| Functions or modules that can be used to handle requests, responses and errors caused by HTML requests in a web application.
|**Module**| A reusable piece of code that performs a distinguishable task and can be imported into other parts of the program.
|**API**| or Application Programming Interface in long, is a set of rules that dictates how devices communicate with each other.
|**Template Framework**| Also called templating engine and templalte system is a tool that simplifies the separation between content (data) and presentation (layout.) It usually consts of Markdown code with placeholders meant to be replaced with dynamic content.

## Code Nugget

| | |
|----|----|
|```npm install <package-name>```| Installs a package, and any packages that it depends on. If the package has a *package-lock* or *shrinkwrap file*, the installation of dependencies will be driven by that, an *npm-shrinkwrap.json* taking precedence if both files exist. Install the dependencies in the local *node_modules* folder. </br></br> In global mode (ie, with ```-g``` or ```--global``` appended to the command), it installs the current package context (ie, the current working directory) as a global package. </br></br>By default, ```npm install``` will install all modules listed as dependencies in *package.json*. </br></br>With the ```--production``` flag (or when the *NODE_ENV* environment variable is set to production), npm will not install modules listed in *devDependencies*. To install all modules listed in both *dependencies* and *devDependencies* when the *NODE_ENV* environment variable is set to production, you can use ```--production=false```.|
|```node <entry-point>.js```| Execute the entry point of the application.|
|```npm init```| Used to set up a new or existing npm package.|
|```<header>```| Provide additional semantic information about content that appears at the top of the page, such as logons, title text, or navigation.|

## Documentation

| Syntax | Usage | Parameters | Return Value |
| ------ | ----- | ---------- | ------------ |
|```app.set(```</br> &emsp; ```name,``` </br> &emsp; ```value``` </br>```);```| Assigns setting name to value. Certain names can be used to configure the behaviour of the server.| **name:** A string we can use to retrieve a value.</br></br> **value:** The object to store. (Can be any type)|Null|
|```app.get(```</br> &emsp; ```path,```</br> &emsp; ```callback [, callback...]``` </br>```);```| Routes HTTP GET requests to the specified path with the specified callback functions.| **path:** A path for which the middleware function is invoked; can be any of:</br> &emsp; > A string representing a path. </br> &emsp; > A path pattern. </br> &emsp; > A regular expression patter to match paths. </br> &emsp; > An array of combination of any of the above.</br></br> **Default:** '/' (root path)| Null|
