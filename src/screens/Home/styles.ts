import styled from 'styled-components';

import theme from '../../utils/theme';

export const Header = styled.div`
  font-weight: 600;
  font-size: 38px;
  color: ${theme.main.black};
`;
export const SubHeader = styled.div`
  font-weight: 300;
  font-size: 20px;
  color: ${theme.main.black};
  margin-top: 15px;
`;

export const FlexRow = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PhotoWrapper = styled.div`
  background-color: ${theme.main.blue.primary};
  border-radius: 150px 150px 0 0;
  position: relative;
  height: 300px;
  width: 300px;
  img {
    position: absolute;
    top: -100px;
    left: -100px;
  }
`;

export const TechnologiesWrapper = styled.div`
  margin: 2rem auto;
  max-width: 1000px;
  img {
    height: 30px;
  }
`;

export const Projects = styled.div`
  margin: 2rem auto;
  max-width: 1000px;
`;
