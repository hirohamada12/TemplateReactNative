import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {View, Text, TouchableOpacity} from 'react-native';
import styleShape from './style-shape';
import Icon from 'react-native-vector-icons/FontAwesome5';
import styleSheet from './styles';
import {Colors} from 'styles';

export default class PopContent extends Component {

    static propTypes = {
        title: PropTypes.string,
        content: PropTypes.oneOfType([
            PropTypes.string,
            PropTypes.number,
            PropTypes.arrayOf(PropTypes.oneOfType([
                PropTypes.string,
                PropTypes.number,
            ])),
        ]),
        btns: PropTypes.arrayOf(PropTypes.shape({
            text: PropTypes.string.isRequired,
            style: PropTypes.object,
            callback: PropTypes.func,
        })),
        style: PropTypes.shape(styleShape),
        icon: PropTypes.string,
        color: PropTypes.string,
        buttonFlow: PropTypes.oneOf(['auto', 'column', 'row']),
    };

    static defaultProps = {
        buttonFlow: 'auto',
        style: {},
        content: '',
        icon: 'bell',
        color: Colors.Primary,
    };

    render() {
        const {title, content, btns} = this.props;
        const styles = styleSheet;
        const buttonFlowAuto = this.props.buttonFlow.toLowerCase() === 'auto';
        const buttonFlowColumn = buttonFlowAuto ? btns.length !== 1 ? true : false : this.props.buttonFlow.toLowerCase() === 'column';
        const btnNumber = btns.length;
        const btnContent = [];
        Array.prototype.forEach.call(btns, (btn, index) => {
            btnContent.push(
                <TouchableOpacity style={buttonFlowColumn ? styles.btnTextBoxMulti : styles.btnTextBox}
                                  onPress={btn.callback} key={`btnTextBox${index}`}>
                    <Text
                        style={[buttonFlowColumn ? styles.btnTextTextBoxMulti : styles.btnText, btn.style]}>{btn.text}</Text>
                </TouchableOpacity>,
            );
            index !== btnNumber - 1 && btnContent.push(<View
                style={buttonFlowColumn ? styles.btnLineHorizontal : styles.btnLineVertical}
                key={`btnLine${index}`}/>);
        });

        return (
            <View style={styles.tipBox}>
                <View style={styles.tipTitleBox}><Icon color={this.props.color} name={this.props.icon}
                                                       size={30}/></View>
                {title && <View style={styles.tipTitleBox}><Text style={styles.tipTitle}>{title}</Text></View>}
                <View style={styles.tipContentBox}>
                    {(() => {
                        let tipContent = [];
                        if (content instanceof Array) {
                            content.forEach((item, index, arr) => {
                                if (index > 9) {
                                    return;
                                }
                                item && (tipContent[index] = (
                                    <Text style={styles.tipContent} key={`tipContent${index}`}>{item}</Text>));
                            });
                        } else {
                            content && (tipContent[0] = (
                                <Text style={styles.tipContent} key={'tipContent'}>{content}</Text>));
                        }
                        return tipContent;
                    })()}
                </View>
                <View style={styles.line}></View>
                <View style={buttonFlowColumn ? styles.btnBoxMulti : styles.btnBox}>
                    {btnContent}
                </View>
            </View>
        );
    }

}
