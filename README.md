<p align="center"><img width="250" alt="Pronote GUI" src="gui/images/icon.png"></a></p>
<p align="center"><strong>Pronote GUI</strong> is useful for students wanting quick access to <strong>Pronote</strong></p>
<br/>


<h2 align="center">Pronote GUI</h2>

<h4 align="center">** With NodeJs and Python **</h4>
<br/>
<br/>

## Don't forget to change the "ent.json" file with your information


- You can use "mobile.eleve.html" at the end of "pronoteUrl" for an easier to use app, but if you want a web browser theme app, you can just use "eleve.html". And for "cookiesUrl" you must put the url that will receive your session cookies to connect to pronote
- Example:

```json
{
    "pronoteUrl": "https://demo.index-education.net/pronote/mobile.eleve.html",
    "cookiesUrl": "https://ent.l-educdenormandie.fr" 
}
```

## Note

This project uses [Node](https://nodejs.org/en/download/)

## Dependenices for Node

- NodeJS
- Electron   
- Python
- Python-Shell

## Dependenices for Python

- requests
- BeautifulSoup  
- a part of Pronotepy

## Usage

Clone the repo, and then

- `cd PronoteGUI/`
- `pip install -r requirements.txt`
- `npm install`
- `npm start`
