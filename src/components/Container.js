import styled from 'styled-components';

const Container = styled.div`
  width: 100%;
  max-width: 1200px;
  min-width: 800px;
  margin: 0 auto;
`;

export default Container;

export const HiddenTitle = styled.h1`
  position: absolute;
  clip: rect(0 0 0 0);
  width: 1px;
  height: 1px;
  margin: -1px;
  overflow: hidden;
`;
