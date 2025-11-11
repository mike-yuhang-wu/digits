## Digits — Project Documentation

Digits is a simple contact management web application built with Next.js and Prisma.
Users can register, log in, and manage their contacts efficiently. Each contact can have a profile with details such as name, address, and description, and users can add timestamped notes to track interactions over time.
This document provides an overview of each page in the Digits web application.

### Landing Page (Before Login)
<img src="doc/landing-page.png">

The Landing Page is the first page visitors see when they arrive at the Digits website.
It introduces the application and provides navigation to the Sign In page and the Sign Up page.

At the top-right corner, there is a Login dropdown. Clicking it shows the user the link to the Sign In page, and the link to Sign Up page.
If a user is already logged in, they are automatically redirected to their contact list instead.

### Sign In Page
<img src="doc/signin-page.png">

The Sign In Page allows existing users to access their accounts.
It includes a form where users can enter their email and password, then click the Signin button to log in.

At the bottom of the form, there is a Sign up link that redirects new users to the Sign Up page to create a new account.

### Sign Up Page
<img src="doc/register-page.png">

The Sign Up Page enables new users to create an account.
The form contains three fields:

* Email Address
* Password
* Confirm Password

After filling out the form and clicking Register, a new user account is created.
By default, new accounts are user accounts, not administrator accounts.

### Contact List Page (Landing Page After User Login)
<img src="doc/landing-after-login-page.png">

After logging in, users are directed to the List Contact page, which acts as the user’s main dashboard.

Each contact appears as a card containing:

* The contact’s photo
* Name
* Address
* Description
* A section showing historic timestamped notes
* A form to submit new notes
* A link to the Edit Contact Page, which is not yet implemented, so the Not Found page will show instead.

At the top of the page, the navigation bar includes:

* Add Contact — goes to the Add Contact page
* List Contact — returns to this page
* User Email Dropdown — provides options to log out or change the password

### Add Contact Page
<img src="doc/add-contact-page.png">

The Add Contact Page provides a form for creating a new contact.
Users can fill in all relevant details, such as name, address, and description, and a link to a profile photo.
Submitting the form adds the contact to the user’s list.

### Change Password Page
<img src="doc/change-password-page.png">

The Change Password Page allows users to update their account password.
The form includes three fields:

* Old Password
* New Password
* Confirm Password

After submission, the system validates the old password and then updates it with the new one if the information is correct.

### Admin Page
<img src="doc/admin-list-contact-page.png">

Users with admin accounts have access to all user account features, with an additional Admin Page, available through the Admin link in the navigation bar.

This page lists all contacts in the system, including those created by other users.
Each contact card has the same structure as in the regular contact card, but includes an additional section showing the owner’s email address below the notes area.

### Description Page After Logged In

Regardless what account is used to log in, there will be a button at the very left in the navigation bar that says "digits." Click on it and the description page which a user see before they log in will show.

### Footer

The footer contains the information of the institution that made the template, from which this project is built upon. There is also a link to that template.

## Installation Instruction

1. Go to GitHub and use this project as template.
2. Download the template to your own computer.
3. Go to the directory containing this project, then run `npm install` to install npm.
4. Create a PostgreSQL database by running `createdb digits`.
5. In the `.env` file, set the `DATABASE_URL` to `postgresql://<username>:<password>@localhost:5432/digits?schema=public`. Replace `<username>` and `<password>` with the corresponding value for your device.
6. Migrate the database by running `npx prisma migrate dev`, which creates tables in the `digits` database created in step 4.
7. Seed the `digits` database with default account and contacts by running `npx prisma db seed`.
8. Run `npm run dev`, then click on the URL provided in the terminal (might be http://localhost:3000) to see the digits website.

## Notice

ChatGPT was used to help writing this documentation.
