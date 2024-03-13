import { Input, Button } from "@nextui-org/react";
import Accordian_Footer from "./Accordian_Footer";

const Footer = () => {
  return (
    <div className="flex flex-col flex-wrap items-center justify-around pt-5 pb-5 mt-10 sm:flex-row bg-slate-200">
      <div className="min-w-[100vw] md:min-w-max sm:max-w-[500px] flex-grow lg:px-6 sm:px-2 flex">
        <Accordian_Footer />
      </div>

      <div className=" w-full px-1 md:max-w-[300px] lg:max-w-[500px] mt-6 sm:mt-0 flex-grow flex flex-col text-Responsive sm:justify-center gap-3 sm:px-3 md:px-6">
        <p className="font-semibold ">Newsletter Subscription</p>
        <Input
          type="email"
          label="Email"
          variant="underlined"
          defaultValue="example@gmail.com"
          className="flex-grow w-full min-w-[250px] max-w-[300px]"
        />
        <Button color="primary" className=" max-w-[100px]">
          Subscribe
        </Button>
      </div>
    </div>
  );
};

export default Footer;
