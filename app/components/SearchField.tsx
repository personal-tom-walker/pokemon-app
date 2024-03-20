'use client';

const SearchField = ({
  setState,
}: {
  setState: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <div className='w-full max-w-80 rounded-lg border-2 border-white'>
      <input
        type='search'
        name='search-field'
        id='search-field'
        className='w-full text-center py-2 px-6 rounded-md bg-yellow text-dark text-lg border-none'
        onChange={(e) => setState(e.target.value)}
        placeholder='search by name'
      />
    </div>
  );
};

export default SearchField;
