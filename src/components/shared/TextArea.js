import React, {PropTypes} from 'react';

const TextInput = ({name, label, onChange, placeholder, value}) => {  
  return (
    <div className="form-group">
      <label htmlFor={name}>{label}</label>
      <div className="field">
        <textarea
          type="text"
          name={name}
          className="form-control"
          placeholder={placeholder}
          value={value}
          onChange={onChange}/>
      </div>
    </div>
  );
};

export default TextInput;  