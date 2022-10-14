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
    min: 9,
    message: "Password must be at least 8 characters long",
  },
];
