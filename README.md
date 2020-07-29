# stepbar
Step Bar using React and Webpack.
This library provides a stepbar widget for use with your project. 

Library can be installed by adding this line to package.json dependancies:
```js
"stepbar": "darincardin/stepbar",
```





```jsx
import Form from 'form'; 

state = { step: 0}
	
array = [	{label:"A"}, {label:"B"}, {label:"C"},	{label:"D"}]

<StepBar index={this.state.step} array={this.array}  />
```
