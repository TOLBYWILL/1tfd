function $(query) {
    return document.querySelector(query);
}

function $make(def, ...content) {
    if (Array.isArray(content[0])) content = content[0];
    let classes = def.split(".");
    let [tag, id] = classes.splice(0, 1)[0].split("#");
    let node = document.createElement(tag);
    if (id) node.id = id;
    if (classes.length) node.classList.add(...classes);
    node.append(...content);
    return node;
}
function $makeHTML(def, html) {
    let node = $make(def);
    node.innerHTML = html;
    return node;
}

function $icon(source, inline = true) {
    let icon = $make("iconify-icon");
    icon.setAttribute("icon", source);
    if (inline) icon.setAttribute("inline", "");
    return icon;
}

function _icon(source, inline = true) {
    return `<iconify-icon icon="${source}"${inline ? ' inline=""' : ""}></iconify-icon>`;
}

function _number(inside) {
    return `<span class="number">${inside}</span>`;
}


function initUI() {
    elms.currencies = $("#currencies");
    elms.currencies.append(elms.currencies.$cards = createCurrencyUI("cards"));
    let hozHolder;
    elms.currencies.append(hozHolder = $make("div.hoz-group"));
    hozHolder.append(elms.currencies.$points = createCurrencyUI("points"));
    hozHolder.append(elms.currencies.$shreds = createCurrencyUI("shreds"));
    elms.currencies.append(elms.currencies.$factions = hozHolder = $make("div.faction-group"));
    ["fire", "water", "leaf", "sun", "moon"].forEach(x => {
        let elm = elms.currencies["$" + x] = createCurrencyUI(x)
        hozHolder.append(elm);
        elm.$title.innerHTML = _icon(currencies[x].icon);
        elm.classList.add("f-" + x);
    })

    elms.sidebar = $("#sidebar");

    elms.draw = $("#draw-button");
    elms.draw.onclick = onDrawButtonClick;
    elms.draw.$action = $("#draw-button-action");
    elms.draw.$amount = $("#draw-button-amount");
    elms.draw.insertAdjacentElement("afterend", elms.currencies.$energy = createCurrencyUI("energy"));
    elms.draw.$options = $("#draw-options");
    elms.draw.$options.append(elms.draw.$factionPicker = hozHolder = createChoiceGroup({
        "": $icon("tabler:circle-dashed"),
        "fire": $icon(currencies.fire.icon),
        "water": $icon(currencies.water.icon),
        "leaf": $icon(currencies.leaf.icon),
        "sun": $icon(currencies.sun.icon),
        "moon": $icon(currencies.moon.icon),
    }, game.drawPref.faction, (x) => {
        game.drawPref.faction = x;
        saveGame();
    }))
    hozHolder.classList.add("faction-picker");
    ["fire", "water", "leaf", "sun", "moon"].forEach((x, i) => {
        hozHolder.childNodes[i + 1].classList.add("f-" + x);
    });
    ["no", "fire", "water", "leaf", "sun", "moon"].forEach((x, i) => {
        registerTooltip(hozHolder.childNodes[i], tooltipTemplates.text(() => str.common.switch[x]()));
    });

    elms.draw.$hint = $("#start-hint");
    elms.draw.$hint.style.display = "none";
    elms.draw.$hint.onclick = () => {elms.draw.$hint.style.display = "none"};

    elms.draw.$options.append(elms.draw.$skills = $make("div.skill-holder"));
    ["fire", "water", "leaf", "sun", "moon"].forEach((x, i) => {
        let btn = elms.draw.$skills["$" + x] = $make("button")
        elms.draw.$skills.append(btn);
        btn.onclick = () => {
            if (prefersNoTooltips()) {
                if (hasCard("standard", "ssr", "s_" + x)) callPopup("skill", x);
            } else activateSkill(x);
        }
        btn.append(btn.$icon = $icon("tabler:lock"));
        registerTooltip(btn, tooltipTemplates.skill(x));
    });

    let btn = $make("button#draw-opt-show", $icon("tabler:chevron-right"));
    btn.onclick = () => elms.sidebar.classList.add("option-active");
    elms.draw.insertAdjacentElement("afterend", btn);
    btn = $make("button#draw-opt-hide", $icon("tabler:chevron-left"));
    btn.onclick = () => elms.sidebar.classList.remove("option-active");
    hozHolder.prepend(btn);

    elms.tooltip = $("#tooltip");
    elms.notifs = $("#notifs");

    elms.tab = $("#tab-content");
    elms.tab.$buttons = $("#tab-buttons");
    initTabs();
    updateVerb();
}

