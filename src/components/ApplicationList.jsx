import React from 'react';
import '../styles/ApplicationList.css';
import alpine from '../../public/applications/alpine.pdf';
import kessler from '../../public/applications/kessler.pdf';
import ApplicationCard from './ApplicationCard';
import { handlePrint } from '../utilities/utils';

const ApplicationsList = () => {
  const applications = [
    {
      name: "Alpine Learning Groupppppp",
      website: "https://www.alpinelearninggroup.org",
      fileUrl: alpine,
    },
    {
      name: "Kessler Foundation",
      website: "https://kesslerfoundation.org",
      fileUrl: kessler,
    },
  ];

  return (
    <div className="applications">
      {applications.map((app, index) => (
        <ApplicationCard
        key={index}
        name={app.name}
        website={app.website}
        fileUrl={app.fileUrl}
        onPrint={handlePrint}
        />
      ))}
    </div>
  );
};

export default ApplicationsList;