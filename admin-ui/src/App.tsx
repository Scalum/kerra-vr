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
import { MediumList } from "./medium/MediumList";
import { MediumCreate } from "./medium/MediumCreate";
import { MediumEdit } from "./medium/MediumEdit";
import { MediumShow } from "./medium/MediumShow";
import { ProjectList } from "./project/ProjectList";
import { ProjectCreate } from "./project/ProjectCreate";
import { ProjectEdit } from "./project/ProjectEdit";
import { ProjectShow } from "./project/ProjectShow";
import { ConstituencyList } from "./constituency/ConstituencyList";
import { ConstituencyCreate } from "./constituency/ConstituencyCreate";
import { ConstituencyEdit } from "./constituency/ConstituencyEdit";
import { ConstituencyShow } from "./constituency/ConstituencyShow";
import { CountyList } from "./county/CountyList";
import { CountyCreate } from "./county/CountyCreate";
import { CountyEdit } from "./county/CountyEdit";
import { CountyShow } from "./county/CountyShow";
import { RegionList } from "./region/RegionList";
import { RegionCreate } from "./region/RegionCreate";
import { RegionEdit } from "./region/RegionEdit";
import { RegionShow } from "./region/RegionShow";
import { ProjectHasCountyList } from "./projectHasCounty/ProjectHasCountyList";
import { ProjectHasCountyCreate } from "./projectHasCounty/ProjectHasCountyCreate";
import { ProjectHasCountyEdit } from "./projectHasCounty/ProjectHasCountyEdit";
import { ProjectHasCountyShow } from "./projectHasCounty/ProjectHasCountyShow";
import { ProjectHasConstituencyList } from "./projectHasConstituency/ProjectHasConstituencyList";
import { ProjectHasConstituencyCreate } from "./projectHasConstituency/ProjectHasConstituencyCreate";
import { ProjectHasConstituencyEdit } from "./projectHasConstituency/ProjectHasConstituencyEdit";
import { ProjectHasConstituencyShow } from "./projectHasConstituency/ProjectHasConstituencyShow";
import { ProjectHasRegionList } from "./projectHasRegion/ProjectHasRegionList";
import { ProjectHasRegionCreate } from "./projectHasRegion/ProjectHasRegionCreate";
import { ProjectHasRegionEdit } from "./projectHasRegion/ProjectHasRegionEdit";
import { ProjectHasRegionShow } from "./projectHasRegion/ProjectHasRegionShow";
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
        title={"My app"}
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
          name="Medium"
          list={MediumList}
          edit={MediumEdit}
          create={MediumCreate}
          show={MediumShow}
        />
        <Resource
          name="Project"
          list={ProjectList}
          edit={ProjectEdit}
          create={ProjectCreate}
          show={ProjectShow}
        />
        <Resource
          name="Constituency"
          list={ConstituencyList}
          edit={ConstituencyEdit}
          create={ConstituencyCreate}
          show={ConstituencyShow}
        />
        <Resource
          name="County"
          list={CountyList}
          edit={CountyEdit}
          create={CountyCreate}
          show={CountyShow}
        />
        <Resource
          name="Region"
          list={RegionList}
          edit={RegionEdit}
          create={RegionCreate}
          show={RegionShow}
        />
        <Resource
          name="ProjectHasCounty"
          list={ProjectHasCountyList}
          edit={ProjectHasCountyEdit}
          create={ProjectHasCountyCreate}
          show={ProjectHasCountyShow}
        />
        <Resource
          name="ProjectHasConstituency"
          list={ProjectHasConstituencyList}
          edit={ProjectHasConstituencyEdit}
          create={ProjectHasConstituencyCreate}
          show={ProjectHasConstituencyShow}
        />
        <Resource
          name="ProjectHasRegion"
          list={ProjectHasRegionList}
          edit={ProjectHasRegionEdit}
          create={ProjectHasRegionCreate}
          show={ProjectHasRegionShow}
        />
      </Admin>
    </div>
  );
};

export default App;
