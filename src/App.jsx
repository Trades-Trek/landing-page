import PageRoutes from "./routes"
import {Toaster} from 'react-hot-toast'
function App() {

  return (
    <>
      <Toaster/>    
      {/* <ToastContainer /> */}
      <PageRoutes />
    </>
  )
}

export default App
