export const emailRules = [
  { required: true, message: "Please input your email" },
  { type: "email", message: "Please enter a valid email" },
  { whitespace: true, message: "Email cannot be empty" },
];

export const passwordRules = [
  { required: true, message: "Please input your password" },
  {
    whitespace: true,
    message: "Password cannot be empty",
    type: "password",
  },
  {
    min: 6,
    message: "Password must be at least 6 characters long",
  },
];
