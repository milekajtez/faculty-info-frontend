import React, { useEffect, useState } from 'react';
import { Button } from '../../shared/Button/Button';
import { H2 } from '../../shared/Headers/Headers.styled';
import { ModalComponent } from '../../shared/ModalComponent/ModalComponent';
import { Table } from '../../shared/Table/Table';
import { FaculitiesWrapper } from './Faculties.styled';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllFaculties } from '../../../redux/Faculty/facultyActions';
import {
  ActionsString,
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
import { ModalType } from '../../../enums/ModalType';

export function Faculties() {
  const dispatch = useDispatch();
  const allFaculties = useSelector((state) => state.faculties.allFaculties);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    dispatch(loadAllFaculties());
  }, []);

  const openModalHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <FaculitiesWrapper>
      <H2>{AllFacultiesString}</H2>
      <Table
        columns={[IdString, TinString, NameString, DescritionString, LocationString, ActionsString]}
        items={allFaculties}
        type={TableTypes.ALL_FACULTIES}
      />
      <Button type={submitString} text={CreateNewFacultyString} onClickMethod={openModalHandler} />
      <ModalComponent
        isOpen={modal}
        closeModal={closeModalHandler}
        type={ModalType.CreateFaculty}
      />
    </FaculitiesWrapper>
  );
}
