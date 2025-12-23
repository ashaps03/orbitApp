// utils/emailValidation.js

// Centralized error messages
const EmailErrors = {
  INVALID_EMAIL: "Please enter a valid email.",
};

// Validate function
export function validateEmail(email) {
  // Helper to throw an error with internal logging
  const raise = (logMessage) => {
    console.warn(logMessage);        
    const err = new Error(EmailErrors.INVALID_EMAIL); 
    err.code = "INVALID_EMAIL";       
    throw err;
  };

  if (!email) return raise("Email is empty");

  if (email.includes(" ")) return raise("Email contains spaces");

  if (!email.includes("@")) return raise("Email missing @");

  const [local, domain] = email.split("@");

  if (!local || !domain) return raise("Email missing local or domain");

  if (!domain.includes(".")) return raise("Email domain missing dot");

  return true;
}
