import * as React from 'react';
import styled from "styled-components"
import {View, Text,Dimensions} from "react-native"

type Props = {
  message: string
}

const Snackbar: React.FC<Props> = ({message}) => {
  return (
    <SnackbarContainer>
      <SnackbarText>{message}</SnackbarText>
    </SnackbarContainer>
  )
}

export default Snackbar

const SnackbarContainer = styled(View)`
  background: #3CAEA3;
  top: 20px;
  justify-content: center;
  color:white;
  height: 40px;
  position:absolute;
  width:${Dimensions.get("window").width -60}px;
`
const SnackbarText = styled(Text)`
  font-weight: bold;
  font-size:18px;
`