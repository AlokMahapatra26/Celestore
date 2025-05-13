import * as z from "zod"

export const signInShema = z.object({
    identifier : z
        .string()
        .min(1 , {message : "Eamil is requires"})
        .email({message : "Please enter a valid email"}),
    password : z
        .string()
        .min(1 , {message : "Password is requires"})
        .min(8 , {message : "Password must be atleast 8 character"})
});