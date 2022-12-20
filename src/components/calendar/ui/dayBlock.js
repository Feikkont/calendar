import styled from '@emotion/styled';
import React, { useState } from 'react';
import { ThirtyMinutes } from './30minut';

const DayBlockDiv = styled.div`
position: relative;
background-color: grey;
height: 1440px;
width: 300px;
display: flex;
flex-direction: column;
`

export const DayBlock = () => {
    const [filledArr, setFilledArr] = useState([])
    let rowArr = []
    for (let i = 1; i <= 48; i++) {
        rowArr.push(i);
    }
    const handleAddItem = (element) =>{
        let arr= filledArr;
        arr.push(element)
        console.log('element',element);
        setFilledArr(arr)
    }
    console.log('filledArr',filledArr);

  return (
    <div>
        <DayBlockDiv>
            {rowArr.map((el, idx)=><ThirtyMinutes numberOfRows={el} key={idx} setFilledArr={handleAddItem}/>)}
            {filledArr?.map((elem)=><>{elem}</>)}
        </DayBlockDiv>
    </div>
  )
};