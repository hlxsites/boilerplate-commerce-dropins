const __vite__fileDeps=["debugger.css"],__vite__mapDeps=i=>i.map(i=>__vite__fileDeps[i]);
import * as React from "@dropins/tools/preact-compat.js";
import { useState as useState$1, Children, useRef as useRef$1, useMemo as useMemo$1, useEffect as useEffect$1, useCallback as useCallback$1 } from "@dropins/tools/preact-compat.js";
import { Button, Icon, Price, Picker, ColorSwatch, ImageSwatch, TextSwatch, Incrementer, Breadcrumbs, Image } from "@dropins/tools/components/index.js";
import { jsx, jsxs, Fragment } from "@dropins/tools/preact-jsx-runtime.js";
import { IntlContext, useText } from "@dropins/tools/i18n.js";
import { c as classes, V as VComponent } from "../chunks/vcomponent__DzjhryT0dc.js";
import { c as getProductData, d as getRefinedProduct } from "../chunks/getRefinedProduct__DCGlQKU-jK.js";
import { events } from "@dropins/tools/event-bus.js";
import { useEffect, useRef, useState, useMemo, useContext, useCallback } from "@dropins/tools/preact-hooks.js";
import { c as config } from "../chunks/initialize__DZrQ7EkF8R.js";
import "@dropins/tools/fetch-graphql.js";
const debounce = (fn, ms) => {
  let timeoutId;
  return function(...args) {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn.apply(this, args), ms);
  };
};
const toLanguageTag = (locale) => {
  return locale.replace("_", "-");
};
const scriptRel = "modulepreload";
const assetsURL = function(dep) {
  return "/" + dep;
};
const seen = {};
const __vitePreload = function preload(baseModule, deps, importerUrl) {
  let promise = Promise.resolve();
  if (deps && deps.length > 0) {
    document.getElementsByTagName("link");
    const cspNonceMeta = document.querySelector("meta[property=csp-nonce]");
    const cspNonce = (cspNonceMeta == null ? void 0 : cspNonceMeta.nonce) || (cspNonceMeta == null ? void 0 : cspNonceMeta.getAttribute("nonce"));
    promise = Promise.all(deps.map((dep) => {
      dep = assetsURL(dep);
      if (dep in seen)
        return;
      seen[dep] = true;
      const isCss = dep.endsWith(".css");
      const cssSelector = isCss ? '[rel="stylesheet"]' : "";
      if (document.querySelector(`link[href="${dep}"]${cssSelector}`)) {
        return;
      }
      const link = document.createElement("link");
      link.rel = isCss ? "stylesheet" : scriptRel;
      if (!isCss) {
        link.as = "script";
        link.crossOrigin = "";
      }
      link.href = dep;
      if (cspNonce) {
        link.setAttribute("nonce", cspNonce);
      }
      document.head.appendChild(link);
      if (isCss) {
        return new Promise((res, rej) => {
          link.addEventListener("load", res);
          link.addEventListener("error", () => rej(new Error(`Unable to preload CSS for ${dep}`)));
        });
      }
    }));
  }
  return promise.then(() => baseModule()).catch((err) => {
    const e = new Event("vite:preloadError", { cancelable: true });
    e.payload = err;
    window.dispatchEvent(e);
    if (!e.defaultPrevented) {
      throw err;
    }
  });
};
function useSlot(context = {}, callback, render) {
  const elementRef = useRef(null);
  const loadedRef = useRef(false);
  const methodsRef = useRef([]);
  const [props, _setProps] = useState({
    children: [render == null ? void 0 : render({})]
  });
  const [_state, setState] = useState({});
  const state = useMemo(() => ({
    get: (key) => _state[key],
    set: (key, value) => {
      setState({
        ...state,
        [key]: value
      });
    }
  }), [_state]);
  const {
    intl
  } = useContext(IntlContext);
  context.dictionary = intl.dictionary;
  context._setProps = _setProps;
  const _registerMethod = useCallback((callback2) => {
    if (typeof callback2 === "function") {
      methodsRef.current.push(callback2);
    } else {
      console.warn("Skipped: Invalid _registerMethod", callback2);
    }
  }, []);
  context._registerMethod = _registerMethod;
  const _htmlElementToVNode = useCallback((elem) => {
    return jsx("div", {
      "data-slot-html-element": elem.tagName.toLowerCase(),
      ref: (refElem) => {
        refElem == null ? void 0 : refElem.appendChild(elem);
      }
    });
  }, []);
  context._htmlElementToVNode = _htmlElementToVNode;
  context.getSlotElement = useCallback((key) => {
    const element = document.querySelector(`[data-slot-key="${key}"]`);
    if (!element)
      return;
    return {
      appendChild: (elem) => {
        element.appendChild(elem);
      },
      prependChild: (elem) => {
        element.insertBefore(elem, element.firstChild);
      },
      appendSibling: (elem) => {
        const parent = element.parentNode;
        parent == null ? void 0 : parent.insertBefore(elem, element.nextSibling);
      },
      prependSibling: (elem) => {
        const parent = element.parentNode;
        parent == null ? void 0 : parent.insertBefore(elem, element);
      }
    };
  }, []);
  context.onChange = useCallback((callback2) => {
    methodsRef.current.push(callback2);
  }, []);
  context.replaceWith = useCallback((elem) => {
    _registerMethod((next) => {
      const children = _htmlElementToVNode(elem);
      next._setProps({
        children: [children]
      });
    });
  }, [_htmlElementToVNode, _registerMethod]);
  context.appendChild = useCallback((elem) => {
    _registerMethod((next) => {
      const vnode = _htmlElementToVNode(elem);
      next._setProps((prev) => {
        return {
          ...prev,
          children: [...prev.children, vnode]
        };
      });
    });
  }, [_htmlElementToVNode, _registerMethod]);
  context.prependChild = useCallback((elem) => {
    _registerMethod((next) => {
      const vnode = _htmlElementToVNode(elem);
      next._setProps((prev) => {
        return {
          ...prev,
          children: [vnode, ...prev.children]
        };
      });
    });
  }, [_htmlElementToVNode, _registerMethod]);
  context.appendSibling = useCallback((elem) => {
    _registerMethod(() => {
      var _a, _b;
      const parent = (_a = elementRef.current) == null ? void 0 : _a.parentNode;
      parent == null ? void 0 : parent.insertBefore(elem, ((_b = elementRef.current) == null ? void 0 : _b.nextSibling) ?? null);
    });
  }, [_registerMethod]);
  context.prependSibling = useCallback((elem) => {
    _registerMethod(() => {
      var _a;
      const parent = (_a = elementRef.current) == null ? void 0 : _a.parentNode;
      parent == null ? void 0 : parent.insertBefore(elem, elementRef.current);
    });
  }, [_registerMethod]);
  useEffect(() => {
    const element = elementRef.current;
    if (!callback || !element)
      return;
    try {
      callback(context, element);
    } catch (error) {
      console.error(`Error in "${callback.name}" Slot callback`, error);
    }
  }, []);
  useEffect(() => {
    _setProps({
      children: [render == null ? void 0 : render(props)]
    });
    methodsRef.current.forEach((method) => {
      method(context, state);
    });
    if ((render == null ? void 0 : render.name) === "render" && loadedRef.current === false) {
      loadedRef.current = true;
    }
  }, [JSON.stringify(context), JSON.stringify(_state), loadedRef.current]);
  return [elementRef, props];
}
function Slot({
  name,
  slot,
  context,
  children,
  render,
  ...props
}) {
  const [elementRef, slotProps] = useSlot(context, slot, render ?? (() => children));
  useEffect(() => {
    if (!name)
      console.warn('Slot "name" is required');
  }, [name]);
  return jsx("div", {
    ...props,
    ref: elementRef,
    "data-slot": name,
    children: slotProps.children
  });
}
window.DROPINS = window.DROPINS || {};
window.DROPINS.showSlots = async (state) => {
  window.sessionStorage.setItem("dropin-debugger--show-slots", state.toString());
  document.body.classList.toggle("dropin-debugger--show-slots", state);
  if (state) {
    try {
      await __vitePreload(() => Promise.resolve({}), true ? __vite__mapDeps([0]) : void 0);
    } catch (error) {
    }
  }
};
window.DROPINS.showSlots(window.sessionStorage.getItem("dropin-debugger--show-slots") === "true");
const SvgChevronDown = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { d: "M7.74512 9.87701L12.0001 14.132L16.2551 9.87701", stroke: "currentColor", strokeWidth: 1.5, strokeLinecap: "square", strokeLinejoin: "round" }));
const SvgClose = (props) => /* @__PURE__ */ React.createElement("svg", { width: 24, height: 24, viewBox: "0 0 24 24", fill: "none", xmlns: "http://www.w3.org/2000/svg", ...props }, /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3599 5.64001L5.62988 18.37", stroke: "currentColor" }), /* @__PURE__ */ React.createElement("path", { vectorEffect: "non-scaling-stroke", d: "M18.3599 18.37L5.62988 5.64001", stroke: "currentColor" }));
const Carousel = ({
  show = 1,
  scrollbar = false,
  peak = false,
  arrows = false,
  controls = "dots",
  arrowsOnMainImage = false,
  loop = false,
  gap = null,
  direction = "horizontal",
  width = "100%",
  height = "100%",
  defaultIndex = 0,
  className,
  children,
  thumbnails = null,
  isZoomed,
  ...props
}) => {
  const Label = useText("PDP.Carousel.label").label;
  const SlideLabel = useText("PDP.Carousel.Slide.label").label;
  const PreviousLabel = useText("PDP.Carousel.Previous.label").label;
  const NextLabel = useText("PDP.Carousel.Next.label").label;
  const ControlsLabel = useText("PDP.Carousel.Controls.label").label;
  const ControlsBtnLabel = useText("PDP.Carousel.Controls.Button.label").label;
  const [perPage, setPerPage] = useState$1(() => getPerPageFromBreakpoint(show));
  const length = Math.ceil(Children.toArray(children).length / perPage);
  const gapSizes = {
    small: 16,
    medium: 24,
    large: 64
  };
  const peakWidth = peak ? 24 : 0;
  const gapWidth = gap ? gapSizes[gap] : 0;
  const rest = Children.toArray(children).length % perPage;
  const thumbGap = 16;
  const thumbSeen = 2;
  const iconSize = "32";
  const [current, setCurrent] = useState$1(loop ? defaultIndex + 1 : defaultIndex);
  const thumbnailsRefs = useRef$1([]);
  const [thumbWidth, setThumbWidth] = useState$1(0);
  const [thumbHeight, setThumbHeight] = useState$1(0);
  const thumbnailSlides = useMemo$1(() => {
    return Children.toArray(thumbnails);
  }, [thumbnails]);
  const slides = useMemo$1(() => {
    const returnValue = Children.toArray(children).reduce((acc, child, i) => {
      if (i % perPage === 0) {
        return [...acc, [child]];
      }
      return [...acc.slice(0, -1), [...acc[acc.length - 1], child]];
    }, []);
    if (!loop || returnValue.length === 1) {
      return returnValue;
    }
    if (loop && !(Children.toArray(children).length % perPage !== 0)) {
      return [returnValue[length - 1]].concat(returnValue).concat([returnValue[0], returnValue[1]]);
    }
    return [Children.toArray(children).slice(-perPage)].concat(returnValue).concat([returnValue[0], returnValue[1]]);
  }, [children, perPage, length, loop]);
  const wrapperRef = useRef$1(null);
  const thumbnailsWrapperRef = useRef$1(null);
  const thumbnailControls = controls === "thumbnailsRow" || controls === "thumbnailsColumn";
  useEffect$1(() => {
    const wrapper = document.body;
    const handleResize = debounce(() => {
      var _a, _b;
      setThumbWidth(((_a = wrapperRef.current) == null ? void 0 : _a.offsetWidth) ?? 0);
      setThumbHeight(((_b = wrapperRef.current) == null ? void 0 : _b.offsetHeight) ?? 0);
      const width2 = window.innerWidth;
      const newPerPage = getPerPageFromBreakpoint(show, width2);
      if (newPerPage !== perPage) {
        setPerPage(newPerPage);
      }
    }, 50);
    const observer = new ResizeObserver(handleResize);
    observer.observe(wrapper);
    return () => {
      observer.unobserve(wrapper);
    };
  }, [perPage, show]);
  const handleThumbnailsScroll = useCallback$1((nextSlideIndex) => {
    const nextItem = loop ? nextSlideIndex - 1 : nextSlideIndex;
    const thumbnailRef = thumbnailsRefs == null ? void 0 : thumbnailsRefs.current[0];
    const oneItemWidth = (thumbnailRef == null ? void 0 : thumbnailRef.offsetWidth) + thumbGap;
    const oneItemHeight = (thumbnailRef == null ? void 0 : thumbnailRef.offsetHeight) + thumbGap;
    const thumbnailsWrapper = thumbnailsWrapperRef.current;
    if (controls === "thumbnailsRow" && (thumbnailsWrapper == null ? void 0 : thumbnailsWrapper.offsetWidth)) {
      if (oneItemWidth * (nextItem + 1) > thumbnailsWrapper.offsetWidth) {
        thumbnailsWrapper.style.scrollBehavior = "smooth";
        thumbnailsWrapper.scrollLeft = (nextItem + thumbSeen) * oneItemWidth;
      }
      if (thumbnailsWrapper.scrollLeft > oneItemWidth * nextItem) {
        thumbnailsWrapper.style.scrollBehavior = "smooth";
        thumbnailsWrapper.scrollLeft = (nextItem - thumbSeen) * oneItemWidth;
      }
    }
    if (controls === "thumbnailsColumn" && (thumbnailsWrapper == null ? void 0 : thumbnailsWrapper.offsetHeight)) {
      if (oneItemHeight * (nextItem + 1) > thumbnailsWrapper.offsetHeight) {
        thumbnailsWrapper.style.scrollBehavior = "smooth";
        thumbnailsWrapper.scrollTop = (nextItem + thumbSeen) * oneItemHeight;
      }
      if (thumbnailsWrapper.scrollTop > oneItemHeight * nextItem) {
        thumbnailsWrapper.style.scrollBehavior = "smooth";
        thumbnailsWrapper.scrollTop = (nextItem - thumbSeen) * oneItemHeight;
      }
    }
  }, [controls, loop]);
  const handleScrollTo = useCallback$1((nextSlideIndex, smooth, reset) => {
    if (controls === "thumbnailsRow" || controls === "thumbnailsColumn") {
      handleThumbnailsScroll(nextSlideIndex);
    }
    const wrapper = wrapperRef.current;
    const realWidth = peakWidth ? wrapper.offsetWidth - peakWidth : wrapper.offsetWidth - peakWidth + gapWidth;
    const items = Array.from(wrapper.querySelectorAll("[data-index]")).filter((element) => {
      const dataIndex = Number(element.getAttribute("data-index"));
      return !isNaN(dataIndex) && dataIndex > -1;
    });
    const item = items[nextSlideIndex];
    if (!item) {
      return;
    }
    if (reset) {
      const futureIndex = nextSlideIndex === 0 ? length : 0;
      const scrollWidth = realWidth * (length + (rest ? rest : perPage) / perPage);
      if (wrapper.scrollLeft >= 0 && wrapper.scrollLeft < realWidth - 5) {
        handleScrollTo(1, true);
        return;
      }
      if (wrapper.scrollLeft > scrollWidth - realWidth && wrapper.scrollLeft <= scrollWidth) {
        handleScrollTo(length, true);
        return;
      }
      wrapper.style.scrollBehavior = "auto";
      wrapper.scrollLeft = futureIndex === 0 ? 0 : scrollWidth;
      handleScrollTo(futureIndex === 0 ? 1 : length, true);
      return;
    }
    const diff = (wrapper.offsetWidth - gapWidth) / perPage * slides[nextSlideIndex].length - peakWidth;
    wrapper.style.scrollBehavior = smooth ? "smooth" : "auto";
    wrapper.scrollLeft = slides[nextSlideIndex].length === perPage ? realWidth * nextSlideIndex : realWidth * (nextSlideIndex - 1) + diff;
    return;
  }, [gapWidth, length, peakWidth, perPage, rest, slides, handleThumbnailsScroll, controls]);
  const handleGoToPrev = useCallback$1(() => {
    if (loop) {
      const nextSlideIndex2 = current - 1;
      handleScrollTo(nextSlideIndex2, true, current === 1);
      return;
    }
    const nextSlideIndex = current <= 0 ? 0 : current - 1;
    handleScrollTo(nextSlideIndex, true);
  }, [current, handleScrollTo, loop]);
  const handleGoToNext = useCallback$1(() => {
    const lastSlideIndex = slides.length - 1;
    if (loop) {
      const nextSlideIndex2 = current + 1;
      handleScrollTo(nextSlideIndex2, true, current === length);
      return;
    }
    const nextSlideIndex = current >= lastSlideIndex ? lastSlideIndex : current + 1;
    handleScrollTo(nextSlideIndex, true);
  }, [slides.length, loop, current, handleScrollTo, length]);
  useEffect$1(() => {
    const handleKeyDown = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        handleGoToPrev();
      }
      if (event.key === "ArrowRight") {
        event.preventDefault();
        handleGoToNext();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleGoToNext, handleGoToPrev]);
  useEffect$1(() => {
    handleScrollTo(loop ? defaultIndex + 1 : defaultIndex, false);
  }, [defaultIndex, handleScrollTo, loop]);
  const handleOnScroll = debounce(() => {
    const wrapper = wrapperRef.current;
    const realWidth = peakWidth ? wrapper.offsetWidth - peakWidth : wrapper.offsetWidth - peakWidth + gapWidth;
    const dividing = wrapper.scrollLeft / realWidth;
    const nextSlideIndex = Math.round(dividing) - dividing < 1 ? Math.round(dividing) : Math.ceil(dividing);
    if (thumbnailControls) {
      handleThumbnailsScroll(nextSlideIndex);
    }
    if (loop) {
      const totalWidth = realWidth * (length + (rest ? rest : perPage) / perPage);
      if (Math.ceil(wrapper.scrollLeft) >= Math.ceil(totalWidth) - 5) {
        wrapper.style.scrollBehavior = "auto";
        wrapper.scrollLeft = wrapper.offsetWidth * 1 + (Math.ceil(wrapper.scrollLeft) - Math.ceil(totalWidth) - peakWidth);
        return;
      }
      if (wrapper.scrollLeft === 0) {
        wrapper.style.scrollBehavior = "auto";
        wrapper.scrollLeft = totalWidth - wrapper.offsetWidth + peakWidth;
        return;
      }
    }
    if (current !== nextSlideIndex) {
      setCurrent(nextSlideIndex);
    }
  }, 100);
  useEffect$1(() => {
    const wrapper = wrapperRef.current;
    wrapper == null ? void 0 : wrapper.addEventListener("scroll", handleOnScroll);
    return () => {
      wrapper == null ? void 0 : wrapper.removeEventListener("scroll", handleOnScroll);
    };
  }, [handleOnScroll]);
  const getArrow = (forThumbnails, direction2, callback) => {
    return jsx(Button, {
      className: classes([["pdp-carousel__button", !forThumbnails], [`pdp-carousel__button--${direction2}`, !forThumbnails], [`pdp-carousel__button--${controls}`, forThumbnails]]),
      style: {
        "--height": `${thumbHeight}px`
      },
      variant: "tertiary",
      "aria-label": direction2 === "next" ? NextLabel : PreviousLabel,
      onClick: callback,
      disabled: loop ? false : direction2 === "next" ? current >= slides.length - 1 : current < 1,
      children: jsx(Icon, {
        className: classes([["pdp-carousel__button__icon", !forThumbnails], [`pdp-carousel__button__icon--${direction2}`, !forThumbnails], [`pdp-carousel__button__icon--${controls}--${direction2}`, forThumbnails]]),
        size: iconSize,
        source: SvgChevronDown
      })
    });
  };
  const prevArrow = arrows && slides.length != 1 && getArrow(thumbnailControls, "prev", handleGoToPrev);
  const nextArrow = arrows && slides.length != 1 && getArrow(thumbnailControls, "next", handleGoToNext);
  const prevArrowMainImage = arrows && slides.length != 1 && getArrow(false, "prev", handleGoToPrev);
  const nextArrowMainImage = arrows && slides.length != 1 && getArrow(false, "next", handleGoToNext);
  return jsxs("div", {
    role: "region",
    "aria-roledescription": Label,
    className: classes(["pdp-carousel", ["pdp-carousel--main-image-controls", arrowsOnMainImage], ["pdp-carousel--arrows", arrows && !thumbnailControls], [`pdp-carousel--${controls}`, thumbnailControls], className]),
    style: {
      "--flex-carousel": controls === "thumbnailsColumn" ? "row-reverse" : "column",
      "--gap": thumbnailControls ? "0" : "var(--spacing-small)",
      "--width": width
    },
    ...props,
    children: [jsx("div", {
      ref: wrapperRef,
      className: classes(["pdp-carousel__wrapper", `pdp-carousel__wrapper--${direction}`, ["pdp-carousel__wrapper--scrollbar", scrollbar], ["pdp-carousel__wrapper--peak", peak]]),
      style: {
        "--total-width": controls === "thumbnailsColumn" ? `81.6%` : `100%`,
        "--height": controls === "thumbnailsColumn" ? "auto" : height,
        "--gap": gap ? `var(--spacing-${gap})` : "0px",
        "--per-page": perPage
      },
      tabIndex: 0,
      children: slides.map((page, index) => {
        const orphan = page.length < perPage;
        return jsx("div", {
          role: "group",
          "aria-roledescription": SlideLabel,
          "data-index": index,
          className: classes(["pdp-carousel__slide", `pdp-carousel__slide--${direction}`, ["pdp-carousel__slide--active", current === index], ["pdp-carousel__slide--orphan", orphan]]),
          style: {
            "--length": page.length
          },
          children: page
        }, index);
      })
    }), !thumbnailControls && jsxs(Fragment, {
      children: [prevArrow, nextArrow]
    }), thumbnailControls && arrowsOnMainImage && jsxs(Fragment, {
      children: [prevArrowMainImage, nextArrowMainImage]
    }), controls && slides.length != 1 && jsxs("div", {
      className: classes([[`pdp-carousel__controls__container--${controls}`, thumbnailControls], ["pdp-carousel__controls__container--no-arrows", !arrows || arrowsOnMainImage]]),
      style: {
        "--width": controls === "thumbnailsRow" ? `${thumbWidth}px` : width,
        "--height": `${thumbHeight}px`,
        "--nr-thumbnails": thumbnailSlides.length
      },
      children: [(thumbnailControls || isZoomed) && !arrowsOnMainImage && prevArrow, jsx("div", {
        ref: thumbnailsWrapperRef,
        className: classes([[`pdp-carousel__controls__wrapper--${controls}`, thumbnailControls], [`pdp-carousel__controls__wrapper`, thumbnailControls]]),
        children: jsx("div", {
          role: "group",
          "aria-label": ControlsLabel,
          className: classes(["pdp-carousel__controls", [`pdp-carousel__controls--${controls}`, thumbnailControls]]),
          children: (loop ? slides.slice(0, length) : slides).map((_, key) => {
            const buttonsLength = loop ? length : slides.length;
            const active = loop ? current - 1 === key : current === key;
            if (!thumbnailControls) {
              return jsx("button", {
                "aria-label": ControlsBtnLabel.replace("{key}", String(key + 1)).replace("{total}", String(buttonsLength)),
                onClick: () => {
                  handleScrollTo(loop ? key + 1 : key, true);
                },
                className: classes(["pdp-carousel__controls__button", ["pdp-carousel__controls__button--active", active]])
              }, key);
            }
            return jsxs("label", {
              className: classes(["pdp-carousel__thumbnail__container"]),
              ref: (el) => {
                if (el) {
                  thumbnailsRefs.current[key] = el;
                }
              },
              children: [jsx("input", {
                type: "radio",
                name: "carousel-thumbnails",
                "aria-label": ControlsBtnLabel.replace("{key}", String(key + 1)).replace("{total}", String(buttonsLength)),
                checked: active && thumbWidth !== 0,
                onChange: () => {
                  handleScrollTo(loop ? key + 1 : key, true);
                },
                ...props,
                className: classes(["pdp-carousel__thumbnail", ["pdp-carousel__thumbnail--selected", active && thumbWidth !== 0]])
              }), jsx("span", {
                className: classes(["pdp-carousel__thumbnail__span"]),
                children: thumbnailSlides[key]
              })]
            }, key);
          })
        })
      }), (thumbnailControls || isZoomed) && !arrowsOnMainImage && nextArrow]
    })]
  });
};
function getPerPageFromBreakpoint(breakpoints, width = 0) {
  if (typeof breakpoints === "number")
    return breakpoints;
  const {
    small,
    medium,
    large
  } = breakpoints;
  const mediumViewport = 786;
  const largeVierport = 1024;
  if (width > largeVierport)
    return large;
  if (width > mediumViewport)
    return medium;
  return small;
}
const Product = ({
  title,
  breadcrumbs,
  galleryContent,
  infoContent,
  productContent,
  sku,
  outOfStock,
  hideSku,
  shortDescription,
  description,
  attributes,
  images,
  options,
  price,
  specialPrice,
  className,
  children,
  quantity,
  actions,
  carouselConfig,
  ...props
}) => {
  var _a, _b, _c, _d, _e, _f;
  const RegularPriceLabel = useText("PDP.Product.RegularPrice.label").label;
  const SpecialPriceLabel = useText("PDP.Product.SpecialPrice.label").label;
  const OutOfStockLabel = useText("PDP.Product.OutOfStock.label").label;
  const ImagesLabel = useText("PDP.Product.Image.label").label;
  const [zoom, setZoom] = useState$1(null);
  const galleryImages = (images == null ? void 0 : images.length) ? images.map((image, key) => {
    var _a2;
    return jsx(VComponent, {
      node: image,
      loading: key === 0 ? "eager" : "lazy",
      alt: ((_a2 = title == null ? void 0 : title.props) == null ? void 0 : _a2.children) && (ImagesLabel == null ? void 0 : ImagesLabel.replace("{product}", title.props.children.toString()).replace("{key}", String(key + 1)).replace("{total}", String(images.length))),
      onClick: () => setZoom(key)
    }, key);
  }) : jsx("img", {
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    className: "pdp-product__images__placeholder",
    "aria-hidden": true
  });
  const localThumbnailsImages = ((_a = carouselConfig == null ? void 0 : carouselConfig.thumbnails) == null ? void 0 : _a.length) ? carouselConfig.thumbnails.map((image, key) => {
    var _a2;
    return jsx(VComponent, {
      node: image,
      loading: (carouselConfig == null ? void 0 : carouselConfig.thumbnailsLoadingMode) || "lazy",
      alt: ((_a2 = title == null ? void 0 : title.props) == null ? void 0 : _a2.children) && (ImagesLabel == null ? void 0 : ImagesLabel.replace("{product}", title.props.children.toString()).replace("{key}", String(key + 1)).replace("{total}", String(images.length)))
    }, key);
  }) : jsx("img", {
    src: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",
    className: "pdp-product__images__placeholder",
    "aria-hidden": true
  });
  return jsxs("div", {
    ...props,
    className: classes(["pdp-product", className]),
    children: [breadcrumbs && jsx(VComponent, {
      node: breadcrumbs,
      className: "pdp-product__breadcrumbs"
    }), jsxs("div", {
      className: "pdp-product__column-container pdp-product__gallery-column",
      children: [jsx("div", {
        className: "pdp-product__column-body",
        children: (carouselConfig == null ? void 0 : carouselConfig.controls) ? jsx(Carousel, {
          className: "pdp-product__overlay__carousel",
          arrows: (images == null ? void 0 : images.length) > 1,
          controls: (images == null ? void 0 : images.length) > 1 ? carouselConfig.controls : "dots",
          arrowsOnMainImage: carouselConfig == null ? void 0 : carouselConfig.arrowsOnMainImage,
          loop: (carouselConfig == null ? void 0 : carouselConfig.loopable) && (images == null ? void 0 : images.length) > 1,
          peak: ((_b = carouselConfig == null ? void 0 : carouselConfig.thumbnails) == null ? void 0 : _b.length) > 1 && ((_c = carouselConfig == null ? void 0 : carouselConfig.peak) == null ? void 0 : _c.desktop) || false,
          gap: (carouselConfig == null ? void 0 : carouselConfig.gap) || null,
          width: "100%",
          height: "100%",
          defaultIndex: zoom || 0,
          thumbnails: localThumbnailsImages,
          children: galleryImages
        }) : jsx(GalleryGrid, {
          className: "pdp-product__images",
          gap: "small",
          children: galleryImages
        })
      }), galleryContent && jsx(VComponent, {
        node: galleryContent,
        className: "pdp-product__gallery-content"
      })]
    }), jsxs("div", {
      className: "pdp-product__column-container pdp-product__content-column",
      children: [jsxs("div", {
        className: "pdp-product__column-body",
        children: [jsxs("div", {
          className: "pdp-product__header",
          children: [jsx(VComponent, {
            node: jsx("h1", {
              children: title
            }),
            className: "pdp-product__title"
          }), !hideSku && sku && jsx(VComponent, {
            node: sku,
            className: "pdp-product__sku"
          })]
        }), jsxs("div", {
          className: "pdp-product__prices",
          children: [specialPrice && jsx(VComponent, {
            node: specialPrice,
            className: classes(["pdp-product__price-special", "pdp-product__price"]),
            "aria-label": SpecialPriceLabel,
            role: "text"
          }), price && jsx(VComponent, {
            node: price,
            className: classes(["pdp-product__price-regular", "pdp-product__price--grey"]),
            "aria-label": RegularPriceLabel,
            role: "text"
          })]
        }), (carouselConfig == null ? void 0 : carouselConfig.mobile) ? jsx(Carousel, {
          className: "pdp-product__images pdp-product__images--carousel pdp-product__images--carousel--thumbnails",
          width: "100%",
          height: "auto",
          arrows: (images == null ? void 0 : images.length) > 1,
          controls: (images == null ? void 0 : images.length) > 1 ? "thumbnailsRow" : null,
          loop: (carouselConfig == null ? void 0 : carouselConfig.loopable) && (images == null ? void 0 : images.length) > 1,
          peak: ((_d = carouselConfig == null ? void 0 : carouselConfig.thumbnails) == null ? void 0 : _d.length) > 1 && ((_e = carouselConfig == null ? void 0 : carouselConfig.peak) == null ? void 0 : _e.mobile) || false,
          gap: (carouselConfig == null ? void 0 : carouselConfig.gap) || null,
          thumbnails: localThumbnailsImages,
          children: galleryImages
        }) : jsx(Carousel, {
          className: "pdp-product__images pdp-product__images--carousel",
          peak: ((_f = carouselConfig == null ? void 0 : carouselConfig.peak) == null ? void 0 : _f.mobile) && (images == null ? void 0 : images.length) > 1,
          gap: (carouselConfig == null ? void 0 : carouselConfig.gap) || null,
          width: "100%",
          height: "auto",
          arrows: (images == null ? void 0 : images.length) > 1,
          controls: (images == null ? void 0 : images.length) > 1 ? "dots" : null,
          loop: (carouselConfig == null ? void 0 : carouselConfig.loopable) && (images == null ? void 0 : images.length) > 1,
          children: galleryImages
        }), jsxs("div", {
          className: classes(["pdp-product__actions", [`pdp-product__actions--out-of-stock`, outOfStock]]),
          children: [outOfStock && jsx("div", {
            className: "pdp-product__out-of-stock__text",
            children: OutOfStockLabel
          }), options && jsx(VComponent, {
            node: options,
            className: classes(["pdp-product__options"])
          }), quantity && jsx("div", {
            className: "pdp-product__quantity",
            children: jsx(VComponent, {
              node: quantity
            })
          }), actions && jsx(VComponent, {
            node: actions,
            className: classes(["pdp-product__buttons"])
          })]
        }), shortDescription && jsx(VComponent, {
          node: shortDescription,
          className: classes(["pdp-product__short_description"])
        }), description && jsx(VComponent, {
          node: description,
          className: classes(["pdp-product__description"])
        }), attributes ? jsx("div", {
          className: "pdp-product__attributes",
          children: attributes
        }) : null]
      }), infoContent && jsx(VComponent, {
        node: infoContent,
        className: "pdp-product__info-content"
      })]
    }), productContent && jsx(VComponent, {
      node: productContent,
      className: "pdp-product__content"
    }), zoom === null ? null : jsx(Overlay, {
      className: "pdp-product__overlay",
      onClose: () => setZoom(null),
      centered: true,
      children: jsx(Carousel, {
        className: "pdp-product__overlay__carousel",
        arrows: (images == null ? void 0 : images.length) > 1,
        width: "100%",
        height: "100%",
        defaultIndex: zoom || 0,
        loop: (images == null ? void 0 : images.length) > 1,
        controls: (images == null ? void 0 : images.length) > 1 ? "dots" : null,
        isZoomed: true,
        children: galleryImages
      })
    })]
  });
};
const GalleryGrid = ({
  children,
  gap = null,
  className,
  style,
  ...props
}) => {
  const count = Children.count(children);
  return jsx("div", {
    ...props,
    className: classes(["pdp-gallery-grid", className]),
    style: {
      "--gap": gap ? `var(--spacing-${gap})` : "0px",
      ...style
    },
    children: Children.map(children, (child, key) => jsx("div", {
      className: "pdp-gallery-grid__item",
      children: jsx(VComponent, {
        node: child,
        loading: key === 0 ? "eager" : "lazy"
      }, child.props.src)
    }, count + key))
  });
};
const PriceRange = ({
  amount,
  currency,
  locale,
  variant,
  sale,
  minimumAmount,
  maximumAmount,
  className,
  ...props
}) => {
  return jsx(Fragment, {
    children: amount || minimumAmount === maximumAmount ? jsx("div", {
      className: "pdp-price-range",
      ...props,
      children: jsx(Price, {
        amount: amount ? amount : minimumAmount,
        currency,
        locale,
        variant,
        sale,
        className
      })
    }) : jsxs("div", {
      className: "pdp-price-range",
      ...props,
      children: [jsx(Price, {
        amount: minimumAmount,
        currency,
        locale,
        className
      }), jsx("span", {
        className: "pdp-price-range__label",
        children: "-"
      }), jsx(Price, {
        amount: maximumAmount,
        currency,
        locale,
        className
      })]
    })
  });
};
const Overlay = ({
  centered,
  onClose,
  className,
  children,
  ...props
}) => {
  const CloseLabel = useText("PDP.Overlay.Close.label").label;
  const handleOnClose = useCallback$1(() => {
    onClose == null ? void 0 : onClose();
  }, [onClose]);
  useEffect$1(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        handleOnClose();
      }
    };
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [handleOnClose]);
  useEffect$1(() => {
    const scrollingElement = document.scrollingElement;
    const defaultOverflowValue = scrollingElement.style.overflow;
    scrollingElement.style.overflow = "hidden";
    return () => {
      scrollingElement.style.overflow = defaultOverflowValue;
    };
  }, []);
  return jsxs("div", {
    ...props,
    className: classes(["pdp-overlay", ["pdp-overlay--centered", centered], className]),
    children: [jsx("div", {
      className: "pdp-overlay__content",
      children
    }), jsx(Button, {
      "aria-label": CloseLabel,
      variant: "tertiary",
      className: "pdp-overlay__close-button",
      onClick: handleOnClose,
      icon: jsx(SvgClose, {})
    })]
  });
};
const supportedTypes = ["text", "image", "color", "dropdown"];
const mapToPickerOptions = (items) => {
  return items.map((item) => ({
    ...item,
    text: item.label,
    disabled: !item.inStock
  }));
};
const Swatches = ({
  options,
  hideSelectedValue,
  onValues,
  onErrors,
  defaultOptions,
  selectionsToUpdate,
  className,
  children,
  ...props
}) => {
  const RequiredLabel = useText("PDP.Swatches.Required.label").label;
  const [selections, setSelections] = useState$1(() => {
    const initial = options == null ? void 0 : options.reduce((accum, option) => {
      const {
        items
      } = option;
      const defaultSelection = items == null ? void 0 : items.find((item) => defaultOptions == null ? void 0 : defaultOptions.includes(item.id));
      const selected = items == null ? void 0 : items.find((item) => item.selected);
      if (defaultSelection) {
        return {
          ...accum,
          [option.id]: {
            label: defaultSelection.label,
            value: defaultSelection.id
          }
        };
      } else if (selected) {
        return {
          ...accum,
          [option.id]: {
            label: selected.label,
            value: selected.id
          }
        };
      }
      return accum;
    }, {});
    return initial;
  });
  useEffect$1(() => {
    selectionsToUpdate == null ? void 0 : selectionsToUpdate.forEach((selectionToUpdate) => {
      setSelections((prev) => {
        var _a;
        const selectedItem = (_a = selectionToUpdate == null ? void 0 : selectionToUpdate.items) == null ? void 0 : _a.find((item) => item.selected);
        if (!selectedItem)
          return prev;
        const next = {
          ...prev,
          [selectionToUpdate.id]: {
            label: selectedItem == null ? void 0 : selectedItem.label,
            value: selectedItem == null ? void 0 : selectedItem.id
          }
        };
        return next;
      });
    });
  }, [selectionsToUpdate, setSelections]);
  useMemo$1(() => {
    const errors = options == null ? void 0 : options.reduce((accum, option) => {
      var _a;
      (_a = option == null ? void 0 : option.items) == null ? void 0 : _a.forEach((item) => {
        var _a2;
        const selected = ((_a2 = selections[option.id]) == null ? void 0 : _a2.value) === item.id;
        if (option.required && !selected) {
          accum[option.id] = RequiredLabel;
        }
      });
      return accum;
    }, {});
    onErrors == null ? void 0 : onErrors(errors);
    return errors;
  }, [selections]);
  const handleOnSelection = useCallback$1((id, label, optionId) => {
    setSelections((prev) => {
      const next = {
        ...prev,
        [id]: {
          label,
          value: optionId
        }
      };
      onValues == null ? void 0 : onValues(next, optionId);
      return next;
    });
  }, [onValues]);
  const handlePickerSelect = (optionId, selection) => {
    var _a;
    const label = ((_a = selection.selectedOptions[0]) == null ? void 0 : _a.label) ?? "";
    handleOnSelection(optionId, label, selection.value);
  };
  const Swatches2 = useCallback$1(({
    items,
    id,
    required,
    type,
    selected,
    label
  }) => {
    return jsx("div", {
      className: classes(["pdp-swatches__options"]),
      children: (type == null ? void 0 : type.toLowerCase()) === "dropdown" ? jsx(Picker, {
        "aria-label": label,
        handleSelect: (event) => handlePickerSelect(id, event.target),
        options: mapToPickerOptions(items),
        value: selected
      }) : items == null ? void 0 : items.map((option) => {
        const common = {
          key: option.id,
          id: option.id,
          name: id,
          value: option.value,
          label: option.label,
          groupAriaLabel: label,
          selected: selected === option.id,
          outOfStock: !option.inStock,
          // API may return null, we default to true as all swatches are required.
          //  we still comply to this in case the api return "false".
          required: required === null ? true : required,
          onValue: () => {
            handleOnSelection(id, option.label, option.id);
          }
        };
        switch (type) {
          case "text":
            return jsx(TextSwatch, {
              ...common,
              label: option.label
            });
          case "image":
            return jsx(ImageSwatch, {
              ...common,
              src: option.value,
              alt: option.label
            });
          case "color":
            return jsx(ColorSwatch, {
              ...common,
              size: "large",
              color: option.value
            });
          default:
            console.warn(`Invalid swatch type ${type}`);
            return null;
        }
      })
    });
  }, [handleOnSelection]);
  return jsx("div", {
    ...props,
    className: classes(["pdp-swatches", className]),
    children: options == null ? void 0 : options.map(({
      type,
      label,
      id,
      multiple,
      required,
      items
    }) => {
      var _a;
      if (!type) {
        console.warn(`Bundle product not supported on UI.`);
        return;
      }
      if (!supportedTypes.includes(type)) {
        console.warn(`Invalid swatch type ${type}`);
      }
      if (multiple) {
        console.warn("Multiple selection swatches are not currently supported.");
      }
      return jsxs("div", {
        id: `swatch-item-${id}`,
        "data-slot-key": `product-swatch--${id}`,
        className: "pdp-swatches__field",
        children: [jsx("div", {
          className: "pdp-swatches__field__label",
          children: selections[id] ? hideSelectedValue ? `${label}` : `${label}: ${selections[id].label}` : label
        }), jsx(Swatches2, {
          id,
          type,
          required,
          items,
          label,
          selected: (_a = selections[id]) == null ? void 0 : _a.value
        })]
      }, `swatch-item-${id}`);
    })
  });
};
function toDateString(value, locale = "en_US") {
  if (!isDateValid(value))
    throw Error("Invalid date string");
  const time = value.split(" ")[1];
  if (!time)
    value = `${value} 00:00:00`;
  return new Date(value).toLocaleDateString(toLanguageTag(locale)).toString();
}
function isDateValid(dateString) {
  const acceptedFormats = [
    /^\d{4}-\d{2}-\d{2}$/,
    // YYYY-MM-DD
    /^\d{1,2}\/\d{1,2}\/\d{4}$/,
    // MM/DD/YYYY
    /^\d{2}\/\d{2}\/\d{4}$/,
    // MM/DD/YYYY
    /^\d{4}\/\d{2}\/\d{2}$/,
    // YYYY/MM/DD
    /^\d{1,2}\.\d{1,2}\.\d{4}$/,
    // DD.MM.YYYY
    /^\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}$/
    // YYYY-MM-DD HH:mm:ss
  ];
  if (!acceptedFormats.some((format) => format.test(dateString)))
    return false;
  const date = new Date(dateString);
  return !isNaN(date.getTime());
}
function setUrlParams(params) {
  const urlSearchParams = new URLSearchParams(window.location.search);
  Object.entries(params).forEach(([key, value]) => {
    if (value === null) {
      urlSearchParams.delete(key);
    } else {
      urlSearchParams.set(key, String(value));
    }
  });
  let url = window.location.pathname;
  url += `?${urlSearchParams.toString()}`;
  url += window.location.hash;
  window.history.replaceState({}, "", url);
}
function getUrlParams() {
  const urlSearchParams = new URLSearchParams(window.location.search);
  const params = {};
  urlSearchParams.forEach((value, key) => {
    params[key] = value;
  });
  return params;
}
const ProductDetails = ({
  sku,
  hideSku,
  hideQuantity,
  hideShortDescription,
  hideDescription,
  hideAttributes,
  hideURLParams,
  hideSelectedOptionValue,
  slots,
  children,
  initialData,
  carousel,
  optionsConfig,
  onAddToCart,
  ...props
}) => {
  var _a, _b, _c, _d;
  const AddToCartLabel = useText("PDP.Product.AddToCart.label").label;
  const IncrementerLabel = useText("PDP.Product.Incrementer.label").label;
  const DetailsLabel = useText("PDP.Product.Details.label").label;
  const [locale, setLocale] = useState$1(config.getConfig().defaultLocale || "en-US");
  const [selectionsToUpdate, setSelectionsToUpdate] = useState$1();
  const [data = null, setData] = useState$1(initialData);
  const [values, setValues] = useState$1(() => {
    const defaultValues = {
      sku,
      quantity: 1
    };
    if (data == null ? void 0 : data.optionUIDs) {
      defaultValues.optionsUIDs = data.optionUIDs;
    }
    return defaultValues;
  });
  const [valid, setValid] = useState$1(() => {
    var _a2, _b2;
    return !((data == null ? void 0 : data.options) && ((_a2 = data == null ? void 0 : data.options) == null ? void 0 : _a2.length) > 0 && ((_b2 = data == null ? void 0 : data.optionUIDs) == null ? void 0 : _b2.length) !== (data == null ? void 0 : data.options.length));
  });
  const defaultSlotContext = {
    data,
    values,
    valid
  };
  useEffect$1(() => {
    const localeEvent = events.on("locale", (payload) => {
      if (payload === locale)
        return;
      setLocale(payload);
      getProductData(sku).then(setData);
    });
    return () => {
      localeEvent == null ? void 0 : localeEvent.off();
    };
  }, [locale, sku]);
  const handleOnValues = useCallback$1((newValues) => {
    setValues((prev) => ({
      ...prev,
      ...newValues
    }));
  }, []);
  const handleOptionSelected = useCallback$1((selections) => {
    var _a2;
    let optionsUIDs = Object.keys(selections).map((id) => selections[id].value).filter((element) => element !== void 0);
    if (!hideURLParams) {
      setUrlParams({
        optionsUIDs: optionsUIDs.join(",")
      });
    }
    setValues((prev) => ({
      ...prev,
      optionsUIDs
    }));
    setValid((optionsUIDs == null ? void 0 : optionsUIDs.length) === ((_a2 = data == null ? void 0 : data.options) == null ? void 0 : _a2.length));
    getRefinedProduct(sku, optionsUIDs, optionsConfig == null ? void 0 : optionsConfig.anchorOptions).then((next) => {
      var _a3;
      setData(next);
      if ((_a3 = optionsConfig == null ? void 0 : optionsConfig.anchorOptions) == null ? void 0 : _a3.length) {
        processUpdates(next, optionsUIDs);
      }
    });
  }, [sku]);
  const processUpdates = useCallback$1((next, previousOptionsUIDs) => {
    var _a2;
    const updatedOptionsUIDs = (next == null ? void 0 : next.optionUIDs) ?? [];
    const haveSameValues = previousOptionsUIDs.every((item) => updatedOptionsUIDs.includes(item));
    if (!haveSameValues) {
      setSelectionsToUpdate(next == null ? void 0 : next.options);
      setValues((prev) => ({
        ...prev,
        optionsUIDs: updatedOptionsUIDs
      }));
      setValid((updatedOptionsUIDs == null ? void 0 : updatedOptionsUIDs.length) === ((_a2 = next == null ? void 0 : next.options) == null ? void 0 : _a2.length));
    }
  }, [sku]);
  const handleOnErrors = useCallback$1((_errors) => {
    if (Object.keys(_errors).length !== 0)
      setValid(false);
  }, []);
  const attributes = useMemo$1(() => {
    var _a2;
    return (_a2 = data == null ? void 0 : data.attributes) == null ? void 0 : _a2.map(({
      label,
      value
    }, key) => {
      const __html = isDateValid(value) ? toDateString(value, locale) : value.toString();
      return jsxs("li", {
        children: [label, ": ", jsx("span", {
          dangerouslySetInnerHTML: {
            __html
          }
        })]
      }, key);
    });
  }, [data == null ? void 0 : data.attributes, locale]);
  const quantity = !hideQuantity && (data == null ? void 0 : data.inStock) ? jsx(Slot, {
    name: "Quantity",
    slot: slots == null ? void 0 : slots.Quantity,
    context: {
      ...defaultSlotContext
    },
    children: jsx(Incrementer, {
      name: "quantity",
      defaultValue: values.quantity.toString(),
      min: 1,
      "aria-label": IncrementerLabel,
      className: "pdp-product__quantity",
      onValue: (quantity2) => {
        handleOnValues({
          quantity: Number(quantity2)
        });
      }
    }, "quantity")
  }) : void 0;
  const renderOptions = () => {
    if (data == null ? void 0 : data.options) {
      return jsx(Slot, {
        name: "Options",
        slot: slots == null ? void 0 : slots.Options,
        context: {
          ...defaultSlotContext
        },
        children: jsx(Swatches, {
          options: data.options,
          defaultOptions: values.optionsUIDs,
          selectionsToUpdate,
          hideSelectedValue: hideSelectedOptionValue,
          onValues: handleOptionSelected,
          onErrors: handleOnErrors
        })
      });
    }
  };
  return jsx("div", {
    ...props,
    children: jsx(Product, {
      title: jsx(Slot, {
        name: "Title",
        slot: slots == null ? void 0 : slots.Title,
        context: {
          ...defaultSlotContext
        },
        children: data == null ? void 0 : data.name
      }),
      sku: hideSku ? void 0 : jsx(Slot, {
        name: "SKU",
        slot: slots == null ? void 0 : slots.SKU,
        context: {
          ...defaultSlotContext
        },
        children: data == null ? void 0 : data.sku
      }),
      options: renderOptions(),
      breadcrumbs: (slots == null ? void 0 : slots.Breadcrumbs) && jsx(Slot, {
        name: "Breadcrumbs",
        slot: slots == null ? void 0 : slots.Breadcrumbs,
        context: {
          ...defaultSlotContext,
          setSeparator(callback) {
            this._registerMethod((...attrs) => {
              const nextSeparator = callback(...attrs);
              const separator = nextSeparator && jsx(Icon, {
                source: nextSeparator
              });
              this._setProps((prev) => {
                return {
                  ...prev,
                  separator
                };
              });
            });
          },
          appendLink(callback) {
            this._registerMethod((...attrs) => {
              const {
                text,
                ...p
              } = callback(...attrs);
              const link = jsx("a", {
                ...p,
                children: text
              });
              this._setProps((prev) => {
                return {
                  ...prev,
                  categories: [...prev.categories || [], link]
                };
              });
            });
          },
          appendHTMLElement(callback) {
            this._registerMethod((...attrs) => {
              const domElement = callback(...attrs);
              const vnode = this._htmlElementToVNode(domElement);
              this._setProps((prev) => {
                return {
                  ...prev,
                  categories: [...prev.categories || [], vnode]
                };
              });
            });
          }
        },
        render: ({
          separator,
          categories
        }) => {
          return jsx(Breadcrumbs, {
            separator,
            categories
          });
        }
      }),
      quantity,
      actions: jsx(Slot, {
        name: "Actions",
        slot: slots == null ? void 0 : slots.Actions,
        context: {
          ...defaultSlotContext,
          appendButton(callback) {
            this._registerMethod((...attrs) => {
              const _button = callback(...attrs);
              if (!_button)
                return;
              const {
                text,
                icon,
                ...buttonProps
              } = _button;
              const button = jsx(Button, {
                type: "button",
                ...buttonProps,
                icon: icon && jsx(Icon, {
                  source: icon
                }),
                children: text
              });
              this._setProps((prev) => ({
                children: [...prev.children || [], button]
              }));
            });
          }
        },
        children: (
          // Default Add to Cart button if no slot is provided
          !(slots == null ? void 0 : slots.Actions) && jsx(Button, {
            size: "medium",
            type: "submit",
            icon: jsx(Icon, {
              source: "Cart"
            }),
            disabled: !(data == null ? void 0 : data.inStock) || !valid,
            "aria-label": AddToCartLabel,
            onClick: () => {
              return onAddToCart == null ? void 0 : onAddToCart(values);
            },
            children: AddToCartLabel
          })
        )
      }),
      shortDescription: !hideShortDescription ? jsx(Slot, {
        name: "ShortDescription",
        slot: slots == null ? void 0 : slots.ShortDescription,
        context: {
          ...defaultSlotContext
        },
        children: jsx("div", {
          dangerouslySetInnerHTML: {
            __html: (data == null ? void 0 : data.shortDescription) ?? ""
          }
        })
      }) : void 0,
      description: !hideDescription ? jsx(Slot, {
        name: "Description",
        slot: slots == null ? void 0 : slots.Description,
        context: {
          ...defaultSlotContext
        },
        children: jsx("div", {
          dangerouslySetInnerHTML: {
            __html: (data == null ? void 0 : data.description) ?? ""
          }
        })
      }) : void 0,
      images: ((_a = data == null ? void 0 : data.images) == null ? void 0 : _a.map(({
        label,
        url
      }) => {
        var _a2, _b2;
        return jsx(Image, {
          title: label,
          alt: label,
          src: url,
          width: ((_a2 = carousel == null ? void 0 : carousel.imageParams) == null ? void 0 : _a2.width) ?? 960,
          height: ((_b2 = carousel == null ? void 0 : carousel.imageParams) == null ? void 0 : _b2.height) ?? 1191,
          params: (carousel == null ? void 0 : carousel.imageParams) ?? {
            width: 960
          }
        }, url);
      })) ?? [],
      specialPrice: ((_b = data == null ? void 0 : data.prices) == null ? void 0 : _b.visible) ? jsx(Slot, {
        name: "SpecialPrice",
        slot: slots == null ? void 0 : slots.SpecialPrice,
        context: {
          ...defaultSlotContext
        },
        children: jsx(PriceRange, {
          ...data.prices.final,
          locale: toLanguageTag(locale)
        })
      }) : void 0,
      price: ((_c = data == null ? void 0 : data.prices) == null ? void 0 : _c.visible) && data.prices.regular && data.prices.final.amount !== (data == null ? void 0 : data.prices.regular.amount) ? jsx(Slot, {
        name: "RegularPrice",
        slot: slots == null ? void 0 : slots.RegularPrice,
        context: {
          ...defaultSlotContext
        },
        children: jsx(PriceRange, {
          ...data.prices.regular,
          locale: toLanguageTag(locale)
        })
      }) : void 0,
      carouselConfig: {
        ...carousel,
        thumbnails: carousel ? ((_d = data == null ? void 0 : data.images) == null ? void 0 : _d.map(({
          label,
          url
        }) => {
          var _a2, _b2;
          return jsx(Image, {
            title: label,
            alt: label,
            src: url,
            width: ((_a2 = carousel == null ? void 0 : carousel.thumbnailParams) == null ? void 0 : _a2.width) ?? 200,
            height: ((_b2 = carousel == null ? void 0 : carousel.thumbnailParams) == null ? void 0 : _b2.height) ?? 248,
            params: (carousel == null ? void 0 : carousel.thumbnailParams) ?? {
              width: 200
            }
          }, url);
        })) ?? [] : []
      },
      outOfStock: !(data == null ? void 0 : data.inStock),
      attributes: !hideAttributes ? jsx(Slot, {
        name: "Attributes",
        slot: slots == null ? void 0 : slots.Attributes,
        context: {
          ...defaultSlotContext
        },
        children: (attributes == null ? void 0 : attributes.length) ? jsxs(Fragment, {
          children: [DetailsLabel, jsx("ul", {
            children: attributes
          })]
        }) : null
      }) : void 0,
      galleryContent: (slots == null ? void 0 : slots.GalleryContent) && jsx(Slot, {
        name: "GalleryContent",
        slot: slots.GalleryContent,
        context: {
          ...defaultSlotContext
        }
      }),
      infoContent: (slots == null ? void 0 : slots.InfoContent) && jsx(Slot, {
        name: "InfoContent",
        slot: slots.InfoContent,
        context: {
          ...defaultSlotContext
        }
      }),
      productContent: (slots == null ? void 0 : slots.Content) && jsx(Slot, {
        name: "Content",
        slot: slots.Content,
        context: {
          ...defaultSlotContext
        }
      })
    })
  });
};
ProductDetails.getInitialData = async function({
  sku,
  optionsConfig
}) {
  var _a, _b, _c, _d, _e, _f;
  const defaultSelections = ((_a = getUrlParams().optionsUIDs) == null ? void 0 : _a.split(",")) || ((_f = (_e = (_d = (_c = (_b = config) == null ? void 0 : _b.getConfig()) == null ? void 0 : _c.models) == null ? void 0 : _d.ProductDetails) == null ? void 0 : _e.initialData) == null ? void 0 : _f.optionsUIDs);
  if (defaultSelections == null ? void 0 : defaultSelections.length) {
    return await getRefinedProduct(sku, defaultSelections, optionsConfig == null ? void 0 : optionsConfig.anchorOptions);
  }
  return await getProductData(sku);
};
export {
  ProductDetails,
  ProductDetails as default
};
