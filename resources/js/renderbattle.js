function firstRender(yourmon, theirmon) {
    let yourhp = Math.ceil(yourmon.currenthp);
    const yourmaxhp = Math.ceil(yourmon.maxhp);
    let theirhp = Math.ceil(theirmon.currenthp);
    const theirmaxhp = Math.ceil(theirmon.maxhp);
    const topsprite = theirmon.sprites.front
    const bottomsprite = yourmon.sprites.back

    const topImgElement = document.getElementById("top-img");
    topImgElement.src = topsprite;

    const bottomImgElement = document.getElementById("bottom-img");
    bottomImgElement.src = bottomsprite;

    const topNameElement = document.getElementById("top-name");
    topNameElement.textContent = theirmon.name;

    const topLvlElement = document.getElementById("top-lvl");
    topLvlElement.innerHTML = `<strong>lvl ${theirmon.level}</strong>`;

    const bottomNameElement = document.getElementById("bottom-name");
    bottomNameElement.textContent = yourmon.name;

    const bottomLvlElement = document.getElementById("bottom-lvl");
    bottomLvlElement.innerHTML = `<strong>lvl ${yourmon.level}</strong>`;

    const bottomHealthFillElement = document.getElementById("bottom-health-fill");
    bottomHealthFillElement.style.width = `${(yourhp / yourmaxhp) * 100}%`;
    const bottomHealthTextElement = document.getElementById("bottom-health-text");
    bottomHealthTextElement.textContent = `${yourhp}/${yourmaxhp}`;

    const topHealthFillElement = document.getElementById("top-health-fill");
    topHealthFillElement.style.width = `${(theirhp / theirmaxhp) * 100}%`;
    const topHealthTextElement = document.getElementById("top-health-text");
    topHealthTextElement.textContent = `${theirhp}/${theirmaxhp}`;
}

function startBattle(yourmon, theirMon) {
    firstRender(yourmon, theirMon)
}
window.startBattle = startBattle;
