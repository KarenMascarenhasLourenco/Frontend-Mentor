fetch("data.json") //seach for the data.json file
  .then((response) => response.json()) //transform the response in a JS object
  .then((data) => {
    const barChart = document.querySelectorAll(".day-chart div");
    const chartDiv = document.getElementById("week-days");
    const heightDiv = chartDiv.clientHeight;
    const spanLegend = document.querySelectorAll('span')

    const days = [];
    const amounts = [];
    data.forEach((item) => {
      days.push(item.day);
      amounts.push(item.amount);
    });
    const maxAmount = Math.max(...amounts);
    const barHeightRatio = (heightDiv*.6) / maxAmount;
    for (let i = 0; i < amounts.length; i++) {
        const height = amounts[i] * barHeightRatio;
        barChart[i].style.height = height + "px";
        spanLegend[i].textContent = amounts[i];
        
        if(amounts[i] == maxAmount) {
            console.log(amounts[i], maxAmount);
            barChart[i].classList.add('max-amount');
        }
    }
    
  })
  .catch((error) => console.error(error));