import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ImageUpload from "../../UI/ImageUpload";
import { Designer } from "../../../store/designer/types";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

export interface DesignerFormValues {
    id?: number;
    name: string;
    image: string;
    imageFile?: File;
    bornYear: number | string;
    diedYear: number | string;
    bornCity: string;
    diedCity: string;
    bornCountry: string;
    diedCountry: string;
}

interface DesignerFormProps {
    designer?: Designer | null,
    onSubmit: (values: DesignerFormValues) => void,
}

const DesignerForm: React.FC<DesignerFormProps> = ({ designer, onSubmit }) => {
  const initialValues: DesignerFormValues = {
    name: designer?.name ?? "",
    image: designer?.image ?? "",
    imageFile: undefined,
    bornYear: designer?.bornYear ?? "",
    diedYear: designer?.diedYear ?? "",
    bornCity: designer?.bornCity ?? "",
    diedCity: designer?.diedCity ?? "",
    bornCountry: designer?.bornCountry ?? "",
    diedCountry: designer?.diedCountry ?? "",
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values: DesignerFormValues) => onSubmit(values)}
    >
      {({ errors, touched, setFieldValue }) => (
        <Form>
          <div>
            <label htmlFor="name">Name</label>
            <Field name="name" type="text" id="name"></Field>
            {errors.name && touched.name ? <i>{errors.name}</i> : null}
          </div>

          <div>
            <label htmlFor="bornYear">Born year</label>
            <Field name="bornYear" type="number" id="bornYear"></Field>
            {errors.bornYear && touched.bornYear ? (
              <i>{errors.bornYear}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="diedYear">Died year</label>
            <Field name="diedYear" type="number" id="diedYear"></Field>
            {errors.diedYear && touched.diedYear ? <i>{errors.diedYear}</i> : null}
          </div>

          <div>
            <label htmlFor="bornCity">Born city</label>
            <Field name="bornCity" type="text" id="bornCity"></Field>
            {errors.bornCity && touched.bornCity ? (
              <i>{errors.bornCity}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="diedCity">Died city</label>
            <Field name="diedCity" type="text" id="diedCity"></Field>
            {errors.diedCity && touched.diedCity ? <i>{errors.diedCity}</i> : null}
          </div>

          <div>
            <label htmlFor="bornCountry">Born country</label>
            <Field name="bornCountry" type="text" id="bornCountry"></Field>
            {errors.bornCountry && touched.bornCountry ? (
              <i>{errors.bornCountry}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="diedCountry">Died country</label>
            <Field name="diedCountry" type="text" id="diedCountry"></Field>
            {errors.diedCountry && touched.diedCountry ? <i>{errors.diedCountry}</i> : null}
          </div>

          <ImageUpload
            initialImage={initialValues.image}
            onChange={(imageFile) => {
              setFieldValue("imageFile", imageFile);
            }}
          />

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DesignerForm;
