import styled from 'styled-components/macro'

export const ListItem = styled.li`
  list-style-type: none;
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  width: 100%;
  box-shadow: 0px 0px 8px 2px #cbd5e1;
  border: 1px solid #cbd5e1;
  margin-bottom: 10px;
  flex-shrink: 0;
  @media screen and (min-width: 576px) {
    width: 45%;
    margin-right: 5%;
  }
  @media screen and (min-width: 768px) {
    width: 30%;
    margin-right: 3%;
  }
  @media screen and (min-width: 992px) {
    width: 23%;
    margin-right: 2%;
    margin-bottom: 2%;
  }
`

export const ProjectImage = styled.img`
  width: 100%;
  height: 280px;
  object-fit: cover;
  border-top-left-radius: 12px;
  border-top-right-radius: 12px;
`

export const ProjectName = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 18px;
  margin: 0px;
  margin-left: 8px;
  padding: 8px;
`
