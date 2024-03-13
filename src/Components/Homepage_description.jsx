import { Divider } from "@nextui-org/react";

const Homepage_description = () => {
  return (
    <section className="flex flex-row flex-wrap items-center justify-center gap-5 pb-8 mt-10">
      <div className=" max-w-[80%] sm:max-w-[40%] text-xl">
        At <span className="font-semibold ">Soft Sync</span>, we transform ideas
        into reality with a focus on optimization, technological advancement,
        and cost-effectiveness.
      </div>

      <Divider
        orientation="vertical"
        className="mx-10 bg-black/50 rounded-2xl min-h-[250px] flex-grow max-w-[2px] hidden sm:block"
      />

      <Divider className="mx-10 bg-black/50 rounded-2xl max-h-[2px] max-w-[80%] flex-grow block sm:hidden" />

      <div className="flex flex-col gap-4 max-w-[80%] sm:max-w-[40%] text-sm ">
        <p>
          Welcome to Soft Sync, your partner in cutting-edge product development
          services. Founded with a fervent passion for fostering innovation, we
          specialize in crafting cutting-edge hardware and software solutions,
          seamlessly deploying them for optimal performance, providing top-tier
          manufacturing and automation services.
        </p>

        <p>
          At Soft Sync, we accelerate business progress through a blend of deep
          industry expertise and frictionless technology delivery. Our services
          span across diverse sectors, essential for shaping our lives every
          day.
        </p>

        <p>
          We are dedicated to elevating customer experiences and optimizing
          products, processes, and people to keep businesses ahead in todays
          dynamic market. Guided by our core values, everyone at Vivian is
          committed to ensuring your journey to market success.
        </p>
      </div>
    </section>
  );
};

export default Homepage_description;
