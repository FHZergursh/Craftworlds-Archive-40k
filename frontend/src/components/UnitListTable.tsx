import React, { useEffect, useState } from "react";


interface unitInterface {
  id: number,
  name: string,
  movement: string,
  toughness: number,
  save: number,
  wounds: number,
  leadership: number,
  oc: number,
  cost: number
}

const UnitListTable = () => {
  const [unit, setUnit] = useState<unitInterface[]>([])

  useEffect(() => {
    const fetchUnits = async () => {
      try {
        const response = await fetch("http://localhost:3000/api/simpleunits/");
        const result = await response.json();
        setUnit(result.data)
        console.log("Fetched data: ", result)

      } catch (error) {
        console.error("Error fetching employees:", error)
      }
    }
    fetchUnits()
  }, [])

  return (
    <div>
      <div className="relative overflow-x-auto bg-neutral-primary-soft shadow-xs rounded-base border-b border-default">
        <table className="w-full text-sm text-left rtl:text-right text-body">
          <caption className="text-lg font-medium text-left rtl:text-right text-heading">
            <span className="flex justify-center">Overview</span>
            <p className="mt-1.5 text-sm font-normal text-body">
              Craftworld Eldar are a high mobility, low durability glass cannon army that rely on elite infantry in dangerous transports and often lots of jetbikes to win the day. They have some of the best psychic in the game alongside this, buffing up their forces to new heights while marking enemy units with powerful debuffs like Doom to make sure their specialists pack the punch they should. Eldar can struggle to contest objectives due to their poor durability, so they will often be scoring victory points in the back half of the game, after most of the enemy army is dead.
            </p>
          </caption>
          <thead className="text-lg text-body bg-neutral-secondary-medium border-b border-t border-default-medium">
            <tr>
              <th>Name</th>
              <th>Cost</th>
              <th>View</th>
              <th>Edit</th>
              <th>Delete</th>


            </tr>
          </thead>
          <tbody>
            {unit.map ((item) => (
              <tr>
                <td>{item.name}</td>
                <td>{item.cost} points</td>
                <td><button className="bg-blue-400 my-2 px-3 border text-l text-black">{item.name}</button></td>
                <td><button className="bg-orange-400 my-2 px-3 border text-l text-black">{item.name}</button></td>
                <td><button className="bg-red-400 my-2 px-3 border text-l text-black">{item.name}</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UnitListTable;
