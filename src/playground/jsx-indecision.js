console.log('App is running');

// JSX: Javascript XML (language extension to JS, like SCSS/Less for CSS)
const app = {
  title: "My App",
  subtitle: "Woohooo",
  options: []
}

const onFormSubmit = (event) => {
  event.preventDefault();
  const option = event.target.elements.option.value;
  if (option) {
    app.options.push(option);
    console.log(app.options)
    event.target.elements.option.value = "";
    renderTemplate();
  }
}

const onMakeDecision= () => {
  const randNumb = Math.floor(Math.random() * app.options.length);
  const option = app.options[randNumb];
  alert(option);
}

const removeAllOptions = () => {
  app.options = [];
  renderTemplate();
}

const appRoot = document.getElementById('app');
const renderTemplate = () => {
  const template = (
    <div>
      <h1>{app.title}</h1>
      {app.subtitle && <p>{app.subtitle}</p>}
      {app.options.length > 0 ? 'Here are your options' : 'No options'} 
      <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>
      <ul>
        {app.options.map((option) => {
          return <li key={option}>{option}</li>
        })}
      </ul>
      <form onSubmit={onFormSubmit}>
        <input type="text" name="option" />
        <button>Add option</button>
      </form>
      <button onClick={removeAllOptions}>Remove All Options</button>
    </div>
  );
  ReactDOM.render(template, appRoot)
}

renderTemplate();