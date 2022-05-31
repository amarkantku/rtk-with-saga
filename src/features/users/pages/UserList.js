import React, { Fragment } from 'react';
import Table from '../../../components/Table/Table';
import Plus from '../../../icons/Plus';
import { Row, Col } from '../../../styles/styled';
import { UserListWrapper, AddNewUser, Title } from '../User.styled';

// import { useDispatch } from 'react-redux';
// import { userActions } from '../userSlice';

const UserList = ({ userData }) => {
    // const dispatch = useDispatch();
    return (
        <UserListWrapper>
            <Row>
                <Col>
                    <Title>User List</Title>
                </Col>
                <Col>
                    <AddNewUser>
                        <Plus />
                        Add User
                    </AddNewUser>
                </Col>
            </Row>

            <Table caption="User Table" data={userData} isReadonly={false} />
        </UserListWrapper>
    );
};

export default UserList;
