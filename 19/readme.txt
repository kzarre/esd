# Folder Structure

```text id="u2m8qa"
mobile-first-app/
│
├── index.html
├── style.css
└── readme.txt
```

---

# readme.txt

## Step 1: Create Project Folder

Create a folder named:

```text id="r7q1wp"
mobile-first-app
```

Open it in VS Code.

---

# Step 2: Create index.html

Create file:

```text id="k5m9tx"
index.html
```

Paste the code below.

---

# Step 3: Create style.css

Create file:

```text id="p3v8ra"
style.css
```

Paste the code below.

---

# Step 4: index.html

```html id="x8q2mk"
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>Mobile First Design</title>

    <link rel="stylesheet" href="style.css">

</head>

<body>

    <div class="container">

        <h1>Mobile First Responsive Design</h1>

        <div class="card-container">

            <div class="card">

                <h2>HTML</h2>

                <p>
                    HTML creates webpage structure.
                </p>

            </div>

            <div class="card">

                <h2>CSS</h2>

                <p>
                    CSS styles the webpage.
                </p>

            </div>

            <div class="card">

                <h2>Responsive Design</h2>

                <p>
                    Layout changes based on screen size.
                </p>

            </div>

        </div>

    </div>

</body>
</html>
```

---

# Step 5: style.css

```css id="n4v7qp"
body {

    margin: 0;

    font-family: Arial;

    background-color: #f4f4f4;

}

.container {

    padding: 20px;

}

h1 {

    text-align: center;

}

.card-container {

    display: flex;

    flex-direction: column;

    gap: 20px;

}

.card {

    background-color: white;

    padding: 20px;

    border-radius: 10px;

    box-shadow: 0 0 5px gray;

}

@media (min-width: 768px) {

    .card-container {

        flex-direction: row;

    }

    .card {

        flex: 1;

    }

}
```

---

# Step 6: Run Project

Open:

```text id="m1q8tx"
index.html
```

in browser.

---

# Step 7: Test Responsive Design

1. Open browser developer tools
2. Click mobile/tablet view
3. Resize screen

You will observe:

* Mobile layout shows cards vertically
* Desktop layout shows cards horizontally

---

# Output

This practical demonstrates:

* Mobile-first design
* Responsive layout
* CSS media queries
* Flexible UI using Flexbox
