import { Banner } from './Banner';
import { Footer } from './Footer';
import { Hero } from './Hero';
import { Showcase } from './Showcase';
import { Meta } from '../layout/Meta';
import { AppConfig } from '../utils/AppConfig';

const Base = () => {
  return (
    <div className="antialiased text-gray-600">
      <Meta title={AppConfig.title} description={AppConfig.description} />
      <Hero />
      <Showcase />
      <Footer />
    </div>
  );
};

export { Base };
