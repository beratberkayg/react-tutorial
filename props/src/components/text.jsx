const Text = ({ number, name }) => {
  console.log(number, "number");
  console.log(name, "name");
  return (
    <div>
      {name} Eğitimi {number}
    </div>
  );
};

export default Text;
