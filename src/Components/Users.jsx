import "../CSS/style.css";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => setUsers(data));
  }, []);
  console.log(users);
  return (
    <>
      <div className="Parent">
        {users.map((element, index) => {
          return (
            <div key={element.id} className="Child">
              <p className="name">{element.name}</p>
              <p>{element.username}</p>
              <p>{element.email}</p>
              <p>{element.address.city}</p>

              <Link className="btn" to={`/albums/${element.id}`}>
                View Album list
              </Link>
            </div>
          );
        })}
      </div>
    </>
  );
};
export default Users;
