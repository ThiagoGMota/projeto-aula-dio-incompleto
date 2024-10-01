import { ReactNode } from "react";

interface Props{
    text?:string | ReactNode;
    value?:string | ReactNode
}

const CardInfo:React.FC<Props> = ({text,value}) => {
    return(
        <>
        <main className="w-full bg-black opacity-55 text-white p-3 rounded-lg">
            <h2 className="font-extrabold mb-2 text-xl text-white opacity-100">{text}</h2>
            <p className="font-semibold text-center text-white opacity-100">{value}</p>
        </main>
        </>
    )
}
export default CardInfo;