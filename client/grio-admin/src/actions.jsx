import { isEqual, isString } from "lodash";
import { reduxStore } from ".";
import { API } from "./utils";

const actions = {
    /**
     *
     * @param {String} path
     * @param {Object} params
     * @param {String} type
     * @param {Function} request
     * @returns {Promise}
     */

    get(path, params, type, request = API) {
        return new Promise((resolve, reject) =>
            request
                .get(path, { params })
                .then(({ data }) => {
                    if (isString(type)) {
                        reduxStore.dispatch({ type, payload: data });
                    }
                    return resolve(data);
                })
                .catch((err) => reject(err))
        );
    },

    /**
     *
     * @param {String} path
     * @param {Object} values
     * @param {String} type
     * @param {Function} request
     * @returns {Promise}
     */

    post(path, values, type, request = API) {
        return new Promise((resolve, reject) => {
            request
                .post(path, values)
                .then(({ data }) => {
                    if (isString(type)) {
                        reduxStore.dispatch({ type, payload: data });
                    }

                    return resolve(data);
                })
                .catch((err) => reject(err));
        });
    },

    /**
     *
     * @param {String} path
     * @param {Object} values
     * @param {Object} oldValues
     * @param {String} type
     * @param {Function} request
     * @returns {Promise}
     */

    patch(path, values, oldValues, type, request = API) {
        return new Promise((resolve, reject) => {
            if (oldValues && isEqual(values, oldValues)) {
                return resolve({ isUpdated: false });
            }

            request
                .patch(path, values)
                .then(({ data }) => {
                    if (isString(type)) {
                        reduxStore.dispatch({ type, payload: data });
                    }

                    return resolve({ ...data, isUpdated: true });
                })
                .catch((err) => reject(err));
        });
    },

    /**
     *
     * @param {String} path
     * @param {String} slug
     * @param {String} type
     * @param {Function} request
     * @returns {Promise}
     */

    delete(path, slug, type, request = API) {
        return new Promise((resolve, reject) =>
            request
                .delete(path)
                .then((res) => {
                    if (!res.status === 204) return reject(res);

                    if (isString(type)) {
                        reduxStore.dispatch({ type, payload: { slug } });
                    }

                    resolve({ deleted: true });
                })
                .catch((err) => reject(err))
        );
    },
};

export default actions;
