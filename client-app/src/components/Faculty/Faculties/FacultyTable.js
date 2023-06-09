import React from 'react';
import { TableField, TableRow } from '../../shared/Table/Table.styled';

export function FacultyTable(props) {
  const { allFaculties } = props;

  return (
    <>
      {allFaculties.map((item, index) => {
        return (
          <TableRow key={index}>
            <TableField>{item.id}</TableField>
            <TableField>{item.tin}</TableField>
            <TableField>{item.name}</TableField>
            <TableField>{item.description}</TableField>
            <TableField>{item.location}</TableField>
          </TableRow>
        );
      })}
    </>
  );
}
