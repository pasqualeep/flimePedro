export default function Titulo({children}){
    return(
        <h2 className='border-1-4 border-gray-200 pl-2 leading-5'>Destaques do evento
            {children}
        </h2>
    )
}