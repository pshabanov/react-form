import React, {FC} from "react";
import {Controller} from "react-hook-form";
import Dropzone from "react-dropzone";
import {List, ListItem, ListItemIcon, ListItemText, makeStyles, Paper} from "@material-ui/core";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";
import {Control} from "react-hook-form/dist/types/form";

interface IFileInputProps {
    control: Control
    name: string
}

const useStyles = makeStyles(() => ({
    root: {
        backgroundColor: '#eee',
        textAlign: 'center',
        cursor: 'pointer',
        color: '#333',
        padding: '10px',
        marginTop: '20px'
    },
    icon: {
        marginTop: "16px",
        color: '#888',
        fontSize: '42px'
    }
}))


export const FileInput: FC<IFileInputProps> = ({control, name}) => {
    const styles = useStyles()

    return (
        <Controller
            control={control}
            name={name}
            defaultValue={[]}
            render={({
                         field: {onChange, onBlur, value, name}
                     }) =>
                <>
                    <Dropzone onDrop={onChange}>
                        {
                            ({getRootProps, getInputProps}) => (
                                <Paper className={styles.root} variant="outlined" {...getRootProps()}>
                                    <CloudUpload/>
                                    <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                    <p>Перетащите файлы сюда, или нажмите для выбора файлов</p>
                                </Paper>)
                        }
                    </Dropzone>
                    <List>
                        {
                            value.map((f: File, index: number) => (
                                <ListItem key={index}>
                                    <ListItemIcon className={styles.icon}>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={f.name} secondary={f.size}/>
                                </ListItem>
                            ))
                        }
                    </List>
                </>}
        />
    )
}