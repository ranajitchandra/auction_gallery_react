console.clear()

import Banner from "./Components/Banner.jsx"
import Contents from "./Components/Contents/Contents.jsx"
import Footer from "./Components/Footer.jsx"
import Header from "./Components/Header.jsx"
import { ToastContainer } from 'react-toastify';
function App() {


  return (
    <>
        <main className="max-w-7xl mx-auto">
            <Header />
            <Banner />
            <Contents/>
            <Footer/>
            <ToastContainer/>
        </main>
    </>
    
  )
}

export default App
