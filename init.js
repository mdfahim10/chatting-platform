const mongoose = require("mongoose");
const Chat = require("./models/chat.js");
/* ------------------ MongoDB Connection ------------------ */
async function connectDB() {
    try {
        await mongoose.connect("mongodb://127.0.0.1:27017/chat");
        console.log("MongoDB connected successfully");
    } catch (err) {
        console.error("MongoDB connection error:", err);
    }
}
connectDB();
/* ------------------ Chat1 ------------------ */

let allChats = [
    {
  from: "Aman",
  to: "Rahul",
  message: "Can you share yesterday's class notes?",
  created_at: new Date()
},
{
  from: "Priya",
  to: "Sneha",
  message: "Did you complete the math assignment?",
  created_at: new Date()
},
{
  from: "Rohit",
  to: "Kunal",
  message: "Send me the project PPT once you're done",
  created_at: new Date()
},
{
  from: "Anjali",
  to: "Neha",
  message: "Let's revise chemistry together today",
  created_at: new Date()
},
{
  from: "Vikram",
  to: "Arjun",
  message: "What time is the exam tomorrow?",
  created_at: new Date()
},
];
Chat.insertMany(allChats)
    .then((res)=>{console.log(res);});