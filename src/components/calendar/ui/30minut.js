import styled from '@emotion/styled'
import {useState} from 'react'
import BasicModal from '../../modal/modal';

const Div = styled.div`
  border: 1px solid black;
  box-sizing: border-box;
  height: 100%;
  width: 100%;
  background-color: white;
`

export const ThirtyMinutes = ({numberOfRows, callback}) => {
    // const [time, setTime] = useState(numberOfRows);

    return (
        <Div><BasicModal callback={callback}/></Div>

//    <Div onClick={()=>console.log(time)}>{numberOfRows}<BasicModal /></Div>
    )
}
