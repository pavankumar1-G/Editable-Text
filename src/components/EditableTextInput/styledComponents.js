import styled from 'styled-components'

export const AppBackgroundContainer = styled.div`
  background-color: #f5d0fe;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`
export const EditableTextCard = styled.div`
  background-color: #ffffff;
  width: 350px;
  height: 200px;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 15px;
`
export const Heading = styled.h1`
  font-size: 30px;
  color: #000000;
`
export const UserInputContainer = styled.div`
  display: flex;
  align-items: center;
  width: 350px;
  justify-content: center;
`
export const UserInput = styled.input`
  color: #323f4b;
  height: 36px;
  width: 220px;
  border: 1px solid #cbd2d9;
  border-radius: 5px;
  margin-right: 10px;
  font-size: 20px;
  padding-left: 8px;
  outline: none;
`
export const CustomButton = styled.button`
  color: #ffffff;
  height: 36px;
  width: 50px;
  border: none;
  border-radius: 5px;
  background-color: #d946ef;
  cursor: pointer;
  outline: none;
`
export const SavedInput = styled.p`
  color: #323f4b;
  font-size: 20px;
  font-weight: bold;
  padding-right: 10px;
`
