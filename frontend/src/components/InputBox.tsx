
export function InputBox({Label, placeholder, onChange}:any){
    return (
        <div>
            <div className="text-md font-medium text-left pd-1 pl-4 text-gray-dark text-opacity-50">
                {Label}
            </div>
            <div className="pl-1 pr-1">
                <input onChange={onChange} placeholder={placeholder} className="pl-3 w-full px-3 py-1 border-2 rounded border-yellow text-gray-dark"></input>
            </div>
        </div>
    )
}