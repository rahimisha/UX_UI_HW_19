$("#cssSelector").on("click", function(){
    const li = document.querySelectorAll('li');
    lis.forEach((li) => {
      li.style.setProperty('--li-background-color', '#00ff00');
    });
})
