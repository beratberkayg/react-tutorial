import { useNavigate } from "react-router-dom";

export const data = [
  {
    id: 0,
    name: "react",
    description: "react açıklama",
  },
  {
    id: 1,
    name: "vue",
    description: "vue açıklama",
  },
  {
    id: 2,
    name: "angular",
    description: "angular açıklama",
  },
];

const Home = () => {
  const navigate = useNavigate();

  return (
    <div>
      {data.map((dt, index) => (
        <div
          onClick={() => navigate(`detail/${dt.id}`)}
          style={{ cursor: "pointer", marginBottom: "30px" }}
          key={index}
        >
          <div>{dt.name}</div>
          <div>{dt.description}</div>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
