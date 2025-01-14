import React from "react";
import { type Items } from "../api-services/Data";

type ListItemProps = {
  data: Items;
};

const ListItem = ({ data }: ListItemProps) => {
  return (
    <>
      <li className="max-w m-3 rounded-lg bg-slate-500 p-4">
        <article>
          <img src={data.img} alt={data.title} />
          <h3>{data.title}</h3>
          <p>{data.price}</p>
          <p>{data.category}</p>
          <p>{data.desc}</p>
        </article>
      </li>
    </>
  );
};

export default ListItem;
