import React, { FunctionComponent } from "react"
import classnames from "classnames"

interface Props {
    value: string
    onChange: (value: string) => undefined
    onSubmit: () => undefined
    placeholder?: string
    submitButtonName?: string
    validationMessage?: string
    disabled?: boolean
    className?: string
}

export const SubmittableInput: FunctionComponent<Props> = props => (
    <div className={classnames(props.className, "submittable-input-row")}>
        {props.validationMessage && (
            <span className="invalid-message">{props.validationMessage}</span>
        )}
        <input
            type="text"
            className={`text-input`}
            onChange={e => props.onChange(e.target.value)}
        ></input>
        <button
            disabled={props.validationMessage !== undefined || props.disabled}
            onClick={props.onSubmit}
        >
            {props.submitButtonName || "Submit"}
        </button>
    </div>
)
