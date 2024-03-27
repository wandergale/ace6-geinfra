import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    BreadcrumbList,
    BreadcrumbPage,
    BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import { GrHomeRounded } from "react-icons/gr";


type Props = {
    className?: string
}

function NavBreadcrumb({className}: Props) {

    return (
        <span className="flex items-center">
            <GrHomeRounded
                className="mr-4"
                color="#828282"
                size={20}
            />

            {/* TODO: Make this dinamic */}
            <Breadcrumb>
                <BreadcrumbList>
                    <BreadcrumbItem>
                        <BreadcrumbLink className="text-base" href="/">Home</BreadcrumbLink>
                    </BreadcrumbItem>
                    <BreadcrumbSeparator />
                    <BreadcrumbItem>
                        <BreadcrumbPage className="text-base text-primary-blue">Solicitações</BreadcrumbPage>
                    </BreadcrumbItem>
                </BreadcrumbList>
            </Breadcrumb>
        </span>
    )
  }
  
  export default NavBreadcrumb
  