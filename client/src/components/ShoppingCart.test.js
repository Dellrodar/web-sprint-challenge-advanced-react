import React from "react";
import { render } from "@testing-library/react";
import ShoppingCart from '../components/ShoppingCart';

const plants = [
  {
    name: 'String of Dolphins',
    id: 125341,
    price: 15
  },
  {
    name: 'ZZ Plant',
    id: 48563,
    price: 18
  },
  {
    name: 'Peace Lily',
    id: 2358,
    price: 26
  }
]

test("displays plants in cart", async () => {
  const { getByText } = render(<ShoppingCart cart={plants} />)
  const items = getByText("String of Dolphins", {exact: false});

  expect(items).toBeInTheDocument()
});