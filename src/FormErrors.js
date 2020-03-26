// Pico & Placa Predictor Task Using React.
// Author Juan Sebastian Vivanco Castro
// @github juansvc
// Title: Stackbuilders - Eng. Juan Vivanco

import React from 'react';

export const FormErrors = ({formErrors}) =>
// Presenting error if plate number license is too long or short
  <div className='formErrors'>
    {Object.keys(formErrors).map((fieldName, i) => {
      if(formErrors[fieldName].length > 0){
        return (
          <p key={i}>{formErrors[fieldName]}</p>
        )        
      } else {
        return '';
      }
    })}
  </div>
