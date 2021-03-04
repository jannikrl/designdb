import React from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import ImageUpload from "../../UI/ImageUpload";
import { Design } from "../../../store/design/types";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
  imageFile: Yup.mixed().when("image", {
    is: (image: string) => !image,
    then: Yup.mixed().required("Required"),
    otherwise: Yup.mixed(),
  }),
  originCountry: Yup.string().when("alsoKnownAsOriginCountry", {
    is: (alsoKnownAsOriginCountry: string) => alsoKnownAsOriginCountry,
    then: Yup.string().required(
      "Required when 'Also known as (origin country)' is used"
    ),
    otherwise: Yup.string(),
  }),
  imageReference: Yup.string().required("Required"),
});

type DesignFormProps = {
  designers: { id: number; name: string }[]; // @Todo: Update when designer type is created
  manufacturers: { id: number; name: string }[]; // @Todo: Update when manufacturer type is created
  design: Design;
  designTypes: { id: number; name: string }[]; // @Todo: Update when designTypes type is created
  onSubmit: (values: Design) => void;
};

const DesignForm: React.FC<DesignFormProps> = ({
  designers,
  manufacturers,
  design,
  designTypes,
  onSubmit,
}) => {
  interface DesignFormValues {
    id: number;
    name: string;
    image: string | undefined;
    imageFile: File | undefined;
    imageReference: string | undefined;
    model: string | undefined;
    alsoKnownAs: string | undefined;
    alsoKnownAsOriginCountry: string | undefined;
    originCountry: string | undefined;
    yearFrom: number | undefined;
    yearTo: number | undefined;
    designerId: number | undefined;
    manufacturerId: number | undefined;
    isFeatured: boolean | undefined;
    manufacturerUrl: string | undefined;
    manufacturerDescription: string | undefined;
    wikipediaUrl: string | undefined;
    recognitions: string | undefined;
    notes: string | undefined;
    typeId: number | undefined;
  }

  const initialValues: DesignFormValues = {
    id: design?.id,
    name: design?.name,
    image: design?.image ?? undefined,
    imageFile: undefined,
    imageReference: design?.imageReference ?? undefined,
    model: design?.model ?? undefined,
    alsoKnownAs: design?.alsoKnownAs ?? undefined,
    alsoKnownAsOriginCountry: design?.alsoKnownAsOriginCountry ?? undefined,
    originCountry: design?.originCountry ?? undefined,
    yearFrom: design?.yearFrom ?? undefined,
    yearTo: design?.yearTo ?? undefined,
    designerId: design?.designerId ?? undefined,
    manufacturerId: design?.manufacturerId ?? undefined,
    isFeatured: !!design?.isFeatured,
    manufacturerUrl: design?.manufacturerUrl ?? undefined,
    manufacturerDescription: design?.manufacturerDescription ?? undefined,
    wikipediaUrl: design?.wikipediaUrl ?? undefined,
    recognitions: design?.recognitions ?? undefined,
    notes: design?.notes ?? undefined,
    typeId: design?.typeId ?? undefined,
  };

  const mapValues = (values: DesignFormValues): Design => {
    return {
      id: values.id,
      name: values.name,
      image: values.image ?? null,
      imageFile: values.imageFile ?? null,
      imageReference: values.imageReference ?? null,
      model: values.model ?? null,
      alsoKnownAs: values.alsoKnownAs ?? null,
      alsoKnownAsOriginCountry: values.alsoKnownAsOriginCountry ?? null,
      originCountry: values.originCountry ?? null,
      yearFrom: values.yearFrom ?? null,
      yearTo: values.yearTo ?? null,
      designerId: values.designerId ?? null,
      manufacturerId: values.manufacturerId ?? null,
      isFeatured: values.isFeatured ?? null,
      manufacturerUrl: values.manufacturerUrl ?? null,
      manufacturerDescription: values.manufacturerDescription ?? null,
      wikipediaUrl: values.wikipediaUrl ?? null,
      recognitions: values.recognitions ?? null,
      notes: values.notes ?? null,
      typeId: values.typeId ?? null,
    };
  };

  const submitHandler = (values: DesignFormValues) => {
    const design = mapValues(values);
    onSubmit(design);
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={schema}
      onSubmit={(values: DesignFormValues) => submitHandler(values)}
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
            initialImage={initialValues.image}
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
            {errors.alsoKnownAs && touched.alsoKnownAs ? (
              <i>{errors.alsoKnownAs}</i>
            ) : null}
          </div>
          <div>
            <label htmlFor="alsoKnownAsOriginCountry">
              Also known as (origin country)
            </label>
            <Field
              name="alsoKnownAsOriginCountry"
              type="text"
              id="alsoKnownAsOriginCountry"
            ></Field>
            {errors.alsoKnownAsOriginCountry &&
            touched.alsoKnownAsOriginCountry ? (
              <i>{errors.alsoKnownAsOriginCountry}</i>
            ) : null}
          </div>
          <div>
            <label htmlFor="originCountry">Origin country</label>
            <Field name="originCountry" type="text" id="originCountry"></Field>
            {errors.originCountry && touched.originCountry ? (
              <i>{errors.originCountry}</i>
            ) : null}
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

          <h4>Story:</h4>

          <div>
            <label htmlFor="manufacturerDescription">
              Manufacturer description
            </label>
            <Field
              name="manufacturerDescription"
              type="text"
              component="textarea"
              id="manufacturerDescription"
            ></Field>
            <small>(A teaser from the Wikipedia page)</small>
            {errors.manufacturerDescription &&
            touched.manufacturerDescription ? (
              <i>{errors.manufacturerDescription}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="manufacturerUrl">Manufacturer URL</label>
            <Field
              name="manufacturerUrl"
              type="text"
              id="manufacturerUrl"
            ></Field>
            <small>(link to the design on manufacturer's website)</small>
            {errors.manufacturerUrl && touched.manufacturerUrl ? (
              <i>{errors.manufacturerUrl}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="wikipediaUrl">Wikipedia link</label>
            <Field name="wikipediaUrl" type="text" id="wikipediaUrl"></Field>
            <small>(Link to Wikipedia page)</small>
            {errors.wikipediaUrl && touched.wikipediaUrl ? (
              <i>{errors.wikipediaUrl}</i>
            ) : null}
          </div>

          <div>
            <label htmlFor="recognitions">Recognitions</label>
            <Field name="recognitions" type="text" id="recognitions"></Field>
            <small>
              (E.g. part of exibitions on museums, mentions in books, used on
              important TV events)
            </small>
            {errors.recognitions && touched.recognitions ? (
              <i>{errors.recognitions}</i>
            ) : null}
          </div>

          <h4>Relations:</h4>

          <div>
            <Field as="select" name="designerId">
              <option value="placeholder" key={0}>
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
              <option value="placeholder" key={0}>
                Select manufacturer
              </option>
              {manufacturers.map((manufacturer) => (
                <option value={manufacturer.id} key={manufacturer.id}>
                  {manufacturer.name}
                </option>
              ))}
            </Field>
          </div>

          <h4>Home page:</h4>
          <div>
            <label>
              <Field type="checkbox" name="isFeatured" />
              Is featured
            </label>
          </div>
          <div>
            <Field as="select" name="typeId">
              <option value="placeholder" key={0}>
                Select type
              </option>
              {designTypes.map((designType) => (
                <option value={designType.id} key={designType.id}>
                  {designType.name}
                </option>
              ))}
            </Field>
          </div>

          <h4>Notes:</h4>
          <div>
            <label htmlFor="notes">notes</label>
            <Field
              name="notes"
              type="text"
              component="textarea"
              id="notes"
            ></Field>
            <small>(Not shown on anywhere but here)</small>
            {errors.notes && touched.notes ? <i>{errors.notes}</i> : null}
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
