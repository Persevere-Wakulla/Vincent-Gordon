import { useState, useEffect,useCallback } from 'react';

function useLocalTime(date:any) {
  const [localTime, setLocalTime] = useState('');

  useEffect(() => {
    const formatter = new Intl.DateTimeFormat(navigator.language, {
      dateStyle: 'medium',
      timeStyle: 'short',
    });

    setLocalTime(formatter.format(date));
  }, [date]);

  return localTime;
}

export default function LocalTimeDisplay({ date }:any) {
  const localTime = useLocalTime(date);

  return <div>{localTime}</div>;
}



type FormState<T> = {
  [K in keyof T]: string
}

export function useFormReset(initialState:any) {
  const [formState, setFormState] = useState(initialState)

  const resetForm = useCallback(() => {
    setFormState(initialState)
  }, [initialState])

  const handleChange = useCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const { name, value } = e.target
      setFormState((prevState:any) => ({ ...prevState, [name]: value }))
    },
    []
  )

  return {
    formState,
    resetForm,
    handleChange,
  }
}