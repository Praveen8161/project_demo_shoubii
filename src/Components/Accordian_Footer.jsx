import { Accordion, AccordionItem } from "@nextui-org/react";

const Accordian_Footer = () => {
  return (
    <Accordion className=" max-w-[500px]">
      <AccordionItem
        key="1"
        aria-label="Social"
        title="Social"
        className="font-medium "
      >
        <p className="flex flex-row items-center justify-start gap-1 mb-3 flex-nowrap">
          <img
            src="/Images/linkedIn.svg"
            alt="logo"
            className=" max-w-[25px] "
          />
          <span>LinkedIn</span>
        </p>
        <p className="flex flex-row items-center justify-start gap-1 mb-3 flex-nowrap">
          <img
            src="/Images/facebook.svg"
            alt="logo"
            className=" max-w-[25px] "
          />
          <span>Facebook</span>
        </p>{" "}
        <p className="flex flex-row items-center justify-start gap-1 mb-3 flex-nowrap">
          <img src="/Images/x.svg" alt="logo" className=" max-w-[25px] " />
          <span>Twitter</span>
        </p>{" "}
        <p className="flex flex-row items-center justify-start gap-1 mb-3 flex-nowrap">
          <img
            src="/Images/instagram.svg"
            alt="logo"
            className=" max-w-[25px] "
          />
          <span>Instagram</span>
        </p>
      </AccordionItem>
      <AccordionItem
        key="2"
        aria-label="Service"
        title="Service"
        className="flex flex-col font-medium"
      >
        <p className="mb-2">Embedded Hardware Design</p>
        <p className="mb-2"> Software Development</p>
        <p className="mb-2"> Camera Design</p>
      </AccordionItem>
      <AccordionItem
        key="3"
        aria-label="Activity"
        title="Activity"
        className="font-medium "
      >
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ratione rem
        nam totam, eligendi iure dolore quibusdam ad maxime quae, distinctio
        sapiente rerum? Enim placeat error quod laudantium commodi
        necessitatibus iusto?
      </AccordionItem>
    </Accordion>
  );
};

export default Accordian_Footer;
