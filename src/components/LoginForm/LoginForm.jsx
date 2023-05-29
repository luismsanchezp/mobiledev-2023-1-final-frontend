import React, { useState } from 'react';
import { Form, Input, Checkbox, Button, message } from 'antd';
import { useFormik } from 'formik';
import {
  validationSchema,
  initialValues,
} from './Validation';
import {
  logIn
} from '../../utils/jwt';
import './LoginForm.scss';

export const LoginForm = () => {
  const [error, setError] = useState(null);

  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema(),
    onSubmit: async (formData) => {
      try {
        setError('');
        const response = await logIn(formData);
        message.success('Login successful!');
      } catch (error) {
        console.log(error);
        if (error.toString() === 'Error: not_active') {
          message.error("Usuario no activo.")
        } else {
          message.error("Credenciales incorrectas.")
        }
      }
    },
  });

  return (
    <Form 
    className="login-form" 
    onFinish={formik.handleSubmit}
    labelCol={{
      span: 8,
    }}
    wrapperCol={{
      span: 16,
    }}
    style={{
      maxWidth: 600,
    }}>
      <Form.Item
        className="form-item"
        name="email"
        label="Email"
        validateStatus={formik.errors.email ? 'error' : ''}
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
        className='form-item-three'
      >
        <Button
          type="primary"
          htmlType="submit"
          loading={formik.isSubmitting}
          block
        >
          Log In
        </Button>
      </Form.Item>

      {error && <p className="register-form__error">{error}</p>}
    </Form>
  );
};
