import React from 'react'
import './images.css';
import Company from './Company';
import { useContext } from 'react';
import OptionsContext from '../../contexts/optionsContext';
import DonationsContext from '../../contexts/donationsContext';
import { getCustomDonationLevel } from '../../helpers/donation-level';

const getImage = (donationAmount, monthlyDonation, options) =>  {
    if(monthlyDonation){
        return getCustomDonationLevel(options.monthly.levels, donationAmount).img;
    } else {
        return options.oneTime.img;
    }
}

const Images = () => {
    const options = useContext(OptionsContext);
    const {donationAmount, monthlyDonation} = useContext(DonationsContext);

    <img className="images__img" src={getImage(donationAmount, monthlyDonation, options)} alt="Fungi"/>

    return (
        <div className='images' style={{backgroundImage: `url(${getImage(donationAmount, monthlyDonation, options)})`}}>
            <Company />
        </div>
    )
}

export default Images
