
interface CardProps {
    name?: string
}

export const Card = ({name}: CardProps) => {
    if(!name) return null

    const handleHi = (name: string) => {
        alert(`Hi back from ${name}!`)
    }

    return (
        <div className='card'>
            <h2>{name}</h2>
            <button onClick={()=>{handleHi(name)}}>Say Hi!</button>
        </div>
    )
}