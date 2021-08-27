import { prop, getModelForClass } from '@typegoose/typegoose';

export class Quote {
  @prop({ required: true })
  public source!: string;

  @prop({ required: true })
  public text!: string;
}
export const QuoteModel = getModelForClass(Quote);