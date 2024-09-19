import React,{useEffect} from 'react'
import './main.css'
import { HiOutlineClipboardCheck, HiOutlineLocationMarker } from 'react-icons/hi'
import img from "../../assets/img1.jpg";
import img2 from "../../assets/img2.jpg";
import img3 from "../../assets/img3.jpg";
import img4 from "../../assets/img4.jpg";
import img5 from "../../assets/img5.jpg";
import img6 from "../../assets/img6.jpg";
import img7 from "../../assets/img7.jpg";
import img8 from "../../assets/img8.jpg";
import img9 from "../../assets/img9.jpg";
import Aos from 'aos'
import 'aos/dist/aos.css'

const Data = [
  {
    id:1,
    imgSrc: img,
    destTitle: 'Bora Bora',
    location: 'New Zealand',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:'The epitome of romance, Bora Bora is one of the best travel destinations in the world. this place is known for its luxurious stays and adventuruous activities.'
  },
  {
    id:2,
    imgSrc: img2,
    destTitle: 'Machu Picchu',
    location: 'Peru',
    grade: 'CULTURAL RELAX',
    fees: '$600',
    description:'Huayna Picchu is a mountain in peru, rising over machu picchu, the so-called lost city of incas.this place is popular among tourists as the sunrise from the sun gate is simply spectacular.'
  },

  {
    id:3,
    imgSrc: img3,
    destTitle: 'Great Barrier Reef',
    location: 'Australia',
    grade: 'CULTURAL RELAX',
    fees: '$700',
    description:"One of the most remarkable Australian natural gifts is the great barrier reef. the hallmark of this place is 'lavish' and 'beauty'. Always interesting to be in this place."
  },

  {
    id:4,
    imgSrc: img4,
    destTitle: 'Cappadocia',
    location: 'Turkey',
    grade: 'CULTURAL RELAX',
    fees: '$800',
    description:"According to the world tourism ranking, 45 million people visit turkey each year, and from that about 2 million come to visit cappadocia. this place is known for its luxurious stays and adventurous activities."
  },

  {
    id:5,
    imgSrc: img5,
    destTitle: 'Guanajuato',
    location: 'Mexico',
    grade: 'CULTURAL RELAX',
    fees: '$1100',
    description:"A city in central mexico, guanajuato is known for its history of silver mining and colonial architecture. the houses in the city are very attractively painted with the most bright colors available. always welcome."
  },

  {
    id:6,
    imgSrc: img6,
    destTitle: 'Cinque Terre',
    location: 'Italy',
    grade: 'CULTURAL RELAX',
    fees: '$840',
    description:"The vibrant hues of the houses are its benchmark and explain the beauty of this place. also,if you are a foodie and love seafood, you will be exhilarated with the choice you are about to get here. Happy exploring great food!. "
  },

  {
    id:7,
    imgSrc: img7,
    destTitle: 'Angkor Wat',
    location: 'Cambodia',
    grade: 'CULTURAL RELAX',
    fees: '$790',
    description:"Angkot wat represents the entire range of khmer art from the 9th to the 15th century. this temple is considered the heart and soul of cambodia.This place is known for its luxurious stays and adventurous activities."
  },

  {
    id:8,
    imgSrc: img8,
    destTitle: 'Taj Mahal',
    location: 'India',
    grade: 'CULTURAL RELAX',
    fees: '$900',
    description:"An immense mausoleum of white marble, built-in agra by mughal emperor shah jahan in memory of his wife mumtaz, the monument is breathtakingly beautiful. this place is known for its luxurious stays and adventurous activities."
  },

  {
    id:9,
    imgSrc: img9,
    destTitle: 'Bali Island',
    location: 'Indonesia',
    grade: 'CULTURAL RELAX',
    fees: '$500',
    description:"Bali is a indonesian island and one of the best holiday destinations in the indonesian archipelago. Bali is known for its volcanic mountains, history, art & culture, Food , temples and beautiful sandy beaches."
  },

]

const Main = () => {

  useEffect(()=>{
    Aos.init({duration: 2000})
}, [])



  return (
    <>
      <section className='main container section'>

        <div className="secTitle">
          <h3 data-aos="fade-right" className="title">
            Most Visited destinations
          </h3>
        </div>

        <div className="secContent grid">
            {Data.map(({id, imgSrc, destTitle, location, grade, fees, description})=> {
                return(
                  <div key={id} data-aos="fade-up" className="singleDestination">
                      <div className="imageDiv">
                        <img src={imgSrc} alt={destTitle} />
                      </div>

                      <div className="cardInfo">
                        <h4 className="destTitle">{destTitle}</h4>
                        <span className='continent flex'>
                          <HiOutlineLocationMarker  className='icon'/>
                          <span className='name'>
                            {location}
                          </span>
                        </span>

                        <div className="fees flex">
                          <div className="grade">
                            <span>{grade}<small>+1</small></span>
                          </div>
                          <div className="price">
                              <h5>{fees}</h5>
                          </div>
                        </div>

                        <div className="desc">
                          <p>{description}</p>
                        </div>

                        <button className="btn flex">
                            DETAILS <HiOutlineClipboardCheck className='icon' />
                        </button>

                      </div>
                  </div>
                )
            })}
        </div>

      </section>
    </>
  )
}

export default Main
