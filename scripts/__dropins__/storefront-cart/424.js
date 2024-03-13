export const id = 424;
export const ids = [424];
export const modules = {

/***/ 8528:
/***/ ((module) => {



var isMergeableObject = function isMergeableObject(value) {
	return isNonNullObject(value)
		&& !isSpecial(value)
};

function isNonNullObject(value) {
	return !!value && typeof value === 'object'
}

function isSpecial(value) {
	var stringValue = Object.prototype.toString.call(value);

	return stringValue === '[object RegExp]'
		|| stringValue === '[object Date]'
		|| isReactElement(value)
}

// see https://github.com/facebook/react/blob/b5ac963fb791d1298e7f396236383bc955f916c1/src/isomorphic/classic/element/ReactElement.js#L21-L25
var canUseSymbol = typeof Symbol === 'function' && Symbol.for;
var REACT_ELEMENT_TYPE = canUseSymbol ? Symbol.for('react.element') : 0xeac7;

function isReactElement(value) {
	return value.$$typeof === REACT_ELEMENT_TYPE
}

function emptyTarget(val) {
	return Array.isArray(val) ? [] : {}
}

function cloneUnlessOtherwiseSpecified(value, options) {
	return (options.clone !== false && options.isMergeableObject(value))
		? deepmerge(emptyTarget(value), value, options)
		: value
}

function defaultArrayMerge(target, source, options) {
	return target.concat(source).map(function(element) {
		return cloneUnlessOtherwiseSpecified(element, options)
	})
}

function getMergeFunction(key, options) {
	if (!options.customMerge) {
		return deepmerge
	}
	var customMerge = options.customMerge(key);
	return typeof customMerge === 'function' ? customMerge : deepmerge
}

function getEnumerableOwnPropertySymbols(target) {
	return Object.getOwnPropertySymbols
		? Object.getOwnPropertySymbols(target).filter(function(symbol) {
			return Object.propertyIsEnumerable.call(target, symbol)
		})
		: []
}

function getKeys(target) {
	return Object.keys(target).concat(getEnumerableOwnPropertySymbols(target))
}

function propertyIsOnObject(object, property) {
	try {
		return property in object
	} catch(_) {
		return false
	}
}

// Protects from prototype poisoning and unexpected merging up the prototype chain.
function propertyIsUnsafe(target, key) {
	return propertyIsOnObject(target, key) // Properties are safe to merge if they don't exist in the target yet,
		&& !(Object.hasOwnProperty.call(target, key) // unsafe if they exist up the prototype chain,
			&& Object.propertyIsEnumerable.call(target, key)) // and also unsafe if they're nonenumerable.
}

function mergeObject(target, source, options) {
	var destination = {};
	if (options.isMergeableObject(target)) {
		getKeys(target).forEach(function(key) {
			destination[key] = cloneUnlessOtherwiseSpecified(target[key], options);
		});
	}
	getKeys(source).forEach(function(key) {
		if (propertyIsUnsafe(target, key)) {
			return
		}

		if (propertyIsOnObject(target, key) && options.isMergeableObject(source[key])) {
			destination[key] = getMergeFunction(key, options)(target[key], source[key], options);
		} else {
			destination[key] = cloneUnlessOtherwiseSpecified(source[key], options);
		}
	});
	return destination
}

function deepmerge(target, source, options) {
	options = options || {};
	options.arrayMerge = options.arrayMerge || defaultArrayMerge;
	options.isMergeableObject = options.isMergeableObject || isMergeableObject;
	// cloneUnlessOtherwiseSpecified is added to `options` so that custom arrayMerge()
	// implementations can use it. The caller may not replace it.
	options.cloneUnlessOtherwiseSpecified = cloneUnlessOtherwiseSpecified;

	var sourceIsArray = Array.isArray(source);
	var targetIsArray = Array.isArray(target);
	var sourceAndTargetTypesMatch = sourceIsArray === targetIsArray;

	if (!sourceAndTargetTypesMatch) {
		return cloneUnlessOtherwiseSpecified(source, options)
	} else if (sourceIsArray) {
		return options.arrayMerge(target, source, options)
	} else {
		return mergeObject(target, source, options)
	}
}

deepmerge.all = function deepmergeAll(array, options) {
	if (!Array.isArray(array)) {
		throw new Error('first argument should be an array')
	}

	return array.reduce(function(prev, next) {
		return deepmerge(prev, next, options)
	}, {})
};

var deepmerge_1 = deepmerge;

module.exports = deepmerge_1;


/***/ }),

/***/ 3532:
/***/ (function(module) {

!function(t,n){ true?module.exports=function(t,n,e,i,o){for(n=n.split?n.split("."):n,i=0;i<n.length;i++)t=t?t[n[i]]:o;return t===o?e:t}:0}(this);
//# sourceMappingURL=dlv.umd.js.map


/***/ }),

/***/ 8300:
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {


// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  us: () => (/* binding */ IntlProvider),
  Mp: () => (/* binding */ Localizer),
  a: () => (/* binding */ Text),
  cF: () => (/* binding */ useText)
});

