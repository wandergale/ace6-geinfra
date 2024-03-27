import { Label } from "./ui/label"
import { Textarea } from "./ui/textarea"

type Props = {
    className?: string
    placeholder?: string,
    label?: string,
}

function TextAreaComponent({className, placeholder, label}: Props) {

    return (
        <span className={className}>
            <Label htmlFor="text-field">
                {label}
            </Label>
            <Textarea id="text-field" placeholder={placeholder} className="mt-1"/>
        </span>
    )
  }
  
  export default TextAreaComponent
  