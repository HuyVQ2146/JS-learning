/*
fetch = Hàm được sử dụng để thực hiện các yêu cầu HTTP để lấy tài nguyên.
        (Dữ liệu kiểu JSON, hình ảnh, tệp tin)
        Đơn giản hóa việc lấy dữ liệu bất đồng bộ trong JavaScript và
        được sử dụng để tương tác với các API nhằm lấy và gửi
        dữ liệu một cách bất đồng bộ qua web.
        fetch(url, {options})
*/
async function fetchData(){
    try{
        
        const pokemonName = document.getElementById("pokemonName").value.toLowerCase();
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);
    
        if (!response.ok) {
            throw new Error("Count not fetch resource.");
        }
    
        const data = await response.json();
        // lấy data của pokemon
        const pokemonSprite = data.sprites.front_default;
        // cái này lấy giá trị bình thường thôi (ở đây là ảnh pokemon)
        const imgElement = document.getElementById("pokemonSprite");

        imgElement.src = pokemonSprite;
        imgElement.style.display = "block";
    }
    catch(err){
        console.error("Error: ", err);
    }
}