// UNUSED EXPORTS: IntlContext, MarkupText, default, intl, translate, withText

// EXTERNAL MODULE: external "@dropins/tools/preact.js"
var preact_js_ = __webpack_require__(7320);
// EXTERNAL MODULE: external "@dropins/tools/preact-hooks.js"
var preact_hooks_js_ = __webpack_require__(2720);
// EXTERNAL MODULE: ../../ElsieSDK/node_modules/dlv/dist/dlv.umd.js
var dlv_umd = __webpack_require__(3532);
var dlv_umd_default = /*#__PURE__*/__webpack_require__.n(dlv_umd);
;// CONCATENATED MODULE: ../../ElsieSDK/node_modules/preact-markup/dist/preact-markup.module.js
var e,o={};function n(r,t,e){if(3===r.nodeType){var o="textContent"in r?r.textContent:r.nodeValue||"";if(!1!==n.options.trim){var a=0===t||t===e.length-1;if((!(o=o.match(/^[\s\n]+$/g)&&"all"!==n.options.trim?" ":o.replace(/(^[\s\n]+|[\s\n]+$)/g,"all"===n.options.trim||a?"":" "))||" "===o)&&e.length>1&&a)return null}return o}if(1!==r.nodeType)return null;var p=String(r.nodeName).toLowerCase();if("script"===p&&!n.options.allowScripts)return null;var l,s,u=n.h(p,function(r){var t=r&&r.length;if(!t)return null;for(var e={},o=0;o<t;o++){var a=r[o],i=a.name,p=a.value;"on"===i.substring(0,2)&&n.options.allowEvents&&(p=new Function(p)),e[i]=p}return e}(r.attributes),(s=(l=r.childNodes)&&Array.prototype.map.call(l,n).filter(i))&&s.length?s:null);return n.visitor&&n.visitor(u),u}var a,i=function(r){return r},p={};function l(r){var t=(r.type||"").toLowerCase(),e=l.map;e&&e.hasOwnProperty(t)?(r.type=e[t],r.props=Object.keys(r.props||{}).reduce(function(t,e){var o;return t[(o=e,o.replace(/-(.)/g,function(r,t){return t.toUpperCase()}))]=r.props[e],t},{})):r.type=t.replace(/[^a-z0-9-]/i,"")}/* harmony default export */ const preact_markup_module = (function(t){function i(){t.apply(this,arguments)}return t&&(i.__proto__=t),(i.prototype=Object.create(t&&t.prototype)).constructor=i,i.setReviver=function(r){a=r},i.prototype.shouldComponentUpdate=function(r){var t=this.props;return r.wrap!==t.wrap||r.type!==t.type||r.markup!==t.markup},i.prototype.setComponents=function(r){if(this.map={},r)for(var t in r)if(r.hasOwnProperty(t)){var e=t.replace(/([A-Z]+)([A-Z][a-z0-9])|([a-z0-9]+)([A-Z])/g,"$1$3-$2$4").toLowerCase();this.map[e]=r[t]}},i.prototype.render=function(t){var i=t.wrap;void 0===i&&(i=!0);var s,u=t.type,c=t.markup,m=t.components,v=t.reviver,f=t.onError,d=t["allow-scripts"],h=t["allow-events"],y=t.trim,w=function(r,t){var e={};for(var o in r)Object.prototype.hasOwnProperty.call(r,o)&&-1===t.indexOf(o)&&(e[o]=r[o]);return e}(t,["wrap","type","markup","components","reviver","onError","allow-scripts","allow-events","trim"]),C=v||this.reviver||this.constructor.prototype.reviver||a||preact_js_.h;this.setComponents(m);var g={allowScripts:d,allowEvents:h,trim:y};try{s=function(r,t,a,i,s){var u=function(r,t){var o,n,a,i,p="html"===t?"text/html":"application/xml";"html"===t?(i="body",a="<!DOCTYPE html>\n<html><body>"+r+"</body></html>"):(i="xml",a='<?xml version="1.0" encoding="UTF-8"?>\n<xml>'+r+"</xml>");try{o=(new DOMParser).parseFromString(a,p)}catch(r){n=r}if(o||"html"!==t||((o=e||(e=function(){if(document.implementation&&document.implementation.createHTMLDocument)return document.implementation.createHTMLDocument("");var r=document.createElement("iframe");return r.style.cssText="position:absolute; left:0; top:-999em; width:1px; height:1px; overflow:hidden;",r.setAttribute("sandbox","allow-forms"),document.body.appendChild(r),r.contentWindow.document}())).open(),o.write(a),o.close()),o){var l=o.getElementsByTagName(i)[0],s=l.firstChild;return r&&!s&&(l.error="Document parse failed."),s&&"parsererror"===String(s.nodeName).toLowerCase()&&(s.removeChild(s.firstChild),s.removeChild(s.lastChild),l.error=s.textContent||s.nodeValue||n||"Unknown error",l.removeChild(s)),l}}(r,t);if(u&&u.error)throw new Error(u.error);var c=u&&u.body||u;l.map=i||p;var m=c&&function(r,t,e,a){return n.visitor=t,n.h=e,n.options=a||o,n(r)}(c,l,a,s);return l.map=null,m&&m.props&&m.props.children||null}(c,u,C,this.map,g)}catch(r){f?f({error:r}):"undefined"!=typeof console&&console.error&&console.error("preact-markup: "+r)}if(!1===i)return s||null;var x=w.hasOwnProperty("className")?"className":"class",b=w[x];return b?b.splice?b.splice(0,0,"markup"):"string"==typeof b?w[x]+=" markup":"object"==typeof b&&(b.markup=!0):w[x]="markup",C("div",w,s||null)},i}(preact_js_.Component));
//# sourceMappingURL=preact-markup.module.js.map

