import User from "@models/User"
import connect from "@libs/db"
import bcrypt from "bcryptjs"
import { NextResponse } from "next/server"

export const POST = async (request: any) => {
    const { name, email, password } = await request.json()

    await connect()

    const existingUser = await User.findOne({email})

    if (existingUser) {
        return new NextResponse("Email is already in use!", {status: 400})
    }

    const hashedPassword = await bcrypt.hash(password, 5)
    const newuser = new User({
        name, 
        email,
        password: hashedPassword,
    })

    try {
        await newuser.save()
        return new NextResponse("user is registered", {status: 200})
    } catch (error) {
        return new NextResponse(error, {
            status: 500
        })
    }
}
