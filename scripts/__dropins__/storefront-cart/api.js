import{s,f as C,h as T}from"./chunks/resetCart.js";import{g as $,e as v,r as Q,i as H,b as k,c as z,d as Y}from"./chunks/resetCart.js";import{C as l,a as g,t as f}from"./chunks/CartFragment.js";import{events as d}from"@dropins/tools/event-bus.js";import{a as h,b as I}from"./chunks/updateProductsFromCart.js";import{u as q}from"./chunks/updateProductsFromCart.js";import{c as _,g as E,a as A}from"./chunks/getStoreConfig.js";import{b as J,e as K,i as L,d as V}from"./chunks/getStoreConfig.js";import{g as X,b as Z,a as tt}from"./chunks/getEstimateShipping.js";import{g as rt}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const R=`
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
  ${g}
`,N=async a=>{let o=!1;const n=s.cartId||await O().then(e=>(o=!0,e));return C(R,{variables:{cartId:n,cartItems:a.map(({sku:e,parentSku:r,quantity:c,optionsUIDs:t,enteredOptions:i})=>({sku:e,parent_sku:r,quantity:c,selected_options:t,entered_options:i}))}}).then(({errors:e,data:r})=>{var i;const c=[...((i=r==null?void 0:r.addProductsToCart)==null?void 0:i.user_errors)??[],...e??[]];if(c.length>0)return T(c);const t=f(r.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const m=t.items.filter(p=>a.some(({sku:u})=>u===p.sku));o?h(t,m,s.locale??"en-US"):I(t,m,s.locale??"en-US")}return t})},P=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,O=async()=>{const{disableGuestCart:a}=_.getConfig();if(a)throw new Error("Guest cart is disabled");return await C(P).then(({data:o})=>{const n=o.createEmptyCart;return s.cartId=n,n})},F=async()=>{const a=s.authenticated?await E():await A();return d.emit("cart/updated",a),d.emit("cart/data",a),a};export{N as addProductsToCart,_ as config,O as createEmptyCart,C as fetchGraphQl,J as getCartData,$ as getCartDataFromCache,v as getConfig,X as getCountries,E as getCustomerCartPayload,Z as getEstimateShipping,rt as getEstimatedTotals,A as getGuestCartPayload,tt as getRegions,K as getStoreConfig,L as initialize,V as initializeCart,F as refreshCart,Q as removeFetchGraphQlHeader,H as resetCart,k as setEndpoint,z as setFetchGraphQlHeader,Y as setFetchGraphQlHeaders,q as updateProductsFromCart};
