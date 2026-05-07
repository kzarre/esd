# Folder Structure

```text id="v8m2qa"
rest-api-app/
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

```bash id="q4n8tx"
node -v
npm -v
```

---

# Step 2: Create Project Folder

Create a folder named:

```text id="u6p1mk"
rest-api-app
```

Open this folder in VS Code.

---

# Step 3: Initialize Node Project

Open terminal inside project folder and run:

```bash id="m2x7ra"
npm init -y
```

---

# Step 4: Install Express.js

Run:

```bash id="k8v3wp"
npm install express
```

---

# Step 5: Create server.js

Create a file named:

```text id="r5q9vn"
server.js
```

Paste this code:

```javascript id="t3m8pk"
const express = require("express");

const app = express();

app.use(express.json());

let students = [
    {
        id: 1,
        name: "Rahul",
        course: "BCA"
    },
    {
        id: 2,
        name: "Anjali",
        course: "BTech"
    }
];

app.get("/students", (req, res) => {

    res.json(students);

});

app.post("/students", (req, res) => {

    const student = req.body;

    students.push(student);

    res.json({
        message: "Student Added",
        data: student
    });

});

app.put("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    const updatedStudent = req.body;

    students = students.map(student => {

        if (student.id === id) {

            return updatedStudent;

        }

        return student;

    });

    res.json({
        message: "Student Updated"
    });

});

app.delete("/students/:id", (req, res) => {

    const id = parseInt(req.params.id);

    students = students.filter(student => student.id !== id);

    res.json({
        message: "Student Deleted"
    });

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});
```

---

# Step 6: package.json

Replace package.json code with:

```json id="y1v4qx"
{
  "name": "rest-api-app",
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

```bash id="p9m2ka"
npm start
```

You will see:

```text id="f3x8vn"
Server running on port 3000
```

---

# Step 8: Test REST API

Use:

* Postman
* Thunder Client
* Browser for GET request

---

# GET Request

Open browser:

```text id="n8q5wp"
http://localhost:3000/students
```

---

# POST Request

Method:

```text id="k2v9rm"
POST
```

URL:

```text id="c7m1tx"
http://localhost:3000/students
```

JSON Body:

```json id="m4p8qa"
{
    "id": 3,
    "name": "Amit",
    "course": "MCA"
}
```

---

# PUT Request

Method:

```text id="v5x2nk"
PUT
```

URL:

```text id="u1q7wp"
http://localhost:3000/students/1
```

JSON Body:

```json id="d8m3ra"
{
    "id": 1,
    "name": "Rahul Sharma",
    "course": "BCA"
}
```

---

# DELETE Request

Method:

```text id="q6v1pk"
DELETE
```

URL:

```text id="t9m4xn"
http://localhost:3000/students/2
```

---

# Output

This practical demonstrates:

* GET API
* POST API
* PUT API
* DELETE API
* REST API using Express.js