function updateStartHint() {
    elms.draw.$hint.innerHTML = "";
    if (navigator.standalone === false) {
        elms.draw.$hint.style.display = "";
        elms.draw.$hint.innerHTML += `
            <h4>${str.common.hint_ios_title()}</h4>
            ${str.common.hint_ios_desc(_icon("ion:share-outline"))}
        `
    }
    if (game.stats.cardsDrawn == 0) {
        elms.draw.$hint.style.display = "";
        if (elms.draw.$hint.innerHTML) elms.draw.$hint.innerHTML += "<hr>";
        elms.draw.$hint.innerHTML += `
            <h3>${verbify(str.common.hint_title(_number(format.decimal(1e12))))}</h3>
            ${verbify(str.common.hint_desc())}
        `
    }

}

function createCurrencyUI(id) {
    let currency = currencies[id];
    let title = $make("span", str.currencies[id].name());
    let amount = $make("span", 0);

    let div = $make("div.currency", title, amount);
    div.$title = title;
    div.$amount = amount;

    registerTooltip(div, tooltipTemplates.currency(id));
    div.onclick = () => {
        if (prefersNoTooltips()) callPopup("currency", id);
    }

    return div;
}

function createCardUI(pack, rarity, id) {
    let data = cards[pack][rarity][id];
    let i18n = str.cards[pack][rarity][id];

    let div = $make("article.game-card");
    div.setAttribute("rarity", rarity);
    if (data.faction) div.classList.add("f-" + data.faction);

    if (game.option.cardImages) {
        let img = div.$img = $make("img");
        if (data.noImage) {
            img.src = "res/cards/placeholder.png";
        } else {
            img.src = `res/cards/${pack}/${rarity}_${id}.png`;
            img.onerror = () => {
                img.src = "res/cards/placeholder.png";
                data.noImage = true;
                delete img.onerror;
            };
        }
        div.append(img);
    }
    let name = div.$name = $make("div.game-card-name");
    name.innerHTML = `<rarity rarity="${rarity}"></rarity> ${i18n.name()}`;
    div.append(name);

    let stars = div.$stars = $make("div.game-card-stars");
    if (data.crown) stars.classList.add("crown");
    div.append(stars);

    div.update = () => {
        let state = game.cards[pack]?.[rarity]?.[id];
        let starsHTML = "";
        if (!state) {
            starsHTML = "";
        } else if (data.crown) {
            starsHTML = _icon("ph:crown-fill");
        } else {
            starsHTML = "";
            for (let a = 0; a < 5; a++) {
                starsHTML += _icon(`tabler:star${a < state.stars ? "-filled" : ""}`);
            }
        }
        if (stars.innerHTML != starsHTML) {
            stars.innerHTML = starsHTML;
        }
    }

    return div;
}

function createInfoButton(text) {
    let div = $icon("mingcute:question-line");
    div.classList.add("info-button");
    registerTooltip(div, x => (x.innerHTML = (typeof text == "function" ? text() : text)));
    div.onclick = () => {
        if (prefersNoTooltips()) {
            let popup = callPopup("prompt", "", "");
            popup.$content.style.margin = 0;
            popup.$content.innerHTML = typeof text == "function" ? text() : text;
            popup.$header.remove();
            delete popup.$header;
        }
    }

    return div;
}

function createChoiceGroup(options, value, onChoice) {
    let div = $make("div.choice-group");
    div.value = value;
    let buttons = {};

    function set(value) {
        div.value = value;
        update(value);
        onChoice(value);
    }

    function update(value) {
        for (let btn in buttons) {
           buttons[btn].disabled = btn == value;
        }
    }

    for (const opt in options) {
        let btn = $make("button", options[opt]);
        btn.onclick = () => set(opt);
        buttons[opt] = btn;
        div.append(btn);
    }

    div.scrollToChoice = () => {
        let value = div.value;
        console.log(value);
        if (buttons[value]) {
            let divRect = div.getBoundingClientRect();
            let btnRect = buttons[value].getBoundingClientRect();
            div.scrollTo({ left: (btnRect.left + btnRect.right - divRect.width) / 2 - divRect.left });
            console.log(divRect, btnRect);
        }
    }

    update(value);
    return div;
}

/** @type {RegExp} */
let verbRegex = null;
/** @param {string} str  */
function verbify(str) {
    return str.replace(verbRegex, (string, ...args) => {
        return getVerb(args[0]);
    })
}
function getVerb(verb) {
    let verbs = i18nStrings[game.option.language].verbs;
    let v = verbs[game.option.verb][verb.toLowerCase()];
    if (verb[0].toUpperCase() == verb[0]) {
        v = v[verb[1].toUpperCase() == verb[1] ? "toUpperCase" : "toTitleCase"]();
    }
    return v;
}

function updateVerb() {
    let verb = game.option.verb;
    let verbs = i18nStrings[game.option.language].verbs;
    let regex = `{(${Object.keys(verbs[verb]).join("|")})}`;
    verbRegex = new RegExp(regex, "gi");

    document.title = verbify(str.common.title());
    updateStartHint();
}