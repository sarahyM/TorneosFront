import TurboImage from '../img/LogoTurboBet.png'
import className from 'classnames';


function LogoImage({big,small}) {

    let classes = className("w-32 h-auto cursor-pointer",{
        "w-80 h-auto mb-10":big,
        "w-32 h-auto":small
    });

    const goHome = () => {
        window.location.href = "/";
    }

    return(
            <img onClick={goHome} className={classes} src={TurboImage} alt="Example"></img> 
        )
}

export default LogoImage;