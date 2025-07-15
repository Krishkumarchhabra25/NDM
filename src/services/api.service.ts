import type { Article } from "../types/article.types";
import type { CreateSubscriberRequest, Subscriber } from "../types/Subscribe.types";
import type { Video } from "../types/video.types";
import api from "./BaseUrl/axiosConfig";

export const getAllArticle = async (): Promise<Article[]> => {
  const response = await api.get<{ data: Article[] }>("/article/getAll-article");
  return response.data.data;
};
// ✅ Fix this to return a single Article
export const getAllArticleById = async (id: string): Promise<Article> => {
  const response = await api.get<{ data: Article }>(`/article/get-articleIncrement/${id}`);
  return response.data.data;
};

export const getAllVideos = async (): Promise<Video[]> => {
  const response = await api.get<{ data: Video[] }>("/video/getall-videos");
  return response.data.data;
};

export const subscribeUser = async (
  payload: CreateSubscriberRequest
): Promise<Subscriber> => {
  const response = await api.post<Subscriber>(
    "/subscribe/create-subscribe",
    payload,
    {
      headers: {
        "Content-Type": "application/json",
      },
    }
  );
  return response.data;
};