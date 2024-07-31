import{s as c,f as d,h as u}from"./chunks/resetCart.js";import{g as x,r as y,d as $,a as v,b as w,c as Q}from"./chunks/resetCart.js";import{C as f,a as l,t as g}from"./chunks/CartFragment.js";import{events as p}from"@dropins/tools/event-bus.js";import{p as I,a as _}from"./chunks/updateProductsFromCart.js";import{u as k}from"./chunks/updateProductsFromCart.js";import{c as h}from"./chunks/getStoreConfig.js";import{g as Y,b as j,i as q,a as B}from"./chunks/getStoreConfig.js";import{a as K,g as L,b as V}from"./chunks/getEstimateShipping.js";import{g as X}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const E=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${f}
    ) {
    addProductsToCart(
      cartId: $cartId
      cartItems: $cartItems
    ) {
      cart {
        ...CartFragment
      }
      user_errors {
        code
        message
      }
    }
  }
  ${l}
`,b=async a=>{let s=!1;const o=c.cartId||await R().then(e=>(s=!0,e));return d(E,{variables:{cartId:o,cartItems:a.map(({sku:e,parentSku:r,quantity:n,optionsUIDs:t,enteredOptions:i})=>({sku:e,parent_sku:r,quantity:n,selected_options:t,entered_options:i}))}}).then(({errors:e,data:r})=>{var i;const n=[...((i=r==null?void 0:r.addProductsToCart)==null?void 0:i.user_errors)??[],...e??[]];if(n.length>0)return u(n);const t=g(r.addProductsToCart.cart);if(p.emit("cart/updated",t),p.emit("cart/data",t),t){const m=t.items.filter(C=>a.some(({sku:T})=>T===C.sku));s?I(t,m,c.locale??"en-US"):_(t,m,c.locale??"en-US")}return t})},A=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,R=async()=>{const{disableGuestCart:a}=h.getConfig();if(a)throw new Error("Guest cart is disabled");return await d(A).then(({data:s})=>{const o=s.createEmptyCart;return c.cartId=o,o})};export{b as addProductsToCart,h as config,R as createEmptyCart,d as fetchGraphQl,Y as getCartData,x as getConfig,K as getCountries,L as getEstimateShipping,X as getEstimatedTotals,V as getRegions,j as getStoreConfig,q as initialize,B as initializeCart,y as removeFetchGraphQlHeader,$ as resetCart,v as setEndpoint,w as setFetchGraphQlHeader,Q as setFetchGraphQlHeaders,k as updateProductsFromCart};
