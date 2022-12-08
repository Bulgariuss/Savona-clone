import React from 'react'
import { useLocation, Link } from 'react-router-dom'
import './styles/News.css'
import Path from './Path'
const News = () => {
    const {pathname} = useLocation()
    console.log(pathname)
  if(pathname === '/news/1') return (
    <div className="content">
        <Path urlsAmount={1} url1='Franczyza - czas na Twoją SAVONĘ !'/>
        <h1 className="itemTitle newsTitle">Franczyza - czas na Twoją SAVONĘ !</h1>
        <p className='newsDate'>16-09-2013</p>
        <p className='newsText'>&nbsp; &nbsp; &nbsp;Jesteśmy <strong>Polską firmą</strong> , godnym zaufania partnerem z <strong>20-letnim</strong> doświadczeniem. To my jako pierwsi w kraju wprowadziliśmy zamówienia online oraz możliwość płacenia za dostawę przez internet. W naszym menu znaleźć można pizze (m.in. kultową serową oraz spice chicken), makarony i sałatki (kultowa paryska) oraz inne propozycje np. szaszłyk, hamburger.</p>
        <p className="newsText">Poszukujemy osób zainteresowanych prowadzeniem własnej pizzerii na terenie całego kraju. Bazując na dwudziestoletnim doświadczeniu zapewniamy wsparcie na każdym etapie działalności. Współpraca z nami w ramach franchisingu pozwala nie tylko na korzystanie z już wypracowanego wizerunku firmy, ale przede wszystkim na zmniejszenie ryzyka handlowego.</p>
        <p className="newsText">Podejście do każdego franczyzobiorcy jest indywidualne, jednakże wszystkim zapewniamy dostęp do sprawdzonego know-how, wsparcie ze strony wykwalifikowanego personelu franczyzodawcy, stałą pomoc koordynatora oraz nasze zaangażowanie przez cały okres współpracy.</p>
        <p className="newsText">Współpraca z nami, współpraca z siecią Pizzerii  <span style={{color: '#ff0000', fontWeight: 'bold'}}>Savona Pizza Club</span> to <strong>DOBRY WYBÓR!</strong></p>
        <p className="newsText">Zadzwoń porozmawiamy o Twoich planach - <strong>885 444 445</strong>.</p>
        <p className="newsText">Lub napisz do nas <Link className='newsLink' to='/formularz-kontaktowy'>kliknij</Link></p>
        <p className="newsText">Tutaj opis systemu <a className='newsLink' href='https://franchising.pl/franczyza/1374/savona-pizza-club/' target='_blank'>kliknij</a></p>
        <img src='http://savonapizza.pl/public/data/resource/upload/00002/1390/image/logo.png' alt="" />
        <p className="newsText"><strong>Nasze lokale w sieci franchisingu:</strong></p>
        <p className="newsText">Białystok:</p>
        <p className="newsText">Wysockiego 69</p>
        <p className="newsText">Pietkiewicza 10</p>
        <p className="newsText">Grajewo:</p>
        <p className="newsText">Ełcka 24</p>
        <p className="newsText"><strong>Lokale własność franczyzodawcy:</strong></p>
        <p className="newsText">Białystok:</p>
        <p className="newsText">Pogodna 11 f</p>
        <p className="newsText">Legionowa 9/1</p>
        <p className="newsText">Rynek Kościuszki 8</p>
        <br/>
        <p className="newsText">Savona w mediach:</p>
        <img src="http://savonapizza.pl/public/data/resource/upload/00002/1390/image/savona-najlepsza.png" alt="" />
        <img className='franchiseSecondPhoto' src="http://savonapizza.pl/public/data/resource/upload/00002/1390/image/03723809b.jpg" alt="" />
    </div>
  )
  if(pathname === '/news/2') return (
    <div className="content">
        <Path urlsAmount={1} url1='FanPage'/>
        <h1 className="itemTitle newsTitle">FanPage</h1>
        <p className="newsDate">17-04-2014</p>
        <p className="newsText">Zapraszamy na nasz FB i oczywiście do polubienia strony ;) W tym miejscu dużo się dzieje ! <a className='newsLink' href='https://www.facebook.com/savona.pizzaclub' target='_blank'>Kliknij</a></p>
        <img className='fanPagePhoto' src="http://savonapizza.pl/public/data/resource/upload/00002/1443//image/fb.png" alt="" />
    </div>
  )
  if(pathname === '/news/3') return (
    <div className="content">
        <Path urlsAmount={1} url1='20 Urodziny Savony'/>
        <h1 className="itemTitle newsTitle">20 Urodziny Savony</h1>
        <p className="newsDate">19-10-2014</p>
        <p className="newsText">20 pażdziernika obchodzimy 20 urodziny! Mamy dla was promocje w tym dniu wszystkie pizzr maxi za 20 zł !Promocja w lokalach</p>
    </div>
  )
  if(pathname === '/news/4') return (
    <div className="content">
        <Path urlsAmount={1} url1='Uwaga dodatkowa forma płatności'/>
        <h1 className="itemTitle newsTitle">Uwaga dodatkowa forma płatności</h1>
        <p className="newsDate">22-07-2020</p>
        <p className="newsText">Teraz zamawiając danie na telefon możecie zapłacić kartą kredytową przy odbiorze zamówienia. Nasz dostawca przyjedzie z terminalem! Prosimy poinformować o takiej formie płatności przy składaniu zamówienia.</p>
    </div>
  )
  
}

export default News

