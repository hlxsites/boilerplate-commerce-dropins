import{M as f,f as w,F as C,e as v,U as S}from"./dispatchApiCall.js";import{g as I,t as O}from"./getCheckoutData.graphql.js";import{f as y,k as x,P as d}from"./countries.js";import{events as m}from"@dropins/tools/event-bus.js";import{I as T}from"./cart-item.js";const X=async t=>{if(!t)throw new f;return await w({type:"query",query:I,options:{method:"POST",cache:"no-cache",variables:{cartId:t}},path:"cart",signalType:"cart",transformer:O})},E=`
  query getStockStatus($cartId: String!) {
    cart(cart_id: $cartId) {
      id
      items {
        __typename
        uid
        product {
          uid
          name
          sku
          stock_status
          only_x_left_in_stock
          ... on ConfigurableProduct {
            variants {
              attributes {
                uid
              }
              product {
                uid
                stock_status
              }
            }
          }
          ... on BundleProduct {
            items {
              uid
              options {
                uid
                product {
                  uid
                }
              }
            }
          }
        }
        quantity
        ... on ConfigurableCartItem {
          configurable_options {
            configurable_product_option_uid
            option_label
            configurable_product_option_value_uid
            value_label
          }
        }
        ... on BundleCartItem {
          bundle_options {
            uid
            values {
              uid
            }
          }
        }
      }
    }
  }
`,g=t=>t.stock_status===d.InStock,D=t=>g(t.product),L=t=>{const{configurable_options:n}=t,{variants:o}=t.product;if(!o||!n)return!1;const e=n.map(u=>u==null?void 0:u.configurable_product_option_value_uid),a=o.find(u=>!u||!u.attributes?!1:u.attributes.every(c=>c&&e.includes(c.uid)));if(!a)return!1;const{product:r}=a;return r?g(r):!1},$=t=>{const{product:n}=t;if(!g(n))return!1;const{bundle_options:o}=t,{items:e}=n;return(e==null?void 0:e.length)===(o==null?void 0:o.length)},q=t=>{switch(t){case"ConfigurableCartItem":return L;case"BundleCartItem":return $;default:return D}},M=t=>q(t.__typename)(t)===!1,Y=async t=>{var r;if(!t)throw new f;const{data:n,errors:o}=await y(E,{method:"GET",cache:"no-cache",variables:{cartId:t}}).catch(x);if(o)throw new C(o);const e=(r=n==null?void 0:n.cart)==null?void 0:r.items;return!e||!e.length?d.InStock:e.filter(u=>u?M(u):!1).length>0?d.OutOfStock:d.InStock},Q=`
  mutation placeOrder($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      orderV2 {
        number
        token
      }
    }
  }
`;function A(t){const n=[];for(const o in t)t[o]!==null&&n.push({optionLabel:o,valueLabel:t[o]});return n}function F(t){return t.map(n=>{var i;const{uid:o,name:e,sku:a,price:r,quantity:u}=n;let c={canApplyMsrp:!0,formattedPrice:"",id:o,prices:{price:{value:r.value??0,currency:r.currency??""}},product:{productId:0,name:e,sku:a,productType:n.kind,canonicalUrl:n.url||"",mainImageUrl:((i=n==null?void 0:n.image)==null?void 0:i.src)||""},quantity:u};return n.kind===T.Configurable&&(c.configurableOptions=A(n.configurableOptions)),c},[])}function U(t){var c,i,s,l;const{id:n,items:o,prices:e,totalQty:a}=t,r=!!(o!=null&&o.length);let u={id:n,prices:{subtotalExcludingTax:{value:((c=e==null?void 0:e.subtotal_excluding_tax)==null?void 0:c.value)??0,currency:((i=e==null?void 0:e.subtotal_excluding_tax)==null?void 0:i.currency)??""},subtotalIncludingTax:{value:((s=e==null?void 0:e.subtotal_including_tax)==null?void 0:s.value)??0,currency:((l=e==null?void 0:e.subtotal_including_tax)==null?void 0:l.currency)??""}},totalQuantity:a,possibleOnepageCheckout:!0};return r&&(u.items=F(o)),u}function B(t){return t.reduce((o,e)=>o+e.amount.value,0)}function N(t){return{shippingMethod:`${t.carrier.code}_${t.code}`,shippingAmount:t.amount.value??0}}function V(t,n){var s,l,h,b,_;const{coupons:o,email:e,prices:a,selectedPaymentMethod:r,shippingAddresses:u}=n,c=!!(u!=null&&u.length);let i={appliedCouponCode:((s=o[0])==null?void 0:s.code)??"",email:e??"",grandTotal:((l=a==null?void 0:a.grand_total)==null?void 0:l.value)??0,orderId:t,orderType:"checkout",otherTax:0,paymentMethodCode:(r==null?void 0:r.code)??"",paymentMethodName:(r==null?void 0:r.title)??"",payments:[{paymentMethodCode:(r==null?void 0:r.code)??"",paymentMethodName:(r==null?void 0:r.title)??"",total:((h=a==null?void 0:a.grand_total)==null?void 0:h.value)??0}],salesTax:B((a==null?void 0:a.applied_taxes)??[]),subtotalExcludingTax:((b=a==null?void 0:a.subtotal_excluding_tax)==null?void 0:b.value)??0,subtotalIncludingTax:((_=a==null?void 0:a.subtotal_including_tax)==null?void 0:_.value)??0};if(c){const p=u[0],k=p==null?void 0:p.selectedShippingMethod;k&&(i.shipping=N(k))}return i}function G(t){const{data:n}=v.value,o=U(n),e=V(t,n);window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer.push({shoppingCartContext:null},{orderContext:null}),window.adobeDataLayer.push({shoppingCartContext:o},{orderContext:e})}function P(){window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer.push(t=>{const n=t.getState()||{};t.push({event:"place-order",eventInfo:{...n}})})}function K(t){G(t),P()}function j(t){throw t.every(o=>{var e;return(e=o.extensions)==null?void 0:e.category})?new C(t):new S(t[0].message)}const Z=async t=>{if(!t)throw new f;const{data:n,errors:o}=await y(Q,{variables:{cartId:t}}).catch(x);o&&j(o);const e=n.placeOrder.orderV2;K(e.number),m.emit("cart/reset",void 0),m.emit("checkout/order",e)};export{Y as a,X as g,Z as p};
//# sourceMappingURL=placeOrder2.js.map
