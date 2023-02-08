import stocks from"../Data.js";
import {Link} from "react-router-dom";

export default function Stock(props){
   return (
   <div className="A single stock">
       {stocks.map((stock)=>{
         const{name,symbol,lastPrice,change,high,low,open}=stock;
         //.log({stock});

    return(
        <Link key = {name} to ={`{/stocks${symbol}`}>
        <h3>{name}, {symbol},{lastPrice}</h3>
        <h4>{change}, {high} ,{low} {open}</h4>
        </Link>
    );
})

}
    	</div>
   );
}