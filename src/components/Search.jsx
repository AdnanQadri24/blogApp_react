import Icon from '@mdi/react';
import { mdiMagnify } from '@mdi/js';

const Search = () => {
  return (
    <div className='flex items-center gap-2 rounded-full bg-gray-100 p-1'>
        <Icon path={mdiMagnify} size="20px" color="gray" />
        <input type="text" placeholder='search a post...' className='w-full bg-transparent text-sm outline-none'/>
    </div>
  )
}

export default Search