import { assets } from "../../assets/frontend_assets/assets"
import "./appDownload.css"

const AppDownload = () => {
  return (
    <div className="app-download" id="app-download">
        <p>Download the App<br/>TOMATO</p>
        <div className="app-download-platforms">
            <img src={assets.play_store} alt="play_store" />
            <img src={assets.app_store} alt="app_store" />
        </div>
    
    </div>
  )
}

export default AppDownload
