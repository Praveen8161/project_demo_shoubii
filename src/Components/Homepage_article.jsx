import { Card, CardHeader, CardFooter, Image } from "@nextui-org/react";

const Homepage_article = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-3 mt-8">
      <p className="font-semibold text-subHeadResponsive">
        Latest Article and Blogs
      </p>

      <div className="grid min-w-[80vw] flex-grow grid-cols-12 grid-rows-2 gap-2 px-8">
        <Card isPressable className="col-span-12 sm:col-span-4 h-[300px] ">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="px-2 font-bold uppercase text-tiny text-white/60 bg-black/60 rounded-xl">
              What to watch
            </p>
            <h4 className="font-medium text-white text-shadow-default text-large">
              Stream the Acme event
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            loading="lazy"
            className="z-0 object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2015/05/15/02/07/computer-767781_1280.jpg"
          />
        </Card>
        <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="px-2 font-bold uppercase text-tiny text-white/60 bg-black/60 rounded-xl">
              Plant a tree
            </p>
            <h4 className="font-medium text-white text-shadow-default text-large">
              Contribute to the planet
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            loading="lazy"
            className="z-0 object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2016/12/27/21/03/lone-tree-1934897_1280.jpg"
          />
        </Card>
        <Card isPressable className="col-span-12 sm:col-span-4 h-[300px]">
          <CardHeader className="absolute z-10 top-1 flex-col !items-start">
            <p className="px-2 font-bold uppercase text-tiny text-white/60 bg-black/60 rounded-xl">
              Supercharged
            </p>
            <h4 className="font-medium text-white text-shadow-default text-large">
              Creates beauty like a beast
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card background"
            loading="lazy"
            className="z-0 object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2022/11/30/20/37/animal-7627621_1280.jpg"
          />
        </Card>
        <Card
          isPressable
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-5"
        >
          <CardHeader className="absolute z-10 flex-col items-start top-1">
            <p className="px-2 font-bold uppercase text-tiny text-white/60 bg-black/60 rounded-xl">
              New
            </p>
            <h4 className="text-2xl font-medium text-white text-shadow-default">
              Acme camera
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Card example background"
            loading="lazy"
            className="z-0 object-cover w-full h-full scale-125 -translate-y-6"
            src="https://cdn.pixabay.com/photo/2021/11/30/13/21/vintage-camera-6835351_960_720.jpg"
          />
          <CardFooter className="absolute bottom-0 z-10 justify-between bg-white/30 border-t-1 border-zinc-100/50">
            <p className="px-3 py-1 text-xs font-semibold bg-blue-500 cursor-pointer rounded-xl">
              Read Now
            </p>
          </CardFooter>
        </Card>

        <Card
          isPressable
          isFooterBlurred
          className="w-full h-[300px] col-span-12 sm:col-span-7"
        >
          <CardHeader className="absolute z-10 flex-col items-start top-1">
            <p className="px-2 font-bold uppercase text-tiny text-white/60 bg-black/60 rounded-xl">
              Your day your way
            </p>
            <h4 className="text-xl font-medium text-shadow-default text-white/90">
              Your checklist for better sleep
            </h4>
          </CardHeader>
          <Image
            removeWrapper
            alt="Relaxing app background"
            className="z-0 object-cover w-full h-full"
            src="https://cdn.pixabay.com/photo/2022/10/05/07/36/mountains-7500077_960_720.jpg"
          />
          <CardFooter className="absolute bottom-0 z-10 bg-black/40 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex items-center flex-grow gap-2">
              <Image
                alt="Breathing app icon"
                className="w-10 bg-black rounded-full h-11"
                src="/images/breathing-app-icon.jpeg"
              />
            </div>
            <p className="px-3 py-1 text-xs font-semibold text-white cursor-pointer bg-slate-600 rounded-xl">
              Read Now
            </p>
          </CardFooter>
        </Card>
      </div>
    </section>
  );
};

export default Homepage_article;
