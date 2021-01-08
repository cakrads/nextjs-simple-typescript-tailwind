import { H3, } from '@components/atomic/Typograph';
import { ICard } from '@interfaces/molecules';

const Card = (props: ICard): JSX.Element => {
  const { description, title, link } = props;
  return (
    <a
      className="lg:w-2/5 md:w-full m-4 p-6 text-left no-underline border border-gray-200 rounded-lg
            transition duration-150 ease-in
            hover:text-blue-600 hover:border-blue-600"
      href={link}
    >
      <H3>{title}</H3>
      <p className="m-0 text-xl leading-normal">
        {description}
      </p>
    </a>
  );
};

export default Card;
