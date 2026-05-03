## SkillSphere - Online Learning Platform

SkillSphere is a modern online learning platform built with Next.js. Users can explore skill-based courses, search courses by title, view protected course details, register/login, update profile information, and experience a responsive UI across mobile, tablet, and desktop.

## Live Link
               https://assinment-8-skillsphere.onrender.com


## GitHub Repository

https://github.com/eshtiak23/Assinment-8_Skillsphere

## Project Purpose

The purpose of SkillSphere is to provide learners with a clean and user-friendly platform, Where they can discover courses in categories such as Web Development, Design, Marketing, and many more. The project focuses on responsive design, route-based rendering, protected pages, authentication flow simulation, and a polished learning platform experience.

## Key Features

- Modern responsive layout for mobile, tablet, and desktop
- Persistent Navbar and Footer across all routes
- Dynamic course data from local JSON file
- Home page with hero section, trending courses, learning tips, and top instructors
- All Courses page with search functionality by course title
- Protected Course Details page
- Redirect unauthenticated users to Login page
- Redirect users back to course details after successful login
- Register page with form validation
- Login page with form validation
- Google social login button simulation
- Toast notifications for success and error messages
- My Profile page showing logged-in user data
- Update Profile page for changing name, image URL, and bio
- Logout functionality with navbar state update
- Custom not-found page
- Loading UI implementation
- Motion animation applied to course cards
- Fully responsive design with Tailwind CSS

## Main Pages

### Home Page

The home page includes:
- Hero/banner section
- Trending courses section
- Learning tips section
- Top instructors section

### All Courses Page

The courses page displays all available courses. Users can search courses by title. Each course card includes:
- Course image
- Course title
- Instructor name
- Rating
- Level
- Duration
- View Details button

### Course Details Page

The course details page is protected. Users must be logged in to access it.

It includes:
- Course image
- Course title
- Instructor
- Rating
- Duration
- Level
- Course description
- Static course curriculum

### Authentication Pages

Login page includes:
- Email field
- Password field
- Login button
- Google login button
- Register page link
- Toast notification for errors/success

Register page includes:
- Name field
- Email field
- Photo URL field
- Password field
- Register button
- Google login button
- Login page link
- Toast notification for errors/success

### My Profile Page

The My Profile page displays:
- User avatar
- User name
- User email
- User bio
- Learning statistics
- Current learning progress
- Account details

### Update Profile Page

The Update Profile page allows users to update:
- Name
- Profile image URL
- Short bio

## Technologies Used

- Next.js
- React
- TypeScript
- Tailwind CSS
- JavaScript
- JSON data
- LocalStorage-based authentication simulation

## NPM Packages Used

- `next`
- `react`
- `react-dom`
- `tailwindcss`
- `react-hot-toast`
- `lucide-react`
- `motion`


## Authentication Note

This project uses a localStorage-based simulated authentication system for assignment demonstration purposes. It includes user registration, login, Google social login simulation, protected course details routes, redirect-back behavior after login, logout functionality, navbar state changes, and profile update features.

BetterAuth is listed in the suggested tech stack, but it was not implemented in this version to keep the project stable for static deployment and assignment evaluation. The current authentication flow focuses on demonstrating the required user experience and route protection behavior without requiring a database, server-side auth configuration, or production OAuth credentials.

## Course Data

The project uses a local JSON file:

```txt
data/courses.json