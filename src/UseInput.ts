import {ChangeEventHandler, useState} from "react";

export const UseInput = (str: string) => {
    const [value, setValue] = useState(str || '')

    const onChange: ChangeEventHandler<HTMLInputElement> = (e) => setValue(e.target.value)
    const clearInput = () => setValue('')

    return {
        bind: { onChange, value },
        value,
        clearInput
    }
}