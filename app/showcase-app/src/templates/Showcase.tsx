import Link from 'next/link';
import { Button } from '../button/Button';
import { ShowcaseSection } from '../feature/ShowcaseSection';
import { CONSTANTS, SUBMISSIONS } from '../utils/Constants';

const Showcase = () => {
  return (
    <>
      {
        CONSTANTS.folders.map(category => {
          let submissions;
          switch (category){
            case CONSTANTS.folders[0]:
              submissions = SUBMISSIONS.Background;
              break;
            case CONSTANTS.folders[1]:
              submissions = SUBMISSIONS.Body;
              break;
            case CONSTANTS.folders[2]:
              submissions = SUBMISSIONS.Accessory;
              break;
            case CONSTANTS.folders[3]:
              submissions = SUBMISSIONS.WhatsPossible;
              break;
          }
          return (
            <div className='text-center'>
              <ShowcaseSection key={category} title={"Pixel Pooly: " + category +" Bounty"} description={"Submissions for the Pixel Pooly: " + category +" Bounty"} submissions={submissions} category={category} />
            
              <Link href="https://snapshot.org/#/friendsofpooly.eth" target={'_blank'}>
                <a>
                  <Button xl>Vote on Snapshot</Button>
                </a>
              </Link>
            </div>
          )
        }) 
      }
    </>
  );
};

export { Showcase };
