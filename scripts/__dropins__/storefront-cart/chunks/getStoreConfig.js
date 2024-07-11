import{events as i}from"@dropins/tools/event-bus.js";import{s as a,e as y,i as m,C as u,a as l,j as f,f as s,h as o,t as p}from"./resetCart.js";import{Initializer as C}from"@dropins/tools/lib.js";const d=new C({init:async t=>{const r={disableGuestCart:!1,...t};d.config.setConfig(r),c().catch(console.error)},listeners:()=>[i.on("authenticated",t=>{a.authenticated&&!t?i.emit("cart/reset",void 0):t&&!a.authenticated&&(a.authenticated=t,c().catch(console.error))},{eager:!0}),i.on("locale",async t=>{t!==a.locale&&(a.locale=t,c().catch(console.error))}),i.on("cart/reset",()=>{y().catch(console.error),i.emit("cart/data",null)}),i.on("cart/data",t=>{m(t)})]}),h=d.config;function T(t){if(!t)return null;const r=e=>{switch(e){case 1:return"EXCLUDING_TAX";case 2:return"INCLUDING_TAX";case 3:return"INCLUDING_EXCLUDING_TAX";default:return"EXCLUDING_TAX"}};return{displayMiniCart:t.minicart_display,miniCartMaxItemsDisplay:t.minicart_max_items,cartExpiresInDays:t.cart_expires_in_days,cartSummaryDisplayTotal:t.cart_summary_display_quantity,defaultCountry:t.default_country,categoryFixedProductTaxDisplaySetting:t.category_fixed_product_tax_display_setting,productFixedProductTaxDisplaySetting:t.product_fixed_product_tax_display_setting,salesFixedProductTaxDisplaySetting:t.sales_fixed_product_tax_display_setting,shoppingCartDisplaySetting:{zeroTax:t.shopping_cart_display_zero_tax,subtotal:r(t.shopping_cart_display_subtotal),price:r(t.shopping_cart_display_price),shipping:r(t.shopping_cart_display_shipping),fullSummary:t.shopping_cart_display_full_summary,grandTotal:t.shopping_cart_display_grand_total,taxGiftWrapping:t.shopping_cart_display_tax_gift_wrapping},useConfigurableParentThumbnail:t.configurable_thumbnail_source==="parent"}}const x=`
  query GUEST_CART_QUERY(
      $cartId: String!,
      ${u}
    ) {

    cart(cart_id: $cartId){
      ...CartFragment
    }
  }

  ${l}
`,I=`
  query CUSTOMER_CART_QUERY(
      ${u}
    ) {
     ${f}

    cart: customerCart {
      ...CartFragment
    }
  }

  ${l}
`,_=async()=>{const t=a.authenticated,r=a.cartId;if(t)return s(I,{method:"POST"}).then(({errors:e,data:n})=>{if(e)return o(e);const g={...n.cart,...n.customer};return p(g)});if(!r)throw new Error("No cart ID found");return s(x,{method:"POST",cache:"no-cache",variables:{cartId:r}}).then(({errors:e,data:n})=>e?o(e):p(n.cart))},E=`
  mutation MERGE_CARTS_MUTATION(
      $guestCartId: String!, 
      $customerCartId: String!,
      ${u}
    ) {
    mergeCarts(
      source_cart_id: $guestCartId,
      destination_cart_id: $customerCartId
    ) {
      ...CartFragment 
    }
  }

  ${l}
`,c=async()=>{a.config=await A();const t=a.authenticated?await S():await R();return i.emit("cart/initialized",t),i.emit("cart/data",t),t};async function S(){const t=a.cartId,r=await _();return r?(a.cartId=r.id,!t||r.id===t?r:await s(E,{variables:{guestCartId:t,customerCartId:r.id}}).then(()=>_()).then(e=>{const n={oldCartItems:r.items,newCart:e};return i.emit("cart/merged",n),e}).catch(()=>(console.error("Could not merge carts"),r))):null}async function R(){if(h.getConfig().disableGuestCart===!0||!a.cartId)return null;try{return await _()}catch(t){return console.error(t),null}}const G=`
query STORE_CONFIG_QUERY {
  storeConfig {
    minicart_display 
    minicart_max_items
    cart_expires_in_days 
    cart_summary_display_quantity
    default_country
    category_fixed_product_tax_display_setting
    product_fixed_product_tax_display_setting
    sales_fixed_product_tax_display_setting
    shopping_cart_display_full_summary
    shopping_cart_display_grand_total
    shopping_cart_display_price
    shopping_cart_display_shipping
    shopping_cart_display_subtotal
    shopping_cart_display_tax_gift_wrapping
    shopping_cart_display_zero_tax
    configurable_thumbnail_source
  }
}
`,A=async()=>s(G,{method:"GET",cache:"force-cache"}).then(({errors:t,data:r})=>t?o(t):T(r.storeConfig));export{c as a,A as b,h as c,_ as g,d as i};
