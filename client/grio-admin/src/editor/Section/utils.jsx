import actions from "../../actions";

export function arrAddOrUpdateObject(arr, obj, key = "slug", append = false) {
    const arrKey = arr.map((i) => i[key]);

    if (!arrKey.includes(obj[key])) {
        if (append) return [...arr, obj];
        return [obj, ...arr];
    }

    return arr.map((i) => {
        if (i[key] === obj[key]) return obj;
        return i;
    });
}

const path = `sections/`;
export const sectionActions = {
    list(params) {
        return actions.get(path, params, "SET_SECTIONS");
    },
    get(sectSlug, params, type = "PREPEND_SECTION") {
        return actions.get(`${path}${sectSlug}/`, params, type);
    },
    post(values, type = "PREPEND_SECTION") {
        return actions.post(`${path}`, values, type);
    },
    patch(sectSlug, values, oldValues) {
        return actions.patch(`${path}${sectSlug}/`, values, oldValues, "UPDATE_SECTION");
    },
    delete(sectSlug) {
        return actions.delete(`${path}${sectSlug}/`, sectSlug, "REMOVE_SECTION");
    },
};

const initialState = { sections: { results: [] } };

export const sectionsReducer = (state = initialState.sections, action) => {
    const { type, payload = {} } = action;
    let { results } = payload;

    switch (type) {
        case "SET_SECTIONS":
            return { ...payload };

        case "APPEND_SECTION":
            results = arrAddOrUpdateObject(state.results, payload, "slug", true);
            return { ...state, results };

        case "PREPEND_SECTION":
            results = arrAddOrUpdateObject(state.results, payload);
            return { ...state, results };

        case "UPDATE_SECTION":
            results = arrAddOrUpdateObject(state.results, payload);
            return { ...state, results };

        case "REMOVE_SECTION":
            results = state.results.filter(({ slug }) => slug !== payload.slug);
            return { ...state, results };

        default:
            return { ...state };
    }
};
