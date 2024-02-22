import React from 'react';
import styles from 'styles/Table.module.scss';
import {Table, Paper, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {v4} from 'uuid';
import {ITableDetails, ITableLeftCol} from "../types/app.interfaces";
import Modal from "./Modal";
import {SetterOrUpdater, useRecoilState} from "recoil";

const headRowText: string[] = [
    "Компетенции",
    "Уровень некомпетентности",
    "Уровень развития",
    "Уровень опыта",
    "Уровень мастерства",
];

interface ITableProps {
    leftColText: ITableLeftCol;
    detailes: ITableDetails;
    selectedItems: number[];
    setSelectedItems: SetterOrUpdater<number[]>
}

const TableComponent = ({leftColText, detailes, selectedItems, setSelectedItems}: ITableProps) => {

    return <TableContainer component={Paper} sx={{boxShadow: 'none'}}>
        <Table sx={{minWidth: 650, fontSize: '20px'}} aria-label="simple table" className={styles.table}>
            <TableHead>
                <TableRow>
                    {
                        headRowText.map((row, index) =>
                            <TableCell key={index} align="center">{row}</TableCell>
                        )
                    }
                </TableRow>
            </TableHead>
            <TableBody>
                {leftColText.map((row, index) => (
                    <TableRow
                        key={v4()}
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell sx={{borderBottom: '1px solid #817348'}} component="th" scope="row" style={{width: `320px`}}>
                            {row}
                        </TableCell>
                        {
                            detailes[index].map((detaile, ind) =>
                                <TableCell  sx={{borderBottom: '1px solid #817348', }} key={v4()} component="th" scope="row" align="center" style={{width: `220px`}}>
                                    {Boolean(detaile.length) && <Modal
                                        id={[index, ind]}
                                        active={ selectedItems[index] === ind + 1 }
                                        theme={row}
                                        level={headRowText[ind + 1]}
                                        list={detaile}
                                        setSelectedItems={setSelectedItems}
                                    />}
                                </TableCell>)
                        }
                    </TableRow>
                ))}
            </TableBody>
        </Table>
    </TableContainer>
};

export default TableComponent;