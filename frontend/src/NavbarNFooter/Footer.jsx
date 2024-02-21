import React from 'react'
import './Footer.css';

export default function Footer() {
    return (
        <div className='footer'>
            <div className='text-container'>
                <p>RAID, IIT Jodhpur</p>
                <p>©2024  @all rights reserved</p>
            </div>
            <div class="socials">
                <div><a className='ri-instagram-line logo' href="https://www.instagram.com/raid.iitj/" target="_blank"></a></div>
                <div><a className="ri-linkedin-fill logo" href="https://www.linkedin.com/company/raid-iitj/" target="_blank"></a></div>
                <div><a className="ri-whatsapp-line logo" href="https://wa.me/918889722887" target="_blank"></a></div>
            </div>
        </div>
    )
}
