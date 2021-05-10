import * as admin from 'firebase-admin';

admin.initializeApp({
    credential: admin.credential.applicationDefault(),
    databaseURL: 'https://tracnghiem-e88a0-default-rtdb.firebaseio.com'
  });
//   var defaultAuth = defaultApp.auth();
//   var defaultDatabase = defaultApp.database();
  
//   // ... or use the equivalent shorthand notation
//   defaultAuth = admin.auth();
//   defaultDatabase = admin.database();
// export {defaultAuth, defaultDatabase,admin as default};
export {admin as default}; 