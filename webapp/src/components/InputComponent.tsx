import { Input } from "./ui/input"
import { Label } from "./ui/label"

type Props = {
    className?: string
    placeholder?: string,
    label?: string,
    readOnly?: boolean
    value?: string
    onChange?: (value: string) => void
}

function InputComponent({className, placeholder, label, readOnly, value, onChange}: Props) {

    return (
        <span className={`w-full ${className}`}>
            <Label htmlFor="input-field">
                {label}
            </Label>
            <Input
                id="input-field"
                placeholder={placeholder}
                className={`w-full ${readOnly && 'bg-gray-200'}`}
                readOnly={readOnly}
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </span>
    )
  }
  
  export default InputComponent
  