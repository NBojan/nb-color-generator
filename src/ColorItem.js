import { useState } from "react";

const ColorItem = ({rgb,weight,index,hex}) => {
    const [clip, setClip] = useState(false);
    const bgCol = rgb.join(",");
    const handleCopy = () => {
        setClip(true);
        navigator.clipboard.writeText(`#${hex}`);
        setTimeout(() => setClip(false),1500);
    }

    return (                        
        <div className={`color-item ${index > 10 && "light"}`} style={{backgroundColor: `rgb(${bgCol})`}} onClick={handleCopy}>
            <p className="weight">{weight}%</p>
            <p className="hex-value">#{hex}</p>
            {clip && <p className="copied uppercase">Copied to clipboard</p>}
        </div>
    );
}
 
export default ColorItem;