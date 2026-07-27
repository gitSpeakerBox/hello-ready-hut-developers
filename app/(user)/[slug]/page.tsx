import HeroSection from "@/components/HeroSection";
import Buttons from "@/components/Buttons";
import Cards from "@/components/Cards";
import { getAuthorBySlug } from "@/sanity/data";
import logo from "@/assets/images/logo.svg";

export async function generateMetadata({
  params,
}: {
  params: {
    slug: string;
  };
}) {
  const data = await getAuthorBySlug(params.slug);

  const {
    result,
  }: {
    result: Data;
  } = data;

  return {
    title: `${result.name ? `${result.name} |` : ""}  Marshalway `,
    icons: logo,
    openGraph: {
      siteName: `${result.name ? `${result.name} |` : ""}  Marshalway `,
      title: `${result.name ? `${result.name} |` : ""}  Marshalway `,
      type: "website",
    },
    applicationName: `${result.name ? `${result.name} |` : ""}  Marshalway `,
  };
}

const Home = async ({
  params,
}: {
  params: {
    slug: string;
  };
}) => {
  const data = await getAuthorBySlug(params.slug);


  console.log(data.result);

  return (
    <>
      <section className="w-full flex min-h-[100svh] overflow-hidden main_padding_x main_padding_y z-0 gap-y-6 flex-col items-center justify-center  max-w-[600px] mx-auto">
        <HeroSection {...data.result} />
        <Buttons {...data.result} />
        <Cards {...data.result} />
      </section>
    </>
  );
};

export default Home;
