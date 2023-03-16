const button: HTMLButtonElement = document.getElementById("new-advice") as HTMLButtonElement;

function getAdvice(): void {
  fetch("https://api.adviceslip.com/advice")
    .then((response: Response) => response.json()) //converts the response to a json
    .then((data: { slip: { advice: string; id: number } }) => {
      const advice: string = data.slip.advice;
      const adviceId: number = data.slip.id;
      document.getElementById("advice")!.textContent = ` ${advice} `;
      document.querySelector("h1")!.textContent = `ADVICE #${adviceId}`;
    })
    .catch((error: Error) => {
      console.error(error);
    });
}

document.addEventListener("DOMContentLoaded", getAdvice); //for the first advice
button.addEventListener("click", getAdvice);
