import React, { useCallback, useEffect, useState } from "react";
import * as Yup from "yup";
import { Formik, Form, Field } from "formik";
import { useDispatch, useSelector } from "react-redux";
import { Redirect, useParams } from "react-router-dom";
import * as designActions from "../../store/design/actions";
import * as designSelectors from "../../store/design/selectors";
import * as designersActions from "../../store/designers/actions";
import * as designersSelectors from "../../store/designers/selectors";
import * as manufacturersActions from "../../store/manufacturers/actions";
import * as manufacturersSelectors from "../../store/manufacturers/selectors";

const schema = Yup.object().shape({
  name: Yup.string().required("Required"),
});

const DesignEdit = (props) => {
  const [didSubmit, setDidSubmit] = useState(false);
  const [imagePreview, setImagePreview] = useState("");
  const design = useSelector((state) => designSelectors.getDesign(state));
  const designError = useSelector((state) => designSelectors.getError(state));
  const designIsLoading = useSelector((state) =>
    designSelectors.isLoading(state)
  );
  const designers = useSelector((state) =>
    designersSelectors.getDesigners(state)
  );
  const manufacturers = useSelector((state) =>
    manufacturersSelectors.getManufacturers(state)
  );

  const dispatch = useDispatch();

  const { id } = useParams();

  const fetchDesign = useCallback(
    () => dispatch(designActions.fetchDesign(id)),
    [dispatch, id]
  );
  const fetchDesigners = useCallback(
    () => dispatch(designersActions.fetchDesigners()),
    [dispatch]
  );
  const fetchManufacturers = useCallback(
    () => dispatch(manufacturersActions.fetchManufacturers()),
    [dispatch]
  );
  const updateDesign = (design) => dispatch(designActions.updateDesign(design));

  useEffect(() => {
    fetchDesign();
    fetchDesigners();
    fetchManufacturers();
  }, [fetchDesign, fetchDesigners, fetchManufacturers]);

  const submitHandler = (values) => {
    values.id = id;
    updateDesign(values);
    setDidSubmit(true);
  };

  const {
    name,
    image,
    model,
    yearFrom,
    yearTo,
    designerId,
    manufacturerId,
  } = design ? design : {};

  const initialValues = {
    name: name,
    model: model || "",
    yearFrom: yearFrom || "",
    yearTo: yearTo || "",
    designerId: designerId,
    manufacturerId: manufacturerId,
  };

  const isSuccess = didSubmit && !designIsLoading && !designError;
  const redirect = isSuccess && <Redirect to={`/design/${id}`} />;
  const errorMessage = didSubmit && designError && (
    <p>Something went wrong, try again</p>
  );

  const didFetchDesign = design && design.id === +id;

  return (
    <div>
      {redirect}
      {errorMessage}
      {didFetchDesign && (
        <Formik
          initialValues={initialValues}
          validationSchema={schema}
          onSubmit={(values) => submitHandler(values)}
        >
          {({ errors, touched, setFieldValue }) => (
            <Form>
              <div>
                <label htmlFor="name">name</label>
                <Field name="name" type="text" id="name"></Field>
                {errors.name && touched.name ? <i>{errors.name}</i> : null}
              </div>

              <div>
                <div>
                  {!imagePreview && image && (
                    <img
                      height="200"
                      src={process.env.REACT_APP_IMAGE_URL + "/" + image}
                      alt=""
                    />
                  )}
                  {imagePreview && (
                    <img
                      height="200"
                      src={imagePreview}
                      alt=""
                    />
                  )}
                </div>
                <input
                  id="image"
                  name="imageFile"
                  type="file"
                  onChange={(event) => {
                    const imageFile = event.currentTarget.files[0];
                    setFieldValue("imageFile", imageFile);
                    setImagePreview(window.URL.createObjectURL(imageFile));
                  }}
                />
              </div>

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
                {errors.yearTo && touched.yearTo ? (
                  <i>{errors.yearTo}</i>
                ) : null}
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
                <button type="submit">Submit</button>
              </div>
            </Form>
          )}
        </Formik>
      )}
    </div>
  );
};

export default DesignEdit;
