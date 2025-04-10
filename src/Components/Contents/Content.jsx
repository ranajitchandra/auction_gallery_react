
import { use, useState, useEffect } from "react";
import { FaRegHeart } from "react-icons/fa";
import Row from "./Row";
import Favorite from "./Favorite";
import { toast } from 'react-toastify';


export default function Content({jsonData}){
    const fetchedJsonData = use(jsonData)
    
    const [value, setValue] = useState([])

    const [isDisabled, setIsDisabled] = useState({})

    // add data to favorite with get obj and set in value, similarly add a new obj to setIsDisabled
    function addToFavorite(getItem){

        const newValue = [ ...value, getItem]
        setValue(newValue)
        
        toast("Data Added")
        const newDisable = {...isDisabled, [getItem.id]: true}
        setIsDisabled(newDisable)
    }

    // remove data from favorite with getting id and filter id==valueId then set in value, similarly filter isDisabled==id and remove obj
    function removeFavItem(id){
        if(id){
            setValue(value.filter(item => item.id !==id))
            const newDisable = { ...isDisabled };
            setIsDisabled(newDisable);
            delete newDisable[id];
            toast("Remove Data")
        }
    }

    // added value from hear click then sum all
    const [sum, setSum] = useState(0)
    useEffect(() => {
        if (value.length > 0) {
        const total = value.reduce((acc, item) => acc + item.currentBidPrice, 0);
        setSum(total);
        } else {
        setSum(0);
        }
    }, [value]);


    return (
        <>
            <div className="grid grid-cols-12 gap-3 justify-between my-5">
                <div className="col-span-8 overflow-x-auto rounded-box border border-gray-200 bg-base-100">
                    <table className="table">
                        <thead>
                            <tr className="text-stone-700">
                                <th>Items</th>
                                <th>Current Bid</th>
                                <th>Time Left</th>
                                <th>Bid Now</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                fetchedJsonData.map(item => <Row key={item.id} item={item} addToFavorite={addToFavorite} isDisabled={isDisabled} ></Row>)
                            }
                            
                        </tbody>
                    </table>
                </div>
                <div className="col-span-4 bg-white p-3 rounded-lg  border border-gray-200">
                    <div className="flex justify-center items-center gap-3 text-center  border-b border-b-gray-200">
                        <FaRegHeart className="text-lg cursor-pointer" />
                        <h2 className="text-2xl font-semibold">Favorite Items</h2>
                    </div>
                    {
                        value.length > 0 ? value.map(item=><Favorite key={item.id} cbF={removeFavItem} item={item}></Favorite>):
                        <div className="py-3 border-b border-b-gray-200 text-center">
                            <h2 className="font-semibold">No Favorites yet</h2>
                            <p className="text-gray-700 text-sm">Click the heart icon on any item to add it to your favorites</p>
                        </div>
                    }
                    


                    <div className="flex justify-between items-center px-2 font-semibold">
                        <h3>Total Bit Amount:</h3>
                        <h3>{sum}</h3>
                    </div>
                </div>
            </div>
        </>
    )
}