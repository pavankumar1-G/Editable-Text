import {Component} from 'react'

import {
  AppBackgroundContainer,
  EditableTextCard,
  Heading,
  UserInputContainer,
  UserInput,
  CustomButton,
  SavedInput,
} from './styledComponents'

class EditableTextInput extends Component {
  state = {userInput: '', isEditableText: true}

  onChangeInput = event => {
    this.setState({userInput: event.target.value})
  }

  onClickButton = () => {
    this.setState(prevState => ({isEditableText: !prevState.isEditableText}))
  }

  render() {
    const {userInput, isEditableText} = this.state
    const customText = isEditableText ? 'Save' : 'Edit'
    return (
      <AppBackgroundContainer>
        <EditableTextCard>
          <Heading>Editable Text Input</Heading>
          <UserInputContainer>
            {isEditableText ? (
              <UserInput
                type="text"
                value={userInput}
                onChange={this.onChangeInput}
              />
            ) : (
              <SavedInput>{userInput}</SavedInput>
            )}
            <CustomButton type="button" onClick={this.onClickButton}>
              {customText}
            </CustomButton>
          </UserInputContainer>
        </EditableTextCard>
      </AppBackgroundContainer>
    )
  }
}
export default EditableTextInput
