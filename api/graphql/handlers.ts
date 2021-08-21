interface Quote {
  id: string
  source: string
  text: string
}

interface CreateQuoteInput {
  source: string
  text: string
}

let quotes: Quote[] = [
  {
    id: '1629335698593',
    source: 'Brian Johnson',
    text: 'Wherever you go, there you are.'
  },
  {
    id: '1629335712412',
    source: 'Nancy Johnson',
    text: 'Get off that damn computer!'
  }
];

export function listQuotes(): Quote[] {
  return quotes;
}

export function createQuote(_parent: any, args: { input: CreateQuoteInput }): Quote {
  const newQuote: Quote = {
    id: Date.now().toString(),
    source: args.input.source,
    text: args.input.text
  }
  quotes.push(newQuote);
  return newQuote;
}

export function deleteQuote(_parent: any, args: { id: string }): Quote {
  const quote = quotes.find(q => q.id === args.id);
  if (quote) {
    quotes = quotes.filter(q => q.id !== args.id);
    return quote;
  }
}