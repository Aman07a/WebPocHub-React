import axios from "axios";

class EmployeesService {
    #_baseUrl = "https://localhost:7274/api";
    bearerToken = "eyJhbGciOiJIUzUxMiIsInR5cCI6IkpXVCJ9.eyJuYW1lIjoiZGFiYWRlLnByYXZpbmt1bWFyQHdlYnBvY2h1Yi5jb20iLCJyb2xlIjoiRW1wbG95ZWUiLCJuYmYiOjE2NzYzNTcxNDcsImV4cCI6MTY3NjM2MDc0NywiaWF0IjoxNjc2MzU3MTQ3fQ.5GkpAm7uuhJ61ypwVkumuObP7ZsOnTFardaomBLGL6hYuEnrPhm_wDhi1HIGiwEZmt2SHGzfxFJ0-GFFt3cmog";

    async getAllEmployees() {
        return await (
            await axios.get(`${this.#_baseUrl}/employees`, {
                headers: {
                    "Authorization": `Bearer ${this.bearerToken}` 
                }
            })
        ).data;
    }
}

export default new EmployeesService();