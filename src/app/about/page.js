import HeroSection from "../components/HeroSection";
const page = () => {
  return (
    <>
      <HeroSection title={"OUR STORY"} imgUrl={"/about1.svg"} />
    </>
  );
};

export default page;

export function generateMetadata() {
  return {
    title: "MovieFlix/about",
  };
}
