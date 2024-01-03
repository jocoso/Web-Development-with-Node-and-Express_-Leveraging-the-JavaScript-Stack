*Web Ethan Brown - Web Development with Node and Express*

# Chapter 2: Getting Started with Node

### **How do I install Node on my computer?**

1. Visit the [Node Homepage](https://nodejs.org/en/download)
2. Click the green installer for your system
3. Follow the installer step

If you are using Linux, it is recommended to use the system's package manager for installation. Ensure that you download the correct version suitable for your system.

### **Why is it essential to use a terminal?**

Proficiency in using a terminal for coding is an essential skill for all programmers. It significantly enhances one's coding efficiency, making our work much smoother and more streamlined.

### **What options in terminal do I have?**

**Linux & OS X**
- bash
- shell
- zsh

**Windows**
- Git bash
- Console2
- ConEmu
- PowerShell
- PuTTY

### **How do I know I have mastered the basics of my terminal?**

Mastering the ability to navigate directories, copy, move, and delete files via the terminal is a valuable asset. Additional skills such as searching for text in files and directories, chaining commands together, etc., while optional, are highly recommended for a more comprehensive command line proficiency.

### **What if I don’t want to download any option for windows?**

We might explore the creation of a virtual machine that mimics the performance of a genuine system. Linux VM and Oracle's free virtual machine stand out as excellent software options for virtualization. Additionally, Windows 8 provides built-in support for virtual machines.

### **What are good editors to use?**

- vi or vim
- Emacs
- Coda (only on OS X)
- Sublime Text (Windows, Linux, and OS X)
- TextPad (only on Windows)
- Notepad++ (only on Windows)
- Visual Studio (only on Windows)
- Visual Studio Code (only on Windows)

### **What’s npm?**

npm serves as a versatile package manager with dual functions: downloading packages and overseeing dependencies. Recognized for its speed, reliability, and user-friendly nature, npm has gained vast popularity as a package manager.

To install packages using npm, the following command is employed:

```npm install -g <name of package>```

For instance:

```npm install -g grunt-cli```

In this example, replace ```<name of package>``` with the actual package name. Notably, the use of ```grunt-cli``` in this command installs it globally. As a general guideline, utility packages are typically installed globally, while other types should be installed without the ```-g``` flag.

### **How does Localhost work?**

Localhost denotes the computer on which we are actively working. It serves as a convenient shorthand for the IPv4 loopback address 127.0.0.1 or the IPv6 equivalent ::1.

### **How does the design paradigm differ between node and conventional servers?**

Traditionally, servers such as Apache or IIS are responsible for delivering static files to applications over the network, adhering to the standard practice. However, Node stands apart in this regard, as it operates on a different paradigm. In the case of Node, the application itself functions as the server, with Node offering the framework for its construction.

### **How does event-driven programming work?**

Event-Driven programming is a paradigm characterized by a passive approach, where the system awaits user actions to generate responses. An illustrative instance is a "click event," which users can activate by clicking a button. In this paradigm, programmers need to comprehend and code the specific responses to such events, shaping the application's behavior accordingly.

### **What two pieces of data can we take from a URL?**

From an URL, we could obtain two pieces of data: the path and the query string.


## Summary

- Downloading Node.js is a straightforward process, involving just three simple steps.

- While it may require some initial learning, terminals significantly enhance a programmer's workflow.

- To grasp the fundamentals of a terminal, it is essential to understand tasks like navigating directories and managing files through actions like copying, moving, and deleting.

- For those less inclined towards terminals, an alternative is exploring virtual machines such as Linux VM or Oracle.

- Editors stand out as the primary tools for programmers, with a variety available to suit different preferences and requirements.

- npm, bundled with Node during installation, is a swift, dependable, and user-friendly package manager.

- A computer's localhost IPv4 is 127.0.0.1, and its IPv6 counterpart is :1.

- For better or worse, a Node application also functions as a server.

- Node operates on an event-driven model, necessitating a programmer's awareness of potential website-triggered events and corresponding coding.

- A URL comprises two distinct components: a path and a query string.

## Vocabulary

**Terminal**, often referred to as a command line interface (CLI) or console, is a text-based interface used to interact with a computer's operating system or execute commands. Instead of using a graphical user interface (GUI) with windows, icons, and buttons, users interact with the system by typing text-based commands.

**GUI** stands for Graphical User Interface. It is a type of user interface that allows users to interact with electronic devices or software through graphical elements such as icons, buttons, windows, and menus, rather than using text-based commands. GUIs are designed to be more user-friendly and intuitive compared to command-line interfaces.


**UI** stands for User Interface. It encompasses all the elements and interactions that users experience when interacting with a computer, software application, or electronic device. The primary goal of UI design is to create an interface that is visually appealing, intuitive, and user-friendly, allowing users to interact with the system or application effectively.


**An Editor** typically refers to a software application or tool designed for creating, editing, and managing text or code files. These editors are used by programmers, developers, writers, and anyone working with textual content on a computer.

**Web Server** is a software application or hardware device that serves content, such as web pages, to users or other client devices over the Internet. It responds to requests from web browsers or other client applications, delivering the requested content through the Hypertext Transfer Protocol (HTTP) or its secure variant, HTTPS.

**Localhost** refers to your own computer.

**Event** refers to a specific occurrence or interaction that takes place in a web page or web application. Events can be triggered by the user, the browser, or other sources, and they are typically associated with specific elements or actions on a webpage. 

**Routing** the process of determining how an application responds to a client request for a particular resource or page. It involves defining rules or patterns that match the requested URL (Uniform Resource Locator) and mapping it to the appropriate code or handler that should process the request.

**Path** A URL path is a component of a Uniform Resource Locator (URL) that identifies the specific resource or location on the web server. It comes after the domain name (or IP address) and is separated from the rest of the URL by a forward slash ("/").

In the following example the path is in italic:

https://www.example.com */blog/articles/web-development*


**Querystring** a part of a URL that contains data or parameters passed to the server for processing. It comes after the path of the URL and is preceded by a question mark ("?"). The query string consists of one or more key-value pairs, separated by ampersands ("&"). Each key-value pair in the query string provides additional information to the server, typically used for dynamic content generation or to modify the behavior of a web application.

In the following example the querystring is in italic:

https://www.example.com/search **?query=web+development&page=1&category=programming**


**Static Resources** refer to files or content that remains unchanged or doesn't require server-side processing each time a user requests it. These resources are typically served directly to the user's browser without modification by the web server. Static resources include files such as HTML, CSS, JavaScript, images, fonts, and other files that don't need to be generated dynamically based on user input.

**An Synchronous application** or system in which tasks or operations are executed in a sequential and blocking manner. In a synchronous model, each operation must complete before the next one begins, and the program waits for each task to finish before moving on to the next one.

**An Asynchronous application** is a type of software application or system in which tasks or operations can be initiated and executed independently of the main program flow. In an asynchronous model, operations can be started, and the program can continue its execution without waiting for those operations to complete. When an operation finishes, a callback function or another mechanism is used to handle the result.

**Status Code** is a [three-digit numeric code](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses) returned by a server in response to a client's request made to a web server. The status code provides information about the outcome of the request and whether it was successful, encountered an error, or requires further action. Status codes are a part of the HTTP (Hypertext Transfer Protocol) and are included in the response header of an HTTP response.

## Code Nuggets

```-g (global)``` option when installing npm packages, they are installed in a subdirectory in Windows Home directory. Warning: For your sanity to remain intact, if your username has a space in it consider changing that. Packages may act funny if the username is more than one word separated by space.

```node <program-name>.js``` executes the given JavaScript file.

```__dirname``` a special variable that represents the current working directory of the current module. It provides the absolute path of the directory containing the JavaScript file being executed.

## Documentation

|Syntax | parameters | Return Value |
| ----  | ---- | ----|
| **http.createServer(requestListener);** | **requestListener(optional):** requestListener is a function that will be called every time the server gets a request. It will handle requests from the user and respond back to the user as well. | **HTTP Server Object** |
|**res.writeHead( <br>  &emsp; statusCode, <br> &emsp; statusMessage, <br> &emsp; headers<br>);** | **statusCode:** A [three digit integer](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#information_responses) that results as a response to a client’s request.<br><br> **statusMessage(optional):** a short, human-readable string description or phrase that provides additional information about the HTTP status code in an HTTP response. While the HTTP status code indicates the general category and outcome of the server's response, the status message offers more specific details or context about the response. <br><br>**headers:** headers are components of the HTTP request and response messages that provide [additional information about the data being transmitted](https://en.wikipedia.org/wiki/List_of_HTTP_header_fields). Headers consist of key-value pairs objects and are included in both the request sent from the client to the server and the response sent from the server to the client.| **http.serverResponse**
|**res.end( <br>  &emsp; data, <br>  &emsp; encoding, <br>  &emsp;callback <br>);** | **data(optional):** if not empty it will act the same way as calling res.write(data, encoding) followed by res.end(callback) <br><br> **encoding(optional):** a system that assigns a unique number (code point) to each character in a character set. It provides a way to represent and store text data in computers, allowing the mapping of characters to binary data for storage, transmission, and processing. Different [character encoding schemes](https://www.geeksforgeeks.org/understanding-character-encoding/) exist, each with its own mapping of characters to binary representations. <br><br> **callback(optional):** If specified, this function will be called when the response stream is finished. | **this** |
|**fs.readFile(<br>  &emsp;path, <br>  &emsp;options, <br>  &emsp;callback <br>);**| **path:** A string, Buffer, URL or Integer representing the directory where the program can access the filename or file descriptor.<br><br> **options:** Is an Object or string representing configuration data. In options we could put: <ul><li>**encoding(optional):** a system that assigns a unique number (code point) to each character in a character set. It provides a way to represent and store text data in computers, allowing the mapping of characters to binary data for storage, transmission, and processing. Different [character encoding schemes](https://www.geeksforgeeks.org/understanding-character-encoding/) exist, each with its own mapping of characters to binary representations. It defaults to null.</li><li>**flag(optional):** A string that works as a [file system flag](https://nodejs.org/api/fs.html#file-system-flags). It defaults to ‘r’.</li><li>**signal(optional):**  An AbortSignal type  that allows aborting an in-progress readFile.</li></ul>**callback:** A function called after reading a file. It takes two parameters:<ul><li>**data:** a string or buffer containing the data of the file.</li><li>**err:** an Error or AggregateError that will appear if any error occurred.</li></ul>| **Contents/data stored in file or error if any.**|


## Sources


*“Node.Js V21.5.0 Documentation.” HTTP | Node.Js V21.5.0 Documentation, nodejs.org/api/http.html#responsewriteheadstatuscode-statusmessage-headers. Accessed 3 Jan. 2024.*

*OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. https://chat.openai.com/chat (For vocabulary)*

*“Node.Js Http.createServer() Method.” Node.Js Http.Createserver() Method, www.w3schools.com/nodejs/met_http_createserver.asp. Accessed 3 Jan. 2024.*

*“Node.Js V21.5.0 Documentation.” File System | Node.Js V21.5.0 Documentation, nodejs.org/api/fs.html. Accessed 3 Jan. 2024.*

*“Node JS Fs.Readfile() Method.” GeeksforGeeks, GeeksforGeeks, 25 Dec. 2023, www.geeksforgeeks.org/node-js-fs-readfile-method/.*

*Brown, Ethan. Web Development with Node and Express: Leveraging the JavaScript Stack, O’Reilly Media, Inc., Sebastopol, CA, 2020, pp. 9–18.*










  


