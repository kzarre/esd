# Folder Structure

```text id="u4q8mk"
aws-deployment/
│
├── index.html
└── readme.txt
```

---

# readme.txt

## Step 1: Create AWS Account

Open:

[AWS Official Website](https://aws.amazon.com?utm_source=chatgpt.com)

Create AWS account and login.

---

# Step 2: Create Project Folder

Create folder:

```text id="p7m2tx"
aws-deployment
```

Open it in VS Code.

---

# Step 3: Create index.html

Create file:

```text id="k1v9ra"
index.html
```

Paste this code:

```html id="x5q3wp"
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport"
          content="width=device-width, initial-scale=1.0">

    <title>AWS Deployment</title>

    <style>

        body {
            font-family: Arial;
            text-align: center;
            margin-top: 100px;
            background-color: #f4f4f4;
        }

        h1 {
            color: #333;
        }

    </style>

</head>
<body>

    <h1>Web Application Deployed on AWS</h1>

    <p>
        College Practical Example
    </p>

</body>
</html>
```

---

# Step 4: Open AWS Console

Open:

[AWS Management Console](https://console.aws.amazon.com?utm_source=chatgpt.com)

Login with AWS account.

---

# Step 5: Open S3 Service

In AWS search bar type:

```text id="m8q2vn"
S3
```

Open S3 service.

---

# Step 6: Create Bucket

Click:

```text id="r3v7pk"
Create Bucket
```

Bucket name example:

```text id="n5m1qa"
my-college-practical
```

Keep settings default.

Uncheck:

```text id="u2x9ra"
Block all public access
```

Accept warning checkbox.

Click:

```text id="d7q4wp"
Create Bucket
```

---

# Step 7: Upload Website Files

Open bucket.

Click:

```text id="k8m3tx"
Upload
```

Upload:

* index.html

Click:

```text id="v1q7mk"
Upload
```

---

# Step 8: Enable Static Website Hosting

Open bucket.

Go to:

```text id="p4v8ra"
Properties
```

Scroll down to:

```text id="x9m2wp"
Static website hosting
```

Click:

```text id="r6q1tx"
Edit
```

Enable:

```text id="j3v7pk"
Static Website Hosting
```

Index document:

```text id="n8m4qa"
index.html
```

Save changes.

---

# Step 9: Add Bucket Policy

Go to:

```text id="u5q2vn"
Permissions
```

Open:

```text id="k2m8ra"
Bucket Policy
```

Paste this policy:

```json id="x7v3wp"
{
  "Version": "2012-10-17",
  "Statement": [
    {
      "Sid": "PublicRead",
      "Effect": "Allow",
      "Principal": "*",
      "Action": [
        "s3:GetObject"
      ],
      "Resource": [
        "arn:aws:s3:::my-college-practical/*"
      ]
    }
  ]
}
```

Replace:

```text id="m1q9tx"
my-college-practical
```

with your bucket name.

Save changes.

---

# Step 10: Open Website Link

Go back to:

```text id="p8v4ra"
Properties
```

Scroll to:

```text id="r2m7wp"
Static Website Hosting
```

Copy website endpoint URL.

Open it in browser.

---

# Output

You will see:

* Static website hosted on AWS Cloud
* Publicly accessible webpage
* Successful AWS deployment practical