;// CONCATENATED MODULE: ../../ElsieSDK/node_modules/preact-i18n/dist/preact-i18n.esm.js





var IntlContext = (0,preact_js_.createContext)({ intl: {} });

/** Check if an object is not null or undefined
 *	@private
 */
function defined(obj) {
	return obj!==null && obj!==undefined;
}


/** A simpler Object.assign
 *  @private
 */
function preact_i18n_esm_assign(obj, props) {
	for (var i in props) {
		obj[i] = props[i];
	}
	return obj;
}


/** Recursively copy keys from `source` to `target`, skipping truthy values already in `target`.
 *	@private
 */
function deepAssign(target, source) {
	var out = preact_i18n_esm_assign({}, target);
	for (var i in source) {
		if (source.hasOwnProperty(i)) {
			if (target[i] && source[i] && typeof target[i]==='object' && typeof source[i]==='object') {
				out[i] = deepAssign(target[i], source[i]);
			}
			else {
				out[i] = target[i] || source[i];
			}
		}
	}
	return out;
}

/** select('foo,bar') creates a mapping: `{ foo, bar }`
 *	@private
 */
function preact_i18n_esm_select(properties) {
	properties = properties || {};
	if (typeof properties==='string') {
		properties = properties.split(',');
	}
	if ('join' in properties) {
		var selected = {};
		for (var i=0; i<properties.length; i++) {
			var val = properties[i].trim();
			if (val) { selected[val.split('.').pop()] = val; }
		}
		return selected;
	}
	return properties;
}

function objectWithoutProperties (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }


