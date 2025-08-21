import React from 'react';
import '../styles/ApplicationList.css';
//YOU ONLY NEED TO CHANGE THE NAMES .. NOT THE PATH.
import bergen from '../../public/applications/bergen.pdf';
import morristown from '../../public/applications/morristown.pdf';
import reed from '../../public/applications/reed.pdf';
import ApplicationCard from './ApplicationCard';
import { handlePrint } from '../utilities/utils';

const ApplicationsList = () => {
  const applications = [
    {
      name: "Bergen Volunteers",
      website: "https://bergenvolunteers.org/",
      fileUrl: bergen, // this needs to match the import name
    },
    {
      name: "Foundation for Morristown",
      website: "https://f4mmc.org/",
      fileUrl: morristown,
    },
    {
      name: "REED Foundation",
      website: "https://reedautismservices.org/",
      fileUrl: reed,
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