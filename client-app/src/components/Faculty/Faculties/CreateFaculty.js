import React, { useState } from 'react';
import { Input } from '../../shared/Input/Input';
import { Button } from '../../shared/Button/Button';
import {
  NameString,
  TinString,
  DescritionString,
  LocationString,
  textString,
  submitString,
  FacultyCreateString,
  numberString
} from '../../../helpers/strings';
import { createBtn } from '../../shared/Button/ButtonMessages';
import { CreateFacultyWrapper } from './Faculties.styled';
import { UserFormTitle } from '../../Authentification/UserForm.styled';
import { H2 } from '../../shared/Headers/Headers.styled';
import { TextArea } from '../../shared/Input/TextArea';
import {
  validateFacultyDescription,
  validateFacultyLocation,
  validateFacultyName,
  validateFacultyTin
} from '../../Validators/InputValidatior/InputValidator';
import { plaseInsertValidData } from '../../Validators/validatorMessages';
import { createFacultySuccessful } from '../FacultyMessages';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';
import { createFaculty, loadAllFaculties } from '../../../redux/Faculty/facultyActions';
import { InputMessage } from '../../shared/Input/InputMessage';

export function CreateFaculty(props) {
  const { closeModal } = props;
  const dispatch = useDispatch();
  const [tin, setTin] = useState('');
  const [name, setName] = useState('');
  const [description, setDescription] = useState('');
  const [location, setLocation] = useState('');
  const [tinValidate, setTinValidate] = useState({ isValid: false, text: '' });
  const [nameValidate, setNameValidate] = useState({ isValid: false, text: '' });
  const [descriptionValidate, setDescriptionValidate] = useState({ isValid: false, text: '' });
  const [locationValidate, setLocationValidate] = useState({ isValid: false, text: '' });

  const createFacultyHandler = () => {
    const tinValidationResult = validateFacultyTin(tin);
    const nameValidationResult = validateFacultyName(name);
    const descriptionValidationResult = validateFacultyDescription(description);
    const locationValidationResult = validateFacultyLocation(location);

    setTinValidate(tinValidationResult);
    setNameValidate(nameValidationResult);
    setDescriptionValidate(descriptionValidationResult);
    setLocationValidate(locationValidationResult);

    if (
      !tinValidationResult.isValid ||
      !nameValidationResult.isValid ||
      !descriptionValidationResult.isValid ||
      !locationValidationResult.isValid
    ) {
      toast(plaseInsertValidData);
      return;
    }

    dispatch(
      createFaculty({
        tin: tin,
        name: name,
        description: description,
        location: location
      })
    )
      .then(() => {
        toast(createFacultySuccessful);
        closeModal();
        dispatch(loadAllFaculties());
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <CreateFacultyWrapper>
      <UserFormTitle>
        <H2>{FacultyCreateString}</H2>
      </UserFormTitle>
      <Input
        inputType={numberString}
        placeholder={TinString}
        onChangeMethod={setTin}
        isValid={tinValidate.isValid}
      />
      <InputMessage text={tinValidate.text} />
      <Input
        inputType={textString}
        placeholder={NameString}
        onChangeMethod={setName}
        isValid={nameValidate.isValid}
      />
      <InputMessage text={nameValidate.text} />
      <TextArea
        inputType={textString}
        placeholder={DescritionString}
        onChangeMethod={setDescription}
        isValid={descriptionValidate.isValid}
      />
      <InputMessage text={descriptionValidate.text} />
      <Input
        inputType={textString}
        placeholder={LocationString}
        onChangeMethod={setLocation}
        isValid={locationValidate.isValid}
      />
      <InputMessage text={locationValidate.text} />
      <Button type={submitString} text={createBtn} onClickMethod={createFacultyHandler}></Button>
    </CreateFacultyWrapper>
  );
}
