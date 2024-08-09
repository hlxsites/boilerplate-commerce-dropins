import{a as r,g as s,v as e,w as l,o as n,M as o,p as m}from"./fixtures.js";import"@dropins/tools/event-bus.js";import{C as c,t as E}from"./getCart.graphql.js";const u=a=>!!(a!=null&&a.is_email_available),h=`
  query isEmailAvailable($email: String!) {
    isEmailAvailable(email: $email) {
      is_email_available
    }
  }
`,C=async a=>{if(!a)throw new r;const{data:t,errors:i}=await s(h,{method:"GET",cache:"no-cache",variables:{email:a}}).catch(e);return i&&l(i),u(t.isEmailAvailable)},p=`
  mutation setGuestEmail($cartId: String!, $email: String!) {
    setGuestEmailOnCart(input: { cart_id: $cartId, email: $email }) {
      cart {
        id
        ...CheckoutData
      }
    }
  }
  ${c}
`,f=async a=>{const t=n.cartId;if(!t)throw new o;return await m({type:"mutation",query:p,options:{variables:{cartId:t,email:a}},path:"setGuestEmailOnCart.cart",signalType:"cart",transformer:E})};export{C as i,f as s};
