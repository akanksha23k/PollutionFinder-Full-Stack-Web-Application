**PollutionFinder – Pollution Monitoring Web App**

PollutionFinder is a full-stack web application that allows users to search pollution data by city, view pollution details, and save bookmarked cities for future reference. The project is built using React (Frontend) and Spring Boot (Backend).

____________________________________________________________________________________________________

**Features** :-

User Registration and Login with JWT authentication
Search pollution data by city
View pollution details such as PM2.5 values
Save cities as bookmarks
View and delete saved bookmarks
Backend database integration
____________________________________________________________________________________________________

**Tech Stack :-**

**Frontend**:-

React.js

React Router

Axios

HTML, CSS, JavaScript

**Backend**:-

Spring Boot

Spring Data JPA

REST APIs

MySQL / H2 Database

JWT Authentication

___________________________________________________________________________________________________


**Project Structure**:-

PollutionFinder
│
├── frontend
│   ├── src
│   │   ├── pages (Login, Register, Home, Bookmarks)
│   │   ├── components (Search, UI components)
│   │   ├── services (authService, bookmarkService)
│   │   └── styles
│
├── backend
│   ├── controller
│   ├── service
│   ├── repository
│   ├── entity
│   └── dto

__________________________________________________________________________________________________

**How to Run the Project**

**Backend (Spring Boot)** :-

Open the backend project in an IDE

Configure the database in application.properties

Run the Spring Boot application

**Backend will start on:**

http://localhost:8080

**Frontend (React)**

Navigate to the frontend folder

**Install dependencies:**

npm install


**Start the application:**

npm start


**Frontend will run on:**

http://localhost:3000

________________________________________________________________________________

**API Endpoints** :-
**Authentication**

POST /api/auth/register – Register a new user

POST /api/auth/login – Login user

**Bookmarks**

POST /api/bookmarks – Save a bookmark

GET /api/bookmarks?username={username} – Retrieve saved bookmarks

DELETE /api/bookmarks/{id} – Delete a bookmark

_____________________________________________________________________________________________________________

**Project Description  :-**

PollutionFinder helps users understand pollution levels across different cities and allows them to store important locations using bookmarks for quick access.
______________________________________________________________________________________________________________

**Future Enhancements**

Integration with real-time pollution APIs

Advanced analytics and charts

User profile management

Cloud deployment

_______________________________________________________________________________________________________________

**Author**

Aakanksha Kapadnis
Bachelor of Engineering – Electronics and Telecommunication

______________________________________________________________________________________________________________

**License**

This project is developed for educational purposes.
