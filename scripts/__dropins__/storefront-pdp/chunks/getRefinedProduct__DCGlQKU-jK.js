import { c as config } from "./initialize__DZrQ7EkF8R.js";
import { FetchGraphQL } from "@dropins/tools/fetch-graphql.js";
const {
  setEndpoint,
  setFetchGraphQlHeader,
  removeFetchGraphQlHeader,
  setFetchGraphQlHeaders,
  fetchGraphQl,
  getConfig
} = new FetchGraphQL().getMethods();
function transformProductData(data) {
  var _a, _b, _c;
  const productData = data ? {
    name: data.name,
    sku: data.sku,
    addToCartAllowed: data.addToCartAllowed,
    inStock: data.inStock,
    shortDescription: data.shortDescription,
    metaDescription: data.metaDescription,
    metaKeyword: data.metaKeyword,
    metaTitle: data.metaTitle,
    description: data.description,
    images: transformImages(data),
    prices: transformPrices(data),
    attributes: transformAttributes(data),
    options: transformOptions(data),
    optionUIDs: data.optionUIDs,
    url: data.url,
    urlKey: data.urlKey,
    externalId: data.externalId,
    externalParentId: data.externalParentId
  } : null;
  const transform = (_c = (_b = (_a = config.getConfig()) == null ? void 0 : _a.models) == null ? void 0 : _b.ProductDetails) == null ? void 0 : _c.transform;
  if (transform && productData) {
    return transform(productData);
  }
  return productData;
}
function transformImages(data) {
  var _a;
  return (_a = data.images) == null ? void 0 : _a.map((image) => {
    image.url = image.url.replace(/^https?:/, "");
    return image;
  });
}
function transformAttributes(data) {
  var _a, _b;
  return (_b = (_a = data.attributes) == null ? void 0 : _a.filter(({
    roles
  }) => (roles == null ? void 0 : roles.indexOf("visible_in_pdp")) !== -1)) == null ? void 0 : _b.map(({
    label,
    value,
    name
  }) => {
    return {
      id: name,
      label,
      value: value.toString().split(",").join(", ")
    };
  });
}
function transformOptions(data) {
  const {
    options,
    optionUIDs
  } = data;
  return options == null ? void 0 : options.map(({
    id,
    title,
    required,
    multi,
    values
  }) => {
    var _a, _b;
    const typename = (_a = values == null ? void 0 : values[0]) == null ? void 0 : _a.__typename;
    let type = values == null ? void 0 : values[0].type;
    const isBundle = ((_b = values == null ? void 0 : values[0]) == null ? void 0 : _b.__typename) === "ProductViewOptionValueProduct";
    if (isBundle) {
      type = void 0;
    } else {
      if (type) {
        type = type.replace("COLOR_HEX", "color").replace("TEXT", "text").replace("IMAGE", "image");
      } else {
        type = "dropdown";
      }
    }
    return {
      id,
      type,
      typename,
      label: title,
      required,
      multiple: multi,
      items: values == null ? void 0 : values.map(({
        id: id2,
        title: title2,
        inStock,
        value
      }) => {
        return {
          id: id2,
          label: title2,
          inStock,
          value: (type == null ? void 0 : type.toLowerCase()) === "dropdown" ? id2 : value == null ? void 0 : value.replace(/^https?:/, ""),
          selected: (optionUIDs == null ? void 0 : optionUIDs.indexOf(id2)) > -1
        };
      })
    };
  });
}
function transformPrices(data) {
  var _a, _b, _c, _d, _e;
  const {
    price,
    priceRange,
    __typename: type
  } = data;
  function getSimpleProductPrices() {
    var _a2;
    const regularPrice2 = price.regular.amount.value;
    const finalPrice = ((_a2 = price.final) == null ? void 0 : _a2.amount.value) ?? price.regular.amount.value;
    const currency2 = price.regular.amount.currency === "NONE" ? "USD" : price == null ? void 0 : price.regular.amount.currency;
    return [regularPrice2, finalPrice, finalPrice, currency2];
  }
  function getComplexProductPrices() {
    var _a2, _b2, _c2, _d2, _e2, _f, _g, _h, _i, _j, _k, _l;
    const finalMinimumPrice2 = (_a2 = priceRange == null ? void 0 : priceRange.minimum) == null ? void 0 : _a2.final.amount.value;
    const finalMaximumPrice2 = (_b2 = priceRange == null ? void 0 : priceRange.maximum) == null ? void 0 : _b2.final.amount.value;
    let regularPrice2;
    if (((_d2 = (_c2 = priceRange == null ? void 0 : priceRange.minimum) == null ? void 0 : _c2.regular) == null ? void 0 : _d2.amount.value) === ((_f = (_e2 = priceRange == null ? void 0 : priceRange.maximum) == null ? void 0 : _e2.regular) == null ? void 0 : _f.amount.value)) {
      regularPrice2 = (_h = (_g = priceRange == null ? void 0 : priceRange.minimum) == null ? void 0 : _g.regular) == null ? void 0 : _h.amount.value;
    }
    const currency2 = ((_j = (_i = priceRange == null ? void 0 : priceRange.minimum) == null ? void 0 : _i.final) == null ? void 0 : _j.amount.currency) === "NONE" ? "USD" : (_l = (_k = priceRange == null ? void 0 : priceRange.minimum) == null ? void 0 : _k.final) == null ? void 0 : _l.amount.currency;
    return [regularPrice2, finalMinimumPrice2, finalMaximumPrice2, currency2];
  }
  const [regularPrice, finalMinimumPrice, finalMaximumPrice, currency] = type === "SimpleProductView" ? getSimpleProductPrices() : getComplexProductPrices();
  const visible = type === "SimpleProductView" ? (_a = price == null ? void 0 : price.roles) == null ? void 0 : _a.includes("visible") : ((_c = (_b = priceRange == null ? void 0 : priceRange.maximum) == null ? void 0 : _b.roles) == null ? void 0 : _c.includes("visible")) && ((_e = (_d = priceRange == null ? void 0 : priceRange.minimum) == null ? void 0 : _d.roles) == null ? void 0 : _e.includes("visible"));
  if (finalMaximumPrice && finalMinimumPrice === finalMaximumPrice) {
    const hasDiscount = regularPrice && finalMinimumPrice !== regularPrice;
    return {
      regular: {
        amount: regularPrice,
        currency,
        variant: hasDiscount ? "strikethrough" : "default"
      },
      final: {
        amount: finalMaximumPrice,
        currency,
        variant: "default"
      },
      visible
    };
  }
  return {
    final: {
      minimumAmount: finalMinimumPrice,
      maximumAmount: finalMaximumPrice,
      currency
    },
    visible
  };
}
const ProductOptionFragment = `
fragment ProductOptionFragment on ProductViewOption {
    id
    title
    required
    multi
    values {
      id
      title
      inStock
      __typename
      ... on ProductViewOptionValueProduct {
        title
        quantity
        isDefault
        product {
          sku
          shortDescription
          metaDescription
          metaKeyword
          metaTitle
          name
          price {
            final {
              amount {
                value
                currency
              }
            }
            regular {
              amount {
                value
                currency
              }
            }
            roles
          }
        }
      }
      ... on ProductViewOptionValueSwatch {
        id
        title
        type
        value
        inStock
      }
    }
  }
`;
const ProductFragment = `
fragment ProductFragment on ProductView {
  __typename
  id
  sku
  name
  shortDescription
  metaDescription
  metaKeyword
  metaTitle
  description
  inStock
  addToCartAllowed
  url
  urlKey
  externalId

  images(roles: []) {
    url
    label
    roles
  }

  attributes(roles: []) {
    name
    label
    value
    roles
  }

... on SimpleProductView {
    price {
        roles

        regular {
            amount {
                value
                currency
            }
        }

        final {
            amount {
                value
                currency
            }
        }
    }
}


  ... on ComplexProductView {
    options {
      ...ProductOptionFragment
    }

    priceRange {
      maximum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
      minimum {
        final {
          amount {
            value
            currency
          }
        }
        regular {
          amount {
            value
            currency
          }
        }
        roles
      }
    }
  }
}

${ProductOptionFragment}
`;
const GET_PRODUCT_DATA = `
query GET_PRODUCT_DATA($skus: [String]) {
    products(skus: $skus) {
        ...ProductFragment
    }
}

${ProductFragment}
`;
const getProductData$1 = async (sku) => {
  var _a, _b, _c, _d, _e;
  const initialData = (_d = (_c = (_b = (_a = config) == null ? void 0 : _a.getConfig()) == null ? void 0 : _b.models) == null ? void 0 : _c.ProductDetails) == null ? void 0 : _d.initialData;
  if (initialData) {
    return transformProductData(initialData);
  }
  const {
    data
  } = await fetchGraphQl(GET_PRODUCT_DATA, {
    method: "GET",
    variables: {
      skus: [sku]
    }
  });
  const product = (_e = data == null ? void 0 : data.products) == null ? void 0 : _e[0];
  return transformProductData(product);
};
const REFINE_PRODUCT_QUERY = `
query REFINE_PRODUCT_QUERY(
    $optionIds: [String!]!
    $sku: String!
) {
    # Refined Product
    refineProduct(
        optionIds: $optionIds 
        sku: $sku
    ) {
        ...ProductFragment
    }

    # Parent Product
    products(skus: [$sku]) {
        ...ProductFragment
    }

    # %extendedPlaceholder%
}

${ProductFragment}
`;
async function getProductData(sku, optionUIDs) {
  const optionPairCombinations = getPairCombination(optionUIDs);
  const optionQueries = getProductOptionQuery(optionPairCombinations, sku);
  const mergedQueries = REFINE_PRODUCT_QUERY.replace("# %extendedPlaceholder%", optionQueries);
  const {
    data
  } = await fetchGraphQl(mergedQueries, {
    method: "GET",
    variables: {
      optionIds: optionUIDs,
      sku
    }
  });
  return data;
}
const getRefinedProduct = async (sku, optionUIDs, anchorOptions) => {
  var _a, _b, _c, _d;
  const data = await getProductData(sku, optionUIDs);
  if (!data)
    return null;
  let {
    products,
    refineProduct,
    ...refinedOptions
  } = data;
  const parent = products == null ? void 0 : products[0];
  const options = mergeRefinedOptions(Object.values(refinedOptions), parent.options, anchorOptions);
  if ((anchorOptions == null ? void 0 : anchorOptions.length) && refineProduct === null) {
    optionUIDs = updateSelections(options, optionUIDs, anchorOptions);
    const updatedRefinedData = await getProductData(sku, optionUIDs);
    refineProduct = updatedRefinedData == null ? void 0 : updatedRefinedData.refineProduct;
  }
  const refinedData = transformProductData({
    ...refineProduct || parent,
    sku: parent.sku,
    name: parent.name,
    externalParentId: parent == null ? void 0 : parent.externalId,
    options,
    optionUIDs
  });
  const fallback = (_d = (_c = (_b = (_a = config) == null ? void 0 : _a.getConfig()) == null ? void 0 : _b.models) == null ? void 0 : _c.ProductDetails) == null ? void 0 : _d.fallbackData;
  if (fallback) {
    return fallback(parent, refinedData);
  }
  return refinedData;
};
function getPairCombination(arr) {
  if (arr.length < 2) {
    return [arr];
  }
  const result = [];
  arr.forEach((item) => {
    const temp = [];
    arr.forEach((item2) => {
      if (item !== item2) {
        temp.push(item2);
      }
    });
    result.push(temp);
  });
  return result;
}
function getProductOptionQuery(optionUIDs, sku) {
  return optionUIDs.map((ids, i) => {
    return `
          ProductOption${i}: refineProduct(
            optionIds: [
              ${ids.map((id) => `"${id}"`).join(", ")}
            ]
            sku: "${sku}"
          ) {
            ... on ComplexProductView {
              options {
                ...ProductOptionFragment
              }
            }
          }
        `;
  }).join("");
}
function mergeRefinedOptions(options, parent, anchorOptions) {
  const refinedOptions = Object.values(options).filter((x) => !!x).reduce((acc, curr) => {
    if (!curr.options)
      return [...acc];
    return [...acc, ...curr.options];
  }, []);
  const map = new Map(parent.map((item) => [item.id, item]));
  refinedOptions.forEach((current) => {
    if (anchorOptions == null ? void 0 : anchorOptions.includes(current.id)) {
      return;
    }
    map.set(current.id, current);
  });
  return [...map.values()];
}
function updateSelections(options, optionsUIDs, anchorOptions) {
  const updatedOptionsUIDs = [];
  let optionValue;
  options.forEach((option) => {
    var _a, _b, _c, _d;
    if (anchorOptions.includes(option.id)) {
      optionValue = ((_b = (_a = option.values) == null ? void 0 : _a.find((value) => optionsUIDs.includes(value == null ? void 0 : value.id))) == null ? void 0 : _b.id) || ((_c = option.values[0]) == null ? void 0 : _c.id);
    } else {
      optionValue = (_d = option.values[0]) == null ? void 0 : _d.id;
    }
    updatedOptionsUIDs.push(optionValue);
  });
  return updatedOptionsUIDs;
}
export {
  setFetchGraphQlHeader as a,
  setFetchGraphQlHeaders as b,
  getProductData$1 as c,
  getRefinedProduct as d,
  fetchGraphQl as f,
  getConfig as g,
  removeFetchGraphQlHeader as r,
  setEndpoint as s
};
