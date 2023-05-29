import { List } from 'antd';
import './GeneralList.scss'

export const GeneralList = ({list}) => {
  return (
    <div className='comp-list'>
    <List
      size="large"
      bordered
      dataSource={list}
      pagination={{
        onChange: (page) => {
          console.log(page);
        },
        pageSize: 3,
        align: 'center',
      }}
      renderItem={(item) => 
      <List.Item>
        <div className='meetings-card-item'>
            <h3>{item.title}</h3>
            <p>{item.email}</p>
            <p>{item.convenio}</p>
        </div>
      </List.Item>
    }
    />
  </div>
  );
}
