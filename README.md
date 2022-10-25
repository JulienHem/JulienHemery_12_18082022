## SportSee 
![alt text](https://github.com/JulienHem/JulienHemery_12_18082022/blob/master/src/assets/logo.svg)

## API

Veillez à bien fork le back du proje afin d'avoir les données 

> [https://github.com/OpenClassrooms-Student-Center/P9-front-end-dashboard](https://github.com/JulienHem/P9-front-end-dashboard)

## Initialiser le projet

> npm install 

## Lancer le projet

Ouvre votre console, allez dans le dossier de votre API et faites

> npm start 

L'API sera lancée sur `http://localhost:3000/` 

Ensuite rendez-vous dans le dossier du Front et lancez

> npm install

Et lancez le projet 

> npm run start

Le projet sera lancé sur `http://localhost:3001`
Veillez à bien lancer le projet suite au npm run start 

## Routes API

- `http://localhost:3000/user/${userId}` - Toutes les informations de l'utilisateur.
- `http://localhost:3000/user/${userId}/activity` - Récupère l'activité de l'utilisateur jour par jour.
- `http://localhost:3000/user/${userId}/average-sessions` - Pour une moyenne des sessions par jour, la semaine commence à Lundi.
- `http://localhost:3000/user/${userId}/performance` - Récupère la performance de l'utilisateur (énergie, endurance, etc...)
