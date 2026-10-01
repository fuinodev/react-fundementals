const UserList = () => {
    const users = [
        { id: 1, name: "FuinoDev", age: 19 },
        { id: 2, name: "Fuino", age: 19 },
        { id: 3, name: "Wesui", age: 19 },
    ];
    return (
        <div>
          <h1>USER LIST:</h1>
          <ul>
            {users.map((user) => (
                <li key={user.id}>
                    ID:   {user.id}  |
                   Name: {user.name} |
                   Age:  {user.age}
               </li>
            ))}
          </ul>
        </div>

    );
};

export default UserList;