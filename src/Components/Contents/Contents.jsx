
import { Suspense } from "react"
import Content from "./Content"



export default function Contents(){

    const fetchData = async () => {
        const getJsonData = await fetch("/data.json")
        return getJsonData.json()
    }

    return (
        <>
            <div className="p-15 bg-gray-200">
                <h1 className="text-2xl font-semibold">Active Auctions</h1>
                <p>Discover and bid on extraordinary items</p>
                <Suspense fallback={    <div className="flex justify-center items-center">
                                            <span className="custom-spinner text-red-500 loading loading-spinner loading-xl"></span>
                                        </div>
                                    }>
                    <Content jsonData={fetchData()}></Content>
                </Suspense>
            </div>
        </>
    )
}