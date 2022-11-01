import React, {FC, PropsWithChildren} from "react";
import {Button, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        margin: theme.spacing(3, 0, 2)
    }
}))

interface PrimaryButtonProps{

}

export const PrimaryButton:FC<PropsWithChildren<PrimaryButtonProps>> = ({children, ...props}) => {
    const styles = useStyles()

    return <Button type="submit" fullWidth variant="contained" color="primary" className={styles.root} {...props} >{children}</Button>
}