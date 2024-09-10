import{jsx as t,jsxs as f,Fragment as y}from"@dropins/tools/preact-jsx-runtime.js";import{classes as A,Slot as D}from"@dropins/tools/lib.js";import{P as x,C as k}from"../chunks/AddressFormWrapper2.js";import"@dropins/tools/preact-compat.js";import{Card as b,Icon as N,Image as T,Header as M,Picker as H}from"@dropins/tools/components.js";import{S as z,c as Y,E}from"../chunks/checkIsFunction.js";import{useText as L}from"@dropins/tools/i18n.js";import"@dropins/tools/preact.js";import{useState as g,useEffect as P,useMemo as B,useCallback as F}from"@dropins/tools/preact-hooks.js";import"@dropins/tools/event-bus.js";import{g as J}from"../chunks/getOrderHistoryList.js";import"../chunks/convertCase.js";import"@dropins/tools/fetch-graphql.js";import"../chunks/transform-customer-address.js";const C={size:"32",stroke:"2"},I=({minifiedView:i,orderNumber:r,orderToken:e,routeOrdersList:o,routeOrderDetails:s})=>{const a={minifiedView:{},fullSizeView:{}};return a.minifiedView=L({viewAllOrdersButton:"Account.OrdersList.minifiedView.viewAllOrdersButton"}),o?t("a",{className:A(["dropin-orders-list-action",["dropin-orders-list-action--minifiedView",i]]),"data-testid":"ordersListActionButtonMinifiedView",href:o(),children:t(b,{"data-testid":"ordersListActionMinifiedView",variant:"secondary",children:f("div",{className:"dropin-orders-list-action__card-wrapper",children:[t("p",{children:a.minifiedView.viewAllOrdersButton}),t(N,{source:z,...C})]})})}):t("a",{href:Y(s)?s(r,e):"#",className:"dropin-orders-list-action","data-testid":"ordersListActionButton",children:t(N,{source:z,...C})})},_=({minifiedView:i,item:r,withThumbnails:e,children:o,slots:s,...a})=>{var l,p,n,d;const c={minifiedView:{},fullSizeView:{}};return c.minifiedView=L({orderNumber:"Account.OrdersList.minifiedView.OrdersListCard.orderNumber",itemsAmount:"Account.OrdersList.minifiedView.OrdersListCard.itemsAmount"}),c.fullSizeView=L({orderNumber:"Account.OrdersList.fullSizeView.OrdersListCard.orderNumber",itemsAmount:"Account.OrdersList.fullSizeView.OrdersListCard.itemsAmount"}),f(b,{...a,className:A(["dropin-orders-list-card",["dropin-orders-list-card--full",((l=r==null?void 0:r.items)==null?void 0:l.length)>6]]),variant:"secondary",children:[t("div",{className:"dropin-orders-list-card--content",children:s!=null&&s.OrdersListCard?t(D,{"data-testid":`ordersListCard${r.id}`,name:"OrdersListCard",slot:s==null?void 0:s.OrdersListCard,context:{orderHistoryListItem:r}}):f(y,{children:[t("div",{children:r==null?void 0:r.status}),t("p",{children:r==null?void 0:r.orderDate}),f("p",{children:[i?c.minifiedView.orderNumber:c.fullSizeView.orderNumber," ",r.number]}),f("p",{children:["$",(p=r==null?void 0:r.total)==null?void 0:p.grandTotal.value]}),f("p",{children:[(n=r==null?void 0:r.items)==null?void 0:n.length," ",i?c.minifiedView.itemsAmount:c.fullSizeView.itemsAmount]})]})}),e&&((d=r==null?void 0:r.items)!=null&&d.length)?t("div",{className:"dropin-orders-list-card--images","data-testid":"ordersListCardImages",children:r.items.map((u,m)=>{var h;const w=(h=u==null?void 0:u.product)==null?void 0:h.smallImage.url,S=u==null?void 0:u.productName;return t(T,{src:w,width:65,height:65,alt:S},u.id+m)})}):null,t("div",{className:"dropin-orders-list-card--actions",children:o})]})},$=({ordersInMinifiedView:i,minifiedView:r,pageSize:e,selectedDate:o})=>{const[s,a]=g([]),[c,l]=g({}),[p,n]=g(!1);return P(()=>{a([]),n(!0),J(r?i:e,o).then(d=>{!d||!d.items||(l(d.pageInfo),a(d.items))}).finally(()=>{n(!1)})},[r,i,e,o]),{loading:p,orderHistoryListItems:s,pageInfo:c}},v=i=>{const r=new Date,e=new Date(r);switch(i){case"sixMonthsAgo":{e.setMonth(e.getMonth()-6);break}case"oneYearAgo":{e.setFullYear(e.getFullYear()-1);break}default:return""}return{from:e.toISOString().split("T")[0],to:r.toISOString().split("T")[0]}},j=()=>{const i=L({pastSixMonths:"Account.OrdersList.fullSizeView.OrdersListSelectDate.pastSixMonths",currentYear:"Account.OrdersList.fullSizeView.OrdersListSelectDate.currentYear",viewAll:"Account.OrdersList.fullSizeView.OrdersListSelectDate.viewAll"}),[r,e]=g(JSON.stringify(v("sixMonthsAgo"))),o=B(()=>[{value:JSON.stringify(v("sixMonthsAgo")),text:i.pastSixMonths},{value:JSON.stringify(v("oneYearAgo")),text:i.currentYear},{value:"",text:i.viewAll}],[i]),s=F(a=>{const l=a.target.value;e(l)},[]);return{selectableDateList:o,selectedDate:r,handleSelectDate:s}},R=({className:i,withHeader:r=!0,minifiedView:e=!1,withThumbnails:o=!0,withFilter:s=!0,ordersInMinifiedView:a=1,pageSize:c=10,routeOrdersList:l,routeOrderDetails:p,slots:n})=>{const d={minifiedView:{},fullSizeView:{}};d.minifiedView=L({containerTitle:"Account.OrdersList.minifiedView.containerTitle"}),d.fullSizeView=L({containerTitle:"Account.OrdersList.fullSizeView.containerTitle"}),d.fullSizeView=L({titleSelectOrder:"Account.OrdersList.fullSizeView.titleSelectOrder"});const{selectableDateList:u,selectedDate:m,handleSelectDate:w}=j(),{loading:S,orderHistoryListItems:h}=$({minifiedView:e,pageSize:c,ordersInMinifiedView:a,selectedDate:m});return f("div",{children:[r?t(M,{title:e?d.minifiedView.containerTitle:d.fullSizeView.containerTitle,divider:!e,className:e?"dropin-orders-list-header":""}):null,f("div",{className:A(["dropin-orders-list",i]),children:[!e&&s?t("div",{className:"dropin-orders-list--date-select",children:S?t(x,{"data-testid":"selectPickerLoader"}):f(y,{children:[t("span",{children:d.fullSizeView.titleSelectOrder}),t(H,{value:m,name:"orderDatePicker",options:u,handleSelect:w})]})}):null,S?t(k,{testId:"orderSkeletonLoader",withCard:!1}):t(E,{isEmpty:!h.length,typeList:"orders",minifiedView:e}),h.map((O,V)=>t(_,{minifiedView:e,item:O,withThumbnails:o,slots:n,children:n!=null&&n.OrdersListAction?t(D,{"data-testid":`ordersListActionSlot_${V}`,name:"OrdersListAction",slot:n==null?void 0:n.OrdersListAction,context:{orderHistoryListItem:O}}):t(I,{minifiedView:e,orderNumber:O.number,orderToken:O.token,routeOrderDetails:p})},V)),e?t(I,{minifiedView:e,routeOrdersList:l}):null]})]})},dr=({className:i,withHeader:r,minifiedView:e,withThumbnails:o,withFilter:s,ordersInMinifiedView:a,pageSize:c,routeOrdersList:l,routeOrderDetails:p,slots:n})=>t("div",{className:A(["dropin-orders-list",i]),"data-testid":"ordersListId",children:t(R,{className:i,withHeader:r,minifiedView:e,withThumbnails:o,withFilter:s,ordersInMinifiedView:a,pageSize:c,routeOrdersList:l,routeOrderDetails:p,slots:n})});export{dr as OrdersList,dr as default};
