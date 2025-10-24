import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

type Props = {
    items: string[],
    placeholder?: string,
    label?: string,
    value?: string,
    onChange?: (value: string) => void
}

function RadioGroupComponent({items, label, value, onChange}: Props) {

    return (
        <span>
            <Label htmlFor="radio-group">
                {label}
            </Label>

            <RadioGroup
                id="radio-group"
                value={value}
                className="mt-2"
                onValueChange={onChange}
            >
                {
                    items.map((v, i) => (
                        <div className="flex items-center space-x-2" key={v}>
                            <RadioGroupItem value={v} id={`option-${i}`} />
                            <Label className="font-normal" htmlFor={`option-${i}`}>{v}</Label>
                        </div>
                    ))
                }
            </RadioGroup>
        </span>
    )
  }
  
  export default RadioGroupComponent
  