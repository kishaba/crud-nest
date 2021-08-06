import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ProductInput {
  @Field({ nullable: true })
  id: number;
  @Field()
  product: string;
  @Field()
  price: number;
}
