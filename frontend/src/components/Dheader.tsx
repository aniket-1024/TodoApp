export function Dheader({ label }: { label: string }) {
    console.log(label);
    return (
        <div className="flex justify-between px-2 py-3 bg-gray-t drop-shadow-xl ">
            <div className=" text-2xl font-semibold f">
                MY TODO
            </div>
            <div className="flex">
                <div className="text-lg text-center flex justify-center pr-3 font-serif mt-1">
                    Hello
                </div>
                <div className=" bg-brown-hov rounded-full w-8 h-8 flex justify-center text-xl font-serif text-">
                    {label.length>0 ? label[0] : 'a'}
                </div>
            </div>
            
        </div>
    )
}
