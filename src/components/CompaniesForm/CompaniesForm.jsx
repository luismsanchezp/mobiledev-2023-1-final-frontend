import { Form, Input, Select, Card, Button } from 'antd';
import './CompaniesForm.scss';

export const CompaniesForm = () => {
  return (
    <div className='comp-content'>
        <div className='comp-title'>
            <h2>Agregar Empresa</h2>
        </div>
        <div className='comp-forms'>
            <Card
                title="Datos de la Empresa"
                className='comp-form-card'
                >
                <div className='comp-form-in'>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="NIT"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="87327824"
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="gender"
                        label="Nombre"
                    >
                        <Select
                        className='form-input'
                        name="gender"
                        placeholder="SIGMA"
                        >
                        {Object.entries([]).map(([key, value]) => (
                            <Select.Option key={key} value={value}>
                            {value}
                            </Select.Option>
                        ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="gender"
                        label="Correo Electronico"
                    >
                        <Select
                        className='form-input'
                        name="gender"
                        placeholder="@gmail.com"
                        >
                        {Object.entries([]).map(([key, value]) => (
                            <Select.Option key={key} value={value}>
                            {value}
                            </Select.Option>
                        ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="gender"
                        label="Telefono"
                    >
                        <Select
                        className='form-input'
                        name="gender"
                        placeholder="6037837"
                        >
                        {Object.entries([]).map(([key, value]) => (
                            <Select.Option key={key} value={value}>
                            {value}
                            </Select.Option>
                        ))}
                        </Select>
                    </Form.Item>
                </div>
            </Card>
            <Card
                title="Ubicacion de la Empresa"
                className='comp-form-card'
                >
                <div className='comp-form-in'>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Pais"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="Colombia"
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="gender"
                        label="Estado"
                    >
                        <Select
                        className='form-input'
                        name="gender"
                        placeholder="Caldas"
                        >
                        {Object.entries([]).map(([key, value]) => (
                            <Select.Option key={key} value={value}>
                            {value}
                            </Select.Option>
                        ))}
                        </Select>
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="gender"
                        label="Ciudad"
                    >
                        <Select
                        className='form-input'
                        name="gender"
                        placeholder="Manizales"
                        >
                        {Object.entries([]).map(([key, value]) => (
                            <Select.Option key={key} value={value}>
                            {value}
                            </Select.Option>
                        ))}
                        </Select>
                    </Form.Item>
                </div>
            </Card>
            <Card
                title="Representante Legal"
                className='comp-form-card'
                >
                <div className='comp-form-in'>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Primer Nombre"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="Nombres" 
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Segundo Nombre"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="Nombres" 
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Primer Apellido"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="Apellidos" 
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Segundo Apellido"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="Apellidos" 
                        autoComplete="off"
                        />
                    </Form.Item>
                </div>
                <div className='comp-form-in'>
                <Form.Item
                        className="form-item"
                        name="names"
                        label="Cedula de Ciudadania"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="37378232" 
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Numero de Telefono"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="42742724" 
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Correo Electronico"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="@gmail.com" 
                        autoComplete="off"
                        />
                    </Form.Item>
                    <Form.Item
                        className="form-item"
                        name="names"
                        label="Cargo"
                    >
                        <Input
                        className='form-input'
                        name="names"
                        placeholder="Cargo" 
                        autoComplete="off"
                        />
                    </Form.Item>
                </div>
            </Card>
        </div>
        <div className='comp-buttons'>
            <Button
                className='comp-button'
                type="primary"
                htmlType="submit"
                >
                Crear Empresa
            </Button>
        </div>
    </div>
  )
}
