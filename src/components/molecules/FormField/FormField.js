import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;

  label {
    margin: 10px 0;
  }
`;

const FormField = React.forwardRef(
  ({ onChange, value, label, name, id, type = 'text', ...props }, ref) => {
    return (
      <Wrapper>
        <label>{label}</label>
        <input
          name={name}
          id={id}
          type={type}
          value={value}
          onChange={onChange}
          data-id={label}
          {...props}
          ref={ref}
        />
      </Wrapper>
    );
  }
);

FormField.propTypes = {};

export default FormField;
