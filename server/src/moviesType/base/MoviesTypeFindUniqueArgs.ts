/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { ArgsType, Field } from "@nestjs/graphql";
import { MoviesTypeWhereUniqueInput } from "./MoviesTypeWhereUniqueInput";

@ArgsType()
class MoviesTypeFindUniqueArgs {
  @Field(() => MoviesTypeWhereUniqueInput, { nullable: false })
  where!: MoviesTypeWhereUniqueInput;
}

export { MoviesTypeFindUniqueArgs };
