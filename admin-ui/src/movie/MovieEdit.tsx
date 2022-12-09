import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MovieEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Describe" multiline source="describe" />
        <TextInput label="Name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
