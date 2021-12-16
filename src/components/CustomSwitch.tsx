import React, {useState} from 'react';
import {Platform, Switch} from 'react-native';

interface Props {
  isOn: boolean;
  onChange: (value: boolean) => void;
}

export const CustomSwitch = ({isOn, onChange}: Props) => {
  const [isEnabled, setIsEnabled] = useState(isOn);
  const toggleSwitch = () => {
    setIsEnabled(!isEnabled);
    onChange(!isEnabled);
  };

  return (
    <Switch
      trackColor={{false: '#f56363', true: '#3dbbaa'}}
      thumbColor={Platform.OS === 'android' ? '#ffffff' : ''}
      ios_backgroundColor="#f0ecec"
      onValueChange={toggleSwitch}
      value={isEnabled}
    />
  );
};
