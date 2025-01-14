"use client";
import { useState } from "react";
import { Items } from "../api-services/Data";
import Breakfast from "./Breakfast";
import ListItem from "./ListItem";

//todos:
// 2. destrucutre props
// 3. list item component
type RenderDataProps = {
  allData: Items[];
};
export default function RenderData(props: RenderDataProps) {
  const [allitems, setItems] = useState(props.allData);

  function setItemOnNewArr(arr: Items[]) {
    setItems(arr);
  }
  return (
    <>
      <Breakfast onFilter={setItemOnNewArr} />
      <ul className="grid grid-cols-3">
        {allitems.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}
