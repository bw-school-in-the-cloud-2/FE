import * as yup from 'yup'

const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required("email is required"),
  password: yup
    .string()
    .min(5, "Password must be over 5 characters")
    .required("password is required"),
})
 
export default loginSchema