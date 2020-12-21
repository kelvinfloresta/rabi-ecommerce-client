import styled from 'styled-components'

export const LoginContainer = styled.div`
    background-color: rgb(240, 242, 245);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    animation: fadeIn .3s;
`

export const LoginForm = styled.form`
    max-width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    background-color: white;
    padding: 1rem;
    & > input {
        margin-bottom: 1rem;
    }

`
