import { BsPeopleFill } from 'react-icons/bs';
import { IoDocumentsSharp } from 'react-icons/io5';
import { FaHandshake } from 'react-icons/fa';
import { AiFillProject } from 'react-icons/ai'; 

const MenuItems = [
  {
    Name: 'Members',
    Icon: <BsPeopleFill />,
  },
  {
    Name: 'Project',
    Icon: <AiFillProject />,
  },
  {
    Name: 'Client',
    Icon: <FaHandshake />,
  },
  {
    Name: 'Documents',
    Icon: <IoDocumentsSharp />,
  },
]

export { MenuItems }