import React, { Component } from 'react';
import './Form.css';

class Form extends Component {

  render () {
      
    return (
        // View for input plate license number
      <div>
      <form className="form">
        <h2>View if your car can be on the road</h2>
        <div>
          <label htmlFor="licensePlateNumber">License Plate Number</label>
          <input type="text" required className="form-control" name="licensePlateNumber"
            placeholder="License Plate Number"  />
        </div>
        <button className="btn btn-primary" >Validate</button>
      </form>
      </div>
    )
  }
}

export default Form;
