import{s}from"./chunks/state.js";import{C as T,a as l,t as f}from"./chunks/CartFragment.js";import{events as m}from"@dropins/tools/event-bus.js";import{f as p,h as g}from"./chunks/resetCart.js";import{g as v,r as Q,c as H,s as k,a as z,b as Y}from"./chunks/resetCart.js";import{a as I,b as h}from"./chunks/updateProductsFromCart.js";import{u as q}from"./chunks/updateProductsFromCart.js";import{c as _,g as E,a as A}from"./chunks/getStoreConfig.js";import{b as J,e as K,i as L,d as V}from"./chunks/getStoreConfig.js";import{g as X,b as Z,a as tt}from"./chunks/getEstimateShipping.js";import{g as at}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const R=`
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
  ${l}
`,w=async r=>{let o=!1;const n=s.cartId||await O().then(e=>(o=!0,e));return p(R,{variables:{cartId:n,cartItems:r.map(({sku:e,parentSku:a,quantity:i,optionsUIDs:t,enteredOptions:c})=>({sku:e,parent_sku:a,quantity:i,selected_options:t,entered_options:c}))}}).then(({errors:e,data:a})=>{var c;const i=[...((c=a==null?void 0:a.addProductsToCart)==null?void 0:c.user_errors)??[],...e??[]];if(i.length>0)return g(i);const t=f(a.addProductsToCart.cart);if(m.emit("cart/updated",t),m.emit("cart/data",t),t){const d=t.items.filter(C=>r.some(({sku:u})=>u===C.sku));o?I(t,d,s.locale??"en-US"):h(t,d,s.locale??"en-US")}return t})},P=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,O=async()=>{const{disableGuestCart:r}=_.getConfig();if(r)throw new Error("Guest cart is disabled");return await p(P).then(({data:o})=>{const n=o.createEmptyCart;return s.cartId=n,n})},F=async()=>{const r=s.authenticated?await E():await A();return m.emit("cart/updated",r),m.emit("cart/data",r),r};export{w as addProductsToCart,_ as config,O as createEmptyCart,p as fetchGraphQl,J as getCartData,v as getConfig,X as getCountries,E as getCustomerCartPayload,Z as getEstimateShipping,at as getEstimatedTotals,A as getGuestCartPayload,tt as getRegions,K as getStoreConfig,L as initialize,V as initializeCart,F as refreshCart,Q as removeFetchGraphQlHeader,H as resetCart,k as setEndpoint,z as setFetchGraphQlHeader,Y as setFetchGraphQlHeaders,q as updateProductsFromCart};
