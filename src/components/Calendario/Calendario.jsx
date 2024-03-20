
export default function DataSp () {
    const saoPauloTimezoneOffset = -3 * 60;
    const currentDateTime = new Date();
    const saoPauloDate = new Date(currentDateTime.getTime() + saoPauloTimezoneOffset * 60000)
    saoPauloDate.setDate(saoPauloDate.getDate() + 7) 
    return saoPauloDate
  }