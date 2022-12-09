import * as React from "react";
import { Edit, SimpleForm, EditProps, TextInput } from "react-admin";

export const MoviesTypeEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <TextInput label="Remark" source="remark" />
        <TextInput label="Typename" source="typename" />
      </SimpleForm>
    </Edit>
  );
};
