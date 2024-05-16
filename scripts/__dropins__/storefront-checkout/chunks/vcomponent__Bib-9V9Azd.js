import { jsx, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { c as classes } from "./classes__Bsz9GBN04n.js";
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
  VComponent as V
};
//# sourceMappingURL=vcomponent__Bib-9V9Azd.js.map
