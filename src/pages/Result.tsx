import React, {useState} from "react";
import {MainContainer} from "../components/MainContainer";
import Swal from "sweetalert2"
import {
    List, ListItem, ListItemIcon, ListItemText, makeStyles,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Typography
} from "@material-ui/core";
import {useData} from "../data/DataContext";
import {Link} from "react-router-dom";
import {InsertDriveFile} from "@material-ui/icons";
import {PrimaryButton} from "../components/PrimaryButton";
import ReactConfetti from "react-confetti";


const useStyles = makeStyles({
    root: {
        marginBottom: "30px",
        textAlign: "center",
        boxSizing: "border-box",
    },
    table: {
        marginBottom: "30px"
    },
    link: {
        padding: "10px 20px",
        border: "1px solid #ccc",
        borderRadius: '4px'
    }
})

export const Result = () => {

    const styles = useStyles()
    const [ success, setSuccess ] = useState(false)
    const { data } = useData()
    const entries = Object.entries(data).filter(entry=> entry[0] !== 'files')
    const {files} = data

    const onSubmit = async () => {
        const formData = new FormData()

        if (data.files){
            data.files.forEach((file:File)=>{
                formData.append('files', file, file.name)
            })
        }

        entries.forEach(entry=>{
            formData.append(entry[0], entry[1])
        })

        const response = await fetch("http://localhost:4000",
            {
                method: "POST",
                body: formData
            })
        if (response.status === 200){
            setSuccess(true)
            await Swal.fire('Great Job', "You've passed the challenge", "success")
        }else {
            await Swal.fire('Great Job', "You've passed the challenge", "success")
        }
    }
    if (success)
    {
        return <ReactConfetti></ReactConfetti>
    }

    return (<MainContainer>
        <Typography component="h2" variant="h5">Form Values</Typography>
        <TableContainer component={Paper} className={styles.root}>
            <Table className={styles.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>
                            Field
                        </TableCell>
                        <TableCell align="right">
                            Value
                        </TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        entries.map(entry=>(
                            <TableRow key={entry[0]}>
                                <TableCell>
                                    {
                                        entry[0]
                                    }
                                </TableCell>
                                <TableCell align="right">
                                    {
                                        entry[1].toString()
                                    }
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>

        </TableContainer>
        {
            files && (
                <>
                    <Typography align="center">🗳️ Files</Typography>
                    <List>
                        {
                            files.map((f, index)=>(
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile />
                                    </ListItemIcon>
                                    <ListItemText primary={f.name} secondary={f.size}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </>
            )
        }
        <PrimaryButton onClick={onSubmit}>Зарегистрироваться</PrimaryButton>
        <Link className={styles.link} to="/" >Заполнить форму</Link>
    </MainContainer>)
}