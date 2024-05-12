import { Link } from "react-router-dom"

export const Footer = ({label,buttonText,to}:any):any =>  {
    return (
        <div className="flex justify-center text-sm">
            <div className="text-md text-center font-xs py-2 pr-2 text-textWhite">
                {label}
            </div>
            <Link className="flex justify-center flex-col underline cursor-pointer text-brown hover:text-brown-hov" to={to}>
                {buttonText}
            </Link>
        </div>
    )
    
}