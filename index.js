
function superbowlWin(record) {
    const win = record.find(game => game.result === "W");
    return win ? win.year : undefined;
  }
  

  const record = [
    { year: "2015", result: "W" },
    { year: "2014", result: "N/A" },
    { year: "2013", result: "L" },
    { year: "1998", result: "W" },
    { year: "1997", result: "W" }
  ];
  
  console.log(superbowlWin(record));
  