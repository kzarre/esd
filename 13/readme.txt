# Folder Structure

```text id="u4m8qp"
node-server/
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

```bash id="k8v3ra"
node -v
npm -v
```

---

# Step 2: Create Project Folder

Create a folder named:

```text id="n2x7wd"
node-server
```

Open this folder in VS Code.

---

# Step 3: Create package.json

Open terminal inside project folder and run:

```bash id="t4p1mx"
npm init -y
```

This creates package.json file.

---

# Step 4: Create server.js

Create a file named:

```text id="v6q9pk"
server.js
```

Paste this code:

```javascript id="m5r2qn"
const http = require("http");

const server = http.createServer((req, res) => {

    res.writeHead(200, {
        "Content-Type": "text/html"
    });

    res.write(`
        <h1>Node.js Server Running</h1>
        <p>College Practical Example</p>
    `);

    res.end();

});

server.listen(3000, () => {

    console.log("Server running on port 3000");

});
```

---

# Step 5: Run Server

Open terminal and run:

```bash id="x7m4tw"
node server.js
```

You will see:

```text id="j3q8vn"
Server running on port 3000
```

---

# Step 6: Open Browser

Open:

```text id="p8k2ra"
http://localhost:3000
```

You will see:

* Node.js Server Running
* College Practical Example

---

# package.json

```json id="d9v1mx"
{
  "name": "node-server",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  }
}
```
