import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ImageUpload from "../../../components/UI/ImageUpload";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

const DesignForm = ({ designers, manufacturers, design, onSubmit }) => {
  const {
    name,
    image,
    model,
    yearFrom,
    yearTo,
    designerId,
    manufacturerId,
    isFeatured,
  } = design ? design : {};

  const initialValues = {
    name: name,
    model: model || "",
    yearFrom: yearFrom || "",
    yearTo: yearTo || "",
    designerId: designerId,
    manufacturerId: manufacturerId,
    isFeatured: !!isFeatured,
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values) => onSubmit(values)}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="name">name</label>
            <Field name="name" type="text" id="name"></Field>
            {errors.name && touched.name ? <i>{errors.name}</i> : null}
          </div>

          <ImageUpload
            initialImage={image}
            onChange={(imageFile) => {
              setFieldValue("imageFile", imageFile);
            }}
          />

          <div>
            <label htmlFor="model">model</label>
            <Field name="model" type="text" id="model"></Field>
            {errors.model && touched.model ? <i>{errors.model}</i> : null}
          </div>

          <div>
            <label htmlFor="yearFrom">yearFrom</label>
            <Field name="yearFrom" type="text" id="yearFrom"></Field>
            {errors.yearFrom && touched.yearFrom ? (
              <i>{errors.yearFrom}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="yearTo">yearTo</label>
            <Field name="yearTo" type="text" id="yearTo"></Field>
            {errors.yearTo && touched.yearTo ? <i>{errors.yearTo}</i> : null}
          </div>

          <div>
            <Field as="select" name="designerId">
              {designers.map((designer) => (
                <option value={designer.id} key={designer.id}>
                  {designer.name}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <Field as="select" name="manufacturerId">
              {manufacturers.map((manufacturer) => (
                <option value={manufacturer.id} key={manufacturer.id}>
                  {manufacturer.name}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <label>
              <Field type="checkbox" name="isFeatured" />
              Is featured
            </label>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DesignForm;
