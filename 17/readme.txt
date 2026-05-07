# Folder Structure

```text id="p4m8qa"
mongodb-crud/
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

```bash id="v8q2tx"
node -v
npm -v
```

---

# Step 2: Install MongoDB

Download MongoDB Community Server from:

[MongoDB Community Server](https://www.mongodb.com/try/download/community?utm_source=chatgpt.com)

Install using default settings.

---

# Step 3: Start MongoDB

Open terminal and run:

```bash id="x2m7wp"
net start MongoDB
```

If this does not work, run:

```bash id="r5v1qa"
mongod
```

Keep terminal open.

---

# Step 4: Create Project Folder

Create folder:

```text id="n7q4mk"
mongodb-crud
```

Open it in VS Code.

---

# Step 5: Initialize Node Project

Open terminal and run:

```bash id="u1m8tx"
npm init -y
```

---

# Step 6: Install Packages

Run:

```bash id="d4q9vp"
npm install express mongoose
```

---

# Step 7: Create server.js

Create file:

```text id="j8x2ra"
server.js
```

Paste this code:

```javascript id="m3v7qn"
const express = require("express");

const mongoose = require("mongoose");

const app = express();

app.use(express.json());

mongoose.connect("mongodb://127.0.0.1:27017/studentDB")

.then(() => {

    console.log("MongoDB Connected");

})

.catch((err) => {

    console.log(err);

});

const studentSchema = new mongoose.Schema({

    name: String,
    course: String

});

const Student = mongoose.model("Student", studentSchema);

app.post("/add", async (req, res) => {

    const student = new Student(req.body);

    await student.save();

    res.send("Student Added");

});

app.get("/students", async (req, res) => {

    const students = await Student.find();

    res.json(students);

});

app.put("/update/:id", async (req, res) => {

    await Student.findByIdAndUpdate(

        req.params.id,
        req.body

    );

    res.send("Student Updated");

});

app.delete("/delete/:id", async (req, res) => {

    await Student.findByIdAndDelete(req.params.id);

    res.send("Student Deleted");

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});
```

---

# Step 8: package.json

Replace package.json code with:

```json id="w5m1pk"
{
  "name": "mongodb-crud",
  "version": "1.0.0",
  "main": "server.js",
  "scripts": {
    "start": "node server.js"
  },
  "dependencies": {
    "express": "^4.18.2",
    "mongoose": "^8.3.1"
  }
}
```

---

# Step 9: Run Application

Open terminal and run:

```bash id="q2v7ra"
npm start
```

You should see:

```text id="t8m4wp"
MongoDB Connected
Server running on port 3000
```

---

# Step 10: Test APIs in Postman

---

# CREATE Student

Method:

```text id="m9x1qa"
POST
```

URL:

```text id="u4q8vn"
http://localhost:3000/add
```

JSON Body:

```json id="d7m2tx"
{
    "name": "Rahul",
    "course": "BCA"
}
```

---

# READ Students

Method:

```text id="x1v5pk"
GET
```

URL:

```text id="r8q3wa"
http://localhost:3000/students
```

---

# UPDATE Student

Method:

```text id="n4m7qp"
PUT
```

URL:

```text id="j2v9tx"
http://localhost:3000/update/STUDENT_ID
```

Replace:

```text id="u5x1ra"
STUDENT_ID
```

with actual MongoDB document ID.

JSON Body:

```json id="p8m3vk"
{
    "name": "Amit",
    "course": "MCA"
}
```

---

# DELETE Student

Method:

```text id="f6q2wn"
DELETE
```

URL:

```text id="y3m8tx"
http://localhost:3000/delete/STUDENT_ID
```

---

# Step 11: Verify in MongoDB Compass

Database:

```text id="w7v1pk"
studentDB
```

Collection:

```text id="r4m9qa"
students
```

---

# Output

This practical demonstrates:

* MongoDB Connection
* CRUD Operations
* Express.js API
* Mongoose Schema
* Data Insert
* Data Read
* Data Update
* Data Delete
