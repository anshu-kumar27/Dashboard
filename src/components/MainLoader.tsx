import "./styles/mainLoaderStyle.css"

function MainLoader() {
  return (
<div className="fixed inset-0 flex justify-center items-center z-50">
      <div className="loader animate-spin "></div>
    </div>  
    )
}

export default MainLoader