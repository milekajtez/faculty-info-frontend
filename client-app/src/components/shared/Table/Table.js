import React from 'react';
import {
  TableHeader,
  TableWrapper,
  TableComponent,
  TheadComponent,
  TableRow,
  TableField,
  TableContent,
  TableBody
} from './Table.styled';
import { FacultyTable } from '../../Faculty/Faculties/FacultyTable';
import { TableTypes } from './tableTypes';
import { FacultyAdminTable } from '../../Faculty/FacultyAdmins/FacultyAdminTable';

export function Table(props) {
  const { columns, items, type } = props;

  const displayHeader = () => {
    return (
      <TableHeader>
        <TableComponent>
          <TheadComponent>
            <TableRow>
              {columns.map((item, index) => {
                return <TableField key={index}>{item}</TableField>;
              })}
            </TableRow>
          </TheadComponent>
        </TableComponent>
      </TableHeader>
    );
  };

  const displayBody = () => {
    return (
      <TableContent>
        <TableComponent>
          <TableBody>
            {type === TableTypes.ALL_FACULTIES ? (
              <FacultyTable allFaculties={items} />
            ) : type === TableTypes.ALL_FACULTY_ADMINS ? (
              <FacultyAdminTable allFacultyAdmins={items} />
            ) : null}
          </TableBody>
        </TableComponent>
      </TableContent>
    );
  };

  return (
    <TableWrapper>
      {displayHeader()}
      {displayBody()}
    </TableWrapper>
  );
}
