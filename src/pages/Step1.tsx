import React from "react";
import { useNavigate } from 'react-router-dom'
import {MainContainer} from "../components/MainContainer";
import {Typography} from "@material-ui/core";
import {Input} from '../components/Input'
import {Form} from "../components/Form";
import {useForm} from "react-hook-form";
import {PrimaryButton} from "../components/PrimaryButton";
import * as yup from 'yup';
import {yupResolver} from "@hookform/resolvers/yup";
import {useData} from "../data/DataContext";

interface IStep1 {
    firstName: string
    lastName: string
}

const schema = yup.object().shape({
    firstName: yup
        .string().
        matches(/^([^0-9]*)$/, 'Имя не должно содержать цифр')
        .required("Имя обязателно"),
    secondName: yup.string()
        .matches(/^([^0-9]*)$/, 'Фамилия не должно содержать цифр')
        .required("Фамилия обязателна"),
})

export const Step1 = () => {

    const history = useNavigate()
    const { data, setValues } = useData()
    const {register, handleSubmit, formState: {errors}} = useForm(
        {
            defaultValues: { firstName: data.firstName, secondName: data.secondName},
            mode: 'onBlur',
            resolver: yupResolver(schema)
        });

    const onSubmit = (data: IStep1):void => {
        history('/step2', { replace: true })
        setValues(data)
        console.log(data)
    }
    // const name = UseInput('')
    // const surname = UseInput('')

    return (<MainContainer>
        <Typography component="h2" variant="h5">Step 1</Typography>
        <Form onSubmit={handleSubmit(onSubmit)}>
            {/*<input type="text" {...name.bind}/>{name.value}*/}
            <Input
                {...register('firstName')}
                id="firstName"
                type="text"
                label="First Name"
                name="firstName"
                error={!!errors.firstName}
                helperText={errors?.firstName?.message}
            />
            <Input
                {...register('secondName')}
                id="secondName"
                type="text"
                label="Second Name"
                name="secondName"
                error={!!errors.secondName}
                helperText={errors?.secondName?.message}
            />
            <PrimaryButton>Next</PrimaryButton>
        </Form>
    </MainContainer>)
}