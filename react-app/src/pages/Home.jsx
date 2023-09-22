import { useNavigate } from "react-router-dom";

const Home = () => {
  const data = [
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
  const navigate = useNavigate();
  return (
    <div>
      {data.map((item) => (
        <div
          onClick={() => navigate(`detail/${item.id}`)}
          style={{ cursor: "pointer", marginBottom: "30px" }}
          key={item.id}
        >
          <h1>{item.name}</h1>
          <p>{item.description}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default Home;
