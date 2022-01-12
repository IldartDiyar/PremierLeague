import Corusel from "./Corusel";
import Review from "./Review";
import classes from "./review.module.css"

export default function Rereview() {
 return(
     <div>
         <div className={classes.App}>
        <Review/> 
        </div>
        <div className="d-flex justify-content-center w-500">
        <Corusel />
        </div>
     </div>
 )
}
