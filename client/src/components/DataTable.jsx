import React from "react";
import MaterialTable from "material-table";
import { ThemeProvider, createTheme } from "@mui/material";

const DataTable = ({ columns, data, title, actions }) => {
  const defaultMaterialTheme = createTheme();
  return (
    <ThemeProvider theme={defaultMaterialTheme}>
      <MaterialTable
        columns={columns}
        data={data}
        title={title}
        actions={actions}
      />
    </ThemeProvider>
  );
};

// export default DataTable;
// import React, { useEffect, useState } from "react";
// import MaterialTable from "material-table";
// import { ThemeProvider, createTheme } from "@mui/material";

// const DataTable = ({ columns, fetchData, title, actions }) => {
//   const defaultMaterialTheme = createTheme();
//   const [data, setData] = useState([]);

//   useEffect(() => {
//     // Call the fetchData function to get the data
//     if (fetchData) {
//       fetchData().then((result) => {
//         setData(result);
//       });
//     }
//   }, [fetchData]);

//   return (
//     <ThemeProvider theme={defaultMaterialTheme}>
//       <MaterialTable
//         columns={columns}
//         data={data}
//         title={title}
//         actions={actions}
//       />
//     </ThemeProvider>
//   );
// };

export default DataTable;
