import React, { useEffect, useState } from 'react';
import { Button } from '../../shared/Button/Button';
import { H2 } from '../../shared/Headers/Headers.styled';
import { Modal } from '../../shared/Modal/Modal';
import { Table } from '../../shared/Table/Table';
import { FaculitiesWrapper } from './Faculities.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllFaculties } from '../../../redux/Faculty/facultyActions';
import {
  AllFacultiesString,
  CreateNewFacultyString,
  DescritionString,
  IdString,
  LocationString,
  NameString,
  TinString,
  submitString
} from '../../../helpers/strings';
import { TableTypes } from '../../shared/Table/tableTypes';

export function Faculties() {
  const dispatch = useDispatch();
  const allFaculties = useSelector((state) => state.faculties.allFaculties);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(loadAllFaculties());
  }, []);

  const openModal = () => {
    setModal(!modal);
  };

  return (
    <FaculitiesWrapper>
      <H2>{AllFacultiesString}</H2>
      <Table
        columns={[IdString, TinString, NameString, DescritionString, LocationString]}
        items={allFaculties}
        type={TableTypes.ALL_FACULTIES}
      />
      <Button type={submitString} text={CreateNewFacultyString} onClickMethod={openModal} />
      {modal ? <Modal /> : <></>}
    </FaculitiesWrapper>
  );
}
