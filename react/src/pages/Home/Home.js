import logo from './icons/home.png';
import './Home.scss';

export default function Home(){
 return(
    <div className='home'>
        <img src={logo} className="logo"/>
        <div className='title'>ANABADA</div>
    </div>
 )
}