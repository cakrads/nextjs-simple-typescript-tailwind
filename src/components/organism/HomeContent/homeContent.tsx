import Card from '@components/molecules/Card';

const HomeContent = ({ content }): JSX.Element => {
  return (
    <div className="flex items-center justify-center flex-wrap lg:max-w-screen-md md:w-full sm:w-full mt-12">
      {content.map((item, index)=> (<Card key={index} {...item} />))}
    </div>
  );
};

export default HomeContent;
