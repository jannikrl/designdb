import reducer from "./reducer";
import * as types from "./types";

const initialState = {
  design: null,
  loading: false,
  error: "",
};

const design: types.Design = {
    id: 1,
    name: "a name",
    image: "an-image-url",
    imageReference: null,
    alsoKnownAs: null,
    alsoKnownAsOriginCountry: null,
    originCountry: null,
    model: null,
    yearFrom: null,
    yearTo: null,
    designerId: null,
    manufacturerId: null,
    isFeatured: null,
    manufacturerUrl: null,
    manufacturerDescription: null,
    wikipediaUrl: null,
    recognitions: null,
    notes: null,
    typeId: null,
}

describe("design reducer", () => {
  it("should store design upon fetch success", () => {
    expect(
      reducer(initialState, {
        type: types.FETCH_DESIGN_SUCCESS,
        design: design,
      })
    ).toEqual({
      design: design,
      loading: false,
      error: "",
    });
  });
});
