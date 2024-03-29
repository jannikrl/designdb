import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ImageUpload from "../../UI/ImageUpload";
import { Designer } from "../../../store/designer/types";
import { Manufacturer } from "../../../store/manufacturer/types";

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
  description: string;
  descriptionReference: string;
  descriptionManufacturerId: number | string;
}

interface DesignerFormProps {
  designer?: Designer | null;
  manufacturers: Manufacturer[];
  onSubmit: (values: DesignerFormValues) => void;
}

const DesignerForm: React.FC<DesignerFormProps> = ({ designer, manufacturers, onSubmit }) => {
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
    description: designer?.description ?? "",
    descriptionReference: designer?.descriptionReference ?? "",
    descriptionManufacturerId: designer?.descriptionManufacturerId ?? "",
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
            {errors.diedYear && touched.diedYear ? (
              <i>{errors.diedYear}</i>
            ) : null}
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
            {errors.diedCity && touched.diedCity ? (
              <i>{errors.diedCity}</i>
            ) : null}
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
            {errors.diedCountry && touched.diedCountry ? (
              <i>{errors.diedCountry}</i>
            ) : null}
          </div>

          <ImageUpload
            initialImage={initialValues.image}
            onChange={(imageFile) => {
              setFieldValue("imageFile", imageFile);
            }}
          />

          <div>
            <label htmlFor="description">Description</label>
            <Field
              name="description"
              type="text"
              component="textarea"
              id="description"
            ></Field>
            {errors.description && touched.description ? (
              <i>{errors.description}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="descriptionReference">Reference</label>
            <Field name="descriptionReference" type="text" id="descriptionReference"></Field>
            {errors.descriptionReference && touched.descriptionReference ? (
              <i>{errors.descriptionReference}</i>
            ) : null}
          </div>

          <div>
            <Field as="select" name="descriptionManufacturerId">
              <option value="placeholder" key={0}>
                Select manufacturer
              </option>
              {manufacturers.map((manufacturer) => (
                <option value={manufacturer.id} key={manufacturer.id}>
                  {manufacturer.name}
                </option>
              ))}
            </Field>
            <small>Which manufacturer's website is the description from?</small>
          </div>

          <div>
            <button type="submit">Submit</button>
          </div>
        </Form>
      )}
    </Formik>
  );
};

export default DesignerForm;
