import {MainContainer} from "../components/MainContainer";
import {FormControlLabel, Typography} from "@material-ui/core";
import React from "react";
import {Form} from "../components/Form";
import {Input} from "../components/Input";
import {useForm} from "react-hook-form";
import {yupResolver} from "@hookform/resolvers/yup/dist/yup";
import {useNavigate} from "react-router-dom";
import {PrimaryButton} from "../components/PrimaryButton";
import * as yup from "yup";
import Checkbox from "@material-ui/core/Checkbox";
import {parsePhoneNumberFromString} from "libphonenumber-js";

interface IStep2 {
    email: string,
    phoneHumber?: string
}

const schema = yup.object().shape({
    email: yup
        .string()
        .email('Email не соответсвует формату')
        .required("Email обязателен"),
})

const normalizePhoneNumber = (value: string) => {
    const phoneNumber = parsePhoneNumberFromString(value)
    if (!phoneNumber)
        return value
    return (
        phoneNumber.formatInternational()
    )
}


export const Step2 = () => {

    const history = useNavigate()
    const {register, handleSubmit, formState: {errors}, watch} = useForm(
        {
            mode: 'onBlur',
            resolver: yupResolver(schema)
        });

    const hasPhone = watch('hasPhone')

    const onSubmit = (data: IStep2) => {
        history('/step3', { replace: true })
        console.log(data)
    }

    return (<MainContainer>
        <Typography component="h2" variant="h5">Step 2</Typography>
        <Form
            onSubmit={handleSubmit(onSubmit)}>
            <Input
                {...register('email')}
                id="email"
                type="email"
                label="Email"
                name="email"
                required
                error={!!errors.email}
                helperText={errors?.email?.message}
            />
            <FormControlLabel control={
                <Checkbox
                    name="hasPhone"
                    {...register('hasPhone')}
                    color="primary" />
            } label="У вас есть телефон"/>
            {
                hasPhone && (
                    <Input
                        {...register('phoneNumber')}
                        type="tel"
                        id="phoneNumber"
                        name="phoneNumber"
                        label="Phone number"
                        onChange={(event: Event)=>{
                            const { target } = event
                            if (target)
                                target.value = normalizePhoneNumber(target.value)
                        }}
                    />
                )
            }
            <PrimaryButton>Next</PrimaryButton>
        </Form>
    </MainContainer>)
}