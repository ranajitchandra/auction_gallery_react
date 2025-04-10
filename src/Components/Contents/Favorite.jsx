
import { MdDelete } from "react-icons/md";

export default function Favorite({item, cbF}){
    // console.log(item)
    return (
        <>
            <div className="flex justify-between items-center gap-2 py-3 border-b border-b-gray-200 text-center">
                <img className="row-img" src={item.image} alt="" />
                <div className="font-semibold">
                    <p className="py-1">{item.title}</p>
                    <div className="flex justify-between items-center gap-2">
                        <div>$ {item.currentBidPrice}</div>
                        <div>Bids: {item.bidsCount}</div>
                    </div>
                </div>
                <button onClick={()=>cbF(item.id)}><MdDelete className="text-3xl text-red-600 cursor-pointer" /></button>
            </div>
        </>
    )
}