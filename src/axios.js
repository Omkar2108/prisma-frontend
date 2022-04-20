import axios from "axios";

export default axios.create({
    baseURL: "http://localhost:4000",
    headers: {
        "Content-Type": "application/json",
        "authorization": localStorage.getItem("authorization"),
        "user": localStorage.getItem("user")
    }
});