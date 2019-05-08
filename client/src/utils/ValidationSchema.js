import * as Yup from 'yup'

export const LogInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .required("Password is required")
})

export const SignUpValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First name cannot be empty")
    .required("First name is required"),
  lastName: Yup.string()
    .min(2, "Last name cannot be empty")
    .required("Last name is required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Email is required"),
  password: Yup.string()
    .min(8, "Password must be at least 8 characters long")
    .required("Password is required"),
  confirmPassword: Yup.string()
    .required("Please confirm your password")
})

export const PersonalInfoValidation = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  dob: Yup.string().required(),
  gender: Yup.string().required(),
  race: Yup.string().required(),
  phoneNumber: Yup.string().required()
})

export const ProfetionalInfoValidation = Yup.object().shape({
  firstName: Yup.string().required(),
  lastName: Yup.string().required(),
  email: Yup.string().email().required(),
  dob: Yup.string().required(),
  gender: Yup.string().required(),
  race: Yup.string().required(),
  phoneNumber: Yup.string().required()
})