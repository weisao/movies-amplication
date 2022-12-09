import * as React from "react";
import { Create, SimpleForm, CreateProps, TextInput } from "react-admin";

export const MovieCreate = (props: CreateProps): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <TextInput label="Describe" multiline source="describe" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Create>
  );
};
