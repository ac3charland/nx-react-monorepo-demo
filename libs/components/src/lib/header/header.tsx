import { capitalizeFirstLetter } from '@utils';

export function Header() {
  return (
    <div className="flex flex-col justify-center items-center">
      <h1 className="bg-indigo-500 text-red-300 w-96 rounded p-4 mt-4 shadow-md shadow-neutral-400">
        {capitalizeFirstLetter('welcome to Nx!')}
      </h1>
    </div>
  );
}
