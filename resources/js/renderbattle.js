function firstRender(yourmon, theirmon) {
    let yourhp = yourmon.currenthp;
    const yourmaxhp = yourmon.maxhp;
    let theirhp = theirmon.currenthp;
    const theirmaxhp = theirmon.maxhp;
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

    const bottomHealthFillElement = document.getElementById("top-health-fill");
    bottomHealthFillElement.style.width = `${(yourhp / yourmaxhp) * 80}%`;
    const bottomHealthTextElement = document.getElementById("top-health-text");
    bottomHealthTextElement.textContent = `${yourhp}/${yourmaxhp}`;

    const topHealthFillElement = document.getElementById("bottom-health-fill");
    topHealthFillElement.style.width = `${(theirhp / theirmaxhp) * 80}%`;
    const topHealthTextElement = document.getElementById("bottom-health-text");
    topHealthTextElement.textContent = `${theirhp}/${theirmaxhp}`;
}
