import * as Yup from "yup";

export const SignInSchema = Yup.object().shape({
  email: Yup.string().email("Enter a Valid Email").required("Email Required"),
  password: Yup.string()
    .min(6, "Should be atlest 6 characters")
    .required("Enter Password"),
});
