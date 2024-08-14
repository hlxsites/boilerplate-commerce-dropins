import{events as v}from"@dropins/tools/event-bus.js";import{Initializer as M}from"@dropins/tools/lib.js";import{FetchGraphQL as N}from"@dropins/tools/fetch-graphql.js";var b=(n=>(n.test="test",n.live="live",n.europe="live",n.australia="live-au",n.unitedStates="live-us",n.asiaPacificSouthEast="live-apse",n))(b||{});const d=new M({init:async n=>{const a={environment:"test"};d.config.setConfig({...a,...n})},listeners:()=>[]}),L=d.config,{setEndpoint:j,setFetchGraphQlHeader:z,removeFetchGraphQlHeader:K,setFetchGraphQlHeaders:B,fetchGraphQl:E,getConfig:J}=new N().getMethods(),T=`
query GET_PAYMENT_METHODS($cartId: String!) {
    adyenPaymentMethods(cart_id: $cartId) {
        paymentMethodsExtraDetails {
            type
            icon {
                url
                width
                height
            }
            isOpenInvoice
            configuration {
                amount {
                    value
                    currency
                }
                currency
            }
        }
        paymentMethodsResponse {
            paymentMethods {
                name
                type
                brand
                brands
                configuration {
                    merchantId
                    merchantName
                }
            }
        }
    }
    cart(cart_id: $cartId) {
        available_payment_methods {
          code
          title
        }
        selected_payment_method {
          code
          title
        }
    }
}
`,W=async n=>{const a=await E(T,{variables:{cartId:n}});if(a.errors)throw new Error(a.errors[0].message);return a},C=`
mutation SET_PAYMENT_METHOD_AND_PLACE_ORDER($cartId: String!, $paymentMethod: PaymentMethodInput!) {
  setPaymentMethodOnCart(
  input: {
      cart_id: $cartId
      payment_method: $paymentMethod
  }) {
    cart  {
      selected_payment_method {
        code
        title
      }
    }
  }

  placeOrder(input: {cart_id: $cartId}) {
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
        quantity_ordered
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
    errors {
      code
      message
    }
  }
}
`,P=n=>n||0,k=n=>{var a;return{canonicalUrl:(n==null?void 0:n.canonical_url)||"",id:(n==null?void 0:n.uid)||"",name:(n==null?void 0:n.name)||"",sku:(n==null?void 0:n.sku)||"",image:((a=n==null?void 0:n.image)==null?void 0:a.url)||"",productType:(n==null?void 0:n.__typename)||""}};function m(n){if(!n||!("selected_options"in n))return;const a={};for(const t of n.selected_options)a[t.label]=t.value;return a}const x=n=>n?n.map(a=>{var t,i,s,e,l,c,u,_,o,p,y,h,g,r;return{type:a==null?void 0:a.__typename,id:a==null?void 0:a.id,discounted:(a==null?void 0:a.product.price_range.maximum_price.regular_price.value)*(a==null?void 0:a.quantity_ordered)!==(a==null?void 0:a.product_sale_price.value)*(a==null?void 0:a.quantity_ordered),total:{value:(a==null?void 0:a.product_sale_price.value)*(a==null?void 0:a.quantity_ordered),currency:a==null?void 0:a.product_sale_price.currency},totalInclTax:{value:(a==null?void 0:a.product_sale_price.value)*(a==null?void 0:a.quantity_ordered),currency:a==null?void 0:a.product_sale_price.currency},price:{value:a==null?void 0:a.product_sale_price.value,currency:a==null?void 0:a.product_sale_price.currency},priceInclTax:{value:a==null?void 0:a.product_sale_price.value,currency:a==null?void 0:a.product_sale_price.currency},totalQuantity:P(a==null?void 0:a.quantity_ordered),regularPrice:{value:(s=(i=(t=a==null?void 0:a.product)==null?void 0:t.price_range)==null?void 0:i.maximum_price)==null?void 0:s.regular_price.value,currency:(c=(l=(e=a==null?void 0:a.product)==null?void 0:e.price_range)==null?void 0:l.maximum_price)==null?void 0:c.regular_price.currency},product:k(a==null?void 0:a.product),thumbnail:{label:((_=(u=a==null?void 0:a.product)==null?void 0:u.thumbnail)==null?void 0:_.label)||"",url:((p=(o=a==null?void 0:a.product)==null?void 0:o.thumbnail)==null?void 0:p.url)||""},giftCard:(a==null?void 0:a.__typename)==="GiftCardOrderItem"?{senderName:((y=a.gift_card)==null?void 0:y.sender_name)||"",senderEmail:((h=a.gift_card)==null?void 0:h.sender_email)||"",recipientEmail:((g=a.gift_card)==null?void 0:g.recipient_email)||"",recipientName:((r=a.gift_card)==null?void 0:r.recipient_name)||""}:void 0,configurableOptions:m(a)}}):[];function w(n){return n!==null&&n.value!==void 0}const O=n=>n?{city:n.city,company:n.company||"",country:n.country_code||"",firstName:n.firstname,middleName:n.middlename||"",lastName:n.lastname,postCode:n.postcode||"",regionId:n.region_id||"",region:n.region||"",street:n.street.filter(a=>a!==null),telephone:n.telephone||"",customAttributes:n.custom_attributesV2.filter(w).map(a=>({code:a.code,value:a.value}))}:null,G=n=>{var l,c,u,_,o,p,y,h,g,r;const a=(l=n.payment_methods)==null?void 0:l[0],t=(a==null?void 0:a.type)??"",i=(a==null?void 0:a.name)??"",s=x(n.items),e=s.reduce((f,A)=>f+A.totalQuantity,0);return{status:n.status,isVirtual:n.is_virtual,coupons:((c=n==null?void 0:n.applied_coupons)==null?void 0:c.map(f=>({code:(f==null?void 0:f.code)??""})))||[],email:n.email??"",items:s,number:n.number,token:n.token,grandTotal:{value:((u=n.total)==null?void 0:u.grand_total.value)??0,currency:((_=n.total)==null?void 0:_.grand_total.currency)||""},totalQuantity:e,totalTax:{value:((o=n.total)==null?void 0:o.total_tax.value)??0,currency:((p=n.total)==null?void 0:p.total_tax.currency)||""},subtotal:{value:((y=n.total)==null?void 0:y.subtotal.value)??0,currency:((h=n.total)==null?void 0:h.subtotal.currency)||""},shipping:{amount:((g=n.total)==null?void 0:g.total_shipping.value)??0,currency:((r=n.total)==null?void 0:r.total_shipping.currency)||"",code:n.shipping_method??""},payments:[{code:t,name:i}],shippingAddress:O(n.shipping_address),billingAddress:O(n.billing_address)}},F={scheme:"adyen_cc"},q={adyen_cc:"adyen_additional_data_cc",adyen_hpp:"adyen_additional_data_hpp",adyen_oneclick:"adyen_additional_data_oneclick",adyen_boleto:"adyen_additional_data_boleto",adyen_pos_cloud:"adyen_additional_data_pos_cloud"};class D extends Error{constructor(a){super(a.map(t=>t.message).join(" ")),this.name="FetchError"}}class V extends Error{constructor(a){super(a),this.name="UnexpectedError"}}function R(n){throw n.every(t=>{var i;return(i=t.extensions)==null?void 0:i.category})?new D(n):new V(n[0].message)}const Q=n=>{throw n instanceof DOMException&&n.name==="AbortError"||v.emit("error",{source:"checkout",type:"network",error:n}),n},X=async(n,a,t)=>{const i=F[a]||"adyen_hpp",s=q[i],e={};e.code=i,e[s]=t;const{data:l,errors:c}=await E(C,{variables:{cartId:n,paymentMethod:e}}).catch(Q);c&&R(c);const u=G(l.placeOrder.orderV2);v.emit("checkout/order",u),v.emit("cart/reset",void 0)},S=`
query GET_CONFIGURATION {
    storeConfig {
        adyen_client_key_test
    }
}
`,$=`
query GET_CONFIGURATION {
    storeConfig {
        adyen_client_key_live
    }
}
`,Z=async n=>{const a=n===b.test?S:$,t=await E(a);if(t.errors)throw new Error(t.errors[0].message);return{clientKey:n===b.test?t.data.storeConfig.adyen_client_key_test:t.data.storeConfig.adyen_client_key_live}};export{b as E,z as a,B as b,L as c,W as d,X as e,E as f,J as g,Q as h,d as i,Z as j,K as r,j as s};
