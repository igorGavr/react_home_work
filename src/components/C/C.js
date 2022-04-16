import React from 'react';
import {MyContext} from "../../App";

const C = () => {
    return (
        <div>
            C component
            <MyContext.Consumer>
                {
                    (value) => {
                        return <h3>{value}</h3>
                    }
                }
            </MyContext.Consumer>
        </div>
    );
};

export {C};