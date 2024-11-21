const urlParams = new URLSearchParams(window.location.search);
const username = urlParams.get('username');

if (username) {
    document.querySelector('.header span').textContent = username;
}

function searchTable() {
    let input = document.getElementById('searchInput');
    let filter = input.value.toLowerCase();
    let table = document.getElementById('dataTable');
    let trs = table.getElementsByTagName('tr');

    for (let i = 1; i < trs.length; i++) {
        let td = trs[i].getElementsByTagName('td');
        let found = false;

        for (let j = 0; j < td.length; j++) {
            if (td[j].textContent.toLowerCase().indexOf(filter) > -1) {
                found = true;
                break;
            }
        }

        if (found) {
            trs[i].style.display = '';
        } else {
            trs[i].style.display = 'none';
        }
    }
}