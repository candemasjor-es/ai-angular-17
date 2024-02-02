import { Injectable } from '@angular/core';
import OpenAI from 'openai';

@Injectable({
  providedIn: 'root',
})
export class OpenaiService {
  constructor() {}

  openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  chatCompletion = await openai.chat.completions.create({
    messages: [{ role: 'user', content: 'Say this is a test' }],
    model: 'gpt-3.5-turbo',
  });
}
