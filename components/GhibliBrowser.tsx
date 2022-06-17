import { GetServerSideProps } from "next"

interface Props {
    people: Array<Person>
}

const GhibliBrowser: React.FC<Props> = ({ people }) => {
    return (
        <ul>
            {people.map((person) => <li key={person.id}>{person.name}</li>)}
        </ul>
            
    )
}


export default GhibliBrowser

