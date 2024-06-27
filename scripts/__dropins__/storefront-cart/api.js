import{C,a as T,s as n,f as m,h as u,t as l}from"./chunks/resetCart.js";import{g as b,r as D,e as F,b as y,c as $,d as v}from"./chunks/resetCart.js";import{events as d}from"@dropins/tools/event-bus.js";import{p as I,a as f}from"./chunks/updateProductsFromCart.js";import{u as x}from"./chunks/updateProductsFromCart.js";import{c as g}from"./chunks/getStoreConfig.js";import{g as H,b as k,i as z,a as Y}from"./chunks/getStoreConfig.js";import{a as q,g as B,c as J,b as K}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const E=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${C}
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
  ${T}
`,M=async r=>{let e=!1;const s=n.cartId||await h().then(a=>(e=!0,a));return m(E,{variables:{cartId:s,cartItems:r.map(({sku:a,parentSku:i,quantity:t,optionsUIDs:o,enteredOptions:c})=>({sku:a,parent_sku:i,quantity:t,selected_options:o,entered_options:c}))}}).then(({errors:a,data:i})=>{if(a)return u(a);const t=l(i.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const o=t.items.filter(c=>r.some(({sku:p})=>p===c.sku));e?I(t,o,n.locale||"en-US"):f(t,o,n.locale||"en-US")}return t})},_=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,h=async()=>{const{disableGuestCart:r}=g.getConfig();if(r)throw new Error("Guest cart is disabled");return await m(_).then(({data:e})=>{const s=e.createEmptyCart;return n.cartId=s,s})};export{M as addProductsToCart,g as config,h as createEmptyCart,m as fetchGraphQl,H as getCartData,b as getConfig,q as getCountries,B as getEstimateShipping,J as getEstimatedTotals,K as getRegions,k as getStoreConfig,z as initialize,Y as initializeCart,D as removeFetchGraphQlHeader,F as resetCart,y as setEndpoint,$ as setFetchGraphQlHeader,v as setFetchGraphQlHeaders,x as updateProductsFromCart};
