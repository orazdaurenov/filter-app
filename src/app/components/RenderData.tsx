"use client";
import { useState } from "react";
import Data, { Items } from "../api-services/Data";
import Breakfast from "./Breakfast";
import ListItem from "./ListItem";
import Lunch from "./Lunch";
import AllMenu from "./AllMenu";
import InputFilter from "./InputFilter";

//todos:
// 2. destrucutre props
// 3. list item component
type RenderDataProps = {
  allData: Items[];
};
export default function RenderData(props: RenderDataProps) {
  const [items, setItems] = useState(props.allData);

  // const categories = props.allData.map((e) => e.category);
  // const searchInput = "Sn";

  // const result: string[] = [];
  // // go through every element of the array
  // // if the current element has the search string, add it to the result array
  // for (let index = 0; index < categories.length; index++) {
  //   const element = categories[index];
  //   if (element?.includes(searchInput)) {
  //     result.push(element);
  //   }
  // }
  // console.log("results: ", result);
  /*
 var a
 fn(){
 a="hi"
 var b=false
 fn()
 }
 setItems(b)
*/
  return (
    <>
      <InputFilter setItems={setItems} />
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
