// import { SessionContextProvider } from "@supabase/auth-helpers-react";
// import { createClient } from "@supabase/supabase-js";
// import React from "react";


// const supabase = createClient (

//     "https://rxugozvjlmvlkhabwstg.supabase.co",
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InJ4dWdvenZqbG12bGtoYWJ3c3RnIiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTgyNjI4NzQsImV4cCI6MjAxMzgzODg3NH0.1duzD_zAW9QpzNZK_djTz54qxF_XEZDZGayrYJL5bPY"

//     )


// const  root = ReactDOM.createRoot(document.getElementById('root'))
// root.reder(
//     <React.StrictMode>
//         <SessionContextProvider supabaseClient={supabase}>
//             <App />
//         </SessionContextProvider>
//     </React.StrictMode>
// )



export default function DataSp () {
    const saoPauloTimezoneOffset = -3 * 60;
    const currentDateTime = new Date();
    const saoPauloDate = new Date(currentDateTime.getTime() + saoPauloTimezoneOffset * 60000);
    saoPauloDate.setDate(saoPauloDate.getDate() + 7); 
    return saoPauloDate;
  }