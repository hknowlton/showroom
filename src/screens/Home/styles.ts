import styled from 'styled-components';

import theme from '../../utils/theme'

export const Header = styled.div`
font-weight: 600;
font-size: 38px;
color: ${theme.main.black};
`
export const SubHeader = styled.div`
font-weight: 300;
font-size: 20px;
color: ${theme.main.black};
`

export const FlexRow = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`