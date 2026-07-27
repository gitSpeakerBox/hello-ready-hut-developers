import Buttons from "@/components/Buttons";
import Cards from "@/components/Cards";
import HeroSection from "@/components/HeroSection";
import { getAuthorBySlug } from "@/sanity/data";
// import Image from "next/image";
// import elements from "@/assets/images/elements.svg";


const page = async () => {
  const data = await getAuthorBySlug("home");

  return (
    <>
      <section className="relative flex min-h-screen z-10 h-full sm:gap-y-10 gap-y-8 overflow-hidden main_padding_x main_padding_y z-10 flex-col items-center justify-center text-c max-w-[600px] w-max mx-auto">
        <HeroSection {...data.result} />
        <Buttons {...data.result} />
        <Cards {...data.result} />
      </section>
      {/* <Image className="w-full h-auto absolute bottom-0 left-0 -z-10" src={elements} alt="" /> */}
    </>
  );
};

export default page;
