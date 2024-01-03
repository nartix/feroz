import React, { useEffect } from 'react';

import { useGlobalState } from '../context/global-context-use';

const CiCd = () => {
  const [templateGlobals] = useGlobalState();
  useEffect(() => {
    document.title = templateGlobals.getPageTitle() + 'CI/CD';
  }, [templateGlobals]);
  return (
    <div>
      <h3 className="text-center mb-3">
        <b>CI/CD Pipeline</b>
      </h3>
      <p className="text-justify fs-5 mb-3">
        This CI/CD pipeline represents a workflow for deploying a web
        application with high availability and scalability. User requests are
        received by a browser and then passed to an HAProxy load balancer, which
        distributes the traffic evenly among multiple instances of the
        application running in a self-hosted Kubernetes cluster. The application
        stores its data in a PostgreSQL cluster, ensuring reliable and efficient
        database management. The entire deployment process, including updates
        and scaling, is automated using GitHub Actions, which trigger whenever
        new changes are pushed to the code repository. Below is a diagram
        illustrating the CI/CD pipeline.
      </p>
      <img
        src="/assets/images/ci-cd.png"
        className="mx-auto d-block img-fluid mb-3"
      />
    </div>
  );
};

export default CiCd;
