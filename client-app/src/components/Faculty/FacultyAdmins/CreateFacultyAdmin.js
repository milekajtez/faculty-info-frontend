import React, { useState } from 'react';
import { UserFormTitle } from '../../Authentification/UserForm.styled';
import { H2 } from '../../shared/Headers/Headers.styled';
import {
  EmailString,
  FacultyAdminCreateString,
  FacultyString,
  FirstNameString,
  LastNameString,
  submitString,
  textString
} from '../../../helpers/strings';
import { Input } from '../../shared/Input/Input';
import { InputMessage } from '../../shared/Input/InputMessage';
import { Button } from '../../shared/Button/Button';
import { createBtn } from '../../shared/Button/ButtonMessages';
import {
  validateEmail,
  validateFacultyId,
  validateUsersFirstAndLastName
} from '../../Validators/InputValidatior/InputValidator';
import { plaseInsertValidData } from '../../Validators/validatorMessages';
import { createFacultyAdmin, loadAllFacultyAdmins } from '../../../redux/Faculty/facultyActions';
import { createFacultyAdminSuccessful } from '../FacultyMessages';
import { toast } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import { Select } from '../../shared/Input/Select';
import { CreateFacultyAdminWrapper } from './FacultyAdmins.styled';

export function CreateFacultyAdmin(props) {
  const { closeModal } = props;
  const dispatch = useDispatch();
  const faculties = useSelector((state) => state.faculties.allFaculties);

  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [facultyId, setFacultyId] = useState('');

  const [emailValidate, setEmailValidate] = useState({ isValid: false, text: '' });
  const [firstNameValidate, setFirstNameValidate] = useState({ isValid: false, text: '' });
  const [lastNameValidate, setLastNameValidate] = useState({ isValid: false, text: '' });
  const [facultyIdValidate, setFacultyIdValidate] = useState({ isValid: false, text: '' });

  const createFacultyAdminHandler = () => {
    const emailValidationResult = validateEmail(email);
    const firstNameValidationResult = validateUsersFirstAndLastName(firstName);
    const lastNameValidationResult = validateUsersFirstAndLastName(lastName);
    const facultyIdValidationResult = validateFacultyId(facultyId);

    setEmailValidate(emailValidationResult);
    setFirstNameValidate(firstNameValidationResult);
    setLastNameValidate(lastNameValidationResult);
    setFacultyIdValidate(facultyIdValidationResult);

    if (
      !emailValidationResult.isValid ||
      !firstNameValidationResult.isValid ||
      !lastNameValidationResult.isValid ||
      !facultyIdValidationResult.isValid
    ) {
      toast(plaseInsertValidData);
      return;
    }

    dispatch(
      createFacultyAdmin({
        email: email,
        firstName: firstName,
        lastName: lastName,
        facultyId: facultyId
      })
    )
      .then(() => {
        toast(createFacultyAdminSuccessful);
        closeModal();
        dispatch(loadAllFacultyAdmins());
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <CreateFacultyAdminWrapper>
      <UserFormTitle>
        <H2>{FacultyAdminCreateString}</H2>
      </UserFormTitle>
      <Input
        inputType={textString}
        placeholder={EmailString}
        onChangeMethod={setEmail}
        isValid={emailValidate.isValid}
      />
      <InputMessage text={emailValidate.text} />
      <Input
        inputType={textString}
        placeholder={FirstNameString}
        onChangeMethod={setFirstName}
        isValid={firstNameValidate.isValid}
      />
      <InputMessage text={firstNameValidate.text} />
      <Input
        inputType={textString}
        placeholder={LastNameString}
        onChangeMethod={setLastName}
        isValid={lastNameValidate.isValid}
      />
      <InputMessage text={lastNameValidate.text} />
      <Select
        placeholder={FacultyString}
        onChangeMethod={setFacultyId}
        isValid={facultyIdValidate.isValid}
        value={facultyId}
        options={faculties.map((faculty) => ({ id: faculty.id, value: faculty.name }))}
      />
      <InputMessage text={facultyIdValidate.text} />
      <Button
        type={submitString}
        text={createBtn}
        onClickMethod={createFacultyAdminHandler}></Button>
    </CreateFacultyAdminWrapper>
  );
}
