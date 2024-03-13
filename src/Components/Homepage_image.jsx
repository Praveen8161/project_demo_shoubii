import { Image } from "@nextui-org/react";

const Homepage_image = () => {
  return (
    <div className="relative bg-red-200">
      <Image
        alt="Image"
        isZoomed
        radius="none"
        src="https://cdn.pixabay.com/photo/2020/04/12/20/37/abstract-5035778_1280.jpg"
        className=" min-w-[100vw] max-w-[100vw] max-h-[50vh] pointer-events-none bg-fixed bg-center bg-cover"
      />

      <p className="absolute left-[50%] translate-x-[-50%] font-bold text-headResponsive translate-y-[-50%] z-10 text-white rounded-lg top-[50%] text-shadow-default ">
        Soft Sync
      </p>
    </div>
  );
};

export default Homepage_image;
