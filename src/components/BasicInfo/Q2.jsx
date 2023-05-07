
import { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FaUser, FaUsers } from 'react-icons/fa';
import { IconContext } from 'react-icons';
import AssessmentContext from '../../helpers/Contexts';
import { useContext } from 'react';
// import "bootstrap-icons/font/bootstrap-icons.css";

const Q2 = () => {
    const [myselfButton, setMyselfButton] = useState(false);
    const [someoneElseButton, setSomeoneElseButton] = useState(false);
    const { isValid, setIsValid } = useContext(AssessmentContext)
    const myselfButtonClick = () => {
        setMyselfButton(prevMyselfButton => !prevMyselfButton);
        setSomeoneElseButton(false); // reset the other button state
    }

    const someoneElseButtonClick = () => {
        setSomeoneElseButton(prevSomeoneElseButton => !prevSomeoneElseButton);
        setMyselfButton(false); // reset the other button state
    }

    useEffect(() => {
        if ((myselfButton && !someoneElseButton) || (!myselfButton && someoneElseButton)) {
            setIsValid(true);
        } else {
            setIsValid(false);
        }
    }, [myselfButton, someoneElseButton]);

    return (
      <div className="container d-flex justify-content-center">
        <div className="row">
          <div className="col-md-6">
            <div
              className="card card-square"
              style={{
                height: '200px',
                backgroundColor: myselfButton ? '#CBC3E3' : null,
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end">
                <IconContext.Provider
                  value={{ size: '2em', color: myselfButton ? '#000' : '#888' }}
                >
                  <div>
                    <button
                      className="btn btn-light btn-large"
                      onClick={myselfButtonClick}
                    >
                      <span>
                        <FaUser />
                      </span>{' '}
                      Myself
                    </button>
                  </div>
                </IconContext.Provider>
              </div>
            </div>
          </div>
          <div className="col-md-6">
            <div
              className="card card-square"
              style={{
                height: '200px',
                backgroundColor: someoneElseButton ? '#CBC3E3' : null,
              }}
            >
              <div className="card-body d-flex flex-column justify-content-end">
                <IconContext.Provider
                  value={{
                    size: '2em',
                    color: someoneElseButton ? '#000' : '#888',
                  }}
                >
                  <div>
                    <button
                      className="btn btn-light btn-large"
                      onClick={someoneElseButtonClick}
                    >
                      <span>
                        <FaUsers />
                      </span>{' '}
                      Someone Else
                    </button>
                  </div>
                </IconContext.Provider>
                {/* <button class="btn btn-light btn-large" onClick={someoneElseButtonClick}>
                {' '}
                Someone Else
              </button> */}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
};

export default Q2;