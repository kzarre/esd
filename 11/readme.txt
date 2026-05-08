
# README: Angular User Auth Demo

## Step 1: Install Node.js

Download and install Node.js from the [Official Website](https://nodejs.org).

After installation, verify it by running these commands in your terminal:

```bash
node -v
npm -v

```

---

## Step 2: Install Angular CLI

Open your terminal and install the Angular command-line interface globally:

```bash
npm install -g @angular/cli

```

Verify installation:

```bash
ng version

```

---

## Step 3: Create Angular Project

Run the following command. **Important:** We use the `--no-standalone` flag to ensure the project uses the `app.module.ts` structure used in this guide.

```bash
ng new angular-app --no-standalone --routing=false --style=css

```

* When asked about **SSR (Server Side Rendering)**, type `n` or **No**.
* Wait for the "Packages installed successfully" message.

---

## Step 4: Open Project Folder

Navigate into your new project:

```bash
cd angular-app

```

---

## Step 5: Open in VS Code

Run:

```bash
code .

```

*If `code` isn't recognized, open VS Code manually and use **File > Open Folder** to select the `angular-app` folder.*

---

## Step 6: Prepare Files

Navigate to `src/app/` in the VS Code explorer. You will modify the four files listed below. **Delete all existing boilerplate code** in each file before pasting the new code.

---

## Step 7: app.component.html

**File:** `src/app/app.component.html`

```html
<div class="container">
    <h1>Angular User Registration and Login</h1>

    <div class="box">
        <h2>Register</h2>
        <input type="text" placeholder="Enter Username" [(ngModel)]="registerUsername">
        <input type="password" placeholder="Enter Password" [(ngModel)]="registerPassword">
        <button (click)="registerUser()">Register</button>
    </div>

    <div class="box">
        <h2>Login</h2>
        <input type="text" placeholder="Enter Username" [(ngModel)]="loginUsername">
        <input type="password" placeholder="Enter Password" [(ngModel)]="loginPassword">
        <button (click)="loginUser()">Login</button>
    </div>

    <div class="box" *ngIf="message">
        <h2>{{ message }}</h2>
    </div>
</div>

```

---

## Step 8: app.component.ts

**File:** `src/app/app.component.ts`

```typescript
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  registerUsername = '';
  registerPassword = '';
  loginUsername = '';
  loginPassword = '';
  message = '';

  registerUser() {
    localStorage.setItem('username', this.registerUsername);
    localStorage.setItem('password', this.registerPassword);
    this.message = 'Registration Successful';
  }

  loginUser() {
    const savedUser = localStorage.getItem('username');
    const savedPass = localStorage.getItem('password');

    if (this.loginUsername === savedUser && this.loginPassword === savedPass && savedUser !== '') {
      this.message = 'Login Successful';
    } else {
      this.message = 'Invalid Username or Password';
    }
  }
}

```

---

## Step 9: app.component.css

**File:** `src/app/app.component.css`

```css
.container {
    width: 400px;
    margin: 50px auto;
    font-family: Arial, sans-serif;
}
.box {
    background-color: #f4f4f4;
    padding: 20px;
    margin-top: 20px;
    border-radius: 10px;
    border: 1px solid #ddd;
}
input {
    width: 100%;
    padding: 10px;
    margin-top: 10px;
    box-sizing: border-box;
}
button {
    padding: 10px 20px;
    margin-top: 15px;
    cursor: pointer;
    background-color: #007bff;
    color: white;
    border: none;
    border-radius: 5px;
}
button:hover {
    background-color: #0056b3;
}

```

---

## Step 10: app.module.ts

**File:** `src/app/app.module.ts`
*This step is crucial to make `[(ngModel)]` work.*

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
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

## Step 11: Run and Test

1. In your terminal, run:
```bash
ng serve

```


2. Open your browser to `http://localhost:4200`.
3. **Test:** Register a user first, then try logging in with those same credentials!

```

```
