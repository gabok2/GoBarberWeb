/* eslint-disable react/jsx-props-no-spreading */
import React, { useEffect, useRef } from 'react';
import { useField } from '@unform/core';

// eslint-disable-next-line react/prop-types
export default function Input({ name, ...rest }) {
  const inputRef = useRef(null);
  const { fieldName, registerField, error, defaultValue } = useField(name);
  useEffect(() => {
    registerField({
      name: fieldName,
      ref: inputRef.current,
      path: 'value',
    });
  }, [fieldName, registerField]);

  // eslint-disable-next-line react/jsx-props-no-spreading
  return (
    <>
      <input defaultValue={defaultValue} ref={inputRef} {...rest} />
      {error && <span className="error">{error}</span>}
    </>
  );
}
