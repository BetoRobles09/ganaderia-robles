import React from 'react'
import Menu from './components/Menu'
import Banner from './components/Banner'
import Start from './components/Start'
import Products from './components/Products'
import Maquilas from './components/Maquilas'
import AboutUs from './components/AboutUs'
import Footer from './components/Footer'

function App () {
  return (
    <>
      <Menu />
      <Banner slogan='Calidad y bienestar en un solo lugar' />
      <Start />
      <Products
        title='Nuestros productos'
        text='Ofrecemos carne de la más alta calidad, nuestros borregos pastan en praderas libres de fertilizantes'
      />
      <Maquilas
        title='Maquilas'
        text='Tenemos sementales para la venta de semen congelado o monta directa. Avalados por la ONO y el CONARGEN.'
      />
      <AboutUs
        title='Acerca de nosotros'
        text='Somos una empresa dedicada a la producción de borregos de la raza Pelifolk, enfocada en ofrecer la mejor calidad de carne con un manejo basado en el bienestar animal. Tenemos las mejores instalaciones para todas las comodidades de nuestros borregos.'
      />
      <Footer />
    </>
  )
}

export default App
