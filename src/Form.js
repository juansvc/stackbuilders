import React, { Component } from 'react';
import './Form.css';
import { FormErrors } from './FormErrors';
import { Modal } from 'react-bootstrap';

class Form extends Component {

    constructor (props) {
        super(props);
        // Setup states for vars used in form
        this.state = {
          licensePlateNumber: '',
          formErrors: {licensePlateNumber: ''},
          licensePlateNumberValid: false,
          formValid: false,
          showCan: false,
          showCant: false
        }
      }

    //   handle close modal
      handleClose= () =>{
        this.setState({
          showCan: false,
          showCant: false
        })
      }

    // Validating field licence number plate
      handleUserInput = (e) => {
        const name = e.target.name;
        const value = e.target.value;
        this.setState({[name]: value},
                      () => { this.validateField(name, value) });
      }


    //   predict if car can be on the road basing on pico & placa
      handleClick = (e) =>{
        const lpn = this.state.licensePlateNumber;
        // last digit of license plate number
        const lastDigit = lpn.substr(lpn.length - 1);
        const current_date = new Date();
        // get current date
        const cday = current_date.getDay();
    
        switch(cday) {
          case 1:
            if(lastDigit === "1" || lastDigit === "2"){
              this.setState({
                showCant: true
              })
            }else{
              this.setState({
                showCan: true
              })
            }
            break;
          case 2:
            if(lastDigit === "3" || lastDigit === "4"){
              this.setState({
                showCant: true
              })
            }else{
              this.setState({
                showCan: true
              })
            }
            break;
          case 3:
              if(lastDigit === "5" || lastDigit === "6"){
                this.setState({
                  showCant: true
                })
              }else{
                this.setState({
                  showCan: true
                })
              }
              break;
            case 4:
              if(lastDigit === "7" || lastDigit === "8"){
                this.setState({
                  showCant: true
                })
              }else{
                this.setState({
                  showCan: true
                })
              }
              break;
            case 5:
              if(lastDigit === "9" || lastDigit === "0"){
                this.setState({
                  showCant: true
                })
              }else{
                this.setState({
                  showCan: true
                })
              }
              break;
          default:
            break;
        }
        //Prevent pager send data to other page
        e.preventDefault();
        
      }


    //   validating plate license number have 6-7 digits
      validateField(fieldName, value) {
        let fieldValidationErrors = this.state.formErrors;
        let licensePlateNumberValid = this.state.licensePlateNumberValid;
    
        switch(fieldName) {
          case 'licensePlateNumber':
            licensePlateNumberValid = value.length < 8 && value.length > 5;
            fieldValidationErrors.licensePlateNumber = licensePlateNumberValid ? '' : 'License Plate Number Invalid';
            break;
          default:
            break;
        }
        // send to formError to update view
        this.setState({formErrors: fieldValidationErrors,
                        licensePlateNumberValid: licensePlateNumberValid
                      }, this.validateForm);
      }

    //   validate form
      validateForm() {
        this.setState({formValid: this.state.licensePlateNumberValid});
      }
    
    //   if error
      errorClass(error) {
        return(error.length === 0 ? '' : 'has-error');
      }

  render () {
      
    return (
        // View for input plate license number
        <div>
        <form className="form">
          <h2>View if your car can be on the road</h2>
          {/* showing error in div */}
          <div className="panel panel-default">
            <FormErrors formErrors={this.state.formErrors} />
          </div>
          <div className={`form-group ${this.errorClass(this.state.formErrors.licensePlateNumber)}`}>
            <label htmlFor="licensePlateNumber">License Plate Number</label>
            <input type="text" required className="form-control" name="licensePlateNumber"
              placeholder="License Plate Number"
            //   License Plate Number -> value to handle 
              value={this.state.licensePlateNumber}
            //   onchange handle error input
              onChange={this.handleUserInput}  />
          </div>
          {/* function onclick */}
          <button onClick={this.handleClick} className="btn btn-primary" disabled={!this.state.formValid}>Validate</button>
        </form>
        <div>
        {/* Showinf popup modal if car can or cant be on the road */}
        <Modal show={this.state.showCan} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.licensePlateNumber}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Woohoo, you can be on the road!</Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose} className="btn btn-primary">
              Close
            </button>
          </Modal.Footer>
        </Modal>
        <Modal show={this.state.showCant} onHide={this.handleClose}>
          <Modal.Header closeButton>
            <Modal.Title>{this.state.licensePlateNumber}</Modal.Title>
          </Modal.Header>
          <Modal.Body>Sorry, you can't be on the road!</Modal.Body>
          <Modal.Footer>
            <button onClick={this.handleClose} className="btn btn-primary">
              Close
            </button>
          </Modal.Footer>
        </Modal>
        </div>
        </div>
    )
  }
}

export default Form;
