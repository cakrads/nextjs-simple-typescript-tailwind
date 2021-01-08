import { H1 } from '@components/atomic/Typograph';

const Welcome = (): JSX.Element => {
  return (
    <div>
      <H1>
        Welcome to
        <a className="hover:underline focus:underline active:underline text-blue-600" href="https://nextjs.org">Next.js!</a>
      </H1>

      <p className="leading-normal text-2xl">
        Get started by editing{' '}
        <code className="bg-gray-100 rounded p-3 text-lg">pages/index.js</code>
      </p>
    </div>
  );
};

export default Welcome;
