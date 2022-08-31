import React from 'react'
import { Link } from 'react-router-dom'
import {
  CButton,
  CCard,
  CCardBody,
  CCardGroup,
  CCol,
  CContainer,
  CForm,
  CFormInput,
  CInputGroup,
  CInputGroupText,
  CRow,
} from '@coreui/react'
import CIcon from '@coreui/icons-react'
import { cilLockLocked, cilUser } from '@coreui/icons'
import { Formik } from 'formik'
import * as yup from 'yup'
const validateSchema = yup.object().shape({
  userName: yup
    .string()
    .min(11, 'نام کاربری شما باید 11 کاراکتر باشد')
    .max(11, 'نام کاربری شما نباید بیشتر از 11 کاراکتر باشد')
    .required(),
  password: yup
    .string()
    .min(6, 'رمز عبور باید بیشتر از 6 کاراکتر باشد')
    .max(30, 'رمز عبور باید کمتر از 30 کاراکتر باشد')
    .required(),
})
const Login = () => {
  return (
    <div className="bg-light min-vh-100 d-flex flex-row align-items-center">
      <CContainer>
        <CRow className="justify-content-center">
          <CCol md={8}>
            <CCardGroup>
              <CCard className="p-4">
                <CCardBody>
                  <Formik
                    initialValues={{ userName: '', password: '' }}
                    validationSchema={validateSchema}
                    onSubmit={(values, { setSubmitting }) => {
                      setTimeout(() => {
                        alert(JSON.stringify(values, null, 2))
                        setSubmitting(false)
                      }, 400)
                    }}
                  >
                    {({
                      values,
                      errors,
                      touched,
                      handleChange,
                      handleBlur,
                      handleSubmit,
                      isSubmitting,
                      /* and other goodies */
                    }) => (
                      <CForm onSubmit={handleSubmit}>
                        <h4>پنل مدیریت فروشگاه</h4>
                        <p className="text-medium-emphasis">به حساب کاربری خود وارد شوید</p>
                        <CInputGroup className="mb-3">
                          <CInputGroupText>
                            <CIcon icon={cilUser} />
                          </CInputGroupText>
                          <CFormInput
                            placeholder="شماره همراه"
                            autoComplete="username"
                            type="text"
                            name="userName"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.userName}
                          />
                        </CInputGroup>
                        {errors.userName && touched.userName && errors.userName}
                        <CInputGroup className="mb-4">
                          <CInputGroupText>
                            <CIcon icon={cilLockLocked} />
                          </CInputGroupText>
                          <CFormInput
                            type="password"
                            placeholder="کلمه عبور"
                            autoComplete="current-password"
                            name="password"
                            onChange={handleChange}
                            onBlur={handleBlur}
                            value={values.password}
                          />
                        </CInputGroup>
                        {errors.password && touched.password && errors.password}
                        <CRow>
                          <CCol xs={6}>
                            <CButton
                              color="primary"
                              className="px-4"
                              type="submit"
                              disabled={isSubmitting}
                            >
                              ورود
                            </CButton>
                          </CCol>
                        </CRow>
                      </CForm>
                    )}
                  </Formik>
                </CCardBody>
              </CCard>
              <CCard className="text-white bg-primary py-5" style={{ width: '44%' }}>
                <CCardBody className="text-center">
                  <div>
                    <h5>طراحی اپلیکیشن فروشگاهی مشابه دیجی کالا</h5>
                    <hr />
                    <h5>ساخت توسعه اپلیکیشن با React Native</h5>
                    <hr />
                    <h5>توسعه پنل مدیریت با React JS</h5>
                    <hr />
                    <h5>ساخت توسعه اپلیکیشن با React Native</h5>
                    <hr />
                    <h5>توسعه API با استفاده از GraphQL و NodeJS</h5>
                    <Link to="/register">
                      <CButton color="primary" className="mt-3" active tabIndex={-1}>
                        ثبت نام
                      </CButton>
                    </Link>
                  </div>
                </CCardBody>
              </CCard>
            </CCardGroup>
          </CCol>
        </CRow>
      </CContainer>
    </div>
  )
}
export default Login
