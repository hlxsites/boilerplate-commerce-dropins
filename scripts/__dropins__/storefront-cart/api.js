import{C,a as T,s as n,f as m,h as u,t as l,c as I}from"./chunks/getStoreConfig.js";import{j as N,g as P,m as D,i as b,k as F,r as y,l as $,b as v,d as w,e as x}from"./chunks/getStoreConfig.js";import{events as d}from"@dropins/tools/event-bus.js";import{p as f,a as _}from"./chunks/updateProductsFromCart.js";import{u as k}from"./chunks/updateProductsFromCart.js";import{a as z,g as Y,b as j}from"./chunks/getEstimateShipping.js";import"@dropins/tools/fetch-graphql.js";const g=`
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
`,S=async e=>{let r=!1;const s=n.cartId||await A().then(a=>(r=!0,a));return m(g,{variables:{cartId:s,cartItems:e.map(({sku:a,parentSku:c,quantity:t,optionsUIDs:o,enteredOptions:i})=>({sku:a,parent_sku:c,quantity:t,selected_options:o,entered_options:i}))}}).then(({errors:a,data:c})=>{if(a)return u(a);const t=l(c.addProductsToCart.cart);if(d.emit("cart/updated",t),d.emit("cart/data",t),t){const o=t.items.filter(i=>e.some(({sku:p})=>p===i.sku));r?f(t,o,n.locale||"en-US"):_(t,o,n.locale||"en-US")}return t})},h=`
    mutation CREATE_EMPTY_CART_MUTATION {
        createEmptyCart
    }
`,A=async()=>{const{disableGuestCart:e}=I.getConfig();if(e)throw new Error("Guest cart is disabled");return await m(h).then(({data:r})=>{const s=r.createEmptyCart;return n.cartId=s,s})};export{S as addProductsToCart,I as config,A as createEmptyCart,m as fetchGraphQl,N as getCartData,P as getConfig,z as getCountries,Y as getEstimateShipping,j as getRegions,D as getStoreConfig,b as initialize,F as initializeCart,y as removeFetchGraphQlHeader,$ as resetCart,v as setEndpoint,w as setFetchGraphQlHeader,x as setFetchGraphQlHeaders,k as updateProductsFromCart};
//# sourceMappingURL=api.js.map
