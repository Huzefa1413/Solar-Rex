export function ValidatePhoneNumber(phoneNumber) {
  // Define the regular expression pattern
  const phonePattern = /^\+92\d{10}$/;

  // Test the phone number against the pattern
  const isValid = phonePattern.test(phoneNumber);

  // Return the result of the validation
  return isValid;
}  