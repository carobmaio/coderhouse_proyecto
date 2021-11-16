const url = "https://jsonplaceholder.typicode.com/posts/";

$.get(url, function (res, status) {
  if (status === "success") {
    $(".texto-cargando-comentarios").remove();
    res.slice(0, 6).forEach((item) => {
      $(`<div class="comentario">
      <h4>${item.title}</h4>
      <p>${item.body}</p>
  </div>`)
        .appendTo(".comentarios-container")
        .slideDown();
    });
  } else {
    $(".texto-cargando-comentarios").text("Error al cargar comentarios.");
  }
});
