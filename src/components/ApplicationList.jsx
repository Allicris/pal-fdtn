import React from 'react';
import '../styles/ApplicationList.css';
//YOU ONLY NEED TO CHANGE THE NAMES .. NOT THE PATH.
import childrenaid2026 from '../../public/applications/childrenaid2026.pdf';
import englewood2026 from '../../public/applications/englewood2026.pdf';
import alpine2026 from '../../public/applications/alpine2026.pdf';
import summit2026 from '../../public/applications/summit2026.pdf';
import ApplicationCard from './ApplicationCard';
import { handlePrint } from '../utilities/utils';

const ApplicationsList = () => {
  const applications = [
    {
      name: "Children's Aid",
      website: "https://cafsnj.org/",
      fileUrl: childrenaid2026, // this needs to match the import name
    },
    {
      name: "Englewood Health",
      website: "https://englewoodhealthfoundation.org/",
      fileUrl: englewood2026,
    },
    {
      name: "Alpine Learning Group",
      website: "https://alpinelearninggroup.org/",
      fileUrl: alpine2026,
    },
    {
      name: "Summit Spech",
      website: "https://summitspeech.org/",
      fileUrl: summit2026, // this needs to match the import name
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