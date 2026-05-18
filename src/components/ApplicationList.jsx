import React from 'react';
import '../styles/ApplicationList.css';
//YOU ONLY NEED TO CHANGE THE NAMES .. NOT THE PATH.
import arcmorris2026 from '../../public/applications/arcmorris2026.pdf';
import buehler2026 from '../../public/applications/buehler2026.pdf';
import specialized2026 from '../../public/applications/specialized2026.pdf';
import ApplicationCard from './ApplicationCard';
import { handlePrint } from '../utilities/utils';

const ApplicationsList = () => {
  const applications = [
    {
      name: "The Arc Morris County",
      website: "https://arcmorris.org/",
      fileUrl: arcmorris2026, // this needs to match the import name
    },
    {
      name: "Buehler Challenger",
      website: "https://bcsc.org/",
      fileUrl: buehler2026,
    },
    {
      name: "Bergen Performing Arts Center",
      website: "https://bergenpac.org/",
      fileUrl: bergenpac2026,
    },
    {
      name: "Children's Specialized",
      website: "https://give2csh.org/",
      fileUrl: specialized2026,
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