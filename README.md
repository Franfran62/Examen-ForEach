# [Examen Foreach - Les Excuses de Dev]

## À propos

Voici mon projet pour l'examen Bachelor externe d'entrée à l'école ForEach Academy. 

Il s'agit d'un générateur de phrase "Excuses de Dev" pour faire patienter les utilisateurs.

Vous pouvez retrouver ce projet en ligne à l'adresse suivante : 

https://www.examen-foreach.francoiskukla.fr/

## Table des matières

- 🪧 [À propos](#à-propos)
- 📦 [Prérequis](#prérequis)
- 🚀 [Installation](#installation)
- 🛠️ [Utilisation](#utilisation)
- 🏷️ [Annexes](#Annexes)

## 📦 Prérequis

 - L'éditeur de code de votre choix. Notez que pour  l'installation, nous utiliserons l'exemple de  VisualStudioCode : 
https://code.visualstudio.com/download

 - Git installé sur sa machine : https://learn.microsoft.com/fr-fr/devops/develop/git/install-and-set-up-git

 - PHP dans sa version 8.0.8 ou ultérieur : https://www.php.net/manual/fr/install.php

 - PHPMyAdmin dans sa version 5.1.1 ou ultérieure : https://www.phpmyadmin.net/downloads/

 - Serveur web local type WAMP/MAMP : 
    - https://www.wampserver.com
    - https://www.mamp.info/en/downloads/

    *L'application reprends les codes pour un serveur Apache, il est important que votre serveur local soit configuré en Apache pour le bon fonctionnement de cette dernière. Pour la suite des instructions, nous utiliserons l'exemple avec MAMP*

- MySQL dans sa version 5.7 ou ultérieure :https://dev.mysql.com/downloads/installer/

    *Il est necessaire au bon fonctionnement de relier l'application à votre base de donnée. Pour ce faire, connaitre vos informations de connection est essentiel et propre à vous-même.*


## 🚀 Installation

### Télécharger l'application 

- Lancez l'application MAMP et vérifier que la configuration Web Server est bien sur : Apache.
- Ouvrez Visual Studio Code, et ouvrez le dossier indiqué comme "Document Root" depuis l'application MAMP (souvent nommé à l'installtion "htdocs")
- Ouvrez un terminal de commande dans ce dossier via VSCode (Terminal > Nouveau Terminal), et tapez la commande suivante : 
"git clone https://github.com/Franfran62/Examen-ForEach.git".

### Préparer votre base de données

- Depuis MAMP, cliquez sur WebStart. Une fois la page chargée, accéder à PHPMyAdmin depuis la barre de navigation Tools > PhpMyAdmin
- Depuis la barre de navigation de PHPMyAdmin, selectionner SQL, et collez-y le contenu du fichier database.sql téléchargé precedemment et cliquez sur Executer

### Préparer votre application 

- Dans VSCode,ouvrez Appli/API/config/database.php et modifiez la valeur des variables $host, $username, $password avec vos données de connection à votre PhpMyAdmin respectif. 

    *Pour connaitre ses informations, direction la page d'accueil de MAMP, puis cliquez sur "MySql"*

### Lancer l'application 

- Depuis MAMP aller dans My Website > examen-foreach > appli
- Depuis votre barre de navigation : VOTRE_RESEAU_LOCAL/examen-foreach/Appli/

*Par défaut à l'installation de MAMP, votre réseau local est http://localhost:8888*



## 🛠️ Utilisation

Vous pouvez retrouvez les URL disponible directement ci-dessous : 

/examen-foreach/Appli/creer : pour ajouter une nouvelle phrase 
/examen-foreach/Appli/voir : voir toutes les phrases enregistrées en Base de données 
/examen-foreach/Appli/perdu : Etre redirigé vers la page d'accueil
/examen-foreach/Appli/${http_code}

{http_code} : Vous pouvez saisir un nombre correspondant au HTTP_code que vous osuhaitez voir

## 🏷️ Annexes


Vous pouvez retrouver dans le dossier /Annexes, la charte graphique du projet ainsi que les résultats de perfomance de l'application déployer sous OVH

### Langages & Frameworks

- Javascript 
- PHP 8.0.8
- HTML / CSS

Fonts from GoogleFonts


### Licence

Cette application à été entièrement réalisée par François KUKLA. Pour toute utilisation sur un serveur non local, merci de bien vouloir me contacter via mon Linkedin 

https://fr.linkedin.com/in/françois-kukla-23742b207

