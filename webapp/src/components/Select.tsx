import { 
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue
} from "@/components/ui/select"
import { Label } from "./ui/label"

type Props = {
    items: string[],
    placeholder?: string,
    label?: string,
    className?: string,
    value?: string,
    onChange?: (value: string) => void
}

function SelectComponent({items, placeholder, label, className, value, onChange}: Props) {

    return (
        <span className={`w-full ${className}`}>
            <Label htmlFor="select-field">
                {label}
            </Label>
            <Select value={value} onValueChange={onChange}>
                <SelectTrigger className="w-full mt-1" id="select-field">
                    <SelectValue placeholder={placeholder} />
                </SelectTrigger>
                <SelectContent>
                    {
                        items.map((i) => (
                            <SelectItem value={i} key={i}>{i}</SelectItem>
                        ))
                    }
                </SelectContent>
            </Select>
        </span>
    )
  }
  
  export default SelectComponent
  