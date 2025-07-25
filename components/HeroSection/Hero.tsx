import Button from "../ui/Button";
import Divider from "../ui/Divider";

const Hero = () => {
  return (
    <div
      className="min-h-screen flex flex-col justify-between items-center px-4 py-6"
      style={{ minHeight: "100dvh" }}
    >
      <div className="w-full flex justify-end">
        <span className="text-lg sm:text-2xl md:text-3xl">
          CLEAN UP, SNAP, EARN
        </span>
      </div>
      <Divider />
      <h1 className="text-[calc(100vw/3.67)] leading-[0.8] lg:text-[calc(100vw/7.67)] md:text-[calc(100vw/7.67)] lg:leading-none font-normal font-family-bebas my-3">
        DECLEANUP NETWORK
      </h1>
      <Divider />
      <div className="sm:px-5 px-2 w-full">
        <div className="w-full mb-6 flex flex-col items-center sm:gap-y-2 gap-y-1">
          <p className="xl:bg-[#FAFF00] text-2xl text-center mt-8 mx-auto px-2 w-fit leading-[1]">
            <span className="bg-[#FAFF00] xl:w-fit text-3xl w-full px-1 text-center xl:bg-transparent md:text-7xl">
            Turn environmental action into digital assets
            </span>
          </p>
          <p className="text-center w-fit text-[24px] max-w-[98ch] mt-5 font-normal md:font-medium font-family-bebas md:text-5xl md:leading-14">
          Join the global network of individuals and communities tokenizing environmental impact of cleanups on  DeCleanup Network
          </p>
        </div>
      </div>
      <Divider className="mt-6 md:mt-12" />
      <div className="sm:px-5 px-2 mb-4 mt-3  w-full">
        <Button className="hover:bg-black/80">Start my first cleanup</Button>
      </div>
      <Divider />
    </div>
  );
};

export default Hero;
