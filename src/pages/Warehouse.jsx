import { useState, useEffect } from "react";
import axios from "axios";
import DonutSpinner from "../components/DonutSpinner/DonutSpinner";

const API_URL = import.meta.env.VITE_API_URL;

const Warehouse = () => {
  const [warehouses, setWarehouses] = useState([]);

  useEffect(() => {
    const fetchWarehouses = async () => {
      try {
        const response = await axios.get(`${API_URL}/warehouses`);
        setWarehouses(response.data);
        console.log(response.data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchWarehouses();
  }, []);

  return (
    <div className="App">
      <h1>Warehouses</h1>
      {!warehouses.length ? (
        <DonutSpinner />
      ) : (
        <ul>
          {warehouses.map((warehouse) => (
            <li key={warehouse.id}>{warehouse.name}</li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Warehouse;
