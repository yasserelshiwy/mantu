import FeatureCards from "../../components/FeatureCards/FeatureCards";
import HeaderCardSlider from "../../components/HeaderCardSlider/HeaderCardSlider";
import HeaderSlider from "../../components/HeaderSlider/HeaderSlider";

export default function Home() {
  return (
    <>
      <HeaderSlider />
      <HeaderCardSlider />
      <FeatureCards />
    </>
  );
}
