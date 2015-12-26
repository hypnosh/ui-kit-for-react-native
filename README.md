# ui-kit-for-react-native
A UI Kit for React Native, based on Twitter Bootstrap.

While starting a React Native project, wouldn't it be nice to have UI elements which can be used out of the box, are good to look at, and can be reused?

This UI Kit is loosely based on styling from Twitter's Bootstrap.

**Installation**
Include uikit.js in your React Native project, and ````require```` it thus:
```
var [
    TextBoxwithLabel,
    ButtonDefault,
    ButtonPrimary,
    ButtonSuccess,
    ButtonInfo,
    ButtonWarning,
    ButtonDanger,
    styles,
] = require('./uikit.js');
```

**Usage**
***TextBoxwithLabel***
TextBoxwithLabel is a simple text input box along with a label.
```
<TextBoxwithLabel labelText="label" updateFunction={this.functionOnChange} />
```

***Buttons***
This kit imitates the six button styles from Twitter Bootstrap, but instead of segregating them by CSS classes, they are available as six components.
```
<ButtonPrimary
    buttonText="Press Me"
    onClick={this.functionOnPress} />
```
