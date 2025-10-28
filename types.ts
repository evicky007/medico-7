
export type Sender = 'user' | 'bot';

export interface ChatMessage {
  id: string;
  text: string;
  sender: Sender;
}
