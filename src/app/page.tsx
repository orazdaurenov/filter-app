import Data from "./api-services/Data";
import RenderData from "./components/RenderData";

export default function HomePage() {
  return (
    <>
      <RenderData allData={Data} />
    </>
  );
}
