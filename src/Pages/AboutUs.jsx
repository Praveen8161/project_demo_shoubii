import Homepage_description from "../Components/Homepage_description";
import { Card, CardHeader, CardBody, Image } from "@nextui-org/react";

const AboutUs = () => {
  return (
    <div className="about_bgImg">
      {/* Heading */}
      <section className=" min-h-[50vh] relative">
        <h2 className=" absolute top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] text-subHeadResponsive text-white bg-black/50 px-3 rounded-2xl     ">
          About Us
        </h2>
      </section>

      <div className="pt-3 bg-white">
        <Homepage_description />
      </div>

      <section className="flex flex-row flex-wrap items-center justify-center gap-5 px-2 py-5">
        <Card className="py-4 hover:text-white hover:bg-blue-600 min-w-[250px]">
          <CardHeader className="flex-col items-start px-4 pt-2 pb-0 max-w-[250px]">
            <h4 className="font-bold text-large">Vision</h4>
            <small>
              To become world leader in providing solutions that integrate
              cutting edge technologies with best-in-class execution.
            </small>
          </CardHeader>
          <CardBody className="flex items-center justify-center py-2 overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/Images/eye.svg"
              width={270}
            />
          </CardBody>
        </Card>

        <Card className="py-4 hover:text-white hover:bg-green-600 min-w-[250px]">
          <CardHeader className="flex-col items-start px-4 pt-2 pb-0 max-w-[250px]">
            <h4 className="font-bold text-large">Mission</h4>
            <small>
              To become world leader in providing solutions that integrate
              cutting edge technologies with best-in-class execution.
            </small>
          </CardHeader>
          <CardBody className="py-2 overflow-visible">
            <Image
              alt="Card background"
              className="object-cover rounded-xl"
              src="/Images/target.svg"
              width={270}
            />
          </CardBody>
        </Card>
      </section>
    </div>
  );
};

export default AboutUs;
