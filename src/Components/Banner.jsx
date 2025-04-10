export default function Banner(){
    return (
        <div className="banner relative  text-white px-15">
            <div className="w-3/7 absolute top-1/2 -translate-y-1/2">
                <h2 className="text-4xl font-semibold my-3">Bid on Unique Items from Around the World</h2>
                <p className="my-3  text-gray-300">Discover rare collectibles, luxury goods, and vintage treasures<br/>in our curated auctions</p>
                <button className="btn rounded-full hover:bg-blue-500 hover:text-white">Explore Auction</button>
            </div>
        </div>
    )
}