import{events as n}from"@dropins/tools/event-bus.js";import{Initializer as y}from"@dropins/tools/lib.js";import{FetchGraphQL as p}from"@dropins/tools/fetch-graphql.js";var s=(e=>(e.test="test",e.live="live",e.europe="live",e.australia="live-au",e.unitedStates="live-us",e.asiaPacificSouthEast="live-apse",e))(s||{});const d=new y({init:async e=>{const t={environment:"test"};d.config.setConfig({...t,...e})},listeners:()=>[]}),C=d.config,{setEndpoint:G,setFetchGraphQlHeader:k,removeFetchGraphQlHeader:v,setFetchGraphQlHeaders:D,fetchGraphQl:c,getConfig:b}=new p().getMethods(),E=`
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
`,F=async e=>{const t=await c(E,{variables:{cartId:e}});if(t.errors)throw new Error(t.errors[0].message);return t},m=`
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
      token
    }
  }
}
`,u={scheme:"adyen_cc"},f={adyen_cc:"adyen_additional_data_cc",adyen_hpp:"adyen_additional_data_hpp",adyen_oneclick:"adyen_additional_data_oneclick",adyen_boleto:"adyen_additional_data_boleto",adyen_pos_cloud:"adyen_additional_data_pos_cloud"};class g extends Error{constructor(t){super(t.map(a=>a.message).join(" ")),this.name="FetchError"}}class M extends Error{constructor(t){super(t),this.name="UnexpectedError"}}function O(e){throw e.every(a=>{var r;return(r=a.extensions)==null?void 0:r.category})?new g(e):new M(e[0].message)}const T=e=>{throw e instanceof DOMException&&e.name==="AbortError"||n.emit("error",{source:"checkout",type:"network",error:e}),e},R=async(e,t,a)=>{const r=u[t]||"adyen_hpp",_=f[r],o={};o.code=r,o[_]=a;const{data:l,errors:i}=await c(m,{variables:{cartId:e,paymentMethod:o}}).catch(T);i&&O(i);const h=l.placeOrder.orderV2;n.emit("checkout/order",h),n.emit("cart/reset",void 0)},A=`
query GET_CONFIGURATION {
    storeConfig {
        adyen_client_key_test
    }
}
`,I=`
query GET_CONFIGURATION {
    storeConfig {
        adyen_client_key_live
    }
}
`,S=async e=>{const t=e===s.test?A:I,a=await c(t);if(a.errors)throw new Error(a.errors[0].message);return{clientKey:e===s.test?a.data.storeConfig.adyen_client_key_test:a.data.storeConfig.adyen_client_key_live}};export{s as E,k as a,D as b,C as c,F as d,R as e,c as f,b as g,T as h,d as i,S as j,v as r,G as s};
