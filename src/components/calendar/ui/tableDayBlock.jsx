import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import moment from 'moment';
import {useState} from "react";
import { FilledDiv } from "./filledDiv";
import TableModal from "../../modal/tableModal";

function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
}

const rows = [
    {time: "09:00", idx:"1"},{time: "09:30", idx:"2"},{time: "10:00", idx:"3"},{time: "10:30", idx:"4"},
    {time: "11:00", idx:"5"},{time: "11:30", idx:"6"},{time: "12:00", idx:"7"},{time: "12:30", idx:"8"},
    {time: "13:00", idx:"9"},{time: "13:30", idx:"10"},{time: "14:00", idx:"11"},{time: "14:30", idx:"12"},
    {time: "15:00", idx:"13"},{time: "15:30", idx:"14"},{time: "16:00", idx:"15"},{time: "16:30", idx:"16"},
    {time: "17:00", idx:"17"},{time: "17:30", idx:"18"},{time: "18:00", idx:"19"},{time: "18:30", idx:"20"},
    {time: "19:00", idx:"21"},{time: "19:30", idx:"22"},{time: "20:00", idx:"23"},
];

export default function BasicTable() {
    const [filledArr, setFilledArr] = useState([])
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleAddItem = (element) =>{
        // debugger
        console.log('element',element);
        setFilledArr([...filledArr, element])
    }

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                    <TableRow>
                        {/*<TableCell></TableCell>*/}
                        <TableCell align={"center"}>{moment().format("dddd, MMMM Do YYYY, h:mm:ss a")}</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow onClick={handleOpen}
                            key={row.time}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                            <TableCell component="th" scope="row">
                                {/**/}
                                {row.time}
                            </TableCell>
                            {/*<TableCell component="th" scope="row">*/}
                            {/*    /!*{row.name}*!/*/}
                            {/*</TableCell>*/}
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            <TableModal callback={handleAddItem} openModal={open}/>
            {filledArr?.map((elem, idx)=><FilledDiv el={elem} key={idx}/>)}
        </TableContainer>
    );
}