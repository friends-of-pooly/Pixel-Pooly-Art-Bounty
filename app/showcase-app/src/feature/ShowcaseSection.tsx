import className from 'classnames';
import { useRouter } from 'next/router';
import { Section } from '../layout/Section';
import { ArtistWork } from './ArtistWork';

type ShowcaseSectionProps = {
  title: string;
  description: string;
  submissions: any;
  category: string;
};

const ShowcaseSection = (props: ShowcaseSectionProps) => {
  const verticalFeatureClass = className(
    'mt-20',
    'flex',
    'flex-wrap',
    'flex-row',
    'items-center',
    'bg-red-200',
  );

  const router = useRouter();



  return (
    <Section
      title={props.title}
      description={props.description}
    >
      {Object.keys(props.submissions).map((artistName: string) => {
        return <ArtistWork key={artistName+props.category} name={artistName} images={props.submissions[artistName]} category={props.category}/>
      })}
    </Section>
  );
};

export { ShowcaseSection };
