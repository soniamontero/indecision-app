class VisibilityToggle extends React.Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleClick() {
    this.setState((prevState) => {
      return {
        visibility: !prevState.visibility
      }
    })
  }

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Click me</button>
        {
          this.state.visibility && (
            <div>
              Now you see me!
            </div>
          )
        }
      </div>
    )
  }
}


ReactDOM.render(<VisibilityToggle />, document.getElementById('app'));

// Correction:

// let visibility = false;

// const toggleVisibility = () => {
//   visibility = !visibility;
//   renderTemplate();
// }

// const appRoot = document.querySelector("#app")

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility toggle</h1>
//       <button id="displayButton" onClick={toggleVisibility}>
//         Show details
//       </button>
//       {
//         visibility && (
//           <div>
//             <p>Hellooooo I'm displaying!</p>
//           </div>
//         )
//       }
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }


// renderTemplate();





// My solution:
// const onClickButton = () => {
//   const text = document.querySelector("#text-to-display")
//   const btn = document.querySelector("#displayButton")
//     if (btn.innerText == 'Show details') {
//       btn.innerText = 'Hide details'
//       text.style.display = "block"
//     } else {
//       btn.innerText = 'Show details'
//       text.style.display = "none"
//     }
// }

// const appRoot = document.querySelector("#app")

// const renderTemplate = () => {
//   const template = (
//     <div>
//       <h1>Visibility toggle</h1>
//       <button id="displayButton" onClick={onClickButton}>Show details</button>
//       <p style={{display: "none"}} id="text-to-display">Hellooooo I'm displaying!</p>
//     </div>
//   )
//   ReactDOM.render(template, appRoot)
// }


// renderTemplate();
