var StockStatus = /* @__PURE__ */ ((StockStatus2) => {
  StockStatus2["InStock"] = "IN_STOCK";
  StockStatus2["OutOfStock"] = "OUT_OF_STOCK";
  return StockStatus2;
})(StockStatus || {});
var ItemKind = /* @__PURE__ */ ((ItemKind2) => {
  ItemKind2["Simple"] = "SimpleProduct";
  ItemKind2["Configurable"] = "ConfigurableProduct";
  ItemKind2["Downloadable"] = "DownloadableProduct";
  ItemKind2["GiftCard"] = "GiftCardProduct";
  ItemKind2["Virtual"] = "VirtualProduct";
  ItemKind2["Bundle"] = "BundleProduct";
  return ItemKind2;
})(ItemKind || {});
export {
  ItemKind as I,
  StockStatus as S
};
