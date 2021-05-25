import { isRequired } from "@miq/utils";
import { isEqual } from "lodash";
import { API } from "../../utils";

export const patchAction = (
    request = isRequired("request required: [HTTP, AUTH, API]"),
    path = isRequired("path"),
    values = isRequired("values"),
    oldValues,
    dispatch,
    type
) =>
    new Promise((resolve, reject) => {
        if (oldValues && isEqual(values, oldValues)) {
            return resolve({ isUpdated: false });
        }

        request
            .patch(path, values)
            .then(({ data }) => {
                if (dispatch && type) {
                    dispatch({ type, payload: data });
                }

                resolve({ ...data, isUpdated: true });
            })
            .catch((err) => {
                reject(err);
            });
    });

export const deleteAction = (
    request = isRequired("request required: [HTTP, AUTH, API]"),
    path = isRequired("path"),
    slug = isRequired("slug"),
    dispatch,
    type
) =>
    new Promise((resolve, reject) =>
        request
            .delete(path)
            .then(({ status }) => {
                if (status === 204 && dispatch && type) {
                    dispatch({ type, payload: { slug } });
                }

                resolve({ deleted: true });
            })
            .catch((err) => {
                reject(err);
            })
    );

export function arrAddOrUpdateObject(arr, obj, key = "slug") {
    const arrKey = arr.map((i) => i[key]);

    if (!arrKey.includes(obj[key])) return [obj, ...arr];

    return arr.map((i) => {
        if (i[key] === obj[key]) return obj;
        return i;
    });
}

const sectEndpoint = `sections/`;

export const sectionActions = {
    list: (params) => (dispatch) =>
        new Promise((resolve, reject) => {
            API.get(sectEndpoint, { params })
                .then(({ data }) => {
                    dispatch({ type: "SET_SECTIONS", payload: data });
                    resolve(data);
                })
                .catch((err) => reject(err));
        }),
    patch: (sectSlug, values, oldValues) => (dispatch) =>
        patchAction(API, `${sectEndpoint}${sectSlug}/`, values, oldValues, dispatch, `ADD_UPDATE_SECTION`),
    delete: (sectSlug) => (dispatch) =>
        deleteAction(API, `${sectEndpoint}${sectSlug}/`, sectSlug, dispatch, `REMOVE_SECTION`),
};

const initialState = { sections: { results: [] } };

export const sectionsReducer = (state = initialState.sections, action) => {
    const { type, payload = {} } = action;
    let { results } = payload;

    switch (type) {
        case "SET_SECTIONS":
            return { ...payload };

        case "ADD_UPDATE_SECTION":
            results = arrAddOrUpdateObject(state.results, payload);
            return { ...state, results };

        case "REMOVE_SECTION":
            results = state.results.filter(({ slug }) => slug !== payload.slug);
            return { ...state, results };

        default:
            return { ...state };
    }
};
