import { Input } from "@nextui-org/react";
import { Select, SelectItem, Textarea } from "@nextui-org/react";

const Contact_form = () => {
  const services = [
    "Embedded Design Services",
    "Digitalization Services",
    "Automation Services",
  ];
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
          />
          <Input
            type="text"
            variant="underlined"
            label="Last Name"
            className="max-w-[250px]"
          />
        </div>

        {/* Email and Phone */}
        <div className="flex flex-row flex-wrap gap-3 ">
          <Input
            type="email"
            variant="underlined"
            label="Email"
            className="max-w-[250px]"
          />
          <Input
            type="number"
            variant="underlined"
            label="Phone"
            className="max-w-[250px]"
          />
        </div>

        {/* Services */}
        <div className="flex flex-row flex-wrap gap-3 max-w-[250px] ">
          <Select
            variant="underlined"
            label="Select a Service"
            className="max-w-xs"
          >
            {services.map((service) => (
              <SelectItem key={service} value={service}>
                {service}
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
            className="col-span-12 mb-6 md:col-span-6 md:mb-0"
          />
        </div>

        {/*  */}
      </div>
    </div>
  );
};

export default Contact_form;
