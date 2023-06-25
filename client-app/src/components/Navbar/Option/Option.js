import React from 'react';
import { useNavigate } from 'react-router-dom';
import { faculitiesPath, facultyAdminsPath } from '../../../helpers/routePaths';
import { logout } from '../../../helpers/sessionHelper';
import { FacultiesString, FacultyAdminsString } from '../../../helpers/strings';
import { OptionWrapper } from './Option.styled';

export function Option(props) {
  const navigate = useNavigate();

  const optionAction = () => {
    switch (props.name) {
      case FacultiesString:
        navigate(faculitiesPath);
        break;
      case FacultyAdminsString:
        navigate(facultyAdminsPath);
        break;
      default:
        logout(props.setSession, navigate);
    }
  };

  return <OptionWrapper onClick={() => optionAction()}>{props.name}</OptionWrapper>;
}
