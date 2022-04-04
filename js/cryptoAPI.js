class Crypto {
  constructor() {
    this.api = "5af10bc9ae45d9f26ff525a5b2a9260990611025";
  }

  // query the api
 async query(typeOfMoney, currency) {
    // building url
    let url = `https://api.nomics.com/v1/currencies/ticker?key=${this.api}&ids=${currency}&interval=1h,1d,7d,30d&convert=${typeOfMoney}`;
    //fetch url
   let response=await fetch(url)
    //get json method
    response=await response.json();
    return {
      response,
    };
  }
}
