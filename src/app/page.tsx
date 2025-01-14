import Data from "./api-services/Data";
import Breakfast from "./components/Breakfast";
import RenderData from "./components/RenderData";

export default function HomePage() {
  return (
    <>
      <Breakfast />
      <RenderData allData={Data} />
    </>
  );
}
