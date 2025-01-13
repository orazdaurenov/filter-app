import React from "react";
import { type Items } from "../api-services/Data";

type ListItemProps = {
  data: Items;
};

const ListItem = ({ data }: ListItemProps) => {
  return (
    <>
      <li>{data.title}</li>
    </>
  );
};

export default ListItem;
