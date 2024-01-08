import React from 'react'
import { useMediaQuery } from 'react-responsive';

function Footer() {

    const d = new Date();
    let year = d.getFullYear();

    const isMobile = useMediaQuery({ query: '(max-width: 576px)' });

    return (
        <>
            <div className="footer_main">
                <section className='footer'>
                    <div className="container">
                        <div className='footer_content'>
                            <div className={`${isMobile ? 'd-none' : 'd-block'}`}>
                                <p>Copyright © {year} dTecherz | All Rights Reserved.</p>
                            </div>
                            <div className='d-flex jc-center text-center'>
                                <a href="#" className='footer_links me-2'>Terms & Conditions</a>
                                <a href="#" className='footer_links me-2'>Privacy Policy</a>
                                <a href="#" className='footer_links'>Legal Information</a>
                            </div>
                            <div className={`${isMobile ? 'd-block' : 'd-none'}`}>
                                <p>Copyright © {year} dTecherz | All Rights Reserved.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}

export default Footer
