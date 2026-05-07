# readme

## Step 1: Install Node.js

Download and install Node.js from:

[Node.js Official Website](https://nodejs.org?utm_source=chatgpt.com)

After installation, open terminal and check:

```bash id="z2q8mp"
node -v
npm -v
```

If versions are displayed, installation is successful.

---

# Step 2: Install Angular CLI

Open terminal or command prompt.

Run:

```bash id="y4m7rk"
npm install -g @angular/cli
```

Check installation:

```bash id="k8v2tx"
ng version
```

---

# Step 3: Create Angular Project

Run:

```bash id="j6n3qp"
ng new angular-app
```

Angular will ask some questions.

Choose:

```text id="d9x5we"
Would you like to add Angular routing? -> No
```

Choose stylesheet format:

```text id="w2q7cv"
CSS
```

Wait for project creation to finish.

---

# Step 4: Open Project Folder

Run:

```bash id="f5r8na"
cd angular-app
```

---

# Step 5: Open Project in VS Code

Run:

```bash id="n1k6xm"
code .
```

If `code` command does not work:

* Open VS Code manually
* Click File → Open Folder
* Select angular-app folder

---

# Step 6: Replace Existing Files

Go to folder:

```text id="a7m2pl"
src/app
```

You will see files like:

* app.component.html
* app.component.ts
* app.component.css
* app.module.ts

Delete existing code inside these files.

Paste the provided code into corresponding files.

---

# Step 7: app.component.html

Paste:

```html id="c8x4dn"
<div class="container">

    <h1>Angular User Registration and Login</h1>

    <div class="box">

        <h2>Register</h2>

        <input type="text"
               placeholder="Enter Username"
               [(ngModel)]="registerUsername">

        <input type="password"
               placeholder="Enter Password"
               [(ngModel)]="registerPassword">

        <button (click)="registerUser()">
            Register
        </button>

    </div>

    <div class="box">

        <h2>Login</h2>

        <input type="text"
               placeholder="Enter Username"
               [(ngModel)]="loginUsername">

        <input type="password"
               placeholder="Enter Password"
               [(ngModel)]="loginPassword">

        <button (click)="loginUser()">
            Login
        </button>

    </div>

    <div class="box" *ngIf="message">

        <h2>{{ message }}</h2>

    </div>

</div>
```

---

# Step 8: app.component.ts

Paste:

```typescript id="v3q9ka"
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

  registerUsername: string = '';
  registerPassword: string = '';

  loginUsername: string = '';
  loginPassword: string = '';

  message: string = '';

  registerUser() {

    localStorage.setItem(
      'username',
      this.registerUsername
    );

    localStorage.setItem(
      'password',
      this.registerPassword
    );

    this.message = 'Registration Successful';

  }

  loginUser() {

    let username =
      localStorage.getItem('username');

    let password =
      localStorage.getItem('password');

    if (
      this.loginUsername === username &&
      this.loginPassword === password
    ) {

      this.message = 'Login Successful';

    }

    else {

      this.message = 'Invalid Username or Password';

    }

  }

}
```

---

# Step 9: app.component.css

Paste:

```css id="u7p1mx"
.container {
    width: 400px;
    margin: auto;
    margin-top: 50px;
    font-family: Arial;
}

.box {
    background-color: #f4f4f4;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
}

input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
}

button {
    padding: 10px 20px;
    margin-top: 15px;
}
```

---

# Step 10: app.module.ts

Paste:

```typescript id="r4v8we"
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],

  imports: [
    BrowserModule,
    FormsModule
  ],

  providers: [],

  bootstrap: [AppComponent]

})

export class AppModule { }
```

---

# Step 11: Run Angular Application

Open terminal inside project folder.

Run:

```bash id="q8t2la"
ng serve
```

Wait for compilation.

You will see something like:

```text id="p7x4wm"
Compiled successfully
```

---

# Step 12: Open Browser

Open:

```text id="g2m9zn"
http://localhost:4200
```

---

# Step 13: Test Application

1. Enter username and password in Register section
2. Click Register
3. Enter same credentials in Login section
4. Click Login

You should see:

```text id="m6w3pk"
Login Successful
```
