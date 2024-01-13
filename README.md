*Web Ethan Brown - Web Development with Node and Express*

# Chapter 1: Introducing Express

### **What was revolutionary about JavaScript?**

JavaScript, a versatile and sophisticated language, that has been in existence since 1996, initially bearing the undeserved reputation of a "toy" language. Yet, with the groundbreaking introduction of its back-end capabilities through Node.js by Ryan Dahl, JavaScript has metamorphosed into a formidable and robust language.

### **What is Express?**

Express is a web application framework that empowers us to selectively augment its toolkit, avoiding unnecessary bloat. It seamlessly blends ease of use, security, and exceptional flexibility into a cohesive and streamlined development experience.

### **Why is Express useful to create a website?**

- *Minimal*
    - Express embodies simplicity and efficiency. It prioritizes a minimalist approach without compromising on robust functionality.
- *Flexible*
    - Express offers unparalleled flexibility, allowing us to tailor it precisely to our needs. No more deleting unnecessary pre-made code; we can seamlessly integrate only what's essential for each project.
- *Single-page web applications*
    - Express excels in supporting web applications that employ a single-page architecture. This design strategy involves downloading the majority of the site's content in a single load, eliminating the need to request data from the server each time a user navigates to a new page. This approach enhances the user experience by reducing latency and providing a more seamless and responsive interaction with the application.
- *Multipage and hybrid web application*
    - Express demonstrates its versatility by seamlessly accommodating more traditional websites. In scenarios where each user request prompts a call to the server for a new page visit, Express proves to be a capable and adaptable framework. This flexibility allows developers to employ Express in various web application architectures, whether it's a single-page application or a more conventional multipage setup.

### **Who created Express and why?**

TJ Hollowaychuck drew inspiration from Sinatra, a Ruby web framework, when creating Express. Much like Blake Mizerany's motivation behind designing Sinatra, Hollowaychuck aimed to provide a web development framework for Node.js that is not only faster but also more efficient and maintainable. Express, born out of this inspiration, has since become a popular and widely used framework, simplifying and enhancing the process of building robust web applications on the Node.js platform.

### **What are the pros and the cons of Node being single-threaded?**

<u>**Pros of single-thread in Node.js:**</u>

- **Task Delegation and Code Encapsulation:** Node.js leverages a single-threaded, event-driven architecture, enabling efficient task delegation and better encapsulation of code based on function.
- **Ease of Organization:** The event-driven nature of Node.js makes it easier to organize code, as asynchronous tasks can be handled more seamlessly.
- **Overall Better Performance:** For certain types of applications, Node.js can provide better overall performance due to its non-blocking, asynchronous design.
- **Lower Learning Barriers:** The event-driven, single-threaded model can have lower learning barriers, making it accessible for beginners and those new to asynchronous programming concepts.
- **Ease of Configuration:** Node.js can be easier to configure compared to alternative, multi-threaded solutions, as it eliminates some of the complexities associated with managing multiple threads or processes.
- **Cost-Effectiveness:** The single-threaded model of Node.js allows for efficient resource utilization and can be cost-effective, particularly for certain types of applications.

<u>**Cons of single-thread in Node.js:**</u>

- **Less Powerful than Multi-threading:** While Node.js excels in handling a large number of concurrent connections, it might be less suitable for tasks that depend of the central processor to complete a tasks where multi-threading or parallel processing would be more advantageous.
- **Scaling Challenges:** Scaling up Node.js applications can be challenging, particularly when it comes to handling increasing computational loads. Since Node.js runs in a single thread, it might face difficulties when more than one thread needs to be created.
- **Grows in Complexity with Increased Workload:** As the workload and complexity of tasks increase, it might become challenging to manage and scale a Node.js application efficiently. Handling complex, CPU-intensive tasks might require additional strategies, such as breaking tasks into smaller units or employing worker processes.

### **Why is Node a better alternative to web servers than others?**

Node.js offers an accessible learning curve, seamlessly blending various aspects of front-end and back-end development. Its efficiency stems from a single-threaded architecture, promptly compiled by the Google V8 engine, rather than undergoing a separate interpretation and compilation process. Additionally, Node.js exhibits platform independence, enhancing the framework's adaptability across different environments.

### **What type of Ecosystem Node has?**

Node.js supports a plethora of software options, and among them is the relational database MongoDB. Notably classified as a "noSQL" database, MongoDB operates on a key/value database similar to a dictionary in python, distinguishing it from traditional databases like Oracle and MySQL.

In addition, Express is another noteworthy software that seamlessly integrates with Node.js. While various alternatives exist for both web application frameworks and runtime environments, Node.js and Express stand out as the most popular choices in their respective categories.

### **What is Licensing and why is it important?**

Licensing involves the author granting permission to users for the use of a package. The range of licenses varies, with some being highly permissive and others more restrictive. Fortunately, a majority of packages in Node use the MIT License, known for its straightforward permissiveness. It's crucial, however, not to assume that every package follows the MIT license; it's always advisable to check the specific licensing terms.

