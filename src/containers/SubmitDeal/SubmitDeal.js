import React, { Component } from 'react';

import Button from '../../components/UI/Button/Button';
import Spinner from '../../components/UI/Spinner/Spinner';
import axios from '../../axios-posts';
import Input from '../../components/UI/Input/Input';

import './SubmitDeal.css';

class SubmitDeal extends Component {
    state = {
        dealForm: {
            name: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Company Name'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            },
            city: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Headquarters'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            },
            industry: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Industry'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            },
            raised: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter total money raised'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            },
            description: {
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Enter a brief description of the company'
                },
                value: '',
                validation: {
                    required: true
                }, 
                valid: false,
                touched: false
            }
        },
        formIsValid: false,
        loading: false
    }

    // post deal when the forms have been validated 
    dealHandler = (event) => {
        event.preventDefault();
        this.setState({loading:true})

        const formData = {};
        for (let formElementIdentifier in this.state.dealForm) {
            formData[formElementIdentifier] = this.state.dealForm[formElementIdentifier].value;
        }

        const deal = {
            dealData: formData
        }

        axios.post('/deals.json', deal)
            .then(response => {
                this.setState({loading: false});
                this.props.history.push('/')
            })
            .catch(error => {
                this.setState({loading: false});
            })
    }

    checkValidity(value, rules) {
        let isValid = true;

        if(rules.required) {
            isValid = value.trim() !== '' && isValid;
        }

        return isValid;
    }

    inputChangeHandler = (event, inputIdentifier) => {
        const updatedDealForm = {
            ...this.state.dealForm
        };

        const updatedFormElement = {
            ...updatedDealForm[inputIdentifier]
        };

        updatedFormElement.value = event.target.value;

        updatedFormElement.valid = this.checkValidity(updatedFormElement.value, updatedFormElement.validation)

        updatedFormElement.touched = true;

        updatedDealForm[inputIdentifier] = updatedFormElement;
        console.log(updatedFormElement)

        let formIsValid = true;

   
        console.log(formIsValid);
        this.setState({orderForm: updatedDealForm, formIsValid: formIsValid})

    }

    render () {
        const formElementsArray = [];
        for (let key in this.state.dealForm) {
            formElementsArray.push({
                id: key,
                config: this.state.dealForm[key]
            })
        }

        let form = (
            <form onSubmit={this.dealHandler}>
                {formElementsArray.map(formElement => (
                    <Input 
                        key={formElement.id}
                        elementType={formElement.config.elementType}
                        elementConfig={formElement.config.elementConfig}
                        value={formElement.config.value}
                        invalid={!formElement.config.valid}
                        shouldValidate={formElement.config.validation}
                        touched={formElement.config.touched}
                        changed={(event) => this.inputChangeHandler(event,formElement.id)}/>
                ))}
                
                <Button btnType="Success" disabled={!this.state.formIsValid}>SUBMIT</Button>
            </form>
        );
        
        if (this.state.loading) {
            form=<Spinner/>;
        }

        return (
            <div className="SubmitDeal">
                <h1>Enter your Deal Details</h1>
                {form}
            </div>
        );
    }
}

export default SubmitDeal;