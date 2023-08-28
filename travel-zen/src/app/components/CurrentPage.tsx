import "../globals.css"

interface Props {
    number: string;
    title: string;
}

export const CurrentPage: React.FC<Props> = ({number,title}) => {
    return (
        <div>
            <h2 className='cabin.className text-white text-center'>{number}<br></br>{title}</h2>
        </div>
    )
}