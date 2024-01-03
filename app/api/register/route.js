import {NextResponse} from 'next/server'
import bcrypt from 'bcrypt'
import {connectToDB} from '../../lib/utils/connectToDb'
import { User } from '../../lib/models'
import { useRouter } from 'next/navigation'

export async function POST(req){
    
    try {
        await connectToDB()
        const {FirstName,LastName,email,password,role,PhoneNumber}=await req.json()
        console.log({FirstName,LastName,email,password,role})
        const exists=await User.findOne({$or:[{email},{FirstName}]})
        if (exists){
            return NextResponse.json({message:"username or email already exists"})
            {status:500}
        }
        const hashedPassword=await bcrypt.hash(password,10)
        await User.create({FirstName,LastName,email,password:hashedPassword,role,PhoneNumber})
        return NextResponse.json({message:"User registered"},{status:201})



    } catch (error) {
        console.log("Error while registering user",error)
        return NextResponse.json({message:"Error occured during registration"},{status:500})
    }
}