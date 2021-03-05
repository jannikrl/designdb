import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ImageUpload from "../../UI/ImageUpload";
import { Manufacturer } from "../../../store/manufacturer/types";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

export interface ManufacturerFormValues {
  id?: number;
  name: string;
  image: string;
  imageFile?: File;
}

export interface ManufacturerFromProps {
  manufacturer: Manufacturer;
  onSubmit: (values: ManufacturerFormValues) => void;
}

const ManufacturerForm: React.FC<ManufacturerFromProps> = ({
  manufacturer,
  onSubmit,
}) => {
  const initialValues: ManufacturerFormValues = {
    name: manufacturer?.name ?? "",
    image: manufacturer?.image ?? "",
    imageFile: undefined,
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

export default ManufacturerForm;
