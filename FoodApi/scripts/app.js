const cariMakanan = async (e) => {
    e.preventDefault();
  
    // Menyeleksi elemen
    const input = $(".input");
    const judul = $(".judul");
    const info = $(".info");
    const img = $(".img");
    const bahanbakuOutput = $(".bahan-baku");
  
    const tampilkanInfoMakanan = (meal) => {
      const { strMeal, strMealThumb, strInstructions } = meal;
      judul.text(strMeal);
      img.css("background-image", `url(${strMealThumb})`);
      info.text(strInstructions);
  
      const bahanBaku = [];
  
      for (let i = 1; i <= 20; i++) {
        if (meal[`strIngredient${i}`]) {
          bahanBaku.push(
            `${meal[`strIngredient${i}`]} - ${meal[`strMeasure${i}`]}`
          );
        } else {
          break;
        }
      }
  
      const html = `
        <span>${bahanBaku
          .map((ing) => `<li class="ing">${ing}</li>`)
          .join("")}</span>
        `;
  
      bahanbakuOutput.html(html);
    };
  
    const showAlert = () => {
      alert("Makanan tidak ada : (");
    };
  
    //fetch data
    const fetchMealData = async (val) => {
      try {
        const response = await $.ajax({
          url: `https://www.themealdb.com/api/json/v1/1/search.php?s=${val}`,
          method: 'GET',
          dataType: 'json'
        });
        return response.meals;
      } catch (error) {
        console.error("Error fetching data:", error);
        return null;
      }
    };
  
    //Get value
    const val = input.val().trim();
  
    if (val) {
      const meals = await fetchMealData(val);
  
      if (!meals) {
        showAlert();
        return;
      }
  
      meals.forEach(tampilkanInfoMakanan);
    } else {
      alert("Coba cari kembali !");
    }
  };
  
  $("form").submit(cariMakanan);
  
  $(".magnifier").click(cariMakanan);
  