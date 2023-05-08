
import Header from './Header';
import { Background, Content } from '../styles';
import PhysicalTherapist from './result/PhysicalTherapist';

const Result = () => {
    return (
        <Background image="../../dist/Questions.png">
            <Header />
            <Content>
                <PhysicalTherapist />
            </Content>
        </Background>
    )

}

export default Result;

