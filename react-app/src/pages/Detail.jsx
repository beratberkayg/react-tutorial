import { useParams } from "react-router-dom";
import { data } from "./Home";
import { useEffect, useState } from "react";

const Detail = () => {
  const { id } = useParams();

  const [getData, setGetData] = useState(null);

  useEffect(() => {
    if (id) {
      setGetData(data.find((dt) => dt.id == id));
    }
  }, [id]);
  console.log(getData);

  return (
    <div>
      <div>
        {getData?.name}
        <br />
        {getData?.description}
      </div>
    </div>
  );
};

export default Detail;
