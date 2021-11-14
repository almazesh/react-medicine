import Schedual from '../schedule.json'
const base_url = Schedual;

export const API = {
    get: () => {
        return base_url
    }
}