import { PAGE_CREATE_PATH } from "../editor";
import { API } from "../utils";

const initialState = { results: [] };

export const pagesActions = {
    list:
        (path = "pages/", params) =>
        (dispatch) =>
            new Promise((resolve, reject) => {
                API.get(path, { params })
                    .then(({ data }) => {
                        dispatch({ type: "SET_PAGES", payload: data });
                        resolve(data);
                    })
                    .catch((err) => reject(err));
            }),
};

export const pagesReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {
        case "SET_PAGES":
            return { ...payload };

        default:
            return { ...state };
    }
};

export const getPageUpdatePath = (slug) => `${PAGE_CREATE_PATH}${slug}/`;
