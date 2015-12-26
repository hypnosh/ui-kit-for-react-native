var React = require('react-native');
var {
	StyleSheet,
	Text,
	TextInput,
	TouchableHighlight,
	View,
} = React;

/* Components - BootStrap :) */
var PollOption = React.createClass({
	_tapped: function() {
		this.props.onClick(this);
	},
	render: function() {
		return (
			<TouchableHighlight
				onPress={this._tapped}
				style={[styles.pollOption, this.props.isSelected && styles.pollOptionSelected]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextBlack]}>{this.props.optionText}</Text>
			</TouchableHighlight>
		);
	},
});
var TextBoxwithLabel = React.createClass({
	render: function() {
		return (
			<View style={styles.textLabelBox}>
				<Text
					style={styles.textLabel}
				>{this.props.labelText}</Text>
				<TextInput
					style={styles.textInput}
					onChange={this.props.updateFunction}
					placeholder={this.props.labelText} />
			</View>
		);
	},
});
var ButtonDefault = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				onPress={this.props.onClick}
				style={[styles.btn, styles.btnDefault]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextBlack]}>{this.props.buttonText}</Text>
			</TouchableHighlight>
		);
	},
});
var ButtonPrimary = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				onPress={this.props.onClick}
				style={[styles.btn, styles.btnPrimary]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextWhite]}>{this.props.buttonText}</Text>
			</TouchableHighlight>
		);
	},
});
var ButtonSuccess = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				onPress={this.props.onClick}
				style={[styles.btn, styles.btnSuccess]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextWhite]}>{this.props.buttonText}</Text>
			</TouchableHighlight>
		);
	},
});
var ButtonInfo = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				onPress={this.props.onClick}
				style={[styles.btn, styles.btnInfo]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextWhite]}>{this.props.buttonText}</Text>
			</TouchableHighlight>
		);
	},
});
var ButtonWarning = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				onPress={this.props.onClick}
				style={[styles.btn, styles.btnWarning]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextWhite]}>{this.props.buttonText}</Text>
			</TouchableHighlight>
		);
	},
});
var ButtonDanger = React.createClass({
	render: function() {
		return (
			<TouchableHighlight
				onPress={this.props.onClick}
				style={[styles.btn, styles.btnDanger]}
				underlayColor="#656565">
				<Text
					style={[styles.btnTextWhite]}>{this.props.buttonText}</Text>
			</TouchableHighlight>
		);
	},
});

var styles = StyleSheet.create({
	textLabelBox: {
		alignItems: "flex-start",
		margin: 10,
		flex: 1,
	},
	textLabel: {
		height: 14,
		color: "#767676",
		fontSize: 13,
		marginBottom: 0,
		flexDirection: 'row',
	},
	textInput: {
		height: 34,
		paddingTop: 6,
		paddingBottom: 6,
		paddingLeft: 12,
		paddingRight: 12,
		fontSize: 14,
		backgroundColor: '#ffffff',
		borderWidth: 1,
		borderColor: '#000000',
		borderRadius: 4,
		color: '#555555',
	},
	btn: {
		paddingTop: 8,
		paddingBottom: 6,
		paddingLeft: 12,
		paddingRight: 12,
		borderRadius: 4,
		borderWidth: 1,
		// height: 35,
		margin: 5,
		alignItems: 'center',
		alignSelf: 'center',
	},
	btnTextWhite: {
		fontSize: 14,
		lineHeight: 16,
		color: '#ffffff',
	},
	btnTextBlack: {
		fontSize: 14,
		lineHeight: 16,
		color: '#333333',
	},
	btnDefault: {
		backgroundColor: '#ffffff',
		borderColor: '#cccccc',
	},
	btnPrimary: {
		backgroundColor: '#337ab7',
		borderColor: '#204d74',
	},
	btnSuccess: {
		backgroundColor: '#5cb85c',
		borderColor: '#4cae4c',
	},
	btnInfo: {
		backgroundColor: '#5bc0de',
		borderColor: '#46b8da',
	},
	btnWarning: {
		backgroundColor: '#f0ad4e',
		borderColor: '#eea236',
	},
	btnDanger: {
		backgroundColor: '#d9534f',
		borderColor: '#d43f3a',
	},
});

module.exports = [
	TextBoxwithLabel,
	ButtonDefault,
	ButtonPrimary,
	ButtonSuccess,
	ButtonInfo,
	ButtonWarning,
	ButtonDanger,
	styles,
];