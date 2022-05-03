import axios from "axios";

const INTENTION_GET_ALL_URL = 'http://localhost:8080/api/rest/intention/get-all-intentions';
const INTENTION_GET_ONE_BY_ID_URL = 'http://localhost:8080/api/rest/intention/get-one/';

class IntentionService {

    getAllIntentions() {
        return axios.get(INTENTION_GET_ALL_URL);
    }

    getOneIntentionById(intentionId) {
        return axios.get(INTENTION_GET_ONE_BY_ID_URL + intentionId);
    }
}
export default new IntentionService();