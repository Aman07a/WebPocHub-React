import axios from "axios";

class EmployeesService {
    #_baseUrl = "https://localhost:7274/api";

    async getAllEmployees() {
        return await (
            await axios.get(`${this.#_baseUrl}/employees`, {
                headers: {
                    "Authorization": "Bearer eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFiYWRlLnByYXZpbmt1bWFyQHdlYnBvY2h1Yi5jb20iLCJyb2xlIjoiRW1wbG95ZWUiLCJuYmYiOjE2NzYzMDA2MzQsImV4cCI6MTY3NjMwNDIzNCwiaWF0IjoxNjc2MzAwNjM0fQ.4zQxpD7-OXNunQLF0MZBcNo0u9vQzZNisoLfxnOJdj17j34COUzewEmNFPWHxAoF4hu09yKdGh3diFaqZXHFAA"
                }
            })
        ).data;
    }
}

export default new EmployeesService();