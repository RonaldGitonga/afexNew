
import express, { json } from "express";
import { connect} from "mongoose";
import cors from "cors";
import { connectToDB } from "../../lib/utils/connectToDb";

import { Blog } from "../../lib/models";
import multer, { diskStorage } from "multer"
import { NextResponse } from "next/server";

export async function POST(
    
){
    const app = express();
    app.use(json());
    app.use(cors());
//mongodb connection
const mongoUrl =process.env.MONGODB_URI;

connect(mongoUrl, {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to database");
  })
  .catch((e) => console.log(e));



app.get("/", async (req, res) => {
  res.send("Success!!!!!!");
});



//////////////////////////////////////////////////////////////



const storage = diskStorage({
  destination: function (req, file, cb) {
    cb(null, "../../images/");
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now();
    cb(null, uniqueSuffix + file.originalname);
  },
});

const upload = multer({ storage: storage });

app.post("/blogs", upload.single("image"), async (req, res) => {
  console.log(req.body);
  const image = req.file.filename;

try {
    connectToDB();
 
   const newBlog = new Blog({
      title,
      description,
      slug,
      date,
      image
   
    });
 
    await newBlog.save();
    res.json({ status: "ok" });
   console.log('Blog Saved Successfully')
  
  } catch (err) {
    res.json({status:err})
    console.log(err);
    
  
  }
});
return NextResponse.json(newBlog);
}

