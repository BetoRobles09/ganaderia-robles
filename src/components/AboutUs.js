import React from 'react'

const AboutUs = ({ title, text }) => {
  const url = 'https://www.google.com.mx/maps/place/Teocuitatl%C3%A1n+de+Corona,+Jal./@20.090379,-103.3902537,845m/data=!3m2!1e3!4b1!4m5!3m4!1s0x842f65db4e928b0f:0x4d4a1b9a89185bfd!8m2!3d20.090771!4d-103.3886001'
  return (
    <div className='about-us mb-4' id='us'>
      <div className='row mt-5'>
        <div className='mt-5 ml-5 mr-5 mb-5'>
          <h3 className='text-title'>{title}</h3>
          <hr className='line' />
          <p className='sub-text-about'>{text}</p>
        </div>
      </div>
      <h5 className='text-contact ml-4'>Contacto</h5>
      <div><span className='sub-text-about ml-4'>Cel: 3310176687</span></div>
      <div><span className='sub-text-about ml-4'>Nos encontramos al sur de Jalisco</span></div>
      <div><span className='sub-text-about ml-4'><a href={url}>Carretera teocuitatlan 404, N° 201. Teocuitatlán de Corona, jalisco, México</a></span></div>
    </div>
  )
}

export default AboutUs
