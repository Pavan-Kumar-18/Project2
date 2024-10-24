import React from 'react';
import { Field, Form, Formik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';
import * as Yup from 'yup';

const StepOne = ({ onNext }) => {
    const initialValues = {
        companyName: '',
        headOffice: '',
        postalCode: '',
        country: '',
        city: '',
        phoneNumber: '',
        contactName: '', 
        designation: '',  
        countryCode: '',  
        email: ''         
    };

    const validationSchema = Yup.object().shape({
        companyName: Yup.string().required('Company name is required'),
        headOffice: Yup.string().required('Head office is required'),
        postalCode: Yup.string().required('Postal code is required'),
        country: Yup.string().required('Country is required'),
        city: Yup.string().required('City is required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        contactName: Yup.string().required('Contact person name is required'),
        designation: Yup.string().required('Designation is required'),
        countryCode: Yup.string().required('Country code is required'),
        email: Yup.string().email('Invalid email format').required('Email is required'),
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                onNext(); // Move to next step only if validation passes
            }} 
        >
            {({ handleChange, handleBlur, values, errors, touched }) => (
                <Form>
                    <Typography variant="h5"> Basic Company Information</Typography>
                    <Field
                        name="companyName"
                        as={TextField}
                        label="Company Name"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.companyName}
                        margin="normal"
                        error={touched.companyName && Boolean(errors.companyName)}
                        helperText={touched.companyName && errors.companyName}
                    />
                    <Field
                        name="headOffice"
                        as={TextField}
                        label="Head Office"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.headOffice}
                        margin="normal"
                        error={touched.headOffice && Boolean(errors.headOffice)}
                        helperText={touched.headOffice && errors.headOffice}
                    />
                    <Field
                        name="postalCode"
                        as={TextField}
                        label="Postal Code"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.postalCode}
                        margin="normal"
                        error={touched.postalCode && Boolean(errors.postalCode)}
                        helperText={touched.postalCode && errors.postalCode}
                    />
                    <Field
                        name="country"
                        as={TextField}
                        label="Country"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.country}
                        margin="normal"
                        error={touched.country && Boolean(errors.country)}
                        helperText={touched.country && errors.country}
                    />
                    <Field
                        name="city"
                        as={TextField}
                        label="City"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.city}
                        margin="normal"
                        error={touched.city && Boolean(errors.city)}
                        helperText={touched.city && errors.city}
                    />
                    <Field
                        name="phoneNumber"
                        as={TextField}
                        label="Phone Number"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.phoneNumber}
                        margin="normal"
                        error={touched.phoneNumber && Boolean(errors.phoneNumber)}
                        helperText={touched.phoneNumber && errors.phoneNumber}
                    />
                     <Typography variant="h5"> Key Contact Person</Typography>
                    <Field
                        name="contactName"
                        as={TextField}
                        label="Contact Person Name"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contactName}
                        margin="normal"
                        error={touched.contactName && Boolean(errors.contactName)}
                        helperText={touched.contactName && errors.contactName}
                    />
                    <Field
                        name="designation"
                        as={TextField}
                        label="Designation"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.designation}
                        margin="normal"
                        error={touched.designation && Boolean(errors.designation)}
                        helperText={touched.designation && errors.designation}
                    />
                    <Field
                        name="countryCode"
                        as={TextField}
                        label="Country Code"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.countryCode}
                        margin="normal"
                        error={touched.countryCode && Boolean(errors.countryCode)}
                        helperText={touched.countryCode && errors.countryCode}
                    />
                    <Field
                        name="email"
                        as={TextField}
                        label="Email"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.email}
                        margin="normal"
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                    />
                    <Button 
                        type="submit" 
                        variant="contained" 
                        color="primary" 
                        fullWidth
                        style={{ marginTop: '20px', padding: '10px 20px' }} // Reduced padding for button size
                    >
                        Next
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default StepOne;
