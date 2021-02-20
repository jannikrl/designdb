import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ImageUpload from "../../UI/ImageUpload";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  imageFile: Yup.mixed().when("image", {
    is: (image) => !image,
    then: Yup.mixed().required("Required"),
    otherwise: Yup.mixed(),
  }),
  imageReference: Yup.string().required("Required"),
});

const DesignForm = ({ designers, manufacturers, design, onSubmit }) => {
  const {
    name,
    image,
    imageReference,
    alsoKnownAs,
    model,
    yearFrom,
    yearTo,
    designerId,
    manufacturerId,
    isFeatured,
  } = design ? design : {};

  const initialValues = {
    name: name || "",
    image: image || "",
    imageFile: "",
    imageReference: imageReference || "",
    model: model || "",
    alsoKnownAs: alsoKnownAs || "",
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
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" id="name"></Field>
            {errors.name && touched.name ? <i>{errors.name}</i> : null}
          </div>

          <Field name="image" type="hidden" id="image"></Field>
          <ImageUpload
            initialImage={image}
            onChange={(imageFile) => {
              setFieldValue("imageFile", imageFile);
            }}
          />
          {errors.imageFile && touched.imageFile ? (
            <i>{errors.imageFile}</i>
          ) : null}

          <div>
            <label htmlFor="imageReference">Image reference</label>
            <Field
              name="imageReference"
              type="text"
              id="imageReference"
            ></Field>
            <small>(link to website where it is downloaded from)</small>
            {errors.imageReference && touched.imageReference ? (
              <i>{errors.imageReference}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="model">Model</label>
            <Field name="model" type="text" id="model"></Field>
            {errors.model && touched.model ? <i>{errors.model}</i> : null}
          </div>

          <div>
            <label htmlFor="alsoKnownAs">Also known as</label>
            <Field name="alsoKnownAs" type="text" id="alsoKnownAs"></Field>
            {errors.alsoKnownAs && touched.alsoKnownAs ? <i>{errors.alsoKnownAs}</i> : null}
          </div>

          <div>
            <label htmlFor="yearFrom">Year from</label>
            <Field name="yearFrom" type="text" id="yearFrom"></Field>
            {errors.yearFrom && touched.yearFrom ? (
              <i>{errors.yearFrom}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="yearTo">Year to</label>
            <Field name="yearTo" type="text" id="yearTo"></Field>
            {errors.yearTo && touched.yearTo ? <i>{errors.yearTo}</i> : null}
          </div>

          <div>
            <Field as="select" name="designerId">
              <option value="" key={0}>
                Select designer
              </option>
              {designers.map((designer) => (
                <option value={designer.id} key={designer.id}>
                  {designer.name}
                </option>
              ))}
            </Field>
          </div>

          <div>
            <Field as="select" name="manufacturerId">
              <option value="" key={0}>
                Select manufacturer
              </option>
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
