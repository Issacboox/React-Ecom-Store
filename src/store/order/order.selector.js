import { firebaseApp } from "../../utils/firebase/firebase.utils";

export const handleSaveOrder = order => {
    return new Promise((resolve, reject) => {
        firebaseApp
        .collection('order')
        .doc()
        .set(order)
        .then(() => {
            resolve();
        })
        .catch(err => {
            reject(err);
        })
    })
}