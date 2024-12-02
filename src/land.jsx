import { useLocation } from 'react-router-dom'
import Head from './components/header';
import Body from './components/body';
import Tail from './components/tail';
const Land = () => {
    return (
        <div>
            <Head />
            <div className='box'>
                <Body one="23 deg" two="Chennai" color="blue" />
                <Body one="20 December" two="14:02:34" color="red" />
                <Body one="Built Using" two="React" color="orange" />
            </div>
            <div style={{ marginTop: "2%" }}>
                <Tail />
            </div>
        </div>




    )
}

export default Land;