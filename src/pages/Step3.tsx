import React from "react";
import {MainContainer} from "../components/MainContainer";
import {Typography} from "@material-ui/core";
import {Form} from "../components/Form";
import {FileInput} from "../components/FileInput";
import {useForm} from "react-hook-form";

export const Step3 = () => {
    const { control } = useForm()

    return <MainContainer>
        <Typography component="h2" variant="h5">Step 3</Typography>
        <Form>
            <FileInput name="files" control={control} />
        </Form>
    </MainContainer>
}