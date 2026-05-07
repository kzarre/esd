# Folder Structure

```text id="h7q2mk"
express-app/
│
├── server.js
├── package.json
└── readme.txt
```

---

# readme.txt

## Step 1: Install Node.js

Download and install Node.js from:

[Node.js Official Website](https://nodejs.org?utm_source=chatgpt.com)

Check installation:

```bash id="q2v8ra"
node -v
npm -v
```

---

# Step 2: Create Project Folder

Create a folder named:

```text id="m8p4wn"
express-app
```

Open this folder in VS Code.

---

# Step 3: Initialize Node Project

Open terminal inside project folder and run:

```bash id="k5x9tp"
npm init -y
```

---

# Step 4: Install Express.js

Run:

```bash id="y3m7qd"
npm install express
```

---

# Step 5: Create server.js

Create file:

```text id="r8n1vk"
server.js
```

Paste this code:

```javascript id="c4q7mx"
const express = require("express");

const app = express();

function logger(req, res, next) {

    console.log("Middleware Executed");

    next();

}

app.use(logger);

app.get("/", (req, res) => {

    res.send("<h1>Home Page</h1>");

});

app.get("/about", (req, res) => {

    res.send("<h1>About Page</h1>");

});

app.get("/contact", (req, res) => {

    res.send("<h1>Contact Page</h1>");

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});
```

---

# Step 6: package.json

Replace package.json code with:

```json id="n1v5pk"
{
  "name": "express-app",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2"
  }
}
```

---

# Step 7: Run Application

Open terminal and run:

```bash id="w4m9tx"
npm start
```

You will see:

```text id="u2q8vn"
Server running on port 3000
```

---

# Step 8: Open Browser

Open these URLs:

```text id="d7x3qp"
http://localhost:3000
```

```text id="j8m2wr"
http://localhost:3000/about
```

```text id="v5q1nk"
http://localhost:3000/contact
```

---

# Step 9: Output

You will see:

* Home Page
* About Page
* Contact Page

In terminal, middleware message will print for every request:

```text id="p3v7ra"
Middleware Executed
```
