function groupProductsByCategory(products) {
  return Object.groupBy(products, ({
    category
  }) => category);
}