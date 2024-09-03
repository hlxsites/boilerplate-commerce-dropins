import{jsx as i,jsxs as f,Fragment as y}from"@dropins/tools/preact-jsx-runtime.js";import{classes as O,Slot as C}from"@dropins/tools/lib.js";import{C as z}from"../chunks/AddressFormWrapper2.js";import"@dropins/tools/preact-compat.js";import{Card as S,Icon as g,Image as b,Header as T}from"@dropins/tools/components.js";import{S as N,c as H,E as k}from"../chunks/checkIsFunction.js";import{useText as m}from"@dropins/tools/i18n.js";import"@dropins/tools/preact.js";import{useState as A,useEffect as x}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{g as B}from"../chunks/getOrderHistoryList.js";import"../chunks/convertCase.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-customer-address.js";const v={size:"32",stroke:"2"},V=({minifiedView:o,orderNumber:r,orderToken:t,routeOrdersList:a,routeOrderDetails:e})=>{const c={minifiedView:{},fullSizeView:{}};return c.minifiedView=m({viewAllOrdersButton:"Account.OrdersList.minifiedView.viewAllOrdersButton"}),a?i("a",{className:O(["dropin-orders-list-action",["dropin-orders-list-action--minifiedView",o]]),"data-testid":"ordersListActionButtonMinifiedView",href:a(),children:i(S,{"data-testid":"ordersListActionMinifiedView",variant:"secondary",children:f("div",{className:"dropin-orders-list-action__card-wrapper",children:[i("p",{children:c.minifiedView.viewAllOrdersButton}),i(g,{source:N,...v})]})})}):i("a",{href:H(e)?e(r,t):"#",className:"dropin-orders-list-action","data-testid":"ordersListActionButton",children:i(g,{source:N,...v})})},E=({minifiedView:o,item:r,withThumbnails:t,children:a,slots:e,...c})=>{var u,d,s,L;const n={minifiedView:{},fullSizeView:{}};return n.minifiedView=m({orderNumber:"Account.OrdersList.minifiedView.OrdersListCard.orderNumber",itemsAmount:"Account.OrdersList.minifiedView.OrdersListCard.itemsAmount"}),n.fullSizeView=m({orderNumber:"Account.OrdersList.fullSizeView.OrdersListCard.orderNumber",itemsAmount:"Account.OrdersList.fullSizeView.OrdersListCard.itemsAmount"}),f(S,{...c,className:O(["dropin-orders-list-card",["dropin-orders-list-card--full",((u=r==null?void 0:r.items)==null?void 0:u.length)>6]]),variant:"secondary",children:[i("div",{className:"dropin-orders-list-card--content",children:e!=null&&e.OrdersListCard?i(C,{"data-testid":`ordersListCard${r.id}`,name:"OrdersListCard",slot:e==null?void 0:e.OrdersListCard,context:{orderHistoryListItem:r}}):f(y,{children:[i("div",{children:r==null?void 0:r.status}),i("p",{children:r==null?void 0:r.orderDate}),f("p",{children:[o?n.minifiedView.orderNumber:n.fullSizeView.orderNumber," ",r.number]}),f("p",{children:["$",(d=r==null?void 0:r.total)==null?void 0:d.grandTotal.value]}),f("p",{children:[(s=r==null?void 0:r.items)==null?void 0:s.length," ",o?n.minifiedView.itemsAmount:n.fullSizeView.itemsAmount]})]})}),t&&((L=r==null?void 0:r.items)!=null&&L.length)?i("div",{className:"dropin-orders-list-card--images","data-testid":"ordersListCardImages",children:r.items.map((l,p)=>{var w;const h=(w=l==null?void 0:l.product)==null?void 0:w.smallImage.url,I=l==null?void 0:l.productName;return i(b,{src:h,width:65,height:65,alt:I},l.id+p)})}):null,i("div",{className:"dropin-orders-list-card--actions",children:a})]})},_=({ordersInMinifiedView:o,minifiedView:r,pageSize:t})=>{const[a,e]=A([]),[c,n]=A({}),[u,d]=A(!1);return x(()=>{d(!0),B(r?o:t).then(s=>{!s||!s.items||(n(s.pageInfo),e(s.items))}).finally(()=>{d(!1)})},[r,o,t]),{loading:u,orderHistoryListItems:a,pageInfo:c}},$=({className:o,withHeader:r=!0,minifiedView:t=!1,withThumbnails:a=!0,ordersInMinifiedView:e=1,pageSize:c=10,routeOrdersList:n,routeOrderDetails:u,slots:d})=>{const s={minifiedView:{},fullSizeView:{}};s.minifiedView=m({containerTitle:"Account.OrdersList.minifiedView.containerTitle"}),s.fullSizeView=m({containerTitle:"Account.OrdersList.fullSizeView.containerTitle"});const{loading:L,orderHistoryListItems:l}=_({minifiedView:t,pageSize:c,ordersInMinifiedView:e});return f("div",{children:[r?i(T,{title:t?s.minifiedView.containerTitle:s.fullSizeView.containerTitle,divider:!t,className:t?"dropin-orders-list-header":""}):null,f("div",{className:O(["dropin-orders-list",o]),children:[L?i(z,{testId:"orderSkeletonLoader",withCard:!1}):i(k,{isEmpty:!l.length,typeList:"orders",minifiedView:t}),l.map((p,h)=>i(E,{minifiedView:t,item:p,withThumbnails:a,slots:d,children:d!=null&&d.OrdersListAction?i(C,{"data-testid":`ordersListActionSlot_${h}`,name:"OrdersListAction",slot:d==null?void 0:d.OrdersListAction,context:{orderHistoryListItem:p}}):i(V,{minifiedView:t,orderNumber:p.number,orderToken:p.token,routeOrderDetails:u})},h)),t?i(V,{minifiedView:t,routeOrdersList:n}):null]})]})},Y=({className:o,withHeader:r,minifiedView:t,withThumbnails:a,withFilter:e,ordersInMinifiedView:c,pageSize:n,routeOrdersList:u,routeOrderDetails:d,slots:s})=>i("div",{className:O(["dropin-orders-list",o]),"data-testid":"ordersListId",children:i($,{className:o,withHeader:r,minifiedView:t,withThumbnails:a,withFilter:e,ordersInMinifiedView:c,pageSize:n,routeOrdersList:u,routeOrderDetails:d,slots:s})});export{Y as OrdersList,Y as default};
