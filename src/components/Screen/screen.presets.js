"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isNonScrolling = exports.presets = exports.offsets = void 0;
var ramda_1 = require("ramda");
// @ts-ignore
var styles_1 = require("styles");
/**
 * All screen keyboard offsets.
 */
exports.offsets = {
    none: 0,
};
/**
 * All the variations of screens.
 */
exports.presets = {
    /**
     * No scrolling. Suitable for full-screen carousels and components
     * which have built-in scrolling like FlatList.
     */
    fixed: {
        outer: {
            backgroundColor: styles_1.Colors.background,
            flex: 1,
            height: "100%",
        },
        inner: {
            justifyContent: "flex-start",
            alignItems: "stretch",
            height: "100%",
            width: "100%",
        },
    },
    /**
     * Scrolls. Suitable for forms or other things requiring a keyboard.
     *
     * Pick this one if you don't know which one you want yet.
     */
    scroll: {
        outer: {
            backgroundColor: styles_1.Colors.background,
            flex: 1,
            height: "100%",
        },
        inner: { justifyContent: "flex-start", alignItems: "stretch" },
    },
};
/**
 * Is this preset a non-scrolling one?
 *
 * @param preset The preset to check
 */
function isNonScrolling(preset) {
    // any of these things will make you scroll
    return ramda_1.isNil(preset) || !preset.length || ramda_1.isNil(exports.presets[preset]) || preset === "fixed";
}
exports.isNonScrolling = isNonScrolling;
