import{f as s,h as a}from"./network-error.js";import{s as n}from"./setReCaptchaToken.js";import{t as i}from"./transform-attributes-form.js";import{h as o}from"./getStoreConfig.js";const u=`
  mutation CREATE_CUSTOMER($input: CustomerInput!) {
    createCustomer(input: $input) {
      customer {
        firstname
        lastname
        email
        is_subscribed
      }
    }
  }
`,m=`
  mutation CREATE_CUSTOMER_V2($input: CustomerCreateInput!) {
    createCustomerV2(input: $input) {
      customer {
        firstname
        lastname
        email
        is_subscribed
      }
    }
  }
`,_=async(r,t)=>(await n(),await s(t?m:u,{method:"POST",variables:{input:{...r}}}).catch(a)),c=`
  query GET_ATTRIBUTES_FORM($formCode: String!) {
    attributesForm(formCode: $formCode) {
      items {
        code
        default_value
        entity_type
        frontend_class
        frontend_input
        is_required
        is_unique
        label
        options {
          is_default
          label
          value
        }
      }
      errors {
        type
        message
      }
    }
  }
`,l=async r=>await s(c.replace(/\s+/g," ").trim(),{method:"GET",cache:"force-cache",variables:{formCode:r}}).then(t=>{var e;return(e=t.errors)!=null&&e.length?o(t.errors):i(t)}).catch(a),E=`
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input:$input) {
      firstname
   }
  }
`,f=async r=>await s(E,{method:"POST",variables:{input:r}}).then(t=>{var e;return(e=t.errors)!=null&&e.length?o(t.errors):t.data.createCustomerAddress.firstname||""}).catch(a);export{f as a,_ as c,l as g};
