import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  height: 300px;
  width: 250px;
  box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
`;

export const CardImage = styled.img`
  margin-top: 5px;
  width: 80%;
  height: 150px;
  margin-left: 25px;
`;

export const CardText = styled.span`
  font-size: 0.8rem;
  margin-left: 15px;
`;
