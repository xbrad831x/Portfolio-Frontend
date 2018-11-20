import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import { Paper, TextField, FormGroup, Button } from '@material-ui/core';
import * as validator from 'email-validator';

export default class Contact extends Component {

    constructor(props) {
        super(props);
        this.onNameChange = this.onNameChange.bind(this);
        this.onEmailChange = this.onEmailChange.bind(this);
        this.onMessageChange = this.onMessageChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);

        this.state = {
            name: '',
            email: '',
            message: '',
            errorNameHelper: '',
            errorEmailHelper: '',
            errorMessageHelper: '',
            errorName: false,
            errorEmail: false,
            errorMessage: false
        }

    }

    onNameChange(e) {
        this.setState({name: e.target.value, errorName: false, errorNameHelper: ''})
    }

    onEmailChange(e) {
        this.setState({email: e.target.value, errorEmail: false, errorEmailHelper: ''})
    }

    onMessageChange(e) {
        this.setState({message: e.target.value, errorMessage: false, errorMessageHelper: ''})
    }

    handleSubmit(e) {
        e.preventDefault();

        if(this.state.name.length === 0)
        {
            this.setState({errorName: true, errorNameHelper: '* Name is required'})
            return;
        }
        else if(this.state.email.length === 0)
        {
            this.setState({errorEmail: true, errorEmailHelper: '* Email is required'})
            return;
        }
        else if(this.state.message.length === 0)
        {
            this.setState({errorMessage: true, errorMessageHelper: '* Message is required'})
            return;
        }
        else if(!validator.validate(this.state.email))
        {
            this.setState({errorEmail: true, errorEmailHelper: '* Not a valid email'})
            return;
        }
        else
        {
            this.setState({name: '', email: '', message: '', 
                        errorName: false, errorEmail: false, errorMessage: false, 
                        errorNameHelper: '', errorEmailHelper: '', errorMessageHelper: ''})
        }
    }

    render() {
        return (
            <div>
                <Header />
                    <Paper className="paper-container" elevation={1}>
                        <br />
                        <form onSubmit={this.handleSubmit} className="form-container">
                            <FormGroup>
                                <TextField
                                    label="Name"
                                    error={this.state.errorName ? true : false}
                                    helperText={this.state.errorNameHelper}
                                    value={this.state.name}
                                    onChange={this.onNameChange}
                                />
                                <br />
                                <TextField
                                    label="Email"
                                    error={this.state.errorEmail ? true : false}
                                    helperText={this.state.errorEmailHelper}
                                    value={this.state.email}
                                    onChange={this.onEmailChange}
                                />
                                <br />
                                <TextField
                                    label="Message"
                                    rows="5"
                                    multiline={true}
                                    error={this.state.errorMessage ? true : false}
                                    helperText={this.state.errorMessageHelper}
                                    value={this.state.message}
                                    onChange={this.onMessageChange}
                                />
                                <br />
                                <Button
                                    label="Submit"
                                    color="primary"
                                    type="submit"
                                    variant="contained"
                                >
                                Submit
                                </Button>
                            </FormGroup>
                        </form>
                        <br />
                    </Paper>
                <Footer />
            </div>
        )
    }
}