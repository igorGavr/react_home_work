import React from 'react';
import css from './UserDetails.module.css'

const UserDetails = ({user}) => {
    const {id, name, username, email, address: {street, suite, city, zipcode, geo:{lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = user
    return (
        <div className={css.userDetails}>
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
            {catchPhrase}  {bs}
        </div>
    );
};

export {UserDetails};