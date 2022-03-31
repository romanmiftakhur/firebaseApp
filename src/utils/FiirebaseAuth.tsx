import auth from '@react-native-firebase/auth';

export const SignUp = (email: string, password: string) => {
    return new Promise((resolve, reject) => {
        auth().createUserWithEmailAndPassword(email, password).then(() => {
            resolve("Sign up successfully");
        }).catch(error => {
            reject(error);
        });
    });
};