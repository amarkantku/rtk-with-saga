import styled from 'styled-components';

export const UserListWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    margin: 0 auto;
    min-width: 700px;
`;

export const AddNewUser = styled.div`
    border: 1px soild red;
    display: flex;
    justify-content: flex-end;
    align-items: center;
    padding: 0 0 5px 0;
    width: 100%;
`;

export const Title = styled.div`
    display: flex;
    justify-content: flex-start;
    width: 100%;
`;

export const FormWrapper = styled.div`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

export const FormGroup = styled.div`
    display: block;
    width: 100%;
    margin: 5px auto;
`;

export const Label = styled.label`
    margin-bottom: 0.25em;
    display: block;
`;

export const Input = styled.input`
    height: 35px;
    width: 100%;
    padding: 0.25em;
    border-radius: 3px;
    margin-bottom: 0.5em;
    outline: none;
    border: 1px solid ${(props) => props.theme.secondary};
    :focus {
        outline: 1px solid ${(props) => props.theme.secondary};
    }
    ${(props) => {
        if (props.readOnly) {
            return `
                border: 1px solid ${(props) => props.theme.overlay};
                :focus {
                    outline: none;
                }`;
        }
    }}
`;
