import styled from 'styled-components';

const Heading = styled.span`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 65px;
  font-size: 20px;
`;

const Nav = styled.span`
  display: flex;
  align-items: center;
  p {
    padding-left: 10px;
  }
`;

const Button = styled.button`
  border: none;
  background: none;
  font-size: 20px;
  letter-spacing: 1px;
`;

const Header = () => {
  return (
    <Heading>
      <Nav>
        <Button>
          <i className="fa fa-bars"></i>
          {/* <span>ConnectedSpine</span> */}
        </Button>
        <p>ConnectedSpine</p>
      </Nav>
      <Button>
        <i class="fa fa-refresh" aria-hidden="true"></i>
      </Button>
    </Heading>
  );
};

export default Header;
