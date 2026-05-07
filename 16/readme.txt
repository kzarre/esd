# Folder Structure

```text id="n5q8wp"
mongodb-app/
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

```bash id="x3m7ra"
node -v
npm -v
```

---

# Step 2: Install MongoDB

Download and install MongoDB Community Server from:

[MongoDB Community Server](https://www.mongodb.com/try/download/community?utm_source=chatgpt.com)

Install using default settings.

---

# Step 3: Start MongoDB Service

Open terminal and run:

```bash id="u8p2mk"
mongod
```

Keep this terminal open.

---

# Step 4: Create Project Folder

Create folder:

```text id="v4n9qx"
mongodb-app
```

Open it in VS Code.

---

# Step 5: Initialize Node Project

Open terminal inside project folder and run:

```bash id="r1m6tp"
npm init -y
```

---

# Step 6: Install Required Packages

Run:

```bash id="k7q3vn"
npm install express mongoose
```

---

# Step 7: Create server.js

Create file:

```text id="d2x8wp"
server.js
```

Paste this code:

```javascript id="m9v4ra"
const express = require("express");

const mongoose = require("mongoose");

const app = express();

mongoose.connect("mongodb://127.0.0.1:27017/collegeDB")

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

app.get("/", async (req, res) => {

    const student = new Student({

        name: "Rahul",
        course: "BCA"

    });

    await student.save();

    res.send("Student Data Saved in MongoDB");

});

app.listen(3000, () => {

    console.log("Server running on port 3000");

});
```

---

# Step 8: package.json

Replace package.json code with:

```json id="p6m2tx"
{
  "name": "mongodb-app",
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

```bash id="q1v8nk"
npm start
```

You should see:

```text id="t5m4ra"
MongoDB Connected
Server running on port 3000
```

---

# Step 10: Open Browser

Open:

```text id="u7q2wp"
http://localhost:3000
```

You will see:

```text id="j4m9xn"
Student Data Saved in MongoDB
```

---

# Step 11: Verify Database

Open MongoDB Compass or Mongo Shell.

Database created:

```text id="x8v1pk"
collegeDB
```

Collection created:

```text id="m3q7ra"
students
```

Stored data:

```json id="v6n2tx"
{
    "name": "Rahul",
    "course": "BCA"
}
```

---

# Output

This practical demonstrates:

* MongoDB Connection
* Mongoose Usage
* Database Creation
* Collection Creation
* Data Insertion using Node.js
