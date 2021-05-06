import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Animated, TouchableWithoutFeedback, View} from 'react-native';
import PopContent from './PopContent';
import DisplayPopup from './DisplayPopup';
import styleShape from './style-shape';
import styleSheet from './styles';
import {injectIntl} from 'react-intl';
import LottieView from 'lottie-react-native';

class DialogBox extends Component {

    static DisplayPopup = DisplayPopup;

    static propTypes = {
        isOverlay: PropTypes.bool,
        isOverlayClickClose: PropTypes.bool,
        onDismiss: PropTypes.func,
        style: PropTypes.shape(styleShape),
        childRef: PropTypes.func,
        formatMessage: PropTypes.func,
        intl: PropTypes.any,
    };

    static defaultProps = {
        isOverlay: true,
        isOverlayClickClose: true,
    };
    type = false;

    constructor(props, context) {
        super(props, context);
        this.state = {
            isVisible: false,
            content: null,
            isLoading: false,
            type: false,
        };
        this.springValue = new Animated.Value(0.3);
    }

    componentDidMount = () => {
        const {childRef} = this.props;
        childRef(this);
    };

    _animatedShow = () => {
        Animated.spring(this.springValue, {
            toValue: 1,
            bounciness: 10,
            useNativeDriver: true,
        }).start();
    };

    _animatedHide = () => {
        Animated.spring(this.springValue, {
            toValue: 0,
            tension: 10,
            useNativeDriver: true,
        }).start();
    };
    _onOverlayDismiss = () => {
        const {isOverlayClickClose, onDismiss} = this.props;
        const {isLoading} = this.state;
        if (!isLoading && isOverlayClickClose) {
            //this.close();
            if (onDismiss && typeof onDismiss === 'function') {
                onDismiss();
            }
        }
    };

    _pop = (args) => {
        this._animatedShow();
        if (this._resolve) {
            this._resolve({index: -1, button: undefined});
        }
        const transformed = Object.assign({}, args, {
            btns: Array.prototype.map.call(args.btns, (item, index) => (Object.assign({}, item, {
                callback: () => {
                    const resolve = this._resolve;
                    this._resolve = null;
                    const {callback, ...button} = item;
                    if (callback) {
                        callback();
                    }
                    resolve({index, button});
                },
            }))),
        });
        return new Promise((resolve, reject) => {
            this._resolve = resolve;
            this.setState({
                content: (<PopContent {...transformed} style={this.props.style}/>),
                isVisible: true,
            });
        });
    };

    loading = (isLoading, type) => {
        if (isLoading) {
            return new Promise((resolve, reject) => {
                this._resolve = resolve;
                this.setState({
                    content: null,
                    isLoading: isLoading,
                    isVisible: true,
                    type: true,
                });
            });
        } else {
            this.close();
        }
    };
    input = (args) => {
        const {title, content, btn, icon, color} = args;
        const {intl} = this.props;
        const {formatMessage} = intl;
        return this._pop({
            title: formatMessage(title) || 'Input',
            buttonFlow: 'row',
            content: content,
            icon: icon,
            color: color,
            btns: [{
                text: (title) && formatMessage(btn.text) || 'OK',
                style: btn && btn.style,
                callback: () => {
                    this.close();
                    btn && typeof btn.callback === 'function' && btn.callback();
                },
            }],
        });
    };

    alert = (...text) => {
        text = text.map(text => text);
        return this._pop({
            content: text || '',
            buttonFlow: 'column',
            btns: [{
                text: 'OK',
                callback: () => {
                    this.close();
                },
            }],
        });
    };


    tip = (args) => {
        const {title, content, btn, icon, color} = args;
        const {intl} = this.props;
        const {formatMessage} = intl;
        return this._pop({
            title: formatMessage(title) || 'Tip',
            buttonFlow: 'row',
            content: content,
            icon: icon,
            color: color,
            btns: [{
                text: (title) && formatMessage(btn.text) || 'OK',
                style: btn && btn.style,
                callback: () => {
                    this.close();
                    btn && typeof btn.callback === 'function' && btn.callback();
                },
            }],
        });
    };

    confirm = (args) => {
        const {title, content, ok, cancel} = args;
        const {intl} = this.props;
        const {formatMessage} = intl;
        return this._pop({
            title: formatMessage(title),
            buttonFlow: 'row',
            content,
            btns: [
                {
                    text: cancel && formatMessage(cancel.text) || 'Cancel',
                    style: cancel && cancel.style,
                    callback: () => {
                        this.close();
                        cancel && typeof cancel.callback === 'function' && cancel.callback();
                    },
                },
                {
                    text: ok && formatMessage(ok.text) || 'OK',
                    style: ok && ok.style,
                    callback: () => {
                        this.close();
                        ok && typeof ok.callback === 'function' && ok.callback();
                    },
                },
            ],
        });
    };

    pop = (args) => {
        return this._pop(args);
    };

    close = () => {
        this._animatedHide();
        if (this._resolve) {
            this._resolve({index: -1, button: undefined});
            this._resolve = null;
        }
        this.setState({
            isVisible: false,
            isLoading: false,
            type: false,
        });
    };

    _renderOverlay = (styles) => {
        const {isOverlay} = this.props;
        if (isOverlay) {
            return (
                <TouchableWithoutFeedback onPress={this._onOverlayDismiss}>
                    <View style={styles.overlay}/>
                </TouchableWithoutFeedback>
            );
        }
        return null;
    };

    _renderContent = (styles) => {
        const animated = {transform: [{scale: this.springValue}]};
        return (
            <Animated.View
                style={[styles.tipBoxView, animated, {backgroundColor: this.state.isLoading ? 'rgba(00, 00, 00, 0)' : '#fff'}]}>
                {this.state.content}
            </Animated.View>
        );
    };

    render() {
        const {isVisible} = this.state;
        const styles = styleSheet;
        const animated = {transform: [{scale: this.springValue}]};
        if (isVisible) {
            return (
                <View style={[styles.popupContainer]}>
                    {this._renderOverlay(styles)}
                    {this._renderContent(styles)}
                    {

                        this.state.type ?
                            <LottieView
                                style={{
                                    width: 50,
                                    height: 50,
                                }}
                                autoPlay
                                source={require('../../assets/animations/loading-animation.json')}
                            /> : null
                    }
                </View>
            );
        }
        return <Animated.View style={[styles.hidden, animated]}/>;
    }
}

export default (injectIntl(DialogBox));
