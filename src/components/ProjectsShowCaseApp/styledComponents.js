import styled from 'styled-components/macro'

export const Container = styled.div`
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  height: 90vh;
`

export const ResponsiveContainer = styled.div`
  width: 90%;
`

export const Select = styled.select`
  font-family: 'Roboto';
  font-size: 14px;
  width: 220px;
  height: 45px;
  border: 1px solid #cbd5e1;
  border-radius: 4px;
  outline: none;
  cursor: pointer;
  margin-top: 35px;
  @media screen and (min-width: 768px) {
    width: 280px;
    height: 45px;
  }
`

export const Option = styled.option`
  font-family: 'Roboto';
  font-size: 12px;
  font-weight: 500;
`

export const ProjectsList = styled.ul`
  display: flex;
  flex-wrap: wrap;
  padding-left: 0px;
  padding-top: 18px;
`

export const ViewContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 90vh;
`

export const FailureViewImage = styled.img`
  width: 100%;
  max-width: 450px;
`

export const FailureHeading = styled.h1`
  color: #000000;
  font-family: 'Roboto';
  font-size: 28px;
  font-weight: 700;
`

export const FailureDescription = styled.p`
  color: #475569;
  font-family: 'Roboto';
  font-size: 16px;
`

export const RetryButton = styled.button`
  background-color: #328af2;
  color: #ffffff;
  font-family: 'Roboto';
  font-size: 14px;
  font-weight: 500;
  outline: none;
  cursor: pointer;
  border: none;
  border-radius: 4px;
  width: 140px;
  height: 35px;
`

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60vh;
`
