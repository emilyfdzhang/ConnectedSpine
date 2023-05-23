import styled from 'styled-components';

const background = '#fefefe';
const border = '#888';

const Container = styled.div`
  display: ${(props) => (props.showModal ? 'block' : 'none')};
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  div {
    background-color: ${background};
    margin: 15% auto;
    padding: 0 20px 20px 20px;
    border: 1px solid ${border};
    width: 80%;
  }
`;

const Exit = styled.span`
  top: 0;
  margin-left: 98%;
  font-size: 25px;
  cursor: pointer;
`;

const Modal = ({ showModal, setShowModal, text }) => {
  return (
    <Container showModal={showModal}>
      <div>
        <Exit onClick={() => setShowModal(false)}>&times;</Exit>
        {text}
      </div>
    </Container>
  );
};
export default Modal;
