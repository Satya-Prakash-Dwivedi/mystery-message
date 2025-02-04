import { z } from "zod"

export const userNameValidatoin = z 
    .string()
    .min(2, 'Username must be atleast 2 characters')
    .max(20, 'Username must be no more than 20 characters')
    .regex(/^[a-zA-Z0-9_]+$/, 'Username must not contain special characters');

export const signUpSchema = z.object({
    username : userNameValidatoin,
    email : z.string().email({message : "Invalid email address"}),
    password : z.string().min(6, {message : "Password must be atleat 6 characters"})
})