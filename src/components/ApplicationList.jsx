import React from 'react';
import '../styles/ApplicationList.css';
//YOU ONLY NEED TO CHANGE THE NAMES .. NOT THE PATH.
import bergen2026 from '../../public/applications/bergen2026.pdf';
import summit from '../../public/applications/summit.pdf';
import ApplicationCard from './ApplicationCard';
import { handlePrint } from '../utilities/utils';

const ApplicationsList = () => {
  const applications = [
    {
      name: "Bergen Family Center",
      website: "https://bergenfamilycenter.org/",
      fileUrl: bergen2026, // this needs to match the import name
    },
    {
      name: "Summit Speech School",
      website: "https://summitspeech.org/",
      fileUrl: summit,

    },
    // { COPY & PASTE THIS SECTION TO ADD ANOTHER APPLICATION, MAKE SURE IT'S INSIDE THE "]" BELOW
    //   name: "Kessler Foundation",
    //   website: "https://kesslerfoundation.org",
    //   fileUrl: kessler,
    // },
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