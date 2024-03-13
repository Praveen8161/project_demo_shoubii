const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-3 min-w-full sm:min-w-[250px] pb-3 max-w-[40%] ">
      {/* Phone */}
      <div className="flex flex-col">
        <h3 className="text-lg font-bold ">Phone</h3>
        <p className=" min-h-[1.8px] mb-1 flex-grow w-full bg-black/50 max-w-full sm:max-w-[250px]"></p>
        <p className="flex flex-row items-center gap-1 flex-nowrap">
          <img src="/Images/phone.svg" alt="phone" className=" max-w-[25px]" />

          <span>+1-700-000-0000</span>
        </p>
      </div>

      {/* Email */}
      <div className="flex flex-col ">
        <h3 className="text-lg font-bold ">Email</h3>
        <p className=" min-h-[1.8px] mb-1 flex-grow w-full bg-black/50 max-w-full sm:max-w-[250px]"></p>
        <p className="flex flex-row items-center gap-1 flex-nowrap">
          <img src="/Images/email.svg" alt="phone" className=" max-w-[25px]" />

          <span>hello@company.com</span>
        </p>
      </div>

      {/* Social Media */}
      <div className="flex flex-col ">
        <h3 className="text-lg font-bold ">Social Media</h3>
        <p className=" min-h-[1.8px] mb-1 flex-grow w-full bg-black/50 max-w-full sm:max-w-[250px]"></p>
        <p className="flex flex-row items-center gap-1 flex-nowrap">
          <img
            src="https://skillicons.dev/icons?i=linkedin,instagram,twitter"
            alt="phone"
            className=" max-w-[120px]"
          />
        </p>
      </div>

      {/* USA */}
      <div className="flex flex-col italic ">
        <h3 className="text-lg font-bold ">USA</h3>
        <p className=" min-h-[1.8px] mb-1 flex-grow w-full bg-black/50 max-w-full sm:max-w-[250px]"></p>
        <div className="flex flex-row items-start gap-2 flex-nowrap">
          <img
            src="/Images/email.svg"
            alt="phone"
            className=" max-w-[25px] mt-1"
          />

          <p className="flex flex-col gap-[2px] text-sm ">
            <span>Raintree Corporate Center,</span>
            <span>021245 North Pima Road,</span>
            <span>Scottsdale, Arizona,</span>
            <span>USA, 85260</span>
          </p>
        </div>
      </div>

      {/* USA */}
      <div className="flex flex-col italic ">
        <h3 className="text-lg font-bold ">India</h3>
        <p className=" min-h-[1.8px] mb-1 flex-grow w-full bg-black/50 max-w-full sm:max-w-[250px]"></p>
        <div className="flex flex-row items-start gap-2 flex-nowrap">
          <img
            src="/Images/email.svg"
            alt="phone"
            className=" max-w-[25px] mt-1"
          />

          <p className="flex flex-col gap-[2px] text-sm ">
            <span>Tall Towers,</span>
            <span>Vittal Mallya Rd, Bangalore,</span>
            <span>UB City,</span>
            <span>India, 560001</span>
          </p>
        </div>
      </div>

      {/*  */}
    </div>
  );
};

export default ContactInfo;
