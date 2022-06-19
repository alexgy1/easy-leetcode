const baseURL = 'https://leetcode.com/problems/';
const tagName = '打开leetcode';
function handleDatas(arr) {
  return arr.map((a) => {
    a.openUSUrl = baseURL + a.titleSlug;
    a.status = false;
    return a;
  });
}

function renderTable(arr, renderNumber = 100) {
  const table = document.createElement('table');
  const head = renderheader();
  table.innerHTML += head;

  const tbody = arr.slice(0, renderNumber).map((obj) => {
    return `  
      <tr>
      <td>${obj.questionId}</td>
      <td>${obj.title}</td>
      <td> <a href = "${obj.openUSUrl}"> ${tagName} </a> </td>
      <td>${obj.status}</td>
    </tr>
    `;
  });
  table.innerHTML += tbody.join('');
  return table;
}
function renderheader() {
  return `<tr>
      <th>Id</th>
      <th>Name</th>
      <th>URL</th>
      <th> Status </th>
    </tr>`;
}

function render() {
  const allQuestions = handleDatas(problems.data.allQuestionsRaw);
  const tableUI = renderTable(allQuestions);
  document.body.appendChild(tableUI);
}
window.onload = render;
