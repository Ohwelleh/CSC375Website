import { AiFillHome } from 'react-icons/ai';
import { BsPeopleFill } from 'react-icons/bs';
import { IoDocumentsSharp } from 'react-icons/io5';
import { MdEmail } from 'react-icons/md';

const MenuItems = [
  {
    Name: 'Members',
    Icon: <BsPeopleFill />,
  },
  {
    Name: 'Documents',
    Icon: <IoDocumentsSharp />,
  },
  {
    Name: 'Contact',
    Icon: <MdEmail />,
  }
]

export { MenuItems }