import * as yup from 'yup'

const SignUpSchema = yup.object().shape({
  name: yup
    .string()
    .max(18, "Name must be under 18 characters")
    .required("Name is required"),
  email: yup
    .string()
    .required("email is required"),
  password: yup
    .string()
    .min(5, "Password must be over 5 characters")
    .required("password is required"),
  role: yup
    .string()
    .required("role is required"),
})
 
export default SignUpSchema