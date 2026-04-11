async function loadPrices() {
  try {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin,ethereum&vs_currencies=usd&include_24hr_change=true"
    );
    const data = await res.json();

    const btc = data.bitcoin.usd;
    const eth = data.ethereum.usd;

    document.getElementById("btc").innerText = `$${btc.toLocaleString()}`;
    document.getElementById("eth").innerText = `$${eth.toLocaleString()}`;

    document.getElementById("btc-table").innerText = `$${btc.toLocaleString()}`;
    document.getElementById("eth-table").innerText = `$${eth.toLocaleString()}`;

    document.getElementById("btc-change").innerText =
      data.bitcoin.usd_24h_change.toFixed(2) + "%";

    document.getElementById("eth-change").innerText =
      data.ethereum.usd_24h_change.toFixed(2) + "%";

  } catch (e) {
    console.error("Price load failed", e);
  }
}

loadPrices();
setInterval(loadPrices, 30000);
