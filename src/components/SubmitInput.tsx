import React, { FunctionComponent } from "react"
import classnames from "classnames"

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
}) => (
    <div className={classnames(className, "submittable-input-row")}>
        {validationMessage && (
            <span className="invalid-message">{validationMessage}</span>
        )}
        <input
            type="text"
            className={`text-input`}
            value={value}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
        ></input>
        <button
            disabled={validationMessage !== undefined || disabled}
            onClick={onSubmit}
        >
            {submitButtonName || "Submit"}
        </button>
    </div>
)
