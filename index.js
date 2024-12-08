//function superbowlWin()
  function superbowlWin (records) {
    const record = [
        { year: "2015", result: "W"},
        { year: "2014", result: "N/A"},
        { year: "2013", result: "L"},
      ]
      for (let i = 0; i < records.length; i++) {
        if(records[i].result === "W") {
            return records[i].year;
          }
            else {
            console.log("undefined");
            }
      }
      
      }
  