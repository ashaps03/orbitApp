// utils/usernameValidation.js

// Centralized error messages
const UsernameErrors = {
  EMPTY_USERNAME: "Username is required.",
  MIN_LENGTH: "Username must be at least 3 characters.",
  INVALID_CHARACTERS: "Username can only contain letters, numbers, and underscores.",
  SPACES: "Username cannot contain spaces.",
};

// Validate function
export function validateUsername(username) {
  // Helper to throw an error with internal logging
  const raise = (logMessage, errorKey) => {
    console.warn(logMessage);
    const err = new Error(UsernameErrors[errorKey]);
    err.code = errorKey;
    throw err;
  };

  if (!username || username.trim() === "") {
    return raise("Username is empty", "EMPTY_USERNAME");
  }

  if (username.length < 3) {
    return raise("Username too short", "MIN_LENGTH");
  }

  if (username.includes(" ")) {
    return raise("Username contains spaces", "SPACES");
  }

  // Only allow letters, numbers, and underscores
  const validUsernameRegex = /^[a-zA-Z0-9_]+$/;
  if (!validUsernameRegex.test(username)) {
    return raise("Username contains invalid characters", "INVALID_CHARACTERS");
  }

  return true;
}
