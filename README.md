# AvstroGroup
This project is created for the SoftUni Angular Exam.

It is an app for creating and managing insurances for your vehicle.
You can create, pay and delete insurances and add money to your online account.

The app uses Angular for front-end and an express REST-api as a back-end with mongoDB as a database.

INFO

Architecture:
- Authentication module - contains login, register and profile components
- Insurances module - contains components for creating, deleting, paying and viewing insurances in detail.
- Reviews module - components for creating and displaying reviews for the app, created by users.
- Pages module - home, about and 404 components are added here.
- Shared module - components used in multiple places around the app.
- Core module - contains all services, guards, interfaces, interceptors, and singletons like the header or footer.

Visitors:
- Visitors have access to a free calculator where they can check how much an insurance would cost them. They can also see the reviews and the about page.

Users:
- Logged-in/Registered users can create, modify and delete insurances as well as create reviews, they can add money to their online wallet and use it to pay for the insurances they have.