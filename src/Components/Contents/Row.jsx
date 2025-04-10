

import { FaHeart  } from "react-icons/fa";


export default function Row({item, addToFavorite, isDisabled}){
    
    return (
        <>
            <tr>
                <td>
                    <div className="flex gap-4 items-center text-xl text-gray-600">
                        <img className="row-img" src={item.image} alt="" />{item.title}
                    </div>
                </td>
                <td><span className="text-lg font-semibold">$ {item.currentBidPrice}</span></td>
                <td>{item.timeLeft} Left</td>
                <td><button disabled={isDisabled[item.id]? isDisabled[item.id] : false} onClick={()=>addToFavorite(item)}><FaHeart  className={isDisabled[item.id]?"text-2xl text-red-500 cursor-not-allowed":" text-2xl cursor-pointer"} /></button></td>
            </tr>
        </>
    )
}