//single selection
//multiple selection

import { useState } from "react";
import data from "../data";
import "../App.css";



function Accordian() {

    const [selected, setSelected] = useState(null);

    function handleSingleSelection(currentId) {
        setSelected(currentId === selected ? null : currentId);

    }
    return (
        <div className="wrapper">
            <div className="accordian">
                {data && data.length > 0 ? (

                    data.map((dataItem) => (

                        <div className="item">

                            <div onClick={() => handleSingleSelection(dataItem.id)} className="question">
                                <h3 key={`${dataItem.id}-${dataItem.question}`}>{dataItem.question}</h3>
                                <span>+</span>
                            </div>
                            {
                                selected === dataItem.id ?
                                <div className="answer">

                                    <p key={`${dataItem.id}-${dataItem.answer}`}>{dataItem.answer}</p>
                                </div>

                                : null
                            }

                        </div>
                    ))
                ) : (
                    <div>No data found!</div>
                )}
            </div>
        </div>
    );
}

export default Accordian