import { Image } from "@nextui-org/react";

const Homepage_Intro = () => {
  const IntroData = [
    {
      title: "Embedded Design Services",
      description: "Embedded solutions tailor made for your needs",
      imgURL: "/Images/building.svg",
    },
    {
      title: "Digitalization Services",
      description: "Transform your legacy with our digitalization services",
      imgURL: "/Images/computer.svg",
    },
    {
      title: "Automation Services",
      description: "Let our automation services be your competitive edge",
      imgURL: "/Images/rocket.svg",
    },
  ];

  return (
    <section>
      <h1 className="mt-2 mb-3 text-center text-subHeadResponsive">
        <span className="font-semibold ">Concept to Product: </span>Your Vision,
        Our Solution
      </h1>

      {/* intro Data */}
      <div className="flex flex-row flex-wrap items-center justify-center gap-10">
        {/* Image */}
        <div>
          <Image
            alt="Image"
            src="/Images/website.svg"
            className="max-w-[250px] sm:max-w-[500px]"
          />
        </div>

        {/* Other Intro Data's */}
        <div className="flex flex-col gap-6 max-w-max ">
          {IntroData?.map((item, index) => (
            <div
              key={item + index}
              className="flex flex-row items-center justify-center gap-3 flex-nowrap"
            >
              <img
                src={item.imgURL}
                alt="img"
                className=" max-w-[35px] sm:max-w-[50px]"
              />
              <p className="flex flex-col gap-2 text-Responsive ">
                <span className="font-semibold whitespace-nowrap ">
                  {item.title}
                </span>

                <span>{item.description}</span>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Homepage_Intro;
