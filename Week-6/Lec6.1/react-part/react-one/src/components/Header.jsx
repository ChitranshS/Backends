import { memo } from "react"
export const Header = memo(function Header({title})
{

    return (
        <div>
            {title}
        </div>
    )
})

