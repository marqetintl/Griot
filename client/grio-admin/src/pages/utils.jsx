import { PAGE_CREATE_PATH } from "../editor";
import { API } from "../utils";

const initialState = { results: [], items: {} };

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
    get: (pageSlug) => (dispatch) =>
        new Promise((resolve, reject) => {
            API.get(`pages/${pageSlug}/`)
                .then(({ data }) => {
                    dispatch({ type: "ADD_UPDATE_PAGE", payload: data });
                    resolve(data);
                })
                .catch((err) => reject(err));
        }),
};

export const pagesReducer = (state = initialState, action) => {
    const { type, payload = {} } = action;
    let items;

    switch (type) {
        case "SET_PAGES":
            const { results, ...rest } = payload;
            state = { ...rest };

            if (results) {
                items = {};

                results.forEach((item) => {
                    items[`${item.slug}`] = item;
                });
                state = { ...state, items };
            }
            return state;

        case "ADD_UPDATE_PAGE":
            items = { ...state.items, [payload.slug]: payload };
            return { ...state, items };

        default:
            return { ...state };
    }
};

export const getPageUpdatePath = (slug) => `${PAGE_CREATE_PATH}${slug}/`;
