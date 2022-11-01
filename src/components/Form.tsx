import React, {FC, PropsWithChildren} from "react";
import {makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        width: '100%',
        marginTop: theme.spacing(1)
    }
}))

export const Form:FC<PropsWithChildren> = ({children, ...props}) =>{
    const style = useStyles()

    return <form noValidate {...props} className={style.root}>{children}</form>
}