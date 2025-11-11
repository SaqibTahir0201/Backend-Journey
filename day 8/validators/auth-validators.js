const { z } = require("zod");

//creating object schema

const signupSchema = z.object({
  name: z
    .string({ required_error: "name is required" })
    .trim()
    .min(3, { message: "name must be atleast 3 chracters" })
    .max(25, { message: "name must not be atleast 25 chracters" }),

  email: z
    .string({ required_error: "email is required" })
    .trim()
    .email({ message: "invalid email" })
    .min(3, { message: "email must be atleast 3 chracters" })
    .max(25, { message: "email must not be atleast 25 chracters" }),

  phone: z
    .string({ required_error: "name is required" })
    .trim()
    .min(10, { message: "phone must be atleast 3 chracters" })
    .max(20, { message: "phone must not be atleast 25 chracters" }),

  password: z
    .string({ required_error: "name is required" })
    .trim()
    .min(10, { message: "password must be atleast 3 chracters" })
    .max(20, { message: "password must not be atleast 25 chracters" }),
});

module.exports = signupSchema;
