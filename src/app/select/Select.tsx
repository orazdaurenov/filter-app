"use client";
import * as React from "react";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "../../components/ui/select";
import Data from "../api-services/Data";
import ListItem from "../components/ListItem";
import { useState } from "react";

export function SelectDemo() {
  const [data, setData] = useState(Data);
  return (
    <>
      <Select
        onValueChange={(value) => {
          if (value === "All") {
            setData(Data);
            return;
          }
          const nextData = Data.filter((item) => item.category === value);
          setData(nextData);
        }}
      >
        <SelectTrigger className="w-[180px]">
          <SelectValue placeholder="Select a Category" />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Categories</SelectLabel>
            <SelectItem value="All">All</SelectItem>
            <SelectItem value="Breakfast">Breakfast</SelectItem>
            <SelectItem value="Lunch">Lunch</SelectItem>
            <SelectItem value="Dinner">Dinner</SelectItem>
            <SelectItem value="Snaks">Snaks</SelectItem>
          </SelectGroup>
        </SelectContent>
      </Select>
      <ul className="grid grid-cols-3">
        {data.map((item) => {
          return <ListItem key={item.id} data={item} />;
        })}
      </ul>
    </>
  );
}
