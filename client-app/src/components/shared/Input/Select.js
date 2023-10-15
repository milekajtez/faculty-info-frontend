import React, { useState } from 'react';
import { chooseFaculty, emptyString } from '../../../helpers/strings';
import { OptionLabel, Options, SelectBox, SelectWrapper, SelectedOptions } from './Input.styled';

export function Select(props) {
  const { onChangeMethod, value, options, isValid } = props;
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const changeValueHandler = (option) => {
    onChangeMethod(option);
    setIsOpen(!isOpen);
  };

  return (
    <SelectWrapper>
      <SelectBox onClick={toggleDropdown} isValid={chooseFaculty === value ? true : isValid}>
        <SelectedOptions>{value === emptyString ? chooseFaculty : value}</SelectedOptions>
      </SelectBox>
      {isOpen && (
        <Options>
          {options.map((option, index) => (
            <OptionLabel key={index} onClick={() => changeValueHandler(option.id)}>
              {option.value}
            </OptionLabel>
          ))}
        </Options>
      )}
    </SelectWrapper>
  );
}
