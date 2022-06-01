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
        <FormWrapper data-tesid={'user-form-wrapper'}>
            <FormGroup>
                <Label data-tesid={'user-name'} htmlFor="name">
                    Name
                </Label>
                <Input
                    data-tesid={'user-name-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    id="name"
                    value={user?.name}
                    name={'name'}
                />
            </FormGroup>
            <FormGroup>
                <Label data-tesid={'company-name'} htmlFor="company-name">
                    Compnay
                </Label>
                <Input
                    data-tesid={'company-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    id="company-name"
                    value={user?.company}
                    name={'company'}
                />
            </FormGroup>
            <FormGroup>
                <Label data-tesid={'user-email'} htmlFor="email">
                    Email
                </Label>
                <Input
                    data-tesid={'email-input'}
                    onChange={handleOnChange}
                    type={'text'}
                    id="email"
                    readOnly={props.isEdit}
                    value={user?.email}
                    name={'email'}
                />
            </FormGroup>
            <FormGroup>
                <Button width={100} onClick={() => handleSubmit()}>
                    Save
                </Button>
            </FormGroup>
        </FormWrapper>
    );
};

export default UserForm;
