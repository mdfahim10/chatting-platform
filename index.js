const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const app = express();
const Chat = require("./models/chat.js");
/* ------------------ View Engine Setup ------------------ */
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({extended:true}));
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

/* ------------------ Routes ------------------ */
app.get("/", (req, res) => {
    res.send("root is working");
});
//-------------------Index Route------------------
app.get("/chats",async (req,res)=>{
    let chats = await Chat.find();
    console.log(chats);
    res.render("index.ejs",{chats});
});
//-------------------New Route------------------
app.get("/chats/new",async (req,res)=>{
    let chats = await Chat.find();
    res.render("new.ejs");
});

//--------------- Create Route ------------------
app.post("/chats", async (req, res) => {
    let { from, to, message } = req.body;

    let newChat = new Chat({
        from: from,
        to: to,
        message: message,
        created_at: new Date()
    });
    await newChat.save();
    res.redirect("/chats");
});

/* ------------------ Server ------------------ */
const PORT = 8080;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
