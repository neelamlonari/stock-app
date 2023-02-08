import { Link } from "react-router-dom";

export default function Nav (props){
    return(
        <div className="nav">
            <div className="Home"> 
             <Link to ="/">
                <div >Home</div>
                <Link to = "/stocks">
                    <div>Dashboard</div>
                    <Link to = "/stocks:symbol">
                        <div>Stock</div>
                    </Link>
                </Link>
              </Link>
            </div>
            <Link to = "/about">
                    <div>About</div>
            </Link>
        </div>
    )
}