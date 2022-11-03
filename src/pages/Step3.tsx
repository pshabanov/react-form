import React from "react";
import {MainContainer} from "../components/MainContainer";
import {Typography} from "@material-ui/core";
import {Form} from "../components/Form";
import {FileInput} from "../components/FileInput";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "../components/PrimaryButton";
import {useNavigate} from "react-router-dom";
import {useData} from "../data/DataContext";

interface IStep3 {
    file: File[],
}

export const Step3 = () => {

    const history = useNavigate()
    const { data, setValues } = useData()
    const { control, handleSubmit } = useForm({
        defaultValues: {
            files: data.files
        }
    })

    const onSubmit = (data: IStep3) => {
        history('/result', { replace: true })
        setValues(data)
    }

    return <MainContainer>
        <Typography component="h2" variant="h5">Step 3</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FileInput name="files" control={control} />
            <PrimaryButton>Next</PrimaryButton>
        </Form>
    </MainContainer>
}