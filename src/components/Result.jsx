
import Header from './Header';
import PhysicalTherapist from './result/PhysicalTherapist';
import { Background, Content } from '../styles';

const Result = () => {
    return (
        <Background image="../../results.png">
            <Header />
            <Content>
                <PhysicalTherapist />
            </Content>
        </Background>
    )

}

export default Result;

