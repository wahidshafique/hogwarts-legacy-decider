import { isBrowser } from "framer-motion";

const LOCAL_ID = "hp-decider";

const isValidJson = (json: string) => {
  try {
    JSON.parse(json);
  } catch (e) {
    return false;
  }
  return true;
};

// store data but with an expiration date, it only expires when user visits site again after some time
const setLocalStoreUserId = (s: string) => {
  if (isBrowser) {
    localStorage?.setItem(
      LOCAL_ID,
      JSON.stringify({
        value: s,
      })
    );
  }
};

// how uuid is gen  https://stackoverflow.com/questions/105034/how-do-i-create-a-guid-uuid
function uuidv4() {
  if (isBrowser) {
    // @ts-ignore
    return ([1e7] + -1e3 + -4e3 + -8e3 + -1e11).replace(/[018]/g, (c) =>
      (
        c ^
        (crypto.getRandomValues(new Uint8Array(1))[0] & (15 >> (c / 4)))
      ).toString(16)
    );
  }
}

const getLocalStoreUserId = () => {
  // get the id, only if it has not expired (spot checked here)
  if (isBrowser) {
    const localStoreJson = localStorage.getItem(LOCAL_ID);
    if (!localStoreJson) {
      return null;
    }

    const localStoreObj = isValidJson(localStoreJson)
      ? JSON.parse(localStoreJson)
      : {};

    return localStoreObj.value;
  }
};

const sessionInit = () => {
  if (isBrowser) {
    // we always gen a new session on init, sessions are transient
    window.session_id = uuidv4();
    let tmpUserId = getLocalStoreUserId();
    // this means user is a on first play thru
    if (!tmpUserId) {
      tmpUserId = uuidv4();
      setLocalStoreUserId(tmpUserId);
    }
    window.user_id = tmpUserId;
  }
};

export { sessionInit };
