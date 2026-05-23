import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:8000",
});

export const askQuestion = (question) =>
  API.post("/chat/", {
    question,
  });

export const compareInvestment = (
  payload
) =>
  API.post(
    "/compare/",
    payload
  );

export const generatePlan = (
  payload
) =>
  API.post(
    "/planner/",
    payload
  );

export const fetchFaqs =
  () => API.get("/faqs/");