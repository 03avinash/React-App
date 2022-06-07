import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

const Photos = () => {
  const [photos, setPhotos] = useState([]);
  const params = useParams();
  const { albumid } = params;
  useEffect(() => {
    fetch(" https://jsonplaceholder.typicode.com/photos ")
      .then((response) => response.json())
      .then((data) => {
        const result = data.filter((element, index) => {
          return albumid == element.albumId;
        });
        setPhotos(result);
      });
  }, []);

  return (
    <div>
      <div className="parent_album">
        {photos.map((data, index) => {
          return (
            <div className="photos">
              <img src={data.thumbnailUrl} alt="" />
              <p>{data.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default Photos;
