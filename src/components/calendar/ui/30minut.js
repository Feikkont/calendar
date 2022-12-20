import styled from '@emotion/styled'
import React, { useState } from 'react'
import BasicModal from '../../modal/modal';

const Div = styled.div`
border: 1px solid black;
height: 100%;
width: 100%;
background-color: white;
`

export const ThirtyMinutes = ({numberOfRows, setFilledArr}) => {
    const [time, setTime] = useState(numberOfRows);

  return (
   <Div><BasicModal setFilledArr={setFilledArr}/></Div>

//    <Div onClick={()=>console.log(time)}>{numberOfRows}<BasicModal /></Div>
  )
}
