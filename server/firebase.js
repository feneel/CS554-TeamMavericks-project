var admin = require("firebase-admin");
const { getFirestore, Timestamp, FieldValue } = require('firebase-admin/firestore');
const { getStorage } = require('firebase-admin/storage');


// Fetch the service account key JSON file contents
require('dotenv').config()

//var serviceAccount = require("./instabuzz-325f2-firebase-adminsdk-t7kea-2494f3ce27.json");
//var serviceAccount = process.env.SERVICE_APP
var serviceAccount = {
    "type": "service_account",
    "project_id": "instabuzz-325f2",
    "private_key_id": "2494f3ce27a578dec545be0640792de71356a077",
    "private_key": "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQDBWp3FXSU5AvsP\nqOIYSzCDIxd9TfZzvZrlT5TKdrRXQHAuff+IW2DfQWddcmZZob1ywkywloDXsMni\nujrA+yJkaBPsgloeg8WNb7G6+ZmDAuWVFPmcBEolxHj8yGK2VNysJdihaepm9iJZ\nnqc4g2lTRwqQ/EFloyJEBTtdECzkxGhU0+ZqsOZFdLT7+dav1uzagUn9HcfC6GIe\nrlLpOk0TOR6JGc0iNgLDbL3rJliRAuy67C3uyZ6D6j0iA+OlJMSTNM6+taAvKDlH\nnDjTqjNVYu7TBMRlX+fc38rrcxRKK0Q+FoDGsUxH7OtmhbSAgkihgDjvWq8pSefG\nbDio4grnAgMBAAECggEACHfFpsHxt4xOtCddy4Q+JNLHHGjrLQjLPVVdu1Df4ghY\n7A2plhkGZjtQ4byjszOMU/fNcFhkXniIHEKyqwafQXggveq8M/o/uct/+aPPxMyT\ngxLEQcBwV4oXZbQIRVr0aneig/iFrapZjm+OfEDzvmlt6DPxUJhd5PkOWgDeLnXr\nbKHKo7JrwiQ3gfZ3cmRRNVPUEemQDogAEER3nWR3UBKl6L/Wf5haUw+TbVFGyV6M\nzd9GSlKobcFpAwnxsboJpPX9KCWIZJ5n7Nm+SB/xhWx4/ln/vev0jpxPHBi4+IdN\n5Fu7wocZbZODrBnjazSi9ZRHBS7jvtsN2mC/sgkyCQKBgQDhTiZPFCsNddPqxu3O\n8aMIsvH9G2j8Vg8pHyHnzZHdSQBO5aUpgz7vEXMCCzD2kkP1r7DgedxcX40p+Z3S\n771vpu4NLdJohKKJO9wWx9uzF41XYzPBBWY+nqajp608Yv58gKWdBm5GsIGiNy8p\nSY6Dq/U8T3ND9aWdhOwTTwaYiQKBgQDbsh5K5nX1qNiU+PKiD2tj7RNJN9cjCNPv\n2cHqS6bT5/TghSM2krbdZiPomZizmBWDAppDowPB3CGag2ysrYThkPXNdhFqhccQ\nApA9O25DWWF75EYlQreSF2vTSF3LEQbV5HOwTsaWChjkwfd2Ox/gLHM5BuaT6Vi9\nTnvnFV3L7wKBgQDbMVulzZpBAyQDojtT/NO/L9CrjNIrxFIFkKs8yEsjfNUW7OYt\nJ+m/TjuUfmzJRe1mBeJP0V6oY7GDZ7y6rdCf4khwe+bbFkbGunzZkODWMJCqtvFv\n1R/uxgya5RNtz2WEnOgCh3IbxbaoqYVxZoWG5nG0lhsuv7q7L8k408Y3+QKBgDBW\n3Lt2QfYvlJgSvrBR3Ds8asXtd3TJ+HgJ3dUDmE1/+C1+neTgG0RTuQrw4NyDVhhh\ndjfzolwBZ5Nr33mPJHHNR4hRtjtN/CLVrY8LiJNhE0YDUDvaljGa3aq7fYe002A0\nyA+/BYr15cxPsXdeQwE8Ro4BqrJY4aGlpzWNSfoZAoGBAKAT2H8WlujFfHcRPrc6\nQCLmThnlON6GMaAQ/8udhTWHpdwFX+OwlIbatwp90ZE2YTbz/LeF9/fyGXyt+CS8\nB2N8Gh8EUERh5AOscSOlSJD8YOsXEEdno/r2K24Q3nntm/IllH6jn5plED6m6k3N\nAQ7D370l0doxfHaQpTgTukHQ\n-----END PRIVATE KEY-----\n",
    "client_email": "firebase-adminsdk-t7kea@instabuzz-325f2.iam.gserviceaccount.com",
    "client_id": "114632927541823888662",
    "auth_uri": "https://accounts.google.com/o/oauth2/auth",
    "token_uri": "https://oauth2.googleapis.com/token",
    "auth_provider_x509_cert_url": "https://www.googleapis.com/oauth2/v1/certs",
    "client_x509_cert_url": "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-t7kea%40instabuzz-325f2.iam.gserviceaccount.com"
  }
// Initialize the app with a service account, granting admin privileges
admin.initializeApp({
  //credential: admin.credential.cert(JSON.parse(serviceAccount)),
  credential: admin.credential.cert(serviceAccount),
  // The database URL depends on the location of the database
  databaseURL: "https://instabuzz-325f2-default-rtdb.firebaseio.com",
  storageBucket:`instabuzz-325f2.appspot.com`
});


const firestore = getFirestore();
const storage = getStorage().bucket();

module.exports = { firestore, storage };