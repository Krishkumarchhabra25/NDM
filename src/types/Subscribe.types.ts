export interface CreateSubscriberRequest {
  name: string;
  email: string;
}

export interface Subscriber {
  _id: string;
  name: string;
  email: string;
  active: boolean;
  subscribedAt: string;
  __v: number;
}

// ✅ Fix: full response type
export interface CreateSubscriberResponse {
  message: string;
  subscriber: Subscriber;
}
