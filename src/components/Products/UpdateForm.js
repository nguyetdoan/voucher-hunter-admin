import { Field, Form, Formik } from "formik";
import React, {
  forwardRef,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
} from "react";
import { useDispatch, useSelector } from "react-redux";
import * as Yup from "yup";
import productActions from "../../actions/productAction";
import CustomInput from "../CustomInput/index";
import CustomSelector from "../CustomSelector/index";
import Upload from "../Upload";

const validationSchema = Yup.object({
  name: Yup.string().required("Required"),
  detail: Yup.string().required("Required"),
  category: Yup.string().required("Required"),
  images: Yup.array()
    .min(1, "Please upload at least one image")
    .required("Required"),
  stock: Yup.number().required("Required"),
  price: Yup.number().required("Required"),
});

const initial = {
  name: "",
  detail: "",
  category: "",
  price: "",
  stock: "",
  discount: "",
  from: "",
  to: "",
  images: [],
};

const UpdateForm = forwardRef(({ justShow, setJustShow }, ref) => {
  const [initialValues, setInitialValues] = useState(initial);
  const { onUpdateForm } = useSelector((state) => state.product);

  const [price, setPrice] = useState("");
  const updateBtnRef = useRef();
  const dispatch = useDispatch();

  useImperativeHandle(ref, () => ({
    submit: () => updateBtnRef.current.click(),
  }));

  useEffect(() => {
    console.log(onUpdateForm);
    if (
      Object.values(initialValues).every((value) => !value.length) &&
      onUpdateForm
    ) {
      let from, to;

      if (onUpdateForm.from) {
        from = onUpdateForm.from.split("T")[0];
      }

      if (onUpdateForm.to) {
        to = onUpdateForm.to.split("T")[0];
      }

      setInitialValues({
        ...onUpdateForm,
        from: from || "",
        to: to || "",
      });
      setPrice(Intl.NumberFormat().format(onUpdateForm.price));
    }

    if (!onUpdateForm) {
      setInitialValues(initial);
    }
  }, [onUpdateForm, initialValues]);

  const handleChangePrice = (e, setFieldValue) => {
    const numStr = e.target.value.split(",").join("");

    if (+numStr) {
      const number = +numStr;
      const formatPrice = new Intl.NumberFormat().format(number);
      setPrice(formatPrice);
      setFieldValue("price", number);
    }
  };

  const onSubmit = (values, { resetForm, setSubmitting }) => {
    dispatch(productActions.updateProduct(values));
    resetForm();
    setPrice("");
    setSubmitting(false);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
      enableReinitialize
    >
      {({ values, touched, errors, setFieldValue, setTouched }) => {
        return (
          <Form className="update-form">
            <CustomInput
              values={values}
              name="name"
              label="Product Name"
              required={true}
              type="text"
              setFieldValue={setFieldValue}
              {...{ errors, touched }}
            />

            <div className="input-field">
              <label>Detail</label>
              <Field name="detail">
                {({ field, form: { touched, errors } }) => (
                  <>
                    <textarea
                      {...field}
                      rows="5"
                      columns="50"
                      className={`form-control ${
                        touched.detail && errors.detail ? "error" : ""
                      }`}
                    ></textarea>
                    {touched.detail && errors.detail ? (
                      <div className="err-msg">{errors.detail}</div>
                    ) : null}
                  </>
                )}
              </Field>
            </div>

            <CustomSelector
              placeholder={"Select a category"}
              name="category"
              label="Category"
              setFieldValue={setFieldValue}
              {...{ errors, touched, setTouched, values }}
              selectOptions={["Travel", "Cook", "Technology"]}
            />

            <div className="input-field">
              <label htmlFor="price">Price</label>
              <Field
                id="price"
                name="price"
                type="text"
                onChange={(e) => handleChangePrice(e, setFieldValue)}
                value={price}
                className={`form-control ${
                  touched.price && errors.price ? "error" : ""
                }`}
              />
              {touched.price && errors.price ? (
                <div className="err-msg">{errors.price}</div>
              ) : null}
            </div>

            <CustomInput
              name="stock"
              require={true}
              type="number"
              label="Stock"
              {...{ errors, touched }}
            />

            <CustomInput
              name="discount"
              type="text"
              require={true}
              label="Discount"
              {...{ errors, touched }}
            />

            <CustomInput
              name="from"
              type="date"
              require={true}
              label="From"
              {...{ errors, touched }}
            />

            <CustomInput
              name="to"
              type="date"
              require={true}
              label="To"
              {...{ errors, touched }}
            />

            <Field name="images">
              {({
                field,
                form: { touched, errors, setFieldValue, isSubmitting },
              }) => {
                return (
                  <Upload
                    {...{ ...field, justShow, setJustShow }}
                    require={true}
                    {...{
                      errors,
                      touched,
                      setFieldValue,
                      isSubmitting,
                      values,
                    }}
                  />
                );
              }}
            </Field>

            <button
              ref={updateBtnRef}
              type="submit"
              className="btn btn-primary submit-btn"
            >
              Update
            </button>
          </Form>
        );
      }}
    </Formik>
  );
});

export default UpdateForm;
