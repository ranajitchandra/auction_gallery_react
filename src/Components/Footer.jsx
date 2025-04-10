

export default function Footer(){

    return (
        <div className="text-center py-15 bg-base-100">
            <h1 className="text-blue-500 text-xl font-medium">Auction
                <span className="text-yellow-500 font-bold">Gallery</span>
            </h1>
            <ul className="menu menu-horizontal font-semibold">
                <li><a>Bid.</a></li>
                <li><a>Win.</a></li>
                <li><a>Won.</a></li>
            </ul>
            <div className="navbar-center hidden lg:flex justify-center">
                <ul className="menu menu-horizontal">
                    <li><a>Home</a></li>
                    <li><a>Auction</a></li>
                    <li><a>Categories</a></li>
                    <li><a>How to works</a></li>
                </ul>
            </div>
            <p>© 2025 AuctionHub. All rights reserved.</p>
        </div>
    )
}