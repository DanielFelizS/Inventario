import { useState, useEffect } from "react";
import api from "../../../axiosData.mts";

export const TableHead = ({ HeadPath }: { HeadPath: string }) => {
  const [columns, setColumns] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await api.get(`/${HeadPath}`);
        if (response.data && Array.isArray(response.data.items)) {
          // Extract column names from the first item in the response
          const firstItem = response.data.items[0];
          const columnNames = Object.keys(firstItem);
          setColumns(columnNames);
        } else {
          console.error("Data is not in the expected format:", response.data);
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [HeadPath]);

  return (
    <thead>
      <tr>
        {columns.map((column, index) => (
          <th key={index}>{column}</th>
        ))}
        <th>Acciones</th>
      </tr>
    </thead>
  );
};

export default TableHead;
