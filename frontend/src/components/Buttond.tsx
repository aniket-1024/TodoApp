export function Buttond({label, onClick}:any) {
    return (
        <div className="pt-4">
            <button onClick={onClick} type="button" className=" text-brown-hov bg-brown hover:bg-brown-hov focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-md px-5 py-2.5 me-2 mb-2 border-2 border-brown-hov hover:border-gray-dark hover:text-gray-dark">{label}</button>
        </div>
    )
}