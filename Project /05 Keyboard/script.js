const insert = document.querySelector("#insert");
document.body.addEventListener("keyup", (e) => {
  insert.innerHTML = `<table class="color">
          <tr>
            <th>Key</th>
            <th>KeyCode</th>
            <th>KeyName</th>
          </tr>
          <tr>
            <td>${e.key == " " ? "space" : e.key}</td>
            <td>${e.keyCode}</</td>
            <td>${e.code}</td>
          </tr>
         
        </table>`;
});
