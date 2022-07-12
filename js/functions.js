export const getBrownEyedHeroNames = heroes => {
    const brownEyedHeroes = heroes.filter(hero => hero.appearance.eyeColor === "Brown");
    return brownEyedHeroes.map(hero => hero.name);
}

export const getHeroSlugWith4Aliases = heroes => {
    const heroesWith4Aliases = heroes.filter(hero => hero.biography.aliases.length >= 4);
    return heroesWith4Aliases.map(hero => hero.slug);
}

export const getDarkHorseComicHeroes = heroes => {
    return heroes.filter(hero => hero.biography.publisher === "Dark Horse Comics");
}

export const getTeamCount = (heroes, team) => {
    let numHeroes = 0;
    heroes.forEach(hero => {
        hero.teams.find(t => {
            if (t === team) {
                numHeroes++;
                return true;
            } return false;
        })
    });
    return numHeroes;
}

export const getHeroesByRace = (heroes, race) => {
    const heroesOfRace = heroes.filter(hero => {
        const element = hero.appearance.race.find(r => r === race);
        return element;  // from previous programming experience, undefined should be falsy, and other stuff should be truthy
    });

    return heroesOfRace.map(hero => hero.name);
}

export const getHeroesBasedOnSpeed = (heroes, speedRange) => {
    const [min, max] = speedRange;
    const heroesInRange = heroes.filter(hero => {
        return (hero.powerstats.speed >= min) && (hero.powerstats.speed <= max);
    });
    return heroesInRange.map(hero => hero.name);
}