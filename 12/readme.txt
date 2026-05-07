# Folder Structure

```text id="x4m8qp"
react-app/
│
├── src/
│   ├── App.js
│   ├── App.css
│   └── index.js
│
├── package.json
└── readme.txt
```

---

# readme.txt

## Step 1: Install Node.js

Download and install Node.js from:

[Node.js Official Website](https://nodejs.org?utm_source=chatgpt.com)

Check installation:

```bash id="j3v8qa"
node -v
npm -v
```

---

# Step 2: Create React Application

Open terminal and run:

```bash id="t7p2wn"
npx create-react-app react-app
```

Wait for installation to complete.

---

# Step 3: Open Project Folder

Run:

```bash id="u5n1mx"
cd react-app
```

---

# Step 4: Open in VS Code

Run:

```bash id="y2q7ra"
code .
```

Or manually open the folder in VS Code.

---

# Step 5: Replace Existing Files

Go to:

```text id="m8k4vp"
src
```

Replace code inside:

* App.js
* App.css
* index.js

with the code below.

---

# Step 6: App.js

Paste this code inside:

```javascript id="c9x5de"
import React, { useState } from "react";
import "./App.css";

function App() {

    const [count, setCount] = useState(0);

    const [name, setName] = useState("");

    function increase() {

        setCount(count + 1);

    }

    function decrease() {

        setCount(count - 1);

    }

    return (

        <div className="container">

            <h1>ReactJS Components and Hooks</h1>

            <div className="box">

                <h2>Counter Using useState Hook</h2>

                <h1>{count}</h1>

                <button onClick={increase}>
                    Increase
                </button>

                <button onClick={decrease}>
                    Decrease
                </button>

            </div>

            <div className="box">

                <h2>User Input</h2>

                <input
                    type="text"
                    placeholder="Enter Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />

                <h3>Hello {name}</h3>

            </div>

        </div>

    );

}

export default App;
```

---

# Step 7: App.css

Paste this code inside:

```css id="p4r8mk"
body {
    background-color: #f4f4f4;
    font-family: Arial;
}

.container {
    width: 500px;
    margin: auto;
    margin-top: 50px;
}

.box {
    background-color: white;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
}

button {
    padding: 10px 20px;
    margin-right: 10px;
    margin-top: 10px;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}
```

---

# Step 8: index.js

Paste this code inside:

```javascript id="k7n2wd"
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

const root = ReactDOM.createRoot(
    document.getElementById('root')
);

root.render(
    <App />
);
```

---

# Step 9: Run React Application

Open terminal inside project folder and run:

```bash id="r8m1tx"
npm start
```

Wait for compilation.

---

# Step 10: Open Browser

Open:

```text id="q5v9pl"
http://localhost:3000
```

---

# Step 11: Test Application

1. Click Increase and Decrease buttons
2. Counter value will change
3. Enter name in input field
4. Text updates automatically using React Hook

This demonstrates:

* React Components
* useState Hook
* Event Handling
* Dynamic Rendering
