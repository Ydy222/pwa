import axios from "axios";

export const todosReq = {
    async delete(id) {
        const res = await axios
            .delete(`https://6809e0571f1a52874cde2b14.mockapi.io/todos/${id}`);
        return res.status;
    }
}
