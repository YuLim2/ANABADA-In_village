import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import mini from './img/mini.png'
import garden from './img/garden.png'
import './Garden.scss';

export default function Garden(){

    return (
        <div>
            <Header />
                <div>
                    <img src={mini} className='mini'/>
                    <div className='desc'>어서오세요. <br />
                        <div className='name'>어쩌구</div>님의 정원입니다. 🌱</div>
                </div>
                <img src={garden} className="garden" />
                <input type="text" value="소개하는 말을 적어주세요 🙇" className='text'></input>
            <Footer />
        </div>
    )
}