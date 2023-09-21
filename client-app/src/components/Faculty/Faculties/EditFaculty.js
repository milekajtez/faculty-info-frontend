import React, { useState } from 'react';
import {
  DescritionString,
  FacultyEditString,
  LocationString,
  NameString,
  TinString,
  numberString,
  submitString,
  textString
} from '../../../helpers/strings';
import { CreateFacultyWrapper } from './Faculties.styled';
import { UserFormTitle } from '../../Authentification/UserForm.styled';
import { H2 } from '../../shared/Headers/Headers.styled';
import { Input } from '../../shared/Input/Input';
import { InputMessage } from '../../shared/Input/InputMessage';
import { TextArea } from '../../shared/Input/TextArea';
import { useDispatch } from 'react-redux';
import { editFaculty, loadAllFaculties } from '../../../redux/Faculty/facultyActions';
import { toast } from 'react-toastify';
import { editFacultySuccessful } from '../FacultyMessages';
import { Button } from '../../shared/Button/Button';
import { editBtn } from '../../shared/Button/ButtonMessages';
import {
  validateFacultyTin,
  validateFacultyName,
  validateFacultyDescription,
  validateFacultyLocation
} from '../../Validators/InputValidatior/InputValidator';
import { plaseInsertValidData } from '../../Validators/validatorMessages';

export function EditFaculty(props) {
  const dispatch = useDispatch();
  const { closeModal, data } = props;
  const [tin, setTin] = useState(data.tin);
  const [name, setName] = useState(data.name);
  const [description, setDescription] = useState(data.description);
  const [location, setLocation] = useState(data.location);
  const [tinValidate, setTinValidate] = useState({ isValid: false, text: '' });
  const [nameValidate, setNameValidate] = useState({ isValid: false, text: '' });
  const [descriptionValidate, setDescriptionValidate] = useState({ isValid: false, text: '' });
  const [locationValidate, setLocationValidate] = useState({ isValid: false, text: '' });

  const editFacultyHandler = (facultyId) => {
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
      editFaculty(facultyId, {
        id: data.id,
        tin: tin,
        name: name,
        description: description,
        location: location
      })
    )
      .then(() => {
        toast(editFacultySuccessful);
        dispatch(loadAllFaculties());
        closeModal();
      })
      .catch((error) => {
        toast(error);
      });
  };

  return (
    <CreateFacultyWrapper>
      <UserFormTitle>
        <H2>{FacultyEditString}</H2>
      </UserFormTitle>
      <Input
        inputType={numberString}
        placeholder={TinString}
        onChangeMethod={setTin}
        isValid={tinValidate.isValid}
        value={tin}
      />
      <InputMessage text={tinValidate.text} />
      <Input
        inputType={textString}
        placeholder={NameString}
        onChangeMethod={setName}
        isValid={nameValidate.isValid}
        value={name}
      />
      <InputMessage text={tinValidate.text} />
      <TextArea
        inputType={textString}
        placeholder={DescritionString}
        onChangeMethod={setDescription}
        isValid={descriptionValidate.isValid}
        value={description}
      />
      <InputMessage text={tinValidate.text} />
      <Input
        inputType={textString}
        placeholder={LocationString}
        onChangeMethod={setLocation}
        isValid={locationValidate.isValid}
        value={location}
      />
      <InputMessage text={tinValidate.text} />
      <Button
        type={submitString}
        text={editBtn}
        onClickMethod={() => editFacultyHandler(data.id)}></Button>
    </CreateFacultyWrapper>
  );
}
