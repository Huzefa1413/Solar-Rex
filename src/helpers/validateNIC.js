export function ValidateNIC(NICNumber) {
  // Convert the number to a string
  const numberStr = String(NICNumber);

  // Check if the length is 13
  if (numberStr.length === 13) {
    return true; // Valid

  } else {
    return false; // Not valid

  }
}  