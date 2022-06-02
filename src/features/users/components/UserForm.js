import React, { useState } from 'react';
import Button from '../../../components/Button/Button';
import { FormWrapper, FormGroup, Label, Input } from '../User.styled';

const UserForm = (props) => {
    const [user, setUser] = useState(props.user);
    const handleOnChange = (e) => {
        const { name, value } = e.target;

        setUser((prevState) => {
            return {
                ...prevState,
                [name]: value,
            };
        });
    };

    const handleSubmit = () => {
        props.onSubmit(user);
    };

    return (
        <FormWrapper data-testid={'user-form-wrapper'}>
            <FormGroup>
                <Label htmlFor="user-name">
                    Name
                </Label>
                <Input
                    data-testid={'user-name-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    aria-label="user-name-input" 
                    id="user-name"
                    value={user?.name}
                    name={'name'}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="user-company-name">
                    Compnay
                </Label>
                <Input
                   data-testid={'company-name-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    id="user-company-name"
                    value={user?.company}
                    name={'company'}
                />
            </FormGroup>
            <FormGroup>
                <Label htmlFor="user-email">
                    Email
                </Label>
                <Input
                    data-testid={'user-email-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    readOnly={props.isEdit}
                    value={user?.email}
                    name={'email'}
                />
            </FormGroup>
            <FormGroup>
                <Button data-testid={'btn-user-submit'} width={100} onClick={() => handleSubmit()}>
                    Save
                </Button>
            </FormGroup>
        </FormWrapper>
    );
};

UserForm.defaultProps = {
    theme: {
        secondary: '#ccc',
        overlay: '#ccc',
        colors: {
            black: "#000000"
        }
    },
    isEdit: false,
    user: {
        name: '',
        email: '',
        company: ''
    }
};

export default UserForm;
