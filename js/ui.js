class Ui {
  constructor() {
    this.showCurrency = document.querySelector("#result");
  }
  //show massage
  printMassage(className, massage) {
    //creat tag p
    let p = document.createElement("p");
    //adding class
    p.className = className;
    // adding massage for tag p
    p.innerHTML = massage;
    //append tag p to div
    document.querySelector(".messages").appendChild(p);
    //remove massage after 3000 ms
    setTimeout(() => {
      this.removeMassage();
    }, 3000);
  }

  //removeMassage
  removeMassage() {
    //get tag p
    let p = document.querySelector(".card-panel");
    //delete tag p
    p.remove();
  }

  //creat method  html template
  creatTemplate(result, typeOfMoney) {
    if(this.showCurrency!==""){
      this.showCurrency.innerHTML=""
    }

    //Specify the type of money
    if (typeOfMoney == "USD") {
      typeOfMoney = "دلار";
    }

    if (typeOfMoney == "GBP") {
      typeOfMoney = "پوند";
    }

    if (typeOfMoney == "EUR") {
      typeOfMoney = "یورو";
    }

    //creat htmlTemplate for display price Currency
    let htmlTemplate = `
    <div class= "card cyan darken-3">
                <div class="card-content white-text">
                    <h4 class"card-title">قیمت محاسبه شده</h4>
                    <img style="width: 50px"; src="${result.logo_url}">
                    <p> به قیمت ${typeOfMoney} ${result.name}  ${result.price} : قیمت در حال حاضر </p><br/>
                    <p> ${result["1d"].price_change} : قیمت چند ساعت پیش</p>
                    <p>قیمت روز قبل : ${result["1h"].price_change} </p>
                    <p>قیمت هفته قبل : ${result["7d"].price_change}</p>
                    <p>قیمت ماه قبل : ${result["30d"].price_change}</p>
                </div>
            </div>
            `;

    this.showSpinner();
    this.showResult(htmlTemplate);
  }

  //show spinner
  showSpinner() {
    //get spinner
    let spinner = document.querySelector(".spinner");
    //creat element img
    let img = document.createElement("img");
    img.src = "../img/spinner.gif";
    //adding img to spinner
    spinner.appendChild(img);
    //remove spinner in 3000 ms
    setTimeout(() => {
      this.removeSpinner(img);
    }, 3000);
  }

  //remove spinner
  removeSpinner(img) {
    img.remove();
  }

  //show result cryptoCurrency
  showResult(htmlTemplate) {
    //show result in 3000ms
    setTimeout(() => {
      this.showCurrency.innerHTML = htmlTemplate;
    }, 3000);
  }
}
