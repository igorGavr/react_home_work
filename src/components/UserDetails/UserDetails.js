import React from 'react';
import {useLocation} from "react-router-dom";
import {MyContext} from "../../App";

const UserDetails = () => {
    const {state} = useLocation()
    const {id, name, username, email, address: {street, suite, city, zipcode, geo:{lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = state
    return (
        <div>
            <div>
                ID - {id}  Name - {name} Username - {username}
            </div>
            <div>
                Email - {email} -- Street {street} -- City {city}
            </div>
            <div>
                {suite} ** {zipcode} ** {lat} ** {lng}
            </div>
            <div>
                {phone} -- {website}
            </div>
            <div>
                {companyName}
            </div>
            <div>
                {catchPhrase} -- {bs}
            </div>
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

export {UserDetails};;