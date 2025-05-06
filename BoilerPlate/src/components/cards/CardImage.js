import { useRef, useEffect } from "react";
import ButtonPrimary from "../buttons/ButtonPrimary";

export default function CardImage() {
    const cardRef = useRef(null);
    const handleClick = () => {
        console.log(cardRef.current);
    }
    useEffect(() => {

    }, [cardRef]);
    return (
        <div className="card image-full w-96 shadow-sm ">
            <figure>
                <img
                    src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
                    alt="Shoes" />
            </figure>
            <div className="card-body" ref={cardRef} >
                <h2 className="card-title">Card Title</h2>
                <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                <div className="card-actions justify-end">
                    <ButtonPrimary onClick={handleClick}>Buy Now</ButtonPrimary>
                </div>
            </div>
        </div>
    );
}
