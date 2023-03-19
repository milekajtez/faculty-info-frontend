import React, { useState } from 'react';
import { Button } from '../../shared/Button/Button';
import { H2 } from '../../shared/Headers/Headers.styled';
import { Modal } from '../../shared/Modal/Modal';
import { Table } from '../../shared/Table/Table';
import { FaculitiesWrapper } from './Faculities.styled';

export function Faculties() {
  const [modal, setModal] = useState(false);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <FaculitiesWrapper>
      <H2>All faculities</H2>
      <Table columns={['Column 1', 'Column 2', 'Column 3', 'Column 4', 'Column 5']} />
      <Button type={'submit'} text={'Create new faculity'} onClickMethod={openModal} />
      {modal ? <Modal /> : <></>}
    </FaculitiesWrapper>
  );
}
