import { Fragment, useState } from 'react';
import { useDispatch } from 'react-redux';
import Table from '../../../components/Table/Table';
import Button from '../../../components/Button/Button';
import Modal from '../../../components/Modal/Modal';
import PlusIcon from '../../../icons/Plus';
import { Row, Col } from '../../../styles/styled';
import { UserListWrapper, AddNewUser, Title } from '../User.styled';
import { userActions, defaultUser } from '../userSlice';

import UserForm from '../components/UserForm';
// import MUIButton from '../../../components/Button/MUIButton';

const UserList = ({ userData }) => {
    const dispatch = useDispatch();
    const [isOpen, setIsOpen] = useState(false);
    const [isEdit, setIsEdit] = useState(false);
    const [userInfo, setUserInfo] = useState(defaultUser);

    const closeModal = () => {
        setIsEdit(false);
        setIsOpen(false);
        setUserInfo(defaultUser);
    };

    const handleOnSubmit = (user) => {
        if (isEdit) {
            dispatch(userActions.updateUser(user));
        } else {
            dispatch(userActions.addUser(user));
        }
        closeModal();
    };

    const handleUserClick = ({ action, data }) => {
        if (/edit/i.test(action)) {
            setUserInfo(data);
            setIsEdit(true);
            setIsOpen(true);
        } else if (/delete/i.test(action)) {
            dispatch(userActions.deleteUser({ email: data }));
        }
    };

    return (
        <Fragment>
            <UserListWrapper data-testid={'user-list-wrapper'}>
                <Row>
                    <Col>
                        <Title data-testid={'user-list-title'}>User List</Title>
                    </Col>
                    <Col>
                        <AddNewUser
                            data-testid={'add-new-user'}
                            onClick={() => setIsOpen(true)}
                        >
                            <Button data-testid={'btn-add-user'}>
                                <PlusIcon /> Add User
                            </Button>
                        </AddNewUser>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        {userData.length ? (
                            <Table
                                id="user-list-table"
                                caption="User Table"
                                data={userData}
                                isReadonly={false}
                                handleClick={handleUserClick}
                            />
                        ) : null}
                    </Col>
                </Row>
                {/* <MUIButton color='red'>Test Button</MUIButton> */}
            </UserListWrapper>
            {isOpen && (
                <Modal
                    title={isEdit ? 'Update User Deatils' : 'Add User'}
                    handleClose={closeModal}
                    isOpen={isOpen}
                >
                    <UserForm
                        user={userInfo}
                        isEdit={isEdit}
                        onSubmit={handleOnSubmit}
                    ></UserForm>
                </Modal>
            )}
        </Fragment>
    );
};

export default UserList;
