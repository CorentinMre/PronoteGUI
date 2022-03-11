<p align="center"><img width="250" alt="Pronote GUI" src="gui/images/icon.png"></a></p>
<p align="center"><strong>Pronote GUI</strong> est une application de bureau pour vous connecter à <strong>Pronote</strong>.<br>Utile pour les étudiants voulant un accès rapide à <strong>Pronote</strong>.</p>
<br/>


<h2 align="center">Pronote GUI</h2>

<h4 align="center">** Avec <a target="_blank" href="https://nodejs.org/fr/download/">NodeJs</a> et <a target="_blank" href="https://www.python.org/">Python</a> **</h4>
<br/>
<br/>

## N'oubliez pas de modifier le fichier "ent.json" avec vos informations

- Vous pouvez utiliser `mobile.eleve.html` à la fin de `pronoteUrl` pour une application plus facile à utiliser, mais si vous voulez une application de thème de navigateur Web, vous pouvez simplement utiliser `eleve.html`. Pour `cookiesUrl` vous devez mettre l'url qui recevra vos cookies de session pour vous connecter à pronote. Et `function_on_ent_py` est le nom de la fonction à utiliser dans le fichier `engine/ent.py`
- Exemple:

```json
{
    "pronoteUrl": "https://demo.index-education.net/pronote/mobile.eleve.html",
    "cookiesUrl": "https://ent.l-educdenormandie.fr",
    "function_on_ent_py": "l_normandie"
}
```

## Dépendances pour NodeJs

- NodeJS
- Electron   
- Python
- Python-Shell

## Dépendances pour Python

- requests
- BeautifulSoup  
- a part of Pronotepy

## Usage

Clonez le repo, puis

- `cd PronoteGUI/`
- `pip install -r requirements.txt`
- `npm install`
- `npm start`

Et si vous voulez créer un exécutable :

- `npm run build-win` pour Windows
- `npm run build-linux` pour Linux
- `npm run build-mac` pour Mac
