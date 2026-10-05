import { useState } from "react";

const Profile = () => {
  const [profile, setProfile] = useState({
    name: "",
    age: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setProfile({
      ...profile,
      [name]: value,
    });
  };

  return (
    <div>
      <h1>User Profile</h1>

      <div>
        <label>
          Name ni lods:
          <input
            type="text"
            name="name"
            value={profile.name}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <label>
          Age ni lods:
          <input
            type="number"
            name="age"
            value={profile.age}
            onChange={handleChange}
          />
        </label>
      </div>

      <div>
        <h2>Profile Information</h2>

        <p>Name ni lodi: {profile.name}</p>
        <p>Age mo lude: {profile.age}</p>
      </div>
    </div>
  );
};

export default Profile;