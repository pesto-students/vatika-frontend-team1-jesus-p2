export const userNameRule = [
  { required: true, message: "Please input your username" },
  {
    min: 5,
    message: "Username should be at least 5 characters long",
  },
  { whitespace: true, message: "Username cannot be empty" },
];

export const emailRule = [
  { required: true, message: "Please input your email" },
  { type: "email", message: "Please enter a valid email" },
  { whitespace: true, message: "Email cannot be empty" },
];

export const passRule = [
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
