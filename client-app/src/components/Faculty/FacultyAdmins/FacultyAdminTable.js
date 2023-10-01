import React, { Fragment } from 'react';
import deleteIcon from '../../../icons/delete.png';
import { deleteFacultyAdminString, deleteFacultyAdminSuccessful } from '../FacultyMessages';
import { toast } from 'react-toastify';
import { deleteFacultyAdmin, loadAllFacultyAdmins } from '../../../redux/Faculty/facultyActions';
import { TableField, TableRow } from '../../shared/Table/Table.styled';
import { Logo } from '../../Navbar/Logo/Logo';
import { useDispatch } from 'react-redux';

export function FacultyAdminTable(props) {
  const { allFacultyAdmins } = props;
  const dispatch = useDispatch();

  const deleteFacultyAdminHandler = (facultyId) => {
    dispatch(deleteFacultyAdmin(facultyId))
      .then(() => {
        toast(deleteFacultyAdminSuccessful);
        dispatch(loadAllFacultyAdmins());
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <>
      {allFacultyAdmins.map((item, index) => {
        return (
          <Fragment key={index}>
            <TableRow>
              <TableField>{item.id}</TableField>
              <TableField>{item.photoUrl}</TableField>
              <TableField>{item.email}</TableField>
              <TableField>{item.firstName}</TableField>
              <TableField>{item.lastName}</TableField>
              <TableField>
                <Logo
                  title={deleteFacultyAdminString}
                  iconImage={deleteIcon}
                  logoWidth={60}
                  logoHeight={60}
                  onClickMethod={() => deleteFacultyAdminHandler(item.id)}
                />
              </TableField>
            </TableRow>
          </Fragment>
        );
      })}
    </>
  );
}
