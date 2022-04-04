//class

//class ui
let ui = new Ui();

//class crypto
let crypto = new Crypto();
//listener
listener();
function listener() {
  //get button
  document.querySelector(".btn").addEventListener("click", saveData);
}

//function
function saveData(e) {
  e.preventDefault();

  //get value typeOfMoney
  let typeOfMoney = document.querySelector("#currency").value;

  //get value cryptoCurrency
  let currency = document.querySelector("#cryptoCurrency").value;

  //validation fields
  if (typeOfMoney !== "" && currency !== "") {
    //method show crypto
    crypto
      .query(typeOfMoney, currency)

      .then((result) => {
        result = result.response[0];
        ui.creatTemplate(result,typeOfMoney);
      });
  } else {
    //method display massage
    ui.printMassage(
      "deep-orange darken-4 card-panel",
      "تمام فیلدها باید تکمیل شوند"
    );
  }
}
