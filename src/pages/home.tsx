import MainLayout from '@components/template/MainLayout';
import Welcome from '@components/organism/Welcome';
import HomeContent from '@components/organism/HomeContent';
import { getHomeContent } from '@api/home-content';
import { generateMeta } from '@helpers/index';

const Home = (props: any): JSX.Element => {
  const { content } = props.data;

  return (
    <MainLayout {...props}>
      <main className="flex flex-col justify-center items-center md:py-20">
        <Welcome />
        <HomeContent content={content}/>
      </main>
    </MainLayout>
  );
};

Home.getInitialProps = async () => {
  const metaSEO = generateMeta({});
  const content: any = await getHomeContent();

  return {
    data: {
      content,
    },
    metaSEO,
  };
};
export default Home;
