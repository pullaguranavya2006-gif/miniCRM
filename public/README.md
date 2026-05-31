# Client Lead Management System (Mini CRM)

## Overview

The Client Lead Management System (Mini CRM) is a web application designed to help businesses manage and track customer leads efficiently. It allows users to add, view, update, and delete lead information while storing data securely in MongoDB.

## Features

* Add New Leads
* View All Leads
* Edit Existing Leads
* Delete Leads
* Lead Status Management (New, Contacted, Converted)
* Notes and Follow-up Tracking
* Dashboard Statistics
* MongoDB Database Integration
* Responsive User Interface

## Technologies Used

* HTML
* CSS
* JavaScript
* Node.js
* Express.js
* MongoDB
* Mongoose

## Project Structure

MiniCRM/
├── server.js
├── .env
├── models/
│   └── Lead.js
├── routes/
│   └── leadRoutes.js
├── public/
│   ├── index.html
│   ├── style.css
│   └── script.js

## Installation

1. Clone the repository
2. Install dependencies

npm install

3. Configure MongoDB

PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/minicrm

4. Start the server

node server.js

5. Open in browser

http://localhost:5000

## Learning Outcomes

* CRUD Operations
* REST API Development
* MongoDB Integration
* Full Stack Web Development
* Project Deployment Workflow

## Author

Navya Pullagura
