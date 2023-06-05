import '../styles/home.css'// aca si va la ectencion porque es css
import Slider from 'react-slick'
import "slick-carousel/slick/slick.css"

const HomePage = (pops) =>{

    const settings={
        arrows: false,
        infinite: true,
        speed:500,
        autoplaySpeed:3000,
        fade:true,
        autoplay:true,
    }
    return(
        <div className="galeria">
            <Slider {...settings}>
            <img src="images/img01.jpg" alt=""/>
                <img src="images/img02.jpg" alt=""/>
                <img src="images/img03.jpg" alt=""/>
                <img src="images/img04.jpg" alt=""/>
                <img src="images/img05.jpg" alt=""/>
            </Slider>
        </div>
    )
}

export default HomePage