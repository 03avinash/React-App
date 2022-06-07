import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Albums = () => {
  const [albums, setAlbums] = useState([]);

  const params = useParams();

  const { id } = params;

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/albums")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((data, index) => {
          return parseInt(id) === data.userId;
        });
        console.log("Test", result);
        setAlbums(result);
      });
  }, []);

  return (
    <div>
      <center>
        <div className="parent_album">
          {albums.map((data, index) => {
            console.log(data.userId);
            return (
              <div className="albumlist" key={data.id}>
                <p>{data.title}</p>
              </div>
            );
          })}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              width: "20%",
            }}
          >
            <Link className="btn" to={`/photos/${id}`}>
              Show Photos
            </Link>
            <Link className="btn" to="/">
              Back to Home page
            </Link>
          </div>
        </div>
      </center>
    </div>
  );
};
export default Albums;
