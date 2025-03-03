import { FC } from "react";
import HeroSection from "../../features/home/component/hero";
import Posts from "../../features/home/component/posts";

const Home: FC = () => {
  return (
    <>
      <HeroSection />
      <Posts />
    </>
  );
};

export default Home;
