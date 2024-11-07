import { useLoaderData } from "react-router-dom"
import ShowElement from "./Components/ShowElement/ShowElement";
import { useState } from "react";

function App() {
  const lodedcoffees = useLoaderData();
  const [coffees, setCoffees] = useState(lodedcoffees);


  return (
    <div className="mt-5 my-20">  
      <h1>Coffee Shope : {coffees.length}</h1>
      <div className="grid md:grid-cols-2 gap-4">
      {
        coffees.map(coffee => <ShowElement
          key={coffee._id}
          coffee={coffee}
          coffees={coffees}
          setCoffees={setCoffees}
        ></ShowElement>)
      }
      </div>
    </div>
  )
}

export default App
