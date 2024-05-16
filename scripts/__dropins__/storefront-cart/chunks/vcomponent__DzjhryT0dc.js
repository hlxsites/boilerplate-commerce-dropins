import { jsx, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
const classes = (classes2) => {
  const result = classes2.reduce((result2, item) => {
    if (!item)
      return result2;
    if (typeof item === "string")
      result2 += ` ${item}`;
    if (Array.isArray(item)) {
      const [className, isActive] = item;
      if (className && isActive) {
        result2 += ` ${className}`;
      }
    }
    return result2;
  }, "");
  return result.trim();
};
function VComponent({
  node,
  ...props
}) {
  if (!node)
    return null;
  if (Array.isArray(node)) {
    return jsx(Fragment, {
      children: node.map((n, key) => jsx(VComponent, {
        node: n,
        className: props.className,
        ...props
      }, key))
    });
  }
  props.className = classes([node.props.className, props.className]);
  return jsx(node.type, {
    ref: node.ref,
    ...node.props,
    ...props
  }, node.key);
}
export {
  VComponent as V,
  classes as c
};
//# sourceMappingURL=vcomponent__DzjhryT0dc.js.map
