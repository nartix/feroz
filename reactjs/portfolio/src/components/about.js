import { useEffect } from 'react';

import { useGlobalState } from './../context/global-context-use.js';

const About = () => {
  const [templateGlobals] = useGlobalState();
  useEffect(() => {
    document.title = templateGlobals.getPageTitle() + 'About';
  }, [templateGlobals]);

  return (
    <div>
      <h2>
        <b>About</b>
      </h2>
      <br />
      <p className="fs-5">
        {/* <img
          src="/assets/images/profile-picture.png"
          className="img-fluid w-50 h-50 rounded-circle float-end"
          alt="Feroz Faiz"
        /> */}
        Hello, my name is Feroz Faiz. I have always been drawn to the world of
        computer programming and technology, and have spent many hours learning
        and experimenting on my own. After completing adult school, I decided to
        pursue my interests further by enrolling in the Computer Programming
        program at Seneca College. I am proud to have graduated with honors and
        am excited to continue pursuing my dream of becoming a professional
        computer programmer. In my spare time, I enjoy staying up to date with
        the latest developments in the field and working on personal programming
        projects
      </p>
    </div>
  );
};

export default About;
