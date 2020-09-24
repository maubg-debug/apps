import firebase from 'firebase';

class Fire {
    constructor() {
        this.init()
        this.checkAuth()
    }

    init = () => {
        if (!firebase.app.lenght) {
            firebase.initializeApp({
                apiKey: "AIzaSyDEvQhyxlf9MlFXA3Ll62eN5NB2dhLVeYg",
                authDomain: "mauchat-1d06d.firebaseapp.com",
                databaseURL: "https://mauchat-1d06d.firebaseio.com",
                projectId: "mauchat-1d06d",
                storageBucket: "mauchat-1d06d.appspot.com",
                messagingSenderId: "394092665540",
                appId: "1:394092665540:web:2e3cf387845c301fa04791",
                measurementId: "G-1WVFJ7GZ7R"                 
            });
        }
    };
    // Checkeamos si esta dentro
    // Si por alguna razon no lo esta
    // Que entre anonima mente
    checkAuth = () => {
        firebase.auth().onAuthStateChanged(user => {
            if (!user) {
                firebase.auth().signInAnonymously();
            }
        });
    };

    // Ponemos los mensages en la base de datos
    send = messages => {
        messages.forEach(item => {
            const message = {
                text: item.text,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                user: item.user
            }
            // Le hacemos un 'push'
            this.db.push(message)
        });
    };

    parse = message => {
        // Mensage = input del usuario
        const {user, text, timestamp} = message.val()
        const {key: _id} = message
        const createdAt = new Date(timestamp)

        return {
            _id,
            createdAt,
            text, 
            user
        };
    };

    get = callback => {
        this.db.on('child_added', snapshot => callback(this.parse(snapshot)));
    };

    off() {
        // Nos desconectamos de la base de datos
        this.db.off()
    }

    get db() {
        return firebase.database().ref("messages")
    }

    get uid() {
        return (firebase.auth().currentUser || {}).uid
    }
}


export default new Fire();
