import{C,a as T,s as n,f as m,h as u,t as l,c as I}from"./chunks/getStoreConfig.js";import{j as P,g as D,m as b,i as F,k as y,r as $,l as v,b as w,d as x,e as Q}from"./chunks/getStoreConfig.js";import{events as d}from"@dropins/tools/event-bus.js";import{p as f,a as g}from"./chunks/updateProductsFromCart.js";import{u as H}from"./chunks/updateProductsFromCart.js";import{a as Y,g as j,c as q,b as B}from"./chunks/getEstimatedTotals.js";import"@dropins/tools/fetch-graphql.js";import"@dropins/tools/lib.js";const E=`
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
`,G=async e=>{let r=!1;const s=n.cartId||await h().then(a=>(r=!0,a));return m(E,{variables:{cartId:s,cartItems:e.map(({sku:a,parentSku:i,quantity:t,optionsUIDs:o,enteredOptions:c})=>({sku:a,parent_sku:i,quantity:t,selected_options:o,entered_options:c}))}}).then(({errors:a,data:i})=>{if(a)return u(a);const t=l(i.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const o=t.items.filter(c=>e.some(({sku:p})=>p===c.sku));r?f(t,o,n.locale||"en-US"):g(t,o,n.locale||"en-US")}return t})},_=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,h=async()=>{const{disableGuestCart:e}=I.getConfig();if(e)throw new Error("Guest cart is disabled");return await m(_).then(({data:r})=>{const s=r.createEmptyCart;return n.cartId=s,s})};export{G as addProductsToCart,I as config,h as createEmptyCart,m as fetchGraphQl,P as getCartData,D as getConfig,Y as getCountries,j as getEstimateShipping,q as getEstimatedTotals,B as getRegions,b as getStoreConfig,F as initialize,y as initializeCart,$ as removeFetchGraphQlHeader,v as resetCart,w as setEndpoint,x as setFetchGraphQlHeader,Q as setFetchGraphQlHeaders,H as updateProductsFromCart};
//# sourceMappingURL=api.js.map
