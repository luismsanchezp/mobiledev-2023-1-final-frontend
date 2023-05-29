import { Avatar, List } from 'antd';
const data = [
  {
    title: 'Luis Sanchez',
    description: 'Created a new meeting',
  },
  {
    title: 'Isabel Sanchez',
    description: 'Created a new meeting',
  },
  {
    title: 'Sebastian Rodriguez',
    description: 'Created CV form',
  },
  {
    title: 'Camila Rodriguez',
    description: 'Submitted CV form',
  },
]

export const Activity = () => {
  return (
    <div className='meetings-card'>
    <List
    size="large"
    header={<h2>Last Activity</h2>}
        dataSource={data}
        bordered
        renderItem={(item, index) => (
          <List.Item>
            <List.Item.Meta
              avatar={
                <Avatar src={`https://xsgames.co/randomusers/avatar.php?g=pixel&key=${index}`} />
              }
              title={<a href="https://ant.design">{item.title}</a>}
              description={item.description}
            />
          </List.Item>
        )}
      />
  </div>
  );
};