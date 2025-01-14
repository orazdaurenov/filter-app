"use client";
import { Items } from "../api-services/Data";
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
      <ul className="grid grid-cols-3">
        {props.allData.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}
