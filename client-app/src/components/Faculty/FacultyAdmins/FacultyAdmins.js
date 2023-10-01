import React, { useEffect, useState } from 'react';
import { Button } from '../../shared/Button/Button';
import { H2 } from '../../shared/Headers/Headers.styled';
import { Table } from '../../shared/Table/Table';
import { FacultyAdminsWrapper } from './FacultyAdmins.styled';
import {
  ActionsString,
  AllFacultyAdminsString,
  CreateNewFacultyAdminString,
  EmailString,
  FirstNameString,
  IdString,
  LastNameString,
  PhotoString,
  submitString
} from '../../../helpers/strings';
import { ModalComponent } from '../../shared/ModalComponent/ModalComponent';
import { ModalType } from '../../../enums/ModalType';
import { TableTypes } from '../../shared/Table/tableTypes';
import { useDispatch, useSelector } from 'react-redux';
import { loadAllFacultyAdmins } from '../../../redux/Faculty/facultyActions';

export function FacultyAdmins() {
  const [modal, setModal] = useState(false);
  const dispatch = useDispatch();
  const allFacultyAdmins = useSelector((state) => state.faculties.allFacultyAdmins);

  useEffect(() => {
    dispatch(loadAllFacultyAdmins());
  }, []);

  const openModalHandler = () => {
    setModal(true);
  };

  const closeModalHandler = () => {
    setModal(false);
  };

  return (
    <FacultyAdminsWrapper>
      <H2>{AllFacultyAdminsString}</H2>
      <Table
        columns={[
          IdString,
          PhotoString,
          EmailString,
          FirstNameString,
          LastNameString,
          ActionsString
        ]}
        items={allFacultyAdmins}
        type={TableTypes.ALL_FACULTY_ADMINS}
      />
      <Button
        type={submitString}
        text={CreateNewFacultyAdminString}
        onClickMethod={openModalHandler}
      />
      <ModalComponent
        isOpen={modal}
        closeModal={closeModalHandler}
        type={ModalType.CreateFacultyAdmin}
      />
    </FacultyAdminsWrapper>
  );
}
