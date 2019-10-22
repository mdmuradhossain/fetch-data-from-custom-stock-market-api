const getCompany = document.getElementById("getCompany");

getCompany.addEventListener('click', fetchCompanies);

function fetchCompanies() {
    fetch('http://localhost:8080/api/companies')
        .then((res) => res.json())
        .then((data) => {
            let output = '';
            data.forEach((company) => {

                output +=
                    `<tr>
                    <td>${company.tradingCode}</td>
                    <td>${company.companyName}</td>
                    <td>${company.price}</td>
                    <td>${company.change}</td>
                    </tr>`;

            });
            document.getElementById("output").innerHTML = output;
        });
}