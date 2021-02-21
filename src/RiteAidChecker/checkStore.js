const RITE_AID_URL = 'https://www.riteaid.com/services/ext/v2';
const RITE_AID_VACCINE_PATH = 'vaccine/checkSlots';

export default async function checkStore(storeId) {
  const fetchUrl = `${RITE_AID_URL}/${RITE_AID_VACCINE_PATH}?storeNumber=${storeId}`;

  const response = await fetch(fetchUrl, { method: 'GET' });

  if (response.ok) {
    const responseJson = await response.json();

    if (responseJson.Status !== 'SUCCESS') {
      throw new Error(responseJson.ErrMsg);
    }

    return responseJson.Data.slots['1'];
  }
}
