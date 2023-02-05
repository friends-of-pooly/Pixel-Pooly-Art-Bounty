import className from 'classnames';
import { useRouter } from 'next/router';
import Image from 'next/image'
import Link from 'next/link';

type SubmissionObj = {
  image: string;
  id: string;
}

type ArtistWorkProps = {
  name: string;
  images: SubmissionObj[];
  category: string;
};

const ArtistWork = (props: ArtistWorkProps) => {

  const router = useRouter();

  return (
    <div className={"w-full text-center flex flex-col pt-16"}>
      <div>
      <h3 className="text-3xl text-gray-900 font-extrabold">{props.name}</h3>
      </div>
      

      <div className="flex flex-row gap-4 gap-y-6 py-4 flex-wrap justify-center">
        {
          props.images.map(image => {
            if (props.name == 'Airtune'){
              return (
                <div className='' key={props.name+props.category+image}>
                  <p className='text-xl text-indigo-700 pb-2'>ID: <span className='font-bold'>{image.id}</span></p>
                  <Link href="https://github.com/Airtune/pixel_pooly_assets" target={'_blank'}>
                    <a>https://github.com/Airtune/pixel_pooly_assets</a>
                  </Link>
                  <p className='text-base text-indigo-700 pt-2'>Name: <span className='font-semibold'>Pixel Pooly Redesign</span></p>
                </div>
              )
            }else if (props.name == 'Designatum'){
              const submissionImg = require('../../assets/' + props.category +'/'+ props.name +'/'+image.image);
              return (
                <div className='' key={image.id}>
                  <p className='text-xl text-indigo-700'>ID: <span className='font-bold'>{image.id}</span></p>
                  <Image src={submissionImg} layout="intrinsic" width={400} height={845} loading="lazy"/>
                  <p className='text-base text-indigo-700'>Name: <span className='font-semibold'>{image.image.split('.')[0]}</span></p>
                </div>
              )
            }else {
              const submissionImg = require('../../assets/' + props.category +'/'+ props.name +'/'+image.image);
              return (
                <div className='' key={image.id}>
                  <p className='text-xl text-indigo-700'>ID: <span className='font-bold'>{image.id}</span></p>
                  <Image src={submissionImg} layout="intrinsic" width={360} height={360} loading="lazy"/>
                  <p className='text-base text-indigo-700'>Name: <span className='font-semibold'>{image.image.split('.')[0]}</span></p>
                </div>
              )
            }
          })
        }
        
      </div>
    </div>
  );
};

export { ArtistWork };
