Notes from fundamentals Firebase

Cloned repository from rockeatseat https://github.com/rocketseat-education/myshopping-rn-ignite

Renamed following steps from https://github.com/m4v0/RNChangeNameApp

Installed firebase packages

yarn add @react-native-firebase/app

configurando  firebase android

gerada chave
cd android && ./gradlew signingReport

copiada a chave SHA1 da variant "debugAndroidTest"

fazer em seguida download do json e colocar na raiz da pasta Android/app do projeto

depois no arquivo android/build.gradle adiciona em dependencies - 
        classpath("com.google.gms:google-services:4.3.10")

em seguida, dentro de android/app/build.gradle adiciona no topo
apply plugin: "com.google.gms.google-services"

no mesmo arquivo em dependencies adiciona

implementation platform('com.google.firebase:firebase-bom:30.1.0')
implementation "com.google.firebase:firebase-analytics"


// Cloud Firestore Banco de dados no NoSQL (no sequel)

// Criando banco de dados Firestore
- Firestore Database
- Criar banco de dados
- iniciar modo de teste

// Instalação firestore no app

yarn add @react-native-firebase/firestore

//Emulador Firebase: intruções em:
https://rnfirebase.io/firestore/emulator

// Instalação Emulador

curl -sL firebase.tools | bash

// Inicializando o emulador
firebase emulators:start --only firestore

// Configurar no arquivo index.js
import '@react-native-firebase/app';
import firestore from '@react-native-firebase/firestore';

...

if (__DEV__) {
  firestore().useEmulator('localhost', 8080);
}

const db = firestore();

//com essas configurações se o emulador estiver online ele será utilizado e não o ambiente de produção.


// Utilizando o Storage do firebase
// Instruções no site:
//https://rnfirebase.io/storage/usage

// Instalar o react native firebase storage
yarn add @react-native-firebase/storage

