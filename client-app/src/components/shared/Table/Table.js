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

export function Table(props) {
  const { columns } = props;

  return (
    <TableWrapper>
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
      <TableContent>
        <TableComponent>
          <TableBody>
            <TableRow>
              <TableField>AAC</TableField>
              <TableField>AUSTRALIAN COMPANY </TableField>
              <TableField>$1.38</TableField>
              <TableField>+2.01</TableField>
              <TableField>-0.36%</TableField>
            </TableRow>
            <TableRow>
              <TableField>AAD</TableField>
              <TableField>AUSENCO</TableField>
              <TableField>$2.38</TableField>
              <TableField>-0.01</TableField>
              <TableField>-1.36%</TableField>
            </TableRow>
          </TableBody>
        </TableComponent>
      </TableContent>
    </TableWrapper>
  );
}
