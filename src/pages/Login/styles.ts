import styled from 'styled-components'

export const LoginContainer = styled.div`
    background-color: rgba(0,0,0, 0.08);
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`

export const LoginForm = styled.form`
    max-width: 300px;
    border: 1px solid #f0f0f0;
    border-radius: 4px;
    background-color: white;
    padding: 1rem;
    & > input {
        margin-bottom: .5rem;
    }

    & > button {
        margin-top: 1rem;
    }


`
