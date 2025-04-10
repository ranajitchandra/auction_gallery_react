


export default function Header(){
    return (
        <div className="flex justify-between items-center bg-base-100 px-15 py-4">
            <h1 className="text-blue-500 text-2xl font-medium">Auction<span className="text-yellow-500 font-bold">Gallery</span></h1>
            
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-2">
                    <li className="text-lg font-semibold hover:bg-blue-500 hover:text-white hover:rounded-md"><a>Home</a></li>
                    <li className="text-lg font-semibold hover:bg-blue-500 hover:text-white hover:rounded-md"><a>Auction</a></li>
                    <li className="text-lg font-semibold hover:bg-blue-500 hover:text-white hover:rounded-md"><a>Categories</a></li>
                    <li className="text-lg font-semibold hover:bg-blue-500 hover:text-white hover:rounded-md"><a>How to works</a></li>
                </ul>
            </div>
            <div className="flex gap-4">
                <button className="btn btn-ghost btn-circle">
                    <div className="indicator">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" /> </svg>
                        <span className="badge badge-xs badge-primary indicator-item">0</span>
                    </div>
                </button>
                <div className="dropdown dropdown-end">
                    <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                            <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp" />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    )
}