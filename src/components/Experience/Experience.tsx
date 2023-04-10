import React from 'react';
import Accordion from '../Accordion/Accordion';
import Block from '../Block/Block';
import Divider from '../Divider/Divider';
import Headers from '../Headers/Headers';
import { experiencesArray } from './ExperienceTypes';

const titleAccordion = (
  position: string,
  company: string,
  busy: string,
  workTime: string,
  workPlace: string
) => {
  return (
    <div>
      <Headers type={Headers.Type.H3}>{position}</Headers>
      <Headers type={Headers.Type.H4}>
        {company} · {busy}
      </Headers>
      <div>
        {workTime}
        <div>{workPlace}</div>
      </div>
      <Divider size={5} />
    </div>
  );
};

function Experience() {
  return (
    <>
      {experiencesArray.map(
        ({
          position,
          company,
          busy,
          workTime,
          workPlace,
          aboutCompany,
          responsibilities,
          achievements,
        }) => {
          return (
            <React.Fragment key={company}>
              <Accordion
                title={titleAccordion(
                  position,
                  company,
                  busy,
                  workTime,
                  workPlace
                )}
              >
                <div>{aboutCompany}</div>
                <div>
                  <Divider size={10} />
                  <Headers type={Headers.Type.H4}>
                    const useResponsibilities = () &rArr;
                  </Headers>
                  {responsibilities}
                </div>
                <div>
                  <Divider size={10} />

                  <Headers type={Headers.Type.H4}>
                    let useAchievements = () &rArr;
                  </Headers>

                  {achievements}
                </div>
              </Accordion>
              <Divider size={20} />
            </React.Fragment>
          );
        }
      )}
    </>
  );
}

export default Experience;
