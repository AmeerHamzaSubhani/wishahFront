// src/components/TableComponent.tsx

import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '../ui/table'; // Adjust the import based on your library

interface TableComponentProps {
  columns: Array<{ header: string; accessor: string }>; // Define your column structure
  data: Array<Record<string, any>>; // The data to be displayed
}

const TableComponent: React.FC<TableComponentProps> = ({ columns, data }) => {
  return (
    <Table>
      <TableHeader>
        <TableRow>
          {columns.map((column, index) => (
            <TableHead key={index}>{column.header}</TableHead>
          ))}
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row, rowIndex) => (
          <TableRow key={rowIndex}>
            {columns.map((column, colIndex) => (
              <TableCell key={colIndex}>{row[column.accessor]}</TableCell>
            ))}
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default TableComponent;
