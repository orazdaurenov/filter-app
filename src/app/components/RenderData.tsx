"use client";
import { useState } from "react";
import { Items } from "../api-services/Data";
import Breakfast from "./Breakfast";
import ListItem from "./ListItem";
import Lunch from "./Lunch";
import AllMenu from "./AllMenu";

//todos:
// 2. destrucutre props
// 3. list item component
type RenderDataProps = {
  allData: Items[];
};
export default function RenderData(props: RenderDataProps) {
  const [items, setItems] = useState(props.allData);
  return (
    <>
      <Breakfast handleClick={setItems} />
      <Lunch handleClick={setItems} />
      <AllMenu handleClick={setItems} />
      <ul className="grid grid-cols-3">
        {items.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}
