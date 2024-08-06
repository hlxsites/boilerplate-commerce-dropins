import{s,f as p,h as T}from"./chunks/resetCart.js";import{g as $,r as v,d as Q,a as H,b as k,c as z}from"./chunks/resetCart.js";import{C as l,a as f,t as g}from"./chunks/CartFragment.js";import{events as d}from"@dropins/tools/event-bus.js";import{p as I,a as h}from"./chunks/updateProductsFromCart.js";import{u as j}from"./chunks/updateProductsFromCart.js";import{c as _,g as E,a as A}from"./chunks/getStoreConfig.js";import{b as B,e as J,i as K,d as L}from"./chunks/getStoreConfig.js";import{a as W,g as X,b as Z}from"./chunks/getEstimateShipping.js";import{g as at}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const R=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${l}
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
  ${f}
`,D=async a=>{let o=!1;const n=s.cartId||await O().then(e=>(o=!0,e));return p(R,{variables:{cartId:n,cartItems:a.map(({sku:e,parentSku:r,quantity:c,optionsUIDs:t,enteredOptions:i})=>({sku:e,parent_sku:r,quantity:c,selected_options:t,entered_options:i}))}}).then(({errors:e,data:r})=>{var i;const c=[...((i=r==null?void 0:r.addProductsToCart)==null?void 0:i.user_errors)??[],...e??[]];if(c.length>0)return T(c);const t=g(r.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const m=t.items.filter(C=>a.some(({sku:u})=>u===C.sku));o?I(t,m,s.locale??"en-US"):h(t,m,s.locale??"en-US")}return t})},P=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,O=async()=>{const{disableGuestCart:a}=_.getConfig();if(a)throw new Error("Guest cart is disabled");return await p(P).then(({data:o})=>{const n=o.createEmptyCart;return s.cartId=n,n})},w=async()=>{const a=s.authenticated?await E():await A();return d.emit("cart/updated",a),d.emit("cart/data",a),a};export{D as addProductsToCart,_ as config,O as createEmptyCart,p as fetchGraphQl,B as getCartData,$ as getConfig,W as getCountries,E as getCustomerCartPayload,X as getEstimateShipping,at as getEstimatedTotals,A as getGuestCartPayload,Z as getRegions,J as getStoreConfig,K as initialize,L as initializeCart,w as refreshCart,v as removeFetchGraphQlHeader,Q as resetCart,H as setEndpoint,k as setFetchGraphQlHeader,z as setFetchGraphQlHeaders,j as updateProductsFromCart};
