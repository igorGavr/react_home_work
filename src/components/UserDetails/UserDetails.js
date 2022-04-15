import React from 'react';

const UserDetails = ({user}) => {

    const {id, name, username, email, address: {street, suite, city, zipcode, geo:{lat, lng}},
        phone, website, company: {name: companyName, catchPhrase, bs}} = user
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
        </div>
    );
};

export {UserDetails};