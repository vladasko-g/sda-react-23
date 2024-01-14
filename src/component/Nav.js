import React from "react";

import { Link } from "./Link";
import { List } from "./List";
import { ListItem } from "./ListItem";

export const Nav = () => {
  return (
    <nav>
      <List>
        <ListItem>
          <Link href="#">Home</Link>
        </ListItem>
        <ListItem>
          <Link href="#">About</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Sales</Link>
        </ListItem>
        <ListItem>
          <Link href="#">Contact</Link>
        </ListItem>
      </List>
    </nav>
  );
};
