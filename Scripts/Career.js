const full_name = document.getElementById("name");
const message = document.getElementById("message");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const password = document.getElementById("password");
const confirm_password = document.getElementById("confirm_password");

document.getElementById("btn").addEventListener("click", (e) => {
  e.preventDefault();

  // Checking Gender
  const gender = document.querySelector("input[name='gender']:checked");
  if (!gender) {
    alert("Gender is Not selected");
    return;
  }

  const maxChar = 50;
  const inputs = [full_name, message];
  for (let i = 0; i < inputs.length; i++) {
    // Check empty Value
    if (!inputs[i].value.trim()) {
      alert(`Field cannot be empty`);
      return;
    }

    // Check max charecters
    if (inputs[i].name !== "phone" && inputs[i].value.length > maxChar) {
      alert(inputs[i].name + " cannot exceed " + maxChar + " characters");
      return;
    }
  }

  // Check Email Address
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.value || !emailPattern.test(email.value)) {
    alert(`Correct Email ID is Required`);
    return;
  }

  // Check Phone  Number
  if (phone?.value.length !== 10 || !phone.value) {
    alert("Phone numbers must be equal to 10 in length ");
    return;
  }

  // Check Password
  // Empty
  if (!password.value || !confirm_password.value) {
    alert(password.value, confirm_password.value);
    alert("Password is required");
    return;
  }

  // Check the match
  if (password.value !== confirm_password.value) {
    alert("Password does not match");
    return;
  }

  if (!validatePassword(password.value)) {
    alert(
      "Password must containe atleast one UpperCase, one LowerCase and one Special Charecter and have to be atleast 8 in length"
    );
    return;
  }
});

function validatePassword(password) {
  // Check for uppercase letter
  const hasUppercase = /[A-Z]/.test(password);

  // Check for lowercase letter
  const hasLowercase = /[a-z]/.test(password);

  // Check for special character
  const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/.test(
    password
  );

  // Check for spaces
  const hasNoSpace = !/\s/.test(password);

  // Check for minimum length of 8
  const hasMinLength = password.length > 8;

  return (
    hasUppercase && hasLowercase && hasSpecialChar && hasNoSpace && hasMinLength
  );
}
