import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MoviesTypeCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Remark" source="remark" />
        <TextInput label="Typename" source="typename" />
      </SimpleForm>
    </Create>
  );
};
