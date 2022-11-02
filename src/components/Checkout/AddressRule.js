export const fullNameRule = [
  {
    required: true,
    message: "Please enter First Name",
  },
  {
    whitespace: true,
    message: "First Name cannot be Empty",
  },
  {
    min: 3,
    message: "First Name must be Minimum 3 characters",
  },
  {
    max: 15,
    message: "First Name must be Under 15 characters",
  },
  {
    type: Number,
    message: "Number Not Allowed in First Name",
  },
];

export const lastNameRule = [
  {
    required: true,
    message: "Please enter Last Name",
  },
  {
    whitespace: true,
  },
  {
    min: 3,
    message: "Last Name must be Minimum 3 characters",
  },
  {
    max: 15,
    message: "Last Name must be Under 15 characters",
  },
];

export const addressRule = [
  {
    required: true,
    message: "Please enter Address",
  },
  {
    whitespace: true,
  },
  {
    max: 40,
    message: "Address must be under 40 characters",
  },
];

export const apartmentRule = [
  {
    required: true,
    message: "Please enter Apartment/Street Details",
  },
  {
    whitespace: true,
  },
  {
    max: 40,
    message: "Apartment/Street must be under 40 characters",
  },
];

export const cityRule = [
  {
    required: true,
    message: "Please enter City",
  },
  {
    whitespace: true,
  },
  {
    max: 15,
    message: "City must be under 15 characters",
  },
];

export const stateRule = [
  {
    required: true,
    message: "Please enter State",
  },
  {
    whitespace: true,
  },
  {
    max: 15,
    message: "City must be under 15 characters",
  },
];

export const pincodeRule = [
  {
    required: true,
    message: "Please enter Pincode",
  },
  {
    pattern: new RegExp("^[0-9]*$"),
    message: "Must Have Only Number!",
  },
  {
    whitespace: true,
  },
  {
    max: 6,
    message: "Pincode must be under 6 Digit",
  },
];
