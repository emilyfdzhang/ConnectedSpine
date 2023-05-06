// import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import Home from './pages/Home';
import BasicInfo from './components/BasicInfo';
import AssessmentContext from './helpers/Contexts';

const App = () => {
  const [AssessmentState, setAssessmentState] = useState("start")
  return (
    <AssessmentContext.Provider value={{ AssessmentState, setAssessmentState }}>
      {AssessmentState === "start" && <Home />}
      {AssessmentState === "basicinfo" && <BasicInfo />}
    </AssessmentContext.Provider >



    //   <Routes>
    //     <Route index element={<Home />}></Route>
    //     <Route path="zipcode" element={<ZipCode />}></Route>
    //     <Route path="termsagreement" element={<BasicInfo />}></Route>
    //     <Route path="IntroQ2" element={<IntroQ2 />}></Route>
    //     <Route path="IntroQ3" element={<IntroQ3 />}></Route>
    //   </Routes>
    //
  );

};

export default App;
