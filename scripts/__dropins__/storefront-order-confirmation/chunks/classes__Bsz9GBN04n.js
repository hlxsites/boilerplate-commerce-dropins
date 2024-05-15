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
export {
  classes as c
};
