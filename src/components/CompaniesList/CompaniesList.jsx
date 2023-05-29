import { Form, Input, Select } from 'antd';
import { GeneralList } from '../GeneralList';
import './CompaniesList.scss';

export const CompaniesList = () => {

    const convenioValues = {
        1: 'Convenio 1',
        2: 'Convenio 2',
        3: 'Convenio 3',
    }

    const list = [
        {
            title: 'Title 1',
            email: 'email@gmail.com',
            convenio: 'Convenio 1',
        },
        {
            title: 'Title 2',
            email: 'email@gmail.com',
            convenio: 'Convenio 2',
        },
        {
            title: 'Title 3',
            email: 'email@gmail.com',
            convenio: 'Convenio 3',
        },
        {
            title: 'Title 4',
            email: 'email@gmail.com',
            convenio: 'Convenio 1',
        },
        {
            title: 'Title 5',
            email: 'email@gmail.com',
            convenio: 'Convenio 2',
        },
        {
            title: 'Title 6',
            email: 'email@gmail.com',
            convenio: 'Convenio 3',
        },
        {
            title: 'Title 7',
            email: 'email@gmail.com',
            convenio: 'Convenio 1',
        },
        {
            title: 'Title 8',
            email: 'email@gmail.com',
            convenio: 'Convenio 2',
        },
        {
            title: 'Title 9',
            email: 'email@gmail.com',
            convenio: 'Convenio 3',
        },
    ];
  return (
    <div className='comp-content'>
        <div className='comp-title'>
            <h2>Busqueda Avanzada</h2>
        </div>
        <div className='comp-search'>
            <Form.Item
                className="form-item"
                name="names"
                label="Comapany Name"
            >
                <Input
                className='form-input'
                name="names"
                placeholder="Names"
                autoComplete="off"
                />
            </Form.Item>
            <Form.Item
                className="form-item"
                name="gender"
                label="Convenio"
            >
                <Select
                className='form-input'
                name="gender"
                placeholder="SENA"
                >
                {Object.entries(convenioValues).map(([key, value]) => (
                    <Select.Option key={key} value={value}>
                    {value}
                    </Select.Option>
                ))}
                </Select>
            </Form.Item>
        </div> 
        <div className='comp-list'>
            <GeneralList list={list}/>
        </div>
    </div>
  )
}
