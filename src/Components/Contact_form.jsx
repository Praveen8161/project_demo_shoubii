import { Button, Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea } from "@nextui-org/react";
import { useState } from "react";

const Contact_form = () => {
  const services = [
    "Embedded Design Services",
    "Digitalization Services",
    "Automation Services",
  ];

  const [val, setVal] = useState({
    firstName: "",
    lastName: "",
    comment: "",
  });

  const [service, setService] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  function handleChange(e) {
    setVal((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleEmail(e) {
    setEmail(() => e.target.value);
  }

  function handleSubmit() {
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

    // Check Service
    if (!service) {
      alert(`Select a Service`);
      return;
    }

    // Check name and comment
    if (!(val.comment && val.firstName && val.lastName)) {
      alert(`Fields are required`);
      return;
    }

    // Show Message
    alert(`Hi ${val.firstName} we have received your message
    we will contact you soon
    `);

    // Reset Value
    setEmail(() => "");
    setPhone(() => "");
    setVal(() => ({
      firstName: "",
      lastName: "",
      comment: "",
    }));
  }

  return (
    <div className=" sm:max-w-[60%]">
      <h3 className="font-semibold text-subHeadResponsive">
        Lets Connect, Tell Us About Your Requirement
      </h3>
      <p className="text-sm ">
        We are here to support you in translating your product ideas to
        successful products in the market place. Are you looking for an embedded
        development partner to travel with you throughout the complete journey
        or support you in specific aspects? Your search ends here. It shall be
        our privilege to be part of your product development that can make our
        world a better place. Please share your requirements or product ideas
        with us. Our solutions specialist shall get in touch with you to discuss
        further.
      </p>

      <div className="flex flex-col gap-3 ">
        {/* Name */}
        <div className="flex flex-row flex-wrap gap-3 ">
          <Input
            type="text"
            variant="underlined"
            label="First Name"
            className=" max-w-[250px]"
            value={val.firstName}
            name="firstName"
            onChange={handleChange}
          />
          <Input
            type="text"
            variant="underlined"
            label="Last Name"
            className="max-w-[250px]"
            name="lastName"
            value={val.lastName}
            onChange={handleChange}
          />
        </div>

        {/* Email and Phone */}
        <div className="flex flex-row flex-wrap gap-3 ">
          <Input
            type="email"
            variant="underlined"
            label="Email"
            value={email}
            onChange={handleEmail}
            className="max-w-[250px]"
          />
          <Input
            type="text"
            variant="underlined"
            label="Phone"
            value={phone}
            onChange={(e) => {
              if (!isNaN(+e.target.value)) {
                setPhone(e.target.value);
              }
            }}
            className="max-w-[250px]"
          />
        </div>

        {/* Services */}
        <div className="flex flex-row flex-wrap gap-3 max-w-[250px] ">
          <Select
            variant="underlined"
            label="Select a Service"
            className="max-w-xs"
            value={service}
            defaultSelectedKeys={service}
            onChange={(e) => setService(e.target.value)}
          >
            {services.map((ser) => (
              <SelectItem key={ser} value={ser}>
                {ser}
              </SelectItem>
            ))}
          </Select>
        </div>

        {/* Comment */}
        <div className="flex flex-row flex-wrap gap-3 max-w-[250px] mt-5 ">
          <Textarea
            key="underlined"
            variant="underlined"
            label="Comment"
            labelPlacement="outside"
            placeholder="Enter your Comment"
            name="comment"
            value={val.comment}
            onChange={handleChange}
            className="col-span-12 mb-6 md:col-span-6 md:mb-0"
          />
        </div>

        {/* Submit Btn */}
        <Button
          color="primary"
          onClick={handleSubmit}
          className=" max-w-[200px]"
        >
          Send
        </Button>

        {/*  */}
      </div>
    </div>
  );
};

export default Contact_form;
