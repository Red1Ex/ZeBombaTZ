addEventListener("DOMContentLoaded", function(){
    const character = document.querySelector('.character');
    const unButton = document.querySelector('.toUniversity');
    const leftArrow = document.querySelector('.leftArrow');
    const rightArrow = document.querySelector('.rightArrow');
    const sliderTrack = document.querySelector('.sliderTrack');
    const ratingButton = document.querySelector('.rating');
    const ratingWindow = document.querySelector('.ratingWindow');
    const closeButton = document.querySelector('.closeButton');
    const listBody = document.querySelector('.listBody');
    const dopBack = document.querySelector('.dopBack');

    const checkPoints = [
        {top: "-30px", left: "-95px"},
        {top: "10px", left: "-170px"},
        {top: "30px", left: "-255px"},
        {top: "0px", left: "-335px"},
        {top: "-60px", left: "-320px"},
    ];

    let curentPoint = 0;

    unButton.addEventListener("click", function(){
        if (curentPoint < checkPoints.length){
            character.style.top = checkPoints[curentPoint].top;
            character.style.left = checkPoints[curentPoint].left;
            curentPoint ++;
        }
    })

    rightArrow.addEventListener("click", function(){
        sliderTrack.scrollBy({left: 120, behavior: "smooth" });
    });

    leftArrow.addEventListener("click", function(){
        sliderTrack.scrollBy({left: -120, behavior: "smooth"});
    });

    ratingButton.addEventListener('click', function(){
        ratingWindow.style.display = "block";
        dopBack.style.display= "block";
        ratingList();
    });

    closeButton.addEventListener('click', function(){
        ratingWindow.style.display = "none";
        dopBack.style.display = "none";
    });

    function ratingList(){
        
        listBody.innerHTML = '';
        const dataCells = data.rating;
        const friends = data.friends;

        dataCells.sort((a , b) => b.points - a.points);

        dataCells.forEach ((entry, index) =>{
            const row = document.createElement('div');
            row.classList.add('listPar');
            const cell = document.createElement('p');
            cell.classList.add('place');
            cell.textContent = index + 1;
            const cellName = document.createElement('p');
            cellName.classList.add('FI')
            cellName.textContent = entry.name + " " + entry.lastName;
            if (friends.some(friend => friend.id === entry.id)){
                row.classList.add('listFriend');
            }
            const cellPoints = document.createElement('p');
            cellPoints.textContent = entry.points;
            cellPoints.classList.add('points');
            row.appendChild(cell);
            row.appendChild(cellName);
            row.appendChild(cellPoints);
            listBody.appendChild(row);
        });
    }
});