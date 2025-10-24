import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

type Props = {
    className?: string
    placeholder?: string,
    label?: string,
    value?: string,
    onChange?: (value: string) => void
}

function TextAreaComponent({className, placeholder, label, value, onChange}: Props) {

    return (
        <span className={className}>
            <Label htmlFor="text-field">
                {label}
            </Label>
            <Textarea 
                id="text-field" 
                placeholder={placeholder} 
                className="mt-1"
                value={value}
                onChange={(e) => onChange?.(e.target.value)}
            />
        </span>
    )
  }
  
  export default TextAreaComponent
  