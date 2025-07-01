function Button(props) {
    return <button onClick={props.handleClick}>Click Me</button>;
}

function App() {
    const handleClick = () => {
        alert("Button was clicked!");
    };

    return <Button handleClick={handleClick} />;
}

export default App;
