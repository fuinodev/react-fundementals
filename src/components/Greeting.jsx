const Greet = () => {
    const currentDate = new Date().toLocaleDateString();
    return (
        <div>
            <h1>Hello World</h1>
            <p>Current date today: {currentDate}</p>
        </div>
    );
};

export default Greet;
