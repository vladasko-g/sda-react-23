import React, { useState, useEffect } from "react";

import { ListItem } from "./ListItem";

export const List = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts?userId=1",
      );

      const data = await response.json();

      setData(data);
    };

    fetchData();
  }, []);

  const filteredData = data.filter(value => {
    if (Number.isInteger(value.title)) return false;

    return true;
  });

  const listItems = filteredData.map(value => {
    return <ListItem key={value.id}>{value.title}</ListItem>;
  });

  return (
    <div>
      <ul>{listItems}</ul>
    </div>
  );
};
