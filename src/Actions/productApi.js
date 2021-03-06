import axios from "axios";

const baseUrl = 'http://localhost:3500/'

export default {

    product(url = baseUrl + 'product/') {
        return {
            fetchAll: () => axios.get(url),
            create: newRecord => axios.post(url, newRecord),
            update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
            delete: id => axios.delete(url + id)
        }
    }

}
