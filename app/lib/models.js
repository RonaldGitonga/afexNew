//@ts-nocheck
import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
  {
    FirstName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    LastName: {
      type: String,
      required: true,
      unique: true,
      min: 3,
      max: 20,
    },
    email: {
      type: String,
      required: true,
      unique: true,
    },
    PhoneNumber: {
      type: String,
      required: true,
      unique: true,
    },

    password: {
      type: String,
      required: true,
    },
    hashedPassword:{type:String},
    image: {
      type: String,
    },
    role: {
      type: String,
      enum: ['Admin','Finance','Marketing','Tutor','Student'],
      default:'Student',
      required:true,
    
      
    },
    isActive: {
      type: Boolean,
      default: true,
    },
   
    address: {
      type: String,
    },
   
  },
  { timestamps: true }
);

const courseSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    desc: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
      min: 0,
    },
    weeks: {
      type: Number,
      required: true,
      min: 0,
    },
    imageSrc: {
      type: String,
    },
    cohort: {
      type: String,
    },
    intake: {
      type: String,
    },
    days: {
      type: String,
    },
  },
  { timestamps: true }
);

const eventSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      unique: true,
    },
    description: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: true,
      min: 0,
    },
    time: {
      type: String,
      required: true,
      min: 0,
    },
    image: {
      type: String,
   
    },
    location:{
      type:String,
    },
    picture:{
      type:String,
    }

},
{ timestamps: true }
);
const blogSchema = new mongoose.Schema({
  title:{String}, // String is shorthand for {type: String}
  author:{String},
  description:{ String},
  comments: [{ body: String, date: Date }],
  date: { type: Date, default: Date.now },
  hidden: Boolean,
  meta: {
    votes: Number,
    favs: Number
  },
  slug:{String},
  createdAt:{
    type:Date,default:Date.now,
    
  },
image:{type:String},

});
//analtyics model
  
const analyticsSchema = new mongoose.Schema({
  SAT:{Number}, // String is shorthand for {type: String}
  GMAT:{Number},
  IELTS:{ Number},
  pageVisits:{Number},

  date: { type: Date, default: Date.now },
  createdAt:{
    type:Date,default:Date.now,
    
  },
});




export const User = mongoose.models.User || mongoose.model("User", userSchema);
export const Course = mongoose.models.Course || mongoose.model("Course", courseSchema);
export const Event=mongoose.models.Event || mongoose.model("Event",eventSchema);
export const Blog=mongoose.models.Blog || mongoose.model("Blog",blogSchema);
export const Analytics=mongoose.models.Analytics || mongoose.model("Analytics",analyticsSchema);
