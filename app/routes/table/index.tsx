import { FC } from "react";

type TableProps = {
  columns: string[];
  data: { [key: string]: string | number }[];
};

const columns = ["Name", "Age", "Address"];

const data = [
  { Name: "John Doe", Age: 32, Address: "123 Main St" },
  { Name: "Jane Doe", Age: 31, Address: "456 Park Ave" },
  { Name: "Joe Schmoe", Age: 33, Address: "789 South St" },
];

const Table: FC<TableProps> = ({ columns, data }) => {
  return (
    <div className="overflow-x-auto">
      <table className="min-w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            {columns.map((col) => (
              <th key={col} className="border border-gray-300 p-2 text-left">
                {col}
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="hover:bg-gray-100">
              {columns.map((col) => (
                <td key={col} className="border border-gray-300 p-2">
                  {row[col]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default function Index() {
  return (
    <div className="flex flex-col items-center">
      <Table columns={columns} data={data} />
    </div>
  );
}
