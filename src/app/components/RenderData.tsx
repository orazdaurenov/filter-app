"use client";
import Data, { Items } from "../api-services/Data";
import ListItem from "./ListItem";

//todos:
// 2. destrucutre props
// 3. list item component
type RenderDataProps = {
  allData: Items[];
};
export default function RenderData(props: RenderDataProps) {
  return (
    <>
      <ul>
        {props.allData.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}
