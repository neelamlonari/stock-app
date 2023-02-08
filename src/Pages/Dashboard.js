import stocks from"../Data.js";
import {Link} from"react-router-dom";

export default function Dashboard(props){
  return (
  <div className="All Stocks">
    <h3>Most Recent Stocks</h3>
    < div className="container">
    <div className="stocks-container">
    <td className="left-element">Company Name</td>
    <div className="right-elements">
    <td className="right-element">Price</td>
    <td className="right-element">Change</td>
    </div>
    </div>
    <div className="border-line"></div>
    {stocks.map((stock)=>{
        const{name,symbol,change,lastPrice} = stock;

        return(
            <div className="stocks-container"key ={symbol} >
            <Link key ={name} to = {`/stocks/${symbol}`}>
                <th className="left-element">{name} ,{symbol}</th>
                <div className="right-elements">
                <td className="right-element">{lastPrice}</td>
                <td className="right-element">{change.toFixed(2)}</td>
                </div>
            </Link>
        </div>
        );
    })}
  </div>
  </div>
  );

}