var URL_FLAG = /[?&#]intl=show/;


/** `<IntlProvider>` is a nestable internationalization definition provider.
 *	It exposes an Intl scope & definition into the tree,
 *	making them available to descendant components.
 *
 *	> **Note:** When nested, gives precedence to keys higher up the tree!
 *	> This means lower-level components can set their defaults by wrapping themselves
 *	> in an `<IntlProvider>`, but still remain localizable by their parent components.
 *
 *	@name IntlProvider
 *	@param props
 *	@param {String} [props.scope]			Nest `definition` under a root key, and set the active scope for the tree (essentially prefixing all `<Text />` keys).
 *	@param {Boolean} [props.mark=false]		If `true`, all `<Text>` elements will be shown with a red/green background indicating whether they have valid Intl keys.
 *	@param {Object} [props.definition={}]	Merge the given definition into the current intl definition, giving the *current* definition precedence (i.e., only adding keys, acting as defaults)
 *
 *	@example
 *	// generally imported from a JSON file:
 *	let definition = {
 *		foo: 'Le Feux'
 *	};
 *
 *	<IntlProvider scope="weather" definition={definition}>
 *		<Text key="foo">The Foo</Text>
 *	</IntlProvider>
 *
 *	// This will render the text:
 *	"Le Feux"
 */

function IntlProvider(ref) {
	var scope = ref.scope;
	var mark = ref.mark;
	var definition = ref.definition;
	var rest = objectWithoutProperties( ref, ["scope", "mark", "definition"] );
	var props = rest;

	var ref$1 = (0,preact_hooks_js_.useContext)(IntlContext);
	var parentIntl = ref$1.intl;
	var intl = preact_i18n_esm_assign({}, parentIntl || {});

	// set active scope for the tree if given
	if (scope) { intl.scope = scope; }

	// merge definition into current with lower precedence
	if (definition) {
		intl.dictionary = deepAssign(intl.dictionary || {}, definition);
	}

	if (mark || (typeof location!=='undefined' && String(location).match(URL_FLAG))) {
		intl.mark = true;
	}

	return (
		(0,preact_js_.h)( IntlContext.Provider, { value: { intl: intl } },
			props.children
		)
	);
}

/**
 * Higher-order function that creates an `<IntlProvider />` wrapper component for the given component.  It
 * takes two forms depending on how many arguments it's given:
 * It can take a functional form like:
 * intl(ComponentToWrap, options)
 *
 * or it can take an annotation form like:
 * @intl(options)
 * class ComponentToWrap extends Component {}
 *
 *	@param {Component or Object} args[0] If there are two arguments, the first argument is the Component to wrap in `<IntlProvider/>`. If there is just one argument, this is the options object to pass as `props` to `<IntlProvider/>`. See the definition of the options param below for details.
 *	@param {Object} options If there are two arguments, the second argument is Passed as `props` to `<IntlProvider />`
 *	@param [options.scope]			Nest `definition` under a root key, and set the active scope for the tree (essentially prefixing all `<Text />` keys).
 *	@param [options.definition={}]	Merge the given definition into the current intl definition, giving the *current* definition precedence (i.e., only adding keys, acting as defaults)
 */
function intl(Child, options) {
	if (arguments.length<2) {
		options = Child;
		return function (Child) { return intl(Child, options); };
	}
	function IntlProviderWrapper(props) {
		return (0,preact_js_.h)(
			IntlProvider,
			options || {},
			(0,preact_js_.h)(Child, props)
		);
	}

	IntlProviderWrapper.getWrappedComponent = Child && Child.getWrappedComponent || (function () { return Child; });
	return IntlProviderWrapper;
}

var EMPTY = {};

/** Populate {{template.fields}} within a given string.
 *
 *	@private
 *	@param {String} template	The string containing fields to be resolved
 *	@param {Object} [fields={}]	Optionally nested object of fields, referencable from `template`.
 *	@example
 *		template('foo{{bar}}', { bar:'baz' }) === 'foobaz'
 */
function template(template, fields, scope, dictionary) {
	return template && template.replace(/\{\{([\w.-]+)\}\}/g, replacer.bind(null, fields || EMPTY, scope, dictionary));
}

/** Replacement callback for injecting fields into a String
 *	@private
 */
function replacer(currentFields, scope, dictionary, s, field) {
	var parts = field.split('.'),
		v = currentFields;
	for (var i=0; i<parts.length; i++) {
		v = v[parts[i]];
		if (v == null) { return ''; } // eslint-disable-line eqeqeq

		//allow field values to be <Text /> nodes
		if (v && v.type === Text) {
			return translate(v.props.id, scope, dictionary, v.props.fields, v.props.plural, v.props.fallback);
		}
	}
	// allow for recursive {{config.xx}} references:
	if (typeof v==='string' && v.match(/\{\{/)) {
		v = template(v, currentFields);
	}
	return v;
}

/** Attempts to look up a translated value from a given dictionary.
 *  Also supports json templating using the format: {{variable}}
 *  Falls back to default text.
 *
 *  @param {String} id  			Intl field name/id (subject to scope)
 *  @param {String} [scope='']		Scope, which prefixes `id` with `${scope}.`
 *  @param {Object} dictionary		A nested object containing translations
 *  @param {Object} [fields={}]		Template fields for use by translated strings
 *  @param {Number} [plural]		Indicates a quantity, used to trigger pluralization
 *  @param {String|Array} [fallback]	Text to return if no translation is found
 *  @returns {String} translated
 */
function translate(id, scope, dictionary, fields, plural, fallback) {
	if (scope) { id = scope + '.' + id; }

	var value = dictionary && dlv_umd_default()(dictionary, id);

	// plural forms:
	// key: ['plural', 'singular']
	// key: { none, one, many }
	// key: { zero, one, other }
	// key: { singular, plural }
	if ((plural || plural===0) && value && typeof value==='object') {
		if (value.splice) {
			value = value[plural] || value[0];
		}
		else if (plural===0 && defined(value.none || value.zero)) {
			value = value.none || value.zero;
		}
		else if (plural===1 && defined(value.one || value.singular)) {
			value = value.one || value.singular;
		}
		else {
			value = value.some || value.many || value.plural || value.other || value;
		}
	}

	return value && template(value, fields, scope, dictionary) || fallback || null;
}

/** Highlight/colorize the i18n'd node if `mark` is set on `intl` in context.  If not, just returns `value`
 *
 *	@private
 *	@param {String|VNode} value	The l10n'd text/vnode to highlight or pass through
 *	@param {string} id	The key used to lookup the value in the intl dictionary
 */
function HighlightI18N(ref) {
	var value = ref.value;
	var id = ref.id;

	var ref$1 = (0,preact_hooks_js_.useContext)(IntlContext);
	var intl = ref$1.intl;

	if (intl && intl.mark) {
		var dictionaryKey = "dictionary" + (intl && intl.scope ? ("." + (intl.scope)) : '') + "." + id;
		return (
			(0,preact_js_.h)( 'mark', {
				style: {
					background: value
						? dlv_umd_default()(intl, dictionaryKey)
							? 'rgba(119,231,117,.5)'
							: 'rgba(229,226,41,.5)'
						: 'rgba(228,147,51,.5)'
				}, title: id },
				value
			)
		);
	}

	return value;
}

/** `<Text>` renders internationalized text.
 *	It attempts to look up translated values from a dictionary in context.
 *
 *	Template strings can contain `{{field}}` placeholders,
 *	which injects values from the `fields` prop.
 *
 *	When string lookup fails, renders its children as fallback text.
 *
 *	@param {Object}       props               props
 *	@param {String}       props.id            Key to look up in intl dictionary, within any parent scopes (`$scope1.$scope2.$id`)
 *	@param {ReactElement} [props.children]    Fallback text if no definition is found
 *	@param {Object}       [props.fields={}]   Values to inject into template `{{fields}}`. Values in the `fields` object will be coerced to strings, with the exception of `<Text/>` nodes which will be resolved to their translated value
 *	@param {Number}       [props.plural]      Integer "count", used to select plural forms
 *
 *	@example
 *	// If there is no dictionary in context..
 *	<Text id="foo">The Foo</Text>
 *	// ..produces the text:
 *	"The Foo"
 *
 *	@example
 *	// Given a dictionary and some fields..
 *	<IntlProvider definition={{ foo:'Le Feux {{bar}}' }}>
 *		<Text id="foo" fields={{ bar: 'BEAR' }}>The Foo</Text>
 *	</IntlProvider>
 *	// ..produces the text:
 *	"Le Feux BEAR"
 *
 *	@example
 *	// Within a scope, both `id` and the definition are namespaced..
 *	<IntlProvider scope="weather" definition={{ foo:'Le Feux' }}>
 *		<Text id="foo">The Foo</Text>
 *	</IntlProvider>
 *	// ..produces the text:
 *	"Le Feux"
 */
function Text(ref) {
	var id = ref.id;
	var fallback = ref.children;
	var plural = ref.plural;
	var fields = ref.fields;

	var ref$1 = (0,preact_hooks_js_.useContext)(IntlContext);
	var intl = ref$1.intl;

	var value = translate(
		id,
		intl && intl.scope,
		intl && intl.dictionary,
		fields,
		plural,
		fallback
	);

	return (0,preact_js_.h)( HighlightI18N, { id: id, value: value });
}

/** Translates the property values in an Object, returning a copy.
 *	**Note:** By default, `String` keys will be treated as Intl ID's.
 *	Pass `true` to return an Object containing *only* translated
 *	values where the prop is a <Text /> node.
 *
 *	@private
 *	@param {Object} props	An object with values to translate
 *	@param {Object} intl	An intl context object (eg: `context.intl`)
 *	@param {Boolean} [onlyTextNodes=false]	Only process `<Text />` values
 *	@returns {Object} translatedProps
 */
function translateMapping(props, intl, onlyTextNodes) {
	var out = {};
	intl = intl || {};
	props = preact_i18n_esm_select(props);
	for (var name in props) {
		if (props.hasOwnProperty(name) && props[name]) {
			var def = props[name];

			// if onlyTextNodes=true, skip any props that aren't <Text /> vnodes
			if (!onlyTextNodes && typeof def==='string') {
				out[name] = translate(def, intl.scope, intl.dictionary);
			}
			else if (def.type===Text) {
				// it's a <Text />, just grab its props:
				def = preact_i18n_esm_assign({
					// use children as fallback content
					fallback: def.props.children
				}, def.props);
				out[name] = translate(def.id, intl.scope, intl.dictionary, def.fields, def.plural, def.fallback);
			}
		}
	}
	return out;
}

/** `<Localizer />` is a Compositional Component.
 *	It "renders" out any `<Text />` values in its child's props.
 *
 *	@name Localizer
 *	@param {Object} props
 *	@param {Object} props.children	Child components with props to localize.
 *	@param {Object} context
 *	@param {Object} context.intl		[internal] dictionary and scope info
 *	@example
 *	<Localizer>
 *		<input placeholder={<Text id="username.placeholder" />} />
 *	</Localizer>
 *	// produces:
 *	<input placeholder="foo" />
 *
 *	@example
 *	<Localizer>
 *		<abbr title={<Text id="oss-title">Open Source Software</Text>}>
 *			<Text id="oss">OSS</Text>
 *		</abbr>
 *	</Localizer>
 *	// produces:
 *	<abbr title="Open Source Software">OSS</abbr>
 */
function Localizer(ref) {
	var children = ref.children;

	var ref$1 = (0,preact_hooks_js_.useContext)(IntlContext);
	var intl = ref$1.intl;

	return children && children.length
		? children.map(function (child) { return (0,preact_js_.cloneElement)(child, translateMapping(child.props, intl, true)); })
		: children && (0,preact_js_.cloneElement)(children, translateMapping(children.props, intl, true));
}

function objectWithoutProperties$1 (obj, exclude) { var target = {}; for (var k in obj) if (Object.prototype.hasOwnProperty.call(obj, k) && exclude.indexOf(k) === -1) target[k] = obj[k]; return target; }

/* eslint-disable react/no-danger */

/** `<MarkupText>` is just like {@link Text} but it can also contain html markup in rendered strings.  It wraps its contents in a `<span>` tag.
 *
 *	@param {Object} props				props
 *	@param {String} props.id			Key to look up in intl dictionary, within any parent scopes (`$scope1.$scope2.$id`)
 *	@param {Object} [props.fields={}]	Values to inject into template `{{fields}}`.  Values in the `fields` object will be coerced to strings, with the exception of `<Text/>` nodes which will be resolved to their translated value
 *	@param {Number} [props.plural]		Integer "count", used to select plural forms
 *
 *	@example
 *	// If there is no dictionary in context..
 *	<MarkupText id="foo"><b>The Foo</b></MarkupText>
 *	// ..produces the vnode:
 *	<span><b>The Foo</b></span>
 *
 *	@example
 *	// Given a dictionary and some fields..
 *	<IntlProvider definition={{ foo:'Le Feux <b>{{bar}}</b>' }}>
 *		<MarkupText id="foo" fields={{ bar: 'BEAR' }}>The Foo</MarkupText>
 *	</IntlProvider>
 *	// ..produces the vnode:
 *	<span>Le Feux <b>BEAR</b></span>
 *
 *	@example
 *	// Within a scope, both `id` and the definition are namespaced..
 *	<IntlProvider scope="weather" definition={{ foo:'Le <a href="http://foo.com">Feux</a>' }}>
 *		<MarkupText id="foo">The Foo</MarkupText>
 *	</IntlProvider>
 *	// ..produces the vnode:
 *	<span>Le <a href="http://foo.com">Feux</a></span>
 *
 *	@example
 *	// renders nothing if there is no key match and no fallback
 *	<div><MarkupText /></div>
 *	// ..produces the vnode:
 *	<div/>
 */
function MarkupText(ref) {
	var id = ref.id;
	var fields = ref.fields;
	var plural = ref.plural;
	var children = ref.children;
	var rest = objectWithoutProperties$1( ref, ["id", "fields", "plural", "children"] );
	var props = rest;

	return (
		(0,preact_js_.h)( Localizer, null,
			(0,preact_js_.h)( Html, Object.assign({}, { html: (0,preact_js_.h)( Text, { id: id, fields: fields, plural: plural, children: children }), id: id }, props))
		)
	);
}

function Html(ref) {
	var html = ref.html;
	var id = ref.id;
	var rest = objectWithoutProperties$1( ref, ["html", "id"] );
	var props = rest;

	return (
		(0,preact_js_.h)( HighlightI18N, {
			id: id, value: !html ? html : typeof html === 'string' ? (0,preact_js_.h)( preact_markup_module, Object.assign({}, { type: "html", trim: false }, props, { markup: html })) : (0,preact_js_.h)( 'span', null, html ) })
	);
}

/** `@withText()` is a Higher Order Component, often used as a decorator.
 *
 *	It wraps a child component and passes it translations
 *	based on a mapping to the dictionary & scope in context.
 *
 *	@param {Object|Function|String} mapping		Maps prop names to intl keys (or `<Text>` nodes).
 *
 *	@example @withText({
 *		placeholder: 'user.placeholder'
 *	})
 *	class Foo {
 *		// now the `placeholder` prop is our localized String:
 *		render({ placeholder }) {
 *			return <input placeholder={placeholder} />
 *		}
 *	}
 *
 *	@example @withText({
 *		placeholder: <Text id="user.placeholder">fallback text</Text>
 *	})
 *	class Foo {
 *		render({ placeholder }) {
 *			return <input placeholder={placeholder} />
 *		}
 *	}
 *
 *	@example @withText('user.placeholder')
 *	class Foo {
 *		// for Strings/Arrays, the last path segment becomes the prop name:
 *		render({ placeholder }) {
 *			return <input placeholder={placeholder} />
 *		}
 *	}
 *
 *	@example <caption>Works with functional components, too</caption>
 *	const Foo = withText('user.placeholder')( props =>
 *		<input placeholder={props.placeholder} />
 *	)
 *
 * 	@example <caption>getWrappedComponent() returns wrapped child Component</caption>
 *	const Foo = () => <div/>;
 *	const WrappedFoo = withText('user.placeholer')(Foo);
 *	WrappedFoo.getWrappedComponent() === Foo; // true
 */
function withText(mapping) {
	return function withTextWrapper(Child) {
		function WithTextWrapper(props, context) {
			var ref = (0,preact_hooks_js_.useContext)(IntlContext);
			var intl = ref.intl;

			var map = typeof mapping==='function' ? mapping(props, { intl: intl }) : mapping;
			var translations = translateMapping(map, intl);
			return (0,preact_js_.h)(Child, preact_i18n_esm_assign(preact_i18n_esm_assign({}, props), translations));
		}

		WithTextWrapper.getWrappedComponent = Child && Child.getWrappedComponent || (function () { return Child; });
		return WithTextWrapper;
	};
}

/** `useText` is the hook version of {@link withText}
 *
 *	@param {Object|Function|String} mapping		Maps prop names to intl keys (or `<Text>` nodes).
 *
 *	@example function MyComponent() {
 *		const { placeholder } = useText({
 *			placeholder: 'user.placeholder'
 *		});
 *		return <input placeholder={placeholder} />
 *	}
 *
 *	@example function MyComponent() {
 *		const { placeholder } = useText({
 *			placeholder: <Text id="user.placeholder">fallback text</Text>
 *		});
 *		return <input placeholder={placeholder} />
 *	}
 *
 *	@example function MyComponent() {
 *		// for Strings/Arrays, the last path segment becomes the prop name:
 *		const { placeholder } = useText('user.placeholder');
 *
 *		return <input placeholder={placeholder} />
 *	}
 */
function useText(mapping) {
	var ref = (0,preact_hooks_js_.useContext)(IntlContext);
	var intl = ref.intl;

	return translateMapping(
		typeof mapping==='function' ? mapping({ intl: intl }) : mapping,
		intl
	);
}

intl.intl = intl;
intl.IntlContext = IntlContext;
intl.IntlProvider = IntlProvider;
intl.Text = Text;
intl.MarkupText = MarkupText;
intl.Localizer = Localizer;
intl.withText = withText;
intl.useText = useText;
intl.translate = translate;

/* harmony default export */ const preact_i18n_esm = ((/* unused pure expression or super */ null && (intl)));

//# sourceMappingURL=preact-i18n.esm.js.map


/***/ }),

/***/ 2076:
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = [];

  // return the list of modules as css string
  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";
      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }
      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }
      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }
      content += cssWithMappingToString(item);
      if (needLayer) {
        content += "}";
      }
      if (item[2]) {
        content += "}";
      }
      if (item[4]) {
        content += "}";
      }
      return content;
    }).join("");
  };

  // import a list of modules into the list
  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }
    var alreadyImportedModules = {};
    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];
        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }
    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);
      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }
      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }
      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }
      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }
      list.push(item);
    }
  };
  return list;
};

