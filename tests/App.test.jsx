import { describe, it, expect } from "vitest";
import { render } from "@testing-library/react";
import App from "../src/App";

// test: adding a product actually adds the product ID to the state if it isn't already in the cart
// test: adding a product that already exists in cart, increments that by 1

// test: removing a product that exists decrements that product
// test: removing a product with only count 1 deletes that entire key from the object
// test: removing a product that doesn't exist in cart prints a console error

// test: given a cart of three items, 2 for 1 item, 1 for the other item, removing an item actually reduces the count of total products in cart by 1
// test: given a cart of 3 items, 2 for 1 item, 1 for the other item, adding an item actually increases total products in cart by 1
// test: given a cart of 0 items, attempt to remove a valid product ID does not decrement the total items to -1
