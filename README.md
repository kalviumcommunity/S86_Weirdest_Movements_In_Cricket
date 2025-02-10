# Weirdest Moments in Cricket

## Project Overview:
This project will allow users to log in and contribute to a list of the weirdest, funniest, and most unexpected moments in cricket history. The list will be dynamic, changing based on user contributions and votes. Users can submit moments, upvote or downvote them, and filter through different categories (e.g., "Funniest Run-outs," "Weirdest Catches," "Unexpected Umpire Decisions," etc.).

## Key Features:
User authentication and session management
Users can submit weird cricket moments with a short description and an optional video/image link
Upvote/downvote system to rank the weirdest moments
Categorization of moments (e.g., funniest run-outs, strangest dismissals, bizarre umpiring decisions)
Search and filter functionality

## Tech Stack:
Frontend: React (Vite)
Backend: Node.js, Express.js
Database: MongoDB (Mongoose for schema)
Hosting: Vercel (Frontend), Render (Backend)

##  Why This Project?
This project is unique, aligns with the "as silly as possible" guideline, and is perfect for cricket fans. It allows users to engage with cricket history in a fun and interactive way. Through this project, I'll develop full-stack skills, including API creation, authentication, database management, and front-end development, while working on something enjoyable and entertaining.

## Setting Development Environment
- Intialized the Project by creating a package.json file using below command in terminal
''''
npm init -y
'''''
- Added .gitignore File To avoid tracking unnecessary files in the Git repository, a .gitignore file has been added to the project. 
This Ignored Node Modules and Package-lock.json files.

## Setting up Endpoint using express application
- The server is created using the express package.
- A basic route /ping is defined which sends back a response: 'Hey, This is Harikrishna Reddy' when visited.
- The server listens on port 3000, and when you visit http://localhost:3000/ping, you'll receive the response message.