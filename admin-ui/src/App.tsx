import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { UserList } from "./user/UserList";
import { UserCreate } from "./user/UserCreate";
import { UserEdit } from "./user/UserEdit";
import { UserShow } from "./user/UserShow";
import { MovieList } from "./movie/MovieList";
import { MovieCreate } from "./movie/MovieCreate";
import { MovieEdit } from "./movie/MovieEdit";
import { MovieShow } from "./movie/MovieShow";
import { MoviesTypeList } from "./moviesType/MoviesTypeList";
import { MoviesTypeCreate } from "./moviesType/MoviesTypeCreate";
import { MoviesTypeEdit } from "./moviesType/MoviesTypeEdit";
import { MoviesTypeShow } from "./moviesType/MoviesTypeShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"My service"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="User"
          list={UserList}
          edit={UserEdit}
          create={UserCreate}
          show={UserShow}
        />
        <Resource
          name="Movie"
          list={MovieList}
          edit={MovieEdit}
          create={MovieCreate}
          show={MovieShow}
        />
        <Resource
          name="MoviesType"
          list={MoviesTypeList}
          edit={MoviesTypeEdit}
          create={MoviesTypeCreate}
          show={MoviesTypeShow}
        />
      </Admin>
    </div>
  );
};

export default App;
