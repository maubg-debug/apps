import React from 'react';
import styled from 'styled-components';

export default SignInScreen = () => {
    return (
        <Container>
            <Main></Main>

            <HeaderGraphic>
                <RightCircle />
                <LeftCircle />
            </HeaderGraphic>
        </Container>
    )
}

const Container = styled.view`
    flex: 1;
`;

const Main = styled.view``;

const HeaderGraphic = styled.view`
    position: absolute;
    width: 100%;
`;

const RightCircle = styled.view``;

const LeftCircle = styled.view`
    background-color: #23a6d5;
    position: absolute;
    width: 200px;
    height: 200px;
    border-radious: 100px;
    left: -50px;
    top: -50px;
`;