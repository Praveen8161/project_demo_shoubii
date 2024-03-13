import Career_form from "../Components/Career_form";
import Hiring from "../Components/Hiring";

const Career = () => {
  return (
    <div className="flex flex-col items-center">
      <section>
        <Hiring />
      </section>

      <section className=" max-w-[800px] mt-10 px-3">
        <h3 className="font-semibold text-subHeadResponsive">
          Want to Join us?
        </h3>
        <p>
          Were inspiring and empowering our resources to change the world.
          Powered by the technology, youll work with diverse teams to build
          trust and create new client solutions in innovative ways. The best way
          we can tackle the challenges of a fast-changing world is with people
          like you. Be a part of THE NEW EQUATION
        </p>
      </section>

      <section className="py-10 ">
        <Career_form />
      </section>
    </div>
  );
};

export default Career;
