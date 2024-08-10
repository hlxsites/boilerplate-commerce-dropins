import{s}from"./chunks/state.js";import{g as v}from"./chunks/state.js";import{C as T,a as f,t as g}from"./chunks/CartFragment.js";import{events as m}from"@dropins/tools/event-bus.js";import{f as p,h as l}from"./chunks/resetCart.js";import{g as H,r as k,c as z,s as Y,a as j,b as q}from"./chunks/resetCart.js";import{a as h,b as I}from"./chunks/updateProductsFromCart.js";import{u as J}from"./chunks/updateProductsFromCart.js";import{c as _,g as E,a as A}from"./chunks/getStoreConfig.js";import{b as L,e as V,i as W,d as X}from"./chunks/getStoreConfig.js";import{g as tt,b as rt,a as at}from"./chunks/getEstimateShipping.js";import{g as st}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const R=`
  mutation ADD_PRODUCTS_TO_CART_MUTATION(
      $cartId: String!, 
      $cartItems: [CartItemInput!]!,
      ${T}
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
`,F=async r=>{let o=!1;const n=s.cartId||await O().then(e=>(o=!0,e));return p(R,{variables:{cartId:n,cartItems:r.map(({sku:e,parentSku:a,quantity:c,optionsUIDs:t,enteredOptions:i})=>({sku:e,parent_sku:a,quantity:c,selected_options:t,entered_options:i}))}}).then(({errors:e,data:a})=>{var i;const c=[...((i=a==null?void 0:a.addProductsToCart)==null?void 0:i.user_errors)??[],...e??[]];if(c.length>0)return l(c);const t=g(a.addProductsToCart.cart);if(m.emit("cart/updated",t),m.emit("cart/data",t),t){const d=t.items.filter(C=>r.some(({sku:u})=>u===C.sku));o?h(t,d,s.locale??"en-US"):I(t,d,s.locale??"en-US")}return t})},P=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,O=async()=>{const{disableGuestCart:r}=_.getConfig();if(r)throw new Error("Guest cart is disabled");return await p(P).then(({data:o})=>{const n=o.createEmptyCart;return s.cartId=n,n})},w=async()=>{const r=s.authenticated?await E():await A();return m.emit("cart/updated",r),m.emit("cart/data",r),r};export{F as addProductsToCart,_ as config,O as createEmptyCart,p as fetchGraphQl,L as getCartData,v as getCartDataFromCache,H as getConfig,tt as getCountries,E as getCustomerCartPayload,rt as getEstimateShipping,st as getEstimatedTotals,A as getGuestCartPayload,at as getRegions,V as getStoreConfig,W as initialize,X as initializeCart,w as refreshCart,k as removeFetchGraphQlHeader,z as resetCart,Y as setEndpoint,j as setFetchGraphQlHeader,q as setFetchGraphQlHeaders,J as updateProductsFromCart};
