import { Tabs } from 'antd';
import { 
    StudentsList,
    AdminCreateUser 
} from '../../../components';
import './Students.scss'

const onChange = (key) => {
  console.log(key);
};
const items = [
  {
    key: '1',
    label: `List`,
    children: <StudentsList />,
  },
  {
    key: '2',
    label: `Add`,
    children: <AdminCreateUser />,
  }
];

export const Students = () => {
  return (
    <div className='companies-bg'>
    <div className='companies-content'>
        <Tabs defaultActiveKey="1" items={items} onChange={onChange} />
    </div>
    </div>
  )
}
