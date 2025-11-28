const url = "http://localhost:3000/api/data";

window.onload = function () {
  refreshData();
}

function refreshData() {

  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      console.log("DATA POSGRES:", data);
      dataList = data;
      renderTable(dataList);
    })
    .catch((err) => {
      console.error("Error fetch:", err);
      alert("FAILED GET DATA FROM DATABASE");
    })
    .finally(() => {
    });
}

function renderTable(data) {
  const tbody = document.getElementById("data-body");
  tbody.innerHTML = "";

  data.forEach((item, index) => {
    const row = `
      <tr>
        <td>${index + 1}</td>
        <td>${item.agent}</td>
        <td>${item.driver}</td>
        <td>${item.bank}</td>
        <td>${item.serial}</td>
        <td>${item.note || ""}</td>
        <td>${item.server}</td>
        </tr>
    `;
    tbody.innerHTML += row;
  });
}

function cariData(){
 const keyword = 
 document.getElementById("cari").value.toLowerCase().trim();
 const hasil = dataList
 .map((item, index) => ({ ...item, originalIndex: index }))
 .filter(
  (item) =>
  item.device.toLowerCase().includes(keyword) || 
  item.nama.toLowerCase().includes(keyword) );
  renderTable(hasil, true);
}

window.onload = refreshData;