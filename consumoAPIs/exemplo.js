async function carregarUsuarios() {
  try {
    const resposta = await fetch("https://jsonplaceholder.typicode.com/users");
    const usuarios = await resposta.json();
    const lista = document.getElementById("listaUsuarios");
    lista.innerHTML = ""; // limpa lista

    for (let i = 0; i < usuarios.length; i++) {
      const li = document.createElement("li");
      li.textContent = `${usuarios[i].name} - ${usuarios[i].email}`;
      lista.appendChild(li);
    }
  } catch (erro) {
    console.error("Erro ao carregar usuários:", erro);
    alert("Não foi possível carregar os dados da API.");
  }
}