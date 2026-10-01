    const ArrayPractice = () => {
        const fruits = ["apple", "banana", "cherry", "date", "elderberry"];
        
        const numbers = [1,2,3,4,5,6,7];

        const userInfo = [
            {id: 1, name: "Fuino", age: 19, location: "pilipins"},
            {id: 2, name: "Wesui", age: 19, location: "pilipins"},
            {id: 3, name: "Xynons", age: 19, location: "pilipins"},

        ]
        return (
        <main>

        <h1>Fruit List:</h1>
        <ul>
            {fruits.map((fruits) => (
                <li key={fruits}>{fruits}</li>
            ))}
        </ul>

            <h1>Number List:</h1>
            <ul>
                {numbers.map((numbers) => (
                <li key={numbers}>{numbers}</li>
                ))}
            </ul>

            <h1>User Information: </h1>
            {userInfo.map(({id, name, age, location}) => (
                <ul key={id}>
                    <p>User: {name}</p>
                    <p>Age: {age}</p>
                    <p>Location: {location}</p>
        </ul>
            ))}
        </main>
        );
    };

    export default ArrayPractice;