/***/ }),

/***/ 6008:
/***/ ((module) => {



module.exports = function (i) {
  return i[1];
};

/***/ }),

/***/ 5536:
/***/ ((module) => {



var stylesInDOM = [];
function getIndexByIdentifier(identifier) {
  var result = -1;
  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }
  return result;
}
function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];
  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };
    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }
    identifiers.push(identifier);
  }
  return identifiers;
}
function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);
  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }
      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };
  return updater;
}
module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];
    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }
    var newLastIdentifiers = modulesToDom(newList, options);
    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];
      var _index = getIndexByIdentifier(_identifier);
      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();
        stylesInDOM.splice(_index, 1);
      }
    }
    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ 9904:
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}
module.exports = insertStyleElement;

/***/ }),

/***/ 9356:
/***/ ((module) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement, attributes) {
  Object.keys(attributes).forEach(function (key) {
    styleElement.setAttribute(key, attributes[key]);
  });
}
module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ 7008:
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";
  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }
  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }
  var needLayer = typeof obj.layer !== "undefined";
  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }
  css += obj.css;
  if (needLayer) {
    css += "}";
  }
  if (obj.media) {
    css += "}";
  }
  if (obj.supports) {
    css += "}";
  }
  var sourceMap = obj.sourceMap;
  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  }

  // For old IE
  /* istanbul ignore if  */
  options.styleTagTransform(css, styleElement, options.options);
}
function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }
  styleElement.parentNode.removeChild(styleElement);
}

/* istanbul ignore next  */
function domAPI(options) {
  if (typeof document === "undefined") {
    return {
      update: function update() {},
      remove: function remove() {}
    };
  }
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}
module.exports = domAPI;

/***/ }),

/***/ 4192:
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }
    styleElement.appendChild(document.createTextNode(css));
  }
}
module.exports = styleTagTransform;

/***/ }),

/***/ 5092:
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

/* harmony import */ var preact_compat__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(6528);
/* harmony import */ var preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(6168);
/* harmony reexport (checked) */ if(__webpack_require__.o(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__, "Fragment")) __webpack_require__.d(__webpack_exports__, { Fragment: function() { return preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.Fragment; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__, "jsx")) __webpack_require__.d(__webpack_exports__, { jsx: function() { return preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsx; } });
/* harmony reexport (checked) */ if(__webpack_require__.o(preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__, "jsxs")) __webpack_require__.d(__webpack_exports__, { jsxs: function() { return preact_jsx_runtime__WEBPACK_IMPORTED_MODULE_1__.jsxs; } });





/***/ })

};
