# Folder Structure

```text id="v8q2mk"
github-practical/
│
├── index.html
└── readme.txt
```

---

# readme.txt

## Step 1: Install Git

Download and install Git from:

[Git Official Website](https://git-scm.com?utm_source=chatgpt.com)

Check installation:

```bash id="x3m7ra"
git --version
```

---

# Step 2: Create GitHub Account

Open:

[GitHub Official Website](https://github.com?utm_source=chatgpt.com)

Create account and login.

---

# Step 3: Create Project Folder

Create folder:

```text id="u7q1wp"
github-practical
```

Open folder in VS Code.

---

# Step 4: Create index.html

Create file:

```text id="m5v8tx"
index.html
```

Paste this code:

```html id="k2q9ra"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>GitHub Practical</title>

    <style>

        body {
            font-family: Arial;
            text-align: center;
            margin-top: 100px;
            background-color: #f4f4f4;
        }

    </style>

</head>
<body>

    <h1>Version Control using GitHub</h1>

    <p>
        College Practical Example
    </p>

</body>
</html>
```

---

# Step 5: Open Terminal

Open terminal inside project folder.

---

# Step 6: Initialize Git Repository

Run:

```bash id="p4m2vk"
git init
```

---

# Step 7: Add Files

Run:

```bash id="r8q1tx"
git add .
```

---

# Step 8: Commit Files

Run:

```bash id="n3v7wp"
git commit -m "first commit"
```

---

# Step 9: Create GitHub Repository

Open GitHub.

Click:

```text id="m1q8ra"
New Repository
```

Repository name example:

```text id="u5m2tx"
github-practical
```

Click:

```text id="x7q4wp"
Create Repository
```

---

# Step 10: Connect Local Project to GitHub

Copy repository URL from GitHub.

Run:

```bash id="k9v3ra"
git remote add origin YOUR_REPOSITORY_URL
```

Example:

```bash id="d2m8tx"
git remote add origin https://github.com/username/github-practical.git
```

---

# Step 11: Push Code to GitHub

Run:

```bash id="q4v1pk"
git branch -M main
git push -u origin main
```

GitHub may ask:

* Username
* Password/Token

Login successfully.

---

# Step 12: Verify Upload

Refresh GitHub repository page.

You will see:

* index.html uploaded online
* successful version control practical

---

# Output

This practical demonstrates:

* Git installation
* Git repository initialization
* Git add
* Git commit
* GitHub repository creation
* Git push
* Version control using GitHub
