import { Input } from "./ui/input"
import { Label } from "./ui/label"

type Props = {
    className?: string
    placeholder?: string,
    label?: string,
    readOnly?: boolean
}

function InputComponent({className, placeholder, label, readOnly}: Props) {

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
            />
        </span>
    )
  }
  
  export default InputComponent
  