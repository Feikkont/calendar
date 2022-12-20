import styled from '@emotion/styled';
import { useState } from 'react';
import { ThirtyMinutes } from './30minut';
import Button from "@mui/material/Button";
import {FilledDiv} from "./filledDiv";

const DayBlockDiv = styled.div`
position: relative;
background-color: grey;
height: 1440px;
width: 300px;
display: flex;
flex-direction: column;
`

export const DayBlock = () => {

    console.log('рендер')
    const [filledArr, setFilledArr] = useState([])
    let rowArr = []
    for (let i = 1; i <= 48; i++) {
        rowArr.push(i);
    }
    const handleAddItem = (element) =>{
        // debugger
        console.log('element',element);
        setFilledArr([...filledArr, element])
    }
    // console.log('filledArr',filledArr);
    const test = ()=> {
        setFilledArr([])
    }

  return (
    <div>
        <DayBlockDiv>
            {rowArr.map((el, idx)=><ThirtyMinutes numberOfRows={el} key={idx} callback={handleAddItem}/>)}
            {filledArr?.map((elem, idx)=><FilledDiv el={elem} key={idx}/>)}
        </DayBlockDiv>
        <Button onClick={test} />
    </div>
  )
};