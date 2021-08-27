import { QuoteModel, Quote } from './models';

export async function listQuotes() {
  return await QuoteModel.find();
}

export async function createQuote(_parent: any, args: { input: Quote }) {
  const quote = await QuoteModel.create(args.input);
  console.log(quote);
  return quote;
}

export async function deleteQuote(_parent: any, args: { id: string }) {
  const quote = await QuoteModel.findById(args.id);
  if (quote) {
    await quote.delete();
    return quote;
  }
}