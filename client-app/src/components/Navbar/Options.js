import React from 'react';
import {
  FacultiesString,
  FacultyAdminsString,
  facultyAdminTypeString,
  LogOutString,
  mainAdminTypeString,
  professorTypeString,
  studentTypeString
} from '../../helpers/strings';
import { Option } from './Option/Option';
import { OptionsWrapper } from './Options.styled';

export function Options(props) {
  const { session, setSession } = props;

  const displayOptionsByUserRole = () => {
    switch (session.userRole) {
      case mainAdminTypeString:
        return (
          <>
            <Option name={FacultiesString} />
            <Option name={FacultyAdminsString} />
            <Option name={LogOutString} session={session} setSession={setSession} />
          </>
        );
      case facultyAdminTypeString:
        return (
          <>
            <Option name={LogOutString} />
          </>
        );
      case professorTypeString:
        return (
          <>
            <Option name={LogOutString} />
          </>
        );
      case studentTypeString:
        return (
          <>
            <Option name={LogOutString} />
          </>
        );
      default:
        return null;
    }
  };

  return <OptionsWrapper>{displayOptionsByUserRole()}</OptionsWrapper>;
}
