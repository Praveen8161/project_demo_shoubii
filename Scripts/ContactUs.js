const f_name = document.getElementById("f_name");
const l_name = document.getElementById("l_name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const service = document.getElementById("service");
const comments = document.getElementById("comments");

document.querySelector(".sub_btn").addEventListener("click", (e) => {
  e.preventDefault();

  const maxChar = 50;

  const inputs = [f_name, l_name, comments];

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

  // Check Phone  Number
  if (phone?.value.length !== 10 || !phone.value) {
    alert("Phone numbers must be equal to 10 in length ");
    return;
  }

  //   Check Email Address
  const emailPattern =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

  if (!email.value || !emailPattern.test(email.value)) {
    alert(`Correct Email ID is Required`);
    return;
  }

  alert(`Hello ${f_name.value} the details are submitted`);
});
