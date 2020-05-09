/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

console.log('app is running!!!')


// class IndecisionApp extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleDeleteOptions = this.handleDeleteOptions.bind(this)
//     this.handleDeleteOption = this.handleDeleteOption.bind(this)
//     this.handleAddOption = this.handleAddOption.bind(this)
//     this.handlePick = this.handlePick.bind(this)
//     this.state = {
//       options: []
//     }
//   }
//   componentDidMount() {
//     try {
//       console.log('loading data')
//       const json = localStorage.getItem('options');
//       const options = JSON.parse(json);
//       if (options) {
//         this.setState(() => ({options: options})) // can be written just ({ options })
//       }
//     }
//     catch (event) {
//       // Do nothing at all
//     }
//   }

//   componentDidUpdate(prevProps, prevState) {
//     console.log(prevState.options)
//     console.log(this.state.options)
//     if (prevState.options.length !== this.state.options.length) {
//       console.log('saving data')
//       const json = JSON.stringify(this.state.options);
//       localStorage.setItem('options', json);
//     }
//   }
  
//   handleDeleteOptions() {
//     this.setState(() => ({ options: [] }));
//   }

//   handleDeleteOption(optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter(option => {
//         return optionToRemove !== option
//       })
//     }))
//   }

//   handleDeleteOption(optionToRemove) {
//     this.setState((prevState) => ({
//       options: prevState.options.filter((option) => optionToRemove !== option)
//     }));
//   }

//   handlePick() {
//     const randNumb = Math.floor(Math.random() * this.state.options.length);
//     const pick = this.state.options[randNumb]
//     alert(pick)
//   }

//   handleAddOption(option) {
//     this.setState((prevState) => ({ options: prevState.options.concat([option]) }));
//   }
  
//   render() {
//     const subtitle = 'Whatever make a pick';

//     return (
//       <div>
//         <Header subtitle={subtitle} />
//         <Action hasOptions={this.state.options.length > 0} handlePick={this.handlePick}  />
//         <Options handleDeleteOptions={this.handleDeleteOptions} handleDeleteOption={this.handleDeleteOption} options={this.state.options} />
//         <AddOption handleAddOption={this.handleAddOption} />
//       </div>
//     )
//   }
// }

// const Header = (props) => {
//   return (
//     <div>
//       <h1>{props.title}</h1>
//       {props.subtitle && <h2>{props.subtitle}</h2>}
//     </div>
//   );
// };

// Header.defaultProps = {
//   title: 'Indecision',
// }

// const Action = (props) => {
//   return (
//     <div>
//       <button onClick={props.handlePick} disabled={!props.hasOptions}>
//         What should I do?
//       </button>
//     </div>
//   )
// }

// const Options = (props) => {
//   return (
//     <div>
//       <button onClick={props.handleDeleteOptions}>Remove All</button>
//       <p>These are your options:</p>
//       {
//         props.options.map((option) => (
//           <Option 
//             handleDeleteOption={props.handleDeleteOption}
//             optionText={option} 
//             key={option}
//           />
//         ))
//       }
//     </div>  
//   )
// }

// const Option = (props) => {
//   return (
//     <div>
//       <li>{props.optionText}</li>
//       <button 
//         onClick={(e) => {
//           props.handleDeleteOption(props.optionText)
//         }}
//       >
//         remove
//       </button>
//     </div>
//   )
// }

// class AddOption extends React.Component {
//   constructor(props) {
//     super(props)
//     this.handleOptionSubmitted = this.handleOptionSubmitted.bind(this)
//   }

//   handleOptionSubmitted(event) {
//     event.preventDefault();
//     const option = event.target.elements.option.value.trim();
//     if (option) {
//       this.props.handleAddOption(option)
//       event.target.elements.option.value = '';
//     }
//   }

//   render() {
//     return (
//       <div>
//         <form onSubmit={this.handleOptionSubmitted}>
//           <label htmlFor="">New Option</label>
//           <input type="text" name='option' />
//           <input type="submit"/>
//         </form>
//       </div>
//     )
//   }
// }

// ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

/***/ })
/******/ ]);