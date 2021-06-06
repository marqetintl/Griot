import actions from "../actions";
import { PAGE_CREATE_PATH } from "../editor";

const initialState = { results: [], items: {} };

export const pagesActions = {
    path: "pages/",

    list(params) {
        return actions.get(this.path, params, "SET_PAGES");
    },
    get(pageSlug, params) {
        return actions.get(`${this.path}${pageSlug}/`, params, "ADD_UPDATE_PAGE");
    },
    post(values) {
        return actions.post(`${this.path}`, values, "ADD_UPDATE_PAGE");
    },
    patch(pageSlug, values, oldValues) {
        return actions.patch(`${this.path}${pageSlug}/`, values, oldValues);
    },
    postSection(pageSlug, values) {
        return actions.post(`${this.path}${pageSlug}/section/`, values, "APPEND_SECTION");
    },
    delete(pageSlug) {
        return actions.delete(`${this.path}${pageSlug}/`, pageSlug, "REMOVE_PAGE");
    },
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

        case "REMOVE_PAGE":
            items = state.items;
            delete items[payload.slug];
            return { ...state, items };

        default:
            return { ...state };
    }
};

export const getPageUpdatePath = (slug) => `${PAGE_CREATE_PATH}${slug}/`;
