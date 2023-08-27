import { useState } from 'react';

export function useFormWithValidation() {
  const [values, setValues] = useState({
    email: '',
    message: '',
    name: '',
    checkbox: '',
    age: '',
    maxAge: 70,
  });
  const [errors, setErrors] = useState({ email: '', message: '', name: '', checkbox: '' });
  const [isValid, setIsValid] = useState(false);

  const handleChange = (event: any) => {
    const target = event.target;
    const name = target.name;
    const value = target.value;
    setValues({ ...values, [name]: value });
    setErrors({ ...errors, [name]: target.validationMessage });
    setIsValid(target.closest('form').checkValidity());
  };

  return { values, handleChange, errors, isValid, setValues, setIsValid };
}
