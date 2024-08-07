import{f as m,h as g,a as e}from"./addressField.config.js";const E=r=>{var n,s;const i=((s=(n=r==null?void 0:r.data)==null?void 0:n.customer)==null?void 0:s.addresses)||[];return i.length?i.map(t=>{var d,u,c,_;let a={};return Array.isArray(t==null?void 0:t.custom_attributesV2)&&(t==null||t.custom_attributesV2.forEach(({code:h,value:f})=>{a[h]=f})),{firstname:(t==null?void 0:t.firstname)||"",lastname:(t==null?void 0:t.lastname)||"",city:(t==null?void 0:t.city)||"",company:(t==null?void 0:t.company)||"",country_code:(t==null?void 0:t.country_code)||"",region:{region:((d=t==null?void 0:t.region)==null?void 0:d.region)||"",region_code:((u=t==null?void 0:t.region)==null?void 0:u.region_code)||"",region_id:((c=t==null?void 0:t.region)==null?void 0:c.region_id)||""},telephone:(t==null?void 0:t.telephone)||"",id:(t==null?void 0:t.id)||"",vat_id:(t==null?void 0:t.vat_id)||"",postcode:(t==null?void 0:t.postcode)||"",street:(_=t==null?void 0:t.street)!=null&&_.length?t==null?void 0:t.street:[],default_shipping:(t==null?void 0:t.default_shipping)||!1,default_billing:(t==null?void 0:t.default_billing)||!1,...a}}).sort((t,a)=>(Number(a.default_billing)||Number(a.default_shipping))-(Number(t.default_billing)||Number(t.default_shipping))):[]},p=`
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
`,A=async()=>await m(p,{method:"GET",cache:"force-cache"}).then(r=>{var i;return(i=r.errors)!=null&&i.length?g(r.errors):E(r)}).catch(e),b=`
  mutation REMOVE_CUSTOMER_ADDRESS($id: Int!) {
    deleteCustomerAddress(id:$id)
  }
`,S=async r=>await m(b,{method:"POST",variables:{id:r}}).then(i=>{var o;return(o=i.errors)!=null&&o.length?g(i.errors):i.data.deleteCustomerAddress}).catch(e);export{A as g,S as r};
