import{events as A}from"@dropins/tools/event-bus.js";import{FetchGraphQL as C}from"@dropins/tools/fetch-graphql.js";const{setEndpoint:U,setFetchGraphQlHeader:p,removeFetchGraphQlHeader:w,setFetchGraphQlHeaders:q,fetchGraphQl:l,getConfig:$}=new C().getMethods(),S=`
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
        ... on CustomerAttributeMetadata {
          multiline_count
          sort_order
          validate_rules {
            name
            value
          }
        }
      }
      errors {
        type
        message
      }
    }
  }
`,d=t=>{throw t instanceof DOMException&&t.name==="AbortError"||A.emit("error",{source:"auth",type:"network",error:t}),t},c=t=>{const e=t.map(a=>a.message).join(" ");throw Error(e)};var E=(t=>(t.BOOLEAN="BOOLEAN",t.DATE="DATE",t.DATETIME="DATETIME",t.DROPDOWN="DROPDOWN",t.FILE="FILE",t.GALLERY="GALLERY",t.HIDDEN="HIDDEN",t.IMAGE="IMAGE",t.MEDIA_IMAGE="MEDIA_IMAGE",t.MULTILINE="MULTILINE",t.MULTISELECT="MULTISELECT",t.PRICE="PRICE",t.SELECT="SELECT",t.TEXT="TEXT",t.TEXTAREA="TEXTAREA",t.UNDEFINED="UNDEFINED",t.VISUAL="VISUAL",t.WEIGHT="WEIGHT",t.EMPTY="",t))(E||{});const b={code:"street_2",default_value:null,entity_type:"CUSTOMER_ADDRESS",frontend_class:null,frontend_input:"MULTILINE",is_required:!0,is_unique:!1,label:"Street Address",options:[]},B={entity_type:"CUSTOMER_ADDRESS",is_unique:!1,label:"Set as default shipping address",options:[],multiline_count:0,sort_order:140,validate_rules:[],defaultValue:!1,fieldType:E.BOOLEAN,className:"",required:!1,orderNumber:90,name:"default_shipping",id:"default_shipping",code:"default_shipping",is_hidden:!1},L={entity_type:"CUSTOMER_ADDRESS",is_unique:!1,label:"Set as default billing address",options:[],multiline_count:0,sort_order:140,validate_rules:[],defaultValue:!1,fieldType:E.BOOLEAN,className:"",required:!1,orderNumber:90,name:"default_billing",id:"default_billing",code:"default_billing",is_hidden:!1},I=t=>{var n,r,i;const e=((r=(n=t==null?void 0:t.data)==null?void 0:n.attributesForm)==null?void 0:r.items)||[];return e.length?(i=[...e,b].filter(o=>{var s;return!((s=o.frontend_input)!=null&&s.includes("HIDDEN"))}))==null?void 0:i.map(({default_value:o,frontend_input:s,frontend_class:f,is_required:T,code:u,...h})=>{const m={email:1,firstname:2,lastname:3,street:4,street_2:5}[u]||10,_=u==="country_id";return{...h,defaultValue:o||"",fieldType:s||"",className:f||"",required:T||!1,orderNumber:m,name:_?"country_code":u,id:_?"country_code":u,code:_?"country_code":u}}).sort((o,s)=>o.orderNumber-s.orderNumber):[]},R=t=>{var n;if(!(t!=null&&t.data)||!((n=t.data)!=null&&n.countries.length))return[];const{countries:e}=t.data;return e.filter(r=>{if(!r)return!1;const{two_letter_abbreviation:i,full_name_locale:o}=r;return!!i&&!!o}).map(r=>{const{two_letter_abbreviation:i,full_name_locale:o}=r;return{value:i,text:o}})},D=t=>{var a,n;return(n=(a=t==null?void 0:t.data)==null?void 0:a.country)!=null&&n.available_regions?t.data.country.available_regions.filter(r=>r?!!r.id&&!!r.code&&!!r.name:!1).map(r=>{const{id:i}=r;return{id:i,text:r.name,value:`${r.code},${r.id}`}}):[]},P=async t=>await l(S.replace(/\s+/g," ").trim(),{method:"GET",cache:"force-cache",variables:{formCode:t}}).then(e=>{var a;return(a=e.errors)!=null&&a.length?c(e.errors):I(e)}).catch(d),g=`
  mutation CREATE_CUSTOMER_ADDRESS($input: CustomerAddressInput!) {
    createCustomerAddress(input:$input) {
      firstname
    }
  }
`,H=async t=>await l(g,{method:"POST",variables:{input:t}}).then(e=>{var a,n,r;return(a=e.errors)!=null&&a.length?c(e.errors):((r=(n=e==null?void 0:e.data)==null?void 0:n.createCustomerAddress)==null?void 0:r.firstname)||""}).catch(d),y=`
  query GET_COUNTRIES_QUERY {
    countries {
      two_letter_abbreviation
      full_name_locale
    }
  }
`,Q=async()=>await l(y,{method:"GET",cache:"no-cache"}).then(t=>{var e;return(e=t.errors)!=null&&e.length?c(t.errors):R(t)}).catch(d),N=`
  query GET_REGIONS($countryCode: String!) {
    country(id: $countryCode) {
      id
      available_regions {
        id
        code
        name
      }
    }
  }
`,x=async t=>await l(N,{method:"GET",cache:"no-cache",variables:{countryCode:t}}).then(e=>{var a;return(a=e.errors)!=null&&a.length?c(e.errors):D(e)}).catch(d),O=`
  mutation UPDATE_CUSTOMER_ADDRESS($id: Int!,
  $input: CustomerAddressInput) {
    updateCustomerAddress(id:$id, input:$input) {
      firstname
   }
  }
`,k=async t=>{const{addressId:e,...a}=t;return e?await l(O,{method:"POST",variables:{id:+e,input:a}}).then(n=>{var r,i,o;return(r=n.errors)!=null&&r.length?c(n.errors):((o=(i=n==null?void 0:n.data)==null?void 0:i.updateCustomerAddress)==null?void 0:o.firstname)||""}).catch(d):""};export{E as F,d as a,p as b,q as c,P as d,H as e,l as f,$ as g,c as h,Q as i,x as j,B as k,L as l,w as r,U as s,k as u};
