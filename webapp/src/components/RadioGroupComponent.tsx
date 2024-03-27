import { Label } from "./ui/label"
import { RadioGroup, RadioGroupItem } from "./ui/radio-group"

type Props = {
    items: string[],
    placeholder?: string,
    label?: string,
}

function RadioGroupComponent({items, label}: Props) {

    return (
        <span>
            <Label htmlFor="radio-group">
                {label}
            </Label>


            {/* Create a grid here with 3 columns */}
            <RadioGroup
                id="radio-group"
                defaultValue={items[0]}
                className="mt-2"
                onValueChange={(v) => console.log(v)}
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
  