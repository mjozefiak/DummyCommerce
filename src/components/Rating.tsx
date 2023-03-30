import {AiFillStar} from "react-icons/ai";

const Rating = (props: {rating: number}) => {
   return (
      <div className="flex">
         {[...Array(5)].map((star, i) => (
            <AiFillStar key={i} color={props.rating >= i + 1 ? "#ffc107" : "#e4e5e9"}/>
         ))}
      </div>
   );
};

export default Rating;