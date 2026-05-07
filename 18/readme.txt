# Folder Structure

```text id="m4q8wp"
jquery-mobile-app/
│
├── index.html
└── readme.txt
```

---

# readme.txt

## Step 1: Create Project Folder

Create a folder named:

```text id="u7x2ra"
jquery-mobile-app
```

Open folder in VS Code.

---

# Step 2: Create index.html

Create file:

```text id="k3m9tx"
index.html
```

Paste the code below.

---

# Step 3: index.html

```html id="p8v1qa"
<!DOCTYPE html>
<html lang="en">
<head>

    <meta charset="UTF-8">

    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>jQuery Mobile Practical</title>

    <link rel="stylesheet"
          href="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.css">

    <script src="https://code.jquery.com/jquery-1.11.1.min.js"></script>

    <script src="https://code.jquery.com/mobile/1.4.5/jquery.mobile-1.4.5.min.js"></script>

</head>

<body>

    <div data-role="page" id="home">

        <div data-role="header">

            <h1>Mobile Website</h1>

        </div>

        <div role="main" class="ui-content">

            <h2>Welcome to jQuery Mobile</h2>

            <p>
                This is a simple mobile web page.
            </p>

            <a href="#about"
               class="ui-btn ui-btn-b ui-corner-all">

               Go to About Page

            </a>

        </div>

        <div data-role="footer">

            <h4>College Practical</h4>

        </div>

    </div>

    <div data-role="page" id="about">

        <div data-role="header">

            <h1>About</h1>

        </div>

        <div role="main" class="ui-content">

            <p>
                jQuery Mobile helps create responsive mobile websites.
            </p>

            <a href="#home"
               class="ui-btn ui-btn-a ui-corner-all">

               Back to Home

            </a>

        </div>

        <div data-role="footer">

            <h4>jQuery Mobile Example</h4>

        </div>

    </div>

</body>
</html>
```

---

# Step 4: Run Project

Open:

```text id="d2m7vk"
index.html
```

in browser.

---

# Step 5: Output

You will see:

* Mobile styled web page
* Header and footer
* Buttons
* Multiple pages
* Responsive mobile UI using jQuery Mobile
