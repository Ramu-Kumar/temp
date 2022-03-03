import HeroComponent from "./hero";
import InsuranceCards from "./cards";
import { homeData } from "./homeData";
import HomeBuyingSteps from "./HomeBuyingSteps/homeBuyingSteps";
import BuyHome from "./buyHome";
import WhyTitleGenius from "./whyTitleGenius";
import StickyButtons from "../Common/stickyBtnHome";
import VideoDef from './video/videoDef';
import Testimonial from './Testimonial/index'

const HomePage = () => {

  return (
    <section className="wrapper-title-body" id="title-start">

      <HeroComponent />
      <StickyButtons />
      <HomeBuyingSteps />
      <Testimonial />
      <VideoDef />
      <BuyHome />
      <InsuranceCards CardData={homeData.Card} />
      <WhyTitleGenius />
    </section>
  );
};

export default HomePage;
