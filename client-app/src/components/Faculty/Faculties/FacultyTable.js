import React, { useState } from 'react';
import { TableField, TableRow } from '../../shared/Table/Table.styled';
import deleteIcon from '../../../icons/delete.png';
import editIcon from '../../../icons/edit.png';
import { Logo } from '../../Navbar/Logo/Logo';
import {
  deleteFacultyString,
  deleteFacultySuccessful,
  editFacultyString
} from '../FacultyMessages';
import { useDispatch } from 'react-redux';
import { deleteFaculty, loadAllFaculties } from '../../../redux/Faculty/facultyActions';
import { toast } from 'react-toastify';
import { ModalType } from '../../../enums/ModalType';
import { ModalComponent } from '../../shared/ModalComponent/ModalComponent';
import { Fragment } from 'react';

export function FacultyTable(props) {
  const dispatch = useDispatch();
  const { allFaculties } = props;
  const [editModal, setEditModal] = useState(false);

  const openModalHandler = () => {
    setEditModal(true);
  };

  const closeModalHandler = () => {
    setEditModal(false);
  };

  const deleteFacultyHandler = (facultyId) => {
    dispatch(deleteFaculty(facultyId))
      .then(() => {
        toast(deleteFacultySuccessful);
        dispatch(loadAllFaculties());
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <>
      {allFaculties.map((item, index) => {
        return (
          <Fragment key={index}>
            <TableRow>
              <TableField>{item.id}</TableField>
              <TableField>{item.tin}</TableField>
              <TableField>{item.name}</TableField>
              <TableField>{item.description}</TableField>
              <TableField>{item.location}</TableField>
              <TableField>
                <Logo
                  title={editFacultyString}
                  iconImage={editIcon}
                  logoWidth={60}
                  logoHeight={60}
                  onClickMethod={() => openModalHandler()}
                />
                <Logo
                  title={deleteFacultyString}
                  iconImage={deleteIcon}
                  logoWidth={60}
                  logoHeight={60}
                  onClickMethod={() => deleteFacultyHandler(item.id)}
                />
              </TableField>
            </TableRow>
            <ModalComponent
              isOpen={editModal}
              closeModal={closeModalHandler}
              type={ModalType.EditFaculty}
              data={item}
            />
          </Fragment>
        );
      })}
    </>
  );
}
