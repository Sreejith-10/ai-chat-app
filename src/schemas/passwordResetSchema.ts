import * as z from "zod"

export const passwordRestSchema = z.object({
    newPassword: z.string().min(6,{message:"password should be 6 character(s) long"}).max(20)
})