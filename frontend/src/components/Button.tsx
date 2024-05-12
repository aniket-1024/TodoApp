
const Button = ({label, onClick}:any) => {
    return (
        <div className="pt-4">
            <button onClick={onClick} type="button" className="text-gray-dark bg-brown hover:bg-brown-hov focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2">{label}</button>
        </div>
    )
}

export default Button