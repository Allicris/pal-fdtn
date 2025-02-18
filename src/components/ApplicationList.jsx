import React from 'react';
import '../styles/ApplicationList.css';
//YOU ONLY NEED TO CHANGE THE NAMES .. NOT THE PATH.
import spectrum from '../../public/applications/spectrum.pdf';
import kessler from '../../public/applications/kessler.pdf';
import ApplicationCard from './ApplicationCard';
import { handlePrint } from '../utilities/utils';

const ApplicationsList = () => {
  const applications = [
    {
      name: "Spectrum for Living Development, Inc.",
      website: "https://spectrumforliving.org/",
      fileUrl: spectrum, // this needs to match the import name
    },
    {
      name: "Kessler Foundation",
      website: "https://kesslerfoundation.org",
      fileUrl: kessler,
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