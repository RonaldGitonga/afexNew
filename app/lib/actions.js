"use server";

import { revalidatePath } from "next/cache";
import { Course, User,Blog } from "../lib/models";
import { connectToDB } from "./utils/connectToDb";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";
import { signIn } from "../auth";


import {writeFile} from 'fs/promises'
import { join } from "path";

export const addUser = async (formData) => {
  const { username, email, password, phone, address, role, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);

    const newUser = new User({
      username,
      email,
      password: hashedPassword,
      phone,
      address,
      role,
      isActive,
    });

    await newUser.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const updateUser = async (formData) => {
  const { id, username, email, password, phone, address, role, isActive } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      username,
      email,
      password,
      phone,
      address,
      role,
      isActive,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await User.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update user!");
  }

  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addCourse = async (formData) => {
  const { title, desc, price, weeks, intake, cohort,days } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newCourse = new Course({
      title,
      desc,
      price,
      days,
      cohort,
      intake,
      weeks,
  
    });

    await newCourse.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create course!");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
};

export const updateCourse = async (formData) => {
  const { id, title, desc, price, days, cohort, intake,weeks } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const updateFields = {
      title,
      desc,
      price,
      days,
      cohort,
      intake,
      weeks,
    };

    Object.keys(updateFields).forEach(
      (key) =>
        (updateFields[key] === "" || undefined) && delete updateFields[key]
    );

    await Course.findByIdAndUpdate(id, updateFields);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to update course!");
  }

  revalidatePath("/dashboard/courses");
  redirect("/dashboard/courses");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await User.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete user!");
  }

  revalidatePath("/dashboard/courses");
};

export const deleteCourse = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToDB();
    await Course.findByIdAndDelete(id);
  } catch (err) {
    console.log(err);
    throw new Error("Failed to delete course!");
  }

  revalidatePath("/dashboard/courses");
};
//blog actions


export const addBlog=async(formData)=>{
  const { title, description, slug, date, file} =
  Object.fromEntries(formData);

  if (!file){
    throw new Error ('No file uploaded!')

  }
  const bytes=await file.arrayBuffer()
  const buffer=Buffer.from(bytes)

  const path=join('/','tmp',file.name)
  await writeFile(path,buffer)
  console.log(`open ${path} to see the uploaded file`)
 
    try {
   connectToDB();

  const newBlog = new Blog({
     title,
     description,
     slug,
     date,
  
   });

   await newBlog.save();
  console.log('Blog Saved Successfully')
 
 } catch (err) {
 
   console.log(err);
   throw new Error("Failed to create blog!");
 
 }
}



//EVENT ACTIONS
export const addEvent = async (formData) => {
  const { title, description,date,time,location,picture } =
    Object.fromEntries(formData);

  try {
    connectToDB();

    const newEvent = new Event({
      date,
      title,
      time,
      location,
      description,
      picture,
  
    });

    await newEvent.save();
  } catch (err) {
    console.log(err);
    throw new Error("Failed to create event!");
  }

  revalidatePath("/dashboard/events");
  redirect("/dashboard/events");
};









export const authenticate = async (prevState, formData) => {
  const { username, password } = Object.fromEntries(formData);

  try {
    await signIn("credentials", { username, password });
  } catch (err) {
    return "Wrong Credentials!";
  }
};


//getCurrentUser




export async function getSession() {
  return await getServerSession(authOptions)
  
}

export default async function getCurrentUser(){
    try {  
        const session=await getSession()

        if(!session?.user?.email){
            return null
        }

        const currentUser= await User.findUnique({
            where:{
                email:session.user.email 

            }
    })

        if(!currentUser){
            return null
        }

        return{
            ...currentUser,
            createdAt:currentUser.createdAt.toISOString(),
            updatedAt:currentUser.updatedAt.toISOString(),
            emailVerified:currentUser.emailVerified?.toISOString() || null,


        }


    }
        catch (error) {
        return null
    }
}