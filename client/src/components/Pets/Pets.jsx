import './Pets.css'
import { useEffect, useState } from 'react';
import axios from "axios";
import Filter from "../Filter/Filter";
import Cards from "../Cards/Cards";

const Pets = () => {
  const [cats, setCats] = useState([]);
  const [filtredCats, setFilteredCats] = useState([]);
  const [filters, setFilters] = useState({
    gender: "any",
    favoured: "any",
  })

  console.log(cats)
  const fetchCats = async() => {
    const response = await axios.get("http://localhost:4000/cats");
    setCats(response.data);
    setFilteredCats(response.data);
  }
  
  useEffect(()=>{
    fetchCats();
  }, [])

  useEffect(() => {
    let catsFiltered = [...cats];
    if (filters.gender !== "any") {
      catsFiltered = catsFiltered.filter(
        (cat) => cat.gender === filters.gender
      );
    }
    if (filters.favoured !== "any") {
      catsFiltered = catsFiltered.filter((cat) => {
        console.log(
          cat.favoured,
          filters.favoured,
          cat.favoured === filters.favoured
        );
        return (
          cat.favoured === (filters.favoured === "favoured" ? true : false)
        );
      });
    }
    setFilteredCats(catsFiltered);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filters]);

  return (
    <div className="container">
      <div className="app-container">
        <Filter filters={filters} setFilters={setFilters}/>
        <Cards cats={filtredCats} setCats={setCats}/>
      </div>
    </div>
  );
};

export default Pets;
