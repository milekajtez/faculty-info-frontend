import React, { useState } from 'react';
import { Button } from '../../shared/Button/Button';
import { H2 } from '../../shared/Headers/Headers.styled';
import { Table } from '../../shared/Table/Table';
import { FacultyAdminsWrapper } from './FacultyAdmins.styled';

export function FacultyAdmins() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <FacultyAdminsWrapper>
      <H2>All Faculty Admins</H2>
      <Table columns={['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5']} />
      <Button type={'submit'} text={'Create new faculity admin'} onClickMethod={openModal} />
    </FacultyAdminsWrapper>
  );
}
