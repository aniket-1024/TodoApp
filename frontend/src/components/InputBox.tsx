
export function InputBox({Label, placeholder, onChange}:any){
    return <div>
        <div className="text-md font-medium text-left py-2 text-textWhite">
            {Label}
        </div>
        <input onChange={onChange} placeholder={placeholder} className="w-full px-3 py-1 border-2 rounded border-yellow text-gray-dark"></input>
    </div>
}