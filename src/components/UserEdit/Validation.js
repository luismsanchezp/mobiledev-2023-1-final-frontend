import * as Yup from 'yup';

export const govIdTypes = {
    cc: "C.C.",
    ti: "T.I.",
    ce: "C.E.",
    pa: "Pasaporte",
}

export const genders = {
    m: "Masculino",
    f: "Femenino",
    o: "Otro",
};

export const roles = {
    admin: "admin",
    student: "student",
};

export const initialValues = (userInfo) => {
    return {
    names: userInfo?.profile?.names,
    lastnames: userInfo?.profile?.lastnames,
    email: userInfo?.email,
    gender: userInfo?.profile?.gender,
    birthdate: userInfo?.profile?.birthdate,
    govIdType: userInfo?.profile?.govIdType,
    govId: userInfo?.profile?.govId,
    phoneNumber: userInfo?.profile?.phoneNumber,
    state: userInfo?.profile?.state,
    city: userInfo?.profile?.city,
    role: userInfo?.role,
    active: userInfo?.active,
    password: '',
    passwordConfirmation: '',
    };
};

export function validationSchema() {
    return Yup.object({
        names: Yup.string()
          .max(15, 'Must be 15 characters or less')
          .required('Required'),
        lastnames: Yup.string()
          .max(20, 'Must be 20 characters or less')
          .required('Required'),
        email: Yup.string()
          .email('Invalid email address')
          .required('Required'),
        gender: Yup.string()
          .oneOf(Object.values(genders), 'Invalid gender')
          .required('Required'),
        birthdate: Yup.date()
            .required('Required'),
        govIdType: Yup.string()
          .oneOf(Object.values(govIdTypes), 'Invalid ID type')
          .required('Required'),
        govId: Yup.string()
            .matches(/^\d+$/, 'Invalid ID number')
            .min(10, 'Must be 10 digits. Too short.')
            .max(10, 'Must be 10 digits. Too long.')
            .required('Required'),
        phoneNumber: Yup.string()
          .matches(/^\d+$/, 'Invalid phone number')
          .min(10, 'Must be 10 digits. Too short.')
            .max(10, 'Must be 10 digits. Too long.')
          .required('Required'),
        state: Yup.string()
            .required('Required'),
        city: Yup.string()
            .required('Required'),
        password: Yup.string()
          .min(6, 'Must be 6 characters or more')
          .required('Required'),
        passwordConfirmation: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Required'),
      });
};