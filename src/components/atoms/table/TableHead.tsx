import { useState, useEffect } from "react";
import api from "../../../axiosData.mts";

export const TableHead = ({HeadPath}: {HeadPath: string} ) => {
  const [data, setData] = useState<any>([])

  const fetchData = async () => {
    try {
      const response = await api.get(`/${HeadPath}`);
      if (Array.isArray(response.data.items)) {
        setData(Object.keys(response.data.items[0]));
      } else {
        console.error('Data is not an array:', response.data.items);
      }
    } catch (error) {
      console.error(error);
    }
  };  

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <thead>
        <tr>
          {data.map((column: any, id: number)=> {
            return <th key={id}>{column}</th>
          })}
          <th>Acciones</th>
        </tr>
        
      </thead>
    </>
  );
};

export default TableHead;
