import{k as g,f as e,h as u,a as f}from"./updateCustomerAddress.js";const h=a=>{const t={};for(const o in a){const s=a[o];!Array.isArray(s)||s.length===0||(o==="custom_attributesV2"?s.forEach(n=>{typeof n=="object"&&"value"in n&&(t[n==null?void 0:n.code]=n==null?void 0:n.value)}):s.length>1?s.forEach((n,r)=>{r===0?t[o]=n:t[`${o}_${r+1}`]=n}):t[o]=s[0])}return t},_=a=>{var s,n;const t=((n=(s=a==null?void 0:a.data)==null?void 0:s.customer)==null?void 0:n.addresses)||[];return t.length?t.map(r=>{var i,d,c;return{firstname:(r==null?void 0:r.firstname)||"",lastname:(r==null?void 0:r.lastname)||"",city:(r==null?void 0:r.city)||"",company:(r==null?void 0:r.company)||"",country_code:(r==null?void 0:r.country_code)||"",region:{region:((i=r==null?void 0:r.region)==null?void 0:i.region)||"",region_code:((d=r==null?void 0:r.region)==null?void 0:d.region_code)||"",region_id:((c=r==null?void 0:r.region)==null?void 0:c.region_id)||""},telephone:(r==null?void 0:r.telephone)||"",id:(r==null?void 0:r.id)||"",vat_id:(r==null?void 0:r.vat_id)||"",postcode:(r==null?void 0:r.postcode)||"",default_shipping:(r==null?void 0:r.default_shipping)||!1,default_billing:(r==null?void 0:r.default_billing)||!1,...h(r)}}).map(r=>g(r,"camelCase",{})).sort((r,i)=>(Number(i.defaultBilling)||Number(i.defaultShipping))-(Number(r.defaultBilling)||Number(r.defaultShipping))):[]},m=`
  query GET_CUSTOMER_ADDRESS {
    customer {
      addresses {
        firstname
        lastname
        city
        company
        country_code
        region {
          region
          region_code
          region_id
        }
        custom_attributesV2 {
          ... on AttributeValue {
            code
            value
          }
        }
        telephone
        id
        vat_id
        postcode
        street
        default_shipping
        default_billing
      }
    }
  }
`,p=async()=>await e(m,{method:"GET",cache:"force-cache"}).then(a=>{var t;return(t=a.errors)!=null&&t.length?u(a.errors):_(a)}).catch(f),E=`
  mutation REMOVE_CUSTOMER_ADDRESS($id: Int!) {
    deleteCustomerAddress(id:$id)
  }
`,S=async a=>await e(E,{method:"POST",variables:{id:a}}).then(t=>{var o;return(o=t.errors)!=null&&o.length?u(t.errors):t.data.deleteCustomerAddress}).catch(f);export{p as g,S as r};
