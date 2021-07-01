import styled from 'styled-components';

import theme from '../../utils/theme';

export const Wrapper = styled.div`
  width: 100%;
  height: 500px;
  box-shadow: ${theme.boxShadow};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
  background-image: url('pawel-czerwinski-SlBmEVU2y-A-unsplash.jpg');
`;
