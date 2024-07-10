import { Outlet } from "react-router-dom"

function Route(){
    return (
        <div>
            <h2>Route Content</h2>
            <Outlet/>
        </div>
    )
}
export default Route