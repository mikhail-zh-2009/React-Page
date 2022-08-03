function Welcome(props) {
    return <h1>Hello, {props.name}</h1>;
}

function Main() {
    return <div>
        <Welcome name="Anatoliy"/>
    </div>
}
const root = ReactDOM.createRoot(document.getElementById('root'));
const element = <Main/>;
root.render(element);
