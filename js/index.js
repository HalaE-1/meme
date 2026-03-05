//https://api.imgflip.com/get_memes
let btn = document.querySelector("#button");
let input = document.querySelector("#input");
let appear = document.querySelector("#mem");

btn.addEventListener("click", () => {
  let value1 = input.value.trim();
  let value = Number(value1);

  if (value < 1 || value > 99 || Number.isNaN(value)) {
    appear.innerHTML = "NOT FOUND !";
    return;
  }

  async function get_memes() {
    try {
      const res = await fetch("https://api.imgflip.com/get_memes");
      const data = await res.json();

      const memes = data.data.memes;    
      const index = value       
      const choose = memes[index];      

      appear.innerHTML = `<img src="${choose.url}" 
      class="img-fluid rounded mt-4"
       style="max-width:284px;" height:auto >`;
    } catch (e) {
      appear.innerHTML = "ERROR";
      console.log(e);
    }
  }

  get_memes();
});
