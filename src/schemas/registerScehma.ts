import * as z from "zod";

export const registerSchema = z.object({
    name: z.string().min(6).max(20),
    email:z.string().email({message:"provide an email"}),
    password: z.string().min(6,{message:"password should be 6 characters long"}).max(10,{message:"password should less than 10 characters"})
})