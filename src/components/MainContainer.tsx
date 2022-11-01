import React, {FC, PropsWithChildren} from "react";
import {Container, makeStyles} from "@material-ui/core";

const useStyles = makeStyles((theme)=>({
    root: {
        marginTop: theme.spacing(4),
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    }
}))


export const MainContainer:FC<PropsWithChildren> = ( { children, ...props} ) => {

    const styles = useStyles()

    return(
        <Container container="main" maxWidth="xs" className={styles.root} {...props}>
            { children }
        </Container>
    )
}