import admin from 'firebase-admin'

// get this JSON from the Firebase board
// you can also store the values in environment variables
import serviceAccount from './serviceKey.json';

// const credential = JSON.parse(
//     Buffer.from(process.env.NEXT_PUBLIC_GOOGLE_APPLICATION_CREDENTIALS, 'base64').toString()
// );

if (!admin.apps.length) {
    admin.initializeApp({
        credential: admin.credential.cert({
          privateKey: serviceAccount.private_key,
          clientEmail: serviceAccount.client_email,
          projectId: serviceAccount.project_id,
        }),
        // credential: firebaseAdmin.credential.cert(credential),
        // databaseURL: process.env.NEXT_PUBLIC_FIREBASE_DATABASE_URL,
        // storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
    });
}

let db = admin.firestore()

export { admin, db };
