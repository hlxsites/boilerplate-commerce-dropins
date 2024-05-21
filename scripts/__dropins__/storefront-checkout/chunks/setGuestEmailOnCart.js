import{a as r,M as s,f as e}from"./dispatchApiCall.js";import{f as l,k as m,l as n}from"./countries.js";import"@dropins/tools/event-bus.js";import{C as o,a as c,t as E}from"./getCheckoutData.graphql.js";const u=a=>!!(a!=null&&a.is_email_available),h=`
  query isEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`,v=async a=>{if(!a)throw new r;const{data:i,errors:t}=await l(h,{method:"GET",cache:"no-cache",variables:{email:a}}).catch(m);return t&&n(t),u(i.isEmailAvailable)},p=`
  mutation setGuestEmail($cartId: String!, $email: String!) {
    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
      cart {
        id
        ...CheckoutData
        ...CartSummaryItems
      }
    }
  }
  ${o}
  ${c}
`,y=async({cartId:a,email:i})=>{if(!a)throw new s;return await e({type:"mutation",query:p,options:{variables:{cartId:a,email:i}},path:"setGuestEmailOnCart.cart",signalType:"cart",transformer:E})};export{v as i,y as s};
//# sourceMappingURL=setGuestEmailOnCart.js.map
