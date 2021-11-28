
async function getData(lowerNum) {
    let request = await fetch("https://61a32591014e1900176dead9.mockapi.io/users");
    if (request.ok) {
        let data = await request.json();
        let element = document.getElementById("tableData");
        element.innerHTML = "";

        if (lowerNum === 0) {
            document.getElementById("firstPage").style.display = "none";
            document.getElementById("prevPage").style.display = "none";
            document.getElementById("nextPage").style.display = "";
            document.getElementById("lastPage").style.display = "";
        }
        else if(lowerNum >= 10 && lowerNum < 40){
            document.getElementById("firstPage").style.display = "";
            document.getElementById("prevPage").style.display = "";
            document.getElementById("nextPage").style.display = "";
            document.getElementById("lastPage").style.display = "";
        }
        else if(lowerNum === 40){
            document.getElementById("firstPage").style.display = "";
            document.getElementById("prevPage").style.display = "";
            document.getElementById("nextPage").style.display = "none";
            document.getElementById("lastPage").style.display = "none";
        }

        for (let i = lowerNum; i < lowerNum + 10; i++) {
            element.innerHTML += `
                <tr>
                    <td>${data[i].id}</td>
                    <td>${data[i].name}</td>
                    <td>${data[i].createdAt}</td>
                </tr>
            `
        }
    }
}

let currPage = 0;
function firstPage() {
    getData(0);
}
firstPage();

function lastPage() {
    getData(40);
}

function nextPage() {
    currPage += 10;
    getData(currPage);
}

function prevPage() {
    currPage -= 10;
    getData(currPage);
}