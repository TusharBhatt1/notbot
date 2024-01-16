// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-nocheck
import * as yup from "yup"

export const loginSchema = yup.object({
  
    email: yup.string().email().required("Required"),
    password: yup.string().required("Required").min(5).max(15),
  });
  
export type LoginType=yup.InferType<typeof loginSchema>
