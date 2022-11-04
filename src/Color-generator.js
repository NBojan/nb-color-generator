import React, { useState } from "react";
import Values from "values.js";
import ColorItem from "./ColorItem";

const ColorGenerator = () => {
    const [color, setCol] = useState("tomato");
    const [err, setErr] = useState(false);
    const [data, setData] = useState(new Values("tomato").all(10));

    const handleSubmit = (e) => {
        e.preventDefault();
        try {
            setData(new Values(color).all(10));
            setErr(false);
        } catch {
            setErr(true);
        }
    }
    return (  
        <React.Fragment>
            <section className="mb-20">
                <header className="d-flex align-center">
                    <h3 className="capitalize mr-20">Color generator</h3>
                    <form className="d-flex" onSubmit={handleSubmit}>
                        <input type="text" value={color} onChange={e => setCol(e.target.value)} className={err ? "error" : null}/>
                        <button type="submit">Generate</button>
                    </form>
                    {err && <p className="ml-10">Try adding a different color</p>}
                </header>
            </section>

            <section className="colors-container d-flex flex-wrap">
                {data.map((item,index) => <ColorItem key={index} {...item} hex={item.hex} index={index}/>)}
            </section>
        </React.Fragment>
    );
}
 
export default ColorGenerator;