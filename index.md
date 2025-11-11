## Digits — Project Documentation

Digits is a simple contact management web application built with Next.js and Prisma.
Users can register, log in, and manage their contacts efficiently. Each contact can have a profile with details such as name, address, and description, and users can add timestamped notes to track interactions over time.
This document provides an overview of each page in the Digits web application.

### Landing Page (Before Login)
<img src="doc/landing-page.png">

The Landing Page is the first page visitors see when they arrive at the Digits website.
It introduces the application and provides navigation to the Sign In page.

At the top-right corner, there is a Login button. Clicking it takes the user to the Sign In page.
If a user is already logged in, they are automatically redirected to their contact list instead.

### Sign In Page
<img src="doc/signin-page.png">

The Sign In Page allows existing users to access their accounts.
It includes a form where users can enter their email and password, then click the Sign In button to log in.

At the bottom of the form, there is a Register link that redirects new users to the Register Page to create a new account.

### Register Page
<img src="doc/register-page.png">

The Register Page enables new users to create an account.
The form contains three fields:

Email Address

Password

Confirm Password

After filling out the form and clicking Register, a new user account is created.
By default, new accounts are user accounts, not admin accounts.

### Contact List Page (User Dashboard)
<img src="doc/landing-after-login-in.png">

After logging in, users are directed to the Contact List Page, which acts as the user’s main dashboard.

Each contact appears as a card containing:

The contact’s photo

Name

Address

Description

A section showing timestamped notes

A form to submit new notes

A link to the Edit Contact Page

At the top of the page, the navigation bar includes:

Add Contact — goes to the Add Contact page

List Contact — returns to this page

User Email Dropdown — provides options to log out or change the password

### Add Contact Page
<img src="doc/add-contact-page.png">

The Add Contact Page provides a form for creating a new contact.
Users can fill in all relevant details, such as name, address, and description, and optionally upload or link a profile photo.
Submitting the form adds the contact to the user’s list.

### Change Password Page
<img src="doc/change-password-page.png">

The Change Password Page allows users to update their account password.
The form includes three fields:

Old Password

New Password

Confirm New Password

After submission, the system validates the old password and updates it with the new one if the information is correct.

### Admin Page
<img src="doc/admin-list-contact-page.png">

Users with admin accounts have access to an additional Admin Page, available through an Admin link in the navigation bar.

This page lists all contacts in the system, including those created by other users.
Each contact card has the same structure as in the regular contact list but includes an additional section showing the owner’s email address below the notes area.

Would you like me to add a short “How to Download and Run the Project” section template at the end (with placeholders for your later edits)? It would complete the documentation structure neatly.

## Installation Instruction

1. Go to GitHub and use this project as template.
2. Download the template to your own computer.
3. Go to the directory containing this project, then run `npm install` to install npm.
4. Create a PostgreSQL database by running `createdb digits`.
5. In the `.env` file, set the `DATABASE_URL` to `postgresql://<username>:<password>@localhost:5432/digits?schema=public`. Replace `<username>` and `<password>` with the corresponding value for your device.
6. Migrate the database by running `npx prisma migrate dev`, which creates tables in the `digits` database created in step 4.
7. Seed the `digits` database with default account and contacts by running `npx prisma db seed`.
8. Run `npm run dev`, then click on the URL provided in the terminal (might be http://localhost:3000) to see the digits website.



