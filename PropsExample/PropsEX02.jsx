function UserProfile(props) {
    return (
        <div>
            <h1>{props.name}</h1>
            <p>Age: {props.age}</p>
            <p>Location: {props.location}</p>
        </div>
    );
}

function App() {
    return <UserProfile name="Alice" age={25} location="New York" />;
}

export default App;
