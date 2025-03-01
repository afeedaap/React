import React, { useEffect, useState, createContext, useMemo } from "react";
import SimpleList from "../SimpleList";
import Tools from "../Tools";
import JustInfo from "../JustInfo";

const MyContext = createContext();

function HomePage() {
  const [showLabel, setShowLabel] = useState(true);
  const [activeState, setActiveState] = useState("all");
  const [data, setData] = useState([]);

  // Fetch data on mount
  useEffect(() => {
    // console.log("Component did mount...");
    fetch("/data.json")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  // Handle select change
  const onListChange = (event) => {
    // console.log(event.target.value);
    setActiveState(event.target.value);
  };

  // Handle delete action
  const handleDelete = (item) => {
    // console.log("Delete item:", item);
    setData((prevData) => prevData.filter((element) => element.id !== item.id));
  };

  // Handle label click
  const handleLabelClick = (arg) => {
    setActiveState(arg);
  };

  // Handle showLabel checkbox
  const handleShowLabel = (event) => {
    setShowLabel(event.target.checked);
  };

  // Filter data based on activeState
  const filteredData = data.filter((item) => {
    if (activeState === "all") return true;
    if (activeState === "active") return item.isActive === true;
    if (activeState === "non-active") return item.isActive === false;
    return false;
  });
  // const value={
  //   'key':'value1'
  // }
const value=useMemo(()=>{
  return{
    'key':'value1'
  }
},[])

  console.log("Rendering HomePage...");

  return (
    <div>
      <div>
        <input
          checked={showLabel}
          onChange={handleShowLabel}
          type="checkbox"
        />
        Show Label
      </div>

      <MyContext.Provider value={showLabel}>
        <Tools labelValue={activeState} onAction={onListChange}>
          <SimpleList
            onLabelClick={handleLabelClick}
            data={filteredData}
            onAction={handleDelete}
          />
        </Tools>
      </MyContext.Provider>

      <JustInfo testValue={value} showLabel={showLabel} />
    </div>
  );
}

export default HomePage;
export { MyContext };
