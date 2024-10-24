import React from 'react';
import { Field, Form, Formik } from 'formik';
import { TextField, Button, Typography } from '@mui/material';
import * as Yup from 'yup';

const StepTwo = ({ onBack }) => {
    const initialValues = {
        contactPerson: '',
        name: '',
        designation: '',
        email: '',
        country: '',
        contactDetails: '',
        phoneNumber: '',
        address: '',
        city: '',
        additionalInfo: '' // For "Tell us more about yourself"
    };

    const validationSchema = Yup.object().shape({
        contactPerson: Yup.string().required('Contact person is required'),
        name: Yup.string().required('Name is required'),
        designation: Yup.string().required('Designation is required'),
        email: Yup.string().email('Invalid email').required('Email is required'),
        country: Yup.string().required('Country is required'),
        contactDetails: Yup.string().required('Contact details are required'),
        phoneNumber: Yup.string().required('Phone number is required'),
        address: Yup.string().required('Address is required'),
        city: Yup.string().required('City is required'),
        additionalInfo: Yup.string().required('Please tell us more about yourself')
    });

    return (
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={(values) => {
                console.log(values); // Handle form submission (e.g., send to an API)
            }}
        >
            {({ handleChange, handleBlur, values }) => (
                <Form>
                    <Typography variant="h5">Key Contact Person</Typography>
                    <Typography variant="h6" style={{ margin: '16px 0' }}>Contact Person Details</Typography>
                    
                    <Field
                        name="contactPerson"
                        as={TextField}
                        label="Contact Person"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contactPerson}
                        margin="normal"
                    />
                    <Field
                        name="name"
                        as={TextField}
                        label="Name"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.name}
                        margin="normal"
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
                    />
                    <Field
                        name="contactDetails"
                        as={TextField}
                        label="Contact Details"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.contactDetails}
                        margin="normal"
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
                    />
                    <Field
                        name="address"
                        as={TextField}
                        label="Address"
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.address}
                        margin="normal"
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
                    />
                    <Field
                        name="additionalInfo"
                        as={TextField}
                        label="Tell us more about yourself"
                        multiline
                        rows={4}
                        fullWidth
                        onChange={handleChange}
                        onBlur={handleBlur}
                        value={values.additionalInfo}
                        margin="normal"
                    />
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                        Submit
                    </Button>
                    <Button onClick={onBack} variant="outlined" color="secondary" fullWidth>
                        Back
                    </Button>
                </Form>
            )}
        </Formik>
    );
};

export default StepTwo;
