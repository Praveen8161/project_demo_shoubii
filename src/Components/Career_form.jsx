import { Button, Input, Textarea } from "@nextui-org/react";
import { useState } from "react";

const Career_form = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [confirmIsVisible, setConfirmIsVisible] = useState(false);

  //   Name and Message
  const [val, setVal] = useState({
    name: "",
    message: "",
  });
  //   Passwords
  const [password, setPassword] = useState("");
  const [confirmPassword, setconfirmPassword] = useState("");
  // Email and phone
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [err, setErr] = useState(false);

  //   Change Name and Message
  function handleChange(e) {
    setVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleEmail(e) {
    setEmail(() => e.target.value);
  }

  function handlePassword(e) {
    setPassword(() => e.target.value);
    setErr(() => false);
  }

  function handleConfirmPassword(e) {
    setconfirmPassword(() => e.target.value);
    if (e.target.value !== password) {
      setErr(() => true);
    } else {
      setErr(() => false);
    }
  }

  function validatePassword(password) {
    // Check for uppercase letter
    const hasUppercase = /[A-Z]/.test(password);

    // Check for lowercase letter
    const hasLowercase = /[a-z]/.test(password);

    // Check for special character
    const hasSpecialChar = /[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]+/.test(
      password
    );

    // Check for spaces
    const hasNoSpace = !/\s/.test(password);

    // Check for minimum length of 8
    const hasMinLength = password.length > 8;

    return (
      hasUppercase &&
      hasLowercase &&
      hasSpecialChar &&
      hasNoSpace &&
      hasMinLength
    );
  }

  //   Handle Submit
  function handleSubmit() {
    // Check Email
    // Check Email
    const emailPattern =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (!email || !emailPattern.test(email)) {
      alert(`Correct Email ID is Required`);
      return;
    }

    // Check Phone Number
    if (!phone || phone.length !== 10) {
      alert(`Phone Should be equal to 10`);
      return;
    }

    // Check name and message
    if (!(val.message && val.name)) {
      alert(`Fields are required`);
      return;
    }

    // Check Password
    // Empty
    if (!password || !confirmPassword) {
      alert("Password is required");
      return;
    }

    // Check the match
    if (password !== confirmPassword) {
      alert("Password does not match");
      return;
    }

    if (!validatePassword(password)) {
      alert(
        "Password must containe atleast one UpperCase, one LowerCase and one Special Charecter and have to be atleast more than 8 in length"
      );
      return;
    }

    // Show Message
    alert(`Hi ${val.name} we have received your Details
  `);

    // Reset Value
    setEmail(() => "");
    setPhone(() => "");
    setVal(() => ({
      name: "",
      message: "",
    }));
    setPassword(() => "");
    setconfirmPassword(() => "");
  }

  return (
    <div className="flex flex-col gap-5 ">
      {/* Name */}
      <Input
        type="text"
        label="Name"
        placeholder="Enter your Name"
        className=" min-w-[250px] sm:min-w-[500px]"
        value={val.name}
        name="name"
        onChange={handleChange}
      />
      {/* Email */}
      <Input
        type="email"
        label="Email"
        placeholder="Enter your email"
        value={email}
        onChange={handleEmail}
        classNam
        e=" min-w-[250px] sm:min-w-[500px]"
      />

      {/* Phone */}
      <Input
        type="text"
        label="Phone"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => {
          if (!isNaN(+e.target.value)) {
            setPhone(e.target.value);
          }
        }}
        className=" min-w-[250px] sm:min-w-[500px]"
      />

      {/* Password */}
      <Input
        label="Password"
        placeholder="Enter your password"
        endContent={
          isVisible ? (
            <img
              src="/Images/eye.svg"
              alt="img"
              className=" max-w-[25px]"
              onClick={() => setIsVisible(!isVisible)}
            />
          ) : (
            <img
              src="/Images/eyeC.svg"
              alt="img"
              className=" max-w-[25px]"
              onClick={() => setIsVisible(!isVisible)}
            />
          )
        }
        type={isVisible ? "text" : "password"}
        value={password}
        onChange={handlePassword}
        className="max-w-[500px]"
      />

      {/* Confirm Password */}
      <Input
        label="Confirm Password"
        placeholder="Confirm Password"
        endContent={
          confirmIsVisible ? (
            <img
              src="/Images/eye.svg"
              alt="img"
              className=" max-w-[25px]"
              onClick={() => setConfirmIsVisible(!confirmIsVisible)}
            />
          ) : (
            <img
              src="/Images/eyeC.svg"
              alt="img"
              className=" max-w-[25px]"
              onClick={() => setConfirmIsVisible(!confirmIsVisible)}
            />
          )
        }
        type={confirmIsVisible ? "text" : "password"}
        value={confirmPassword}
        onChange={handleConfirmPassword}
        className="max-w-[500px]"
      />
      {err && (
        <span className="text-xs text-red-500 ">Password Does not match</span>
      )}
      {/* Message */}
      <Textarea
        label="Message"
        placeholder="Enter your Message"
        className="max-w-[500px]"
        value={val.message}
        name="message"
        onChange={handleChange}
      />

      <Button color="primary" className=" max-w-[200px]" onClick={handleSubmit}>
        Submit
      </Button>
    </div>
  );
};

export default Career_form;
