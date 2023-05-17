import './Pets.css'
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

const Pets = () => {
  return (
    <div className="container">
      <div className="app-containet">
        <Filter />
        <Cards cats={[]}/>
      </div>
    </div>
  );
};

export default Pets;
