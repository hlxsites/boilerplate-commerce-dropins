import{o as E,M as w,g as A,v as k,n as D,F as L,U as R}from"./fixtures.js";import{events as C}from"@dropins/tools/event-bus.js";const V=n=>({id:E.cartId,totalQuantity:n.totalQuantity,possibleOnepageCheckout:!0,items:n.items.map(a=>{var i;return{canApplyMsrp:!0,formattedPrice:"",id:a.id,quantity:a.totalQuantity,product:{canonicalUrl:a.product.canonicalUrl||"",mainImageUrl:a.product.image||"",name:a.product.name,productId:0,productType:a.product.productType,sku:a.product.sku},prices:{price:{value:a.price.value,currency:a.price.currency}},configurableOptions:((i=a.selectedOptions)==null?void 0:i.map(t=>({optionLabel:t.label,valueLabel:t.value})))||[]}})}),Q=n=>{var t,c,u;const a=n.coupons[0],i=(t=n.payments)==null?void 0:t[0];return{appliedCouponCode:(a==null?void 0:a.code)||"",email:n.email,grandTotal:n.total,orderId:n.number,orderType:"checkout",otherTax:0,salesTax:n.totalTax,shipping:{shippingMethod:((c=n.shipping)==null?void 0:c.code)||"",shippingAmount:((u=n.shipping)==null?void 0:u.amount)||0},subtotalExcludingTax:n.subtotal,subtotalIncludingTax:0,payments:i?[{paymentMethodCode:(i==null?void 0:i.code)||"",paymentMethodName:(i==null?void 0:i.name)||"",total:n.total}]:[]}},l=n=>n||0,S=n=>{var a;return{canonicalUrl:(n==null?void 0:n.canonical_url)||"",id:(n==null?void 0:n.uid)||"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((a=n==null?void 0:n.image)==null?void 0:a.url)||"",productType:(n==null?void 0:n.__typename)||""}};function M(n){if(!n||!("selected_options"in n))return;const a={};for(const i of n.selected_options)a[i.label]=i.value;return a}const P=n=>l(n==null?void 0:n.quantity_ordered)+l(n==null?void 0:n.quantity_shipped)+l(n==null?void 0:n.quantity_canceled)+l(n==null?void 0:n.quantity_invoiced)+l(n==null?void 0:n.quantity_refunded)+l(n==null?void 0:n.quantity_returned),U=n=>n?n.map(a=>{var i,t,c,u,s,p,_,e,y,g,o,h,v,b;return{type:a==null?void 0:a.__typename,id:a==null?void 0:a.id,discounted:(a==null?void 0:a.product.price_range.maximum_price.regular_price.value)*(a==null?void 0:a.quantity_ordered)!==(a==null?void 0:a.product_sale_price.value)*(a==null?void 0:a.quantity_ordered),total:{value:(a==null?void 0:a.product_sale_price.value)*(a==null?void 0:a.quantity_ordered),currency:a==null?void 0:a.product_sale_price.currency},totalInclTax:{value:(a==null?void 0:a.product_sale_price.value)*(a==null?void 0:a.quantity_ordered),currency:a==null?void 0:a.product_sale_price.currency},price:{value:a==null?void 0:a.product_sale_price.value,currency:a==null?void 0:a.product_sale_price.currency},priceInclTax:{value:a==null?void 0:a.product_sale_price.value,currency:a==null?void 0:a.product_sale_price.currency},totalQuantity:P(a),regularPrice:{value:(c=(t=(i=a==null?void 0:a.product)==null?void 0:i.price_range)==null?void 0:t.maximum_price)==null?void 0:c.regular_price.value,currency:(p=(s=(u=a==null?void 0:a.product)==null?void 0:u.price_range)==null?void 0:s.maximum_price)==null?void 0:p.regular_price.currency},product:S(a==null?void 0:a.product),thumbnail:{label:((e=(_=a==null?void 0:a.product)==null?void 0:_.thumbnail)==null?void 0:e.label)||"",url:((g=(y=a==null?void 0:a.product)==null?void 0:y.thumbnail)==null?void 0:g.url)||""},giftCard:(a==null?void 0:a.__typename)==="GiftCardOrderItem"?{senderName:((o=a.gift_card)==null?void 0:o.sender_name)||"",senderEmail:((h=a.gift_card)==null?void 0:h.sender_email)||"",recipientEmail:((v=a.gift_card)==null?void 0:v.recipient_email)||"",recipientName:((b=a.gift_card)==null?void 0:b.recipient_name)||""}:void 0,configurableOptions:M(a)}}):[];function G(n){return n!==null&&n.value!==void 0}const x=n=>n?{city:n.city,company:n.company||"",country:n.country_code||"",firstName:n.firstname,middleName:n.middlename||"",lastName:n.lastname,postCode:n.postcode||"",regionId:n.region_id||"",region:n.region||"",street:n.street.filter(a=>a!==null),telephone:n.telephone||"",customAttributes:n.custom_attributesV2.filter(G).map(a=>({code:a.code,value:a.value}))}:null,F=n=>{var s,p,_,e,y,g,o,h,v,b;const a=(s=n.payment_methods)==null?void 0:s[0],i=(a==null?void 0:a.type)??"",t=(a==null?void 0:a.name)??"",c=U(n.items),u=c.reduce((f,N)=>f+N.totalQuantity,0);return{status:n.status,isVirtual:n.is_virtual,coupons:((p=n==null?void 0:n.applied_coupons)==null?void 0:p.map(f=>({code:(f==null?void 0:f.code)??""})))||[],email:n.email??"",items:c,number:n.number,token:n.token,grandTotal:{value:((_=n.total)==null?void 0:_.grand_total.value)??0,currency:((e=n.total)==null?void 0:e.grand_total.currency)||""},totalQuantity:u,totalTax:{value:((y=n.total)==null?void 0:y.total_tax.value)??0,currency:((g=n.total)==null?void 0:g.total_tax.currency)||""},subtotal:{value:((o=n.total)==null?void 0:o.subtotal.value)??0,currency:((h=n.total)==null?void 0:h.subtotal.currency)||""},shipping:{amount:((v=n.total)==null?void 0:v.total_shipping.value)??0,currency:((b=n.total)==null?void 0:b.total_shipping.currency)||"",code:n.shipping_method??""},payments:[{code:i,name:t}],shippingAddress:x(n.shipping_address),billingAddress:x(n.billing_address)}},X=`
  mutation placeOrder($cartId: String!) {
    placeOrder(input: { cart_id: $cartId }) {
      orderV2 {
        number
        status
        token
        is_virtual
        applied_coupons {
          code
        }
        email
        id
        total {
          grand_total {
            currency
            value
          }
          subtotal {
            currency
            value
          }
          total_shipping {
            currency
            value
          }
          total_tax {
            currency
            value
          }
        }
        shipping_method
        payment_methods {
          name
          type
        }
        billing_address {
          firstname
          middlename
          lastname
          street
          city
          postcode
          telephone
          country_code
          region
          region_id
          company
          custom_attributesV2 {
            code
            ... on AttributeValue {
              value
            }
          }
        }
        shipping_address {
          firstname
          middlename
          lastname
          street
          city
          postcode
          telephone
          country_code
          region
          region_id
          company
          custom_attributesV2 {
            code
            ... on AttributeValue {
              value
            }
          }
        }
        items {
          __typename
          id
          discounts {
            amount {
              value
            }
          }
          product {
            __typename
            canonical_url
            image {
              url
            }
            thumbnail {
              label
              url
            }
            name
            sku
            uid
            price_range {
              maximum_price {
                regular_price {
                  currency
                  value
                }
              }
            }
          }
          selected_options {
            label
            value
          }
          product_sale_price {
            value
            currency
          }
          quantity_canceled
          quantity_invoiced
          quantity_ordered
          quantity_refunded
          quantity_returned
          quantity_shipped
          ... on GiftCardOrderItem {
            gift_card {
              recipient_name
              recipient_email
              sender_name
              sender_email
              message
            }
          }
        }
      }
    }
  }
`,O={SHOPPING_CART_CONTEXT:"shoppingCartContext",ORDER_CONTEXT:"orderContext"},$={PLACE_ORDER:"place-order"};function q(){return window.adobeDataLayer=window.adobeDataLayer||[],window.adobeDataLayer}function T(n,a){const i=q();i.push({[n]:null}),i.push({[n]:a})}function H(n,a){q().push(t=>{const c=t.getState?t.getState():{};t.push({event:n,eventInfo:{...c,...a}})})}function j(n){const a=V(n),i=Q(n);console.debug({shoppingCartContext:a,orderContext:i}),T(O.SHOPPING_CART_CONTEXT,{...a}),T(O.ORDER_CONTEXT,{...i}),H($.PLACE_ORDER)}function z(n){throw n.every(i=>{var t;return(t=i.extensions)==null?void 0:t.category})?new L(n):new R(n[0].message)}const K=async()=>{const n=E.cartId;if(!n)throw new w;const{data:a,errors:i}=await A(X,{variables:{cartId:n}}).catch(k);i&&z(i);const t=F(a.placeOrder.orderV2);return j(t),C.emit("checkout/order",t),D.value={pending:!1,data:null},C.emit("cart/reset",void 0),t};export{K as p};
