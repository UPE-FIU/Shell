/**
 * Form validations
 */

import * as Yup from "yup";
import moment from "moment";

// Custom validations
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const getValidDobRange = () => {
  let today = moment(new Date()).format("YYYYMMDD");
  let eventDate = moment(20190920, "YYYYMMDD");
  let daysFromToday = eventDate.diff(today, "days");
  const max = moment()
    .subtract(6570 - (daysFromToday - 3), "days") // 18yrs from shellhacks
    .format("YYYY-MM-DD");
  return max;
};

// Login validation
const LogInValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email is not valid")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password is too short")
    .required("Required")
});

const LoginInitialValues = {
  email: "",
  password: ""
};

// Signup validation
const SignUpValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name is too Short")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Last Name is too Short")
    .required("Required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password is too Short")
    .required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords Must Match")
    .required("Required"),
  captcha: Yup.string("Please complete CAPTCHA challenge")
    .nullable()
    .required("Please complete CAPTCHA challenge")
});

const SignUpInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  password: "",
  confirmPassword: "",
  captcha: null
};

// Validates user verification form
const RegistrationCodeValidation = Yup.object().shape({
  verificationCode: Yup.string()
    .min(6, "You Confirmation Code Must be 6 Characters Minimum")
    .max(6, "You Confirmation Code Must be 6 Characters Maximum")
    .required("Required"),
  email: Yup.string()
    .email("Please Enter a Valid Email")
    .required("Required")
});

const RegistrationCodeInitialValues = {
  verificationCode: "",
  email: ""
};

// Validates forgot password from
const ForgotPasswordValidation = Yup.object().shape({
  email: Yup.string()
    .email("Email is not Valid")
    .required("Required")
});
const ForgotPasswordInitialValues = {
  email: ""
};

// Validates reset password from
const ResetPasswordValidation = Yup.object().shape({
  resetCode: Yup.string().required("Required"),
  email: Yup.string()
    .email("Email is not Valid")
    .required("Required"),
  password: Yup.string()
    .min(6, "Password is too Short")
    .required("Required"),
  confirmpassword: Yup.string()
    .oneOf([Yup.ref("password"), ""], "Passwords Must Match")
    .required("Required")
});

const ResetPasswordInitialValues = {
  resetCode: "",
  email: "",
  password: "",
  confirmpassword: ""
};

const SUPPORTED_FORMAT = "application/pdf";
const MAX_SIZE = 1048576;
// application validation
const ApplicationValidation = Yup.object().shape({
  // personal info
  email: Yup.string("Email is not valid")
    .email("Email is not Valid")
    .required("Required"),
  dob: Yup.date()
    .required("Required")
    .max(new Date(getValidDobRange()), "Must Be at Least 18 Years Old")
    .required("Required"),
  gender: Yup.string().required("Required"),
  race: Yup.string().required("Required"),
  phoneNumber: Yup.string()
    .trim()
    .min(10, "Phone Number is too short")
    .required("Required")
    .matches(phoneRegExp, "Phone number is not valid"),
  // school info
  schoolName: Yup.string().required("Required"),
  levelOfStudy: Yup.string().required("Required"),
  graduationYear: Yup.string().required("Required"),
  major: Yup.string().required("Required"),
  // profetional info
  areaOfFocus: Yup.string(),
  resume: Yup.mixed()
    .required("Required")
    .test(
      "tooBig",
      "File too large. Max size is 1MB",
      value => value && value.size <= MAX_SIZE
    )
    .test("tooSmall", "File too large", value => value && value.size >= 0)
    .test(
      "fileFormat",
      "Must be a PDF file",
      value => value && SUPPORTED_FORMAT === value.type
    ),
  linkedIn: Yup.string().url("URL is not Valid"),
  portfolio: Yup.string().url("URL is not Valid"),
  github: Yup.string().url("URL is not Valid"),
  // additional info
  shirtSize: Yup.string().required("Required"),
  dietaryRestriction: Yup.array()
    .required("Required")
    .nullable(),
  firstTimeHack: Yup.string().required("Required"),
  howDidYouHear: Yup.string()
    .min(1, "Must select at least one")
    .required("Required"),
  reasonForAttending: Yup.string().required("Required"),
  haveBeenToShell: Yup.array()
    .required("Required")
    .nullable(),
  needReimbursement: Yup.string().required("Required"),
  mlh: Yup.boolean()
    .oneOf([true], "Must agree to MLH Code of Conduct")
    .required("Required"),
  sponsorPromo: Yup.boolean().oneOf(
    [true],
    "Must agree to receive emails from us and our sponsors"
  ),
  mlhAffiliation: Yup.boolean().oneOf(
    [true],
    "Must agree to MLH Contest Terms & Conditions and Privacy Policy"
  )
});

const ApplicationInitialValues = {
  // personal info
  email: "",
  dob: "",
  gender: "",
  race: "",
  phoneNumber: "",
  // school info
  schoolName: "",
  levelOfStudy: "",
  graduationYear: "",
  major: "",
  // professional info
  areaOfFocus: "",
  resume: null,
  linkedIn: "",
  portfolio: "",
  github: "",
  // additional info
  shirtSize: "",
  dietaryRestriction: [],
  firstTimeHack: "",
  howDidYouHear: "",
  reasonForAttending: "",
  haveBeenToShell: [],
  needReimbursement: "",
  mlh: false,
  sponsorPromo: false,
  mlhAffiliation: false
};

// Mentor form validation
const mentorValidation = Yup.object().shape({
  firstName: Yup.string()
    .min(2, "First Name is too Short")
    .required("Required"),
  lastName: Yup.string()
    .min(2, "Last Name is too Short")
    .required("Required"),
  email: Yup.string()
    .email("Email is not valid")
    .required("Required"),
  phoneNumber: Yup.string()
    .trim()
    .min(10, "Phone Number is too short")
    .matches(phoneRegExp, "Phone number is not valid")
    .required("Required"),
  organization: Yup.string(),
  mentored: Yup.string().required("Required"),
  skills: Yup.array()
    .required("Required")
    .nullable(),
  elaborate: Yup.string()
    .min(6, "Please add more details")
    .required("Required"),
  shirtSize: Yup.string().required("Required"),
  availability: Yup.string().required("Required"),
  mlhCOC: Yup.boolean()
    .oneOf([true], "Must agree to MLH Code of Conduct")
    .required("Required"),
  captcha: Yup.string("Please complete CAPTCHA challenge")
    .nullable()
    .required("Please complete CAPTCHA challenge")
});

const mentorInitialValues = {
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  organization: "",
  mentored: "",
  skills: [],
  elaborate: "",
  shirtSize: "",
  availability: [],
  mlhCOC: false,
  captcha: ""
};

export {
  LogInValidation,
  LoginInitialValues,
  SignUpValidation,
  SignUpInitialValues,
  RegistrationCodeValidation,
  RegistrationCodeInitialValues,
  ResetPasswordValidation,
  ResetPasswordInitialValues,
  ForgotPasswordValidation,
  ForgotPasswordInitialValues,
  ApplicationValidation,
  ApplicationInitialValues,
  mentorInitialValues,
  mentorValidation
};
