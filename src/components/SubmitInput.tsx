import React, { FunctionComponent } from "react"
import classnames from "classnames"

import "./styles/SubmitInput.css"

interface Props {
    value: string
    onChange: (value: string) => void
    onSubmit: () => void
    placeholder?: string
    submitButtonName?: string
    validationMessage?: string
    disabled?: boolean
    className?: string
}

export const SubmitInput: FunctionComponent<Props> = ({
    value,
    onChange,
    onSubmit,
    placeholder,
    submitButtonName,
    validationMessage,
    disabled,
    className,
}) => {
    const submitDisabled = validationMessage !== undefined || disabled
    return (
        <div className={classnames(className, "submit-input-row")}>
            {validationMessage && (
                <span className="invalid-message">{validationMessage}</span>
            )}
            <input
                type="text"
                className={`text-input`}
                value={value}
                onChange={e => onChange(e.target.value)}
                placeholder={placeholder}
                onKeyDown={e => {
                    if (e.key === "Enter" && !submitDisabled) {
                        onSubmit()
                    }
                }}
            />
            <button disabled={submitDisabled} onClick={onSubmit}>
                {submitButtonName || "Submit"}
            </button>
        </div>
    )
}
