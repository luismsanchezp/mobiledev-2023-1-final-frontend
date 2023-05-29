import './Meetings.scss';
import { List } from 'antd';
const data = [
    {
        title: 'Meeting 1',
        person: 'Luis Sanchez',
        place: 'Room 1',
        time: '2 PM',
    },
    {
        title: 'Meeting 2',
        person: 'Mike',
        place: 'Room 1',
        time: '4 PM',
    },
    {
        title: 'Meeting 3',
        person: 'Carl',
        place: 'Room 1',
        time: '6 PM',
    },
  ];

export const Meetings = () => {
  return (
    <div className='meetings-card'>
    <List
      size="large"
      header={<h2>Meetings Today</h2>}
      bordered
      dataSource={data}
      renderItem={(item) => 
      <List.Item>
        <div className='meetings-card-item'>
            <h3>{item.title}</h3>
            <div>{item.person}</div>
            <div>{item.place}</div>
            <div>{item.time}</div>
        </div>
      </List.Item>
    }
    />
  </div>
  )
}
