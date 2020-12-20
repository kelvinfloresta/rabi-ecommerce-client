import styled from 'styled-components'

export const MenuContainer = styled.aside<{collapsed: boolean}>`
    background-color: #001529;
    min-height: 100vh;
    box-sizing: content-box;
    animation: fadeIn .3s;
    transition: 0.3s min-width;
    min-width: ${props => props.collapsed ? 80 : 256}px;
`
