import Realm from 'realm';


const LogSchema = {
    name: 'Log',
    properties: {
        timestamp: "string",
        key: "string",
        data: "string?"
    }
}

let db = null;

const open = async () => {
    if (db !== null) {
        return db;
    }
    db = await Realm.open({
        path: "logdev",
        schema: [LogSchema]
    });
    return db;
}

const close = () => {
    if (db) {
        db.close();
        db = null;
    }
}

const addDevLog = async (log) => {
    let db = await open();
    db.write(() => {
        db.create("Log", {
            timestamp: String(log.time || new Date().getTime()),
            key: log.key,
            data: JSON.stringify(log.data)
        })
    })
    close();
}

const getAllDevLogs = async (success = () => {
}, failure = () => {
}) => {
    try {
        let db = await open();
        let temp = null;
        temp = db.objects('Log')
        success(temp)
        close();
    } catch (e) {
        failure(e)
        close();
    }
}

export {
    open,
    close,
    addDevLog,
    getAllDevLogs,
}