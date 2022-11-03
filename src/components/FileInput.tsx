import React, {FC} from "react";
import {Controller} from "react-hook-form";
import Dropzone from "react-dropzone";
import {List, ListItem, ListItemIcon, ListItemText, Paper} from "@material-ui/core";
import {CloudUpload, InsertDriveFile} from "@material-ui/icons";
import {Control} from "react-hook-form/dist/types/form";

interface IFileInputProps {
    control: Control
    name: string
}

export const FileInput:FC<IFileInputProps> = ({control, name}) => {
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
                            ({getRootProps, getInputProps}) => (<Paper variant="outlined" {...getRootProps()}>
                                <CloudUpload/>
                                <input {...getInputProps()} name={name} onBlur={onBlur}/>
                                <p>Перетащите файлы сюда, или нажмите для выбора файлов</p>
                            </Paper>)
                        }
                    </Dropzone>
                    <List>
                        {
                            value.map((f:File, index:number) => (
                                <ListItem key={index}>
                                    <ListItemIcon>
                                        <InsertDriveFile/>
                                    </ListItemIcon>
                                    <ListItemText primary={f.name} secondary={f.size} />
                                </ListItem>
                            ))
                        }
                    </List>
                </>}
        />
    )
}