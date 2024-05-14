import"../preact-compat.js";import{c as u}from"../chunks/classes__DJBjVfEyCI.js";import{d as i,I as p}from"../chunks/image-params-keymap__DLgj2E8cak.js";import{createContext as b}from"../preact.js";import{jsx as a}from"../preact-jsx-runtime.js";import{useMemo as x}from"../preact-hooks.js";import"../chunks/preload-helper__uemlvruIqb.js";const h={ExampleComponentName:{item:{label:"string"}},Incrementer:{decreaseLabel:"Decrease Quantity",increaseLabel:"Increase Quantity",label:"Quantity"},Modal:{Close:{label:"Close"}},InlineAlert:{dismissLabel:"Dismiss Alert"},PriceSummary:{subTotal:{label:"Subtotal",withTaxes:"Including taxes",withoutTaxes:"excluding taxes"},shipping:{label:"Shipping",editZipAction:"Apply",estimated:"Estimated Shipping",estimatedDestination:"Estimated Shipping to ",destinationLinkAriaLabel:"Change destination",zipPlaceholder:"Zip Code",withTaxes:"Including taxes",withoutTaxes:"excluding taxes",alternateField:{zip:"Estimate using country/zip",state:"Estimate using country/state"}},taxes:{total:"Tax Total",totalOnly:"Tax",breakdown:"Taxes",showBreakdown:"Show Tax Breakdown",hideBreakdown:"Hide Tax Breakdown",estimated:"Estimated Tax"},total:{estimated:"Estimated Total",label:"Total",withoutTax:"Total excluding taxes"}},ProgressSpinner:{updating:{label:"Item is updating"},updatingChildren:{label:"Items are updating"}},PriceRange:{from:{label:"From"},to:{label:"to"},asLowAs:{label:"As low as"}},Swatches:{outOfStock:{label:"out of stock swatch"},selected:{label:"swatch selected"},swatch:{label:"swatch"}},Accordion:{open:{label:"Open"},close:{label:"Close"}},CartItem:{each:{label:"each"},quantity:{label:"Quantity"},remove:{label:"Remove {product} from the cart"},removeDefault:{label:"Remove item from the cart"},taxIncluded:{label:"incl. VAT"},taxExcluded:{label:"excl. tax"},updating:{label:"{product} is updating"}}},l={Dropin:h},o={default:l,en_US:l},g=e=>i(o.default,o[e]||{}),w=b({locale:"en-US"}),A=({lang:e="en_US",langDefinitions:t={},className:s,children:n,...r})=>{const d=x(()=>{const m=i(t.default,t[e]??{});return i(g(e),m)},[e,t]),c=e.replace("_","-");return a(w.Provider,{value:{locale:c},children:a(p,{definition:d,children:a("div",{...r,className:u(["dropin-design",s]),children:n})})})};export{w as UIContext,A as UIProvider};
//# sourceMappingURL=UIProvider.js.map
