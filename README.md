#Chatting Platform

A simple Chatting Platform built using **Node.js, Express, MongoDB, and EJS** implementing full CRUD operations following RESTful routing principles.

---

## Features

-  Create new chats  
-  View all chats  
-  View specific chat  
-  Edit chat message  
-  Delete chat  
-  Display time and date  
-  Clean and modern UI  

---

##  Tech Stack

- Node.js
- Express.js
- MongoDB
- Mongoose
- EJS (Embedded JavaScript Templates)
- Method-Override
- HTML & CSS

---

##  Project Structure

chatting-platform/
│
├── models/
│   └── chat.js
│
├── views/
│   ├── index.ejs
│   ├── new.ejs
│   ├── edit.ejs
│   └── show.ejs
│
├── public/
│   └── style.css
│
├── index.js
├── package.json
└── README.md

---

##  Installation & Setup

1️⃣ Clone the repository

git clone https://github.com/mdfahim10/chatting-platform 
cd chatting-platform

2️⃣ Install dependencies

npm install

3️⃣ Make sure MongoDB is running locally

mongod

4️⃣ Start the application

node index.js

5️⃣ Open in browser

http://localhost:8080/chats

---

##  RESTful Routes Implemented

GET     /chats            → View all chats  
GET     /chats/new        → New chat form  
POST    /chats            → Create chat  
GET     /chats/:id        → View specific chat  
GET     /chats/:id/edit   → Edit chat form  
PATCH   /chats/:id        → Update chat  
DELETE  /chats/:id        → Delete chat  

---

##  Learning Outcomes

- Understanding RESTful routing  
- Working with MongoDB & Mongoose  
- Using EJS templating  
- Implementing full CRUD functionality  
- Handling dynamic routes  
- Styling UI with CSS  
- Managing Git & GitHub  

---

##  Future Improvements

- Add authentication (Login / Signup)  
- Add real-time chat using Socket.io  
- Add validation & error handling  
- Add pagination  
- Deploy on cloud platform  

---

##  Author
Md Fahim
https://mdfahimportfolio.netlify.app/
Developed as a backend learning project to master Express and MongoDB concepts.

---

## 📄 License

This project is for educational purposes.
