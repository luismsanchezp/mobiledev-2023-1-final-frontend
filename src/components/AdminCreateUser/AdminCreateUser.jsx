import React, { useState, useEffect } from 'react';
import { Card, Form, Input, Checkbox, Button, message, DatePicker, Select } from 'antd';
import { useFormik } from 'formik';
import './AdminCreateUser.scss';
import {
    validationSchema,
    initialValues,
    govIdTypes,
    genders
  } from './Validation';
import {
    signUp,
    logInNewAccount
} from '../../utils/jwt';
import { getCities, getStates, getCitiesByState } from '../../utils/select';
import { createProfileNewUser } from '../../utils/profile';

const genderValues = Object.values(genders);
const govIdTypeValues = Object.values(govIdTypes);

export const AdminCreateUser = () => {
    const [error, setError] = useState(null);

    const [allCities, setAllCities] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    const [state, setState] = useState(null);
    const [city, setCity] = useState(null);

    useEffect(() => {
        const fetchStates = async () => {
          const response = await getStates();
          setStates(response);
        }
        fetchStates();
      }, []);
    
      useEffect(() => {
        const fetchCities = async () => {
          const response = await getCities();
          setAllCities(response);
        }
        fetchCities();
      }, []);
    
      const handleStateChange = (value) => {
        setState(value);
        //Retrieve state object from the states array given the state name
        const stateObj = states.find(state => state.name === value);
        //Retrieve cities from the state object
        if (stateObj) {
          const cities = getCitiesByState(allCities, stateObj.code);
          setCities(cities);
        } else {
          setCities([]);
        }
      }

    const formik = useFormik({
        initialValues: initialValues,
        validationSchema: validationSchema(),
        onSubmit: async (formData) => {
          try {
            setError('');
            formData.birthdate = formData.birthdate.toISOString().split("T")[0];
            const response = await signUp(formData);
            const tok = await logInNewAccount(formData);
            const res = await createProfileNewUser(formData);
            message.success('User created!');
          } catch (error) {
            console.log("ERROR: ", error);
            message.error("Cannot create.")
          }
        },
      });
  return (
    <div className='comp-content'>
        <div className='comp-title'>
            <h2>Agregar Empresa</h2>
        </div>
        <div className='comp-forms'>
            <Card
                title="Datos del nuevo usuario"
                className='comp-form-card'
                >
                <Form 
                    className="register-form" 
                    onFinish={formik.handleSubmit}
                    labelCol={{
                    span: 12,
                    }}
                    wrapperCol={{
                    span: 16,
                    }}
                    style={{
                    maxWidth: 1000,
                    }}
                >
                    <div className='comp-form-in'>
                        <Form.Item
                            className="form-item"
                            name="names"
                            label="Names"
                            validateStatus={formik.touched.names && formik.errors.names ? 'error' : ''}
                            help={formik.errors.names}
                        >
                            <Input
                            className='form-input'
                            name="names"
                            placeholder="Names"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.names}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="lastnames"
                            label="Last Names"
                            validateStatus={formik.touched.lastnames && formik.errors.lastnames ? 'error' : ''}
                            help={formik.errors.lastnames}
                        >
                            <Input
                            className='form-input'
                            name="lastnames"
                            placeholder="Last Names"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.lastnames}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="email"
                            label="Email"
                            validateStatus={formik.touched.email && formik.errors.email ? 'error' : ''}
                            help={formik.errors.email}
                        >
                            <Input
                            className='form-input'
                            name="email"
                            placeholder="@autonoma.edu.co"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.email}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="phoneNumber"
                            label="Phone Number"
                            validateStatus={formik.touched.phoneNumber && formik.errors.phoneNumber ? 'error' : ''}
                            help={formik.errors.phoneNumber}
                        >
                            <Input
                            className='form-input'
                            name="phoneNumber"
                            placeholder="Phone Number"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.phoneNumber}
                            />
                        </Form.Item>
                    </div>
                    <div className='comp-form-in'>
                        <Form.Item
                            className="form-item"
                            name="gender"
                            label="Gender"
                            validateStatus={formik.touched.gender && formik.errors.gender ? 'error' : ''}
                            help={formik.errors.gender}
                        >
                            <Select
                            className='form-input'
                            name="gender"
                            placeholder="Gender"
                            onBlur={formik.handleBlur}
                            onChange={(value) => formik.setFieldValue('gender', value)}
                            value={formik.values.gender}
                            >
                            {Object.entries(genderValues).map(([key, value]) => (
                                <Select.Option key={key} value={value}>
                                {value}
                                </Select.Option>
                            ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="birthdate"
                            label="Birthdate"
                            validateStatus={formik.touched.birthdate && formik.errors.birthdate ? 'error' : ''}
                            help={formik.errors.birthdate}
                        >
                            <DatePicker
                            className='form-input'
                            name="birthdate"
                            placeholder="Birthdate"
                            onBlur={formik.handleBlur}
                            onChange={(value) => formik.setFieldValue('birthdate', value)}
                            value={formik.values.birthdate}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="govIdType"
                            label="Government ID Type"
                            validateStatus={formik.touched.govIdType && formik.errors.govIdType ? 'error' : ''}
                            help={formik.errors.govIdType}
                        >
                            <Select
                            className='form-input'
                            name="govIdType"
                            placeholder="Government ID Type"
                            onBlur={formik.handleBlur}
                            onChange={(value) => formik.setFieldValue('govIdType', value)}
                            value={formik.values.govIdType}
                            >
                            {Object.entries(govIdTypeValues).map(([key, value]) => (
                                <Select.Option key={key} value={value}>
                                {value}
                                </Select.Option>
                            ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="govId"
                            label="Government ID"
                            validateStatus={formik.touched.govId && formik.errors.govId ? 'error' : ''}
                            help={formik.errors.govId}
                        >
                            <Input
                            className='form-input'
                            name="govId"
                            placeholder="Government ID"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.govId}
                            />
                        </Form.Item>
                    </div>
                    <div className='comp-form-in'>
                        <Form.Item
                            className="form-item"
                            name="state"
                            label="State"
                            validateStatus={formik.touched.state && formik.errors.state ? 'error' : ''}
                            help={formik.errors.state}
                        >
                            <Select
                            className='form-input'
                            name="state"
                            placeholder="State"
                            onBlur={formik.handleBlur}
                            onChange={(value) => {
                                formik.setFieldValue('state', value)
                                handleStateChange(value)
                                }
                            }
                            value={formik.values.state}
                            >
                            {states.map((st) => (
                            <Select.Option key={st.id} value={st.name}>
                                {st.name}
                            </Select.Option>
                            ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="city"
                            label="City"
                            validateStatus={formik.touched.city && formik.errors.city ? 'error' : ''}
                            help={formik.errors.city}
                        >
                            <Select
                            className='form-input'
                            name="city"
                            placeholder="City"
                            onBlur={formik.handleBlur}
                            onChange={(value) => formik.setFieldValue('city', value) }
                            value={formik.values.city}
                            >
                            {cities.map((st) => (
                            <Select.Option key={st.id} value={st.name}>
                                {st.name}
                            </Select.Option>
                            ))}
                            </Select>
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="password"
                            label="Password"
                            validateStatus={formik.errors.password ? 'error' : ''}
                            help={formik.errors.password}
                        >
                            <Input.Password
                            className='form-input'
                            name="password"
                            placeholder="Password"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.password}
                            />
                        </Form.Item>
                        <Form.Item
                            className="form-item"
                            name="passwordConfirmation"
                            label="Repeat Password"
                            validateStatus={formik.errors.passwordConfirmation ? 'error' : ''}
                            help={formik.errors.passwordConfirmation}
                        >
                            <Input.Password
                            className='form-input'
                            name="passwordConfirmation"
                            placeholder="Repeat Password"
                            autoComplete="off"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            value={formik.values.passwordConfirmation}
                            />
                        </Form.Item>
                    </div>
                    <Form.Item
                        className="form-item-one">
                        <Button
                        type="primary"
                        htmlType="submit"
                        loading={formik.isSubmitting}
                        block
                        >
                        Sign Up
                        </Button>
                    </Form.Item>
                    {error && <p className="register-form__error">{error}</p>}
                </Form>
            </Card>
        </div>
    </div>
  )
}
