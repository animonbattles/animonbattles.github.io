// Made by Bjarnos, exclusively for Animon Battles, reuse of any kind is not allowed
console.log("IndexedDB script loaded.");

function initDB(datastore) {
    return new Promise((resolve, reject) => {
        const request = indexedDB.open(datastore, 1);

        request.onupgradeneeded = function (event) {
            const db = event.target.result;
            if (!db.objectStoreNames.contains(datastore)) {
                const objectStore = db.createObjectStore(datastore, { keyPath: 'name' });
                objectStore.createIndex('level', 'level', { unique: false });
                objectStore.createIndex('att', 'att', { unique: false });
            }
        };

        request.onsuccess = function (event) {
            resolve(event.target.result);
        };

        request.onerror = function (event) {
            reject('Database error: ' + event.target.errorCode);
        };
    });
}

function saveDataStore(datastore, key, value) {
    initDB(datastore).then(db => {
        const transaction = db.transaction(datastore, 'readwrite');
        const objectStore = transaction.objectStore(datastore);

        objectStore.put({ name: key, ...value });

        transaction.onerror = (event) => {
            console.error(`Error saving data for ${key}: `, event.target.error);
        };
    }).catch(error => console.error(error));
}

function removeDataStore(datastore, key) {
    initDB(datastore).then(db => {
        const transaction = db.transaction(datastore, 'readwrite');
        const objectStore = transaction.objectStore(datastore);

        objectStore.delete(key);

        transaction.onerror = (event) => {
            console.error(`Error removing ${key}: `, event.target.error);
        };
    }).catch(error => console.error(error));
}

async function getDataStore(datastore, key) {
    try {
        const db = await initDB(datastore);
        const transaction = db.transaction(datastore, 'readonly');
        const objectStore = transaction.objectStore(datastore);

        return new Promise((resolve, reject) => {
            const request = objectStore.get(key);

            request.onsuccess = () => {
                if (request.result) {
                    resolve(request.result);
                } else {
                    console.log(`${key} not found`);
                    resolve(null);  // Return null if the key is not found
                }
            };

            request.onerror = (event) => {
                console.error(`Error getting ${key}: `, event.target.error);
                reject(event.target.error);
            };
        });
    } catch (error) {
        console.error(error);
        throw error;
    }
}
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
