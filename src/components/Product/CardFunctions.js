import { notification } from "antd";

export const transformProduct = (filter, products) => {
  let sortedProduct = products;

  if (filter.sort) {
    return (sortedProduct = sortedProduct.sort((a, b) =>
      filter.sort === "lowToHigh" ? a.price - b.price : b.price - a.price
    ));
  }

  if (filter.category) {
    return (sortedProduct = sortedProduct.filter(
      (prod) => prod.category === filter.category
    ));
  }

  if (filter.searchQuery) {
    return (sortedProduct = sortedProduct.filter((prod) =>
      prod.name.toLowerCase().includes(filter.searchQuery)
    ));
  }
  return sortedProduct;
};

export const added = () => {
  notification.success({
    message: "Item Added Successfully",
    placement: "top",
    duration: 1.5,
  });
};

export const removed = () => {
  notification.error({
    message: "Item Removed From Cart",
    placement: "top",
    duration: 1.5,
  });
};
