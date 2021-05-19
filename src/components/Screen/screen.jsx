"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Screen = void 0;
var React = require("react");
var react_native_1 = require("react-native");
var react_native_safe_area_context_1 = require("react-native-safe-area-context");
var screen_presets_1 = require("./screen.presets");
// @ts-ignore
var isIos = react_native_1.Platform.OS === "ios";
function ScreenWithoutScrolling(props) {
    var insets = react_native_safe_area_context_1.useSafeArea();
    var preset = screen_presets_1.presets.fixed;
    var style = props.style || {};
    var backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
    var insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };
    return (<react_native_1.KeyboardAvoidingView style={[preset.outer, backgroundStyle]} behavior={isIos ? "padding" : null} keyboardVerticalOffset={screen_presets_1.offsets[props.keyboardOffset || "none"]}>
        <react_native_1.StatusBar barStyle={props.statusBar || "light-content"} />
        <react_native_1.View style={[preset.inner, style, insetStyle]}>{props.children}</react_native_1.View>
    </react_native_1.KeyboardAvoidingView>);
}
function ScreenWithScrolling(props) {
    var insets = react_native_safe_area_context_1.useSafeArea();
    var preset = screen_presets_1.presets.scroll;
    var style = props.style || {};
    var backgroundStyle = props.backgroundColor ? { backgroundColor: props.backgroundColor } : {};
    var insetStyle = { paddingTop: props.unsafe ? 0 : insets.top };
    return (<react_native_1.KeyboardAvoidingView style={[preset.outer, backgroundStyle]} behavior={isIos ? "padding" : null} keyboardVerticalOffset={screen_presets_1.offsets[props.keyboardOffset || "none"]}>
        <react_native_1.StatusBar barStyle={props.statusBar || "light-content"} />
        <react_native_1.View style={[preset.outer, backgroundStyle, insetStyle]}>
            <react_native_1.ScrollView style={[preset.outer, backgroundStyle]} contentContainerStyle={[preset.inner, style]}>
                {props.children}
            </react_native_1.ScrollView>
        </react_native_1.View>
    </react_native_1.KeyboardAvoidingView>);
}
/**
 * The starting component on every screen in the app.
 *
 * @param props The screen props
 */
function Screen(props) {
    if (screen_presets_1.isNonScrolling(props.preset)) {
        return <ScreenWithoutScrolling {...props} />;
    }
    else {
        return <ScreenWithScrolling {...props} />;
    }
}
exports.Screen = Screen;