### **What types of Licensing there are and why were they created?**

- GNU General Public License (GPL):
    - This license is exclusive to open-source, free software. Any implementation of code protected by the GPL must also be open-source, ensuring a reciprocal sharing of code modifications.

- Apache 2.0:
    - Similar to the MIT license, Apache 2.0 permits the use of packages with various licensing types. However, when incorporating components governed by Apache 2.0, proper attribution is required, acknowledging the usage of these licensed components.

- Berkeley Software Distribution (BSD):
    - BSD follows a philosophy akin to Apache 2.0. It grants the flexibility to utilize components under different licenses, with the condition that appropriate notice of the BSD-licensed components is included in the project documentation.


## Summary

- JavaScript's true potential blossomed with the advent of Node.js. Within the Node.js ecosystem, the Express package stands out as an invaluable tool for crafting web applications.

- Express, conceived by TJ Hollowaychuck and influenced by Sinatra in the Ruby world, is a minimalist yet versatile web application framework. It excels in handling both single-page and hybrid websites, offering developers a streamlined and flexible development experience.

- Despite Node.js being single-threaded, often viewed as a potential drawback compared to multi-threaded software, it brings forth numerous advantages. Node.js is lightweight, efficient, and boasts a gentle learning curve. It simplifies the process of creating uncomplicated websites, scaling in complexity only when the demand for multiple threads arises.

- An additional strength of Node.js is its support for diverse packages, all operating under the umbrella of the JavaScript language. This cohesive environment enables developers to seamlessly integrate various packages to accomplish different tasks.

- In the realm of licensing, legal protection is crucial for the work contributed by others. Different licenses, such as the MIT license with its centrist approach allowing both open and closed usage, or the GNU license specifically tailored for open-source software, play a pivotal role in shaping the legal landscape of software development.


## Vocabulary

**Client-Side Web Development** refers to the creation and maintenance of programs, scripts, and code that run on the user's web browser. In simpler terms, it's the part of web development that happens on your computer or device when you interact with a website or web application.

**Server-Side Web Development** refers to the creation and maintenance of programs, scripts, and code that run on a web server. In simpler terms, it's the part of web development that happens on the server, which is a powerful computer that stores and manages data and responds to requests from clients (users' web browsers).

**Robust** is the ability of a system, program, or software application to handle errors, unexpected inputs, and adverse conditions without failing or producing unpredictable results. A robust system is one that can gracefully recover from faults, continue functioning even in the face of challenges, and maintain a stable performance.

<u>Key characteristics</u> of robust software in computer science include:

1. **Error Handling**: The ability to detect and respond to errors in a way that prevents system failures or unexpected behaviors.
2. **Fault Tolerance:** The system's ability to continue operating even when faced with hardware failures, software bugs, or other unexpected issues.
Security: A robust system is designed to resist attacks and protect against unauthorized access or data breaches.
3. **Input Validation:** Thorough validation of inputs to prevent unexpected or malicious data from causing problems.
4. **Graceful Degradation:** The system can degrade its performance or functionality gracefully under adverse conditions rather than abruptly failing.
5. **Scalability:** The ability of the system to handle an increasing workload or user base without a significant decrease in performance.

**Server** is a specialized computer or software application designed to provide specific services, resources, or functionalities to other computers, known as clients, within a network.

**Framework** is a structured and pre-established set of tools, libraries, conventions, and best practices that provides a foundation for developing software applications. It serves as a platform or skeleton that developers can build upon to create applications more efficiently and consistently. Frameworks are designed to streamline the development process by offering reusable code, common structures, and predefined functionalities.

**Web Application** is a software application or program that users access and interact with through a web browser over a network, typically the internet. Unlike traditional desktop applications, which are launched by your operating system, web applications must be accessed through a web browser.

**Platform Independent** is the ability of a software application or program to run on different operating systems or computing platforms without requiring modification. In other words, a platform-independent application can operate seamlessly across various environments without being tied to a specific operating system or hardware architecture.

**Dual Licensing** is a licensing strategy where a software product or piece of intellectual property is made available under two different sets of licensing terms. This approach allows the creator or owner of the software to offer users a choice between two distinct licensing options, often providing flexibility to suit different needs or use cases.

## Code Nugget

We could use packages like: ```license-sniffer``` or ```license-spelunker``` which will help use find the licenses of some of the packages we use.


## Sources

*Brown, Ethan. “Introducing Express.” Web Development with Node and Express: Leveraging the JavaScript Stack, O’Reilly Media, Inc., Sebastopol, CA, 2020, pp. 1–8.*

*OpenAI. (2023). ChatGPT (Mar 14 version) [Large language model]. https://chat.openai.com/chat (For vocabulary)*




</br></br></br></br></br></br>
**[Chapter 2: Getting Started with Node](https://github.com/jocoso/Web-Development-with-Node-and-Express_-Leveraging-the-JavaScript-Stack/tree/ch2) -->**
